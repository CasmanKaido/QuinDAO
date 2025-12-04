# QuinDAO Development Guide

## Project Overview
QuinDAO is a production-ready DAO governance platform with real-time voting, analytics, and treasury management.

## Tech Stack
- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Web3**: Reown AppKit, Wagmi, Viem
- **Smart Contracts**: Solidity (deployed via Remix)
- **Testing**: Jest, Playwright
- **Real-time**: Socket.IO
- **Charts**: Recharts

## Getting Started

### Prerequisites
```bash
Node.js 18+
npm or yarn
MetaMask or Web3 wallet
Sepolia testnet ETH (for deployment)
```

### Installation
```bash
# Clone repository
git clone https://github.com/CasmanKaido/QuinDAO.git
cd QuinDAO

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Add your NEXT_PUBLIC_REOWN_PROJECT_ID

# Run development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm test             # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run E2E tests
```

## Smart Contract Deployment

### Contracts
1. **QuinToken.sol** - ERC20 governance token
2. **QuinDAOTimelock.sol** - Execution delay
3. **QuinDAOGovernance.sol** - Main governance

### Deployment Steps
1. Open Remix IDE (https://remix.ethereum.org)
2. Upload contracts from `contracts/` directory
3. Follow `contracts/DEPLOYMENT.md`
4. Update `src/contracts/deployments.json`

## Project Structure
```
QuinDAO/
├── contracts/              # Smart contracts
│   ├── QuinDAOGovernance.sol
│   ├── QuinToken.sol
│   ├── QuinDAOTimelock.sol
│   └── DEPLOYMENT.md
├── src/
│   ├── app/               # Next.js pages
│   │   ├── analytics/
│   │   ├── create/
│   │   ├── profile/
│   │   ├── proposal/[id]/
│   │   ├── treasury/
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI
│   │   ├── CreateProposalForm.tsx
│   │   ├── DelegationPanel.tsx
│   │   ├── LiveChat.tsx
│   │   ├── NotificationCenter.tsx
│   │   ├── OnlineUsers.tsx
│   │   └── ...
│   ├── context/          # React contexts
│   │   ├── NotificationContext.tsx
│   │   ├── SocketContext.tsx
│   │   └── Web3Modal.tsx
│   ├── hooks/            # Custom hooks
│   │   ├── useContract.ts
│   │   └── useWallet.ts
│   ├── services/         # API services
│   │   ├── contractService.ts
│   │   └── mockDao.ts
│   ├── types/            # TypeScript types
│   │   └── dao.ts
│   └── utils/            # Utilities
│       └── helpers.ts
├── e2e/                  # E2E tests
└── public/               # Static assets
```

## Features

### Core Governance
- ✅ Proposal creation and management
- ✅ Three voting options (For/Against/Abstain)
- ✅ Voting power calculation
- ✅ Delegation system
- ✅ Timelock execution

### Real-time Features
- ✅ Live online users
- ✅ Real-time chat
- ✅ Vote notifications
- ✅ WebSocket integration

### Analytics
- ✅ Voting trends charts
- ✅ Proposal outcomes
- ✅ Participation metrics
- ✅ Top voters leaderboard

### Treasury
- ✅ Multi-chain balance tracking
- ✅ Transaction history
- ✅ Treasury analytics

### User Experience
- ✅ Profile pages
- ✅ Notification center
- ✅ Network switching
- ✅ ENS name resolution
- ✅ Error boundaries
- ✅ Loading states

## Testing

### Unit Tests
```bash
npm test
```
Tests are located in `src/components/ui/__tests__/`

### E2E Tests
```bash
npm run test:e2e
```
Tests are located in `e2e/`

## Security

### Headers
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Strict-Transport-Security
- Referrer-Policy

### Best Practices
- Input validation
- Error handling
- Rate limiting (planned)
- CSRF protection (planned)

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
```env
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## Roadmap

### Phase 1 ✅
- Project setup
- Core UI components
- Reown integration

### Phase 2 ✅
- Smart contracts
- Voting system
- Analytics dashboard

### Phase 3 🚧
- Production optimizations
- Advanced features
- Security audits

### Phase 4 📋
- Mainnet deployment
- Community launch
- Documentation site

## Troubleshooting

### Build Errors
If you encounter module not found errors:
```bash
npm install @walletconnect/ethereum-provider
npm run build -- --webpack
```

### Wallet Connection Issues
1. Ensure you have a Reown Project ID
2. Check network configuration
3. Try clearing browser cache

### Contract Deployment
1. Ensure you have Sepolia ETH
2. Follow deployment guide exactly
3. Update contract addresses in config

## Support

- GitHub Issues: [Report bugs](https://github.com/CasmanKaido/QuinDAO/issues)
- Documentation: See README.md
- Smart Contracts: See contracts/DEPLOYMENT.md

## License
MIT License - see LICENSE file

---

Built with ❤️ using Reown AppKit and Next.js
