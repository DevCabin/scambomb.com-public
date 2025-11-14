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
 * @returns The URL with SBID and safe_source parameters
 */
export function createAppAccessUrl(baseUrl: string = 'https://app.scambomb.com'): string {
  const sbid = generateSBID();
  const params = new URLSearchParams({
    safe_source: 'true',
    SBID: sbid
  });

  return `${baseUrl}?${params.toString()}`;
}

/**
 * Hook for generating app access URLs (client-side only)
 * This ensures SBID is generated on the client to avoid SSR issues
 */
export function useAppAccessUrl(baseUrl?: string) {
  if (typeof window === 'undefined') {
    // Server-side fallback
    return baseUrl || 'https://app.scambomb.com';
  }

  return createAppAccessUrl(baseUrl);
}
