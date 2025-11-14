'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const getProvidersData = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };
    getProvidersData();
  }, []);

  const brandYellow = "#F5C84C";

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
          <h1 className="text-2xl font-bold mb-2">Sign In</h1>
          <p className="text-white/70">Sign in to access your ScamBomb account</p>
        </div>

        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          {providers && Object.values(providers).map((provider: any) => (
            <button
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className="w-full rounded-xl py-3 px-4 font-semibold flex items-center justify-center gap-3 mb-3 transition-colors"
              style={{ backgroundColor: brandYellow, color: "#0B1324" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with {provider.name}
            </button>
          ))}

          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-sm text-white/60 text-center">
              Don't have an account? <a href="/" className="text-yellow-400 hover:underline">Try a demo first</a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="text-white/70 hover:text-white text-sm">← Back to home</a>
        </div>
      </div>
    </div>
  );
}
