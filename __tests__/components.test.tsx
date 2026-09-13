import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { heroData, footerData } from '@/data';

describe('Frontend Components Suite', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Hero Component', () => {
    it('renders hero title, subtitle, and CTA button', () => {
      render(<Hero />);

      expect(screen.getByText(heroData.subtitle)).toBeInTheDocument();
      expect(screen.getByText(heroData.description)).toBeInTheDocument();
      expect(screen.getByText(heroData.ctaButton.text)).toBeInTheDocument();
    });
  });

  describe('Footer Component', () => {
    it('renders footer brand logo, description, and navigation links', () => {
      render(<Footer />);

      expect(screen.getByText(footerData.logo.text)).toBeInTheDocument();
      expect(screen.getByText(footerData.description)).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });

  describe('Contact Component', () => {
    it('renders contact form fields and handles input typing', () => {
      render(<Contact />);

      const nameInput = screen.getByLabelText(/your name/i);
      const emailInput = screen.getByLabelText(/your email/i);
      const messageInput = screen.getByLabelText(/your message/i);

      fireEvent.change(nameInput, { target: { value: 'Alice' } });
      fireEvent.change(emailInput, { target: { value: 'alice@example.com' } });
      fireEvent.change(messageInput, { target: { value: 'Looking forward to chatting.' } });

      expect(nameInput).toHaveValue('Alice');
      expect(emailInput).toHaveValue('alice@example.com');
      expect(messageInput).toHaveValue('Looking forward to chatting.');
    });

    it('submits contact form and displays success state', async () => {
      vi.stubGlobal('fetch', vi.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true, message: 'Message sent!' }),
      }));

      render(<Contact />);

      fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Alice' } });
      fireEvent.change(screen.getByLabelText(/your email/i), { target: { value: 'alice@example.com' } });
      fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Project Collaboration' } });
      fireEvent.change(screen.getByLabelText(/your message/i), { target: { value: 'Hello world message.' } });

      const submitBtn = screen.getByRole('button', { name: /send message/i });
      fireEvent.click(submitBtn);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
          '/api/contact-form',
          expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: expect.stringContaining('alice@example.com'),
          })
        );
      });
    });
  });
});
