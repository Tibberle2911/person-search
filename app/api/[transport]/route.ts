import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { searchUsers, addUser, updateUser, deleteUser, getUserById } from '@/app/actions/actions'
import { userFormSchema } from '@/app/actions/schemas'

// Minimal MCP-like HTTP transport exposing tools via POST { tool, input }

const searchSchema = z.object({ query: z.string().min(1) })
const idSchema = z.object({ id: z.string().min(1) })
const updateSchema = userFormSchema.partial().merge(idSchema)

const tools = [
	{
		name: 'search_users',
		description: 'Search users by name prefix (case-insensitive)',
		input: '{ query: string }',
	},
	{
		name: 'get_user_by_id',
		description: 'Get a single user by id',
		input: '{ id: string }',
	},
	{
		name: 'add_user',
		description: 'Create a new user (name unique, case-insensitive)',
		input: 'UserFormData (name, email, phoneNumber)',
	},
	{
		name: 'update_user',
		description: 'Update user by id (name unique, case-insensitive)',
		input: '{ id: string } & Partial<UserFormData>',
	},
	{
		name: 'delete_user',
		description: 'Delete user by id',
		input: '{ id: string }',
	},
]

export async function GET(request: NextRequest, context: unknown) {
	const transport = (context && typeof context === 'object' && 'params' in context)
		? (context as { params?: unknown }).params
		: undefined
	const transportName = transport && typeof transport === 'object' && transport !== null && 'transport' in transport
		? String((transport as Record<string, unknown>).transport)
		: 'http'

	return NextResponse.json({
		name: 'person-search-mcp-http',
		version: '0.1.0',
		transport: transportName,
		tools,
	})
}

export async function POST(request: NextRequest) {
	const body = await request.json().catch(() => null)
	if (!body || typeof body !== 'object') {
		return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
	}

	const tool = 'tool' in body ? String((body as Record<string, unknown>).tool) : ''
	const input = 'input' in body ? (body as Record<string, unknown>).input : undefined

	try {
		switch (tool) {
			case 'search_users': {
				const { query } = searchSchema.parse(input)
				const results = await searchUsers(query)
				return NextResponse.json(results)
			}
			case 'get_user_by_id': {
				const { id } = idSchema.parse(input)
				const user = await getUserById(id)
				if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
				return NextResponse.json(user)
			}
			case 'add_user': {
				const data = userFormSchema.parse(input)
				const created = await addUser(data)
				return NextResponse.json(created, { status: 201 })
			}
			case 'update_user': {
				const parsed = updateSchema.parse(input)
				const { id, ...rest } = parsed
				const updated = await updateUser(id, rest)
				return NextResponse.json(updated)
			}
			case 'delete_user': {
				const { id } = idSchema.parse(input)
				await deleteUser(id)
				return NextResponse.json({ ok: true })
			}
			default:
				return NextResponse.json({ error: `Unknown tool: ${tool}` }, { status: 400 })
		}
	} catch (err: unknown) {
		const message = (err && typeof err === 'object' && 'message' in err)
			? String((err as { message?: unknown }).message)
			: String(err)
		const status = message === 'User with this name already exists' ? 409 : 400
		return NextResponse.json({ error: message }, { status })
	}
}

