import { handlers } from "@/auth"

export const { GET, POST } = handlers

// Ensure this route always runs on Node.js and is not statically optimized/cached
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'