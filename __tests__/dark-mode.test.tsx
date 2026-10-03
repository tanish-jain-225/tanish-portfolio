import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import RecentProjects from '@/components/RecentProjects';
import MyWorkExperience from '@/components/MyWorkExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { navItems } from '@/data';

describe('Dark Mode Consistency & Visual Hierarchy Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Hero Dark Mode Consistency', () => {
    it('renders with dark background and without light-mode fallback classes', () => {
      const { container } = render(<Hero />);
      const hero = container.querySelector('#home');
      expect(hero).toBeInTheDocument();
      expect(hero?.className).toContain('bg-[#000319]');

      // Ensure no light mode bg-white remains in background grid
      const whiteGrids = container.querySelectorAll('.bg-white:not(span)');
      expect(whiteGrids.length).toBe(0);

      // Verify availability status badge is rendered with dark styling
      const statusBadge = screen.getByText(/Available for Software Engineering/i);
      expect(statusBadge).toBeInTheDocument();
    });

    it('renders dual action buttons (CTA + Download CV)', () => {
      render(<Hero />);
      const downloadCv = screen.getByRole('link', { name: /view resume/i });
      expect(downloadCv).toBeInTheDocument();
      expect(downloadCv).toHaveAttribute('href', '/resume.pdf');
      expect(downloadCv.className).toContain('bg-[#0e1026]');
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

      const navBar = container.querySelector('nav div');
      expect(navBar).toBeInTheDocument();
      expect(navBar?.className).toContain('bg-[#04071d]/85');
      expect(navBar?.className).toContain('backdrop-blur-xl');
      expect(navBar?.className).toContain('border-white/[0.12]');

      // Ensure light mode classes like bg-white/80 or border-neutral-200 are absent
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

      // Click AI category filter
      fireEvent.click(aiTab);
      expect(aiTab.className).toContain('bg-gradient-to-r');

      // Click back to All
      fireEvent.click(allTab);
      expect(allTab.className).toContain('bg-gradient-to-r');
    });

    it('ensures project cards maintain dark backgrounds and no white containers', () => {
      const { container } = render(<RecentProjects />);
      const cardContainers = container.querySelectorAll('.cardContainer');
      expect(cardContainers.length).toBeGreaterThan(0);

      // Verify no light gray or white card backgrounds
      const grayCards = container.querySelectorAll('.bg-gray-50, .bg-white');
      expect(grayCards.length).toBe(0);
    });
  });

  describe('MyWorkExperience Dark Mode Consistency', () => {
    it('renders experience cards in dark obsidian styling without bg-gray-50 or border-black', () => {
      const { container } = render(<MyWorkExperience />);
      
      const legacyLightCards = container.querySelectorAll('.bg-gray-50, .border-black');
      expect(legacyLightCards.length).toBe(0);

      // Verify dark cards are present
      const darkCards = container.querySelectorAll('.bg-\\[\\#0b0d21\\]');
      expect(darkCards.length).toBeGreaterThan(0);
    });
  });

  describe('Contact & Footer Dark Mode Consistency', () => {
    it('renders contact section with deep dark glass inputs and containers', () => {
      const { container } = render(<Contact />);
      
      const darkInputs = container.querySelectorAll('.bg-\\[\\#07091c\\]');
      expect(darkInputs.length).toBeGreaterThan(0);
    });

    it('renders footer with dark gradient background seamlessly matching the page', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toBeInTheDocument();
      expect(footer?.className).toContain('bg-gradient-to-b');
      expect(footer?.className).toContain('to-[#000319]');
    });
  });
});
