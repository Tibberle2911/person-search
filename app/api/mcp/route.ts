import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { addUser, updateUser, deleteUser, searchUsers, getUserById, listUsers } from '@/app/actions/actions'
import { userSchema, userFormSchema } from '@/app/actions/schemas'

// Minimal MCP-over-HTTP handler inspired by vercel/mcp-handler roll-dice pattern
// Supports JSON-RPC 2.0 methods: initialize, tools/list, tools/call

type Json = Record<string, unknown>

// Allow optional/empty query to support "list all" via empty prefix
const SearchInput = z.object({ query: z.string().default('').optional() })
const IdInput = z.object({ id: z.string().min(1) })
const UpdateInput = userSchema.pick({ id: true }).merge(userFormSchema.partial())
const ListInput = z.object({ offset: z.number().int().min(0).optional(), limit: z.number().int().min(1).max(10000).optional() })

type Tool = {
  name: string
  description: string
  // JSON Schema for input
  inputSchema: Json
  handler: (args: unknown) => Promise<unknown>
}

const tools: Tool[] = [
  {
    name: 'search_users',
    description: 'Search users by name prefix (case-insensitive)',
    inputSchema: {
      type: 'object',
      properties: { query: { type: 'string' } },
      additionalProperties: false,
    },
    async handler(args) {
      const { query = '' } = SearchInput.parse(args)
      return await searchUsers(query)
    },
  },
  {
    name: 'get_user_by_id',
    description: 'Get a single user by id',
    inputSchema: {
      type: 'object',
      properties: { id: { type: 'string', minLength: 1 } },
      required: ['id'],
      additionalProperties: false,
    },
    async handler(args) {
      const { id } = IdInput.parse(args)
      return await getUserById(id)
    },
  },
  {
    name: 'add_user',
    description: 'Create a new user (name unique, case-insensitive)',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', minLength: 2 },
        email: { type: 'string', format: 'email' },
        phoneNumber: { type: 'string', pattern: '^04\\d{8}$' },
      },
      required: ['name', 'email', 'phoneNumber'],
      additionalProperties: false,
    },
    async handler(args) {
      const data = userFormSchema.parse(args)
      return await addUser(data)
    },
  },
  {
    name: 'update_user',
    description: 'Update user by id (name unique, case-insensitive)',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'string', minLength: 1 },
        name: { type: 'string', minLength: 2 },
        email: { type: 'string', format: 'email' },
        phoneNumber: { type: 'string', pattern: '^04\\d{8}$' },
      },
      required: ['id'],
      additionalProperties: false,
    },
    async handler(args) {
      const { id, ...partial } = UpdateInput.parse(args)
      return await updateUser(id, partial)
    },
  },
  {
    name: 'delete_user',
    description: 'Delete user by id',
    inputSchema: {
      type: 'object',
      properties: { id: { type: 'string', minLength: 1 } },
      required: ['id'],
      additionalProperties: false,
    },
    async handler(args) {
      const { id } = IdInput.parse(args)
      await deleteUser(id)
      return { ok: true }
    },
  },
  {
    name: 'list_users',
    description: 'List users with optional pagination (default limit 1000)',
    inputSchema: {
      type: 'object',
      properties: {
        offset: { type: 'integer', minimum: 0 },
        limit: { type: 'integer', minimum: 1, maximum: 10000 },
      },
      additionalProperties: false,
    },
    async handler(args) {
      const { offset = 0, limit = 1000 } = ListInput.parse(args ?? {})
      return await listUsers({ offset, limit })
    },
  },
]

function withCors(res: NextResponse) {
  res.headers.set('Access-Control-Allow-Origin', '*')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept')
  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.headers.set('Access-Control-Expose-Headers', 'Content-Type')
  return res
}

export async function OPTIONS() {
  return withCors(NextResponse.json({ ok: true }))
}

export async function GET() {
  // SSE not implemented in this lightweight handler
  return withCors(
    NextResponse.json({
      jsonrpc: '2.0',
      error: { code: -32601, message: 'GET not supported; use POST tools/list or tools/call' },
    })
  )
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''
    const isJson = contentType.includes('application/json')
    let body: unknown = null
    if (isJson) {
      body = await req.json()
    } else {
      try {
        const text = await req.text()
        body = text ? JSON.parse(text) : null
      } catch {
        body = null
      }
    }

    // Adapter: simple { tool, input } shape
    if (body && typeof body === 'object' && 'tool' in body) {
      const { tool, input } = body as { tool?: string; input?: unknown }
      if (!tool) throw new Error('Missing tool')
      return await handleToolsCall({ id: null, name: tool, args: input ?? {} })
    }

    // JSON-RPC 2.0
    if (body && typeof body === 'object' && 'method' in body) {
      const { id = null, method, params } = body as { id?: string | number | null; method: string; params?: unknown }
      if (method === 'initialize') {
        return withCors(
          NextResponse.json({
            jsonrpc: '2.0',
            id,
            result: {
              protocolVersion: '2024-11-05',
              serverInfo: { name: 'person-search-mcp', version: '0.1.0' },
              capabilities: { tools: {} },
            },
          })
        )
      }
      // Some MCP clients send a notification after initialize; acknowledge it with 200
      if (method === 'notifications/initialized') {
        return withCors(
          NextResponse.json({ jsonrpc: '2.0', id: null, result: null })
        )
      }
      // Optional ping handler for robustness
      if (method === 'ping') {
        return withCors(NextResponse.json({ jsonrpc: '2.0', id, result: 'pong' }))
      }
      if (method === 'tools/list') {
        return withCors(
          NextResponse.json({
            jsonrpc: '2.0',
            id,
            result: {
              tools: tools.map((t) => ({ name: t.name, description: t.description, inputSchema: t.inputSchema })),
            },
          })
        )
      }
      if (method === 'tools/call') {
        const p = (params ?? {}) as Record<string, unknown>
        const name = p.name as string
        const args = (p.arguments ?? {}) as unknown
        return await handleToolsCall({ id, name, args })
      }
      return withCors(
        NextResponse.json({ jsonrpc: '2.0', id, error: { code: -32601, message: `Method ${String(method)} not found` } })
      )
    }

    // Unknown body: return JSON-RPC error over HTTP 200 so agents always get the body
    return withCors(
      NextResponse.json({ jsonrpc: '2.0', id: null, error: { code: -32600, message: 'Unsupported request. Use JSON-RPC or { tool, input }.' } })
    )
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return withCors(
      NextResponse.json(
        { jsonrpc: '2.0', error: { code: -32000, message }, data: { details: message } },
        { status: 400 }
      )
    )
  }
}

async function handleToolsCall({ id, name, args }: { id: string | number | null; name: string; args: unknown }) {
  const tool = tools.find((t) => t.name === name)
  if (!tool) {
    return withCors(
      NextResponse.json({ jsonrpc: '2.0', id, error: { code: -32601, message: `Tool ${name} not found` } })
    )
  }
  try {
    const result = await tool.handler(args)
    const text = safeStringify(result)
    return withCors(
      NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          content: [
            { type: 'text', text },
            { type: 'json', json: result },
          ],
        },
      })
    )
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return withCors(
      NextResponse.json({
        jsonrpc: '2.0',
        id,
        result: {
          content: [
            {
              type: 'text',
              text: message,
            },
          ],
          isError: true,
        },
      })
    )
  }
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2)
  } catch {
    return String(value)
  }
}
