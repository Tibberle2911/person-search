# Person Search

## Description

Person Search is a full-stack Next.js application demonstrating production-ready patterns for **Next.js 15**, **React 19**, **NextAuth v5 (Google OAuth)**, **Postgres**, and the **Model Context Protocol (MCP)**. I built this to showcase modern server-component architecture, session-based authentication, and headless AI agent integration via per-user API keys.

The application provides:
- **User CRUD**: Search, create, update, and delete users with server-side validation
- **Google OAuth**: Secure authentication flow with NextAuth v5 and session management
- **MCP over HTTP**: A JSON-RPC 2.0 endpoint exposing user operations as tools for AI agents
- **Dual authorization**: Session cookies for web UI, API keys for headless/agent access
- **Async Server Components**: Next.js 15's new patterns for `searchParams` and data fetching

## Features

- **Asynchronous user search** with server-side filtering and prefix matching
- **Server Components**: All data fetching happens server-side with React 19 Server Components
- **NextAuth v5 (Google OAuth)**: Production-ready authentication with `trustHost` for Vercel deployments
- **MCP JSON-RPC 2.0 API**: Six tools (`search_users`, `get_user_by_id`, `add_user`, `update_user`, `delete_user`, `list_users`) for AI agent integration
- **Per-user API keys**: Postgres-backed tokens with in-memory fallback for local development
- **Middleware protection**: Session-based route guards for `/api/people/*`
- **CORS-enabled MCP endpoint**: Cross-origin access for headless agents with Authorization header support
- **Type-safe validation**: Zod schemas for all user input and form validation
- **Responsive UI**: Tailwind CSS + shadcn/ui components with Geist Sans/Mono fonts
- **Toast notifications**: Success/error feedback with Sonner
- **Dark/light theme**: System-aware theme toggle with next-themes

## Technologies Used

- **Next.js 15** - App Router with Server Components and async `searchParams`
- **React 19** - Server Components, Suspense, and concurrent rendering
- **TypeScript** - Full type safety across server actions, API routes, and components
- **Node.js 20.17.0+** - Required for Next.js 15 compatibility
- **NextAuth v5** - OAuth 2.0 authentication with Google provider
- **Postgres (pg)** - User data and MCP API key persistence via `pg` Pool
- **Tailwind CSS** - Utility-first styling with responsive design
- **shadcn/ui** - Radix UI primitives (Dialog, Card, Button, etc.) styled with Tailwind
- **React Hook Form** - Performant form state management with Zod resolver
- **Zod** - Schema validation for API inputs and form data
- **Sonner** - Toast notifications for user feedback
- **next-themes** - System-aware dark/light mode toggle

### Minimum Node.js Version

I use **Node.js 20.17.0+**. Next.js 15 requires Node 20 for async Server Components and modern tooling.

## Getting Started

### Prerequisites

- Node.js 20.17.0 or newer
- pnpm (recommended package manager)
- Postgres database (for production) or in-memory mode for local dev
- Google OAuth credentials from Google Cloud Console

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Tibberle2911/person-search.git
   cd person-search
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory:

   ```bash
   # Required for NextAuth v5
   AUTH_SECRET=<32+ byte random string base64-encoded>
   # Alternative (legacy): NEXTAUTH_SECRET=<secret>

   # Google OAuth credentials
   GOOGLE_CLIENT_ID=<your-google-client-id>
   GOOGLE_CLIENT_SECRET=<your-google-client-secret>

   # Postgres connection (optional for local dev; required for production)
   DATABASE_URL=postgres://user:pass@host:5432/dbname

   # Optional: Vercel deployment config
   # NEXTAUTH_URL=https://your-domain.com (not needed with trustHost: true)
   ```

4. Initialize the database:

   If using Postgres, create the `users` table:

   ```sql
   CREATE TABLE users (
     id TEXT PRIMARY KEY,
     name TEXT NOT NULL,
     phone_number TEXT NOT NULL,
     email TEXT NOT NULL
   );
   CREATE UNIQUE INDEX idx_users_name ON users (LOWER(name));
   ```

   The MCP API keys table will be auto-created on first use.

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## Architecture Overview

### Authentication Flow

I implement **NextAuth v5** with Google OAuth for web UI access and **per-user API keys** for headless agent/MCP access.

**Key files:**
- `auth.ts`: Configures NextAuth with Google provider, accepts `AUTH_SECRET` or `NEXTAUTH_SECRET`, enables `trustHost: true` for Vercel preview/production URLs
- `middleware.ts`: Protects `/api/people/*` routes with session checks
- `lib/mcpKeys.ts`: Generates, validates, and revokes per-user API keys (Postgres-backed with in-memory fallback)
- `lib/authz.ts`: `AsyncLocalStorage` context for marking MCP-authorized requests so server actions can skip session checks

**Flow:**
1. User signs in via Google OAuth → NextAuth creates a session cookie
2. Web UI calls `/api/mcp/session-key` to generate a personal API key
3. MCP agent calls `/api/mcp` with `Authorization: Bearer <key>` or `x-api-key: <key>` header
4. MCP route validates key via `lib/mcpKeys.validateKey()` and wraps handler in `withMcpAuth()`
5. Server actions check `isMcpAuthorized()` or session; if either passes, action proceeds

### MCP (Model Context Protocol) Integration

I expose six tools at `/api/mcp` using a lightweight JSON-RPC 2.0 handler:

**Tools:**
- `search_users` - Prefix search by name (case-insensitive, limit 20)
- `get_user_by_id` - Fetch single user by UUID
- `add_user` - Create user (enforces name uniqueness case-insensitively)
- `update_user` - Update user fields (partial updates, name uniqueness check)
- `delete_user` - Delete by UUID
- `list_users` - Paginated list (default limit 1000, max 10000)

**Transport:**
- POST `/api/mcp` for JSON-RPC requests (HTTP transport)
- GET `/api/mcp` returns error message (SSE not implemented in lightweight handler)
- Simplified adapter: accepts `{ tool: "search_users", input: { query: "john" } }` and converts to JSON-RPC `tools/call`

**Authorization:**
- Session cookie (web UI) OR
- API key via `Authorization: Bearer <token>`, `x-api-key: <token>` header, or `?api_key=<token>` query param

**CORS:**
- Enabled for cross-origin agent access
- Allows `Authorization` and `x-api-key` headers
- All responses include `Access-Control-Allow-Origin: *`

### Data Layer

**Database:**
- Postgres via `pg` Pool (`lib/db.ts`)
- Connection string from `DATABASE_URL` env var
- SSL enabled with `rejectUnauthorized: false` for managed Postgres hosts

**Tables:**
- `users` (id, name, phone_number, email) - User data with unique case-insensitive name index
- `mcp_api_keys` (id, user_ref, token, created_at, revoked) - API key management

**In-memory fallback:**
- When `DATABASE_URL` is absent, `lib/mcpKeys.ts` uses Map-based storage for local dev

**Validation:**
- Zod schemas in `app/actions/schemas.ts`:
  - `userSchema`: Full user object with UUID id
  - `userFormSchema`: Omits id for create/update forms
  - Phone number must match Australian mobile format: `/^04\d{8}$/`
  - Email must be valid email format

### Server Actions & Route Handlers

**Server Actions** (`app/actions/actions.ts`):
- `searchUsers(query)` - Case-insensitive prefix search
- `getUserById(id)` - Cached with React `cache()`
- `addUser(data)` - Validates uniqueness, generates UUID
- `updateUser(id, partial)` - Merges fields, validates uniqueness
- `deleteUser(id)` - Deletes and revalidates path
- `listUsers({ offset, limit })` - Paginated list

All actions call `requireAuth()` which accepts either:
- Session via `auth()` (NextAuth)
- OR MCP authorization via `isMcpAuthorized()` (set by `/api/mcp` route)

**API Routes:**
- `/api/auth/[...nextauth]/route.ts` - NextAuth handlers with `runtime = 'nodejs'` and `dynamic = 'force-dynamic'`
- `/api/mcp/route.ts` - Main MCP endpoint with JSON-RPC handler
- `/api/mcp/session-key/route.ts` - GET to issue/return API key, DELETE to revoke all keys
- `/api/mcp/info/route.ts` - Metadata endpoint (masked token preview, auth requirements)
- `/api/people/route.ts` - GET search endpoint, POST create endpoint (session-protected)

### Component Architecture

**Server Components:**
- `app/page.tsx` - Home page with async `searchParams`
- `app/components/user-search.tsx` - Fetches user by ID server-side, passes to child components
- `app/components/user-card.tsx` - Displays user details

**Client Components:**
- `app/components/search-input-cmd.tsx` - cmdk-based search with async user lookup
- `app/components/user-dialog.tsx` - Add user modal with React Hook Form + Zod
- `app/components/user-edit-dialog.tsx` - Edit user modal
- `app/components/delete-button.tsx` - Delete confirmation with toast feedback
- `app/components/mcp-connect.tsx` - Displays API key and connection instructions for agents
- `app/components/auth-status.tsx` - Shows sign in/out button based on session

**Layout:**
- `app/layout.tsx` - Root layout with ThemeProvider, SessionProvider, Navbar, Footer, Toaster
- `app/components/navbar.tsx` - Navigation with auth-aware links
- `app/components/footer.tsx` - Site footer

### Middleware & Protection

`middleware.ts` exports `auth` from `auth.ts` to protect:
- `/api/people/:path*` - Requires active session

The MCP endpoint (`/api/mcp`) is **not** in the middleware matcher because it handles authorization internally to support header-based API keys (middleware can't read bodies/headers for key extraction in Edge runtime).

---

## OAuth (Google) Configuration

### Configuration Files

**`auth.ts`:**
```typescript
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
  trustHost: true,
})
```

**Key settings:**
- `secret`: Accepts either `AUTH_SECRET` (NextAuth v5 standard) or `NEXTAUTH_SECRET` (legacy)
- `trustHost: true`: Allows dynamic host URLs (essential for Vercel preview/production)
- No `AUTH_URL` needed: `trustHost` auto-detects the host from incoming requests

**`app/api/auth/[...nextauth]/route.ts`:**
```typescript
import { handlers } from '@/auth'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const { GET, POST } = handlers
```

Forces Node.js runtime and disables static optimization for auth routes.

### Google Cloud Setup

1. **Create a project** in Google Cloud Console
2. **Enable Google Identity Services API**
3. **Create OAuth 2.0 Client ID** (type: Web application)
4. **Add authorized redirect URIs**:
   - Local: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://your-domain.com/api/auth/callback/google`
   - Vercel preview: `https://your-project-*.vercel.app/api/auth/callback/google`
5. **Copy Client ID and Secret** to `.env.local`


### Environment Variables

```bash
# Required
GOOGLE_CLIENT_ID=123456789.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abc123...

# Use either (v5 prefers AUTH_SECRET)
AUTH_SECRET=<generate with: openssl rand -base64 32>
# OR: NEXTAUTH_SECRET=<same format>

# Optional for production
DATABASE_URL=postgres://user:pass@host:5432/dbname
```

### Verification

```bash
pnpm dev
```

- Visit `http://localhost:3000/api/auth/providers` → Google should appear
- Sign in via UI → Visit `/api/auth/session` → JSON with user info should be present

###Troubleshooting

| Error | Solution |
|-------|----------|
| "MissingSecret" 500 | Set `AUTH_SECRET` or `NEXTAUTH_SECRET` |
| Redirect URI mismatch | Add exact callback URL to Google OAuth Client |
| Invalid credentials | Regenerate Client Secret in Google Cloud |
| Provider not listed | Verify env vars and restart dev server |

---

## MCP Integration Details

### API Key Management

**Endpoints:**
- `GET /api/mcp/session-key` - Issue or return existing API key for signed-in user
- `GET /api/mcp/session-key?rotate=1` - Revoke all keys and issue a new one
- `DELETE /api/mcp/session-key` - Revoke all keys for current user
- `GET /api/mcp/info` - Metadata and masked token preview

**Example: Get API Key**
```bash
# After signing in via browser, fetch your key:
curl http://localhost:3000/api/mcp/session-key \
  -H "Cookie: authjs.session-token=<your-session-cookie>"

# Response:
# { "apiKey": "abc123...xyz789" }
```

**Example: Using MCP Tools**
```bash
# Initialize connection
curl -X POST http://localhost:3000/api/mcp \
  -H "Authorization: Bearer <your-api-key>" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize"}'

# Call search_users tool
curl -X POST http://localhost:3000/api/mcp \
  -H "x-api-key: <your-api-key>" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"search_users","arguments":{"query":"john"}}}'

# Simplified format (auto-converted)
curl -X POST http://localhost:3000/api/mcp?api_key=<your-key> \
  -d '{"tool":"search_users","input":{"query":"john"}}'
```

### VS Code MCP Configuration

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "person-search": {
      "url": "http://localhost:3000/api/mcp?api_key=<your-key>",
      "type": "http"
    }
  }
}
```

Reload VS Code, and the MCP tools will be available to GitHub Copilot.

---

## How It Works: Next.js 15 & React 19

### Async `searchParams`

Next.js 15 changed `searchParams` from a plain object to a Promise:

```tsx
export default async function UserSearch({ 
  searchParams 
}: { 
  searchParams: Promise<{ userId?: string }> 
}) {
  const resolvedSearchParams = await searchParams
  const selectedUserId = resolvedSearchParams?.userId || null
  const user = selectedUserId ? await getUserById(selectedUserId) : null

  return (
    <div className="space-y-6">
      <SearchInput />
      {selectedUserId && (
        <Suspense fallback={<p>Loading user...</p>}>
          {user ? <UserCard user={user} /> : null}
        </Suspense>
      )}
    </div>
  )
}
```

### Server-Side Data Fetching

- `getUserById` is cached with React's `cache()`
- Fetched once per page load in the Server Component
- Passed as props to child components via server-to-client hydration

### Client-Server Interaction

`SearchInput` updates the URL when a user is selected:

```tsx
const handleSelect = (userId: string) => {
  window.history.pushState({}, '', `/?userId=${userId}`)
  window.location.reload() // Triggers server re-render
}
```

---

## Project Structure

```
person-search/
├── app/
│   ├── actions/
│   │   ├── actions.ts          # Server actions (CRUD)
│   │   └── schemas.ts          # Zod schemas
│   ├── api/
│   │   ├── auth/[...nextauth]/ # NextAuth handlers
│   │   ├── mcp/                # MCP endpoint + key management
│   │   │   ├── route.ts        # Main JSON-RPC handler
│   │   │   ├── session-key/    # API key CRUD
│   │   │   └── info/           # Metadata
│   │   ├── people/             # Session-protected API
│   │   └── debug-logs/         # Debug logging
│   ├── components/
│   │   ├── user-search.tsx     # Server: search results
│   │   ├── search-input-cmd.tsx # Client: cmdk search
│   │   ├── user-card.tsx       # User display
│   │   ├── user-dialog.tsx     # Add modal
│   │   ├── user-edit-dialog.tsx # Edit modal
│   │   ├── delete-button.tsx   # Delete confirmation
│   │   ├── mcp-connect.tsx     # MCP setup UI
│   │   ├── auth-status.tsx     # Sign in/out
│   │   ├── navbar.tsx          # Navigation
│   │   └── footer.tsx          # Footer
│   ├── globals.css
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/ui/              # shadcn/ui components
├── lib/
│   ├── db.ts                   # Postgres pool
│   ├── mcpKeys.ts              # API key management
│   ├── authz.ts                # Auth context
│   ├── logger.ts               # Event logging
│   └── utils.ts                # Utilities
├── auth.ts                     # NextAuth config
├── middleware.ts               # Route protection
├── next.config.ts              # Next.js config
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Import project** in Vercel dashboard
3. **Add environment variables**:
   ```
   AUTH_SECRET=<generate new secret>
   GOOGLE_CLIENT_ID=<from Google Cloud>
   GOOGLE_CLIENT_SECRET=<from Google Cloud>
   DATABASE_URL=<Vercel Postgres connection string>
   ```
4. **Update Google OAuth** redirect URIs to include:
   ```
   https://your-project.vercel.app/api/auth/callback/google
   ```
5. **Deploy** → Vercel auto-builds and deploys

### Docker (Optional)

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
CMD ["pnpm", "start"]
```

---

## Testing

I include basic test setup with Vitest:

```bash
pnpm test
```

Test files use `.test.ts` or `.spec.ts` extensions.
