/**
 * Loading skeleton for player rows in the leaderboard.
 * Displays animated shimmer placeholders matching the player row layout.
 */
export function PlayerRowSkeleton() {
  return (
    <div className="flex items-center gap-4 px-5 py-4 rounded-xl border border-amber-500/10 bg-stone-900/40 animate-pulse">
      {/* Rank skeleton */}
      <div className="w-10 h-10 rounded-full bg-stone-800/80" />

      {/* Avatar skeleton */}
      <div className="w-10 h-10 rounded-full bg-stone-800/80 flex-shrink-0" />

      {/* Name & address skeleton */}
      <div className="flex-1 space-y-2">
        <div className="h-4 w-32 bg-stone-800/80 rounded" />
        <div className="h-3 w-24 bg-stone-800/60 rounded" />
      </div>

      {/* Level skeleton */}
      <div className="hidden sm:block space-y-1 text-center">
        <div className="h-3 w-8 bg-stone-800/60 rounded mx-auto" />
        <div className="h-4 w-6 bg-stone-800/80 rounded mx-auto" />
      </div>

      {/* Quests skeleton */}
      <div className="hidden md:block space-y-1 text-center">
        <div className="h-3 w-10 bg-stone-800/60 rounded mx-auto" />
        <div className="h-4 w-6 bg-stone-800/80 rounded mx-auto" />
      </div>

      {/* XP skeleton */}
      <div className="space-y-1 text-right min-w-[75px]">
        <div className="h-3 w-6 bg-stone-800/60 rounded ml-auto" />
        <div className="h-5 w-14 bg-stone-800/80 rounded ml-auto" />
      </div>
    </div>
  );
}

/**
 * Renders multiple skeleton rows for a loading state.
 */
export function PlayerRowSkeletonList({ count = 10 }: { count?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <PlayerRowSkeleton key={i} />
      ))}
    </div>
  );
}
