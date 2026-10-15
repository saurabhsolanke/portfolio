'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks, personalInfo } from '../data';

export default function Navbar({ theme = 'light', toggleTheme, mounted = true }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[48px] transition-all duration-300 ${
        scrolled ? 'shadow-[0_1px_6px_rgba(0,0,0,0.15)]' : ''
      }`}
      style={{
        backgroundColor: 'var(--color-nav-bg)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid var(--color-nav-border)',
      }}
    >
      <div className="max-w-[980px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        {/* Logo (name) on left */}
        <Link
          href="#hero"
          className="text-[17px] font-semibold text-[var(--color-ink)] hover:text-[var(--color-action)] transition-colors duration-200"
        >
          {personalInfo.name}
        </Link>

        {/* Desktop Nav links centered */}
        <div className="hidden md:flex items-center gap-[32px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-normal text-[var(--color-ink)] hover:text-[var(--color-action)] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right side: Theme Toggle & CTA pill button */}
        <div className="hidden md:flex items-center gap-[16px]">
          {/* Apple-style Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[var(--color-ink)] hover:text-[var(--color-action)] transition-colors duration-200 cursor-pointer"
          >
            {mounted && theme === 'dark' ? (
              /* Sun icon */
              <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              /* Moon icon */
              <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center bg-[#0071e3] hover:bg-[#0077ed] text-white text-[13px] font-normal px-[16px] py-[6px] rounded-[980px] transition-all duration-200 active:scale-[0.98]"
          >
            Say Hello
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-[8px]">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[var(--color-ink)]"
          >
            {mounted && theme === 'dark' ? (
              <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex flex-col justify-center items-center w-[44px] h-[44px]"
          >
            <span
              className={`w-[18px] h-[1px] bg-[var(--color-ink)] transition-transform duration-200 ${
                mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`w-[18px] h-[1px] bg-[var(--color-ink)] mt-[5px] transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-[18px] h-[1px] bg-[var(--color-ink)] mt-[5px] transition-transform duration-200 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-[var(--color-border)] px-6 py-6"
          style={{
            backgroundColor: 'var(--color-nav-bg)',
            backdropFilter: 'blur(20px) saturate(180%)',
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[17px] font-normal text-[var(--color-ink)] hover:text-[var(--color-action)] py-2 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
