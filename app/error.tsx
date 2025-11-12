'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#0B1324] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-white/80 mb-6">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-2xl px-6 py-3 font-semibold bg-[#F5C84C] text-[#0B1324] hover:bg-[#F5C84C]/90"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
