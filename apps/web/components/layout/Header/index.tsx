"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { Mic } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-border">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 font-montserrat">
            <Mic className="w-8 h-8 text-primary-dark" />
            <span className="text-xl font-bold text-primary-dark">chamber.fm</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-montserrat">
            <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#use-cases" className="text-foreground/80 hover:text-primary transition-colors">
              Use Cases
            </Link>
            <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 font-montserrat">
            <Link href="#" className="text-foreground hover:text-primary font-medium">
              Log In
            </Link>
            <Button variant="cta">Sign Up</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-4">
            <nav className="flex flex-col space-y-4 font-montserrat">
              <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#use-cases" className="text-foreground/80 hover:text-primary transition-colors">
                Use Cases
              </Link>
              <Link href="#" className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Link href="#" className="text-foreground hover:text-primary font-medium">
                  Log In
                </Link>
                <Button variant="cta">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
