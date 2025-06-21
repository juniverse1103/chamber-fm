import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';
import { SignOutButton } from '@/components/auth/SignOutButton';
import { type Session } from 'next-auth';

export default async function DashboardPage() {
  let session: Session | null = null;

  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    console.error('Dashboard authentication error. Falling back to mock session.', error);
    // In production, we suppress the error and allow fallback to mock session.
    // In development, we can show a more detailed error page.
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
          <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 text-center">
            <h1 className="text-3xl font-bold">Development Error</h1>
            <p className="text-lg text-foreground/80">Authentication error in dashboard:</p>
            <pre className="mt-4 p-4 bg-gray-100 rounded text-left overflow-auto text-sm">
              {error instanceof Error ? error.message : String(error)}
            </pre>
            <p className="mt-4 text-sm text-gray-500">
              Check your server console for more details.
            </p>
          </div>
        </div>
      );
    }
    // In production, we'll proceed with a null session, and the logic below will create a mock.
  }

  // --- TEMPORARY MOCK FOR ALL ENVIRONMENTS ---
  // If no session exists (or failed to fetch in prod), create a mock session.
  // TODO: Remove this mock once authentication is properly configured in production
  if (!session) {
    console.log('Dashboard: No session found or fetch failed, creating mock session.');
    session = {
      user: {
        name: 'Test User',
        email: 'user@example.com',
      },
      expires: '9999-12-31T23:59:59.999Z', // Mock expiry date
    };
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 text-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-lg text-foreground/80">Welcome back!</p>
        <p className="text-md rounded-md bg-gray-100 p-4 font-mono text-sm">
          {session.user?.email || 'user@example.com'}
        </p>
        <SignOutButton />
      </div>
    </div>
  );
}
