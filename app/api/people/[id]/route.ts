import { NextRequest, NextResponse } from 'next/server'
import { getUserById, updateUser, deleteUser } from '@/app/actions/actions'

export async function GET(request: NextRequest, context: any) {
  const params = (context?.params instanceof Promise) ? await context.params : context?.params
  const { id } = params || {}
  try {
    const user = await getUserById(id)
    if (!user) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(user)
  } catch (err) {
    console.error('Error fetching user:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, context: any) {
  const params = (context?.params instanceof Promise) ? await context.params : context?.params
  const { id } = params || {}
  try {
    const body = await request.json()
    const updated = await updateUser(id, body)
    return NextResponse.json(updated)
  } catch (err: any) {
    console.error('Error updating user:', err)
    if (err?.message === 'User with this name already exists') {
      return NextResponse.json({ error: err.message }, { status: 409 })
    }
    return NextResponse.json({ error: err?.message || 'Invalid data' }, { status: 400 })
  }
}

export async function DELETE(request: NextRequest, context: any) {
  const params = (context?.params instanceof Promise) ? await context.params : context?.params
  const { id } = params || {}
  try {
    await deleteUser(id)
    return NextResponse.json({ message: 'Deleted' })
  } catch (err: any) {
    console.error('Error deleting user:', err)
    return NextResponse.json({ error: err?.message || 'Not found' }, { status: 404 })
  }
}
