import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Security overview</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>I use NextAuth v5 with the Google provider. In production, I read the secret from <code>AUTH_SECRET</code> or <code>NEXTAUTH_SECRET</code>.</li>
              <li>I enable <code>trustHost: true</code> so I don’t have to hard-code <code>AUTH_URL</code> on Vercel.</li>
              <li>Auth endpoints are pinned to the Node.js runtime and marked dynamic for predictable behavior.</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">Users sign in with Google in the browser. Agents authenticate with per-user API keys (no cookies required).</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Protected routes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>CRUD API: <code>/api/people/*</code> is protected by middleware and requires a signed-in session.</li>
              <li>MCP endpoint: <code>/api/mcp</code> accepts either a browser session or an API key.</li>
              <li>Header formats I accept:
                <ul className="list-disc list-inside ml-6">
                  <li><code>Authorization: Bearer &lt;token&gt;</code></li>
                  <li><code>x-api-key: &lt;token&gt;</code></li>
                </ul>
              </li>
              <li>URL token support: I also accept <code>?api_key=&lt;token&gt;</code> for tooling that can’t set headers.</li>
              <li>Key management routes:
                <ul className="list-disc list-inside ml-6">
                  <li><code>GET /api/mcp/session-key</code> — issue or return the current user’s key; supports <code>?rotate=1</code> to rotate.</li>
                  <li><code>DELETE /api/mcp/session-key</code> — revoke all keys for the signed-in user.</li>
                  <li><code>GET /api/mcp/info</code> — discovery metadata and a masked preview of the current key.</li>
                </ul>
              </li>
            </ul>
            <div className="mt-3">
              <div className="font-semibold text-sm mb-1">Examples</div>
              <pre className="bg-muted p-3 rounded text-xs overflow-auto">{`# PowerShell
$headers = @{ 'Authorization' = 'Bearer <MCP_API_TOKEN>' }
$b = '{"method":"tools/call","id":1,"params":{"name":"list_users","arguments":{}}}'
Invoke-RestMethod -Uri https://YOUR_HOST/api/mcp -Method POST -Body $b -ContentType 'application/json' -Headers $headers | ConvertTo-Json -Depth 7

# curl
curl -s -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <MCP_API_TOKEN>" \
  -d '{"method":"tools/call","id":1,"params":{"name":"search_users","arguments":{"query":"A"}}}' \
  https://YOUR_HOST/api/mcp | jq .`}</pre>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>API keys (per-user)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>I persist keys in Postgres with a <code>revoked</code> flag so I can invalidate them instantly. In local dev without a DB, I fall back to in-memory storage.</li>
              <li>I validate the key on every MCP call server-side before executing any tool.</li>
              <li>Keys are bearer tokens. Treat them like passwords; rotate on exposure and revoke when no longer needed.</li>
              <li>The discovery endpoint <code>/api/mcp/info</code> helps tooling confirm connectivity without leaking the full token.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">Note: in this starter, keys are stored as issued. For higher assurance, consider hashing tokens at rest and showing users only a one-time preview.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Transport, CORS, JSON-RPC</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>I expose MCP over HTTP JSON-RPC at <code>/api/mcp</code>.</li>
              <li>I enable CORS to allow the <code>Authorization</code> and <code>x-api-key</code> headers for agent calls.</li>
              <li>I return JSON-RPC error objects with HTTP 200 so clients can always parse a response body.</li>
              <li>I normalize successful results to <code>{`{ result: { content: [{ type: "text"|"json", text|json }] } }`}</code> to simplify client handling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Threat model (brief)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Token leakage: I recommend rotating keys regularly and revoking on user sign-out or compromise.</li>
              <li>Privilege scope: API keys authorize the same actions as the user’s session. Add role checks where needed.</li>
              <li>Origins: With CORS enabled, treat tokens as sensitive and avoid using them in untrusted frontends.</li>
              <li>Operational safety: I force the Node.js runtime on auth/MCP to avoid Edge incompatibilities that could weaken checks.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
