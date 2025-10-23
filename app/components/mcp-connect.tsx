"use client"

import { useEffect, useMemo, useState } from "react"
import { useSession, signIn } from "next-auth/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CopyButton } from "@/components/copy-button"

export default function McpConnect() {
  const { data: session, status } = useSession()
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [origin, setOrigin] = useState<string>("")

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    async function ensureKey() {
      if (!session?.user) {
        if (!cancelled) setApiKey(null)
        return
      }
      try {
        const r = await fetch('/api/mcp/session-key', { cache: 'no-store' })
        if (!r.ok) return
        const data = await r.json()
        if (!cancelled) setApiKey(data.apiKey)
      } catch {}
    }
    ensureKey()
    return () => { cancelled = true }
  }, [session?.user])

  const exampleUrl = useMemo(() => {
    const base = origin || 'http://localhost:3000'
    const key = apiKey || '<your-key>'
    return `${base}/api/mcp?api_key=${key}`
  }, [origin, apiKey])

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Connect your MCP agent</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          {status === 'loading' && (
            <div className="text-muted-foreground">Checking session…</div>
          )}
          {!session?.user && status !== 'loading' && (
            <div className="space-y-3">
              <p className="text-muted-foreground">Sign in to generate a personal API key for MCP connections.</p>
              <Button onClick={() => signIn('google')}>Sign in with Google</Button>
            </div>
          )}
          {session?.user && (
            <div className="space-y-3">
              <p>Signed in as <strong>{session.user.name || session.user.email}</strong>.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-muted-foreground">Your MCP API key</div>
                  {apiKey && <CopyButton value={apiKey} label="Copy key" />}
                </div>
                <code className="block px-2 py-1 rounded bg-muted break-all">{apiKey ?? 'Generating…'}</code>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-muted-foreground">Server URL for agents</div>
                  <CopyButton value={exampleUrl} label="Copy URL" />
                </div>
                <code className="block px-2 py-1 rounded bg-muted break-all">{exampleUrl}</code>
              </div>
              <p className="text-muted-foreground">This API key will be removed once you are signed out. A new key will be generated when signing in again.</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to connect (VS Code)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">Add or update <code>.vscode/mcp.json</code>:</p>
          <pre className="bg-muted p-3 rounded text-xs overflow-auto">
{`{
  "servers": {
    "person-search-mcp": {
      "url": "${exampleUrl}",
      "type": "http"
    }
  }
}`}
          </pre>
          <p className="text-sm text-muted-foreground mt-3">Then reload VS Code. The MCP server requires POST requests; visiting the URL in a browser (GET) will show a helpful message.</p>
        </CardContent>
      </Card>
    </div>
  )
}
