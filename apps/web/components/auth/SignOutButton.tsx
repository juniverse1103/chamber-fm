'use client';

// import { signOut } from 'next-auth/react'; // Temporarily disabled
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = () => {
    // TEMPORARY WORKAROUND: The real signOut() is disabled to prevent errors
    // in development while production environment variables are being fixed.
    // This button will simply redirect to the homepage for now.
    // Once the server config is fixed, re-enable the signOut call:
    // await signOut({ redirect: false });

    router.push('/');
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}


