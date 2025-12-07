import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TechStackSkeleton } from '../components/Skeleton';
import Image from 'next/image';

export default function Techstacks() {
    const [technologies, setTechnologies] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTechstacks();
    }, []);

    useEffect(() => {
        if (Object.keys(technologies).length > 0) {
            AOS.init({
                duration: 1000,
                once: true,
            });
        }
    }, [technologies]);

    const fetchTechstacks = async () => {
        try {
            const response = await fetch('/api/techstacks');
            const data = await response.json();
            setTechnologies(data);
        } catch (error) {
            console.error('Error fetching techstacks:', error);
        } finally {
            setLoading(false);
        }
    };

    // QWERTY Layout Definition (for desktop)
    const qwertyRows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    ];

    // Numeric Keypad Layout (for mobile) - Old phone style
    const keypadRows = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ];

    // Phone keypad letter groupings
    const keypadLetters = {
        '1': '',
        '2': 'ABC',
        '3': 'DEF',
        '4': 'GHI',
        '5': 'JKL',
        '6': 'MNO',
        '7': 'PQRS',
        '8': 'TUV',
        '9': 'WXYZ'
    };

    // Get technologies grouped by keypad number
    const getTechsByKeypadNumber = (number) => {
        const groupings = {
            '1': ['A', 'B', 'C'],  // ABC
            '2': ['D', 'E', 'F'],  // DEF
            '3': ['G', 'H', 'I'],  // GHI
            '4': ['J', 'K', 'L'],  // JKL
            '5': ['M', 'N', 'O'],  // MNO
            '6': ['P', 'Q', 'R'],  // PQRS
            '7': ['S', 'T', 'U'],  // TUV
            '8': ['V', 'W', 'X'],  // WXYZ
            '9': ['Y', 'Z']
        };

        const letters = groupings[number] || [];
        return letters.map(letter => getTechByKey(letter)).filter(tech => tech !== null);
    };

    // Mapping keys to technologies
    const getTechByKey = (key) => {
        const keyMap = {
            // Letter mappings for desktop QWERTY
            'A': { name: 'Angular', icon: '/images/Angular1.svg' },
            'B': { name: 'Bootstrap', icon: '/images/bootstrap.svg' },
            'C': { name: 'CSS', icon: '/images/css.svg' },
            'D': { name: 'Django', icon: '/images/django.svg' },
            'E': { name: 'Express', icon: '/images/Express.svg' },
            'F': { name: 'Firebase', icon: '/images/Firebase.svg' },
            'G': { name: 'Git', icon: '/images/git.svg' },
            'H': { name: 'Heroku', icon: '/images/Heroku.svg' },
            'I': { name: 'Ionic', icon: '/images/ionic.svg' },
            'J': { name: 'JavaScript', icon: '/images/js-svgrepo-com.svg' },
            'K': { name: 'Kubernetics', icon: '/images/kubernete.svg' },
            'L': { name: 'Laravel', icon: '/images/laravel.svg' },
            'M': { name: 'MongoDB', icon: '/images/MongoDB.svg' },
            'N': { name: 'Next.js', icon: '/images/nextjs.svg' },
            'O': { name: 'Oracle', icon: '/images/oracle.svg' },
            'P': { name: 'PostgreSQL', icon: '/images/PostgresSQL.svg' },
            'Q': { name: 'Query', icon: '/images/q.png' },
            'R': { name: 'React', icon: '/images/react-svgrepo-com.svg' },
            'S': { name: 'Swift', icon: '/images/swift.svg' },
            'T': { name: 'Tailwind', icon: '/images/tailwind.svg' },
            'U': { name: 'Ubuntu', icon: '/images/ubuntu.svg' },
            'V': { name: 'Vue.js', icon: '/images/vue.svg' },
            'W': { name: 'Wordpress', icon: '/images/wordpress.svg' },
            'X': { name: 'Xampp', icon: '/images/xampp.svg' },
            'Y': { name: 'Yarn', icon: '/images/yarn.svg' },
            'Z': { name: 'Zustland', icon: '/images/zustland.svg' }
        };

        return keyMap[key] || null;
    };

    return (
        <div className="py-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white">
                    Tech Stack
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Tools and technologies I use to bring ideas to life
                </p>
            </div>

            <div className="space-y-12 pb-8">
                {loading ? (
                    // Skeleton Loading State - Matches QWERTY Layout
                    <>
                        {/* Mobile Skeleton */}
                        <div className="md:hidden mx-auto px-2 max-w-md">
                            <div className="bg-gray-200/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-2 shadow-2xl">
                                <div className="flex justify-center gap-1.5 mb-2">
                                    {[...Array(10)].map((_, i) => <TechStackSkeleton key={i} mobile />)}
                                </div>
                                <div className="flex justify-center gap-1.5 mb-2" style={{ paddingLeft: '1rem' }}>
                                    {[...Array(9)].map((_, i) => <TechStackSkeleton key={i} mobile />)}
                                </div>
                                <div className="flex justify-center gap-1.5" style={{ paddingLeft: '2rem' }}>
                                    {[...Array(7)].map((_, i) => <TechStackSkeleton key={i} mobile />)}
                                </div>
                            </div>
                        </div>

                        {/* Desktop Skeleton */}
                        <div className="hidden md:block max-w-7xl mx-auto px-4">
                            <div className="flex justify-center gap-8 mb-8">
                                {[...Array(10)].map((_, i) => <TechStackSkeleton key={i} />)}
                            </div>
                            <div className="flex justify-center gap-8 mb-8" style={{ paddingLeft: '3rem' }}>
                                {[...Array(9)].map((_, i) => <TechStackSkeleton key={i} />)}
                            </div>
                            <div className="flex justify-center gap-8" style={{ paddingLeft: '6rem' }}>
                                {[...Array(7)].map((_, i) => <TechStackSkeleton key={i} />)}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Mobile Numeric Keypad View */}
                        <div className="md:hidden">
                            {/* Keypad Container */}
                            <div className="mx-auto px-4 max-w-sm">
                                {/* Keypad Background - Old phone style */}
                                <div className="bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 shadow-2xl border-4 border-gray-400/50 dark:border-gray-700/50">
                                    {keypadRows.map((row, rowIndex) => (
                                        <div
                                            key={rowIndex}
                                            className="flex justify-center gap-4 mb-4 last:mb-0"
                                        >
                                            {row.map((number, keyIndex) => {
                                                const techs = getTechsByKeypadNumber(number);
                                                const letters = keypadLetters[number];
                                                return (
                                                    <div
                                                        key={number}
                                                        className="group relative overflow-visible"
                                                        data-aos="flip-up"
                                                        data-aos-delay={(rowIndex * 3 + keyIndex) * 100}
                                                    >
                                                        {/* Keypad Button */}
                                                        <div className="relative w-20 h-20 sm:w-24 sm:h-24
                                                            bg-gradient-to-b from-white to-gray-100
                                                            dark:from-gray-700 dark:to-gray-800
                                                            rounded-2xl
                                                            shadow-lg
                                                            border-2 border-gray-200 dark:border-gray-600
                                                            active:scale-95 active:shadow-md
                                                            cursor-pointer
                                                            transition-all duration-150 ease-out
                                                            flex flex-col items-center justify-center
                                                            hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500
                                                            p-2">

                                                            {/* Number and Letters Label */}
                                                            {/* <div className="absolute top-1 left-2 flex items-baseline gap-0.5">
                                                                <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
                                                                    {number}
                                                                </span>
                                                                {letters && (
                                                                    <span className="text-[8px] font-semibold text-gray-500 dark:text-gray-400">
                                                                        {letters}
                                                                    </span>
                                                                )}
                                                            </div> */}

                                                            {/* Tech Icons Grid */}
                                                            {techs.length > 0 && (
                                                                <div className={`grid gap-1 mt-3 ${techs.length === 1 ? 'grid-cols-1' :
                                                                    techs.length === 2 ? 'grid-cols-2' :
                                                                        techs.length === 3 ? 'grid-cols-3' :
                                                                            'grid-cols-2'
                                                                    }`}>
                                                                    {techs.map((tech, idx) => (
                                                                        <div
                                                                            key={idx}
                                                                            className="relative w-6 h-6 sm:w-7 sm:h-7 group-active:scale-90 transition-transform duration-150"
                                                                        >
                                                                            <Image
                                                                                src={tech.icon}
                                                                                alt={tech.name}
                                                                                fill
                                                                                className="object-contain drop-shadow-sm"
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Mobile Tooltip - Shows all tech names on tap */}
                                                        {techs.length > 0 && (
                                                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 
                                                                opacity-0 group-active:opacity-100 
                                                                transition-opacity duration-150 
                                                                pointer-events-none z-[9999] whitespace-nowrap">
                                                                <div className="bg-black/90 dark:bg-white/95 text-white dark:text-black text-xs font-medium
                                                                    px-3 py-2 rounded-lg shadow-xl">
                                                                    {techs.map(t => t.name).join(', ')}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>

                                {/* Keypad Info */}
                                <div className="mt-6 text-center" data-aos="fade-up" data-aos-delay="500">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Tap to explore technologies
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop View - Original Design */}
                        <div className="hidden md:block">
                            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center relative overflow-visible">
                                {qwertyRows.map((row, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className="flex justify-center gap-8 mb-8"
                                        style={{
                                            paddingLeft: rowIndex === 1 ? '3rem' : rowIndex === 2 ? '6rem' : '0'
                                        }}
                                    >
                                        {row.map((key, keyIndex) => {
                                            const tech = getTechByKey(key);
                                            return (
                                                <div
                                                    key={key}
                                                    className="group relative overflow-visible"
                                                    data-aos="zoom-in"
                                                    data-aos-delay={(rowIndex * 10 + keyIndex) * 50}
                                                >
                                                    {/* Desktop Keyboard Key */}
                                                    <div className={`relative w-24 h-24 
                                                        bg-gradient-to-br from-gray-100 to-gray-200 
                                                        dark:from-gray-800 dark:to-gray-900
                                                        rounded-xl
                                                        border-t-2 border-l-2 border-white/50 dark:border-gray-600
                                                        border-r-4 border-b-8 border-gray-300 dark:border-black
                                                        shadow-2xl
                                                        ${tech ? 'hover:translate-y-[2px] active:translate-y-[4px] cursor-pointer' : 'opacity-50 cursor-default'}
                                                        transition-all duration-150 ease-out
                                                        overflow-hidden
                                                        flex flex-col items-center justify-center`
                                                    }>
                                                        {/* Key Label (Letter) */}
                                                        {/* <div className="absolute top-2 left-3 text-base font-bold text-gray-400 dark:text-gray-500">
                                                            {key}***
                                                        </div> */}

                                                        {/* Tech Icon */}
                                                        {tech && (
                                                            <div className="relative w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                                                                <Image
                                                                    src={tech.icon}
                                                                    alt={tech.name}
                                                                    fill
                                                                    className="object-contain drop-shadow-lg"
                                                                />
                                                            </div>
                                                        )}

                                                        {/* Empty State for non-tech keys */}
                                                        {!tech && (
                                                            <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700" />
                                                        )}
                                                    </div>

                                                    {/* Desktop Tooltip */}
                                                    {tech && (
                                                        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 
                                                            opacity-0 group-hover:opacity-100 
                                                            transition-opacity duration-200 
                                                            pointer-events-none z-[9999] whitespace-nowrap">
                                                            <div className="bg-black/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-black text-sm font-medium
                                                                px-4 py-2 rounded-lg shadow-xl">
                                                                {tech.name}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
