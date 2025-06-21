"use client";

import React from "react";

import { useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui";
import { Mail } from "lucide-react";
import Link from "next/link";

export function SignInForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    setError(null);

    startTransition(async () => {
      try {
        const result = await signIn("email", {
          email,
          redirect: false, // Do not redirect, we will handle it manually
        });

        if (result?.error) {
          // This will be caught by the catch block
          throw new Error(result.error);
        }

        if (result?.ok) {
          // On successful sign-in, redirect to the verify request page
          window.location.href = "/verify-request";
        } else {
          throw new Error("An unknown error occurred during sign-in.");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred.");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-sm text-red-500">{error}</p>}
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          disabled={isPending}
          className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
        />
      </div>
      <Button
        type="submit"
        variant="cta"
        className="w-full flex items-center justify-center"
        disabled={isPending}
      >
        {isPending ? (
          "Sending..."
        ) : (
          <>
            <Mail className="mr-2 h-4 w-4" /> Continue with Email
          </>
        )}
      </Button>

      <div className="text-center text-xs text-foreground/60 pb-2">
        <p>
          By continuing, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-primary">
            Terms of Service
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
