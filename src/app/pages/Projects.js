'use client';
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';
import { CardSkeleton } from '../components/Skeleton';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects');
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        throw new Error('Failed to fetch');
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([
        {
          id: 4,
          title: "TEDxPune Official Platform",
          description: "High-traffic web platform for TEDxPune featuring dynamic speaker lineups, interactive schedules, and secure attendee ticket registration.",
          image: "/images/tedxpune.jpg",
          liveUrl: "https://www.tedxpune.com",
          githubUrl: "#",
          tags: ["Next.js", "React", "Tailwind CSS", "UI/UX"]
        },
        {
          id: 5,
          title: "Dadar Urban Mobile App",
          description: "Community navigation and local services mobile application for Dadar, offering real-time transit routes, directory, and local updates.",
          image: "/images/dadar_app.jpg",
          liveUrl: "#",
          githubUrl: "#",
          tags: ["React Native", "iOS", "Android", "UI/UX"]
        },
        {
          id: 6,
          title: "Fullstack Healthcare Application",
          description: "Clinical workflow analytics and patient scheduling suite featuring HIPAA-compliant data storage and responsive clinical dashboards.",
          image: "/images/medical_app.jpg",
          liveUrl: "#",
          githubUrl: "#",
          tags: ["React", "Node.js", "Fullstack", "Healthcare"]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags || [])))];

  const filteredProjects = selectedTag === "All"
    ? projects
    : projects.filter(p => p.tags && p.tags.includes(selectedTag));

  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div>
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">WORK</span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mt-2">
            Selected projects
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-400">
          Client platforms, production apps &amp; experiments.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedTag === tag
                ? "bg-zinc-800 text-white border border-zinc-700 shadow-sm"
                : "bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800/80 hover:border-zinc-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          [...Array(3)].map((_, i) => (
            <CardSkeleton key={i} />
          ))
        ) : filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-12 text-zinc-500 font-mono text-xs">
            No projects in this category.
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl bg-zinc-900/60 border border-zinc-800/90 overflow-hidden hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {project.liveUrl && project.liveUrl !== '#' && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-zinc-950/80 backdrop-blur-md text-emerald-400 border border-zinc-800 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-amber-200/90 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-xs">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80 font-mono text-xs">
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-200"
                      >
                        <span>Live site</span>
                        <HiOutlineExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <div className="flex-1 py-2 px-4 rounded-xl text-center text-zinc-500 bg-zinc-800/30 border border-zinc-800/60">
                        Client Platform
                      </div>
                    )}

                    {project.githubUrl && project.githubUrl !== '#' ? (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      >
                        <HiOutlineCode className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </Link>
                    ) : (
                      <span className="text-zinc-600 px-2 select-none text-[11px]">
                        {"// NDA"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))
        )}
      </div>
    </section>
  );
}