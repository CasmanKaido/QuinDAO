import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseAbi } from 'viem';
import deployments from '@/contracts/deployments.json';

// Contract ABIs (simplified - in production, import from compiled contracts)
const GOVERNANCE_ABI = parseAbi([
    'function propose(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, string memory description) public returns (uint256)',
    'function castVote(uint256 proposalId, uint8 support) public returns (uint256)',
    'function execute(address[] memory targets, uint256[] memory values, bytes[] memory calldatas, bytes32 descriptionHash) public payable returns (uint256)',
    'function state(uint256 proposalId) public view returns (uint8)',
    'function proposalVotes(uint256 proposalId) public view returns (uint256 againstVotes, uint256 forVotes, uint256 abstainVotes)',
    'event ProposalCreated(uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 startBlock, uint256 endBlock, string description)',
    'event VoteCast(address indexed voter, uint256 proposalId, uint8 support, uint256 weight, string reason)',
]);

const TOKEN_ABI = parseAbi([
    'function balanceOf(address account) public view returns (uint256)',
    'function delegate(address delegatee) public',
    'function delegates(address account) public view returns (address)',
    'function getVotes(address account) public view returns (uint256)',
]);

export function useGovernanceContract(chainId: number = 11155111) {
    const contractAddress = (deployments as any)[chainId === 11155111 ? 'sepolia' : 'mainnet']?.QuinDAOGovernance as `0x${string}` | undefined;

    return {
        address: contractAddress,
        abi: GOVERNANCE_ABI,
    };
}

export function useTokenContract(chainId: number = 11155111) {
    const contractAddress = (deployments as any)[chainId === 11155111 ? 'sepolia' : 'mainnet']?.QuinToken as `0x${string}` | undefined;

    return {
        address: contractAddress,
        abi: TOKEN_ABI,
    };
}

// Hook to read proposal state
export function useProposalState(proposalId: bigint) {
    const { address, abi } = useGovernanceContract();

    return useReadContract({
        address,
        abi,
        functionName: 'state',
        args: [proposalId],
    });
}

// Hook to read proposal votes
export function useProposalVotes(proposalId: bigint) {
    const { address, abi } = useGovernanceContract();

    return useReadContract({
        address,
        abi,
        functionName: 'proposalVotes',
        args: [proposalId],
    });
}

// Hook to read user's voting power
export function useVotingPower(userAddress: `0x${string}`) {
    const { address, abi } = useTokenContract();

    return useReadContract({
        address,
        abi,
        functionName: 'getVotes',
        args: [userAddress],
    });
}

// Hook to cast a vote
export function useCastVote() {
    const { address, abi } = useGovernanceContract();
    const { writeContract, data: hash, isPending } = useWriteContract();

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    });

    const castVote = (proposalId: bigint, support: 0 | 1 | 2) => {
        if (!address) return;

        writeContract({
            address,
            abi,
            functionName: 'castVote',
            args: [proposalId, support],
        });
    };

    return {
        castVote,
        isPending,
        isConfirming,
        isSuccess,
        hash,
    };
}

// Hook to delegate voting power
export function useDelegate() {
    const { address, abi } = useTokenContract();
    const { writeContract, data: hash, isPending } = useWriteContract();

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    });

    const delegate = (delegatee: `0x${string}`) => {
        if (!address) return;

        writeContract({
            address,
            abi,
            functionName: 'delegate',
            args: [delegatee],
        });
    };

    return {
        delegate,
        isPending,
        isConfirming,
        isSuccess,
        hash,
    };
}
