import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (session) {
    // User is already authenticated, redirect to profile or dashboard
    return NextResponse.redirect(new URL('/profile', request.url));
  }

  // Redirect to NextAuth sign-in with Google provider
  const signInUrl = new URL('/api/auth/signin/google', request.url);
  return NextResponse.redirect(signInUrl);
}
