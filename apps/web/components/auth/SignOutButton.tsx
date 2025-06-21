'use client';

import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui';

export function SignOutButton() {
  // Use absolute URL to ensure it works in all environments
  const handleSignOut = () => {
    // By default, signOut redirects to the current page after sign-out.
    // To redirect to the homepage, we can specify a simple relative path.
    // This is more reliable than constructing a full URL with window.location.
    signOut({ callbackUrl: '/' });
  };
  return <Button onClick={handleSignOut}>Sign Out</Button>;
}
