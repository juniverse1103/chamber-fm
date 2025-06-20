"use client";

import React from 'react';
import { RecordingControls } from '@/components/features/voice-recorder/components/controls';
import { RecordingTime, WaveformBar } from '@/components/features/voice-recorder/components/display';
import { StatusGuide, StatusHeader } from '@/components/features/voice-recorder/components/status';
import { RecordingState } from '@/components/features/voice-recorder/lib/types';
import { STATUS_TEXT } from '@/components/features/voice-recorder/lib/constants';

interface PausedUIProps {
  duration: number;
  playbackPosition: number;
  isPlaying: boolean;
  handlePauseResume: () => void;
  handleStop: () => void;
}

const PausedUI: React.FC<PausedUIProps> = ({
  duration,
  playbackPosition,
  isPlaying,
  handlePauseResume,
  handleStop,
}) => {
  const recordingState: RecordingState = 'paused';

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="w-full pt-8 flex flex-col items-center">
        <StatusHeader>{STATUS_TEXT.paused.header}</StatusHeader>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full">
        <div className="w-full h-12">
          <WaveformBar 
            state={recordingState} 
            isPlaying={isPlaying} 
            playbackPosition={playbackPosition} 
            duration={duration} 
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center pb-8">
        <RecordingTime duration={duration} />
      </div>

      <div className="w-full flex flex-col items-center space-y-4">
        <RecordingControls
          recordingState={recordingState}
          onPauseResume={handlePauseResume}
          onStop={handleStop}
        />
      </div>

      <div className="w-full pt-8 flex flex-col items-center">
        <StatusGuide>{STATUS_TEXT.paused.guide}</StatusGuide>
      </div>
    </div>
  );
};

export default PausedUI;
