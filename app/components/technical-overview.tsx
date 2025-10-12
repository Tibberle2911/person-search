"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type LogEntry = { id: string; type: string; payload?: any; timestamp: string }

export function TechnicalOverview() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchLogs() {
    try {
      const res = await fetch('/api/logs')
      const data = await res.json()
      setLogs(data)
    } catch (err) {
      console.error('Failed to fetch logs', err)
    }
  }

  useEffect(() => {
    fetchLogs()
    const id = setInterval(fetchLogs, 2000)
    return () => clearInterval(id)
  }, [])

  async function clear() {
    setLoading(true)
    await fetch('/api/logs', { method: 'POST' })
    await fetchLogs()
    setLoading(false)
  }

  return (
    <Card className="mt-12">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <CardTitle>Request & DB Log</CardTitle>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={clear} disabled={loading}>Clear</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-48 sm:h-56 md:h-64 overflow-auto bg-muted/40 rounded p-2 text-sm sm:text-sm">
          {logs.length === 0 ? (
            <div className="text-muted-foreground">No logs yet.</div>
          ) : (
            <ul className="space-y-2">
              {logs.map((l) => (
                <li key={l.id} className="border-b pb-1">
                  <div className="text-xs sm:text-xs text-muted-foreground">{new Date(l.timestamp).toLocaleString()}</div>
                  <div className="font-medium text-sm sm:text-base">{l.type}</div>
                  <pre className="text-xs sm:text-sm whitespace-pre-wrap">{JSON.stringify(l.payload)}</pre>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

