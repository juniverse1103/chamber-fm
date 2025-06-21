"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui";

export function SignOutButton() {
  // Use absolute URL to ensure it works in all environments
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  return <Button onClick={() => signOut({ callbackUrl: baseUrl })}>Sign Out</Button>;
}
