'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Clock, ShoppingCart, Eye } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useAccount } from 'wagmi';

type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';

interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  seller: string;
  rarity: Rarity;
  category: string;
  views: string;
  likes: string;
  listedAt: Date;
}

const RARITY_COLORS: Record<Rarity, string> = {
  common: 'bg-gray-500/20 text-gray-300',
  uncommon: 'bg-green-500/20 text-green-400',
  rare: 'bg-cyan-500/20 text-cyan-400',
  epic: 'bg-purple-500/20 text-purple-400',
  legendary: 'bg-amber-500/20 text-amber-400',
  mythic: 'bg-pink-500/20 text-pink-400',
} as const;

// Mock data - replace with actual NFT data from your contract
const MOCK_NFTS: NFT[] = [
  {
    id: '1',
    name: 'Golden Dragon Egg',
    description: 'A rare dragon egg from the depths of the Celo blockchain',
    image: '/nfts/dragon-egg.png',
    price: '0.1',
    seller: '0x1234...5678',
    rarity: 'legendary',
    category: 'pets',
    views: '1.2k',
    likes: '245',
    listedAt: new Date(Date.now() - 3600000 * 2), // 2 hours ago
  },
  {
    id: '2',
    name: 'Mystic Sword',
    description: 'A powerful sword imbued with ancient Celo magic',
    image: '/nfts/mystic-sword.png',
    price: '0.25',
    seller: '0x2345...6789',
    rarity: 'epic' as const,
    category: 'weapons',
    views: '856',
    likes: '189',
    listedAt: new Date(Date.now() - 3600000 * 5), // 5 hours ago
  },
  {
    id: '3',
    name: 'Wizard Staff',
    description: 'Channel the power of the elements with this enchanted staff',
    image: '/nfts/wizard-staff.png',
    price: '0.18',
    seller: '0x3456...7890',
    rarity: 'rare' as const,
    category: 'weapons',
    views: '723',
    likes: '156',
    listedAt: new Date(Date.now() - 3600000 * 10), // 10 hours ago
  },
  {
    id: '4',
    name: 'Shield of Protection',
    description: 'A sturdy shield that can withstand any attack',
    image: '/nfts/shield.png',
    price: '0.15',
    seller: '0x4567...8901',
    rarity: 'uncommon' as const,
    category: 'armor',
    views: '642',
    likes: '98',
    listedAt: new Date(Date.now() - 3600000 * 24), // 1 day ago
  },
  {
    id: '5',
    name: 'Ancient Tome',
    description: 'A book of forgotten spells and ancient knowledge',
    image: '/nfts/ancient-tome.png',
    price: '0.22',
    seller: '0x5678...9012',
    rarity: 'epic' as const,
    category: 'artifacts',
    views: '1.1k',
    likes: '312',
    listedAt: new Date(Date.now() - 3600000 * 3), // 3 hours ago
  },
  {
    id: '6',
    name: 'Phantom Cloak',
    description: 'Become invisible to your enemies with this magical cloak',
    image: '/nfts/phantom-cloak.png',
    price: '0.3',
    seller: '0x6789...0123',
    rarity: 'legendary',
    category: 'armor',
    views: '2.3k',
    likes: '567',
    listedAt: new Date(Date.now() - 3600000), // 1 hour ago
  },
];

// Rarity colors are now defined at the top with the type

export function NFTGrid() {
  const { address } = useAccount();
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) return `${interval}y ago`;
    
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return `${interval}mo ago`;
    
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return `${interval}d ago`;
    
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return `${interval}h ago`;
    
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return `${interval}m ago`;
    
    return 'Just now';
  };

  const handleBuy = async (nftId: string, price: string) => {
    try {
      console.log(`Buying NFT ${nftId} for ${price} ETH`);
      alert(`Successfully purchased NFT ${nftId} for ${price} ETH`);
    } catch (error) {
      console.error('Error purchasing NFT:', error);
      alert('Failed to purchase NFT');
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {MOCK_NFTS.map((nft) => (
        <Card 
          key={nft.id} 
          className="group relative overflow-hidden bg-background/50 backdrop-blur-sm border border-muted/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          {/* NFT Image */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <Button 
                className="w-full bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200"
                size="sm"
                onClick={() => handleBuy(nft.id, nft.price)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now
              </Button>
            </div>
            
            {/* Rarity Badge */}
            <Badge 
              className={`absolute top-3 left-3 ${RARITY_COLORS[nft.rarity]} border-0`}
              variant="secondary"
            >
              {nft.rarity.charAt(0).toUpperCase() + nft.rarity.slice(1)}
            </Badge>
            
            {/* Like Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleLike(nft.id);
              }}
              className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/100 transition-colors"
              aria-label={likedItems[nft.id] ? 'Unlike' : 'Like'}
            >
              <Heart 
                className={`w-5 h-5 ${likedItems[nft.id] ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
              />
            </button>
          </div>
          {/* NFT Details */}
          <CardContent className="p-4">
            <div className="flex justify-between items-start gap-2">
              <div className="space-y-1 flex-1 min-w-0">
                <h3 className="font-semibold truncate">{nft.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                  {nft.description}
                </p>
              </div>
              <div className="text-right">
                <span className="text-sm text-muted-foreground">Price</span>
                <p className="font-bold text-lg text-cyan-400">{nft.price} ETH</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mt-4 pt-4 border-t border-muted/20 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center">
                <Eye className="w-3.5 h-3.5 mr-1" />
                <span>{nft.views}</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-3.5 h-3.5 mr-1 fill-current" />
                <span>{nft.likes}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1" />
                <span>{formatTimeAgo(nft.listedAt)}</span>
              </div>
            </div>
          </CardContent>
          
          {/* Seller Info */}
          <CardFooter className="px-4 pb-4 pt-0">
            <div className="w-full flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Sold by</span>
              <Link 
                href={`/profile/${nft.seller}`} 
                className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors"
              >
                {nft.seller}
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
