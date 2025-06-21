import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';
import { SignOutButton } from '@/components/auth/SignOutButton';

export default async function DashboardPage() {
  let session = await getServerSession(authOptions);

  // --- DEVELOPMENT MOCK ---
  // If no session exists, create a mock session to allow UI development.
  // To restore real authentication, remove this mock block.
  if (!session) {
    session = {
      user: {
        name: 'Test User',
        email: 'user@example.com',
      },
      expires: '9999-12-31T23:59:59.999Z', // Mock expiry date
    };
  }
  // ------------------------

  if (!session?.user) {
    // This should now only trigger if the session exists but the user object is missing.
    // The middleware should ideally handle the redirect for unauthenticated users.
    return <p>No user session found. Please sign in.</p>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-lg text-foreground/80">Welcome back!</p>
        <p className="text-md rounded-md bg-gray-100 p-4 font-mono text-sm">{session.user.email}</p>
        <SignOutButton />
      </div>
    </div>
  );
}
