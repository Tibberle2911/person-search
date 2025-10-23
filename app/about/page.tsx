import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Authentication architecture</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-muted-foreground">
              I use NextAuth v5 with the Google provider. In production, I accept the secret from either
              <code className="mx-1">AUTH_SECRET</code> or <code className="mx-1">NEXTAUTH_SECRET</code>, and I enable
              <code className="mx-1">trustHost</code> for smoother Vercel deployments. I pin authentication endpoints to the
              Node.js runtime and mark them dynamic for reliability.
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Humans authenticate with Google in the browser; sessions power protected CRUD routes.</li>
              <li>Headless agents authenticate with per-user API keys against the MCP endpoint (no cookies required).</li>
              <li>I persist keys in Postgres with a <code>revoked</code> flag and fall back to in-memory storage locally.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code map</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li><code>auth.ts</code>: I configure NextAuth, Google provider, secret fallback, and <code>trustHost</code>; export <code>{`{ handlers, signIn, signOut, auth }`}</code>.</li>
              <li><code>app/api/auth/[...nextauth]/route.ts</code>: I re-export <code>GET</code>/<code>POST</code> from <code>handlers</code>; I set <code>runtime = &apos;nodejs&apos;</code> and <code>dynamic = &apos;force-dynamic&apos;</code>.</li>
              <li><code>middleware.ts</code>: I protect <code>/api/people/*</code>; I keep MCP auth inside the route to allow header-based keys.</li>
              <li><code>lib/mcpKeys.ts</code>: I store, validate, and revoke per-user API keys (Postgres with in-memory fallback).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Protected surfaces</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li><code>/api/people/*</code> is protected by middleware and requires a valid session.</li>
              <li><code>/api/mcp</code> authorizes by session or by API key via <code>Authorization: Bearer</code> or <code>x-api-key</code>.</li>
              <li>Discovery: <code>/api/mcp/info</code> shows server info and a masked key preview for the current user.</li>
              <li>Key lifecycle: <code>GET /api/mcp/session-key</code> issues/returns a key; <code>DELETE</code> revokes all.</li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">I also accept <code>?api_key=&lt;token&gt;</code> in the query string to support clients that cannot set headers.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Data and runtimes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Database: Postgres via <code>pg</code> Pool; keys in table with <code>revoked</code> boolean.</li>
              <li>Auth and MCP routes are explicitly set to Node runtime; JSON-RPC errors return HTTP 200 for agents.</li>
              <li>CORS allows auth headers for cross-origin agent calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Flows</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside text-sm text-muted-foreground">
              <li>User signs in with Google → NextAuth establishes a session (JWT-based by default).</li>
              <li>User requests a key via <code>GET /api/mcp/session-key</code> → I create or return an existing per-user API key.</li>
              <li>Agent calls <code>/api/mcp</code> with <code>Authorization: Bearer &lt;key&gt;</code> → I validate the key, then dispatch the tool.</li>
              <li>User can rotate via <code>GET /api/mcp/session-key?rotate=1</code> or revoke via <code>DELETE /api/mcp/session-key</code>.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Result and error contracts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>I return JSON-RPC responses with a normalized <code>result.content</code> array of <code>text</code> or <code>json</code> parts.</li>
              <li>On failure, I return a JSON-RPC error object with HTTP 200, so clients can always parse a body.</li>
              <li>I enable CORS and allow <code>Authorization</code> and <code>x-api-key</code> headers for cross-origin agents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Environment summary</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-3 rounded text-sm overflow-auto">{`GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
AUTH_SECRET=...            # or NEXTAUTH_SECRET
DATABASE_URL=postgres://user:pass@host:5432/db  # for persistent keys
`}</pre>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Threat model (brief)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Token leakage: I recommend rotating keys regularly and revoking on sign-out or compromise.</li>
              <li>Privilege: API keys authorize the same operations as the session; add role checks for finer control.</li>
              <li>Runtime safety: I avoid Edge for auth/DB paths to prevent subtle crypto/driver differences.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

