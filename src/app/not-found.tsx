import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="text-8xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent mb-4">
                        404
                    </div>
                    <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
                    <p className="text-gray-400">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <Link href="/">
                        <Button>Go Home</Button>
                    </Link>
                    <Link href="/create">
                        <Button variant="outline">Create Proposal</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
