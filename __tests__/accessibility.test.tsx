import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import RecentProjects from '@/components/RecentProjects';
import MyWorkExperience from '@/components/MyWorkExperience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { navItems, heroData } from '@/data';

describe('Accessibility & Non-Hindering Animation Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Hero Component Accessibility', () => {
    it('renders CTA link without nested button and with focus-visible styling', () => {
      render(<Hero />);
      const ctaLink = screen.getByRole('link', { name: new RegExp(heroData.ctaButton.text, 'i') });

      expect(ctaLink).toBeInTheDocument();
      // Ensure no illegal <button> is nested inside the <a> tag
      expect(ctaLink.querySelector('button')).toBeNull();
      // Ensure focus-visible class is present
      expect(ctaLink.className).toContain('focus-visible:ring-2');
    });

    it('ensures background animation and spotlight containers are non-blocking', () => {
      const { container } = render(<Hero />);
      const decorativeContainers = container.querySelectorAll('.pointer-events-none');
      expect(decorativeContainers.length).toBeGreaterThan(0);
      
      const scrollIndicator = container.querySelector('.scroll-indicator');
      expect(scrollIndicator?.className).toContain('pointer-events-none');
    });
  });

  describe('FloatingNav Accessibility', () => {
    it('provides accessible names and focus-visible styles for all navigation items', () => {
      render(
        <FloatingNav
          navItems={navItems.map((item) => ({
            name: item.name,
            link: item.link,
            icon: <span>icon</span>,
          }))}
        />
      );

      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThanOrEqual(navItems.length);

      links.forEach((link) => {
        // Every link must have an accessible name (text or aria-label)
        expect(link.getAttribute('aria-label') || link.textContent).toBeTruthy();
        // Every link must have focus-visible styling
        expect(link.className).toContain('focus-visible:ring-2');
      });
    });

    it('ensures external resume link has security attributes and new-tab indicator', () => {
      render(
        <FloatingNav
          navItems={navItems.map((item) => ({
            name: item.name,
            link: item.link,
            icon: <span>icon</span>,
          }))}
        />
      );

      const resumeLink = screen.getByRole('link', { name: /resume/i });
      expect(resumeLink).toHaveAttribute('target', '_blank');
      expect(resumeLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
      expect(resumeLink.getAttribute('aria-label')).toMatch(/opens in new tab/i);
    });
  });

  describe('RecentProjects Accessibility', () => {
    it('renders project actions as semantic accessible links instead of fake buttons', () => {
      render(<RecentProjects />);
      
      const sourceLinks = screen.getAllByRole('link', { name: /source code.*github/i });
      expect(sourceLinks.length).toBeGreaterThan(0);

      sourceLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
        expect(link.className).toContain('focus-visible:ring-2');
      });

      const liveLinks = screen.getAllByRole('link', { name: /live demo/i });
      expect(liveLinks.length).toBeGreaterThan(0);

      liveLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
        expect(link.className).toContain('focus-visible:ring-2');
      });
    });
  });

  describe('MyWorkExperience Accessibility', () => {
    it('ensures experience detail links have no nested buttons and have accessible labels', () => {
      render(<MyWorkExperience />);

      const detailLinks = screen.getAllByRole('link', { name: /view details/i });
      expect(detailLinks.length).toBeGreaterThan(0);

      detailLinks.forEach((link) => {
        expect(link.querySelector('button')).toBeNull();
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
        expect(link.className).toContain('focus-visible:ring-2');
      });
    });
  });

  describe('Contact & Social Links Accessibility', () => {
    it('ensures all social links have accessible new-tab indicators and focus-visible styling', () => {
      render(<Contact />);

      const socialLinks = screen.getAllByRole('link', { name: /visit.*profile/i });
      expect(socialLinks.length).toBeGreaterThan(0);

      socialLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
        expect(link.className).toContain('focus-visible:ring-2');
      });
    });

    it('ensures submit button has proper focus styles and live region', () => {
      render(<Contact />);

      const submitBtn = screen.getByRole('button', { name: /send message/i });
      expect(submitBtn).toHaveAttribute('type', 'submit');
      expect(submitBtn.className).toContain('focus-visible:ring-2');
      expect(submitBtn).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Footer Accessibility', () => {
    it('ensures all footer links have accessible labels and focus-visible styling', () => {
      render(<Footer />);

      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);

      links.forEach((link) => {
        expect(link.getAttribute('aria-label') || link.textContent).toBeTruthy();
        expect(link.className).toContain('focus-visible:ring-2');
      });
    });
  });
});
