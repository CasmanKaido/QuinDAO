'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200';

    const variants = {
        primary: 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 text-white shadow-[var(--shadow-md)]',
        secondary: 'bg-[var(--secondary)] hover:bg-[var(--primary)] text-white',
        outline: 'bg-transparent border-2 border-[var(--primary)] hover:bg-[var(--primary)] text-[var(--primary)] hover:text-white',
        ghost: 'bg-transparent hover:bg-[var(--card-bg)] text-[var(--foreground)]',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
