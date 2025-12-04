'use client';

import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, arbitrum, optimism, base } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || 'YOUR_PROJECT_ID_HERE';

// 2. Create wagmiAdapter with minimal config
const wagmiAdapter = new WagmiAdapter({
  networks: [base, mainnet, polygon, arbitrum, optimism],
  projectId,
  ssr: true,
});

// 3. Create modal with Reown's built-in wallet support
createAppKit({
  adapters: [wagmiAdapter],
  networks: [base, mainnet, polygon, arbitrum, optimism],
  projectId,
  metadata: {
    name: 'QuinDAO - Watch Party Voting',
    description: 'Real-time DAO voting with live watch party features',
    url: 'https://quindao.app',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
  features: {
    analytics: true,
  },
  allWallets: 'SHOW', // Show all wallets via WalletConnect
});

export { wagmiAdapter, queryClient };
