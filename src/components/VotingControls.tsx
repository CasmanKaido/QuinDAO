'use client';

import { Button } from './ui/Button';

interface VotingControlsProps {
    onVoteFor: () => void;
    onVoteAgainst: () => void;
    onAbstain: () => void;
    disabled?: boolean;
    userVote?: 'for' | 'against' | 'abstain' | null;
}

export function VotingControls({
    onVoteFor,
    onVoteAgainst,
    onAbstain,
    disabled = false,
    userVote = null,
}: VotingControlsProps) {
    return (
        <div className="space-y-3">
            <Button
                variant={userVote === 'for' ? 'primary' : 'outline'}
                className="w-full"
                onClick={onVoteFor}
                disabled={disabled}
            >
                {userVote === 'for' ? '✓ Voted For' : 'Vote For'}
            </Button>
            <Button
                variant={userVote === 'against' ? 'primary' : 'outline'}
                className="w-full"
                onClick={onVoteAgainst}
                disabled={disabled}
            >
                {userVote === 'against' ? '✓ Voted Against' : 'Vote Against'}
            </Button>
            <Button
                variant={userVote === 'abstain' ? 'primary' : 'ghost'}
                className="w-full"
                onClick={onAbstain}
                disabled={disabled}
            >
                {userVote === 'abstain' ? '✓ Abstained' : 'Abstain'}
            </Button>
        </div>
    );
}
