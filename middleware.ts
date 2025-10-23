export { auth as middleware } from './auth'

export const config = {
  matcher: [
    '/api/people/:path*',
    // MCP auth handled inside the route to allow header-based API keys
  ],
}
