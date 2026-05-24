'use client';

import { useState, useMemo, useCallback } from 'react';
import { PlayerRow } from './player-row';
import { SearchBar } from './search-bar';
import { FilterTabs } from './filter-tabs';
import type { LeaderboardEntry, LeaderboardFilter } from './types';

interface PlayerListProps {
  /** Array of leaderboard entries to display */
  players: LeaderboardEntry[];
  /** Optional wallet address of the current user to highlight */
  currentUserAddress?: string;
}

/**
 * Full scrollable player list with integrated search and filter controls.
 * Filters players by name/address and time period selection.
 */
export function PlayerList({ players, currentUserAddress }: PlayerListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<LeaderboardFilter>('all-time');

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const filteredPlayers = useMemo(() => {
    let filtered = [...players];

    // Apply search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.address.toLowerCase().includes(q)
      );
    }

    // Apply time filter (mock - in production, would filter by lastActive date)
    if (activeFilter === 'today') {
      const oneDayAgo = Date.now() - 86400000;
      filtered = filtered.filter((p) => p.lastActive.getTime() > oneDayAgo);
    } else if (activeFilter === 'this-week') {
      const oneWeekAgo = Date.now() - 604800000;
      filtered = filtered.filter((p) => p.lastActive.getTime() > oneWeekAgo);
    }

    return filtered;
  }, [players, searchQuery, activeFilter]);

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Controls Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <div className="flex-1">
          <SearchBar onSearch={handleSearch} />
        </div>
        <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      </div>

      {/* Column Headers */}
      <div className="hidden sm:flex items-center gap-4 px-5 py-2 text-xs text-amber-400/40 font-[family-name:var(--font-cinzel)]">
        <div className="w-10" />
        <div className="w-10" />
        <div className="flex-1">Player</div>
        <div className="hidden sm:block w-[50px] text-center">Level</div>
        <div className="hidden md:block w-[50px] text-center">Quests</div>
        <div className="w-[75px] text-right">XP</div>
      </div>

      {/* Player Rows */}
      <div className="space-y-1.5 sm:space-y-2">
        {filteredPlayers.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <p className="text-amber-400/40 font-[family-name:var(--font-cinzel)]">
              No adventurers found
            </p>
            <p className="text-xs text-amber-400/25 mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          filteredPlayers.map((player) => (
            <PlayerRow
              key={player.id}
              player={player}
              isCurrentUser={player.address === currentUserAddress}
            />
          ))
        )}
      </div>

      {/* Results count */}
      {filteredPlayers.length > 0 && (
        <p className="text-center text-xs text-amber-400/30 pt-2">
          Showing {filteredPlayers.length} of {players.length} adventurers
        </p>
      )}
    </div>
  );
}
