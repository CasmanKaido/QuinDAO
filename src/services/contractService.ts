import { parseEther, encodeFunctionData } from 'viem';
import toast from 'react-hot-toast';

export interface ProposalData {
    targets: `0x${string}`[];
    values: bigint[];
    calldatas: `0x${string}`[];
    description: string;
}

export const contractService = {
    /**
     * Create a simple treasury transfer proposal
     */
    createTransferProposal(
        recipient: `0x${string}`,
        amount: string,
        description: string
    ): ProposalData {
        return {
            targets: [recipient],
            values: [parseEther(amount)],
            calldatas: ['0x' as `0x${string}`],
            description,
        };
    },

    /**
     * Create a contract call proposal
     */
    createContractCallProposal(
        targetContract: `0x${string}`,
        functionSignature: string,
        args: any[],
        value: string,
        description: string
    ): ProposalData {
        const calldata = encodeFunctionData({
            abi: [{ type: 'function', name: functionSignature, inputs: args.map(() => ({ type: 'uint256' })) }],
            functionName: functionSignature,
            args,
        });

        return {
            targets: [targetContract],
            values: [parseEther(value)],
            calldatas: [calldata],
            description,
        };
    },

    /**
     * Parse proposal state enum to human-readable string
     */
    getProposalStateString(state: number): string {
        const states = [
            'Pending',
            'Active',
            'Canceled',
            'Defeated',
            'Succeeded',
            'Queued',
            'Expired',
            'Executed',
        ];
        return states[state] || 'Unknown';
    },

    /**
     * Check if proposal can be voted on
     */
    canVote(state: number): boolean {
        return state === 1; // Active
    },

    /**
     * Check if proposal can be executed
     */
    canExecute(state: number): boolean {
        return state === 5; // Queued
    },

    /**
     * Handle transaction errors
     */
    handleTransactionError(error: any) {
        console.error('Transaction error:', error);

        if (error.message?.includes('user rejected')) {
            toast.error('Transaction rejected by user');
        } else if (error.message?.includes('insufficient funds')) {
            toast.error('Insufficient funds for transaction');
        } else if (error.message?.includes('Governor: vote not currently active')) {
            toast.error('Voting period has ended or not started');
        } else if (error.message?.includes('Governor: proposal not successful')) {
            toast.error('Proposal did not pass or quorum not reached');
        } else {
            toast.error('Transaction failed. Please try again.');
        }
    },

    /**
     * Format voting power for display
     */
    formatVotingPower(votes: bigint): string {
        const votesNumber = Number(votes) / 1e18;
        if (votesNumber >= 1000000) {
            return `${(votesNumber / 1000000).toFixed(2)}M`;
        } else if (votesNumber >= 1000) {
            return `${(votesNumber / 1000).toFixed(2)}K`;
        }
        return votesNumber.toFixed(2);
    },
};
