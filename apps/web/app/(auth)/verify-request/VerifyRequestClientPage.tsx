'use client';

import { MailCheck, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function VerifyRequestClientPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const [resendCooldown, setResendCooldown] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (resendCooldown > 0) {
      const timerId = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  }, [resendCooldown]);

  const handleResendClick = () => {
    if (resendCooldown === 0) {
      setResendCooldown(30);
      setIsVerified(true); // Mock verification
      // In a real app, you'd trigger the resend email API call here
    }
  };

  return (
    <div className="flex h-[100dvh] items-center justify-center bg-background p-4 overflow-hidden">
      <div className="w-full max-w-md space-y-4 rounded-xl border border-primary bg-white p-8">
        <div className="text-center">
          {isVerified ? (
            <CheckCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
          ) : (
            <MailCheck className="mx-auto mb-4 h-12 w-12 text-primary" />
          )}

          <h1 className="text-3xl font-bold text-primary font-montserrat">
            {isVerified ? 'Email Verified' : 'Check your email'}
          </h1>
          <p className="mt-2 text-foreground/70">
            {isVerified ? (
              'Your email has been successfully verified.'
            ) : (
              <>
                A sign-in link has been sent to <br />
                <span className="font-medium text-primary">{email || 'your email address'}</span>
              </>
            )}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 pt-4">
          <Button
            variant="cta"
            className="w-full"
            disabled={!isVerified}
            onClick={() => router.push('/dashboard')}
          >
            {isVerified ? 'Continue to Dashboard' : 'Waiting for verification...'}
          </Button>
          <div className="text-center text-xs text-foreground/60 py-2">
            <p>
              {resendCooldown > 0 ? 'New link has been sent.' : "Didn't receive the email?"}{' '}
              <button
                onClick={handleResendClick}
                disabled={resendCooldown > 0}
                className="underline hover:text-primary font-medium disabled:text-gray-400 disabled:no-underline"
              >
                {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend'}
              </button>
            </p>
          </div>
        </div>

        <div className="mx-auto w-1/2 border-t border-primary opacity-25 pb-2" />

        <div className="text-center text-md">
          <Link href="/signin" className="w-full">
            <Button variant="secondary" className="w-full flex items-center justify-center">
              Go back to sign in
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
