import { describe, it, expect, vi, beforeEach } from 'vitest'

// Mock the database pool before importing actions
vi.mock('../lib/db', () => ({
  pool: { query: vi.fn() },
}))

// Mock react's cache helper used in actions
vi.mock('react', () => ({ cache: (fn: any) => fn }))

// Mock next/cache.revalidatePath used in actions
vi.mock('next/cache', () => ({ revalidatePath: () => {} }))

import * as actions from '../app/actions/actions'
import { pool } from '../lib/db'

describe('actions (CRUD)', () => {
  beforeEach(() => {
    ;(pool.query as any).mockReset()
  })

  it('searchUsers returns rows', async () => {
    const mockRows = [{ id: '1', name: 'Alice', phoneNumber: '0412345678', email: 'a@a.com' }]
    ;(pool.query as any).mockResolvedValue({ rows: mockRows })

    const res = await actions.searchUsers('Al')
    expect(res).toEqual(mockRows)
  })

  it('addUser inserts and returns validated user', async () => {
    ;(pool.query as any).mockResolvedValueOnce({})
    const input = { name: 'Bob Smith', phoneNumber: '0412345678', email: 'bob@example.com' }
    const created = await actions.addUser(input as any)
    expect(created).toMatchObject({ name: 'Bob Smith', phoneNumber: '0412345678', email: 'bob@example.com' })
  })

  it('getUserById returns a user or null', async () => {
    const row = { id: 'abc', name: 'C', phoneNumber: '0412345678', email: 'c@c.com' }
    ;(pool.query as any).mockResolvedValue({ rows: [row] })
    const user = await actions.getUserById('abc')
    expect(user).toEqual(row)
  })

  it('updateUser updates and returns the updated user', async () => {
    const existing = { id: 'u1', name: 'Old', phoneNumber: '0412345678', email: 'old@e.com' }
    ;(pool.query as any).mockResolvedValueOnce({ rows: [existing] }) // getUserById
    ;(pool.query as any).mockResolvedValueOnce({}) // update
    const updated = await actions.updateUser('u1', { name: 'New' } as any)
    expect(updated.name).toBe('New')
  })

  it('deleteUser throws if not found', async () => {
    ;(pool.query as any).mockResolvedValue({ rowCount: 0 })
    await expect(actions.deleteUser('nope')).rejects.toThrow()
  })
})
