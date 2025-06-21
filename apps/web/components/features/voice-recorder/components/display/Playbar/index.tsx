"use client";

import React from 'react';
import { formatTime, formatTimeWithMillis } from '@/components/features/voice-recorder/lib/utils';

interface PlaybarProps {
  duration: number;
  playbackPosition: number;
  onSeek: (_position: number) => void;
}

const Playbar: React.FC<PlaybarProps> = ({ duration, playbackPosition, onSeek }) => {
  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <div className="w-full px-1 relative h-3">
        <div className="w-full h-full bg-white/40 rounded-full overflow-hidden border border-primary">
          <div
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: duration > 0 ? `${(playbackPosition / duration) * 100}%` : '0' }}
          />
        </div>
        <input
          type="range"
          min="0"
          max={duration}
          value={playbackPosition}
          step={0.1}
          onChange={(e) => onSeek(parseFloat(e.target.value))}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          aria-label="Seek audio position"
        />
      </div>
      <div className="w-full flex justify-between text-xs text-foreground/60 font-mono">
        <span>{formatTimeWithMillis(playbackPosition)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default Playbar;
