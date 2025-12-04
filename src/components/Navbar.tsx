'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from './ConnectButton';
import { NetworkSwitcher } from './NetworkSwitcher';

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Proposals', href: '/' },
        { name: 'Create', href: '/create' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Treasury', href: '/treasury' },
        { name: 'Profile', href: '/profile' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--card-bg)] border-b border-[var(--card-border)] backdrop-blur-lg bg-opacity-80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                                <span className="text-xl font-bold">Q</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                                    QuinDAO
                                </h1>
                                <p className="text-xs text-gray-400">Watch Party Voting</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 py-2 rounded-lg transition-colors ${pathname === item.href
                                            ? 'bg-[var(--primary)] text-white'
                                            : 'text-gray-300 hover:bg-[var(--input-bg)]'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <NetworkSwitcher />
                        <ConnectButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}
