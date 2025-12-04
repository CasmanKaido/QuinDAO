'use client';

import { Card } from './ui/Card';

interface VotingPowerCalculatorProps {
    tokenBalance: number;
    delegatedTo?: string;
    delegatedFrom?: number;
}

export function VotingPowerCalculator({
    tokenBalance,
    delegatedTo,
    delegatedFrom = 0,
}: VotingPowerCalculatorProps) {
    const baseVotingPower = tokenBalance;
    const receivedDelegations = delegatedFrom;
    const totalVotingPower = delegatedTo ? 0 : baseVotingPower + receivedDelegations;

    return (
        <Card>
            <h3 className="text-xl font-bold mb-4">Voting Power Calculator</h3>

            <div className="space-y-4">
                {/* Token Balance */}
                <div className="flex items-center justify-between p-4 bg-[var(--input-bg)] rounded-lg">
                    <div>
                        <div className="text-sm text-gray-400">Your Token Balance</div>
                        <div className="text-2xl font-bold text-[var(--primary)]">
                            {tokenBalance.toLocaleString()} QUIN
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                        <span className="text-xl">💎</span>
                    </div>
                </div>

                {/* Delegated Power */}
                {delegatedFrom > 0 && (
                    <div className="flex items-center justify-between p-4 bg-[var(--input-bg)] rounded-lg">
                        <div>
                            <div className="text-sm text-gray-400">Delegated to You</div>
                            <div className="text-2xl font-bold text-[var(--accent)]">
                                +{delegatedFrom.toLocaleString()} QUIN
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[var(--accent)] bg-opacity-20 flex items-center justify-center">
                            <span className="text-xl">🤝</span>
                        </div>
                    </div>
                )}

                {/* Delegated Away */}
                {delegatedTo && (
                    <div className="flex items-center justify-between p-4 bg-[var(--warning)] bg-opacity-10 border border-[var(--warning)] rounded-lg">
                        <div>
                            <div className="text-sm text-[var(--warning)]">Delegated Away</div>
                            <div className="text-sm text-gray-400">
                                To: {delegatedTo.slice(0, 6)}...{delegatedTo.slice(-4)}
                            </div>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-[var(--warning)] bg-opacity-20 flex items-center justify-center">
                            <span className="text-xl">↗️</span>
                        </div>
                    </div>
                )}

                {/* Total Voting Power */}
                <div className="p-6 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg">
                    <div className="text-sm text-white opacity-80 mb-1">Total Voting Power</div>
                    <div className="text-4xl font-bold text-white mb-2">
                        {totalVotingPower.toLocaleString()}
                    </div>
                    <div className="text-sm text-white opacity-60">
                        {delegatedTo ? 'Delegated - Cannot vote directly' : 'Active voting power'}
                    </div>
                </div>

                {/* Info */}
                <div className="text-xs text-gray-500 bg-[var(--input-bg)] rounded-lg p-3">
                    <p className="mb-2">
                        <strong>How it works:</strong>
                    </p>
                    <ul className="space-y-1 ml-4">
                        <li>• 1 QUIN token = 1 vote</li>
                        <li>• Delegated tokens add to your voting power</li>
                        <li>• If you delegate, you cannot vote directly</li>
                        <li>• You can change delegation anytime</li>
                    </ul>
                </div>
            </div>
        </Card>
    );
}
