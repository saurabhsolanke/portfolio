'use client';
import Navbar from "./pages/Navbar";
import Landing from "./pages/Landing";
import Techstacks from "./pages/Techstacks";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import React, { useState, useEffect } from "react";
import Blogs from "./pages/Blogs";
import Experience from "./pages/Experience";

import LineArtBackground from "./components/LineArtBackground";
import AnimatedBackground from "./components/AnimatedBackground";

export default function Home() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`${theme}`}>
      <main className="flex flex-col min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-black dark:via-blue-950/20 dark:to-purple-950/10 transition-colors duration-300 relative overflow-hidden">
        <LineArtBackground />
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          <section id="about" className="min-h-screen bg-gradient-to-b from-transparent via-blue-50/40 to-purple-50/30 dark:via-blue-950/30 dark:to-purple-950/20 pt-16">
            <Landing />
          </section>

          <section id="techstack" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/40 to-purple-50/30 dark:via-blue-950/30 dark:to-purple-950/20" />
            <div className="relative">
              <Techstacks />
            </div>
          </section>

          <section id="projects" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-pink-50/30 dark:via-indigo-950/30 dark:to-pink-950/20" />
            <div className="relative">
              <Projects />
            </div>
          </section>

          <section id="experience" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/40 to-pink-50/30 dark:via-indigo-950/30 dark:to-pink-950/20" />
            <div className="relative">
              <Experience />
            </div>
          </section>

          <section id="blogs" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 pb-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/40 to-cyan-50/30 dark:via-purple-950/30 dark:to-cyan-950/20" />
            <div className="relative">
              <Blogs />
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}