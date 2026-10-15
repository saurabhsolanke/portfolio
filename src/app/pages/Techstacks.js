'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

export default function Techstacks() {
  const [technologies, setTechnologies] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchTechstacks();
  }, []);

  const fetchTechstacks = async () => {
    try {
      const response = await fetch('/api/techstacks');
      if (response.ok) {
        const data = await response.json();
        setTechnologies(data);
      } else {
        throw new Error('Failed to fetch');
      }
    } catch (error) {
      console.error('Error fetching techstacks:', error);
      setTechnologies({
        "Frontend": [
          { id: 1, name: "React", icon: "/images/react-svgrepo-com.svg", level: 90 },
          { id: 2, name: "Next.js", icon: "/images/nextjs.svg", level: 88 },
          { id: 3, name: "TypeScript", icon: "/images/typescript.svg", level: 85 },
          { id: 4, name: "Angular", icon: "/images/Angular1.svg", level: 92 },
          { id: 5, name: "Nuxt.js", icon: "/images/nuxtjs.svg", level: 88 },
          { id: 6, name: "Vue.js", icon: "/images/vue.svg", level: 84 },
          { id: 7, name: "Tailwind CSS", icon: "/images/tailwind.svg", level: 95 }
        ],
        "Backend": [
          { id: 8, name: "Node.js", icon: "/images/Node.js.svg", level: 85 },
          { id: 9, name: "Express", icon: "/images/Express.svg", level: 82 },
          { id: 10, name: "MongoDB", icon: "/images/MongoDB.svg", level: 80 },
          { id: 11, name: "PostgreSQL", icon: "/images/PostgresSQL.svg", level: 75 }
        ],
        "Tools & Mobile": [
          { id: 12, name: "Ionic", icon: "/images/ionic.svg", level: 85 },
          { id: 13, name: "Git", icon: "/images/git.svg", level: 90 },
          { id: 14, name: "Vercel", icon: "/images/Vercel.svg", level: 88 },
          { id: 15, name: "Firebase", icon: "/images/Firebase.svg", level: 80 }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const categories = ["All", ...Object.keys(technologies)];

  const getFilteredTechs = () => {
    if (activeCategory === "All") {
      const all = [];
      Object.entries(technologies).forEach(([cat, list]) => {
        list.forEach(item => {
          all.push({ ...item, category: cat });
        });
      });
      return all;
    }
    return (technologies[activeCategory] || []).map(item => ({
      ...item,
      category: activeCategory
    }));
  };

  const filteredList = getFilteredTechs();

  return (
    <section id="skills" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div>
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">SKILLS</span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mt-2">
            Skills &amp; tools I use
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-400">
          Daily driver stack &amp; developer ecosystem.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
              activeCategory === cat
                ? "bg-zinc-800 text-white border border-zinc-700 shadow-sm"
                : "bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {loading ? (
            [...Array(12)].map((_, i) => (
              <div key={i} className="h-28 rounded-2xl bg-zinc-900/60 border border-zinc-800/60 animate-pulse" />
            ))
          ) : (
            filteredList.map((tech) => (
              <motion.div
                layout
                key={tech.id || tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group relative p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200 flex flex-col items-center justify-center text-center hover:-translate-y-0.5"
              >
                <div className="relative w-10 h-10 mb-3 p-1.5 rounded-xl bg-zinc-800/70 border border-zinc-700/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                <span className="font-semibold text-xs text-zinc-200 mb-0.5 tracking-tight">
                  {tech.name}
                </span>

                <span className="text-[10px] font-mono text-zinc-500">
                  {tech.category}
                </span>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
