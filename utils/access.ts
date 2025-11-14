/**
 * Generates a unique SBID (ScamBomb ID) for user fingerprinting
 * This allows users to get their 5 free scam checks without authentication
 * @returns A unique identifier string
 */
export function generateSBID(): string {
  return crypto.randomUUID();
}

/**
 * Creates the app access URL with fingerprinting parameters for anonymous access
 * @param baseUrl The base URL of the app (default: https://app.scambomb.com)
 * @returns The URL with SBID and safe_source parameters for basic app access
 */
export function createAppAccessUrl(baseUrl: string = 'https://app.scambomb.com'): string {
  const sbid = generateSBID();
  const params = new URLSearchParams({
    safe_source: 'true',
    SBID: sbid
  });

  return `${baseUrl}?${params.toString()}`;
}
