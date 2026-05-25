'use client';

import { useAccount, useConnect, useDisconnect, useSwitchChain } from 'wagmi';
import { GameButton } from './game-button';
import { useState, useEffect } from 'react';
import { CELO_NETWORK } from '@/constants/contracts';

export function WalletConnectButton() {
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  const [showConnectors, setShowConnectors] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Debug: Log available connectors
    if (connectors.length > 0) {
      console.log('Available connectors:', connectors.map(c => ({
        name: c.name,
        id: c.id,
        uid: c.uid
      })));
    }
  }, [connectors]);

  // Check if we need to switch to Celo network
  const needsNetworkSwitch = isConnected && chain?.id !== CELO_NETWORK.id;

  // Don't render during SSR
  if (!mounted) {
    return (
      <GameButton variant="secondary" disabled>
        Loading...
      </GameButton>
    );
  }

  if (isConnected && !needsNetworkSwitch) {
    return (
      <div className="flex items-center gap-4 bg-stone-900/50 p-1.5 pr-2 rounded-xl border border-glow-amber/20 backdrop-blur-sm">
        <span className="text-sm font-bold text-glow-cyan font-[family-name:var(--font-cinzel)] tracking-wider pl-3">
          {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
        </span>
        <GameButton variant="secondary" size="sm" onClick={() => disconnect()}>
          Disconnect
        </GameButton>
      </div>
    );
  }

  if (isConnected && needsNetworkSwitch) {
    return (
      <div className="flex items-center gap-3 bg-stone-900/50 p-2 rounded-xl border border-red-500/30 backdrop-blur-sm">
        <span className="text-sm text-red-400 font-[family-name:var(--font-cinzel)] font-bold animate-pulse">Wrong Realm</span>
        <GameButton 
          onClick={() => switchChain({ chainId: CELO_NETWORK.id })}
          size="sm"
        >
          Enter Celo
        </GameButton>
        <GameButton variant="secondary" size="sm" onClick={() => disconnect()}>
          Flee
        </GameButton>
      </div>
    );
  }

  if (!showConnectors) {
    return (
      <GameButton
        onClick={() => setShowConnectors(true)}
      >
        Connect Wallet
      </GameButton>
    );
  }

  const getConnectorName = (connector: any) => {
    const name = connector.name?.toLowerCase() || '';
    const id = connector.id?.toLowerCase() || '';
    
    if (name.includes('metamask') || id.includes('metamask')) {
      return 'MetaMask';
    }
    
    if (name.includes('coinbase') || id.includes('coinbase')) {
      return 'Coinbase Wallet';
    }
    
    if (name.includes('walletconnect') || id.includes('walletconnect')) {
      return 'WalletConnect';
    }
    
    if (name.includes('injected') || id.includes('injected')) {
      if (typeof window !== 'undefined') {
        if ((window as any).ethereum?.isMetaMask) {
          return 'MetaMask';
        }
        if ((window as any).ethereum?.isBraveWallet) {
          return 'Brave Wallet';
        }
        if ((window as any).ethereum?.isRabby) {
          return 'Rabby Wallet';
        }
      }
      return 'Browser Wallet';
    }
    
    return connector.name || 'Unknown Wallet';
  };

  // Filter out duplicate wallet types
  const uniqueConnectors = connectors.filter((connector, index, array) => {
    const currentName = getConnectorName(connector);
    
    // For MetaMask, only keep the first one we encounter
    if (currentName === 'MetaMask') {
      const firstMetaMaskIndex = array.findIndex(c => getConnectorName(c) === 'MetaMask');
      return index === firstMetaMaskIndex;
    }
    
    return true;
  });

  return (
    <div className="relative">
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setShowConnectors(false)}
      />
      
      <div className="absolute right-0 top-full mt-2 z-50 bg-stone-900 border-2 border-glow-amber/40 rounded-xl shadow-glow-secondary p-4 min-w-60 holographic glass-card">
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-[family-name:var(--font-cinzel)] font-bold text-glow-amber mb-1 uppercase tracking-wider border-b border-glow-amber/20 pb-2">Choose Gateway</h3>
          
          {uniqueConnectors.map((connector) => {
            const displayName = getConnectorName(connector);
            
            return (
              <GameButton
                key={connector.uid}
                onClick={() => {
                  connect({ connector });
                  setShowConnectors(false);
                }}
                disabled={isPending}
                variant="secondary"
                size="sm"
                className="w-full text-left justify-start font-[family-name:var(--font-cinzel)]"
              >
                {isPending ? 'Summoning...' : displayName}
              </GameButton>
            );
          })}
          
          {error && (
            <p className="text-sm text-red-400 mt-1 font-[family-name:var(--font-cinzel)]">
              {error.message}
            </p>
          )}
          
          <button
            onClick={() => setShowConnectors(false)}
            className="mt-2 text-stone-400 hover:text-glow-amber transition-colors text-sm font-[family-name:var(--font-cinzel)] uppercase tracking-wider"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
