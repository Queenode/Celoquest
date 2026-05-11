import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingBag, Coins, Trophy, Clock } from 'lucide-react';

export const metadata = {
  title: 'NFT Marketplace - Coming Soon | Celo Quest',
  description: 'NFT Marketplace coming soon - Trade exclusive NFTs and collectibles from your Celo journey',
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/10">
      <div className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Icon */}
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-cyan-400" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-black" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-cinzel-decorative)]">
              NFT Marketplace
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-2">
                Coming Soon
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get ready to trade exclusive NFTs, quest rewards, and digital collectibles on the Celo network.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-background/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-cyan-400">Quest Rewards</h3>
              <p className="text-muted-foreground">Trade NFTs earned from completing quests and challenges</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Coins className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-purple-400">Rare Collectibles</h3>
              <p className="text-muted-foreground">Discover and collect unique digital assets with different rarities</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-amber-400">Secure Trading</h3>
              <p className="text-muted-foreground">Safe and transparent transactions on the Celo blockchain</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6 pt-8">
            <p className="text-lg text-muted-foreground">
              Start your quest journey now to earn NFTs that will be tradeable once the marketplace launches!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/quests">Start Questing</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cyan-400 text-foreground hover:bg-cyan-900/30">
                <Link href="/leaderboard">View Leaderboard</Link>
              </Button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16 p-6 bg-muted/20 rounded-2xl border border-muted/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">Development Progress</span>
              <span className="text-sm font-bold text-cyan-400">75%</span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Smart contracts deployed, frontend in development</p>
          </div>
        </div>
      </div>
    </div>
  );
}
