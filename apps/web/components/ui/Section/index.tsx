"use client";

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'bordered' | 'theme';
  divider?: boolean;
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background = 'white',
  divider = false
}: SectionProps) {
  const getBgClass = () => {
    switch (background) {
      case 'white':
        return 'bg-white';
      case 'light':
        return 'bg-[#F5FFFE]';
      case 'dark':
        return 'bg-[#2BB5AD] text-white';
      case 'primary':
        return 'bg-[#36E4DA] text-foreground';
      case 'bordered':
        return 'bg-white border-t border-b border-[#E2E8F0]';
      case 'theme':
        return 'bg-background';
      default:
        return 'bg-background';
    }
  };

  return (
    <>
      {divider && (
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-center">
          <div className="border-t border-primary w-1/2" style={{ borderTopWidth: '0.1px' }}></div>
        </div>
      )}
      <section 
        id={id}
        className={`section ${getBgClass()} ${className}`}
      >
        <div className="container-custom">
          {children}
        </div>
      </section>
    </>
  );
}
