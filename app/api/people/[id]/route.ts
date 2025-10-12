import { NextRequest, NextResponse } from 'next/server'
import { getUserById, updateUser, deleteUser } from '@/app/actions/actions'

export async function GET(request: NextRequest, context: unknown) {
  const params = (context && typeof context === 'object' && 'params' in context)
    ? (context as unknown as { params?: unknown }).params
    : undefined
  const resolvedParams = params instanceof Promise ? await params : params
  const { id } = resolvedParams || {}
  try {
    const user = await getUserById(id)
    if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(user)
  } catch (err: unknown) {
    console.error('Error fetching user:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, context: unknown) {
  const params = (context && typeof context === 'object' && 'params' in context)
    ? (context as unknown as { params?: unknown }).params
    : undefined
  const resolvedParams = params instanceof Promise ? await params : params
  const { id } = resolvedParams || {}
  try {
    const body = await request.json()
    const updated = await updateUser(id, body)
    return NextResponse.json(updated)
  } catch (err: unknown) {
    console.error('Error updating user:', err)
    const message = (err && typeof err === 'object' && 'message' in err)
      ? String((err as { message?: unknown }).message)
      : String(err)
    if (message === 'User with this name already exists') {
      return NextResponse.json({ error: message }, { status: 409 })
    }
    return NextResponse.json({ error: message || 'Invalid data' }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest, context: unknown) {
  const params = (context && typeof context === 'object' && 'params' in context)
    ? (context as unknown as { params?: unknown }).params
    : undefined
  const resolvedParams = params instanceof Promise ? await params : params
  const { id } = resolvedParams || {}
  try {
    await deleteUser(id)
    return NextResponse.json({ message: 'Deleted' })
  } catch (err: unknown) {
    console.error('Error deleting user:', err)
    const message = (err && typeof err === 'object' && 'message' in err)
      ? String((err as { message?: unknown }).message)
      : String(err)
    return NextResponse.json({ error: message || 'Not found' }, { status: 404 })
  }
}
