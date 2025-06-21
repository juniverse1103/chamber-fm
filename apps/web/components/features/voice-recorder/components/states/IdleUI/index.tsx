"use client";

import React from 'react';
import { Mic } from 'lucide-react';
import { StatusDescription, StatusGuide, StatusHeader } from '@/components/features/voice-recorder/components/status';
import { STATUS_TEXT } from '@/components/features/voice-recorder/lib/constants';

interface IdleUIProps {
  handleRecord: () => void;
}

const IdleUI: React.FC<IdleUIProps> = ({ handleRecord }) => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="w-full pt-8 flex flex-col items-center">
        <StatusHeader>{STATUS_TEXT.idle.header}</StatusHeader>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow space-y-8 w-full">
        <button
          onClick={handleRecord}
          className="group w-28 h-28 rounded-full bg-primary text-white flex items-center justify-center transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-primary"
          aria-label="Start recording"
        >
          <Mic size={36} className="group-hover:scale-110 transition-transform" />
        </button>
        <StatusDescription>{STATUS_TEXT.idle.description}</StatusDescription>
      </div>

      <div className="w-full pt-8 flex flex-col items-center text-center">
        <StatusGuide>{STATUS_TEXT.idle.guide}</StatusGuide>
      </div>
    </div>
  );
};

export default IdleUI;
