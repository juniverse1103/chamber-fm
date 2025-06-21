import { MailCheck } from 'lucide-react';
import Link from 'next/link';

export default function VerifyRequestPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 rounded-xl border border-border bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-bg">
          <MailCheck className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground font-montserrat">Check your email</h1>
        <p className="text-foreground/70">
          A sign-in link has been sent to your email address. Please check your inbox (and spam
          folder) to continue.
        </p>
        <Link href="/">
          <span className="text-sm text-primary hover:underline">Back to homepage</span>
        </Link>
      </div>
    </div>
  );
}
