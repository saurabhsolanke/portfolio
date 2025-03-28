import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import MacWindow from './MacWindow';

export default function Techstacks() {
    const technologies = {
        "Frontend": [
            { name: "React", icon: "/images/react-svgrepo-com.svg", level: 90 },
            { name: "Next.js", icon: "/images/nextjs.svg", level: 85 },
            { name: "TypeScript", icon: "/images/typescript.svg", level: 80 },
            { name: "Angular", icon: "/images/Angular1.svg", level: 95 },
        ],
        "Backend": [
            { name: "Node.js", icon: "/images/Node.js.svg", level: 85 },
            { name: "Express", icon: "/images/Express.svg", level: 80 },
            { name: "MongoDB", icon: "/images/MongoDB.svg", level: 75 },
            { name: "PostgreSQL", icon: "/images/PostgresSQL.svg", level: 70 },
        ],
        "Tools & Others": [
            { name: "Git", icon: "/images/git.svg", level: 90 },
            { name: "Vercel", icon: "/images/Vercel.svg", level: 75 },
            { name: "Heroku", icon: "/images/Heroku.svg", level: 70 },
            { name: "Firebase", icon: "/images/Firebase.svg", level: 80 },
        ]
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <MacWindow title="Tech Stack.app">
            <div className="py-20 max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 gradient-text">
                    Tech Stack
                </h2>
                <p className="text-center text-zinc-600 dark:text-zinc-400 mb-16 max-w-2xl mx-auto">
                    Technologies I work with
                </p>

                <div className="space-y-16">
                    {Object.entries(technologies).map(([category, techs], categoryIndex) => (
                        <div key={category} data-aos="fade-up" data-aos-delay={categoryIndex * 100}>
                            <h3 className="text-2xl font-semibold mb-8 text-center">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                                    {category}
                                </span>
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {techs.map((tech, index) => (
                                    <div
                                        key={tech.name}
                                        className="group relative bg-white dark:bg-zinc-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 glass"
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                    >
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="relative w-16 h-16 mb-2">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain filter dark:invert-0 group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <h4 className="text-lg font-medium text-center">{tech.name}</h4>
                                            
                                            {/* Skill Level Indicator */}
                                            <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-700 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ 
                                                        width: `${tech.level}%`,
                                                        transform: 'translateX(-100%)',
                                                        animation: 'slideRight 1.5s ease-out forwards',
                                                    }}
                                                />
                                            </div>
                                            <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                                {tech.level}% Proficiency
                                            </span>
                                        </div>

                                        {/* Hover Effect Background */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MacWindow>
    );
}

