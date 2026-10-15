'use client';
import React from 'react';
import { personalInfo } from '../data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[var(--color-canvas)] py-[64px] sm:py-[128px] transition-colors duration-300"
    >
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 text-center apple-fade">
        <h2 className="text-[36px] sm:text-[48px] font-semibold text-[var(--color-ink)] tracking-[-0.015em] leading-[1.1]">
          {personalInfo.contactHeading}
        </h2>
        <p className="text-[17px] font-normal text-[var(--color-ink-2)] leading-[1.47] mt-[16px]">
          {personalInfo.contactBody}
        </p>
        <div className="mt-[32px]">
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
