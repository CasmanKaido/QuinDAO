# QuinDAO - Watch Party DAO Voting

<div align="center">

![QuinDAO Banner](https://via.placeholder.com/1200x300/6366f1/ffffff?text=QuinDAO+-+Watch+Party+Voting)

**Real-time DAO governance with live voting, instant updates, and community chat**

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Reown](https://img.shields.io/badge/Reown-AppKit-6366f1?style=for-the-badge)](https://reown.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

## 🌟 Features

### 🔗 **Reown AppKit Integration**
- **Multi-Chain Support**: Seamlessly switch between Ethereum, Polygon, Arbitrum, and Optimism
- **WalletConnect v2**: Connect with 300+ wallets
- **ENS Resolution**: Display ENS names for better UX
- **Network Switching**: Easy chain switching with visual feedback

### 🗳️ **DAO Voting**
- **Real-time Vote Tracking**: See votes update instantly
- **Visual Progress Bars**: Beautiful vote visualization
- **Three Vote Options**: For, Against, and Abstain
- **Proposal Details**: Rich markdown support for proposals

### 🎉 **Watch Party Features**
- **Live Online Users**: See who's currently active
- **Real-time Chat**: Discuss proposals with other members
- **Vote Notifications**: Get notified when votes are cast
- **WebSocket Integration**: Instant updates without refresh

### 🎨 **Premium Design**
- **Dark Mode**: Sleek, modern dark theme
- **Gradient Accents**: Vibrant purple/blue gradients
- **Smooth Animations**: Micro-interactions throughout
- **Responsive**: Works on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Reown Project ID ([Get one here](https://cloud.reown.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CasmanKaido/QuinDAO.git
   cd QuinDAO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Reown Project ID:
   ```env
   NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
QuinDAO/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── proposal/[id]/      # Dynamic proposal pages
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── ui/                 # Reusable UI components
│   │   ├── ConnectButton.tsx
│   │   ├── Hero.tsx
│   │   ├── LiveChat.tsx
│   │   ├── Navbar.tsx
│   │   ├── OnlineUsers.tsx
│   │   ├── ProposalCard.tsx
│   │   ├── UserAvatar.tsx
│   │   ├── VoteProgressBar.tsx
│   │   └── VotingControls.tsx
│   ├── context/                # React contexts
│   │   ├── SocketContext.tsx   # WebSocket provider
│   │   └── Web3Modal.tsx       # Reown provider
│   ├── hooks/                  # Custom React hooks
│   │   └── useWallet.ts
│   ├── services/               # API/service layer
│   │   └── mockDao.ts
│   ├── types/                  # TypeScript types
│   │   └── dao.ts
│   └── config/                 # Configuration
│       └── index.tsx           # Reown AppKit config
├── public/                     # Static assets
├── .env.example                # Environment variables template
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Web3**: 
  - [Reown AppKit](https://reown.com/) (formerly WalletConnect)
  - [Wagmi](https://wagmi.sh/)
  - [Viem](https://viem.sh/)
- **Real-time**: [Socket.IO Client](https://socket.io/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)

## 🎯 Reown Features Used

This project showcases the following Reown AppKit features:

1. **Multi-Chain Wallet Connection**
   - Supports Ethereum, Polygon, Arbitrum, Optimism
   - Easy network switching

2. **WalletConnect v2 Integration**
   - QR code and deep link support
   - 300+ wallet compatibility

3. **ENS Resolution**
   - Automatic ENS name display
   - Fallback to address truncation

4. **Verify API** (Planned)
   - Domain verification badges
   - Security indicators

5. **On-Ramp** (Planned)
   - Buy crypto directly in-app
   - Fiat to crypto conversion

## 📝 Development Roadmap

- [x] **Phase 1**: Foundation & Setup (Commits 1-8)
- [x] **Phase 2**: Core UI & Design System (Commits 9-16)
- [x] **Phase 3**: Reown AppKit Integration (Commits 17-25)
- [x] **Phase 4**: DAO Voting Core (Commits 26-35)
- [x] **Phase 5**: Real-time Features (Commits 36-45)
- [x] **Phase 6**: Polish & Documentation (Commits 46-50)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Reown AppKit](https://reown.com/)
- Powered by [WalletConnect](https://walletconnect.com/)
- UI inspired by modern DAO platforms

---

<div align="center">

**Made with ❤️ for the Web3 community**

[Website](https://quindao.app) • [Twitter](https://twitter.com/quindao) • [Discord](https://discord.gg/quindao)

</div>
