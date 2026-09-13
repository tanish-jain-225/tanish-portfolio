import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { isRateLimited } from '@/lib/rateLimit';

describe('Rate Limiter Utility', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('allows requests within the limit', () => {
    const ip = '192.168.1.100';
    const options = { windowMs: 60000, max: 3 };

    expect(isRateLimited(ip, options)).toBe(false);
    expect(isRateLimited(ip, options)).toBe(false);
    expect(isRateLimited(ip, options)).toBe(false);
  });

  it('blocks requests exceeding the maximum allowed within window', () => {
    const ip = '192.168.1.101';
    const options = { windowMs: 60000, max: 2 };

    expect(isRateLimited(ip, options)).toBe(false);
    expect(isRateLimited(ip, options)).toBe(false);
    // 3rd attempt should be blocked
    expect(isRateLimited(ip, options)).toBe(true);
  });

  it('resets rate limit window after windowMs elapses', () => {
    const ip = '192.168.1.102';
    const options = { windowMs: 60000, max: 1 };

    expect(isRateLimited(ip, options)).toBe(false);
    expect(isRateLimited(ip, options)).toBe(true);

    // Fast-forward past windowMs
    vi.advanceTimersByTime(65000);

    // Should now be allowed again
    expect(isRateLimited(ip, options)).toBe(false);
  });
});
