'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaStackOverflow, FaMedium, FaTwitter } from 'react-icons/fa';
import { HiOutlineExternalLink, HiPlay } from 'react-icons/hi';
import { RiTerminalBoxLine } from 'react-icons/ri';

export default function Landing() {
  const stackIcons = [
    { name: "Next.js", icon: "/images/nextjs.svg" },
    { name: "TypeScript", icon: "/images/typescript.svg" },
    { name: "React", icon: "/images/react-svgrepo-com.svg" },
    { name: "Angular", icon: "/images/Angular1.svg" },
    { name: "Node.js", icon: "/images/Node.js.svg" },
    { name: "Tailwind", icon: "/images/tailwind.svg" },
  ];

  const codeSnippet = `// SAURABH.CONFIG.TS

export default {
  role: "Software Engineer",
  company: "KIOT Innovations",
  building: "enterprise platforms & client
            dashboards",
  learning: "system design, distributed systems",
  available: true,
}`;

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
      {/* ===================== HERO SECTION ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start pt-6">
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-[76px] font-bold tracking-tight text-white leading-[1.05]">
              Hello, I&apos;m Saurabh
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-[76px] font-bold tracking-tight leading-[1.05] bg-gradient-to-r from-amber-200 via-amber-100 to-amber-300 bg-clip-text text-transparent">
              Solanke
            </h1>
            <h2 className="text-4xl sm:text-6xl lg:text-[64px] font-bold tracking-tight text-white/95 leading-[1.05]">
              Software Engineer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal"
          >
            Software Engineer at <span className="text-zinc-200 font-medium">KIOT Innovations</span> — I build custom web platforms, scalable frontend architectures, and high-performance applications with exceptional user experiences.
          </motion.p>

          {/* Day-to-day callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 max-w-2xl text-sm text-zinc-400 leading-relaxed font-mono"
          >
            <span className="text-zinc-200 font-semibold font-sans">Day-to-day:</span> Nuxt.js, React, TypeScript, Vue, Angular, and Ionic — clean component abstractions, unit testing, and performant UI systems.
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="mailto:saurabh.solanke@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-95"
            >
              <HiOutlineExternalLink className="w-4 h-4" />
              <span>Contact me</span>
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-zinc-900 text-white border border-zinc-700/80 hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              <HiPlay className="w-3.5 h-3.5 text-zinc-400" />
              <span>View projects →</span>
            </a>
          </motion.div>

          {/* Find Me On Social Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 pt-4 text-xs font-mono text-zinc-500"
          >
            <span className="tracking-wider uppercase">FIND ME ON ———</span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/saurabhsolanke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://medium.com/@saurabh.solanke_6285"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors"
              >
                <FaMedium className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh-solanke/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors"
              >
                <FaLinkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://stackoverflow.com/users/11864453/saurabh-solanke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stack Overflow"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 flex items-center justify-center transition-colors"
              >
                <FaStackOverflow className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Terminal Spec Cards */}
        <div className="lg:col-span-5 space-y-5">
          {/* Top Spec Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-zinc-900/70 border border-zinc-800/90 p-6 backdrop-blur-md shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-zinc-800/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300">
                  <RiTerminalBoxLine className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">CURRENTLY</div>
                  <div className="text-xs font-semibold text-zinc-200">Building things end-to-end</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-zinc-600">v26.05</span>
            </div>

            {/* Spec Rows */}
            <div className="py-4 space-y-3.5 font-mono text-xs">
              <div className="flex items-start justify-between gap-4">
                <span className="text-zinc-500 uppercase tracking-wider text-[11px]">SOFTWARE</span>
                <span className="text-zinc-300 text-right">Nuxt.js · React · Vue · Angular</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-zinc-500 uppercase tracking-wider text-[11px]">MOBILE</span>
                <span className="text-zinc-300 text-right">Ionic · Capacitor · Cross-Platform</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <span className="text-zinc-500 uppercase tracking-wider text-[11px]">STACK</span>
                <span className="text-zinc-300 text-right">TypeScript · Node.js · REST APIs</span>
              </div>
            </div>

            {/* Badges */}
            <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/50 border border-amber-800/40 text-amber-300 text-[11px]">
                <span>★</span>
                OPEN TO WORK
              </span>
            </div>
          </motion.div>

          {/* Bottom Card: Stack & tools I use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-zinc-900/70 border border-zinc-800/90 p-5 backdrop-blur-md"
          >
            <div className="text-xs font-mono text-zinc-400 mb-4">Stack & tools I use</div>
            <div className="flex items-center justify-between gap-2 overflow-x-auto">
              {stackIcons.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800/50 border border-zinc-800 text-zinc-300 text-xs font-medium"
                >
                  <div className="relative w-4 h-4">
                    <Image src={tool.icon} alt={tool.name} fill className="object-contain" />
                  </div>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===================== CAREER OBJECTIVE SECTION ===================== */}
      <div id="about" className="pt-16 border-t border-zinc-800/80 space-y-12">
        <div>
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">CAREER OBJECTIVE</span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white mt-3 leading-snug max-w-4xl">
            I build things that work on both ends —{" "}
            <span className="text-zinc-400">interfaces people enjoy using</span> and{" "}
            <span className="text-white">servers that don&apos;t fall over at 3 AM.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Context & Tag pills */}
          <div className="lg:col-span-7 space-y-6 text-sm text-zinc-400 leading-relaxed font-normal">
            <p>
              Started with curiosity, stayed for the craft. Software engineer: clean APIs, crisp UIs, performant production web apps, and modern developer tooling — plus tools people actually use day-to-day.
            </p>
            <p>
              In practice: <strong className="text-zinc-200">Nuxt.js, React, TypeScript, Vue, Angular, Node.js</strong> — architecting responsive web applications, enforcing rigorous unit tests, and optimizing frontend-backend integration for speed and reliability.
            </p>
            <p>
              Full-time at <strong className="text-zinc-200">KIOT Innovations</strong>: Leading frontend development for major client-facing platforms, crafting accessible dashboards with ShadCN, and translating business goals into scalable technical features.
            </p>

            {/* Monospace Tech Tags list */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
              {["< Nuxt.js />", "< React />", "< Angular />", "< Vue.js />", "< Node.js />", "< TypeScript />", "< Ionic />", "< MongoDB />", "< PostgreSQL />", "< REST APIs />", "< Git />", "< Agile />"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Code Block */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-5 font-mono text-xs leading-relaxed shadow-xl overflow-hidden">
              <pre className="text-zinc-300 overflow-x-auto">
                <span className="text-zinc-600">{"// SAURABH.CONFIG.TS"}</span>{"\n\n"}
                <span className="text-purple-400">export default</span> &#123;{"\n"}
                {"  "}<span className="text-cyan-400">role</span>: <span className="text-emerald-300">&quot;Software Engineer&quot;</span>,{"\n"}
                {"  "}<span className="text-cyan-400">company</span>: <span className="text-emerald-300">&quot;KIOT Innovations&quot;</span>,{"\n"}
                {"  "}<span className="text-cyan-400">building</span>: <span className="text-emerald-300">&quot;client platforms &amp; enterprise dashboards&quot;</span>,{"\n"}
                {"  "}<span className="text-cyan-400">learning</span>: <span className="text-emerald-300">&quot;distributed systems, cloud architectures&quot;</span>,{"\n"}
                {"  "}<span className="text-cyan-400">available</span>: <span className="text-amber-400">true</span>,{"\n"}
                &#125;
              </pre>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500 px-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              <span className="uppercase tracking-wider">EMPLOYED · OPEN TO FREELANCE &amp; CONSULTING</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
