import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import SignInForm from '@/components/auth/SignInForm';

export default function SignInPage() {
  return (
    <div className="flex h-[100dvh] items-center justify-center bg-background p-4 overflow-hidden">
      <div className="w-full max-w-md space-y-4 rounded-xl border border-primary bg-white p-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.svg"
              alt="Chamber.fm Logo"
              width={48}
              height={48}
              className="mx-auto mb-4"
              priority
            />
          </Link>

          <h1 className="text-3xl font-bold text-primary font-montserrat">chamber.fm</h1>
          <p className="mt-2 text-foreground/70">
            Enter your email below to receive a sign-in link.
          </p>
        </div>
        <SignInForm />

        <div className="mx-auto w-1/2 border-t border-primary opacity-25 pb-2" />

        <div className="text-center text-md">
          <Link href="/" className="w-full">
            <Button variant="secondary" className="w-full flex items-center justify-center">
              Go back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
