import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import React from 'react';

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
});

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// Mock framer-motion to bypass animation timing loops in test environments
vi.mock('framer-motion', async () => {
  return {
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    motion: new Proxy(
      {},
      {
        get: (_target, prop: string) => {
          return React.forwardRef(
            (
              {
                children,
                initial,
                animate,
                exit,
                transition,
                variants,
                whileHover,
                whileTap,
                whileInView,
                viewport,
                layout,
                layoutId,
                ...props
              }: any,
              ref: any
            ) => {
              return React.createElement(prop, { ...props, ref }, children);
            }
          );
        },
      }
    ),
    useAnimate: () => [{ current: null }, vi.fn().mockResolvedValue(true)],
    useAnimation: () => ({ start: vi.fn(), stop: vi.fn() }),
    useScroll: () => ({ scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
    useSpring: () => 0,
    stagger: (val: number) => val,
  };
});
