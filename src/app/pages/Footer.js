import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "/images/linkedin.svg",
            url: "https://www.linkedin.com/in/saurabh-solanke/"
        },
        {
            name: "GitHub",
            icon: "/images/github.svg",
            url: "https://github.com/saurabhsolanke"
        },
        {
            name: "Stack Overflow",
            icon: "/images/stack-overflow.svg",
            url: "https://stackoverflow.com/users/11864453/saurabh-solanke"
        },
        {
            name: "Medium",
            icon: "/images/medium.jpeg",
            url: "https://medium.com/@saurabh.solanke_6285"
        },
        {
            name: "Dev.to",
            icon: "/images/dev-black.png",
            url: "https://dev.to/saurabhsolanke"
        }
    ];

    return (
        <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
            {/* Animated Wave SVG at Top */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden" style={{ height: '100px', marginTop: '-1px' }}>
                <svg className="absolute w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <motion.path
                        d="M0,50 C320,80 420,20 720,50 C1020,80 1120,20 1440,50 L1440,0 L0,0 Z"
                        className="fill-blue-100/30 dark:fill-blue-900/20"
                        initial={{ d: "M0,50 C320,80 420,20 720,50 C1020,80 1120,20 1440,50 L1440,0 L0,0 Z" }}
                        animate={{
                            d: [
                                "M0,50 C320,80 420,20 720,50 C1020,80 1120,20 1440,50 L1440,0 L0,0 Z",
                                "M0,50 C320,20 420,80 720,50 C1020,20 1120,80 1440,50 L1440,0 L0,0 Z",
                                "M0,50 C320,80 420,20 720,50 C1020,80 1120,20 1440,50 L1440,0 L0,0 Z"
                            ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M0,30 C360,60 540,10 720,30 C900,50 1080,10 1440,30 L1440,0 L0,0 Z"
                        className="fill-purple-100/20 dark:fill-purple-900/15"
                        initial={{ d: "M0,30 C360,60 540,10 720,30 C900,50 1080,10 1440,30 L1440,0 L0,0 Z" }}
                        animate={{
                            d: [
                                "M0,30 C360,60 540,10 720,30 C900,50 1080,10 1440,30 L1440,0 L0,0 Z",
                                "M0,30 C360,10 540,60 720,30 C900,10 1080,60 1440,30 L1440,0 L0,0 Z",
                                "M0,30 C360,60 540,10 720,30 C900,50 1080,10 1440,30 L1440,0 L0,0 Z"
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                </svg>
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Left Circle */}
                <motion.svg
                    className="absolute top-10 left-10 w-20 h-20 opacity-20 dark:opacity-10"
                    viewBox="0 0 100 100"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400 dark:text-blue-600" />
                    <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400 dark:text-purple-600" />
                </motion.svg>

                {/* Top Right Triangle */}
                <motion.svg
                    className="absolute top-20 right-20 w-16 h-16 opacity-20 dark:opacity-10"
                    viewBox="0 0 100 100"
                    animate={{
                        rotate: -360,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400 dark:text-indigo-600" />
                </motion.svg>

                {/* Bottom Left Square */}
                <motion.svg
                    className="absolute bottom-20 left-16 w-14 h-14 opacity-20 dark:opacity-10"
                    viewBox="0 0 100 100"
                    animate={{
                        rotate: 360,
                        x: [0, 10, 0]
                    }}
                    transition={{
                        rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                        x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400 dark:text-pink-600" />
                    <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400 dark:text-purple-600" />
                </motion.svg>

                {/* Bottom Right Hexagon */}
                <motion.svg
                    className="absolute bottom-16 right-24 w-18 h-18 opacity-20 dark:opacity-10"
                    viewBox="0 0 100 100"
                    animate={{
                        rotate: -360,
                        scale: [1, 1.15, 1]
                    }}
                    transition={{
                        rotate: { duration: 22, repeat: Infinity, ease: "linear" },
                        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400 dark:text-cyan-600" />
                </motion.svg>

                {/* Center Decorative Stars */}
                <motion.svg
                    className="absolute top-1/2 left-1/4 w-8 h-8 opacity-15 dark:opacity-8"
                    viewBox="0 0 100 100"
                    animate={{
                        rotate: 360,
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{
                        rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" fill="currentColor" className="text-yellow-400 dark:text-yellow-600" />
                </motion.svg>

                <motion.svg
                    className="absolute top-1/3 right-1/4 w-6 h-6 opacity-15 dark:opacity-8"
                    viewBox="0 0 100 100"
                    animate={{
                        rotate: -360,
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                >
                    <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" fill="currentColor" className="text-orange-400 dark:text-orange-600" />
                </motion.svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Footer Content */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
                            Let's Connect
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Feel free to reach out for collaborations or just a friendly chat
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center gap-4 mb-8"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="relative w-12 h-12 bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src={link.icon}
                                        alt={link.name}
                                        width={24}
                                        height={24}
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl" />
                                </div>

                                {/* Tooltip */}
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {link.name}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Decorative Divider with SVG */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200 dark:border-gray-800" />
                    </div>
                    <div className="relative flex justify-center">
                        <div className="bg-white dark:bg-black px-4">
                            <svg className="w-6 h-6 text-gray-400 dark:text-gray-600" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="8" fill="currentColor" />
                                <circle cx="20" cy="50" r="4" fill="currentColor" opacity="0.5" />
                                <circle cx="80" cy="50" r="4" fill="currentColor" opacity="0.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Saurabh Solanke. Crafted with{" "}
                        <span className="text-gray-800 dark:text-gray-200">♥</span> using Next.js
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                        All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
