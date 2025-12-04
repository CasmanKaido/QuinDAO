'use client';

import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

interface ProposalCardProps {
    id: string;
    title: string;
    description: string;
    status: 'active' | 'passed' | 'rejected' | 'pending';
    votesFor: number;
    votesAgainst: number;
    totalVotes: number;
    endDate: string;
    author: string;
}

export function ProposalCard({
    id,
    title,
    description,
    status,
    votesFor,
    votesAgainst,
    totalVotes,
    endDate,
    author,
}: ProposalCardProps) {
    const statusVariants = {
        active: 'success' as const,
        passed: 'info' as const,
        rejected: 'error' as const,
        pending: 'warning' as const,
    };

    const percentFor = totalVotes > 0 ? (votesFor / totalVotes) * 100 : 0;
    const percentAgainst = totalVotes > 0 ? (votesAgainst / totalVotes) * 100 : 0;

    return (
        <Card hover className="group">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
                </div>
                <Badge variant={statusVariants[status]}>
                    {status.toUpperCase()}
                </Badge>
            </div>

            {/* Vote Progress */}
            <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--success)]">For: {percentFor.toFixed(1)}%</span>
                    <span className="text-[var(--error)]">Against: {percentAgainst.toFixed(1)}%</span>
                </div>
                <div className="h-2 bg-[var(--input-bg)] rounded-full overflow-hidden flex">
                    <div
                        className="bg-[var(--success)] transition-all duration-500"
                        style={{ width: `${percentFor}%` }}
                    />
                    <div
                        className="bg-[var(--error)] transition-all duration-500"
                        style={{ width: `${percentAgainst}%` }}
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]" />
                    <span>{author}</span>
                </div>
                <span>Ends: {endDate}</span>
            </div>
        </Card>
    );
}
