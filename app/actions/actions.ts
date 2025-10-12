// app/actions/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { User, userSchema } from './schemas'
import { cache } from 'react'
import { randomUUID } from 'crypto'
import { pool } from '../../lib/db'
import { logEvent } from '../../lib/logger'

// --- Search Users ---
export async function searchUsers(query: string): Promise<User[]> {
  console.log('Searching users with query:', query)
  logEvent({ type: 'search.request', payload: { query } })

  const { rows } = await pool.query<User>(
    `SELECT id, name, phone_number AS "phoneNumber", email
     FROM users
     WHERE LOWER(name) LIKE $1
     ORDER BY name
     LIMIT 20`,
    [`${query.toLowerCase()}%`]
  )

  console.log('Search results:', rows)
  logEvent({ type: 'search.response', payload: { count: rows.length } })
  return rows
}

// --- Add User ---
export async function addUser(data: Omit<User, 'id'>): Promise<User> {
  // Check uniqueness by name (case-insensitive)
  const maybe = await pool.query<{ id: string }>(
    `SELECT id FROM users WHERE LOWER(name) = LOWER($1) LIMIT 1`,
    [data.name]
  )
  const existing = (maybe && (maybe as any).rows) || []
  if (existing.length > 0) {
    throw new Error('User with this name already exists')
  }

  const newId = randomUUID()
  const newUser = { ...data, id: newId }
  const validatedUser = userSchema.parse(newUser)

  await pool.query(
    `INSERT INTO users (id, name, phone_number, email)
     VALUES ($1, $2, $3, $4)`,
    [validatedUser.id, validatedUser.name, validatedUser.phoneNumber, validatedUser.email]
  )

  logEvent({ type: 'create.request', payload: { id: validatedUser.id } })
  logEvent({ type: 'create.response', payload: { id: validatedUser.id } })

  return validatedUser
}

// --- Delete User ---
export async function deleteUser(id: string): Promise<void> {
  const result = await pool.query(`DELETE FROM users WHERE id = $1`, [id])

  if (result.rowCount === 0) {
    throw new Error(`User with id ${id} not found`)
  }

  console.log(`User with id ${id} has been deleted.`)
  revalidatePath('/')
  logEvent({ type: 'delete.request', payload: { id } })
  logEvent({ type: 'delete.response', payload: { rowCount: result.rowCount } })
}

// --- Update User ---
export async function updateUser(
  id: string,
  data: Partial<Omit<User, 'id'>>
): Promise<User> {
  const existing = await getUserById(id)
  if (!existing) throw new Error(`User with id ${id} not found`)

  const updated = { ...existing, ...data }
  const validatedUser = userSchema.parse(updated)

  // If the name changed, ensure uniqueness (case-insensitive) excluding this user
  if (data.name && data.name.toLowerCase() !== existing.name.toLowerCase()) {
    const maybe = await pool.query<{ id: string }>(
      `SELECT id FROM users WHERE LOWER(name) = LOWER($1) LIMIT 1`,
      [data.name]
    )
    const found = (maybe && (maybe as any).rows) || []
    if (found.length > 0 && found[0].id !== id) {
      throw new Error('User with this name already exists')
    }
  }

  await pool.query(
    `UPDATE users
     SET name = $1, phone_number = $2, email = $3
     WHERE id = $4`,
    [validatedUser.name, validatedUser.phoneNumber, validatedUser.email, id]
  )

  console.log(`User with id ${id} has been updated.`)
  revalidatePath('/')
  logEvent({ type: 'update.request', payload: { id } })
  logEvent({ type: 'update.response', payload: { id } })
  return validatedUser
}

// --- Get User By ID ---
export const getUserById = cache(async (id: string) => {
  const { rows } = await pool.query<User>(
    `SELECT id, name, phone_number AS "phoneNumber", email
     FROM users
     WHERE id = $1
     LIMIT 1`,
    [id]
  )
  const result = rows[0] || null
  logEvent({ type: 'get.request', payload: { id } })
  logEvent({ type: 'get.response', payload: { found: !!result } })
  return result
})
