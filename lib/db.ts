import { Pool } from 'pg'

// Export a single Pool instance so it can be mocked in tests
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
})
