import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import { CardSkeleton } from '../components/Skeleton';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        if (projects.length > 0) {
            AOS.init({
                duration: 1000,
                once: true,
            });
            checkScrollButtons();
        }
    }, [projects]);

    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects');
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            const newScrollLeft = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };



    return (
        <div className="py-20 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white">
                    Featured Projects
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Crafting digital experiences with modern technologies
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative px-4">
                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScrollButtons}
                    className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                    }}
                >
                    {loading ? (
                        // Skeleton Loading State
                        [...Array(3)].map((_, index) => (
                            <CardSkeleton key={index} />
                        ))
                    ) : projects.length === 0 ? (
                        <div className="w-full text-center py-12">
                            <p className="text-gray-600 dark:text-gray-400">No projects available yet.</p>
                        </div>
                    ) : (
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group relative flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[40vw] snap-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Glass Container */}
                                <div className="relative bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                                    {/* Project Image */}
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 dark:to-black/60 z-10" />
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black dark:text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-4 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4">
                                            <Link
                                                href={project.liveUrl}
                                                target="_blank"
                                                className="flex-1 group/btn relative overflow-hidden rounded-xl"
                                            >
                                                <div className="absolute inset-0 bg-black dark:bg-white transition-transform duration-300 group-hover/btn:scale-105" />
                                                <div className="relative px-6 py-3 text-center text-white dark:text-black font-semibold">
                                                    View Live →
                                                </div>
                                            </Link>
                                            <Link
                                                href={project.githubUrl}
                                                target="_blank"
                                                className="flex-1 relative rounded-xl bg-gray-100 dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 px-6 py-3 text-center font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                                            >
                                                View Code
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}