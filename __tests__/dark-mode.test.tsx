import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import RecentProjects from '@/components/RecentProjects';
import MyWorkExperience from '@/components/MyWorkExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { navItems, navigationConfig } from '@/data';

describe('Dark Mode Consistency & Visual Hierarchy Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Hero Dark Mode Consistency', () => {
    it('renders with dark background and without light-mode fallback classes', () => {
      const { container } = render(<Hero />);
      const hero = container.querySelector('#home');
      expect(hero).toBeInTheDocument();
      expect(hero?.className).toContain('bg-[#09090b]');

      const whiteGrids = container.querySelectorAll('.bg-white:not(span)');
      expect(whiteGrids.length).toBe(0);

      const statusBadge = screen.getByText(/Available for Software Engineering/i);
      expect(statusBadge).toBeInTheDocument();
    });

    it('renders dual action buttons (CTA + View Resume)', () => {
      render(<Hero />);
      const resumeLink = screen.getByRole('link', { name: /view resume/i });
      expect(resumeLink).toBeInTheDocument();
      expect(resumeLink).toHaveAttribute('href', navigationConfig.resumeButton.link);
      expect(resumeLink.className).toContain('bg-zinc-900');
    });
  });

  describe('FloatingNav Dark Mode Consistency', () => {
    it('renders navigation bar with dark backdrop and proper border contrast', () => {
      const { container } = render(
        <FloatingNav
          navItems={navItems.map((item) => ({
            name: item.name,
            link: item.link,
            icon: <span>icon</span>,
          }))}
        />
      );

      const navBar = container.querySelector('nav');
      expect(navBar).toBeInTheDocument();
      expect(navBar?.className).toContain('bg-[#09090b]/85');
      expect(navBar?.className).toContain('backdrop-blur-md');
      expect(navBar?.className).toContain('border-zinc-800/80');

      expect(navBar?.className).not.toContain('bg-white/80');
      expect(navBar?.className).not.toContain('border-neutral-200');
    });
  });

  describe('RecentProjects Dark Mode & Filtering', () => {
    it('renders category filter tabs and filters projects interactively', () => {
      render(<RecentProjects />);

      const allTab = screen.getByRole('tab', { name: /^all$/i });
      expect(allTab).toBeInTheDocument();

      const aiTab = screen.getByRole('tab', { name: /ai & autonomous/i });
      expect(aiTab).toBeInTheDocument();

      fireEvent.click(aiTab);
      expect(aiTab).toHaveAttribute('aria-selected', 'true');
      expect(aiTab.className).toContain('bg-zinc-800');

      fireEvent.click(allTab);
      expect(allTab).toHaveAttribute('aria-selected', 'true');
      expect(allTab.className).toContain('bg-zinc-800');
    });

    it('ensures project cards maintain dark backgrounds and no white containers', () => {
      const { container } = render(<RecentProjects />);
      const cardContainers = container.querySelectorAll('.cardContainer');
      expect(cardContainers.length).toBeGreaterThan(0);

      const grayCards = container.querySelectorAll('.bg-gray-50, .bg-white');
      expect(grayCards.length).toBe(0);
    });
  });

  describe('MyWorkExperience Dark Mode Consistency', () => {
    it('renders experience rows in dark obsidian styling without bg-gray-50 or border-black', () => {
      const { container } = render(<MyWorkExperience />);

      const legacyLightCards = container.querySelectorAll('.bg-gray-50, .border-black');
      expect(legacyLightCards.length).toBe(0);

      const darkSurface = container.querySelectorAll('.bg-\\[\\#111114\\]');
      expect(darkSurface.length).toBeGreaterThan(0);
    });
  });

  describe('Contact & Footer Dark Mode Consistency', () => {
    it('renders contact section with deep dark inputs and containers', () => {
      const { container } = render(<Contact />);

      const darkInputs = container.querySelectorAll('.bg-\\[\\#0c0c0f\\]');
      expect(darkInputs.length).toBeGreaterThan(0);
    });

    it('renders footer with dark gradient background seamlessly matching the page', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
      expect(footer?.className).toContain('bg-gradient-to-b');
      expect(footer?.className).toContain('to-[#050507]');
    });
  });
});
