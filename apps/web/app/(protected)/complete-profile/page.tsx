import { CompleteProfileForm } from '@/components/auth/CompleteProfileForm';
import { UserPlus } from 'lucide-react';

export default function CompleteProfilePage() {
  return (
    <div className="flex h-[100dvh] items-center justify-center bg-background p-4 overflow-hidden">
      <div className="w-full max-w-md space-y-4 rounded-xl border border-primary bg-white p-8">
        <div className="text-center">
          <UserPlus className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold text-primary font-montserrat">Complete Your Profile</h1>
          <p className="mt-2 text-foreground/70">Finalize your account setup.</p>
        </div>
        <div className="pt-4">
          <CompleteProfileForm />
        </div>
      </div>
    </div>
  );
}
