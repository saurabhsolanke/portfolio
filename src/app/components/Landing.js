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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 blur-3xl opacity-50 transform -rotate-12" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      {/* Floating Elements */}
      <div 
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={calculateMovement(100, 100, 30)}
      />
      <div 
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 dark:opacity-30"
        style={calculateMovement(500, 500, 30)}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 animate-pulse" />
            <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-zinc-800">
              <Image
                src="/images/IMG_9063 2.jpeg"
                alt="Your Alt Text"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Saurabh Solanke
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>

            <motion.p 
              className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I am Saurabh Solanke, a Software Engineer with 2.5+ years of experience, skilled in Javascript, Typescript, Angular, ReactJs, and version control tools like Git/GitLab, with exposure to Django and Figma. I have worked on both projects and products, focusing on building responsive web applications and ensuring smooth collaboration through efficient code management.
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <SocialLink href="https://www.linkedin.com/in/saurabh-solanke/" icon={<FaLinkedin />} />
            <SocialLink href="https://github.com/saurabhsolanke" icon={<FaGithub />} />
            <SocialLink href="https://stackoverflow.com/users/11864453/saurabh-solanke" icon={<FaTwitter />} />
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
          >
            <HiArrowDown className="w-6 h-6 text-zinc-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

// Social Link Component
const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="w-10 h-10 flex items-center justify-center text-xl">
      {icon}
    </div>
  </motion.a>
);