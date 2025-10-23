import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    // Accept either AUTH_SECRET (v5) or NEXTAUTH_SECRET (legacy) to be robust across envs
    secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET,
    // Allows dynamic hosts (Vercel preview/production) without setting (NEXT)AUTH_URL for each URL
    trustHost: true,
    // Note: Per-user MCP keys are managed via /api/mcp/session-key endpoints to keep
    // Node-only code out of Edge-compatible areas like middleware.
})