import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const dynamic = "force-dynamic"

export default function AuthSetupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">OAuth setup (Google)</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What I implement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>I use NextAuth v5 with the Google provider (route: <code>/api/auth/[...nextauth]</code>).</li>
              <li>I accept either <code>AUTH_SECRET</code> or <code>NEXTAUTH_SECRET</code> as the auth secret in production.</li>
              <li>I set <code>trustHost: true</code> so I don’t have to hard‑code <code>AUTH_URL</code> for Vercel preview/prod domains.</li>
              <li>I force the auth route to run on the Node.js runtime and mark it dynamic for stability.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code map</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li><code>auth.ts</code>: I configure NextAuth and export <code>{`{ handlers, signIn, signOut, auth }`}</code>, using the Google provider and secret fallback.</li>
              <li><code>app/api/auth/[...nextauth]/route.ts</code>: I re-export <code>GET</code>/<code>POST</code> from <code>handlers</code> and force <code>runtime = &apos;nodejs&apos;</code> with <code>dynamic = &apos;force-dynamic&apos;</code>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Configure Google OAuth</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
              <li>I create a Google Cloud project and enable “Google Identity Services”.</li>
              <li>In Credentials, I create an OAuth 2.0 Client ID (type: Web application).</li>
              <li>I add authorized redirect URIs for each environment:
                <ul className="list-disc list-inside ml-6">
                  <li>Local: <code>http://localhost:3000/api/auth/callback/google</code></li>
                  <li>Vercel preview/prod: <code>https://YOUR_DOMAIN/api/auth/callback/google</code></li>
                </ul>
              </li>
              <li>I copy the Client ID and Client Secret into my environment variables.</li>
              <li>Optional: I add Authorized JavaScript Origins for my domains (helps with future flows that need it).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Environment variables</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">I set these for each environment (Vercel: Project Settings → Environment Variables):</p>
            <pre className="bg-muted p-3 rounded text-sm overflow-auto">{`GOOGLE_CLIENT_ID=... 
GOOGLE_CLIENT_SECRET=...
# Either is accepted by this app (use one):
AUTH_SECRET=...            # recommended
# NEXTAUTH_SECRET=...      # alternative

# Optional but recommended
DATABASE_URL=postgres://user:pass@host:5432/db
`}</pre>
            <p className="text-xs text-muted-foreground mt-2">Tip: I generate a strong secret (32+ random bytes base64) and add it to both Preview and Production on Vercel.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Runtime and routing notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>I run the auth route on the Node.js runtime and mark it <code>force-dynamic</code> to avoid static caching.</li>
              <li>I support browser sessions for humans and per-user API keys for headless agents.</li>
              <li>I persist per-user API keys in Postgres; in local dev without <code>DATABASE_URL</code>, I fall back to in-memory.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sessions, JWT, and scopes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>By default, NextAuth uses stateless JWT sessions; I keep the defaults unless I need database sessions.</li>
              <li>The Google provider defaults to scopes: <code>openid email profile</code>. I can extend scopes via provider options if needed.</li>
              <li>I let NextAuth manage CSRF and secure cookies; in production, cookies are set with secure flags automatically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Local dev vs. Vercel</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Local callback: <code>http://localhost:3000/api/auth/callback/google</code>.</li>
              <li>Vercel callback: <code>https://&lt;project&gt;.vercel.app/api/auth/callback/google</code> (and any custom domains).</li>
              <li>I enable <code>trustHost</code> so I don’t have to set <code>(NEXT)AUTH_URL</code> for each deployment URL.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Verify the setup</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-2">
              <li>I run <code>pnpm dev</code> and open <code>http://localhost:3000</code>.</li>
              <li>I visit <code>/api/auth/providers</code>; I should see Google listed.</li>
              <li>I sign in with Google; then I check <code>/api/auth/session</code> to confirm a session exists.</li>
              <li>On Vercel, I repeat the provider/session checks on the deployed URL.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li><strong>500 “MissingSecret”</strong>: I set <code>AUTH_SECRET</code> (or <code>NEXTAUTH_SECRET</code>) in the environment.</li>
              <li><strong>Redirect URI mismatch</strong>: I add the exact callback URL(s) to Google Cloud OAuth Client.</li>
              <li><strong>Invalid credentials</strong>: I reissue the Google Client Secret and update the env variable.</li>
              <li><strong>No provider listed</strong>: I verify <code>GOOGLE_CLIENT_ID/SECRET</code> are present and the app restarted.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
