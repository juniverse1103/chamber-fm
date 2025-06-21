"use client";

import React from 'react';
import UIMachine from './components/UIMachine';
import { useVoiceRecorder } from './lib/hooks/useVoiceRecorder';

const VoiceRecorder: React.FC = () => {
  const {
    recordingState,
    duration,
    playbackPosition,
    isPlaying,
    isMuted,
    isLoading,
    handleRecord,
    handlePauseResume,
    handleStop,
    handlePlay,
    handleSeek,
    handleToggleMute,
    handleSend,
    handleReset,
  } = useVoiceRecorder();

  return (
    <div className="w-full h-[500px] bg-primary-bg rounded-xl border border-primary flex flex-col items-center relative overflow-hidden py-12 px-6">
      <div className="relative w-full h-full max-w-md flex flex-col items-center z-10">
        <UIMachine
          recordingState={recordingState}
          duration={duration}
          playbackPosition={playbackPosition}
          isPlaying={isPlaying}
          isMuted={isMuted}
          isLoading={isLoading}
          handleRecord={handleRecord}
          handlePauseResume={handlePauseResume}
          handleStop={handleStop}
          handlePlay={handlePlay}
          handleSeek={handleSeek}
          handleToggleMute={handleToggleMute}
          handleSend={handleSend}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
};

export default VoiceRecorder;
