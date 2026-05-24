'use client';

import { RankBadge } from './rank-badge';
import { Flame } from 'lucide-react';
import type { LeaderboardEntry } from './types';

interface PlayerRowProps {
  player: LeaderboardEntry;
  isCurrentUser?: boolean;
}

/**
 * Single player row component for the leaderboard list.
 * Displays rank badge, avatar, name, XP, level, and streak info.
 */
export function PlayerRow({ player, isCurrentUser = false }: PlayerRowProps) {
  const avatarInitials = player.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div
      className={`group flex items-center gap-3 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 rounded-xl border transition-all duration-300 hover:scale-[1.01] ${
        isCurrentUser
          ? 'border-glow-amber/40 bg-amber-500/5 shadow-[0_0_15px_rgba(251,191,36,0.1)]'
          : 'border-amber-500/10 bg-stone-900/40 hover:border-amber-500/30 hover:bg-stone-900/60'
      }`}
    >
      {/* Rank Badge */}
      <RankBadge rank={player.rank} />

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
            player.rank <= 3
              ? 'bg-gradient-to-br from-amber-500/30 to-amber-700/30 text-amber-300'
              : 'bg-stone-800 text-amber-400/70'
          }`}
        >
          {avatarInitials}
        </div>
        {player.rank <= 3 && (
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-glow-cyan rounded-full border border-stone-900" />
        )}
      </div>

      {/* Player Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm sm:text-base font-semibold text-amber-100 truncate font-[family-name:var(--font-cinzel)]">
            {player.name}
          </p>
          {isCurrentUser && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-glow-amber/20 text-amber-300 font-semibold whitespace-nowrap">
              YOU
            </span>
          )}
        </div>
        <p className="text-xs text-amber-400/50 truncate">{player.address}</p>
      </div>

      {/* Streak */}
      {player.streak >= 3 && (
        <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/10">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-xs font-bold text-amber-300">{player.streak}</span>
        </div>
      )}

      {/* Level */}
      <div className="hidden sm:block text-center min-w-[50px]">
        <p className="text-xs text-amber-400/50">LVL</p>
        <p className="text-sm font-bold text-glow-cyan">{player.level}</p>
      </div>

      {/* Quests */}
      <div className="hidden md:block text-center min-w-[50px]">
        <p className="text-xs text-amber-400/50">Quests</p>
        <p className="text-sm font-bold text-amber-300">{player.questsCompleted}</p>
      </div>

      {/* XP */}
      <div className="text-right min-w-[60px] sm:min-w-[75px]">
        <p className="text-xs text-amber-400/50">XP</p>
        <p className="text-sm sm:text-base font-bold text-glow-amber text-glow-sm">
          {player.xp.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
