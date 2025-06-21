import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/auth';
import { SignOutButton } from '@/components/auth/SignOutButton';

export default async function DashboardPage() {
  // Wrap in try/catch to handle potential auth errors gracefully
  try {
    let session = await getServerSession(authOptions);

    // --- DEVELOPMENT MOCK ---
    // If no session exists and we're in development, create a mock session
    if (!session && process.env.NODE_ENV === 'development') {
      session = {
        user: {
          name: 'Test User',
          email: 'user@example.com',
        },
        expires: '9999-12-31T23:59:59.999Z', // Mock expiry date
      };
    }
    // ------------------------

    // If we're in production and there's no session, redirect to sign in
    if (!session?.user) {
      // Return a friendly message instead of redirecting
      // This prevents server component errors in production
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
          <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 text-center">
            <h1 className="text-3xl font-bold">Authentication Required</h1>
            <p className="text-lg text-foreground/80">Please sign in to access the dashboard.</p>
            <a
              href="/signin"
              className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
            >
              Sign In
            </a>
          </div>
        </div>
      );
    }

    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 text-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-lg text-foreground/80">Welcome back!</p>
          <p className="text-md rounded-md bg-gray-100 p-4 font-mono text-sm">
            {session.user.email}
          </p>
          <SignOutButton />
        </div>
      </div>
    );
  } catch (error) {
    // Handle any errors that occur during authentication
    console.error('Dashboard authentication error:', error);

    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="w-full max-w-md space-y-6 rounded-xl border bg-white p-8 text-center">
          <h1 className="text-3xl font-bold">Something went wrong</h1>
          <p className="text-lg text-foreground/80">
            We encountered an issue loading your dashboard.
          </p>
          <a
            href="/signin"
            className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Try signing in again
          </a>
        </div>
      </div>
    );
  }
}
