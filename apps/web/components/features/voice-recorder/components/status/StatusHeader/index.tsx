"use client";

import React from 'react';

interface StatusHeaderProps {
  children: React.ReactNode;
}

const StatusHeader: React.FC<StatusHeaderProps> = ({ children }) => {
  return (
    <h2 className="text-primary font-bold font-montserrat text-2xl mt-4">
      {children}
    </h2>
  );
};

export default StatusHeader;
