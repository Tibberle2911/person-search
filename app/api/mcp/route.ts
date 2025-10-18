import { createMcpHandler } from 'mcp-handler'
import { z } from 'zod'
import { searchUsers, addUser, updateUser, deleteUser, getUserById } from '@/app/actions/actions'
import { userFormSchema } from '@/app/actions/schemas'

// Dedicated MCP server bound to /api/mcp to avoid dynamic route ambiguity on some hosts.
const handler = createMcpHandler(
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
				if (!user) throw new Error('Not found')
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
	{ capabilities: { tools: {
		search_users: { description: 'Search users' },
		get_user_by_id: { description: 'Get user by id' },
		add_user: { description: 'Add user' },
		update_user: { description: 'Update user' },
		delete_user: { description: 'Delete user' },
	} } },
	{ basePath: '/api/mcp', maxDuration: 60, verboseLogs: true }
)

function withCors(res: Response) {
	const headers = new Headers(res.headers)
	headers.set('Access-Control-Allow-Origin', '*')
	headers.set('Vary', 'Origin, Accept')
	return new Response(res.body, { status: res.status, headers })
}

async function adaptPostBody(req: Request) {
	const headers = new Headers(req.headers)
	let body = await req.text()
	try {
		const parsed = body ? JSON.parse(body) as unknown : null
		if (parsed && typeof parsed === 'object' && parsed !== null && 'tool' in parsed) {
			const p = parsed as { tool: string; input?: unknown }
			const rpc = {
				jsonrpc: '2.0',
				method: 'tools/call',
				params: { name: p.tool, arguments: p.input ?? {} },
				id: Math.random().toString(36).slice(2),
			}
			body = JSON.stringify(rpc)
			headers.set('content-type', 'application/json')
		}
	} catch {
		// pass-through
	}
	return { body, headers }
}

export async function POST(req: Request) {
	// Normalize Accept
	const headers = new Headers(req.headers)
	const accept = (headers.get('accept') || '').toLowerCase()
	if (!accept.includes('application/json')) headers.set('accept', [accept, 'application/json'].filter(Boolean).join(', '))
	const { body, headers: hdrs } = await adaptPostBody(new Request(req.url, { method: 'POST', headers, body: await req.text() }))

	// Use handler; if 404, provide minimal fallback for initialize/tools/call
	const forwarded = new Request(req.url, { method: 'POST', headers: hdrs, body })
		const res = await handler(forwarded)
		if (res.status === 404) {
		try {
				const payloadUnknown: unknown = body ? JSON.parse(body) : null
				if (
					payloadUnknown &&
					typeof payloadUnknown === 'object' &&
					(payloadUnknown as Record<string, unknown>).jsonrpc === '2.0'
				) {
					const payload = payloadUnknown as { jsonrpc: '2.0'; id?: unknown; method?: unknown }
					const id = 'id' in payload ? (payload as Record<string, unknown>).id : null
					if (payload.method === 'initialize') {
					const result = { protocolVersion: '2024-11-05', capabilities: { tools: {
						search_users: { description: 'Search users' },
						get_user_by_id: { description: 'Get user by id' },
						add_user: { description: 'Add user' },
						update_user: { description: 'Update user' },
						delete_user: { description: 'Delete user' },
					} } }
					const cors = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', Vary: 'Origin, Accept' })
						return new Response(JSON.stringify({ jsonrpc: '2.0', id: id ?? null, result }), { status: 200, headers: cors })
				}
			}
		} catch { /* ignore */ }
	}
	return withCors(res)
}

export async function GET(req: Request) {
	// If SSE is not configured, provide clear error
	const hasRedis = Boolean(process.env.REDIS_URL || process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL)
	if (!hasRedis) {
		const cors = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', Vary: 'Origin, Accept' })
		const error = { jsonrpc: '2.0', error: { code: -32000, message: 'SSE transport is disabled on this deployment. Use POST /api/mcp (HTTP) instead.' }, id: null }
		return new Response(JSON.stringify(error), { status: 405, headers: cors })
	}
	// Normalize Accept
	const headers = new Headers(req.headers)
	const accept = (headers.get('accept') || '').toLowerCase()
	const merged = [accept || undefined, accept.includes('text/event-stream') ? undefined : 'text/event-stream'].filter(Boolean).join(', ')
	if (merged) headers.set('accept', merged)
	const res = await handler(new Request(req.url.replace(/\/mcp$/, '/mcp/sse'), { method: 'GET', headers }))
	return withCors(res)
}

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

