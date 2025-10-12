import { NextResponse } from 'next/server'
import { getLogs, clearLogs } from '@/lib/logger'

export function GET() {
  console.log('GET /api/logs called, returning', getLogs().length, 'entries')
  return NextResponse.json(getLogs())
}

export async function POST() {
  // Clear logs
  console.log('POST /api/logs called - clearing logs')
  clearLogs()
  return NextResponse.json({ ok: true })
}
