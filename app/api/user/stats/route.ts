import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';

export const dynamic = 'force-dynamic'; // Force dynamic rendering

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // In a real implementation, this would fetch from a database
    // For now, we'll return mock data based on the user's email
    const userEmail = session.user.email;

    // Mock user stats - in production, this would come from your database
    const mockStats = {
      totalScans: 12,
      freeScansUsed: 3,
      freeScansRemaining: 2,
      lastScanDate: new Date().toISOString(),
    };

    // You could implement logic here to check if the user has upgraded
    // and adjust the stats accordingly

    return NextResponse.json(mockStats);
  } catch (error) {
    console.error('Error fetching user stats:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
