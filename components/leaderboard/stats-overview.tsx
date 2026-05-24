'use client';

import { Users, Swords, Zap, Activity } from 'lucide-react';
import { StatsCard } from './stats-card';
import { MOCK_STATS } from './constants';

/**
 * Row of stats cards displaying aggregate leaderboard metrics.
 * Shows total players, quests completed, total XP, and active players.
 */
export function StatsOverview() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <StatsCard
        label="Total Players"
        value={MOCK_STATS.totalPlayers}
        icon={Users}
        variant="amber"
      />
      <StatsCard
        label="Quests Completed"
        value={MOCK_STATS.totalQuestsCompleted}
        icon={Swords}
        variant="cyan"
      />
      <StatsCard
        label="Total XP Earned"
        value={MOCK_STATS.totalXpEarned}
        icon={Zap}
        variant="amber"
      />
      <StatsCard
        label="Active Now"
        value={MOCK_STATS.activePlayers}
        icon={Activity}
        variant="cyan"
      />
    </div>
  );
}
