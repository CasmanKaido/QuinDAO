'use client';

import { useParams } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { VoteProgressBar } from '@/components/VoteProgressBar';
import { UserAvatar } from '@/components/UserAvatar';
import { Card } from '@/components/ui/Card';

// Mock proposal data - in production, fetch from blockchain
const getProposal = (id: string) => ({
    id,
    title: 'Increase Treasury Allocation for Development',
    description: `# Proposal Summary\n\nThis proposal seeks to allocate 500 ETH from the DAO treasury to fund the core development team for Q1 2025.\n\n## Rationale\n\nOur current development velocity is limited by team size. By expanding the team with 3 additional full-time developers, we can:\n\n- Accelerate roadmap delivery by 40%\n- Improve code quality and testing coverage\n- Reduce technical debt\n\n## Budget Breakdown\n\n- Senior Developer (3 months): 200 ETH\n- Mid-level Developer (3 months): 150 ETH\n- Junior Developer (3 months): 100 ETH\n- Infrastructure & Tools: 50 ETH\n\n**Total: 500 ETH**\n\n## Timeline\n\nIf approved, hiring will begin immediately with onboarding completed by January 15, 2025.`,
    status: 'active' as const,
    votesFor: 1250,
    votesAgainst: 340,
    votesAbstain: 50,
    totalVotes: 1640,
    startDate: 'Dec 1, 2025',
    endDate: 'Dec 15, 2025',
    author: '0x742d35Cc6634C0532925a3b844Bc9e4e89',
    authorEns: 'alice.eth',
});

export default function ProposalPage() {
    const params = useParams();
    const proposal = getProposal(params.id as string);

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Badge variant="success">{proposal.status.toUpperCase()}</Badge>
                                <span className="text-sm text-gray-400">Proposal #{proposal.id}</span>
                            </div>
                            <h1 className="text-4xl font-bold mb-4">{proposal.title}</h1>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <UserAvatar address={proposal.author} ensName={proposal.authorEns} showAddress />
                                <span>•</span>
                                <span>Ends {proposal.endDate}</span>
                            </div>
                        </div>

                        <Card className="mb-8">
                            <div className="prose prose-invert max-w-none">
                                {proposal.description.split('\n').map((line, i) => (
                                    <p key={i} className="mb-2">{line}</p>
                                ))}
                            </div>
                        </Card>

                        {/* Votes List */}
                        <Card>
                            <h3 className="text-xl font-bold mb-4">Recent Votes</h3>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="flex items-center justify-between py-2 border-b border-[var(--card-border)] last:border-0">
                                        <UserAvatar address={`0x${i}abc...def${i}`} showAddress size="sm" />
                                        <Badge variant={i % 2 === 0 ? 'success' : 'error'}>
                                            {i % 2 === 0 ? 'FOR' : 'AGAINST'}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-20">
                            <h3 className="text-xl font-bold mb-4">Cast Your Vote</h3>

                            <VoteProgressBar
                                votesFor={proposal.votesFor}
                                votesAgainst={proposal.votesAgainst}
                                votesAbstain={proposal.votesAbstain}
                                totalVotes={proposal.totalVotes}
                                showCounts
                            />

                            <div className="mt-6 space-y-3">
                                <Button variant="primary" className="w-full">
                                    Vote For
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Vote Against
                                </Button>
                                <Button variant="ghost" className="w-full">
                                    Abstain
                                </Button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-[var(--card-border)] space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Start Date</span>
                                    <span>{proposal.startDate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">End Date</span>
                                    <span>{proposal.endDate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total Votes</span>
                                    <span>{proposal.totalVotes}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
