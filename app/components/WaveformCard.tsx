import React, { useRef, useCallback, useState } from 'react';
import { useWavesurfer } from '@wavesurfer/react';

interface WaveformCardProps {
  audioUrl: string;
}

const WaveformCard: React.FC<WaveformCardProps> = ({ audioUrl }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [volume, setVolume] = useState(1);

  const { wavesurfer, isReady, isPlaying } = useWavesurfer({
    container: containerRef,
    url: audioUrl,
    height: 40,
    waveColor: 'oklch(75.687% 0.123 76.89)',
    progressColor: 'oklch(93.203% 0.089 90.861)',
    barWidth: 8,
    barGap: 4,
    barRadius: 2,
  });

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  const onVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (wavesurfer) {
        wavesurfer.setVolume(newVolume);
      }
    },
    [wavesurfer]
  );

  return (
    <div className="max-w-md mx-auto bg-base100 shadow-lg rounded-lg p-6">
      <div className="flex flex-row items-center mb-4">
        <button
          onClick={onPlayPause}
          disabled={!isReady}
          className="btn btn-neutral btn-circle flex items-center justify-center mr-4"
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653Z"
              />
            </svg>
          )}
        </button>

        <div ref={containerRef} className="flex-1" />

        <div className="flex items-center">
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 4.5L7.5 7.5H3a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h4.5l3.75 3a.75.75 0 001.25-.75V5.25a.75.75 0 00-1.25-.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9a4.5 4.5 0 010 6"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 7a7.5 7.5 0 010 10"
              />
            </svg>
          </button>

          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={onVolumeChange}
            className="ml-2 w-16 range range-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default WaveformCard;
