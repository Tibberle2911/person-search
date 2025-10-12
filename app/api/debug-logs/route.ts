import { NextResponse } from 'next/server'
import { logEvent, getLogs } from '@/lib/logger'

export function GET() {
  logEvent({ type: 'debug.ping', payload: { ts: new Date().toISOString() } })
  const entries = getLogs()
  return NextResponse.json(entries)
}
