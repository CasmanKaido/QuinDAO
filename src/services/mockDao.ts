import { Proposal } from '@/types/dao';

// Mock DAO service to simulate fetching proposals
// In production, this would connect to smart contracts or a backend API

const mockProposals: Proposal[] = [
    {
        id: '1',
        title: 'Increase Treasury Allocation for Development',
        description: 'Proposal to allocate 500 ETH from the treasury to fund core development team for Q1 2025. This will enable us to hire 3 additional full-time developers and accelerate our roadmap delivery.',
        status: 'active',
        votesFor: 1250,
        votesAgainst: 340,
        votesAbstain: 50,
        totalVotes: 1640,
        startDate: 'Dec 1, 2025',
        endDate: 'Dec 15, 2025',
        author: '0x742d35Cc6634C0532925a3b844Bc9e4e89',
        authorEns: 'alice.eth',
        createdAt: Date.now() - 86400000 * 10,
    },
    {
        id: '2',
        title: 'Implement New Governance Token Staking Mechanism',
        description: 'Introduce a staking mechanism that rewards long-term holders with increased voting power. Stakers will receive 1.5x voting power after 30 days and 2x after 90 days.',
        status: 'active',
        votesFor: 890,
        votesAgainst: 1120,
        votesAbstain: 100,
        totalVotes: 2110,
        startDate: 'Dec 5, 2025',
        endDate: 'Dec 20, 2025',
        author: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
        createdAt: Date.now() - 86400000 * 5,
    },
    {
        id: '3',
        title: 'Partnership with DeFi Protocol XYZ',
        description: 'Strategic partnership to integrate our DAO governance with Protocol XYZ for cross-chain voting capabilities and liquidity sharing.',
        status: 'passed',
        votesFor: 2340,
        votesAgainst: 560,
        votesAbstain: 200,
        totalVotes: 3100,
        startDate: 'Nov 15, 2025',
        endDate: 'Dec 1, 2025',
        author: '0x9f8e7d6c5b4a3g2h1i0j9k8l7m6n5o4p',
        authorEns: 'bob.eth',
        createdAt: Date.now() - 86400000 * 30,
        executedAt: Date.now() - 86400000 * 3,
    },
    {
        id: '4',
        title: 'Community Grant Program - Batch 3',
        description: 'Approve 50 ETH in grants for community-driven projects and initiatives. This batch includes 5 projects focused on education and developer tooling.',
        status: 'pending',
        votesFor: 0,
        votesAgainst: 0,
        votesAbstain: 0,
        totalVotes: 0,
        startDate: 'Dec 20, 2025',
        endDate: 'Dec 25, 2025',
        author: '0x5b4a3g2h1i0j9k8l7m6n5o4p3e2f1d0c',
        createdAt: Date.now(),
    },
];

export const mockDaoService = {
    async getProposals(): Promise<Proposal[]> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockProposals;
    },

    async getProposal(id: string): Promise<Proposal | null> {
        await new Promise(resolve => setTimeout(resolve, 300));
        return mockProposals.find(p => p.id === id) || null;
    },

    async getActiveProposals(): Promise<Proposal[]> {
        await new Promise(resolve => setTimeout(resolve, 400));
        return mockProposals.filter(p => p.status === 'active');
    },
};
