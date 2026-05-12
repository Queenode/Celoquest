'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WalletConnectButton } from './WalletConnectButton';
import { cn } from '@/lib/utils';

const navigation = [
  { 
    name: 'Home', 
    href: '/',
    isNew: false
  },
  { 
    name: 'Celo Quests', 
    href: '/celo-quests',
    isNew: false
  },
  { 
    name: 'Marketplace', 
    href: '/marketplace',
    isNew: false
  },
  { 
    name: 'Leaderboard', 
    href: '/leaderboard',
    isNew: false
  },
];

export function Header() {
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    // For home page, use exact match
    if (href === '/') {
      return pathname === '/';
    }
    // For other pages, check if pathname starts with the href
    return pathname?.startsWith(href) ?? false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-900/20 bg-stone-900/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <nav className="flex items-center space-x-1 text-sm font-medium">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 rounded-md transition-colors duration-200',
                      active
                        ? 'text-amber-400'
                        : 'text-amber-100/70 hover:text-amber-300'
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className={cn(
                      'absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-400 transition-all duration-200 -translate-x-1/2',
                      active && 'w-4/5'
                    )}></span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
}
