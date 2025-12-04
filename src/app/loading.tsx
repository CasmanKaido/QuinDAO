export default function Loading() {
    return (
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-400">Loading...</p>
            </div>
        </div>
    );
}
