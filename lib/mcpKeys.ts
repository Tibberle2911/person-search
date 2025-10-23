import { randomBytes } from 'crypto'

type TokenRecord = {
  token: string
  userRef: string // use email as stable identifier
  createdAt: number
}

const tokenByValue = new Map<string, TokenRecord>()
const tokensByUser = new Map<string, Set<string>>()

export function generateKey(userRef: string): string {
  const token = randomBytes(24).toString('hex')
  const rec: TokenRecord = { token, userRef, createdAt: Date.now() }
  tokenByValue.set(token, rec)
  if (!tokensByUser.has(userRef)) tokensByUser.set(userRef, new Set())
  tokensByUser.get(userRef)!.add(token)
  return token
}

export function validateKey(token: string): string | null {
  const rec = tokenByValue.get(token)
  return rec ? rec.userRef : null
}

export function revokeAllForUser(userRef: string) {
  const set = tokensByUser.get(userRef)
  if (!set) return
  for (const t of set) tokenByValue.delete(t)
  tokensByUser.delete(userRef)
}

export function listForUser(userRef: string): string[] {
  return Array.from(tokensByUser.get(userRef) ?? [])
}
