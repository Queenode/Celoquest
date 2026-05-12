// Smart Contract Addresses on Celo Network
export const CONTRACT_ADDRESSES = {
  // Celo Mainnet (Chain ID: 42220)
  CELO: {
    XP_TOKEN: '0x59e188c22faa5b9fc004a97cf7bde85ca8a0ac4a' as `0x${string}`,
    CHAPTER_NFT: '0xa51d3fb3858ef1741ffa7a85d5cce0b7da28da59' as `0x${string}`,
    LEADERBOARD: '0x9c0c8a0a72717d9588f5457dc697d95f4c2a7b7e' as `0x${string}`,
    GAME_CORE: '0x7286f0ae716e89e0c701b95a3da3a5730c2ee681' as `0x${string}`,
    REWARD_SIGNER: '0xb216270aFB9DfcD611AFAf785cEB38250863F2C9' as `0x${string}`,
  }
} as const;

// Celo Network Configuration
export const CELO_NETWORK = {
  id: 42220,
  name: 'Celo',
  network: 'celo',
  nativeCurrency: {
    decimals: 18,
    name: 'Celo',
    symbol: 'CELO',
  },
  rpcUrls: {
    public: { http: ['https://forno.celo.org'] },
    default: { http: ['https://forno.celo.org'] },
  },
  blockExplorers: {
    default: { name: 'CeloScan', url: 'https://celoscan.io' },
  },
} as const;

// Quest Types Enum (matches smart contract)
export enum QuestType {
  ETHEREUM = 0,
  CELO = 1
}

// Contract Function Names for easy reference
export const CONTRACT_FUNCTIONS = {
  GAME_CORE: {
    CLAIM_PROGRESS: 'claimProgress',
    GET_QUEST_PROGRESS: 'getQuestProgress',
    IS_COMPLETED: 'isCompleted',
    GET_USER_TOTAL_XP: 'getUserTotalXP',
    CALCULATE_REWARD: 'calculateReward',
    IS_CHAPTER_COMPLETED: 'isChapterCompleted',
    GET_USER_COMPLETED_QUESTS: 'getUserCompletedQuests',
  },
  LEADERBOARD: {
    GET_LEADERBOARD: 'getLeaderboard',
    GET_PLAYER_STATS: 'getPlayerStats',
    GET_PLAYER_TOTAL_XP: 'getPlayerTotalXP',
    GET_PLAYER_RANK: 'getPlayerRank',
    GET_TOP_PLAYERS: 'getTopPlayers',
    UPDATE_SCORE: 'updateScore',
  }
} as const;