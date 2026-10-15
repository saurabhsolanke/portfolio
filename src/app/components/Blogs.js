'use client';
import React from 'react';
import Image from 'next/image';
import { blogs, personalInfo } from '../data';

export default function Blogs() {
  return (
    <section
      id="writing"
      className="w-full bg-[var(--color-canvas)] py-[64px] sm:py-[128px] transition-colors duration-300"
    >
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto apple-fade">
          <p className="text-[13px] font-semibold text-[var(--color-ink-3)] uppercase tracking-[0.04em]">
            {personalInfo.blogsEyebrow}
          </p>
          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[var(--color-ink)] tracking-[-0.015em] leading-[1.1] mt-[8px]">
            {personalInfo.blogsHeading}
          </h2>
          <p className="text-[17px] font-normal text-[var(--color-ink-2)] leading-[1.47] mt-[16px]">
            {personalInfo.blogsSubheading}
          </p>
        </div>

        {/* 2-Column Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] mt-[48px]">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group apple-fade flex flex-col justify-between rounded-[24px] sm:rounded-[28px] bg-[var(--color-card)] border border-[var(--color-card-border)] shadow-[var(--color-card-shadow)] overflow-hidden transition-all duration-300 hover:scale-[1.01]"
            >
              {/* Image Banner */}
              <div className="relative w-full h-[220px] sm:h-[240px] bg-[var(--color-canvas-alt)] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 right-4 inline-flex items-center px-[12px] py-[4px] rounded-full text-[11px] font-normal bg-[var(--color-card)]/90 backdrop-blur-md text-[var(--color-ink)] border border-[var(--color-card-border)] shadow-sm">
                  {blog.platform} · {blog.readTime}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-[24px] sm:p-[28px] flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[var(--color-action)] uppercase tracking-[0.04em] block mb-[8px]">
                    {blog.eyebrow}
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-[var(--color-ink)] tracking-[-0.015em] leading-[1.25] group-hover:text-[var(--color-action)] transition-colors duration-200">
                    {blog.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-ink-2)] font-normal leading-[1.5] mt-[10px]">
                    {blog.description}
                  </p>
                </div>

                <div className="mt-[20px] pt-[16px] border-t border-[var(--color-card-border)] flex items-center justify-between text-[13px] text-[var(--color-action)] font-normal">
                  <span>Read publication on {blog.platform}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
