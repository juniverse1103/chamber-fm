'use client';

import { Suspense } from 'react';
import VerifyRequestClientPage from './VerifyRequestClientPage';

// A simple loading component
function Loading() {
  return (
    <div className="flex h-[100dvh] items-center justify-center bg-background p-4">
      <p>Loading...</p>
    </div>
  );
}

export default function VerifyRequestPage() {
  return (
    <Suspense fallback={<Loading />}>
      <VerifyRequestClientPage />
    </Suspense>
  );
}
