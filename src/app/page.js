'use client';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('apple_theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
    setMounted(true);

    // Scroll-triggered fade-in animation (IntersectionObserver)
    const elements = document.querySelectorAll('.apple-fade');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -32px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('apple_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-ink)] transition-colors duration-300 antialiased">
      {/* 1. NAVBAR */}
      <Navbar theme={theme} toggleTheme={toggleTheme} mounted={mounted} />

      <main>
        {/* 2. HERO */}
        <Hero />

        {/* 3. PROJECTS / WORK GRID */}
        <Projects />

        {/* 4. TECH STACK (ABOUT) */}
        <About />

        {/* 5. EXPERIENCE */}
        <Experience />

        {/* 6. SKILLS / SERVICES (DARK SECTION) */}
        <Skills />

        {/* 6. CONTACT / CTA */}
        <Contact />
      </main>

      {/* 7. FOOTER */}
      <Footer />
    </div>
  );
}