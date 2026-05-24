'use client';

import { Calendar, Clock, Star } from 'lucide-react';
import type { LeaderboardFilter } from './types';

interface FilterTabsProps {
  /** Currently active filter */
  activeFilter: LeaderboardFilter;
  /** Callback when a filter tab is clicked */
  onFilterChange: (filter: LeaderboardFilter) => void;
}

const FILTERS: { id: LeaderboardFilter; label: string; icon: typeof Star }[] = [
  { id: 'all-time', label: 'All Time', icon: Star },
  { id: 'this-week', label: 'This Week', icon: Calendar },
  { id: 'today', label: 'Today', icon: Clock },
];

/**
 * Tab filters for leaderboard time periods.
 * Supports All Time, This Week, and Today with animated active indicator.
 */
export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 p-1 rounded-xl bg-stone-900/60 border border-amber-500/10 backdrop-blur-sm">
      {FILTERS.map(({ id, label, icon: Icon }) => {
        const isActive = activeFilter === id;

        return (
          <button
            key={id}
            onClick={() => onFilterChange(id)}
            className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 font-[family-name:var(--font-cinzel)] ${
              isActive
                ? 'bg-amber-500/15 text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.1)]'
                : 'text-amber-400/40 hover:text-amber-400/70 hover:bg-amber-500/5'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-amber-400/40'}`} />
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{label.split(' ').pop()}</span>
            {isActive && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-glow-amber rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
