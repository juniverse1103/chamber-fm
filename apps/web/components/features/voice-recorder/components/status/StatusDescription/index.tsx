"use client";

import React from 'react';

interface StatusDescriptionProps {
  children: React.ReactNode;
}

const StatusDescription: React.FC<StatusDescriptionProps> = ({ children }) => {
  return (
    <p className="text-foreground/80 text-lg px-16 text-center">
      {children}
    </p>
  );
};

export default StatusDescription;
