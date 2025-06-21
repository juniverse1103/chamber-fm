"use client";

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cta' | 'thin';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-md border border-primary transition-colors font-montserrat',
    secondary: 'bg-white border border-primary text-primary hover:bg-primary-bg font-medium py-2 px-6 rounded-md transition-colors font-montserrat',
    cta: 'bg-primary hover:bg-primary-light text-white font-medium py-2 px-6 rounded-md border border-primary transition-colors font-montserrat',
    thin: 'bg-white hover:bg-primary-bg text-primary border border-primary font-medium py-2 px-6 rounded-md transition-colors font-montserrat',
  };
  
  return (
    <button 
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
