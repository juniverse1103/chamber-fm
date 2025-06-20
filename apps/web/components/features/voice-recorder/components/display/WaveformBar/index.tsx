"use client";

import React from 'react';
import { WAVEFORM_BARS, RecordingState } from '@/components/features/voice-recorder/lib/types';
import Waveform from '@/components/features/voice-recorder/components/display/WaveformBar/Waveform';

export interface WaveformBarProps {
  state: RecordingState;
  isPlaying: boolean;
  playbackPosition: number;
  duration: number;
}

const WaveformBar: React.FC<WaveformBarProps> = ({ state, isPlaying, playbackPosition, duration }) => {
  return (
    <div className="flex items-center justify-center gap-1 w-full h-12">
      {Array.from({ length: WAVEFORM_BARS }).map((_, index) => (
        <Waveform 
          key={index} 
          index={index} 
          state={state}
          isPlaying={isPlaying}
          playbackPosition={playbackPosition}
          duration={duration}
        />
      ))}
    </div>
  );
};

export default WaveformBar;
