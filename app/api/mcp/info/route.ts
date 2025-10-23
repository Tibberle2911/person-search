import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { listForUser } from '@/lib/mcpKeys'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function maskToken(token: string) {
  if (token.length <= 8) return '*'.repeat(token.length)
  return token.slice(0, 4) + '*'.repeat(token.length - 8) + token.slice(-4)
}

export async function GET() {
  const session = await auth()
  const userEmail = session?.user?.email || null
  const keys = userEmail ? await listForUser(userEmail) : []
  const tokenPresent = keys.length > 0

  const base = {
    jsonrpc: '2.0',
    info: {
      server: 'person-search-mcp',
      requiresAuth: true,
      strictAuthForAllMethods: true,
      acceptedAuth: ['cookie-session', 'bearer-token', 'x-api-key'],
      headers: {
        bearer: 'Authorization: Bearer <your personal API key>',
        apiKey: 'x-api-key: <your personal API key>',
      },
      urlParams: {
        apiKey: '/api/mcp?api_key=<your personal API key>'
      },
      tokenEnvVar: null,
      tokenPresent,
    },
  }

  if (!session?.user) {
    return NextResponse.json(base)
  }

  return NextResponse.json({
    ...base,
    info: {
      ...base.info,
      tokenPreview: tokenPresent ? maskToken(keys[0]) : null,
    },
  })
}
