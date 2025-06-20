"use client";

import React from 'react';
import { RecordingState, WAVEFORM_BARS } from '@/components/features/voice-recorder/lib/types';

export interface WaveformProps {
  index: number;
  state: RecordingState;
  isPlaying: boolean;
  playbackPosition: number;
  duration: number;
}

const Waveform: React.FC<WaveformProps> = ({
  index,
  state,
  isPlaying,
  playbackPosition,
  duration,
}) => {
  const totalBars = WAVEFORM_BARS;

  const height = (() => {
    if (state === 'recording') {
      const centerEffect = 1 - Math.abs((index - totalBars / 2) / totalBars) * 0.5;
      return Math.random() * 36 * centerEffect + 6;
    } else if (state === 'recorded' && isPlaying) {
      const position = (index + playbackPosition * 3) % totalBars;
      return (Math.sin(position * 0.3) + 1) * 22 + 6;
    } else {
      return (Math.sin(index * 0.3) + 1) * 18 + 6;
    }
  })();

  const opacity = (() => {
    if (state === 'recorded' && isPlaying) {
      const playPosition = Math.floor((playbackPosition / duration) * totalBars);
      const distance = Math.abs(index - playPosition);
      return distance < 3 ? 1 : 0.8;
    }
    return 0.8;
  })();

  return (
    <div
      className={`bg-primary ${state === 'recording' ? 'animate-pulse' : ''}`}
      style={{
        height: `${height}px`,
        width: '3px',
        opacity,
        borderRadius: '2px',
        transition: state === 'recorded' ? 'all 0.2s ease' : 'none',
      }}
    />
  );
};

export default Waveform;
