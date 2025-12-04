'use client';

import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { useWallet } from '@/hooks/useWallet';
import { DelegationPanel } from '@/components/DelegationPanel';
import { VotingPowerCalculator } from '@/components/VotingPowerCalculator';

export default function ProfilePage() {
    const { address, isConnected } = useWallet();

    if (!isConnected) {
        return (
            <Layout>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <Card className="text-center py-12">
                        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
                        <p className="text-gray-400">Please connect your wallet to view your profile</p>
                    </Card>
                </div>
            </Layout>
        );
    }

    // Mock data - in production, fetch from blockchain
    const profileData = {
        tokenBalance: 15000,
        votingPower: 15000,
        proposalsCreated: 3,
        votesCase: 12,
        delegatedTo: undefined,
        delegatedFrom: 0,
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-2xl font-bold">
                            {address?.slice(2, 4).toUpperCase()}
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-1">
                                {address?.slice(0, 6)}...{address?.slice(-4)}
                            </h1>
                            <Badge variant="success">Active Member</Badge>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <Card>
                        <div className="text-sm text-gray-400 mb-1">Token Balance</div>
                        <div className="text-2xl font-bold text-[var(--primary)]">
                            {profileData.tokenBalance.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">QUIN</div>
                    </Card>

                    <Card>
                        <div className="text-sm text-gray-400 mb-1">Voting Power</div>
                        <div className="text-2xl font-bold text-[var(--secondary)]">
                            {profileData.votingPower.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">Votes</div>
                    </Card>

                    <Card>
                        <div className="text-sm text-gray-400 mb-1">Proposals Created</div>
                        <div className="text-2xl font-bold text-[var(--accent)]">
                            {profileData.proposalsCreated}
                        </div>
                        <div className="text-xs text-gray-500">Total</div>
                    </Card>

                    <Card>
                        <div className="text-sm text-gray-400 mb-1">Votes Cast</div>
                        <div className="text-2xl font-bold text-[var(--success)]">
                            {profileData.votesCase}
                        </div>
                        <div className="text-xs text-gray-500">Total</div>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <VotingPowerCalculator
                        tokenBalance={profileData.tokenBalance}
                        delegatedTo={profileData.delegatedTo}
                        delegatedFrom={profileData.delegatedFrom}
                    />

                    <DelegationPanel />
                </div>

                {/* Recent Activity */}
                <div className="mt-8">
                    <Card>
                        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                        <div className="space-y-3">
                            {[
                                { action: 'Voted FOR', proposal: 'Treasury Allocation', time: '2 hours ago' },
                                { action: 'Created', proposal: 'New Grant Program', time: '1 day ago' },
                                { action: 'Voted AGAINST', proposal: 'Token Burn', time: '3 days ago' },
                            ].map((activity, i) => (
                                <div key={i} className="flex items-center justify-between py-3 border-b border-[var(--card-border)] last:border-0">
                                    <div>
                                        <div className="font-medium">{activity.action}</div>
                                        <div className="text-sm text-gray-400">{activity.proposal}</div>
                                    </div>
                                    <div className="text-sm text-gray-500">{activity.time}</div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
