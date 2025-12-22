'use client'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
      <div className="text-center px-6">
        <h1 className="oh-headline text-4xl mb-4">Something went wrong</h1>
        <p className="oh-body mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#C2542D] text-white rounded-lg hover:bg-[#a84624] transition"
        >
          Try again
        </button>
      </div>
    </div>
  )
}