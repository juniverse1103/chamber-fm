# Voice Recorder Feature

This directory contains all the components and logic for the voice recorder feature.

## Overview

The `VoiceRecorder` is a stateful component that manages the entire recording workflow, from idle to recording, paused, and playback states.

## Key Components

-   **`VoiceRecorder/index.tsx`**: The main entry point for the feature, which uses the `useVoiceRecorder` hook to manage state.
-   **`UIMachine.tsx`**: A state machine component that renders the appropriate UI based on the current `recordingState`.
-   **`/components`**: Contains all the sub-components used to build the voice recorder UI, organized by type:
    -   `/controls`: Action buttons (`Record`, `Pause`, `Play`, etc.).
    -   `/display`: Visual feedback elements (`RecordingTime`, `WaveformBar`).
    -   `/states`: UI components for each recording state (`IdleUI`, `RecordingUI`, etc.).
    -   `/status`: Textual status indicators (`StatusHeader`, `StatusGuide`).
-   **`/lib`**: Contains hooks, types, and utility functions specific to the voice recorder.
