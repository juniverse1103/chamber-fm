"use client";

import React from 'react';
import { Play, Pause, Volume2, VolumeX, Share, Trash2 } from 'lucide-react';
import ActionButton from '@/components/features/voice-recorder/components/controls/ActionButton';

interface RecordedControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  isLoading: boolean;
  onPlay: () => void;
  onToggleMute: () => void;
  onSend: () => void;
  onReset: () => void;
}

const RecordedControls: React.FC<RecordedControlsProps> = ({
  isPlaying,
  isMuted,
  isLoading,
  onPlay,
  onToggleMute,
  onSend,
  onReset,
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center gap-6">
        <ActionButton
          onClick={onPlay}
          disabled={isLoading}
          variant="primary"
          size="large"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </ActionButton>

        <ActionButton
          onClick={onToggleMute}
          variant="secondary"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </ActionButton>

        <ActionButton
          onClick={onSend}
          isLoading={isLoading}
          variant="secondary"
          aria-label="Share recording"
        >
          <Share size={20} />
        </ActionButton>

        <ActionButton
          onClick={onReset}
          disabled={isLoading}
          variant="danger"
          size="large"
          aria-label="Delete recording"
        >
          <Trash2 size={24} />
        </ActionButton>
      </div>
    </div>
  );
};


export default RecordedControls;
