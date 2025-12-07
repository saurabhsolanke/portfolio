import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import { CardSkeleton } from '../components/Skeleton';
import Image from 'next/image';
import Link from 'next/link';

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        if (blogs.length > 0) {
            AOS.init({
                duration: 1000,
                once: true,
            });
            checkScrollButtons();
        }
    }, [blogs]);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('/api/blogs');
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
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
                    Latest Writings
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Sharing insights, tutorials, and experiences from the world of web development
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
                    ) : blogs.length === 0 ? (
                        <div className="w-full text-center py-12">
                            <p className="text-gray-600 dark:text-gray-400">No blogs available yet.</p>
                        </div>
                    ) : (
                        blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                className="group relative flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[40vw] snap-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                {/* Glass Card */}
                                <div className="relative bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                                    {/* Blog Image */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 dark:to-black/80 z-10" />
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Platform Badge */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                                {blog.platform}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        {/* Meta Info */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                {blog.date}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                                {blog.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-3 text-black dark:text-white leading-tight">
                                            {blog.title}
                                        </h3>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                                            {blog.description}
                                        </p>

                                        {/* Read Button */}
                                        <Link
                                            href={blog.readUrl}
                                            target="_blank"
                                            className="group/btn inline-flex items-center gap-2 relative overflow-hidden rounded-xl"
                                        >
                                            <div className="absolute inset-0 bg-black dark:bg-white transition-transform duration-300 group-hover/btn:scale-105" />
                                            <div className="relative px-6 py-3 text-white dark:text-black font-semibold flex items-center gap-2">
                                                Read Article
                                                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </Link>
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

