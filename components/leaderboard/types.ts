/**
 * TypeScript interfaces for the Leaderboard feature.
 * Defines the shape of player entries, stats, and filter options.
 */

/** Represents a single player entry on the leaderboard */
export interface LeaderboardEntry {
  /** Unique identifier for the player */
  id: string;
  /** Player's display name (fantasy RPG name) */
  name: string;
  /** Wallet address (truncated for display) */
  address: string;
  /** Player's current rank position */
  rank: number;
  /** Total experience points earned */
  xp: number;
  /** Number of quests completed */
  questsCompleted: number;
  /** Player level derived from XP */
  level: number;
  /** URL to player's avatar image */
  avatarUrl?: string;
  /** Array of achievement badge IDs the player has earned */
  achievements: string[];
  /** Timestamp of last activity */
  lastActive: Date;
  /** Player's current win streak */
  streak: number;
}

/** Aggregate stats displayed in the stats overview */
export interface PlayerStats {
  /** Total number of registered players */
  totalPlayers: number;
  /** Total quests completed across all players */
  totalQuestsCompleted: number;
  /** Total XP earned across all players */
  totalXpEarned: number;
  /** Number of currently active players */
  activePlayers: number;
}

/** Filter options for the leaderboard time period */
export type LeaderboardFilter = 'all-time' | 'this-week' | 'today';

/** Achievement badge metadata */
export interface AchievementBadge {
  /** Unique badge ID */
  id: string;
  /** Badge display name */
  name: string;
  /** Badge icon emoji or identifier */
  icon: string;
  /** Badge description */
  description: string;
  /** Rarity tier of the badge */
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}
