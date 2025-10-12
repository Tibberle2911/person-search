type LogEntry = {
  id: string
  type: string
  payload?: any
  timestamp: string
}

const MAX_LOGS = 200

// Ensure a single shared log store across module instances and runtimes that
// share the same globalThis (this helps when Next's dev server reloads modules
// or when alias vs relative imports could create multiple module copies).
const SHARED_NAMESPACE = '__PERSON_SEARCH_LOGS_v1'

function getSharedStore(): { logs: LogEntry[] } {
  const g: any = globalThis as any
  if (!g[SHARED_NAMESPACE]) {
    g[SHARED_NAMESPACE] = { logs: [] as LogEntry[] }
  }
  return g[SHARED_NAMESPACE]
}

export function logEvent(entry: Omit<LogEntry, 'id' | 'timestamp'>) {
  const store = getSharedStore()
  const id = (Math.random() + 1).toString(36).substring(2, 9)
  const record: LogEntry = { id, timestamp: new Date().toISOString(), ...entry }
  store.logs.unshift(record)
  if (store.logs.length > MAX_LOGS) store.logs.pop()
  // Best-effort console tracing
  try {
    console.log(`logger.logEvent: ${record.type}`, { id: record.id })
  } catch (e) {
    /* noop */
  }
}

export function getLogs() {
  const store = getSharedStore()
  try {
    console.log('logger.getLogs called, count=', store.logs.length)
  } catch (e) {}
  return store.logs.slice()
}

export function clearLogs() {
  const store = getSharedStore()
  store.logs.length = 0
  try {
    console.log('logger.clearLogs called')
  } catch (e) {}
}
