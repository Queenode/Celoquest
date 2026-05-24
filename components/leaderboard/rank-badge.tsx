'use client';

import { Crown } from 'lucide-react';

interface RankBadgeProps {
  rank: number;
}

/**
 * Displays a crown icon badge for top 3 players with gold/silver/bronze styling.
 * Falls back to a numbered circle for ranks 4+.
 */
export function RankBadge({ rank }: RankBadgeProps) {
  if (rank === 1) {
    return (
      <div className="relative flex items-center justify-center w-10 h-10">
        <div className="absolute inset-0 rounded-full bg-amber-500/20 animate-glow-pulse" />
        <Crown className="w-6 h-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
      </div>
    );
  }

  if (rank === 2) {
    return (
      <div className="relative flex items-center justify-center w-10 h-10">
        <div className="absolute inset-0 rounded-full bg-cyan-500/15" />
        <Crown className="w-5 h-5 text-cyan-300 drop-shadow-[0_0_6px_rgba(103,232,249,0.4)]" />
      </div>
    );
  }

  if (rank === 3) {
    return (
      <div className="relative flex items-center justify-center w-10 h-10">
        <div className="absolute inset-0 rounded-full bg-amber-700/20" />
        <Crown className="w-5 h-5 text-amber-600 drop-shadow-[0_0_4px_rgba(180,83,9,0.4)]" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-amber-500/20 bg-stone-900/50">
      <span className="text-sm font-bold text-amber-300/70 font-[family-name:var(--font-cinzel)]">
        {rank}
      </span>
    </div>
  );
}
