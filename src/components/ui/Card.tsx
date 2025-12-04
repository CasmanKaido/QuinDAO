'use client';

import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
    return (
        <div
            className={`
        rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6
        ${hover ? 'hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)] cursor-pointer' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
