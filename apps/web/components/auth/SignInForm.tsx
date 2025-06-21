"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";
import { Mail, Clipboard, X } from "lucide-react";
import Link from "next/link";

export default function SignInForm() {
  const [isPending] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const TEST_EMAIL = "test@example.com";

  const handlePasteTestEmail = () => {
    setEmail(TEST_EMAIL);
  };

  const handleClearEmail = () => {
    setEmail("");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // --- DEVELOPMENT MOCK ---
    router.push(`/verify-request?email=${encodeURIComponent(email)}`);
    // ------------------------

    /*
    // REAL AUTHENTICATION LOGIC
    setError(null);

    startTransition(async () => {
      try {
        const result = await signIn("email", {
          email, // Use email from state
          redirect: false,
        });

        if (result?.error) {
          throw new Error(result.error);
        }

        if (result?.ok) {
          router.push("/verify-request");
        } else {
          throw new Error("An unknown error occurred during sign-in.");
        }
      } catch (err: any) {
        setError(err.message || "An error occurred.");
      }
    });
    */
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="relative flex items-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            disabled={isPending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-border px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
          <button
            type="button"
            onClick={email ? handleClearEmail : handlePasteTestEmail}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary"
            aria-label={email ? "Clear email" : "Paste test email"}
            disabled={isPending}
          >
            {email ? <X className="h-5 w-5" /> : <Clipboard className="h-5 w-5" />}
          </button>
        </div>
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
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline hover:text-primary">
            Terms of Service
          </Link>.
        </p>
      </div>
    </form>
  );
}
