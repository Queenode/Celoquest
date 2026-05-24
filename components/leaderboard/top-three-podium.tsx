'use client';

import { Crown, Trophy, Medal } from 'lucide-react';
import type { LeaderboardEntry } from './types';

interface PodiumSlotProps {
  player: LeaderboardEntry;
  position: 1 | 2 | 3;
}

/**
 * Individual podium slot for a top-3 player.
 * Height and styling vary by position (gold tallest, bronze shortest).
 */
function PodiumSlot({ player, position }: PodiumSlotProps) {
  const configs = {
    1: {
      height: 'h-36 sm:h-44',
      icon: Crown,
      iconColor: 'text-amber-400',
      bgGlow: 'from-amber-500/20 to-amber-700/5',
      borderColor: 'border-amber-500/30',
      nameColor: 'text-amber-300',
      xpColor: 'text-glow-amber',
      order: 'order-2',
      label: '1st',
      avatarSize: 'w-16 h-16 sm:w-20 sm:h-20',
      avatarRing: 'ring-2 ring-amber-400/50',
    },
    2: {
      height: 'h-28 sm:h-36',
      icon: Trophy,
      iconColor: 'text-cyan-300',
      bgGlow: 'from-cyan-500/15 to-cyan-700/5',
      borderColor: 'border-cyan-500/25',
      nameColor: 'text-cyan-200',
      xpColor: 'text-cyan-300',
      order: 'order-1',
      label: '2nd',
      avatarSize: 'w-14 h-14 sm:w-16 sm:h-16',
      avatarRing: 'ring-2 ring-cyan-400/40',
    },
    3: {
      height: 'h-24 sm:h-28',
      icon: Medal,
      iconColor: 'text-amber-600',
      bgGlow: 'from-amber-700/15 to-amber-900/5',
      borderColor: 'border-amber-600/20',
      nameColor: 'text-amber-400',
      xpColor: 'text-amber-400',
      order: 'order-3',
      label: '3rd',
      avatarSize: 'w-12 h-12 sm:w-14 sm:h-14',
      avatarRing: 'ring-2 ring-amber-600/30',
    },
  };

  const config = configs[position];
  const Icon = config.icon;
  const avatarInitials = player.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div className={`flex flex-col items-center ${config.order} flex-1`}>
      {/* Player Avatar & Icon */}
      <div className="relative mb-3">
        <div
          className={`${config.avatarSize} ${config.avatarRing} rounded-full bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center font-bold text-amber-200 font-[family-name:var(--font-cinzel)] text-sm sm:text-base`}
        >
          {avatarInitials}
        </div>
        <div className="absolute -top-2 -right-2">
          <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${config.iconColor} drop-shadow-[0_0_6px_currentColor]`} />
        </div>
      </div>

      {/* Player Name */}
      <p className={`text-xs sm:text-sm font-bold ${config.nameColor} text-center truncate max-w-[100px] sm:max-w-[130px] font-[family-name:var(--font-cinzel)]`}>
        {player.name}
      </p>

      {/* XP */}
      <p className={`text-xs sm:text-sm font-bold ${config.xpColor} text-glow-sm mt-1`}>
        {player.xp.toLocaleString()} XP
      </p>

      {/* Podium Bar */}
      <div
        className={`${config.height} w-full mt-3 rounded-t-xl bg-gradient-to-t ${config.bgGlow} border-t border-x ${config.borderColor} flex items-start justify-center pt-3 backdrop-blur-sm`}
      >
        <span className={`text-lg sm:text-2xl font-black ${config.nameColor} opacity-40 font-[family-name:var(--font-cinzel-decorative)]`}>
          {config.label}
        </span>
      </div>
    </div>
  );
}

interface TopThreePodiumProps {
  players: LeaderboardEntry[];
}

/**
 * Podium display for the top 3 leaderboard players.
 * Arranges positions as 2nd | 1st | 3rd with varying heights.
 */
export function TopThreePodium({ players }: TopThreePodiumProps) {
  if (players.length < 3) return null;

  return (
    <div className="flex items-end justify-center gap-2 sm:gap-4 px-4 py-6 sm:py-8">
      <PodiumSlot player={players[1]} position={2} />
      <PodiumSlot player={players[0]} position={1} />
      <PodiumSlot player={players[2]} position={3} />
    </div>
  );
}
