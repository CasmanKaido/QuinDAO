'use client';

import { Layout } from '@/components/Layout';
import { Card } from '@/components/ui/Card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AnalyticsPage() {
    // Mock data
    const votingTrends = [
        { date: 'Jan', proposals: 12, votes: 450 },
        { date: 'Feb', proposals: 15, votes: 520 },
        { date: 'Mar', proposals: 18, votes: 680 },
        { date: 'Apr', proposals: 14, votes: 590 },
        { date: 'May', proposals: 20, votes: 750 },
        { date: 'Jun', proposals: 22, votes: 820 },
    ];

    const proposalOutcomes = [
        { name: 'Passed', value: 45, color: '#10b981' },
        { name: 'Rejected', value: 12, color: '#ef4444' },
        { name: 'Active', value: 8, color: '#6366f1' },
    ];

    const participationData = [
        { week: 'Week 1', participation: 65 },
        { week: 'Week 2', participation: 72 },
        { week: 'Week 3', participation: 68 },
        { week: 'Week 4', participation: 78 },
    ];

    const topVoters = [
        { address: '0x742d...4e89', votes: 45, power: 15000 },
        { address: '0x1a2b...5o6p', votes: 38, power: 12000 },
        { address: '0x9f8e...5o4p', votes: 32, power: 10000 },
        { address: '0x5b4a...1d0c', votes: 28, power: 8500 },
        { address: '0x3c2d...7e8f', votes: 25, power: 7200 },
    ];

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
                    <p className="text-gray-400">Insights into DAO governance and participation</p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <Card>
                        <div className="text-sm text-gray-400 mb-1">Total Proposals</div>
                        <div className="text-3xl font-bold text-[var(--primary)]">101</div>
                        <div className="text-xs text-[var(--success)]">↑ 12% this month</div>
                    </Card>
                    <Card>
                        <div className="text-sm text-gray-400 mb-1">Active Voters</div>
                        <div className="text-3xl font-bold text-[var(--secondary)]">1,234</div>
                        <div className="text-xs text-[var(--success)]">↑ 8% this month</div>
                    </Card>
                    <Card>
                        <div className="text-sm text-gray-400 mb-1">Avg Participation</div>
                        <div className="text-3xl font-bold text-[var(--accent)]">71%</div>
                        <div className="text-xs text-[var(--success)]">↑ 5% this month</div>
                    </Card>
                    <Card>
                        <div className="text-sm text-gray-400 mb-1">Success Rate</div>
                        <div className="text-3xl font-bold text-[var(--success)]">69%</div>
                        <div className="text-xs text-gray-400">→ Stable</div>
                    </Card>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Voting Trends */}
                    <Card>
                        <h3 className="text-xl font-bold mb-4">Voting Trends</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={votingTrends}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
                                <XAxis dataKey="date" stroke="#888" />
                                <YAxis stroke="#888" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1a1a24',
                                        border: '1px solid #2a2a3a',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="proposals" stroke="#6366f1" strokeWidth={2} />
                                <Line type="monotone" dataKey="votes" stroke="#8b5cf6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>

                    {/* Proposal Outcomes */}
                    <Card>
                        <h3 className="text-xl font-bold mb-4">Proposal Outcomes</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={proposalOutcomes}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {proposalOutcomes.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1a1a24',
                                        border: '1px solid #2a2a3a',
                                        borderRadius: '8px'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>

                    {/* Participation Rate */}
                    <Card>
                        <h3 className="text-xl font-bold mb-4">Weekly Participation</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={participationData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
                                <XAxis dataKey="week" stroke="#888" />
                                <YAxis stroke="#888" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1a1a24',
                                        border: '1px solid #2a2a3a',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Bar dataKey="participation" fill="#06b6d4" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Card>

                    {/* Top Voters */}
                    <Card>
                        <h3 className="text-xl font-bold mb-4">Top Voters</h3>
                        <div className="space-y-3">
                            {topVoters.map((voter, index) => (
                                <div key={voter.address} className="flex items-center justify-between p-3 bg-[var(--input-bg)] rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center font-bold text-sm">
                                            #{index + 1}
                                        </div>
                                        <div>
                                            <div className="font-medium">{voter.address}</div>
                                            <div className="text-xs text-gray-400">{voter.power.toLocaleString()} voting power</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-[var(--primary)]">{voter.votes}</div>
                                        <div className="text-xs text-gray-400">votes</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
