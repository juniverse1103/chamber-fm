"use client";

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cta' | 'thin';
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-md border border-primary transition-colors font-montserrat',
    secondary: 'bg-white border border-primary text-primary hover:bg-primary/5 font-medium py-2 px-6 rounded-md transition-colors font-montserrat',
    cta: 'bg-primary-dark hover:bg-primary text-white font-medium py-2 px-6 rounded-md border border-primary-dark transition-colors font-montserrat',
    thin: 'bg-white hover:bg-[#D7F5F3] text-primary-dark border border-primary font-medium py-2 px-6 rounded-md transition-colors font-montserrat',
  };
  
  return (
    <button 
      className={`${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
