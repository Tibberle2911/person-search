# Person Search MCP Server

An MCP (Model Context Protocol) server that exposes the Person Search database as tools: search, get, add, update, and delete.

## Tools
- search_users: query by name prefix
- get_user_by_id: fetch one user
- add_user: create
- update_user: update
- delete_user: remove

All tools validate inputs with Zod.

## Env
- DATABASE_URL: Postgres connection string

## Run
```bash
pnpm install
pnpm -C mcp-server install
pnpm -C mcp-server dev
```

Use with an MCP-compatible client by referencing the `start` command or the built `dist/index.js`.