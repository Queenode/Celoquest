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
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-primary" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-black" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-cinzel-decorative)]">
              NFT Marketplace
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary mt-2">
                Coming Soon
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get ready to trade exclusive NFTs, quest rewards, and digital collectibles on the Celo network.
            </p>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Quest Rewards</h3>
              <p className="text-muted-foreground">Trade NFTs earned from completing Celo quests and challenges</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <Coins className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary">Rare Collectibles</h3>
              <p className="text-muted-foreground">Discover unique digital assets representing your Celo journey</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">Secure Trading</h3>
              <p className="text-muted-foreground">Safe and transparent transactions on the Celo blockchain</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6 pt-8">
            <p className="text-lg text-muted-foreground">
              Start your quest journey now to earn NFTs that will be tradeable once the marketplace launches!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
                <Link href="/celo-quests">Start Questing</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-foreground hover:bg-primary/10">
                <Link href="/leaderboard">View Leaderboard</Link>
              </Button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-16 p-6 bg-muted/20 rounded-2xl border border-muted/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">Development Progress</span>
              <span className="text-sm font-bold text-primary">75%</span>
            </div>
            <div className="w-full bg-muted/30 rounded-full h-2">
              <div className="bg-linear-to-r from-primary to-secondary h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Smart contracts deployed, frontend in development</p>
          </div>
        </div>
      </div>
    </div>
  );
}
