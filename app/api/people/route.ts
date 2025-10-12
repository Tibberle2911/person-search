import { NextRequest, NextResponse } from 'next/server'
import { User } from '@/app/actions/schemas'
import { searchUsers } from '@/app/actions/actions'
import { addUser } from '@/app/actions/actions'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 })
  }

  try {
    const users: User[] = await searchUsers(query)

    if (users.length === 0) {
      return NextResponse.json({ message: 'No users found' }, { status: 404 })
    }

    return NextResponse.json(users)
  } catch (error: unknown) {
    console.error('Error searching users:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const created = await addUser(body)
    return NextResponse.json(created, { status: 201 })
  } catch (err: unknown) {
    console.error('Error creating user:', err)
    const message = (err && typeof err === 'object' && 'message' in err)
      ? String((err as { message?: unknown }).message)
      : String(err)
    if (message === 'User with this name already exists') {
      return NextResponse.json({ error: message }, { status: 409 })
    }
    return NextResponse.json({ error: message || 'Invalid data' }, { status: 400 })
  }
}