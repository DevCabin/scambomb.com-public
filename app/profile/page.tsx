'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface UserStats {
  totalScans: number;
  freeScansUsed: number;
  freeScansRemaining: number;
  lastScanDate: string | null;
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session) {
      // Fetch user stats from API
      fetchUserStats();
    } else {
      setLoading(false);
    }
  }, [session]);

  const fetchUserStats = async () => {
    try {
      const response = await fetch('/api/user/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Failed to fetch user stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-[#0B1324] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#0B1324] text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Sign In Required</h1>
          <p className="text-white/80 mb-6">
            Please sign in with Google to view your profile and usage statistics.
          </p>
          <button
            onClick={() => signIn('google')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1324] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Profile</h1>
          <p className="text-white/80">Manage your account and view your scam detection statistics</p>
        </div>

        {/* User Info */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6 mb-8">
          <div className="flex items-center gap-4 mb-6">
            {session.user?.image && (
              <img
                src={session.user.image}
                alt={session.user.name || 'User'}
                className="w-16 h-16 rounded-full"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold">{session.user?.name}</h2>
              <p className="text-white/70">{session.user?.email}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => signOut()}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Scans"
            value={stats?.totalScans || 0}
            icon="🔍"
          />
          <StatCard
            title="Free Scans Used"
            value={stats?.freeScansUsed || 0}
            icon="📊"
          />
          <StatCard
            title="Free Scans Left"
            value={stats?.freeScansRemaining || 5}
            icon="🎁"
          />
          <StatCard
            title="Last Scan"
            value={stats?.lastScanDate ? new Date(stats.lastScanDate).toLocaleDateString() : 'Never'}
            icon="📅"
          />
        </div>

        {/* Usage Details */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <h3 className="text-xl font-bold mb-4">Usage Details</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Free Plan Usage</span>
              <span className="text-yellow-400 font-semibold">
                {stats?.freeScansUsed || 0} / 5 scans used
              </span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div
                className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((stats?.freeScansUsed || 0) / 5) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-white/70">
              Upgrade to Pro for unlimited scans and premium features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: string }) {
  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 p-6 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-yellow-400 mb-1">{value}</div>
      <div className="text-sm text-white/70">{title}</div>
    </div>
  );
}
