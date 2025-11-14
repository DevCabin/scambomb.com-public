/**
 * Generates a unique SBID (ScamBomb ID) for user fingerprinting
 * @returns A unique identifier string
 */
export function generateSBID(): string {
  return crypto.randomUUID();
}

/**
 * Creates the app access URL with fingerprinting parameters
 * @param baseUrl The base URL of the app (default: https://app.scambomb.com)
 * @param accessToken Optional NextAuth access token for authenticated users
 * @returns The URL with SBID, safe_source, and optional auth parameters
 */
export function createAppAccessUrl(baseUrl: string = 'https://app.scambomb.com', accessToken?: string): string {
  const sbid = generateSBID();
  const params = new URLSearchParams({
    safe_source: 'true',
    SBID: sbid
  });

  // Add authentication token if available (for seamless auth handoff)
  if (accessToken) {
    params.append('access_token', accessToken);
  }

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Hook for generating app access URLs (client-side only)
 * This ensures SBID is generated on the client to avoid SSR issues
 * Now includes NextAuth session access token for seamless authentication
 */
export function useAppAccessUrl(baseUrl?: string) {
  if (typeof window === 'undefined') {
    // Server-side fallback
    return baseUrl || 'https://app.scambomb.com';
  }

  // This will be enhanced in components to include auth tokens
  return createAppAccessUrl(baseUrl);
}
