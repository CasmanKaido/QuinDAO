'use client';

import { useSwitchChain, useChainId } from 'wagmi';
import { mainnet, polygon, arbitrum, optimism } from '@reown/appkit/networks';

const supportedNetworks = [mainnet, polygon, arbitrum, optimism];

export function NetworkSwitcher() {
    const { switchChain } = useSwitchChain();
    const currentChainId = useChainId();

    const currentNetwork = supportedNetworks.find(n => n.id === currentChainId);

    return (
        <div className="relative group">
            <button className="px-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[var(--success)]" />
                <span className="text-sm font-medium">
                    {currentNetwork?.name || 'Unknown Network'}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            <div className="absolute top-full mt-2 right-0 w-48 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {supportedNetworks.map((network) => (
                    <button
                        key={network.id}
                        onClick={() => switchChain({ chainId: network.id })}
                        className={`
              w-full px-4 py-3 text-left hover:bg-[var(--input-bg)] flex items-center gap-3 first:rounded-t-lg last:rounded-b-lg
              ${currentChainId === network.id ? 'bg-[var(--input-bg)]' : ''}
            `}
                    >
                        <div className={`w-2 h-2 rounded-full ${currentChainId === network.id ? 'bg-[var(--success)]' : 'bg-gray-600'}`} />
                        <span className="text-sm font-medium">{network.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
