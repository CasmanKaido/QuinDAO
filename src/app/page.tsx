import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { ProposalCard } from '@/components/ProposalCard';

// Mock data for proposals
const mockProposals = [
  {
    id: '1',
    title: 'Increase Treasury Allocation for Development',
    description: 'Proposal to allocate 500 ETH from the treasury to fund core development team for Q1 2025.',
    status: 'active' as const,
    votesFor: 1250,
    votesAgainst: 340,
    totalVotes: 1590,
    endDate: 'Dec 15, 2025',
    author: '0x742d...4e89',
  },
  {
    id: '2',
    title: 'Implement New Governance Token Staking Mechanism',
    description: 'Introduce a staking mechanism that rewards long-term holders with increased voting power.',
    status: 'active' as const,
    votesFor: 890,
    votesAgainst: 1120,
    totalVotes: 2010,
    endDate: 'Dec 20, 2025',
    author: '0x1a2b...3c4d',
  },
  {
    id: '3',
    title: 'Partnership with DeFi Protocol XYZ',
    description: 'Strategic partnership to integrate our DAO governance with Protocol XYZ for cross-chain voting.',
    status: 'passed' as const,
    votesFor: 2340,
    votesAgainst: 560,
    totalVotes: 2900,
    endDate: 'Dec 1, 2025',
    author: '0x9f8e...7d6c',
  },
  {
    id: '4',
    title: 'Community Grant Program - Batch 3',
    description: 'Approve 50 ETH in grants for community-driven projects and initiatives.',
    status: 'pending' as const,
    votesFor: 0,
    votesAgainst: 0,
    totalVotes: 0,
    endDate: 'Dec 25, 2025',
    author: '0x5b4a...3e2f',
  },
];

export default function Home() {
  return (
    <Layout>
      <Hero />

      {/* Proposals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Active Proposals</h2>
            <p className="text-gray-400">Vote on proposals and shape the future of QuinDAO</p>
          </div>
          <button className="px-6 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] font-semibold">
            Create Proposal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockProposals.map((proposal) => (
            <ProposalCard key={proposal.id} {...proposal} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
