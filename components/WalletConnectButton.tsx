'use client';

import { useAccount, useConnect, useDisconnect, useSwitchChain } from 'wagmi';
import { Button } from './ui/button';
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
      <Button disabled className="bg-blue-600 text-white">
        Loading...
      </Button>
    );
  }

  if (isConnected && !needsNetworkSwitch) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
        </span>
        <Button variant="outline" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    );
  }

  if (isConnected && needsNetworkSwitch) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-yellow-500">Wrong Network</span>
        <Button 
          onClick={() => switchChain({ chainId: CELO_NETWORK.id })}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          Switch to Celo
        </Button>
        <Button variant="outline" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    );
  }

  if (!showConnectors) {
    return (
      <Button
        onClick={() => setShowConnectors(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white"
      >
        Connect Wallet
      </Button>
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
      
      <div className="absolute right-0 top-full mt-2 z-50 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-4 min-w-60">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-white mb-2">Connect Wallet</h3>
          
          {uniqueConnectors.map((connector) => {
            const displayName = getConnectorName(connector);
            
            return (
              <Button
                key={connector.uid}
                onClick={() => {
                  connect({ connector });
                  setShowConnectors(false);
                }}
                disabled={isPending}
                variant="outline"
                className="w-full justify-start bg-gray-800 hover:bg-gray-700 text-white border-gray-600"
              >
                {isPending ? 'Connecting...' : displayName}
              </Button>
            );
          })}
          
          {error && (
            <p className="text-sm text-red-400 mt-1">
              {error.message}
            </p>
          )}
          
          <Button
            onClick={() => setShowConnectors(false)}
            variant="ghost"
            size="sm"
            className="mt-2 text-gray-400 hover:text-white"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
