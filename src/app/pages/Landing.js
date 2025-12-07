import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowDown } from 'react-icons/hi';

export default function Landing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateMovement = (x, y, factor = 20) => ({
    transform: `translate(${(mousePosition.x - x) / factor}px, ${(mousePosition.y - y) / factor}px)`
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Enhanced Background with Minimal Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs - Subtle Gray */}
        <div
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-gray-200/20 dark:bg-gray-800/20 rounded-full blur-3xl animate-pulse"
          style={{
            ...calculateMovement(100, 100, 40),
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-gray-300/20 dark:bg-gray-700/20 rounded-full blur-3xl animate-pulse"
          style={{
            ...calculateMovement(500, 500, 40),
            animationDelay: '2s',
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />
        <div
          className="absolute top-[50%] left-[50%] w-[400px] h-[400px] bg-gray-400/10 dark:bg-gray-600/10 rounded-full blur-3xl"
          style={{
            ...calculateMovement(300, 300, 50),
            animation: 'float 15s ease-in-out infinite'
          }}
        />

        {/* Glass Overlay */}

      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Profile Image with Glass Effect */}
          <motion.div
            className="relative w-40 h-40 mx-auto mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 dark:from-black/20 to-transparent" />
              <Image
                src="/images/IMG_9063 2.jpeg"
                alt="Saurabh Solanke"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight text-black dark:text-white">
                Saurabh Solanke
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative inline-block"
            >
              <div className="absolute inset-0 bg-gray-200/30 dark:bg-gray-800/30 blur-xl rounded-full" />
              <p className="relative text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 px-6 py-3">
                Full Stack Developer & UI/UX Enthusiast
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl" />
                <p className="relative text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed p-8">
                  Software Engineer with 3+ years of experience, specializing in <span className="font-semibold text-black dark:text-white">JavaScript</span>, <span className="font-semibold text-black dark:text-white">TypeScript</span>, <span className="font-semibold text-black dark:text-white">Angular</span>, <span className="font-semibold text-black dark:text-white">Vue</span>, and <span className="font-semibold text-black dark:text-white">React</span>. Passionate about building responsive web applications with exceptional user experiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Social Links with Glass Effect */}
          <motion.div
            className="flex justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <SocialLink href="https://www.linkedin.com/in/saurabh-solanke/" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink href="https://github.com/saurabhsolanke" icon={<FaGithub />} label="GitHub" />
            <SocialLink href="https://stackoverflow.com/users/11864453/saurabh-solanke" icon={<FaTwitter />} label="Twitter" />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#techstack"
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1 },
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
          >
            {/* <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Scroll to explore</span>
              <HiArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </div> */}
          </motion.a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
      `}</style>
    </div>
  )
}

// Social Link Component with Glass Effect
const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative">
      {/* Glass background */}
      <div className="absolute inset-0 bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg group-hover:shadow-2xl transition-all duration-300" />

      {/* Icon */}
      <div className="relative w-14 h-14 flex items-center justify-center text-2xl text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
        {icon}
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gray-200/30 dark:bg-gray-800/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
    </div>

    {/* Tooltip */}
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
        {label}
      </span>
    </div>
  </motion.a>
);