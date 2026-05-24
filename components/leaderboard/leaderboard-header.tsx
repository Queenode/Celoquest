'use client';

import { Trophy, Sparkles } from 'lucide-react';

/**
 * Header component for the leaderboard page.
 * Features a trophy icon with ambient glow, title, and subtitle.
 */
export function LeaderboardHeader() {
  return (
    <div className="relative text-center py-8 sm:py-12">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />

      {/* Trophy Icon */}
      <div className="relative inline-block mb-4 sm:mb-6">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-amber-500/20 to-amber-700/10 flex items-center justify-center border border-amber-500/20">
          <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-glow-amber animate-float" />
        </div>
        {/* Sparkle accents */}
        <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-amber-400/60 animate-glow-pulse" />
        <Sparkles className="absolute -bottom-1 -left-2 w-3 h-3 text-cyan-400/40 animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-100 text-glow font-[family-name:var(--font-cinzel-decorative)] mb-2 sm:mb-3">
        Hall of Champions
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-amber-400/60 max-w-md mx-auto font-[family-name:var(--font-cinzel)] px-4">
        The bravest adventurers who have conquered the realm of CeloQuest
      </p>

      {/* Decorative line */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3">
        <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-amber-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-glow-amber" />
        <div className="w-2 h-2 rounded-full bg-glow-amber animate-glow-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-glow-amber" />
        <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-amber-500/40" />
      </div>
    </div>
  );
}
