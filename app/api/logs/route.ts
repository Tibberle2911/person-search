import { NextResponse } from 'next/server'
import { getLogs, clearLogs } from '@/lib/logger'

export async function GET() {
  const logs = await getLogs()
  console.log('GET /api/logs called, returning', logs.length, 'entries')
  return NextResponse.json(logs)
}

export async function POST() {
  // Clear logs
  console.log('POST /api/logs called - clearing logs')
  await clearLogs()
  return NextResponse.json({ ok: true })
}
