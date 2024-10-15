'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Techstacks from "./components/Techstacks";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";

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
      <main className="flex flex-col min-h-screen container bg-white">
        <div className="w-full h-full flex justify-center">
          {/* <Navbar toggleTheme={toggleTheme} theme={theme}></Navbar> */}
        </div>
        <section className="h-full bg-white-700 mt-5 p-2">
          <Landing></Landing>
        </section>
        <section className="h-full bg-white-500 p-2">
          <Techstacks></Techstacks>
        </section>
        <section className="h-full bg-white-300 p-2">
          <Projects></Projects>
        </section>
         <section className="h-full bg-black-200 p-2">
          <Footer></Footer>
         </section>
      </main>
    </div>
  );
}
