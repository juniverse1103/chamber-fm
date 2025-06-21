"use client";

import React from 'react';

// This is a mock SessionProvider that does nothing.
// It's used to wrap the application during development to prevent
// API calls to the session endpoint when the backend is not fully configured.
export default function MockSessionProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
