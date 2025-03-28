import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import Link from 'next/link';
import MacWindow from './MacWindow';

export default function Projects() {
    const projects = [
        {
            title: "Daily Planner",
            description: "A brief description of a Smarter Way to Organize Your Tasks & Notes",
            image: "/images/dailyplanner.png",
            liveUrl: "https://fe25calendar.vercel.app/home",
            githubUrl: "https://github.com/saurabhsolanke/Calendar_25",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            title: "E-commerce",
            description: "Ecommerce boiler plate code to save you time",
            image: "/images/ellipses.png",
            liveUrl: "https://lively-puffpuff-905287.netlify.app/register",
            githubUrl: "https://github.com/saurabhsolanke/twopage-e-commerce",
            tags: ["Next.js", "JavaScript", "Tailwind"]
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <MacWindow title="Projects.app">
            <div className="py-20 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 gradient-text">
                    Featured Projects
                </h2>
                <p className="text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
                    Some of my recent work
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden hover-lift glass"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <Link
                                        href={project.liveUrl}
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200"
                                    >
                                        View Live
                                    </Link>
                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-all duration-200"
                                    >
                                        View Code
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MacWindow>
    );
}