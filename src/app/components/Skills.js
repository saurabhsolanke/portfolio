'use client';
import React from 'react';
import { capabilities, personalInfo } from '../data';

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-[#000000] py-[64px] sm:py-[128px]"
    >
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="apple-fade">
          <p className="text-[13px] font-semibold text-[#86868b] uppercase tracking-[0.04em]">
            {personalInfo.skillsEyebrow}
          </p>
          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[#ffffff] tracking-[-0.015em] leading-[1.1] mt-[8px]">
            {personalInfo.skillsHeading}
          </h2>
        </div>

        {/* 2-Column Grid (Desktop), 1-Column (Mobile), Gap 32px */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] mt-[64px]">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="apple-fade flex flex-col justify-between p-[32px] rounded-[16px] bg-[#1d1d1f]"
            >
              <div>
                <h3 className="text-[28px] font-semibold text-[#ffffff] tracking-[-0.015em] leading-[1.1]">
                  {cap.title}
                </h3>
                <p className="text-[17px] font-normal text-[#a1a1a6] leading-[1.47] mt-[8px]">
                  {cap.description}
                </p>
              </div>

              <div className="mt-[24px] pt-[16px] border-t border-[rgba(255,255,255,0.1)]">
                <span className="text-[13px] font-normal text-[#86868b]">
                  {cap.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
