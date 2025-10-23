import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { generateKey, listForUser, revokeAllForUser } from '@/lib/mcpKeys'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  const session = await auth()
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const url = new URL(req.url)
  const wantsNew = url.searchParams.get('new') === '1' || url.searchParams.get('rotate') === '1'
  const userRef = session.user.email
  if (wantsNew) {
    await revokeAllForUser(userRef)
    const token = await generateKey(userRef)
    return NextResponse.json({ apiKey: token, rotated: true })
  }
  const existing = await listForUser(userRef)
  const token = existing[0] || await generateKey(userRef)
  return NextResponse.json({ apiKey: token })
}

export async function DELETE() {
  const session = await auth()
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  await revokeAllForUser(session.user.email)
  return NextResponse.json({ ok: true })
}
