"use client";

import React from 'react';
import { Pause, Play, Square } from 'lucide-react';
import { RecordingState } from '@/components/features/voice-recorder/lib/types';
import ActionButton from '@/components/features/voice-recorder/components/controls/ActionButton';

interface RecordingControlsProps {
  recordingState: RecordingState;
  onPauseResume: () => void;
  onStop: () => void;
}

const RecordingControls: React.FC<RecordingControlsProps> = ({
  recordingState,
  onPauseResume,
  onStop,
}) => {
  return (
    <div className="flex items-center gap-6">
      <ActionButton
        onClick={onPauseResume}
        variant="primary"
        size="large"
        aria-label={
          recordingState === 'paused' ? 'Resume recording' : 'Pause recording'
        }
      >
        {recordingState === 'paused' ? (
          <Play size={24} className="ml-1" />
        ) : (
          <Pause size={24} />
        )}
      </ActionButton>

      <ActionButton
        onClick={onStop}
        variant="danger"
        size="large"
        aria-label="Stop recording"
      >
        <Square size={20} />
      </ActionButton>
    </div>
  );
};

export default RecordingControls;
