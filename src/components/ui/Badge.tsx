'use client';

import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'success' | 'warning' | 'error' | 'info' | 'default';
    className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
    const variants = {
        success: 'bg-[var(--success)] bg-opacity-20 text-[var(--success)] border-[var(--success)]',
        warning: 'bg-[var(--warning)] bg-opacity-20 text-[var(--warning)] border-[var(--warning)]',
        error: 'bg-[var(--error)] bg-opacity-20 text-[var(--error)] border-[var(--error)]',
        info: 'bg-[var(--accent)] bg-opacity-20 text-[var(--accent)] border-[var(--accent)]',
        default: 'bg-[var(--card-bg)] text-[var(--foreground)] border-[var(--card-border)]',
    };

    return (
        <span
            className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border
        ${variants[variant]} ${className}
      `}
        >
            {children}
        </span>
    );
}
