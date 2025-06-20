"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import { RecordingState, MAX_DURATION, UPDATE_INTERVAL } from '@/components/features/voice-recorder/lib/types';

export const useVoiceRecorder = () => {
  const [recordingState, setRecordingState] = useState<RecordingState>('idle');
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const playbackRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedDurationRef = useRef<number>(0);

  const cleanup = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (playbackRef.current) {
      clearInterval(playbackRef.current);
      playbackRef.current = null;
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const stopRecording = useCallback(() => {
    cleanup();
    setRecordingState('recorded');
  }, [cleanup]);

  const startRecording = useCallback(() => {
    setRecordingState('recording');
    startTimeRef.current = Date.now();
    pausedDurationRef.current = 0;
    setDuration(0);

    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current! + pausedDurationRef.current) / 1000;
      if (elapsed >= MAX_DURATION) {
        stopRecording();
        setDuration(MAX_DURATION);
      } else {
        setDuration(elapsed);
      }
    }, UPDATE_INTERVAL);
  }, [stopRecording]);

  const pauseRecording = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (startTimeRef.current) {
      pausedDurationRef.current += Date.now() - startTimeRef.current;
      startTimeRef.current = null;
    }
    setRecordingState('paused');
  }, []);

  const resumeRecording = useCallback(() => {
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current! + pausedDurationRef.current) / 1000;
      if (elapsed >= MAX_DURATION) {
        stopRecording();
        setDuration(MAX_DURATION);
      } else {
        setDuration(elapsed);
      }
    }, UPDATE_INTERVAL);
    setRecordingState('recording');
  }, [stopRecording]);

  const startPlayback = useCallback(() => {
    const startTime = Date.now() - (playbackPosition * 1000);
    playbackRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      if (elapsed >= duration) {
        cleanup();
        setIsPlaying(false);
        setPlaybackPosition(0);
      } else {
        setPlaybackPosition(elapsed);
      }
    }, UPDATE_INTERVAL);
  }, [duration, playbackPosition, cleanup]);

  const pausePlayback = useCallback(() => {
    if (playbackRef.current) {
      clearInterval(playbackRef.current);
      playbackRef.current = null;
    }
  }, []);

  const seekTo = useCallback((position: number) => {
    setPlaybackPosition(position);
    if (isPlaying) {
      if (playbackRef.current) {
        clearInterval(playbackRef.current);
        playbackRef.current = null;
      }
      const startTime = Date.now() - (position * 1000);
      playbackRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        if (elapsed >= duration) {
          cleanup();
          setIsPlaying(false);
          setPlaybackPosition(0);
        } else {
          setPlaybackPosition(elapsed);
        }
      }, UPDATE_INTERVAL);
    }
  }, [isPlaying, duration, cleanup]);

  const handleRecord = useCallback(() => {
    if (recordingState === 'idle') startRecording();
  }, [recordingState, startRecording]);

  const handlePauseResume = useCallback(() => {
    if (recordingState === 'recording') pauseRecording();
    else if (recordingState === 'paused') resumeRecording();
  }, [recordingState, pauseRecording, resumeRecording]);

  const handlePlay = useCallback(() => {
    if (isPlaying) {
      pausePlayback();
      setIsPlaying(false);
    } else {
      startPlayback();
      setIsPlaying(true);
    }
  }, [isPlaying, pausePlayback, startPlayback]);

  const handleReset = useCallback(() => {
    cleanup();
    setRecordingState('idle');
    setDuration(0);
    setPlaybackPosition(0);
    setIsPlaying(false);
    pausedDurationRef.current = 0;
  }, [cleanup]);

  const handleSend = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handleReset();
    }, 1500);
  }, [handleReset]);

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.repeat) {
        e.preventDefault();
        if (recordingState === 'idle') handleRecord();
        else if (recordingState === 'recording' || recordingState === 'paused') handlePauseResume();
        else if (recordingState === 'recorded') handlePlay();
      } else if (e.code === 'Escape') {
        handleReset();
      } else if (e.code === 'Enter' && recordingState === 'recorded') {
        handleSend();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [recordingState, handleRecord, handlePauseResume, handlePlay, handleReset, handleSend]);

  return {
    recordingState,
    isPlaying,
    duration,
    playbackPosition,
    isMuted,
    isLoading,
    handleRecord,
    handlePauseResume,
    handleStop: stopRecording,
    handlePlay,
    handleSeek: seekTo,
    handleToggleMute: toggleMute,
    handleSend,
    handleReset,
  };
};
