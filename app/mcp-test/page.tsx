"use client"

import { useState } from "react"

export default function McpTestPage() {
  const [output, setOutput] = useState<string>("")

  async function callInitialize() {
    setOutput("Calling initialize…")
    const res = await fetch("/api/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize", params: {} }),
    })
    const data = await res.json()
    setOutput(JSON.stringify(data, null, 2))
  }

  async function callToolsList() {
    setOutput("Calling tools/list…")
    const res = await fetch("/api/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 2, method: "tools/list", params: {} }),
    })
    const data = await res.json()
    setOutput(JSON.stringify(data, null, 2))
  }

  async function callListUsers() {
    setOutput("Calling list_users…")
    const res = await fetch("/api/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tool: "list_users", input: {} }),
    })
    const data = await res.json()
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">MCP Test</h1>
      <p className="text-sm text-muted-foreground">
        This page exercises the MCP endpoint using your current browser session.
        When signed out, calls should return Unauthorized. When signed in, they should succeed.
      </p>
      <div className="flex gap-3">
        <button className="px-3 py-2 rounded bg-blue-600 text-white" onClick={callInitialize}>initialize</button>
        <button className="px-3 py-2 rounded bg-blue-600 text-white" onClick={callToolsList}>tools/list</button>
        <button className="px-3 py-2 rounded bg-blue-600 text-white" onClick={callListUsers}>list_users</button>
      </div>
      <pre className="bg-muted p-4 rounded overflow-auto text-sm" style={{ maxHeight: 420 }}>{output}</pre>
    </div>
  )
}
