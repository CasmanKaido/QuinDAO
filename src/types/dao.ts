// TypeScript interfaces for DAO-related data structures

export interface Proposal {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'passed' | 'rejected' | 'pending';
    votesFor: number;
    votesAgainst: number;
    votesAbstain: number;
    totalVotes: number;
    startDate: string;
    endDate: string;
    author: string;
    authorEns?: string;
    createdAt: number;
    executedAt?: number;
}

export interface Vote {
    id: string;
    proposalId: string;
    voter: string;
    voterEns?: string;
    choice: 'for' | 'against' | 'abstain';
    votingPower: number;
    timestamp: number;
    transactionHash?: string;
}

export interface Voter {
    address: string;
    ensName?: string;
    votingPower: number;
    proposalsVoted: number;
    lastVoteTimestamp?: number;
    isOnline?: boolean;
}

export interface DAOStats {
    totalProposals: number;
    activeProposals: number;
    totalVoters: number;
    totalVotes: number;
    treasuryBalance: string;
    governanceToken: string;
}
