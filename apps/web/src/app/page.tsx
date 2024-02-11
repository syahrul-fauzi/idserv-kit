import { redirect } from 'next/navigation';

import { getSession } from '@orbitkit/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@orbitkit/ui/avatar';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export default async function Home() {
  const { user } = await getSession();
  if (!user) {
    return redirect('/login');
  }

  return (
    <main className="container mx-auto py-6 px-6">
      <h1>Next.js app, your user id is {user.id}</h1>
      <ThemeSwitcher />
      <Avatar>
        <AvatarImage src={user.avatarUrl} alt={user.name} />
        <AvatarFallback>
          {user.name
            ?.split(' ')
            .map((w) => w[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
    </main>
  );
}
