'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { stackCategories, personalInfo } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState("All");

  const displayedCategories =
    activeTab === "All"
      ? stackCategories
      : stackCategories.filter((c) => c.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section
      id="about"
      className="w-full bg-[var(--color-canvas)] py-[64px] sm:py-[128px] transition-colors duration-300"
    >
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto apple-fade">
          <p className="text-[13px] font-semibold text-[var(--color-ink-3)] uppercase tracking-[0.04em]">
            {personalInfo.aboutEyebrow}
          </p>
          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[var(--color-ink)] tracking-[-0.015em] leading-[1.1] mt-[8px]">
            {personalInfo.aboutHeading}
          </h2>
          <p className="text-[17px] font-normal text-[var(--color-ink-2)] leading-[1.47] mt-[16px]">
            {personalInfo.aboutSubheading}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-[12px] mt-[32px] sm:mt-[48px] flex-wrap apple-fade">
          {["All", "Frontend", "Backend", "Mobile", "AI"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[16px] py-[6px] rounded-[980px] text-[13px] font-normal transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-[var(--color-ink)] text-[var(--color-canvas)]"
                  : "bg-[var(--color-canvas-alt)] text-[var(--color-ink-2)] hover:text-[var(--color-ink)] border border-[var(--color-card-border)]"
              }`}
            >
              {tab === "All" ? "All Technologies" : tab}
            </button>
          ))}
        </div>

        {/* Category Cards Stack */}
        <div className="space-y-[32px] mt-[48px]">
          {displayedCategories.map((group, gIdx) => (
            <div
              key={gIdx}
              className="apple-fade rounded-[24px] bg-[var(--color-canvas-alt)] p-[24px] sm:p-[32px] border border-[var(--color-card-border)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-[8px] mb-[20px]">
                <h3 className="text-[20px] sm:text-[24px] font-semibold text-[var(--color-ink)] tracking-[-0.015em]">
                  {group.category}
                </h3>
                <p className="text-[14px] text-[var(--color-ink-2)] font-normal">
                  {group.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[16px] pt-[8px]">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-[12px] p-[12px] rounded-[16px] bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-sm transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <div className="relative w-[28px] h-[28px] flex-shrink-0">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[15px] font-semibold text-[var(--color-ink)] truncate leading-[1.2]">
                        {skill.name}
                      </p>
                      {skill.exp && (
                        <p className="text-[12px] text-[var(--color-ink-3)] font-normal">
                          {skill.exp}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
