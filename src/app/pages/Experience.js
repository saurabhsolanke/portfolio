'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { RiBriefcase4Line } from 'react-icons/ri';
import { HiOutlineExternalLink, HiOutlineLocationMarker } from 'react-icons/hi';

const experiences = [
  {
    company: "KIOT Innovations",
    companyUrl: "#",
    role: "Software Engineer",
    period: "2025 — Present",
    location: "Hyderabad",
    type: "Full-time",
    active: true,
    responsibilities: [
      "Take full ownership of frontend development for major client-facing applications using Nuxt.js and Vue.",
      "Design and implement responsive, accessible enterprise dashboards with ShadCN components.",
      "Drive code reviews, unit testing, and staging-to-main deployment pipelines maintaining production stability.",
      "Collaborate directly with client stakeholders to translate business goals into scalable technical architectures.",
      "Ensure performance optimization, low bundle size, and seamless REST API integrations."
    ],
    achievements: [
      { text: "Architected client-facing platforms using Nuxt.js, optimizing initial load times and Lighthouse scores.", highlight: "Nuxt.js platform" },
      { text: "Delivered modular design system using ShadCN components ensuring high accessibility standards.", highlight: "ShadCN design system" },
      { text: "Established automated unit test workflows and code quality benchmarks across the frontend repository.", highlight: "unit test workflows" },
      { text: "Consistently delivered client milestone releases on schedule with zero critical production bugs.", highlight: "zero critical production bugs" }
    ],
    footerNote: "// Active role taking ownership of core frontend architecture and client deliverables."
  },
  {
    company: "Rubiscape",
    companyUrl: "#",
    role: "Software Engineer",
    period: "2023 — 2024",
    location: "Pune",
    type: "Full-time",
    active: false,
    responsibilities: [
      "Promoted from Associate Software Engineer to Software Engineer to lead development of core product modules.",
      "Built cross-platform mobile applications with the Ionic framework and native plugins with Capacitor.",
      "Engineered reusable UI component libraries enforcing company-wide frontend standards.",
      "Collaborated with backend teams to optimize REST web service payloads and client data caching.",
      "Managed Agile sprint planning, code reviews, and defect triage."
    ],
    achievements: [
      { text: "Spearheaded mobile development with Ionic & Capacitor, shipping smooth cross-platform experiences.", highlight: "Ionic & Capacitor" },
      { text: "Built reusable component libraries that boosted engineering team velocity by 30%.", highlight: "reusable component libraries" },
      { text: "Identified and eliminated critical JavaScript/CSS bottlenecks, accelerating rendering speeds.", highlight: "rendering speeds" },
      { text: "Successfully promoted within 1.5 years for outstanding contribution to the core analytics suite.", highlight: "Promoted to Software Engineer" }
    ],
    footerNote: "// Previously joined as Associate Software Engineer before transitioning to Software Engineer."
  },
  {
    company: "Inteliment Technologies",
    companyUrl: "#",
    role: "Associate Software Engineer",
    period: "2022 — 2023",
    location: "Pune",
    type: "Full-time",
    active: false,
    responsibilities: [
      "Developed frontend components for enterprise web applications on the 'Data as a Service' platform for client Bajaj Auto.",
      "Implemented JavaScript unit testing with Jasmine, guaranteeing high reliability across browser environments.",
      "Refactored legacy UI components to improve cross-device responsiveness and DOM performance.",
      "Coordinated with UX designers to convert Figma mockups into pixel-perfect templates."
    ],
    achievements: [
      { text: "Delivered key modules for Bajaj Auto's Data as a Service platform on tight enterprise deadlines.", highlight: "Bajaj Auto platform" },
      { text: "Authored Jasmine unit test suites achieving over 85% component test coverage.", highlight: "Jasmine unit test suites" },
      { text: "Successfully converted from Project Trainee into full-time Associate Software Engineer.", highlight: "Full-time conversion" }
    ],
    footerNote: "// Completed graduate project trainee program with distinction before promotion."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header (matching screenshot 2) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
        <div>
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">EXPERIENCE</span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mt-2">
            Where I&apos;ve worked
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-400">
          Building real products for real clients.
        </p>
      </div>

      {/* Experience Cards Stack */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-3xl bg-zinc-900/60 border border-zinc-800/90 p-6 sm:p-8 backdrop-blur-md hover:border-zinc-700/80 transition-all duration-300"
          >
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 shadow-sm flex-shrink-0">
                  <RiBriefcase4Line className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm font-medium text-amber-300/90 hover:underline">
                      {exp.company}
                    </span>
                    <HiOutlineExternalLink className="w-3.5 h-3.5 text-amber-300/70" />
                  </div>
                </div>
              </div>

              {/* Status Badges on Right */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                  exp.active
                    ? "bg-emerald-950/70 border-emerald-800/60 text-emerald-400"
                    : "bg-zinc-800/80 border-zinc-700/60 text-zinc-300"
                }`}>
                  {exp.active && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                  {exp.period}
                </span>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/40 text-zinc-400">
                  <HiOutlineLocationMarker className="w-3.5 h-3.5" />
                  {exp.location}
                </span>

                <span className="px-2.5 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/40 text-zinc-400">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* 2-Column Content: Responsibilities vs Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6">
              {/* Left Column: Responsibilities */}
              <div className="lg:col-span-6 space-y-3.5">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  RESPONSIBILITIES
                </div>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex items-start gap-2.5">
                      <span className="text-amber-400/80 font-mono text-xs mt-0.5 select-none">&gt;</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Notable Achievements */}
              <div className="lg:col-span-6 space-y-3.5">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  NOTABLE ACHIEVEMENTS
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-start gap-2.5">
                      <span className="text-amber-400 text-xs mt-0.5 select-none">★</span>
                      <span>{ach.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Footnote in Code Comment Style */}
            <div className="pt-4 border-t border-zinc-800/60 text-xs font-mono text-zinc-600">
              {exp.footerNote}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}