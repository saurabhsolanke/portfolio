'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { projects, projectCategoryTabs, personalInfo } from '../data';

export default function Projects() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 440;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const filteredProjects = activeFilter === "All Projects"
    ? projects
    : activeFilter === "Web Platforms"
    ? projects.filter(p => p.category === "Web")
    : activeFilter === "Mobile Apps"
    ? projects.filter(p => p.category === "Mobile")
    : projects.filter(p => p.category === "Enterprise");

  return (
    <section id="work" className="w-full bg-[var(--color-canvas-alt)] py-[64px] sm:py-[96px] overflow-hidden transition-colors duration-300">
      {/* Category Icons Row at Top */}
      {/* <div className="max-w-[980px] mx-auto px-4 sm:px-6 mb-[48px]">
        <div className="flex items-center justify-start sm:justify-center gap-[24px] sm:gap-[40px] overflow-x-auto pb-2 no-scrollbar">
          {projectCategoryTabs.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`flex flex-col items-center gap-[8px] transition-opacity duration-200 cursor-pointer min-w-fit ${
                activeFilter === cat.name ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div
                className={`w-[44px] h-[44px] rounded-full flex items-center justify-center text-[18px] transition-colors ${
                  activeFilter === cat.name
                    ? 'bg-[var(--color-ink)] text-[var(--color-canvas)]'
                    : 'bg-[var(--color-card)] text-[var(--color-ink)] shadow-sm border border-[var(--color-card-border)]'
                }`}
              >
                {cat.icon}
              </div>
              <span className="text-[12px] font-normal text-[var(--color-ink)] whitespace-nowrap">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div> */}

      {/* Heading Container: "The latest. Meet the new arrivals this season." */}
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 mb-[32px] flex items-end justify-between">
        <div>
          <h2 className="text-[28px] sm:text-[40px] md:text-[44px] font-semibold tracking-[-0.015em] leading-[1.15]">
            <span className="text-[var(--color-ink-2)]">{personalInfo.workEyebrow}</span>{" "}
            <span className="text-[var(--color-ink-2)] font-normal">{personalInfo.workHeading}</span>
          </h2>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="hidden sm:flex items-center gap-[12px]">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label="Previous project"
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'bg-[var(--color-border)]/70 hover:bg-[var(--color-border)] text-[var(--color-ink)] cursor-pointer'
                : 'bg-[var(--color-border)]/30 text-[var(--color-ink-3)] cursor-default opacity-40'
            }`}
          >
            <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label="Next project"
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center transition-all ${
              canScrollRight
                ? 'bg-[var(--color-border)]/70 hover:bg-[var(--color-border)] text-[var(--color-ink)] cursor-pointer'
                : 'bg-[var(--color-border)]/30 text-[var(--color-ink-3)] cursor-default opacity-40'
            }`}
          >
            <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-[20px] sm:gap-[24px] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-[32px] pt-[8px] px-4 sm:px-[calc((100vw-980px)/2)] no-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target={project.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="group flex-none w-[320px] sm:w-[380px] md:w-[400px] h-[480px] sm:h-[500px] rounded-[24px] sm:rounded-[28px] bg-[var(--color-card)] p-[28px] sm:p-[32px] flex flex-col justify-between snap-start transition-all duration-300 ease-out shadow-[var(--color-card-shadow)] hover:scale-[1.01] border border-[var(--color-card-border)]"
            >
              {/* Card Top Text Content */}
              <div>
                {/* Eyebrow badge in Apple orange */}
                <span className="text-[12px] font-semibold text-[var(--color-eyebrow)] tracking-[0.02em] uppercase block">
                  {project.eyebrow}
                </span>

                {/* Main Card Title */}
                <h3 className="text-[24px] sm:text-[28px] font-semibold text-[var(--color-ink)] tracking-[-0.015em] leading-[1.15] mt-[8px]">
                  {project.title}
                </h3>

                {/* Tagline */}
                <p className="text-[15px] sm:text-[17px] font-normal text-[var(--color-ink)] mt-[8px] leading-[1.3]">
                  {project.tagline}
                </p>

                {/* Sub-meta (Price / Tech stack representation) */}
                <p className="text-[13px] sm:text-[14px] text-[var(--color-ink-2)] mt-[4px]">
                  {project.meta}
                </p>
              </div>

              {/* Bottom Visual / Product Graphic */}
              <div className="relative w-full h-[220px] sm:h-[240px] mt-[16px] rounded-[16px] overflow-hidden bg-[var(--color-canvas-alt)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Floating Right Arrow Button on Mobile/Tablet */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label="Next project"
            className="sm:hidden absolute right-4 top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full bg-[var(--color-card)] text-[var(--color-ink)] border border-[var(--color-card-border)] shadow-lg flex items-center justify-center z-20 cursor-pointer"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
