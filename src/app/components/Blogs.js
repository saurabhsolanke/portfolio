import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import Link from 'next/link';
import MacWindow from './MacWindow';

export default function Blogs() {
    const blogs = [
        {
            title: "How to Install and Use AOS",
            description: "AOS (Animate On Scroll) is a lightweight JavaScript library that makes it easy to add smooth, attractive scroll-based animations to your website. In this guide, I’ll walk you through the steps to install and set up AOS in an Angular 15 project, along with troubleshooting tips to resolve common issues.",
            image: "/images/aos.png",
            readUrl: "https://medium.com/p/76b0da09dab1",
            date: "Nov 18, 2024",
            readTime: "5 min read",
            platform: "Medium"
        },
        {
            title: "Angular 19.1 Updates: What’s New?",
            description: "Angular, one of the most popular frameworks for building web applications, has just rolled out version 19.1. This update brings several improvements and changes designed to enhance developer productivity and improve application performance. ",
            image: "/images/angular.png",
            readUrl: "https://medium.com/me/stats/post/61780644b43d",
            date: "Jan 21, 2025",
            readTime: "3 min read",
            platform: "Medium"
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <MacWindow title="Blog Posts.app">
            <div className="py-20 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 gradient-text">
                    Latest Blogs
                </h2>
                <p className="text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
                    Sharing my thoughts and experiences in web development
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden hover-lift glass"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {blog.date}
                                    </span>
                                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {blog.readTime}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                    {blog.description}
                                </p>

                                <Link
                                    href={blog.readUrl}
                                    target="_blank"
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200"
                                >
                                    Read Article
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MacWindow>
    );
} 