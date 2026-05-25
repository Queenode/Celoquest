"use client"

import { useEffect, useRef } from "react"

interface AudioPlayerProps {
  src: string
  loop?: boolean
  volume?: number
  autoplay?: boolean
}

export function AudioPlayer({ src, loop = false, volume = 0.3, autoplay = false }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      if (autoplay) {
        audioRef.current.play().catch(() => {
          // Autoplay was prevented
        })
      }
    }
  }, [volume, autoplay])

  return <audio ref={audioRef} src={src} loop={loop} className="hidden" />
}

export function useSound() {
  const playSound = (
    soundType:
      | "click"
      | "success"
      | "fail"
      | "unlock"
      | "collect"
      | "hint"
      | "trap"
      | string
  ) => {
    // Disabled temporarily to prevent AudioContext errors on mobile browsers
    return;
  }

  return { playSound }
}
