'use client';
import React from 'react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-[85vh] sm:min-h-screen bg-[var(--color-canvas)] pt-[96px] pb-[80px] sm:pb-[128px] flex items-center justify-center transition-colors duration-300"
    >
      <div className="max-w-[980px] mx-auto w-full px-4 sm:px-6 text-center">
        <div className="apple-fade">
          {/* Main Headline */}
          <h1 className="text-[clamp(44px,7.5vw,76px)] font-semibold text-[var(--color-ink)] tracking-[-0.015em] leading-[1.1]">
            {personalInfo.title}
          </h1>

          {/* Subheadline */}
          <p className="text-[22px] sm:text-[28px] font-normal text-[var(--color-ink-2)] mt-[16px] leading-[1.25] tracking-[-0.01em]">
            {personalInfo.subtitle}
          </p>

          {/* Two CTAs Side-by-Side */}
          <div className="flex items-center justify-center gap-[16px] mt-[32px]">
            <a href="#work" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
