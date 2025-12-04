# Smart Contract Deployment Guide - Base Mainnet

## Overview
QuinDAO uses three main smart contracts for governance:
1. **QuinToken** - ERC20 governance token with voting capabilities
2. **QuinDAOTimelock** - Timelock controller for delayed execution
3. **QuinDAOGovernance** - Main governance contract

## Prerequisites

### Required Tools
- ✅ Remix IDE (https://remix.ethereum.org)
- ✅ MetaMask wallet
- ✅ ETH on Base Mainnet (for gas fees)

### MetaMask Setup - Base Mainnet
Add Base Mainnet to MetaMask:
- **Network Name**: Base Mainnet
- **RPC URL**: https://mainnet.base.org
- **Chain ID**: 8453
- **Currency Symbol**: ETH
- **Block Explorer**: https://basescan.org

## Compiler Settings in Remix

**IMPORTANT**: Use these exact settings to avoid compilation errors:

1. **Solidity Compiler** tab (left sidebar)
2. **Compiler Version**: `0.8.19` or `0.8.20`
3. **EVM Version**: `default` or `paris` (NOT cancun)
4. **Optimization**: ✅ Enabled
5. **Runs**: `200`

## Deployment Order (CRITICAL - Follow Exactly)

### Step 1: Deploy QuinToken

1. **Open Remix IDE** (https://remix.ethereum.org)
2. **Create new file**: `QuinToken.sol`
3. **Copy contract code** from `contracts/QuinToken.sol`
4. **Compile**:
   - Click "Solidity Compiler" tab
   - Select compiler `0.8.19+`
   - EVM Version: `default` or `paris`
   - Enable Optimization (200 runs)
   - Click "Compile QuinToken.sol"
   - Wait for green checkmark ✅

5. **Deploy**:
   - Click "Deploy & Run Transactions" tab
   - Environment: **"Injected Provider - MetaMask"**
   - MetaMask will popup → **Connect your wallet**
   - **Switch MetaMask to Base Mainnet** (Chain ID: 8453)
   - Confirm you have ETH for gas
   - Contract: Select `QuinToken`
   - Constructor parameter: `INITIALOWNER` → **Your wallet address**
   - Click **"Deploy"** (orange button)
   - **Confirm transaction in MetaMask** (costs ~$2-5)
   - Wait for confirmation
   - **SAVE THE CONTRACT ADDRESS** ← Very Important!

**Example**: `0x1234...5678` (QuinToken Address)

---

### Step 2: Deploy QuinDAOTimelock

1. **Create new file**: `QuinDAOTimelock.sol`
2. **Copy contract code** from `contracts/QuinDAOTimelock.sol`
3. **Compile** with same settings as Step 1

4. **Deploy**:
   - Contract: Select `QuinDAOTimelock`
   - Click dropdown arrow next to Deploy
   - Enter constructor parameters:
     ```
     MINDELAY: 172800
     PROPOSERS: ["0x0000000000000000000000000000000000000000"]
     EXECUTORS: ["0x0000000000000000000000000000000000000000"]
     ADMIN: YOUR_WALLET_ADDRESS
     ```
   - **Note**: Use square brackets `[]` for arrays
   - Click **"Deploy"**
   - Confirm in MetaMask
   - **SAVE THE CONTRACT ADDRESS**

**Example**: `0xabcd...ef01` (Timelock Address)

---

### Step 3: Deploy QuinDAOGovernance

1. **Create new file**: `QuinDAOGovernance.sol`
2. **Copy contract code** from `contracts/QuinDAOGovernance.sol`
3. **Compile** with same settings

4. **Deploy**:
   - Contract: Select `QuinDAOGovernance`
   - Constructor parameters:
     ```
     _TOKEN: QUINTOKEN_ADDRESS_FROM_STEP1
     _TIMELOCK: TIMELOCK_ADDRESS_FROM_STEP2
     ```
   - Click **"Deploy"**
   - Confirm in MetaMask
   - **SAVE THE CONTRACT ADDRESS**

**Example**: `0x9876...5432` (Governance Address)

---

## Post-Deployment Configuration

### Step 4: Grant Roles to Governance Contract

**CRITICAL**: The governance contract needs permissions on the Timelock.

1. **In Remix**, find your deployed `QuinDAOTimelock` contract
2. **Expand it** to see all functions
3. **Get PROPOSER_ROLE**:
   - Call `PROPOSER_ROLE()` function
   - Copy the returned bytes32 value
   - Example: `0xb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1`

4. **Grant PROPOSER_ROLE**:
   - Call `grantRole` function
   - Parameters:
     ```
     role: PASTE_PROPOSER_ROLE_BYTES32
     account: YOUR_GOVERNANCE_CONTRACT_ADDRESS
     ```
   - Confirm in MetaMask

5. **Get EXECUTOR_ROLE**:
   - Call `EXECUTOR_ROLE()` function
   - Copy the returned bytes32 value

6. **Grant EXECUTOR_ROLE**:
   - Call `grantRole` function
   - Parameters:
     ```
     role: PASTE_EXECUTOR_ROLE_BYTES32
     account: YOUR_GOVERNANCE_CONTRACT_ADDRESS
     ```
   - Confirm in MetaMask

### Step 5: Activate Your Voting Power

1. **Find deployed QuinToken** in Remix
2. **Call `delegate` function**:
   - Parameter: `delegatee` → **Your wallet address**
   - This activates your 100 million tokens for voting!
3. Confirm in MetaMask

---

## Verification on BaseScan

After deployment, verify each contract on BaseScan:

1. Go to **https://basescan.org**
2. Search for your contract address
3. Click **"Contract"** tab
4. Click **"Verify and Publish"**
5. Fill in details:
   - Compiler Type: `Solidity (Single file)`
   - Compiler Version: `v0.8.19+commit.XXXXXXX`
   - Open Source License: `MIT`
   - Optimization: `Yes`
   - Runs: `200`
6. **Flatten your contract** in Remix:
   - Right-click contract file
   - Select "Flatten"
   - Copy flattened code
7. Paste flattened code
8. Enter constructor arguments (if needed)
9. Click **"Verify and Publish"**

---

## Update Frontend Configuration

After successful deployment, update `src/contracts/deployments.json`:

```json
{
  "base": {
    "QuinToken": "0xYOUR_TOKEN_ADDRESS",
    "QuinDAOTimelock": "0xYOUR_TIMELOCK_ADDRESS",
    "QuinDAOGovernance": "0xYOUR_GOVERNANCE_ADDRESS",
    "deployedAt": "2025-12-04",
    "deployer": "YOUR_WALLET_ADDRESS"
  }
}
```

Then commit and push:
```bash
git add src/contracts/deployments.json
git commit -m "Add Base mainnet contract addresses"
git push origin main
```

---

## Testing Your Deployment

### Create a Test Proposal

In Remix, on your deployed `QuinDAOGovernance` contract:

```solidity
// Example: Transfer 0.1 ETH from timelock to recipient
propose(
  ["0xRECIPIENT_ADDRESS"],           // targets
  [100000000000000000],              // values (0.1 ETH in wei)
  ["0x"],                            // calldatas (empty for ETH transfer)
  "Test Proposal: Transfer 0.1 ETH"  // description
)
```

### Vote on Proposal

1. Wait for voting delay (1 day)
2. Get proposal ID from `ProposalCreated` event
3. Call `castVote`:
   ```
   proposalId: YOUR_PROPOSAL_ID
   support: 1  (0=Against, 1=For, 2=Abstain)
   ```

### Execute Proposal

1. Wait for voting period to end (1 week)
2. If proposal passed, it enters timelock
3. Wait 2 days (timelock delay)
4. Call `execute` with same parameters as `propose`

---

## Contract Parameters Summary

| Contract | Parameter | Value |
|----------|-----------|-------|
| QuinToken | Initial Supply | 100,000,000 QUIN |
| Timelock | Min Delay | 172,800 seconds (2 days) |
| Governance | Voting Delay | 7,200 blocks (~1 day) |
| Governance | Voting Period | 50,400 blocks (~1 week) |
| Governance | Quorum | 4% of total supply |

---

## Troubleshooting

### "Invalid EVM version requested"
- Solution: Use EVM version `default` or `paris`, NOT `cancun`

### "Function mcopy not found"
- Solution: Contracts use OpenZeppelin 4.9.3, no mcopy needed
- Ensure EVM version is `default` or `paris`

### "Governor: proposal not successful"
- Check if quorum was reached (4% of supply)
- Verify voting period has ended
- Ensure more FOR votes than AGAINST

### "TimelockController: operation is not ready"
- Wait for the 2-day timelock delay after proposal passes

### "Governor: vote not currently active"
- Voting period may have ended
- Proposal may not have started yet (check voting delay)

### MetaMask Transaction Fails
- Ensure you have enough ETH for gas
- Check you're on Base Mainnet (Chain ID: 8453)
- Try increasing gas limit manually

---

## Gas Cost Estimates (Base Mainnet)

| Action | Estimated Cost |
|--------|---------------|
| Deploy QuinToken | $2-5 |
| Deploy Timelock | $3-6 |
| Deploy Governance | $4-8 |
| Grant Roles (2x) | $1-2 each |
| Delegate Tokens | $0.50-1 |
| **Total Deployment** | **~$15-25** |

---

## Important Security Notes

⚠️ **MAINNET DEPLOYMENT - USE REAL ETH**
- Double-check all addresses before deploying
- Save all contract addresses immediately
- Verify contracts on BaseScan
- Test with small amounts first
- Keep private keys secure
- Consider multi-sig for admin role

---

## Support

- **BaseScan**: https://basescan.org
- **Base Docs**: https://docs.base.org
- **OpenZeppelin Docs**: https://docs.openzeppelin.com
- **Remix IDE**: https://remix.ethereum.org

---

## Next Steps After Deployment

1. ✅ Verify all contracts on BaseScan
2. ✅ Update frontend configuration
3. ✅ Test proposal creation
4. ✅ Delegate voting power
5. ✅ Create first real proposal
6. ✅ Announce to community

**Congratulations! Your DAO is now live on Base Mainnet! 🎉**
