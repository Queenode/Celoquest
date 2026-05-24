'use client';

import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  /** Label text displayed above the value */
  label: string;
  /** Numeric value to display */
  value: number | string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** Color accent variant */
  variant?: 'amber' | 'cyan';
}

/**
 * Individual stat card for leaderboard overview.
 * Displays a single metric with an icon, label, and formatted value.
 */
export function StatsCard({ label, value, icon: Icon, variant = 'amber' }: StatsCardProps) {
  const isAmber = variant === 'amber';

  return (
    <div
      className={`relative overflow-hidden rounded-xl border p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
        isAmber
          ? 'border-amber-500/20 bg-amber-500/5 hover:border-amber-500/30'
          : 'border-cyan-500/20 bg-cyan-500/5 hover:border-cyan-500/30'
      }`}
    >
      {/* Background glow */}
      <div
        className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20 ${
          isAmber ? 'bg-amber-500' : 'bg-cyan-500'
        }`}
      />

      <div className="relative flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            isAmber ? 'bg-amber-500/15' : 'bg-cyan-500/15'
          }`}
        >
          <Icon className={`w-5 h-5 ${isAmber ? 'text-amber-400' : 'text-cyan-400'}`} />
        </div>

        <div>
          <p className="text-xs text-amber-400/50 font-[family-name:var(--font-cinzel)]">{label}</p>
          <p
            className={`text-lg sm:text-xl font-bold ${
              isAmber ? 'text-amber-300' : 'text-cyan-300'
            }`}
          >
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
        </div>
      </div>
    </div>
  );
}
