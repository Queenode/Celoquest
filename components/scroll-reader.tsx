'use client'
import { Play, Pause, Square, BookOpen } from 'lucide-react'
import { useTextToSpeech } from '@/hooks/useTextToSpeech'
import { useEffect } from 'react'

interface ScrollReaderProps {
  title: string
  content: string[]
  analogy: { title: string; text: string }
}

export function ScrollReader({ title, content, analogy }: ScrollReaderProps) {
  const { speak, pause, resume, stop, isSpeaking, isPaused, isSupported } = useTextToSpeech()

  if (!isSupported) return null

  const fullText = [
    title + '.',
    ...content,
    analogy.title + '.',
    analogy.text
  ].join(' ')

  useEffect(() => {
    return () => stop() // Stop reading when unmounting
  }, [stop])

  const btnClass = "relative px-3 py-2 text-xs font-[family-name:var(--font-cinzel)] font-bold uppercase tracking-wider bg-stone-900/90 border border-glow-amber/50 hover:border-glow-amber hover:bg-stone-800 transition-all duration-300 [clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]"

  return (
    <div className="flex items-center gap-3 p-3 bg-stone-900/80 border border-glow-amber/30 backdrop-blur-sm [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)] mb-6">
      <BookOpen className="w-4 h-4 text-glow-amber flex-shrink-0" />
      <span className="text-xs font-[family-name:var(--font-cinzel)] text-glow-amber uppercase tracking-wider flex-1">
        {isSpeaking ? (isPaused ? 'Paused' : 'Reading aloud...') : 'Read this scroll aloud'}
      </span>
      <div className="flex gap-2">
        {!isSpeaking && (
          <button onClick={() => speak(fullText)} className={btnClass + ' text-glow-amber'}>
            <Play className="w-4 h-4" />
          </button>
        )}
        {isSpeaking && !isPaused && (
          <button onClick={pause} className={btnClass + ' text-glow-cyan'}>
            <Pause className="w-4 h-4" />
          </button>
        )}
        {isSpeaking && isPaused && (
          <button onClick={resume} className={btnClass + ' text-glow-amber'}>
            <Play className="w-4 h-4" />
          </button>
        )}
        {isSpeaking && (
          <button onClick={stop} className={btnClass + ' text-red-400 border-red-400/50 hover:border-red-400'}>
            <Square className="w-4 h-4" />
          </button>
        )}
      </div>
      {isSpeaking && !isPaused && (
        <div className="flex gap-0.5">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 bg-glow-amber rounded-full animate-bounce"
              style={{ height: `${8 + (i % 2) * 6}px`, animationDelay: `${i * 0.1}s`, animationDuration: '0.6s' }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
