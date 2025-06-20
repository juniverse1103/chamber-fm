"use client";

import React from 'react';
import { RecordedControls } from '@/components/features/voice-recorder/components/controls';
import { Playbar, WaveformBar } from '@/components/features/voice-recorder/components/display';
import { StatusGuide, StatusHeader } from '@/components/features/voice-recorder/components/status';
import { STATUS_TEXT } from '@/components/features/voice-recorder/lib/constants';

interface RecordedUIProps {
  duration: number;
  playbackPosition: number;
  isPlaying: boolean;
  isMuted: boolean;
  isLoading: boolean;
  handlePlay: () => void;
  handleSeek: (_position: number) => void;
  handleToggleMute: () => void;
  handleSend: () => void;
  handleReset: () => void;
}

const RecordedUI: React.FC<RecordedUIProps> = ({
  duration,
  playbackPosition,
  isPlaying,
  isMuted,
  isLoading,
  handlePlay,
  handleSeek,
  handleToggleMute,
  handleSend,
  handleReset,
}) => {

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="w-full pt-8 flex flex-col items-center">
        <StatusHeader>{STATUS_TEXT.recorded.header}</StatusHeader>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full pt-8">
        <div className="relative w-full h-12">
          <WaveformBar 
            state="recorded" 
            isPlaying={isPlaying} 
            playbackPosition={playbackPosition} 
            duration={duration} 
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center space-y-4">
        <Playbar 
          duration={duration} 
          playbackPosition={playbackPosition} 
          onSeek={handleSeek} 
        />
      </div>

      <div className="w-full flex flex-col items-center space-y-4">
        <RecordedControls
          isPlaying={isPlaying}
          isMuted={isMuted}
          isLoading={isLoading}
          onPlay={handlePlay}
          onToggleMute={handleToggleMute}
          onSend={handleSend}
          onReset={handleReset}
        />
      </div>

      <div className="w-full pt-8 flex flex-col items-center">
        <StatusGuide>{STATUS_TEXT.recorded.guide}</StatusGuide>
      </div>
    </div>
  );
};

export default RecordedUI;
