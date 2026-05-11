import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Trophy, Medal, Crown, Clock, Users, Star } from 'lucide-react';

export const metadata = {
  title: 'Leaderboard - Coming Soon | Celo Quest',
  description: 'Leaderboard coming soon - See where you stand among other adventurers',
};

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Icon */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
              <Trophy className="w-16 h-16 text-amber-400" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-black" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-cinzel-decorative)]">
              Leaderboard
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mt-2">
                Coming Soon
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compete with fellow adventurers and climb the ranks to become the ultimate Celo Quest champion.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-background/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-amber-400">Global Rankings</h3>
              <p className="text-muted-foreground">See how you rank against players worldwide</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Medal className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-cyan-400">XP Tracking</h3>
              <p className="text-muted-foreground">Track experience points earned from completed quests</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-purple-400">Achievements</h3>
              <p className="text-muted-foreground">Unlock badges and special recognition for your accomplishments</p>
            </div>
          </div>

          {/* Mock Leaderboard Preview */}
          <div className="mt-12 bg-background/30 backdrop-blur-sm border border-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Preview Rankings</h3>
            <div className="space-y-4">
              {[
                { rank: 1, name: "Quest Master", xp: "12,450", icon: Crown, color: "text-amber-400" },
                { rank: 2, name: "Dragon Slayer", xp: "11,200", icon: Trophy, color: "text-gray-400" },
                { rank: 3, name: "Crypto Warrior", xp: "10,800", icon: Medal, color: "text-orange-400" },
              ].map((player, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-muted/30`}>
                      <player.icon className={`w-5 h-5 ${player.color}`} />
                    </div>
                    <div>
                      <p className="font-semibold">{player.name}</p>
                      <p className="text-sm text-muted-foreground">#{player.rank} • {player.xp} XP</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Users className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">* This is a preview. Real rankings will be based on actual quest completion data.</p>
          </div>

          {/* Call to Action */}
          <div className="space-y-6 pt-8">
            <p className="text-lg text-muted-foreground">
              Start completing quests now to secure your position when the leaderboard goes live!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Link href="/quests">Start Questing</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-amber-400 text-foreground hover:bg-amber-900/30">
                <Link href="/marketplace">View Marketplace</Link>
              </Button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16 p-6 bg-muted/20 rounded-2xl border border-muted/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">Development Progress</span>
              <span className="text-sm font-bold text-amber-400">80%</span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Smart contracts ready, leaderboard system in final development</p>
          </div>
        </div>
      </div>
    </div>
  );
}
