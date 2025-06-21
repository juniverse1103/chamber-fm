import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';
import { SignOutButton } from '@/components/auth/SignOutButton';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return null; // Should be handled by middleware, but as a fallback
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
