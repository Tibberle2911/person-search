import UserSearch from './components/user-search'
import { UserDialog } from './components/user-dialog'
import McpConnect from './components/mcp-connect'

export default async function Home({ searchParams }: { searchParams: Promise<{ userId?: string }> }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold">User Search</h1>
          <p className="text-sm text-muted-foreground">Please login to use this application.</p>
          <UserSearch searchParams={searchParams} />
          <UserDialog />
          <McpConnect />
        </div>
      </main>
    </div>
  )
}
