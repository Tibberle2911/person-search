import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DatabasePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Database & Prisma Schema</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Schema & Validation (Zod)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">The project uses a server-side validation schema defined with <code>zod</code>. Below is the exact validation schema used by the server actions (from <code>app/actions/schemas.ts</code>).</p>

            <pre className="bg-muted p-3 rounded text-sm overflow-auto">{`import { z } from "zod"

export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().regex(/^04\d{8}$/, { message: "Phone number must be a valid Australian mobile number (e.g., 0422018632)." }),
})

export type User = z.infer<typeof userSchema>

export const userFormSchema = userSchema.omit({ id: true })
export type UserFormData = z.infer<typeof userFormSchema>
`}</pre>

            <h3 className="font-semibold mt-4">Validation rules explained</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li><strong>id</strong>: string (UUID is recommended when persisting to the DB).</li>
              <li><strong>name</strong>: required string, minimum 2 characters. This prevents empty or one-letter names.</li>
              <li><strong>email</strong>: required and must be a valid email address per Zod&apos;s email validator.</li>
              <li><strong>phoneNumber</strong>: validated against an Australian mobile pattern (<code>04########</code>) via regex.</li>
            </ul>

            <h3 className="font-semibold mt-4">Mapping to a relational model</h3>
            <p className="text-sm text-muted-foreground mb-2">Use the Zod schema as the single source of truth for validating incoming requests. When persisting to Postgres (Prisma or raw SQL), map fields accordingly:</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li><code>id</code>: <code>UUID</code> primary key (Prisma: <code>String @id @default(uuid())</code>).</li>
              <li><code>name</code>: map to a single <code>name</code> column (or <code>firstName/lastName</code> if you prefer decomposition).</li>
              <li><code>email</code>: <code>VARCHAR</code>, add a unique index if necessary (<code>@unique</code> in Prisma).</li>
              <li><code>phoneNumber</code>: <code>VARCHAR</code> restricted by application-level validation; consider an index if you search by phone.</li>
            </ul>

            <h3 className="font-semibold mt-4">Uniqueness & indexing</h3>
            <p className="text-sm text-muted-foreground">To enforce uniqueness (for example, unique name constraint used earlier in actions), create a DB-level constraint or a functional index for case-insensitive matches:</p>
            <pre className="bg-muted p-3 rounded text-sm mt-2">CREATE UNIQUE INDEX users_unique_lower_name ON users ((LOWER(name)));</pre>

            <p className="mt-4 text-sm">If you&apos;d like, I can also generate a corresponding Prisma model that mirrors this Zod schema and create a starter migration and seed script for you.</p>
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
                <Link href="/github">Repository</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Button asChild variant="link" className="mt-4">
          <Link href="/">Back to Home</Link>
        </Button>
      </main>
    </div>
  )
}
