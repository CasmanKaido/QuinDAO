export function ProposalCardSkeleton() {
    return (
        <div className="rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 animate-pulse">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="h-6 bg-[var(--input-bg)] rounded w-3/4 mb-2" />
                    <div className="h-4 bg-[var(--input-bg)] rounded w-full mb-1" />
                    <div className="h-4 bg-[var(--input-bg)] rounded w-2/3" />
                </div>
                <div className="h-6 w-20 bg-[var(--input-bg)] rounded-full" />
            </div>

            <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                    <div className="h-4 bg-[var(--input-bg)] rounded w-20" />
                    <div className="h-4 bg-[var(--input-bg)] rounded w-20" />
                </div>
                <div className="h-2 bg-[var(--input-bg)] rounded-full" />
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[var(--input-bg)]" />
                    <div className="h-4 bg-[var(--input-bg)] rounded w-24" />
                </div>
                <div className="h-4 bg-[var(--input-bg)] rounded w-32" />
            </div>
        </div>
    );
}

export function CardSkeleton() {
    return (
        <div className="rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] p-6 animate-pulse">
            <div className="h-6 bg-[var(--input-bg)] rounded w-1/3 mb-4" />
            <div className="space-y-3">
                <div className="h-4 bg-[var(--input-bg)] rounded w-full" />
                <div className="h-4 bg-[var(--input-bg)] rounded w-5/6" />
                <div className="h-4 bg-[var(--input-bg)] rounded w-4/6" />
            </div>
        </div>
    );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
    return (
        <div className="space-y-2">
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[var(--input-bg)] rounded-lg animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-[var(--card-bg)]" />
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-[var(--card-bg)] rounded w-3/4" />
                        <div className="h-3 bg-[var(--card-bg)] rounded w-1/2" />
                    </div>
                    <div className="h-6 w-20 bg-[var(--card-bg)] rounded-full" />
                </div>
            ))}
        </div>
    );
}
