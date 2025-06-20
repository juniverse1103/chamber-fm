"use client";

import React from 'react';
import { formatTime, formatTimeWithMillis } from '@/components/features/voice-recorder/lib/utils';
import { MAX_DURATION } from '@/components/features/voice-recorder/lib/types';

interface RecordingTimeProps {
  duration: number;
}

const RecordingTime: React.FC<RecordingTimeProps> = ({ duration }) => {
  return (
    <div className="text-foreground/80 text-lg font-mono flex items-center">
      <span>{formatTimeWithMillis(duration)}</span>
      <span className="mx-1">/</span>
      <span>{formatTime(MAX_DURATION)}</span>
    </div>
  );
};

export default RecordingTime;
