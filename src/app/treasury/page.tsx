'use client';

import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function TreasuryPage() {
    // Mock treasury data
    const treasuryData = {
        totalBalance: '1,234.56',
        balances: [
            { chain: 'Ethereum', amount: '456.78', usd: '$1,234,567' },
            { chain: 'Polygon', amount: '234.56', usd: '$456,789' },
            { chain: 'Arbitrum', amount: '345.67', usd: '$789,012' },
            { chain: 'Optimism', amount: '197.55', usd: '$543,210' },
        ],
        recentTransactions: [
            { type: 'Outgoing', amount: '50 ETH', to: 'Development Fund', date: '2 days ago', status: 'completed' },
            { type: 'Incoming', amount: '100 ETH', from: 'Grant Return', date: '5 days ago', status: 'completed' },
            { type: 'Outgoing', amount: '25 ETH', to: 'Marketing', date: '1 week ago', status: 'completed' },
        ],
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Treasury</h1>
                    <p className="text-gray-400">Manage DAO funds across multiple chains</p>
                </div>

                {/* Total Balance */}
                <Card className="mb-8 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] border-0">
                    <div className="text-white">
                        <div className="text-sm opacity-80 mb-2">Total Treasury Balance</div>
                        <div className="text-5xl font-bold mb-1">{treasuryData.totalBalance} ETH</div>
                        <div className="text-lg opacity-80">≈ $3,023,578 USD</div>
                    </div>
                </Card>

                {/* Balance by Chain */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Balance by Chain</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {treasuryData.balances.map((balance) => (
                            <Card key={balance.chain} hover>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-semibold">{balance.chain}</h3>
                                    <Badge variant="info">Active</Badge>
                                </div>
                                <div className="text-2xl font-bold text-[var(--primary)] mb-1">
                                    {balance.amount} ETH
                                </div>
                                <div className="text-sm text-gray-400">{balance.usd}</div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Recent Transactions */}
                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">Recent Transactions</h2>
                        <button className="text-sm text-[var(--primary)] hover:underline">
                            View All →
                        </button>
                    </div>

                    <div className="space-y-3">
                        {treasuryData.recentTransactions.map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-4 bg-[var(--input-bg)] rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'Incoming' ? 'bg-[var(--success)] bg-opacity-20' : 'bg-[var(--error)] bg-opacity-20'
                                        }`}>
                                        <span className="text-xl">
                                            {tx.type === 'Incoming' ? '↓' : '↑'}
                                        </span>
                                    </div>
                                    <div>
                                        <div className="font-medium">{tx.amount}</div>
                                        <div className="text-sm text-gray-400">
                                            {tx.type === 'Incoming' ? `From: ${tx.from}` : `To: ${tx.to}`}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Badge variant={tx.status === 'completed' ? 'success' : 'warning'}>
                                        {tx.status}
                                    </Badge>
                                    <div className="text-sm text-gray-500 mt-1">{tx.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </Layout>
    );
}
