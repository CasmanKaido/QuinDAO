# Smart Contract Deployment Guide

## Overview
QuinDAO uses three main smart contracts for governance:
1. **QuinToken** - ERC20 governance token with voting capabilities
2. **QuinDAOTimelock** - Timelock controller for delayed execution
3. **QuinDAOGovernance** - Main governance contract

## Deployment Order (IMPORTANT)
Deploy in this exact order:

### 1. Deploy QuinToken
- Open `QuinToken.sol` in Remix IDE
- Compile with Solidity 0.8.20+
- Constructor parameter: `initialOwner` (your wallet address)
- Deploy to Sepolia testnet
- **Save the contract address**

### 2. Deploy QuinDAOTimelock
- Open `QuinDAOTimelock.sol` in Remix
- Constructor parameters:
  - `minDelay`: 172800 (2 days in seconds)
  - `proposers`: [address of QuinDAOGovernance - use 0x0 for now, update later]
  - `executors`: [0x0000000000000000000000000000000000000000] (anyone can execute)
  - `admin`: your wallet address
- Deploy to Sepolia
- **Save the contract address**

### 3. Deploy QuinDAOGovernance
- Open `QuinDAOGovernance.sol` in Remix
- Constructor parameters:
  - `_token`: QuinToken contract address (from step 1)
  - `_timelock`: QuinDAOTimelock contract address (from step 2)
- Deploy to Sepolia
- **Save the contract address**

### 4. Post-Deployment Setup

#### Grant Roles to Timelock
Call these functions on QuinDAOTimelock:
```solidity
// Grant proposer role to governance contract
grantRole(PROPOSER_ROLE, <QuinDAOGovernance_address>)

// Grant executor role to governance contract  
grantRole(EXECUTOR_ROLE, <QuinDAOGovernance_address>)

// Revoke admin role from your wallet (optional, for full decentralization)
revokeRole(TIMELOCK_ADMIN_ROLE, <your_wallet_address>)
```

#### Delegate Voting Power
Call on QuinToken:
```solidity
// Delegate your tokens to yourself to activate voting power
delegate(<your_wallet_address>)
```

## Verification on Etherscan

After deployment, verify each contract:
1. Go to Sepolia Etherscan
2. Find your contract
3. Click "Contract" → "Verify and Publish"
4. Select "Solidity (Single file)"
5. Compiler version: 0.8.20
6. Optimization: Yes (200 runs)
7. Paste the flattened contract code from Remix

## Contract Addresses (Update after deployment)

```json
{
  "sepolia": {
    "QuinToken": "0x...",
    "QuinDAOTimelock": "0x...",
    "QuinDAOGovernance": "0x..."
  }
}
```

## Testing in Remix

### Create a Test Proposal
```solidity
// Example: Transfer 1 ETH from timelock to recipient
address[] memory targets = new address[](1);
targets[0] = <recipient_address>;

uint256[] memory values = new uint256[](1);
values[0] = 1 ether;

bytes[] memory calldatas = new bytes[](1);
calldatas[0] = "";

string memory description = "Transfer 1 ETH to development fund";

propose(targets, values, calldatas, description);
```

### Vote on Proposal
```solidity
// Get proposal ID from ProposalCreated event
uint256 proposalId = <proposal_id>;

// 0 = Against, 1 = For, 2 = Abstain
castVote(proposalId, 1);
```

### Execute Proposal
```solidity
// After voting period ends and proposal passes
execute(targets, values, calldatas, keccak256(bytes(description)));
```

## Important Notes

- **Voting Delay**: 1 block (~12 seconds)
- **Voting Period**: 50,400 blocks (~1 week)
- **Quorum**: 4% of total supply
- **Timelock Delay**: 2 days after proposal passes

## Troubleshooting

**"Governor: proposal not successful"**
- Check if quorum was reached
- Verify voting period has ended
- Ensure more FOR votes than AGAINST

**"TimelockController: operation is not ready"**
- Wait for the 2-day timelock delay after proposal passes

**"Governor: vote not currently active"**
- Voting period may have ended
- Proposal may not have started yet (check voting delay)
