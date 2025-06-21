'use server';

import { signIn } from 'next-auth/react';

export async function signInWithEmail(email: string) {
  try {
    // The redirectTo path is where the user will be sent after a successful sign-in.
    await signIn('email', { email, redirectTo: '/dashboard' });
  } catch (error) {
    // In a production app, you'd want to log this error for debugging.
    console.error('SIGN_IN_ERROR:', error);
    // You can return a user-friendly error message.
    return { error: 'An unexpected error occurred. Please try again.' };
  }
}
