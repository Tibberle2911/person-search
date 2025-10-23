# Person Search

## Description

Person Search is a Next.js application built on **Next.js 15** and **React 19**. I demonstrate advanced search with Server Components and `react-select`'s `AsyncSelect`. On top of that, I implement production‑ready authentication with **NextAuth v5 (Google OAuth)**, session‑protected CRUD, and cookie‑less agent access via per‑user API keys to an **MCP (Model Context Protocol)** endpoint.

With Next.js 15, `params` and `searchParams` handling changed; I redesigned the server component flow to align with Server Components.

## Features

- Asynchronous search functionality
- Server-side filtering of user data
- Server-rendered and hydrated client-side components
- Single data fetch for improved performance
- Responsive design using Tailwind CSS
- Accessibility-focused UI components from Radix UI / shadcn/ui
- Custom fonts (Geist Sans and Geist Mono)
- Improved type safety with TypeScript
- Modular and reusable component architecture
- Authentication with NextAuth v5 (Google)
- Per-user API keys for MCP over HTTP JSON-RPC

## Technologies Used

- **Next.js 15** - React framework for building modern web applications
- **React 19** - Latest React version with concurrent rendering improvements
- **TypeScript** - Strongly-typed superset of JavaScript
- **Node.js 20.17.0** - Required for compatibility with Next.js 15.1
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Collection of accessible, unstyled UI components
- **shadcn/ui** - Headless UI primitives styled with Tailwind
- **React Hook Form** - Performant and flexible forms library
- **Zod** - TypeScript-first schema declaration and validation library
- **React Select** - Flexible Select Input control for React
- **Sonner** - Lightweight toast notifications for React
- **NextAuth v5** - Authentication (Google OAuth)
- **Postgres** - Persistence for per‑user MCP API keys

### Minimum Node.js Version

I use **Node.js 20.17.0+**. Async Server Components and modern tooling require Node 20 or newer.

## Getting Started

### Prerequisites

- Node.js 20.17.0 or newer
- pnpm (preferred)

### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/Tibberle2911/person-search.git
  cd person-search
  ```

2. Install dependencies:

  ```bash
  pnpm install
  ```

3. Create a `.env.local` file in the root directory and add the env vars listed below.

### Running the Development Server

```bash
pnpm dev
```

---

## OAuth (Google) implementation

I implement authentication with NextAuth v5 using the Google provider. The key pieces are:

- `auth.ts`: I configure NextAuth, register the Google provider, accept the secret from `AUTH_SECRET` or `NEXTAUTH_SECRET`, and enable `trustHost: true`.
- `app/api/auth/[...nextauth]/route.ts`: I export `GET`/`POST` from the NextAuth handlers and force `runtime = 'nodejs'` with `dynamic = 'force-dynamic'` to avoid static optimization.

Why `trustHost`? On Vercel, preview and production URLs differ. By enabling `trustHost`, I avoid hard‑coding `AUTH_URL` for each environment.

### Environment variables

I set these for local dev and Vercel (Project Settings → Environment Variables):

```bash
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
# Either is accepted (use one):
AUTH_SECRET=...            # recommended
# NEXTAUTH_SECRET=...      # alternative

# Optional but recommended (persists API keys)
DATABASE_URL=postgres://user:pass@host:5432/db
```

Tip: I generate a strong secret (32+ random bytes base64) and add it to both Preview and Production on Vercel.

### Configure Google OAuth

1) In Google Cloud Console, I create a project and enable “Google Identity Services”.
2) I create an OAuth 2.0 Client ID (type: Web application).
3) I add authorized redirect URIs for each environment:

- Local: `http://localhost:3000/api/auth/callback/google`
- Vercel: `https://YOUR_DOMAIN/api/auth/callback/google`

4) I copy the Client ID/Secret into my environment variables.

### Sessions, JWT, and scopes

- NextAuth uses stateless JWT sessions by default; I keep this unless I need DB sessions.
- Google provider scopes default to `openid email profile`. I can extend scopes if needed.
- NextAuth manages CSRF and secure cookies; in production, cookies are set with secure flags automatically.

### Verify the setup

```bash
pnpm dev
# Then in the browser:
# - Visit /api/auth/providers → Google should appear
# - Complete sign-in → Visit /api/auth/session → session JSON should be present
```

### Troubleshooting

- 500 “MissingSecret”: I set `AUTH_SECRET` (or `NEXTAUTH_SECRET`).
- Redirect URI mismatch: I add the exact callback(s) to Google OAuth Client.
- Invalid credentials: I reissue the Client Secret and update env vars.
- No provider listed: I confirm `GOOGLE_CLIENT_ID/SECRET` are present and the server restarted.

## How It Works (Next.js 15.1 & React 19)

### Key Changes in `UserSearch` Component

1. **Server Component Design**:
   - The `user-search` component is now a **Server Component**, leveraging `searchParams` and fetching user details server-side.
   - `searchParams` are asynchronous in Next.js 15.1, so the `user-search` component resolves them before rendering.

   ```tsx
   export default async function UserSearch({ searchParams }: { searchParams: Promise<{ userId?: string }> }) {
     const resolvedSearchParams = await searchParams;
     const selectedUserId = resolvedSearchParams?.userId || null;
     const user = selectedUserId ? await getUserById(selectedUserId) : null;

     return (
       <div className="space-y-6">
         <SearchInput />
         {selectedUserId && (
           <Suspense fallback={<p>Loading user...</p>}>
             {user ? <UserCard user={user} /> : <p>User not found</p>}
           </Suspense>
         )}
       </div>
     );
   }
   ```

2. **Improved Performance**:
   - Data fetching has been optimized to avoid redundant calls. The user object is fetched once in `user-search` and passed as a prop to child components like `UserCard` and `DeleteButton`.
   - This eliminates multiple fetches, improving performance and reducing server load.

3. **Interaction with `SearchInput`**:
   - `SearchInput` remains a **Client Component**, responsible for interacting with the user through `react-select`'s `AsyncSelect`.
   - When a user is selected, the URL is updated with the user's ID using `window.history.pushState`. This triggers a re-render of `user-search` to reflect the updated state.

4. **Improved Error Handling**:
   - Validations and controlled/uncontrolled input warnings have been resolved by ensuring consistent handling in forms using React Hook Form and Zod.

5. **Concurrency & Hydration**:
   - React 19's concurrent rendering and Next.js 15.1's support for server components ensure seamless server-client hydration, reducing potential mismatches.

### Known Issues

1. **Toast Messages**:
   - Notifications in `DeleteButton` and `MutableDialog` are currently not showing. This requires debugging the integration of the `Sonner` toast library.

2. **Theme Support**:
   - The `theme-provider` for managing dark and light modes has been removed temporarily. The Tailwind stylesheets need to be updated to align with the new Next.js configuration.

3. **Hydration Warnings**:
   - Some hydration warnings may occur due to external browser extensions like Grammarly or differences in runtime environments. Suppression flags have been added, but further testing is recommended.

---

## Security and protected routes

- Middleware protects `'/api/people/*'` so CRUD requires a signed‑in session.
- MCP endpoint at `'/api/mcp'` authorizes either by session cookies or per‑user API keys.
- I accept tokens via headers or query string:
  - `Authorization: Bearer <token>`
  - `x-api-key: <token>`
  - `?api_key=<token>` (for clients that can’t set headers)

### MCP keys (per‑user)

- I persist keys in Postgres with a `revoked` flag (fallback to in‑memory locally).
- Manage keys with:
  - `GET /api/mcp/session-key` — issue/return a key; support `?rotate=1` to rotate
  - `DELETE /api/mcp/session-key` — revoke all keys for the signed‑in user
  - `GET /api/mcp/info` — returns metadata and a masked preview of the current key

### MCP transport and JSON‑RPC

- MCP runs over HTTP JSON‑RPC at `/api/mcp`.
- I enable CORS to allow `Authorization` and `x-api-key` headers so agents can call cross‑origin.
- I return JSON‑RPC error objects with HTTP 200 (agents can always parse a body).
- I normalize results to `result.content` with typed parts (`text` or `json`).

### Updated Project Structure

```
person-search/
├── app/
│   ├── components/
│   │   ├── user-search.tsx
│   │   ├── search-input.tsx
│   │   ├── user-card.tsx
│   │   ├── user-dialog.tsx
│   │   └── user-form.tsx
│   ├── actions/
│   │   ├── actions.ts
│   │   └── schemas.ts
│   └── page.tsx
├── public/
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

### Using `MutableDialog`

The `MutableDialog` component is a reusable dialog framework that can be used for both "Add" and "Edit" operations. It integrates form validation with Zod and React Hook Form, and supports passing default values for edit operations.

#### How `MutableDialog` Works

`MutableDialog` accepts the following props:
- **`formSchema`**: A Zod schema defining the validation rules for the form.
- **`FormComponent`**: A React component responsible for rendering the form fields.
- **`action`**: A function to handle the form submission (e.g., adding or updating a user).
- **`defaultValues`**: Initial values for the form fields, used for editing existing data.
- **`triggerButtonLabel`**: Label for the button that triggers the dialog.
- **`addDialogTitle` / `editDialogTitle`**: Titles for the "Add" and "Edit" modes.
- **`dialogDescription`**: Description displayed inside the dialog.
- **`submitButtonLabel`**: Label for the submit button.

#### Example: Add Operation

To use `MutableDialog` for adding a new user:

```tsx
import { MutableDialog } from './components/mutable-dialog';
import { userFormSchema, UserFormData } from './actions/schemas';
import { addUser } from './actions/actions';
import { UserForm } from './components/user-form';

export function UserAddDialog() {
  const handleAddUser = async (data: UserFormData) => {
    try {
      const newUser = await addUser(data);
      return {
        success: true,
        message: `User ${newUser.name} added successfully`,
        data: newUser,
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to add user: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  };

  return (
    <MutableDialog<UserFormData>
      formSchema={userFormSchema}
      FormComponent={UserForm}
      action={handleAddUser}
      triggerButtonLabel="Add User"
      addDialogTitle="Add New User"
      dialogDescription="Fill out the form below to add a new user."
      submitButtonLabel="Save"
    />
  );
}
```

#### Example: Edit Operation

To use `MutableDialog` for editing an existing user:

```tsx
import { MutableDialog } from './components/mutable-dialog';
import { userFormSchema, UserFormData } from './actions/schemas';
import { updateUser } from './actions/actions';
import { UserForm } from './components/user-form';

export function UserEditDialog({ user }: { user: UserFormData }) {
  const handleUpdateUser = async (data: UserFormData) => {
    try {
      const updatedUser = await updateUser(user.id, data);
      return {
        success: true,
        message: `User ${updatedUser.name} updated successfully`,
        data: updatedUser,
      };
    } catch (error) {
      return {
        success: false,
        message: `Failed to update user: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
    }
  };

  return (
    <MutableDialog<UserFormData>
      formSchema={userFormSchema}
      FormComponent={UserForm}
      action={handleUpdateUser}
      defaultValues={user} // Pre-fill form fields with user data
      triggerButtonLabel="Edit User"
      editDialogTitle="Edit User Details"
      dialogDescription="Modify the details below and click save to update the user."
      submitButtonLabel="Update"
    />
  );
}
```

### Note: Future Refactoring for `ActionState` with React 19

The `MutableDialog` component currently uses a custom `ActionState` type to handle the result of form submissions. However, React 19 introduces built-in support for `ActionState` in Server Actions, which can simplify this implementation. 

#### Improvements to Make:
- Replace the custom `ActionState` interface with React 19's built-in `ActionState`.
- Use the `ActionState` directly within the form submission logic to align with React 19 best practices.
- Refactor error handling and success notifications to leverage React's server-side error handling.

This will be addressed in a future update to ensure the `MutableDialog` component remains aligned with React 19's capabilities.

## Contributing

Contributions are welcome! Please submit a Pull Request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Next.js team for the framework
- Radix UI for accessible components
- All contributors of the open-source libraries used in this project

## Contact

Callum Bir - [@callumbir](https://twitter.com/callumbir)  
Project Link: [https://github.com/Tibberle2911/person-search](https://github.com/Tibberle2911/person-search)

