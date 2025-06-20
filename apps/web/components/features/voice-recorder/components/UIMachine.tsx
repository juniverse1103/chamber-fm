"use client";

import React from 'react';
import { RecordingState } from '@/components/features/voice-recorder/lib/types';
import { IdleUI, PausedUI, RecordedUI, RecordingUI } from '@/components/features/voice-recorder/components/states';

// This interface aggregates all props needed by the various UI components.
interface UIMachineProps {
  recordingState: RecordingState;
  duration: number;
  playbackPosition: number;
  isPlaying: boolean;
  isMuted: boolean;
  isLoading: boolean;
  handleRecord: () => void;
  handlePauseResume: () => void;
  handleStop: () => void;
  handlePlay: () => void;
  handleSeek: (_position: number) => void;
  handleToggleMute: () => void;
  handleSend: () => void;
  handleReset: () => void;
}

const UIMachine: React.FC<UIMachineProps> = (props) => {
  switch (props.recordingState) {
    case 'idle':
      return <IdleUI handleRecord={props.handleRecord} />;

    case 'recording':
      return (
        <RecordingUI
          duration={props.duration}
          playbackPosition={props.playbackPosition}
          isPlaying={props.isPlaying}
          handlePauseResume={props.handlePauseResume}
          handleStop={props.handleStop}
        />
      );

    case 'paused':
      return (
        <PausedUI
          duration={props.duration}
          playbackPosition={props.playbackPosition}
          isPlaying={props.isPlaying}
          handlePauseResume={props.handlePauseResume}
          handleStop={props.handleStop}
        />
      );

    case 'recorded':
      return (
        <RecordedUI
          duration={props.duration}
          playbackPosition={props.playbackPosition}
          isPlaying={props.isPlaying}
          isMuted={props.isMuted}
          isLoading={props.isLoading}
          handlePlay={props.handlePlay}
          handleSeek={props.handleSeek}
          handleToggleMute={props.handleToggleMute}
          handleSend={props.handleSend}
          handleReset={props.handleReset}
        />
      );

    default:
      return null; // Or a fallback UI
  }
};

export default UIMachine;
