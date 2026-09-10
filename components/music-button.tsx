"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

type Track = {
  title: string;
  artist: string;
  src: string;
};

const TRACKS: Track[] = [
  {
    title: "Oppenheimer",
    artist: "Kartikey's playlist",
    src: "/oppenheimer.mp3",
  },
];

const hasAudio = TRACKS.length > 0;

export function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const shouldPlayNextRef = useRef(false);

  const settlePendingPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (shouldPlayNextRef.current) {
      shouldPlayNextRef.current = false;
      void audio.play().catch(() => {});
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      if (TRACKS.length > 1) {
        shouldPlayNextRef.current = true;
        setTrackIndex((prev) => (prev + 1) % TRACKS.length);
      } else {
        setIsPlaying(false);
        if (audioRef.current) audioRef.current.currentTime = 0;
      }
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const settle = () => settlePendingPlay();

    const handleLoadedMetadata = settle;
    const handleCanPlay = settle;
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("canplay", handleCanPlay);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!hasAudio || !audio) return;
    if (audio.paused) {
      void audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={TRACKS[trackIndex].src}
        preload="metadata"
        className="hidden"
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="size-4" fill="currentColor" aria-hidden="true" />
        ) : (
          <Play className="size-4" fill="currentColor" aria-hidden="true" />
        )}
      </Button>
    </>
  );
}