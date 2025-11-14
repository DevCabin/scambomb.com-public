'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function AuthError() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const brandYellow = "#F5C84C";

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration.';
      case 'AccessDenied':
        return 'You do not have permission to sign in.';
      case 'Verification':
        return 'The verification token has expired or has already been used.';
      default:
        return 'An error occurred during sign in. Please try again.';
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1324] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="/logo.png"
              alt="ScamBomb Logo"
              className="h-12 w-40 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2 text-red-400">Authentication Error</h1>
          <p className="text-white/70">{getErrorMessage(error)}</p>
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <div className="text-center space-y-4">
            <Link
              href="/auth/signin"
              className="w-full block rounded-xl py-3 px-4 font-semibold text-center transition-colors"
              style={{ backgroundColor: brandYellow, color: "#0B1324" }}
            >
              Try Sign In Again
            </Link>

            <Link
              href="/"
              className="block text-white/70 hover:text-white py-2 transition-colors"
            >
              Go back to home page
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            If this problem persists, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
