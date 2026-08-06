const ipCache = new Map<string, number[]>();

export interface RateLimitOptions {
  windowMs: number;
  max: number;
}

/**
 * Basic in-memory rate limiter to prevent spam submissions on Serverless Functions.
 */
export function isRateLimited(ip: string, options: RateLimitOptions): boolean {
  const now = Date.now();
  const timestamps = ipCache.get(ip) || [];

  // Filter out timestamps outside the sliding window
  const activeTimestamps = timestamps.filter((time) => now - time < options.windowMs);

  if (activeTimestamps.length >= options.max) {
    return true;
  }

  activeTimestamps.push(now);
  ipCache.set(ip, activeTimestamps);
  return false;
}
