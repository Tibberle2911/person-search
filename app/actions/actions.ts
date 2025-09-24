// app/actions/actions.ts
'use server'

import { revalidatePath } from 'next/cache'
import { User, userSchema } from './schemas'
import { cache } from 'react'
import { randomUUID } from 'crypto'
import { Pool } from 'pg'

// --- Database Connection (cached for hot reload in dev) ---
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})

// --- Search Users ---
export async function searchUsers(query: string): Promise<User[]> {
  console.log('Searching users with query:', query)

  const { rows } = await pool.query<User>(
    `SELECT id, name, phone_number AS "phoneNumber", email
     FROM users
     WHERE LOWER(name) LIKE $1
     ORDER BY name
     LIMIT 20`,
    [`${query.toLowerCase()}%`]
  )

  console.log('Search results:', rows)
  return rows
}

// --- Add User ---
export async function addUser(data: Omit<User, 'id'>): Promise<User> {
  const newId = randomUUID()
  const newUser = { ...data, id: newId }
  const validatedUser = userSchema.parse(newUser)

  await pool.query(
    `INSERT INTO users (id, name, phone_number, email)
     VALUES ($1, $2, $3, $4)`,
    [validatedUser.id, validatedUser.name, validatedUser.phoneNumber, validatedUser.email]
  )

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

  await pool.query(
    `UPDATE users
     SET name = $1, phone_number = $2, email = $3
     WHERE id = $4`,
    [validatedUser.name, validatedUser.phoneNumber, validatedUser.email, id]
  )

  console.log(`User with id ${id} has been updated.`)
  revalidatePath('/')
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
  return rows[0] || null
})
