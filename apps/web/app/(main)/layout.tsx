import { Footer, Header } from '@/components/layout';
import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
