import { AsyncLocalStorage } from 'async_hooks'

type AuthzContext = {
  mcpAuthorized?: boolean
}

// Per-request auth context store
const authzStore = new AsyncLocalStorage<AuthzContext>()

export function withMcpAuth<T>(fn: () => Promise<T>): Promise<T> {
  return authzStore.run({ mcpAuthorized: true }, fn)
}

export function isMcpAuthorized(): boolean {
  return !!authzStore.getStore()?.mcpAuthorized
}
