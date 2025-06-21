'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui";
import { X } from 'lucide-react';

export function CompleteProfileForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [usernameError, setUsernameError] = useState('');

  const handleClearUsername = () => {
    setUsername('');
    setUsernameError('');
  };

  const handleClearDisplayName = () => {
    setDisplayName('');
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, ''); // Prevent spaces
    setUsername(value);

    if (value.length > 0 && value.length < 3) {
      setUsernameError('Username must be at least 3 characters.');
    } else if (value.length > 0 && !/^[a-zA-Z0-9_]+$/.test(value)) {
      setUsernameError('Only letters, numbers, and _ are allowed.');
    } else if (value.toLowerCase() === 'admin') {
      setUsernameError('This username is already in use.');
    } else {
      setUsernameError('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // In a real app, you would call an API endpoint here to:
    // 1. Validate the username is unique
    // 2. Save the username and displayName to the database
    console.log('Saving profile:', { username, displayName });

    // For now, we'll just simulate a network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // After saving, redirect to the dashboard
    router.push('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-1">
        <div className="flex items-baseline justify-between">
          <label htmlFor="username" className="text-sm font-medium text-primary/80">
            Username
          </label>
          <span className="pr-2 text-xs text-foreground/60">
            {username.length}/20
          </span>
        </div>
        <div className="relative flex items-center">
          <input
            id="username"
            type="text"
            placeholder="3-20 letters, numbers, or _"
            value={username}
            onChange={handleUsernameChange}
            required
            maxLength={20}
            className="w-full rounded-md border border-border px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
          {username && (
            <button
              type="button"
              onClick={handleClearUsername}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary"
              aria-label="Clear username"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        {usernameError ? (
          <p className="text-xs text-danger">{usernameError}</p>
        ) : (
          <p className="text-xs text-foreground/60">
            Your public profile will be at chamber.fm/
            <span className="font-medium text-primary/90">{username || 'username'}</span>.
          </p>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex items-baseline justify-between">
          <label htmlFor="displayName" className="text-sm font-medium text-primary/80">
            Display Name
          </label>
          <span className="pr-2 text-xs text-foreground/60">
            {displayName.length}/50
          </span>
        </div>
        <div className="relative flex items-center">
          <input
            id="displayName"
            type="text"
            placeholder="Up to 50 characters"
            value={displayName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
            required
            maxLength={50}
            className="w-full rounded-md border border-border px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
          {displayName && (
            <button
              type="button"
              onClick={handleClearDisplayName}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-primary"
              aria-label="Clear display name"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
        <p className="text-xs text-foreground/60">This name will be shown on your public profile.</p>
      </div>
      <Button type="submit" variant="cta" className="w-full" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save and Continue'}
      </Button>
    </form>
  );
}
