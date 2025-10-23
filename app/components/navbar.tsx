// app/components/navbar.tsx
'use client'

import Link from 'next/link'
import { Search, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import dynamic from 'next/dynamic'

const AuthStatus = dynamic(() => import('./auth-status'), { ssr: false })

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-background border-b">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Search className="h-7 w-7 text-primary" aria-hidden="true" />
              <span className="ml-2 text-lg font-semibold text-foreground">Person Search</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary">Home</Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary">About</Link>
            <Link href="/github" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary">GitHub</Link>
            <Link href="/database" className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary">Database</Link>
            <div className="mx-2 h-5 w-px bg-border" />
            <AuthStatus />
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              <span className="sr-only">Toggle theme</span>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z" clipRule="evenodd" /></svg>}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden bg-background border-t ${open ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">Home</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">About</Link>
          <Link href="/github" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">GitHub</Link>
          <Link href="/database" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">Database</Link>
          <div className="px-3 py-2">
            <AuthStatus />
          </div>
          <div className="px-3 py-2">
            <Button variant="outline" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle theme</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}