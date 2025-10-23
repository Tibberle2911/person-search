import { randomBytes } from 'crypto'
import { pool } from './db'

const useDb = Boolean(process.env.DATABASE_URL)

// In-memory fallback for local/dev without DATABASE_URL
type MemTokenRecord = { token: string; userRef: string; createdAt: number }
const memTokenByValue = new Map<string, MemTokenRecord>()
const memTokensByUser = new Map<string, Set<string>>()

let initialized = false
async function ensureTable() {
  if (!useDb) return
  if (initialized) return
  initialized = true
  await pool.query(`
    CREATE TABLE IF NOT EXISTS mcp_api_keys (
      id SERIAL PRIMARY KEY,
      user_ref TEXT NOT NULL,
      token TEXT NOT NULL UNIQUE,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      revoked BOOLEAN NOT NULL DEFAULT FALSE
    );
    CREATE INDEX IF NOT EXISTS idx_mcp_api_keys_user_ref ON mcp_api_keys(user_ref) WHERE revoked = FALSE;
  `)
}

export async function generateKey(userRef: string): Promise<string> {
  const token = randomBytes(24).toString('hex')
  if (!useDb) {
    const rec: MemTokenRecord = { token, userRef, createdAt: Date.now() }
    memTokenByValue.set(token, rec)
    if (!memTokensByUser.has(userRef)) memTokensByUser.set(userRef, new Set())
    memTokensByUser.get(userRef)!.add(token)
    return token
  }
  await ensureTable()
  await pool.query(`INSERT INTO mcp_api_keys (user_ref, token) VALUES ($1, $2)`, [userRef, token])
  return token
}

export async function validateKey(token: string): Promise<string | null> {
  if (!useDb) {
    const rec = memTokenByValue.get(token)
    return rec ? rec.userRef : null
  }
  await ensureTable()
  const { rows } = await pool.query(
    `SELECT user_ref FROM mcp_api_keys WHERE token = $1 AND revoked = FALSE LIMIT 1`,
    [token]
  )
  return rows[0]?.user_ref ?? null
}

export async function revokeAllForUser(userRef: string): Promise<void> {
  if (!useDb) {
    const set = memTokensByUser.get(userRef)
    if (!set) return
    for (const t of set) memTokenByValue.delete(t)
    memTokensByUser.delete(userRef)
    return
  }
  await ensureTable()
  await pool.query(`UPDATE mcp_api_keys SET revoked = TRUE WHERE user_ref = $1 AND revoked = FALSE`, [userRef])
}

export async function listForUser(userRef: string): Promise<string[]> {
  if (!useDb) {
    return Array.from(memTokensByUser.get(userRef) ?? [])
  }
  await ensureTable()
  const { rows } = await pool.query(
    `SELECT token FROM mcp_api_keys WHERE user_ref = $1 AND revoked = FALSE ORDER BY created_at DESC`,
    [userRef]
  )
  return rows.map((r) => r.token)
}
