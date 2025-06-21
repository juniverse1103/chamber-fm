"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui";

export function SignOutButton() {
  return <Button onClick={() => signOut({ callbackUrl: "/" })}>Sign Out</Button>;
}
