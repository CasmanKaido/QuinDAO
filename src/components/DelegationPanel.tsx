'use client';

import { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { UserAvatar } from './UserAvatar';
import { useWallet } from '@/hooks/useWallet';
import { useDelegate } from '@/hooks/useContract';
import toast from 'react-hot-toast';

export function DelegationPanel() {
    const { address } = useWallet();
    const { delegate, isPending, isSuccess } = useDelegate();
    const [delegateAddress, setDelegateAddress] = useState('');

    const handleDelegate = () => {
        if (!delegateAddress || !address) {
            toast.error('Please enter a valid address');
            return;
        }

        try {
            delegate(delegateAddress as `0x${string}`);
            toast.success('Delegation transaction submitted!');
        } catch (error) {
            toast.error('Failed to delegate voting power');
        }
    };

    const handleSelfDelegate = () => {
        if (!address) return;
        delegate(address);
        toast.success('Self-delegation transaction submitted!');
    };

    return (
        <Card>
            <h3 className="text-xl font-bold mb-4">Delegate Voting Power</h3>

            <div className="mb-6">
                <p className="text-gray-400 text-sm mb-4">
                    Delegate your voting power to another address. This allows them to vote on your behalf while you retain ownership of your tokens.
                </p>

                <div className="bg-[var(--input-bg)] border border-[var(--card-border)] rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Current Delegate</span>
                        <UserAvatar address={address} size="sm" showAddress />
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Delegate To</label>
                    <input
                        type="text"
                        value={delegateAddress}
                        onChange={(e) => setDelegateAddress(e.target.value)}
                        placeholder="0x..."
                        className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] focus:border-[var(--primary)] outline-none"
                    />
                </div>

                <div className="flex gap-3">
                    <Button
                        onClick={handleDelegate}
                        disabled={!delegateAddress || isPending}
                        className="flex-1"
                    >
                        {isPending ? 'Delegating...' : 'Delegate'}
                    </Button>
                    <Button
                        onClick={handleSelfDelegate}
                        variant="outline"
                        disabled={isPending}
                        className="flex-1"
                    >
                        Self-Delegate
                    </Button>
                </div>

                {isSuccess && (
                    <div className="text-sm text-[var(--success)] bg-[var(--success)] bg-opacity-10 rounded-lg p-3">
                        ✓ Delegation successful! Your voting power has been delegated.
                    </div>
                )}
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--card-border)]">
                <h4 className="font-semibold mb-3">Why Delegate?</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Participate in governance without active voting</li>
                    <li>• Support trusted community members</li>
                    <li>• Increase voting power of active participants</li>
                    <li>• Retain full ownership of your tokens</li>
                </ul>
            </div>
        </Card>
    );
}
