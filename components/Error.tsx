'use client'
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen grid place-items-center bg-[#FAF7F2] px-6 text-center">
      <div>
        <h1 className="oh-headline text-4xl mb-3">Something went wrong</h1>
        <p className="oh-body text-[#4a4640] mb-6">{error.message || "Please try again."}</p>
        <button onClick={reset} className="px-6 py-3 bg-[#C2542D] text-white rounded-lg">
          Try again
        </button>
      </div>
    </div>
  )
}