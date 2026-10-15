'use client';
import React from 'react';
import { experiences, personalInfo } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-[var(--color-canvas-alt)] py-[64px] sm:py-[128px] transition-colors duration-300"
    >
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto apple-fade">
          <p className="text-[13px] font-semibold text-[var(--color-ink-3)] uppercase tracking-[0.04em]">
            {personalInfo.experienceEyebrow}
          </p>
          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[var(--color-ink)] tracking-[-0.015em] leading-[1.1] mt-[8px]">
            {personalInfo.experienceHeading}
          </h2>
          <p className="text-[17px] font-normal text-[var(--color-ink-2)] leading-[1.47] mt-[16px]">
            {personalInfo.experienceSubheading}
          </p>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-[32px] mt-[48px]">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="apple-fade rounded-[24px] sm:rounded-[28px] bg-[var(--color-card)] p-[24px] sm:p-[36px] border border-[var(--color-card-border)] shadow-[var(--color-card-shadow)]"
            >
              {/* Card Top Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-[20px] border-b border-[var(--color-card-border)]">
                <div>
                  <h3 className="text-[22px] sm:text-[26px] font-semibold text-[var(--color-ink)] tracking-[-0.015em]">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-[8px] mt-[4px]">
                    <span className="text-[15px] sm:text-[17px] font-medium text-[var(--color-action)]">
                      {exp.company}
                    </span>
                    <span className="text-[var(--color-ink-3)] text-[13px]">·</span>
                    <span className="text-[13px] sm:text-[14px] text-[var(--color-ink-3)] font-normal">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Status & Period Badges */}
                <div className="flex flex-wrap items-center gap-[8px]">
                  <span
                    className={`inline-flex items-center gap-[6px] px-[12px] py-[4px] rounded-full text-[12px] font-normal border ${
                      exp.active
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                        : 'bg-[var(--color-canvas-alt)] text-[var(--color-ink-2)] border-[var(--color-card-border)]'
                    }`}
                  >
                    {exp.active && (
                      <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {exp.period}
                  </span>

                  <span className="px-[12px] py-[4px] rounded-full text-[12px] font-normal bg-[var(--color-canvas-alt)] text-[var(--color-ink-3)] border border-[var(--color-card-border)]">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* 2-Column Content: Responsibilities vs Impact */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] sm:gap-[32px] pt-[24px]">
                {/* Left Column: Responsibilities */}
                <div className="lg:col-span-6 space-y-[12px]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink-3)]">
                    KEY RESPONSIBILITIES
                  </p>
                  <ul className="space-y-[10px]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-[13px] sm:text-[14px] text-[var(--color-ink-2)] leading-[1.5] flex items-start gap-[10px]"
                      >
                        <span className="text-[var(--color-ink-3)] select-none text-[11px] mt-[3px]">
                          •
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Key Achievements */}
                <div className="lg:col-span-6 space-y-[12px]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink-3)]">
                    IMPACT &amp; DELIVERABLES
                  </p>
                  <div className="space-y-[10px]">
                    {exp.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        className="p-[14px] rounded-[16px] bg-[var(--color-canvas-alt)] border border-[var(--color-card-border)]"
                      >
                        <span className="text-[11px] font-semibold text-[var(--color-action)] uppercase tracking-[0.04em] block mb-[2px]">
                          {ach.highlight}
                        </span>
                        <p className="text-[13px] sm:text-[14px] text-[var(--color-ink)] leading-[1.4]">
                          {ach.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Footnote in subtle style */}
              {exp.footerNote && (
                <div className="mt-[24px] pt-[16px] border-t border-[var(--color-card-border)] text-[12px] text-[var(--color-ink-3)] font-normal">
                  {exp.footerNote}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
