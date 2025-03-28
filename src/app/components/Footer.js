import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: "/images/linkedin.svg",
            url: "https://www.linkedin.com/in/saurabh-solanke/",
            color: "hover:bg-[#0077B5]"
        },
        {
            name: "GitHub",
            icon: "/images/github.svg",
            url: "https://github.com/saurabhsolanke",
            color: "hover:bg-[#333]"
        },
        {
            name: "Stack Overflow",
            icon: "/images/stack-overflow.svg",
            url: "https://stackoverflow.com/users/11864453/saurabh-solanke",
            color: "hover:bg-[#F48024]"
        },
        {
            name: "Medium",
            icon: "/images/medium.svg",
            url: "https://medium.com/@saurabh.solanke_6285",
            color: "hover:bg-[#000000]"
        },
        {
            name: "Dev.to",
            icon: "/images/dev.svg",
            url: "https://dev.to/saurabhsolanke",
            color: "hover:bg-[#0A0A0A]"
        }
    ];

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50">
            {/* Dock Container */}
            <div className="flex justify-center mb-4">
                <motion.div 
                    className="flex items-end gap-2 px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative flex items-center justify-center rounded-xl 
                                ${hoveredIndex === index ? 'z-10' : 'z-0'}
                                ${link.color}`}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            animate={{
                                scale: hoveredIndex === index ? 1.5 : 1,
                                y: hoveredIndex === index ? -12 : 0,
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {/* Icon Container */}
                            <div className={`relative w-12 h-12 p-2 rounded-xl transition-all duration-200
                                bg-zinc-100 dark:bg-zinc-800 
                                ${hoveredIndex === index ? 'opacity-100 shadow-xl' : 'opacity-90'}
                                group hover:bg-gradient-to-b from-white/10 to-white/5 dark:from-white/5 dark:to-transparent`}
                            >
                                {/* Icon */}
                                <Image
                                    src={link.icon}
                                    alt={link.name}
                                    fill
                                    className={`p-2 object-contain transition-all duration-200 
                                        ${hoveredIndex === index ? 'scale-110' : 'scale-100'}
                                        group-hover:filter group-hover:brightness-110`}
                                />

                                {/* Tooltip */}
                                <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 
                                    px-3 py-1 rounded-md text-sm font-medium text-white 
                                    bg-black/80 backdrop-blur-sm
                                    transition-all duration-200
                                    ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                                >
                                    {link.name}
                                </div>
                            </div>

                            {/* Dot Indicator */}
                            <div className={`absolute -bottom-2 w-1 h-1 rounded-full bg-zinc-400
                                transition-all duration-200
                                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} 
                            />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Copyright Text */}
            <div className="text-center pb-2">
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    © 2024 Saurabh Solanke. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

