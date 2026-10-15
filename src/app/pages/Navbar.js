'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMoonLine, RiSunLine, RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";

const Navbar = ({ toggleTheme, theme = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "experience", "skills", "work", "blogs", "contact"];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "WORK", href: "#work", id: "work" },
    { name: "BLOGS", href: "#blogs", id: "blogs" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#09090b]/80 dark:bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <span className="font-semibold text-sm tracking-tight text-white hover:text-zinc-300 transition-colors">
            Saurabh Solanke
          </span>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 bg-zinc-800/90 rounded-md -z-10 border border-zinc-700/60"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action: Theme toggle + Hire Me Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/90 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all flex items-center justify-center text-xs"
          >
            {theme === "dark" ? <RiSunLine className="w-3.5 h-3.5" /> : <RiMoonLine className="w-3.5 h-3.5" />}
          </button>

          <a
            href="mailto:saurabh.solanke98@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-zinc-900 border border-zinc-700/80 hover:bg-zinc-800 hover:border-zinc-600 transition-all shadow-sm"
          >
            <span>Hire me</span>
            <HiArrowRight className="w-3 h-3 text-zinc-400" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-8 h-8 rounded-md border border-zinc-800 bg-zinc-900 text-zinc-400 flex items-center justify-center"
          >
            {isMobileMenuOpen ? <RiCloseFill className="w-4 h-4" /> : <RiMenu4Fill className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-800 bg-[#09090b]/95 px-4 py-4 space-y-1"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-xs font-mono font-medium tracking-wider ${
                  activeSection === item.id
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="mailto:saurabh.solanke98@gmail.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-full text-xs font-medium text-white bg-zinc-800 border border-zinc-700"
              >
                <span>Hire me</span>
                <HiArrowRight className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
