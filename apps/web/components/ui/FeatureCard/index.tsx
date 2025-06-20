"use client";

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: string;
}

export default function FeatureCard({ title, description, iconName }: FeatureCardProps) {
  // Dynamically get the icon component from Lucide
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
  
  return (
    <div className="bg-white p-6 border border-border hover:border-primary transition-colors group rounded-lg">
      <div className="mb-4 text-primary">
        <IconComponent size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold mb-2 font-montserrat group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}
