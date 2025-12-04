'use client';

import { UserAvatar } from './UserAvatar';
import { useSocket } from '@/context/SocketContext';

export function OnlineUsers() {
    const { onlineUsers, isConnected } = useSocket();

    // Mock online users for demo
    const mockUsers = [
        '0x742d35Cc6634C0532925a3b844Bc9e4e89',
        '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
        '0x9f8e7d6c5b4a3g2h1i0j9k8l7m6n5o4p',
    ];

    const displayUsers = onlineUsers.length > 0 ? onlineUsers : mockUsers;

    return (
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Online Now</h3>
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-[var(--success)]' : 'bg-gray-500'} animate-pulse`} />
                    <span className="text-sm text-gray-400">{displayUsers.length}</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {displayUsers.slice(0, 10).map((address, index) => (
                    <UserAvatar
                        key={address}
                        address={address}
                        size="md"
                        className="hover:scale-110 transition-transform cursor-pointer"
                    />
                ))}
                {displayUsers.length > 10 && (
                    <div className="w-10 h-10 rounded-full bg-[var(--input-bg)] flex items-center justify-center text-xs font-bold">
                        +{displayUsers.length - 10}
                    </div>
                )}
            </div>
        </div>
    );
}
