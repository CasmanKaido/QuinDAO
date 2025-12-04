'use client';

import { useEffect } from 'react';
import { Button } from './ui/Button';

interface ErrorBoundaryProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
    useEffect(() => {
        console.error('Error boundary caught:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--error)] bg-opacity-20 flex items-center justify-center">
                        <span className="text-4xl">⚠️</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Something went wrong!</h1>
                    <p className="text-gray-400">
                        We encountered an unexpected error. Please try again.
                    </p>
                </div>

                <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-400 font-mono break-all">
                        {error.message}
                    </p>
                </div>

                <div className="flex gap-4">
                    <Button onClick={reset} className="flex-1">
                        Try Again
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => window.location.href = '/'}
                        className="flex-1"
                    >
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
