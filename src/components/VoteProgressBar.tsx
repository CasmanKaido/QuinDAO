'use client';

interface VoteProgressBarProps {
    votesFor: number;
    votesAgainst: number;
    votesAbstain?: number;
    totalVotes: number;
    showPercentages?: boolean;
    showCounts?: boolean;
    animated?: boolean;
}

export function VoteProgressBar({
    votesFor,
    votesAgainst,
    votesAbstain = 0,
    totalVotes,
    showPercentages = true,
    showCounts = false,
    animated = true,
}: VoteProgressBarProps) {
    const percentFor = totalVotes > 0 ? (votesFor / totalVotes) * 100 : 0;
    const percentAgainst = totalVotes > 0 ? (votesAgainst / totalVotes) * 100 : 0;
    const percentAbstain = totalVotes > 0 ? (votesAbstain / totalVotes) * 100 : 0;

    return (
        <div className="w-full">
            {/* Labels */}
            {showPercentages && (
                <div className="flex justify-between text-sm mb-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[var(--success)]" />
                        <span className="text-[var(--success)] font-medium">
                            For: {percentFor.toFixed(1)}%
                            {showCounts && ` (${votesFor})`}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[var(--error)]" />
                        <span className="text-[var(--error)] font-medium">
                            Against: {percentAgainst.toFixed(1)}%
                            {showCounts && ` (${votesAgainst})`}
                        </span>
                    </div>
                    {votesAbstain > 0 && (
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gray-500" />
                            <span className="text-gray-400 font-medium">
                                Abstain: {percentAbstain.toFixed(1)}%
                                {showCounts && ` (${votesAbstain})`}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {/* Progress Bar */}
            <div className="relative h-3 bg-[var(--input-bg)] rounded-full overflow-hidden">
                <div className="absolute inset-0 flex">
                    <div
                        className={`bg-[var(--success)] ${animated ? 'transition-all duration-700 ease-out' : ''}`}
                        style={{ width: `${percentFor}%` }}
                    />
                    <div
                        className={`bg-[var(--error)] ${animated ? 'transition-all duration-700 ease-out' : ''}`}
                        style={{ width: `${percentAgainst}%` }}
                    />
                    {votesAbstain > 0 && (
                        <div
                            className={`bg-gray-500 ${animated ? 'transition-all duration-700 ease-out' : ''}`}
                            style={{ width: `${percentAbstain}%` }}
                        />
                    )}
                </div>

                {/* Glow effect */}
                {animated && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer" />
                )}
            </div>

            {/* Total votes */}
            {showCounts && (
                <div className="text-center text-xs text-gray-500 mt-2">
                    Total Votes: {totalVotes}
                </div>
            )}
        </div>
    );
}
