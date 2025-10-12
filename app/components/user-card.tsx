// components/user-card.tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail } from 'lucide-react'
import { User } from '@/app/actions/schemas'
import DeleteButton from './delete-button'
import { UserEditDialog } from './user-edit-dialog'

interface UserCardProps {
  user: User
}

console.log("UserCard module loaded");

export default function UserCard({ user }: UserCardProps) {
  if (!user || !user.name) {
    console.error("UserCard: Invalid user object", user);
    return <p>Error: Invalid user data</p>;
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
          <AvatarFallback>{user.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col w-full">
          <CardTitle className="text-lg sm:text-2xl break-words">{user.name}</CardTitle>
          <Badge variant="secondary" className="w-fit mt-1">ID: {user.id}</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-3 text-sm">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <span className="truncate">{user.phoneNumber}</span>
        </div>
        {user.email && (
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="truncate">{user.email}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-2">
        <div className="w-full sm:w-auto"><DeleteButton userId={user.id} /></div>
        <div className="w-full sm:w-auto"><UserEditDialog user={user} /></div>
      </CardFooter>
    </Card>
  );
}
