'use client';

import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                duration: 4000,
                style: {
                    background: 'var(--card-bg)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--card-border)',
                },
                success: {
                    iconTheme: {
                        primary: 'var(--success)',
                        secondary: 'var(--card-bg)',
                    },
                },
                error: {
                    iconTheme: {
                        primary: 'var(--error)',
                        secondary: 'var(--card-bg)',
                    },
                },
            }}
        />
    );
}
