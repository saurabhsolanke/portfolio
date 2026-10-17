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

        <div className="mt-[32px] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--color-canvas-alt)] border border-[var(--color-border)] text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-action)] hover:border-[var(--color-action)] transition-all duration-200 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[var(--color-ink-2)] group-hover:text-[var(--color-action)] transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{personalInfo.email}</span>
          </a>

          <a
            href={`tel:${personalInfo.phoneRaw || personalInfo.phone}`}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--color-canvas-alt)] border border-[var(--color-border)] text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-action)] hover:border-[var(--color-action)] transition-all duration-200 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[var(--color-ink-2)] group-hover:text-[var(--color-action)] transition-colors duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>{personalInfo.phone}</span>
          </a>
        </div>

        <div className="mt-[24px]">
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
