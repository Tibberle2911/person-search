import { createMcpHandler } from 'mcp-handler'
import { z } from 'zod'
import { searchUsers, addUser, updateUser, deleteUser, getUserById } from '@/app/actions/actions'
import { userFormSchema } from '@/app/actions/schemas'

// Build a proper MCP server using vercel/mcp-handler and reuse existing actions.
const mcpHandler = createMcpHandler(
  (server) => {
    server.tool(
      'search_users',
      'Search users by name prefix (case-insensitive)',
      { query: z.string().default('') },
      async ({ query }) => {
        const results = await searchUsers(query)
        return { content: [{ type: 'text', text: JSON.stringify(results) }] }
      }
    )

    server.tool(
      'get_user_by_id',
      'Get a single user by id',
      { id: z.string().min(1) },
      async ({ id }) => {
        const user = await getUserById(id)
        if (!user) {
          throw new Error('Not found')
        }
        return { content: [{ type: 'text', text: JSON.stringify(user) }] }
      }
    )

    server.tool(
      'add_user',
      'Create a new user (name unique, case-insensitive)',
      userFormSchema.shape,
      async (input) => {
        const created = await addUser(input as typeof userFormSchema['_type'])
        return { content: [{ type: 'text', text: JSON.stringify(created) }] }
      }
    )

    const updateShape = {
      id: z.string().min(1),
      name: userFormSchema.shape.name.optional(),
      email: userFormSchema.shape.email.optional(),
      phoneNumber: userFormSchema.shape.phoneNumber.optional(),
    }
    server.tool(
      'update_user',
      'Update user by id (name unique, case-insensitive)',
      updateShape,
      async (args) => {
        const { id, ...rest } = args as { id: string } & Partial<typeof userFormSchema['_type']>
        const updated = await updateUser(id, rest)
        return { content: [{ type: 'text', text: JSON.stringify(updated) }] }
      }
    )

    server.tool(
      'delete_user',
      'Delete user by id',
      { id: z.string().min(1) },
      async ({ id }) => {
        await deleteUser(id)
        return { content: [{ type: 'text', text: 'ok' }] }
      }
    )
  },
  // Optional server options (e.g. capabilities)
  {
    capabilities: {
      tools: {
        search_users: { description: 'Search users' },
        get_user_by_id: { description: 'Get user by id' },
        add_user: { description: 'Add user' },
        update_user: { description: 'Update user' },
        delete_user: { description: 'Delete user' },
      },
    },
  },
  // Runtime options
  {
    basePath: '/api/mcp',
    maxDuration: 60,
    verboseLogs: true,
  }
)

// Some HTTP clients (e.g., PowerShell Invoke-WebRequest/Invoke-RestMethod) don't send an Accept header
// that includes both application/json and text/event-stream. The MCP handler requires this for content
// negotiation. We normalize the Accept header here to avoid 406 responses.
async function normalizeAndForward(req: Request, _ctx: unknown, method: 'GET' | 'POST') {
  const headers = new Headers(req.headers)
  const accept = (headers.get('accept') || '').toLowerCase()
  const needsJson = !accept.includes('application/json')
  const needsSse = !accept.includes('text/event-stream')

  if (needsJson || needsSse) {
    const merged = [
      accept || undefined,
      needsJson ? 'application/json' : undefined,
      needsSse ? 'text/event-stream' : undefined,
    ]
      .filter(Boolean)
      .join(', ')
    headers.set('accept', merged)
  }

  // Build the URL expected by the MCP handler regardless of incoming path
  const url = new URL(req.url)
  url.pathname = method === 'GET' ? '/api/mcp/sse' : '/api/mcp'

  if (method === 'POST') {
    let body = await req.text()
    // Adapter: accept simplified payloads { tool, input } and convert to MCP JSON-RPC
    try {
      const parsed = body ? JSON.parse(body) : null
      if (parsed && typeof parsed === 'object' && 'tool' in parsed) {
        const name = (parsed as { tool: string }).tool
        const args = (parsed as { input?: unknown }).input ?? {}
        const rpc = {
          jsonrpc: '2.0',
          method: 'tools/call',
          params: { name, arguments: args },
          id: Math.random().toString(36).slice(2),
        }
        body = JSON.stringify(rpc)
        headers.set('content-type', 'application/json')
      }
    } catch {
      // If body isn't JSON, pass through unchanged
    }

    const forwarded = new Request(url.toString(), { method: 'POST', headers, body })
  const res = await mcpHandler(forwarded)

    // Fallback for clients sending valid JSON-RPC the handler didn't accept
    if (res.status === 404) {
      try {
        const payload = body ? JSON.parse(body) : null
        if (payload && typeof payload === 'object' && payload.jsonrpc === '2.0') {
          const id = 'id' in payload ? payload.id : null
          const method = payload.method as string
          if (method === 'initialize') {
            const result = {
              protocolVersion: '2024-11-05',
              capabilities: {
                tools: {
                  search_users: { description: 'Search users' },
                  get_user_by_id: { description: 'Get user by id' },
                  add_user: { description: 'Add user' },
                  update_user: { description: 'Update user' },
                  delete_user: { description: 'Delete user' },
                },
              },
            }
            const cors = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', Vary: 'Origin, Accept' })
            return new Response(JSON.stringify({ jsonrpc: '2.0', id, result }), { status: 200, headers: cors })
          }
          if (method === 'tools/call' && payload.params && typeof payload.params === 'object') {
            const { name, arguments: args } = payload.params as { name: string; arguments?: unknown }
            const argsObj: Record<string, unknown> = args && typeof args === 'object' ? (args as Record<string, unknown>) : {}
            const asString = (v: unknown, def = '') => (typeof v === 'string' ? v : v != null ? String(v) : def)
            const tool = String(name)
            let data: unknown
            if (tool === 'search_users') {
              const q = asString(argsObj['query'], '')
              data = await searchUsers(q)
            } else if (tool === 'get_user_by_id') {
              const idArg = asString(argsObj['id'], '')
              const u = await getUserById(idArg)
              if (!u) throw new Error('Not found')
              data = u
            } else if (tool === 'add_user') {
              data = await addUser({
                name: asString(argsObj['name'], ''),
                email: asString(argsObj['email'], ''),
                phoneNumber: asString(argsObj['phoneNumber'], ''),
              })
            } else if (tool === 'update_user') {
              const idArg = asString(argsObj['id'], '')
              const patch: Record<string, unknown> = {}
              if (Object.prototype.hasOwnProperty.call(argsObj, 'name')) patch.name = asString(argsObj['name'])
              if (Object.prototype.hasOwnProperty.call(argsObj, 'email')) patch.email = asString(argsObj['email'])
              if (Object.prototype.hasOwnProperty.call(argsObj, 'phoneNumber')) patch.phoneNumber = asString(argsObj['phoneNumber'])
              data = await updateUser(idArg, patch)
            } else if (tool === 'delete_user') {
              const idArg = asString(argsObj['id'], '')
              await deleteUser(idArg)
              data = 'ok'
            } else {
              throw new Error(`Unknown tool: ${tool}`)
            }
            const result = { content: [{ type: 'text', text: JSON.stringify(data) }] }
            const cors = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', Vary: 'Origin, Accept' })
            return new Response(JSON.stringify({ jsonrpc: '2.0', id: payload.id ?? null, result }), { status: 200, headers: cors })
          }
        }
      } catch {
        // fall through
      }
    }
    const cors = new Headers(res.headers)
    cors.set('Access-Control-Allow-Origin', '*')
    cors.set('Vary', 'Origin, Accept')
    return new Response(res.body, { status: res.status, headers: cors })
  }

  // GET (SSE)
  const hasRedis = Boolean(
    process.env.REDIS_URL ||
      process.env.UPSTASH_REDIS_REST_URL ||
      process.env.KV_REST_API_URL
  )
  if (!hasRedis) {
    const cors = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Vary': 'Origin, Accept',
    })
    const error = {
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message:
          'SSE transport is disabled on this deployment. Use POST /api/mcp (HTTP) instead.',
      },
      id: null,
    }
    return new Response(JSON.stringify(error), { status: 405, headers: cors })
  }
  const forwarded = new Request(url.toString(), { method: 'GET', headers })
  const res = await mcpHandler(forwarded)
  const cors = new Headers(res.headers)
  cors.set('Access-Control-Allow-Origin', '*')
  cors.set('Vary', 'Origin, Accept')
  return new Response(res.body, { status: res.status, headers: cors })
}

export const POST = (req: Request, ctx: unknown) => normalizeAndForward(req, ctx, 'POST')
export const GET = (req: Request, ctx: unknown) => normalizeAndForward(req, ctx, 'GET')

// Handle CORS preflight generically
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Max-Age': '600',
    },
  })
}

