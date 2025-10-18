import { Server } from '@modelcontextprotocol/sdk/server'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { pool } from './db.js'
import { userSchema, userFormSchema, searchSchema, idSchema, type User } from './schemas.js'

const server = new Server({ name: 'person-search-mcp', version: '0.1.0' })

// search_users
server.tool('search_users', {
  description: 'Search users by name prefix (case-insensitive)',
  inputSchema: searchSchema,
  async handler(input: unknown) {
    const { query } = searchSchema.parse(input)
    const { rows } = await pool.query<User>(
      `SELECT id, name, phone_number AS "phoneNumber", email
       FROM users
       WHERE LOWER(name) LIKE $1
       ORDER BY name
       LIMIT 20`,
      [`${query.toLowerCase()}%`]
    )
    return rows
  },
})

// get_user_by_id
server.tool('get_user_by_id', {
  description: 'Get a single user by id',
  inputSchema: idSchema,
  async handler(input: unknown) {
    const { id } = idSchema.parse(input)
    const { rows } = await pool.query<User>(
      `SELECT id, name, phone_number AS "phoneNumber", email FROM users WHERE id = $1 LIMIT 1`,
      [id]
    )
    return rows[0] || null
  },
})

// add_user
server.tool('add_user', {
  description: 'Create a new user (name unique, case-insensitive)',
  inputSchema: userFormSchema,
  async handler(input: unknown) {
    const data = userFormSchema.parse(input)
    // uniqueness check
    const maybe = await pool.query<{ id: string }>(
      `SELECT id FROM users WHERE LOWER(name) = LOWER($1) LIMIT 1`,
      [data.name]
    )
    if (maybe.rows.length > 0) {
      throw new Error('User with this name already exists')
    }
    const id = randomUUID()
    const { rows } = await pool.query<User>(
      `INSERT INTO users (id, name, phone_number, email)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, phone_number AS "phoneNumber", email`,
      [id, data.name, data.phoneNumber, data.email]
    )
    return rows[0]
  },
})

// update_user
server.tool('update_user', {
  description: 'Update user by id (name unique, case-insensitive)',
  inputSchema: userSchema.pick({ id: true }).merge(userFormSchema.partial()),
  async handler(input: unknown) {
    const { id, ...rest } = userSchema.pick({ id: true }).merge(userFormSchema.partial()).parse(input)
    // existing
    const current = await pool.query<User>(
      `SELECT id, name, phone_number AS "phoneNumber", email FROM users WHERE id = $1 LIMIT 1`,
      [id]
    )
    const existing = current.rows[0]
    if (!existing) throw new Error(`User with id ${id} not found`)
    const updated = { ...existing, ...rest }
    userSchema.parse(updated)
    if (rest.name && rest.name.toLowerCase() !== existing.name.toLowerCase()) {
      const clash = await pool.query<{ id: string }>(
        `SELECT id FROM users WHERE LOWER(name) = LOWER($1) LIMIT 1`,
        [rest.name]
      )
      if (clash.rows.length > 0 && clash.rows[0].id !== id) {
        throw new Error('User with this name already exists')
      }
    }
    const { rows } = await pool.query<User>(
      `UPDATE users SET name = $1, phone_number = $2, email = $3 WHERE id = $4
       RETURNING id, name, phone_number AS "phoneNumber", email`,
      [updated.name, updated.phoneNumber, updated.email, id]
    )
    return rows[0]
  },
})

// delete_user
server.tool('delete_user', {
  description: 'Delete user by id',
  inputSchema: idSchema,
  async handler(input: unknown) {
    const { id } = idSchema.parse(input)
    const res = await pool.query(`DELETE FROM users WHERE id = $1`, [id])
    if (res.rowCount === 0) throw new Error(`User with id ${id} not found`)
    return { ok: true }
  },
})

// Start server
server.start().catch((err: unknown) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start MCP server:', err)
  process.exit(1)
})