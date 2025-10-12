import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Architecture() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Architecture</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">This application is built with Next.js 15 (App Router) and React 19. It aims to favour server rendering for fast first contentful paint and to keep client-side JavaScript minimal while providing interactivity where needed.</p>

        <h3 className="font-semibold mt-4">Key principles</h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground">
          <li>Server Components are used where possible for rendering static or server-driven UI.</li>
          <li>Client Components power interactive parts such as forms, dialogs, the command palette, and polling UI.</li>
          <li>API routes under <code>app/api</code> provide REST-like endpoints for searching and CRUD operations.</li>
          <li>The project includes Prisma as a dependency (recommended), but the current action implementations use a shared <code>pg</code> Pool for raw SQL queries. The repository includes an example Prisma schema in the documentation.</li>
          <li>UI primitives and components are provided by shadcn/ui and Tailwind CSS for consistent styling and accessibility.</li>
          <li>An in-memory server-side logger is used for development to display live request and DB event logs on the homepage.</li>
        </ul>

        <h3 className="font-semibold mt-4">Data flow (simplified)</h3>
        <ol className="list-decimal list-inside text-sm text-muted-foreground">
          <li>The browser triggers a search or action (via the command UI or forms).</li>
          <li>A client-side request calls an API route or server action.</li>
          <li>Server logic validates inputs, interacts with the database via the Pool (or Prisma if adopted), and emits log events.</li>
          <li>The server responds; the client hydrates interactive components where needed.</li>
        </ol>
      </CardContent>
    </Card>
  )
}

function TechStack() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Technology stack</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-3">A concise list of the primary libraries, tooling, and services used by this project.</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-inside text-sm text-muted-foreground">
          <li><strong>Framework:</strong> Next.js 15 (App Router)</li>
          <li><strong>UI:</strong> Tailwind CSS + shadcn/ui</li>
          <li><strong>Language:</strong> TypeScript + React 19</li>
          <li><strong>Database:</strong> Postgres (raw <code>pg</code> Pool used in actions; Prisma is listed as dependency)</li>
          <li><strong>Auth:</strong> NextAuth (routes under <code>app/api/auth</code>)</li>
          <li><strong>Package manager:</strong> pnpm (recommended)</li>
          <li><strong>Icons:</strong> lucide-react</li>
          <li><strong>Build tooling:</strong> Turbopack (used by Next dev)</li>
        </ul>

        <h3 className="font-semibold mt-4">Developer tools & workflow</h3>
        <p className="text-sm text-muted-foreground">Use pnpm to install and run scripts. Typical developer commands:</p>
        <pre className="bg-muted p-3 rounded text-sm mt-2">pnpm install
pnpm dev
pnpm build
pnpm lint</pre>
      </CardContent>
    </Card>
  )
}

function DevelopmentNotes() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Development & Testing</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-sm text-muted-foreground">Recommended local workflow:</p>
        <ol className="list-decimal list-inside text-sm text-muted-foreground">
          <li>Install dependencies with <code>pnpm install</code>.</li>
          <li>Run the dev server with <code>pnpm dev</code> and open <code>http://localhost:3000</code>.</li>
          <li>If you use Prisma locally, create migrations and run <code>prisma migrate dev</code> when the schema changes.</li>
          <li>Run linting and type checks before committing: <code>pnpm lint</code> and <code>pnpm dlx tsc --noEmit</code>.</li>
        </ol>

        <p className="mt-4 text-sm text-muted-foreground">Testing: the project includes a small unit test suite (Vitest) that exercises server actions and mocks the DB. Recommended testing additions:</p>
        <ul className="list-disc list-inside text-sm text-muted-foreground">
          <li>Expand Vitest coverage for UI components using React Testing Library.</li>
          <li>Add Playwright for end-to-end tests in CI to validate search and CRUD flows against a test database.</li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Person Search</h1>
        <Architecture />
        <TechStack />
        <DevelopmentNotes />
      </main>
    </div>
  )
}

