import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

export default function GithubPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">GitHub Repository</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Source Code</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The source code for this project is available on GitHub. You can browse the repository, open issues,
              or contribute via pull requests.
            </p>
            <Button asChild>
              <Link href="https://github.com/Tibberle2911/person-search" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>More resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/database">Database</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
