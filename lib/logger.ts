import { pool } from './db'

type LogEntry = {
  id: string
  type: string
  payload?: unknown
  timestamp: string
}

const MAX_LOGS = 200

// Ensure a single shared log store across module instances and runtimes that
// share the same globalThis (this helps when Next's dev server reloads modules
// or when alias vs relative imports could create multiple module copies).
const SHARED_NAMESPACE = '__PERSON_SEARCH_LOGS_v1'

interface SharedStore {
  logs: LogEntry[]
}

function getSharedStore(): SharedStore {
  const g = globalThis as unknown as Record<string, unknown>
  if (!(SHARED_NAMESPACE in g)) {
    ;(g as Record<string, unknown>)[SHARED_NAMESPACE] = { logs: [] as LogEntry[] }
  }
  return g[SHARED_NAMESPACE] as SharedStore
}

const useDb = Boolean(process.env.DATABASE_URL)

async function ensureTable() {
  if (!useDb) return
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS logs (
        id TEXT PRIMARY KEY,
        type TEXT NOT NULL,
        payload JSONB,
        timestamp TIMESTAMPTZ NOT NULL
      )
    `)
  } catch (err) {
    // don't throw - table creation is best-effort
    // eslint-disable-next-line no-console
    console.warn('logger.ensureTable failed', String(err))
  }
}

export function logEvent(entry: Omit<LogEntry, 'id' | 'timestamp'>) {
  const store = getSharedStore()
  const id = (Math.random() + 1).toString(36).substring(2, 9)
  const record: LogEntry = { id, timestamp: new Date().toISOString(), ...entry }
  store.logs.unshift(record)
  if (store.logs.length > MAX_LOGS) store.logs.pop()

  // Console tracing (best effort)
  try {
    // eslint-disable-next-line no-console
    console.log('logger.logEvent:', record.type, record.id)
  } catch {
    // noop
  }

  // If running with a database, persist the log asynchronously.
  if (useDb) {
    ;(async () => {
      try {
        await ensureTable()
        await pool.query(
          `INSERT INTO logs (id, type, payload, timestamp) VALUES ($1, $2, $3, $4)`,
          [record.id, record.type, record.payload ? JSON.stringify(record.payload) : null, record.timestamp]
        )
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('logger.logEvent DB insert failed', String(err))
      }
    })()
  }
}

export async function getLogs(): Promise<LogEntry[]> {
  const store = getSharedStore()
  try {
    // eslint-disable-next-line no-console
    console.log('logger.getLogs called, count=', store.logs.length)
  } catch {
    // noop
  }

  if (!useDb) return store.logs.slice()

  try {
    await ensureTable()
    const { rows } = await pool.query<{ id: string; type: string; payload: string | null; timestamp: string }>(
      `SELECT id, type, payload, to_char(timestamp, 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as timestamp FROM logs ORDER BY timestamp DESC LIMIT $1`,
      [MAX_LOGS]
    )
    return rows.map((r) => ({
      id: r.id,
      type: r.type,
      payload: r.payload ? JSON.parse(r.payload) : undefined,
      timestamp: r.timestamp,
    }))
  } catch (err) {
    // fallback to in-memory when DB read fails
    // eslint-disable-next-line no-console
    console.warn('logger.getLogs DB read failed, falling back to memory', String(err))
    return store.logs.slice()
  }
}

export async function clearLogs(): Promise<void> {
  const store = getSharedStore()
  store.logs.length = 0
  try {
    // eslint-disable-next-line no-console
    console.log('logger.clearLogs called')
  } catch {
    // noop
  }

  if (!useDb) return
  try {
    await ensureTable()
    await pool.query(`DELETE FROM logs`)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('logger.clearLogs DB delete failed', String(err))
  }
}
