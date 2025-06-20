"use client";

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconBoxProps {
  iconName: string;
}

export default function IconBox({ iconName }: IconBoxProps) {
  // Dynamically get the icon component from Lucide
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
  
  return (
    <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto rounded-full">
      <IconComponent 
        size={32} 
        className="text-background" 
        strokeWidth={1.5}
      />
    </div>
  );
}
