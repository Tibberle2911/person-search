import { createMcpHandler } from 'mcp-handler'
import { z } from 'zod'
import { searchUsers, addUser, updateUser, deleteUser, getUserById } from '@/app/actions/actions'
import { userFormSchema } from '@/app/actions/schemas'

// Build a proper MCP server using vercel/mcp-handler and reuse existing actions.
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
    basePath: '/api',
    maxDuration: 60,
    verboseLogs: true,
  }
)

export { handler as GET, handler as POST }

