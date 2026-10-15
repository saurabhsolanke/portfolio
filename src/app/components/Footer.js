'use client';
import React from 'react';
import { footerLinks, personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-canvas-alt)] border-t border-[var(--color-border)] py-[48px] transition-colors duration-300">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Bottom copyright line */}
        <p className="text-[12px] text-[var(--color-ink-3)] order-2 sm:order-1">
          {personalInfo.copyright}
        </p>

        {/* Links inline */}
        <div className="flex flex-wrap items-center justify-center gap-[24px] order-1 sm:order-2">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[var(--color-ink-2)] hover:text-[var(--color-action)] hover:underline transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
