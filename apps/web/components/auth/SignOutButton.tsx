'use client';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    // First, perform the sign-out without an automatic redirect.
    await signOut({ redirect: false });

    // After the sign-out is complete, manually push the user to the homepage.
    // This approach is often more reliable in production environments.
    router.push('/');
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}

