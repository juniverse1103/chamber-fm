"use client";

import React from 'react';

interface StatusGuideProps {
  children: React.ReactNode;
}

const StatusGuide: React.FC<StatusGuideProps> = ({ children }) => {
  return (
    <p className="text-sm opacity-70">
      {children}
    </p>
  );
};

export default StatusGuide;
