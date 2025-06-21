import React from 'react';
import './globals.css';
import { Noto_Sans, Montserrat_Alternates } from 'next/font/google';
import MockSessionProvider from '@/components/providers/MockSessionProvider';

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Chamber.fm | AI-Powered Voice Inbox',
  description:
    'A privacy-first, AI-powered voice inbox for the modern era. Send and receive secure, transcribed, and moderated audio messages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${noto_sans.variable} ${montserratAlternates.variable}`}>
      <body className="font-sans">
        <MockSessionProvider>{children}</MockSessionProvider>
      </body>
    </html>
  );
}
