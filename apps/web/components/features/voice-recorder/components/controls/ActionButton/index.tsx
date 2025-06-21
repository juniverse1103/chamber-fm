"use client";

import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  'aria-label': string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'default' | 'large' | 'xlarge';
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  disabled = false,
  isLoading = false,
  children,
  'aria-label': ariaLabel,
  variant = 'secondary',
  size = 'default',
  className = '',
}) => {
  const baseClasses =
    'rounded-full flex items-center justify-center transition-all transform disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeClasses = {
    default: 'w-12 h-12',
    large: 'w-16 h-16',
    xlarge: 'w-20 h-20',
  };

  const variantClasses = {
        primary: 'bg-primary text-white hover:scale-105 focus:ring-primary',
    secondary:
            'bg-white/30 text-primary hover:bg-white/40 focus:ring-primary/30 focus:ring-offset-0',
    danger: 'bg-[#FF6B6B] text-white hover:scale-105 focus:ring-[#FF6B6B]',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default ActionButton;
