"use client"

import { useSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export default function AuthStatus() {
	const { data: session, status } = useSession()
	const [apiKey, setApiKey] = useState<string | null>(null)

	useEffect(() => {
		let cancelled = false
		async function fetchKey() {
			if (!session?.user) {
				if (!cancelled) setApiKey(null)
				return
			}
			try {
				const r = await fetch('/api/mcp/session-key', { cache: 'no-store' })
				if (!r.ok) return
				const data = await r.json()
				if (!cancelled) setApiKey(data.apiKey)
			} catch {}
		}
		fetchKey()
		return () => { cancelled = true }
	}, [session?.user])

	async function handleSignOut() {
		try { await fetch('/api/mcp/session-key', { method: 'DELETE' }) } catch {}
		await signOut({ callbackUrl: '/' })
	}

	if (status === 'loading') {
		return <div className="text-sm text-muted-foreground">Checking auth…</div>
	}

	if (!session?.user) {
		return (
			<div className="flex items-center gap-3">
				<span className="text-sm text-muted-foreground">Not signed in</span>
				<Button size="sm" onClick={() => signIn('google')}>Sign in with Google</Button>
			</div>
		)
	}

	const name = session.user.name || session.user.email || 'User'

	return (
		<div className="flex items-center gap-3">
			<span className="text-sm">{name}</span>
			{apiKey ? (
				<span>
				</span>
			) : (
				<span className="text-xs text-muted-foreground">Generating key…</span>
			)}
			<Button size="sm" variant="outline" onClick={handleSignOut}>Sign out</Button>
		</div>
	)
}

