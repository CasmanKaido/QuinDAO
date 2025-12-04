'use client';

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 px-4">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)] via-transparent to-transparent opacity-10" />

            <div className="relative max-w-5xl mx-auto text-center">
                <div className="inline-block mb-4 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[var(--card-border)]">
                    <span className="text-sm text-[var(--accent)]">✨ Powered by Reown & WalletConnect</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                    Watch Party DAO Voting
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
                    Experience real-time DAO governance with live voting, instant updates, and community chat.
                    Vote together, decide together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 font-semibold text-lg shadow-[var(--shadow-glow)] hover:scale-105 transition-transform">
                        View Proposals
                    </button>
                    <button className="px-8 py-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] font-semibold text-lg">
                        Learn More
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
                        <div className="text-4xl font-bold text-[var(--primary)] mb-2">24/7</div>
                        <div className="text-gray-400">Real-time Updates</div>
                    </div>
                    <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
                        <div className="text-4xl font-bold text-[var(--secondary)] mb-2">Multi-Chain</div>
                        <div className="text-gray-400">Support</div>
                    </div>
                    <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
                        <div className="text-4xl font-bold text-[var(--accent)] mb-2">Verified</div>
                        <div className="text-gray-400">Secure Voting</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
