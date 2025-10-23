"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Copy } from "lucide-react"
import { useState } from "react"

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const { toast } = useToast()
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      toast({ title: "Copied", description: label + " copied to clipboard." })
      setTimeout(() => setCopied(false), 1200)
    } catch {
      toast({ title: "Copy failed", description: "Select and copy manually.", variant: "destructive" })
    }
  }

  return (
    <Button size="sm" variant="secondary" onClick={onCopy} aria-label={label} title={label} className="shrink-0">
      <Copy className="h-4 w-4 mr-1" /> {copied ? "Copied" : label}
    </Button>
  )
}
