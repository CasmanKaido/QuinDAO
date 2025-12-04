'use client';

import { useMemo } from 'react';

interface UserAvatarProps {
    address?: string;
    ensName?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showAddress?: boolean;
    className?: string;
}

export function UserAvatar({
    address,
    ensName,
    size = 'md',
    showAddress = false,
    className = '',
}: UserAvatarProps) {
    const sizes = {
        sm: 'w-6 h-6 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-14 h-14 text-base',
        xl: 'w-20 h-20 text-xl',
    };

    // Generate a consistent color based on address
    const gradientColors = useMemo(() => {
        if (!address) return ['#6366f1', '#8b5cf6'];

        const hash = address.split('').reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);

        const hue1 = Math.abs(hash % 360);
        const hue2 = (hue1 + 60) % 360;

        return [
            `hsl(${hue1}, 70%, 60%)`,
            `hsl(${hue2}, 70%, 60%)`,
        ];
    }, [address]);

    const displayName = ensName || (address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '0x...');
    const initials = ensName
        ? ensName.slice(0, 2).toUpperCase()
        : address
            ? address.slice(2, 4).toUpperCase()
            : '??';

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div
                className={`${sizes[size]} rounded-full flex items-center justify-center font-bold text-white shadow-md`}
                style={{
                    background: `linear-gradient(135deg, ${gradientColors[0]}, ${gradientColors[1]})`,
                }}
            >
                {initials}
            </div>
            {showAddress && (
                <span className="text-sm font-medium text-gray-300">
                    {displayName}
                </span>
            )}
        </div>
    );
}
