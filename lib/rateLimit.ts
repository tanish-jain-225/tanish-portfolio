const ipCache = new Map<string, number[]>();
const MAX_TRACKED_IPS = 1000;

export interface RateLimitOptions {
  windowMs: number;
  max: number;
}

/**
 * Sliding-window in-memory rate limiter with automatic cache pruning.
 */
export function isRateLimited(ip: string, options: RateLimitOptions): boolean {
  const now = Date.now();
  const timestamps = ipCache.get(ip) || [];

  // Filter out timestamps outside the sliding window
  const activeTimestamps = timestamps.filter((time) => now - time < options.windowMs);

  if (activeTimestamps.length >= options.max) {
    return true;
  }

  // Prune expired IPs when cache exceeds threshold to prevent memory leaks
  if (ipCache.size > MAX_TRACKED_IPS) {
    for (const [key, times] of ipCache.entries()) {
      if (!times.some((time) => now - time < options.windowMs)) {
        ipCache.delete(key);
      }
    }
  }

  activeTimestamps.push(now);
  ipCache.set(ip, activeTimestamps);
  return false;
}
