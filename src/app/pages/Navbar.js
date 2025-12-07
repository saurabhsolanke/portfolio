import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiUserLine,
  RiCodeSSlashLine,
  RiCameraLensLine,
  RiMapPin2Line,
  RiArticleLine,
  RiMoonLine,
  RiSunLine,
  RiMenu4Fill,
  RiCloseFill,
  RiPaletteLine,
} from "react-icons/ri";
import Link from "next/link";

const Navbar = ({ toggleTheme, theme = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "About",
      href: "#about",
      icon: <RiUserLine className="w-5 h-5" />,
    },
    {
      name: "Tech Stack",
      href: "#techstack",
      icon: <RiCodeSSlashLine className="w-5 h-5" />,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: <RiCodeSSlashLine className="w-5 h-5" />,
    },
    {
      name: "Blogs",
      href: "#blogs",
      icon: <RiArticleLine className="w-5 h-5" />,
    }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full top-0 z-50 transition-all duration-500
          ${isScrolled
            ? 'bg-white/10 dark:bg-black/10 shadow-lg'
            : 'bg-white/10 dark:bg-black/10'
          } 
          backdrop-blur-md border-b border-gray-200 dark:border-gray-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-black dark:bg-white rounded-lg blur-md opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative px-4 py-2 bg-black dark:bg-white rounded-lg">
                    <span className="text-white dark:text-black font-bold text-lg">SS</span>
                  </div>
                </div>
                {/* <span className="hidden sm:block text-xl font-bold text-black dark:text-white">
                  Saurabh
                </span> */}
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-xl text-sm font-medium
                      text-gray-700 dark:text-gray-300
                      hover:text-black dark:hover:text-white
                      hover:bg-gray-100 dark:hover:bg-gray-800
                      transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="hidden lg:inline">{item.icon}</span>
                    <span className="border-white dark:border-black">{item.name}</span>
                  </Link>

                  {/* Active Indicator */}
                  {hoveredItem === item.name && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.div>
              ))}

              {/* Settings Link */}
              {/* <Link
                href="/admin"
                className="ml-2 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  border border-gray-200 dark:border-gray-700
                  transition-all duration-300 group"
                title="Theme Settings"
              >
                <RiPaletteLine className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
              </Link> */}

              {/* Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                onClick={toggleTheme}
                className="ml-2 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800
                  hover:bg-gray-200 dark:hover:bg-gray-700
                  border border-gray-200 dark:border-gray-700
                  transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? (
                  <RiSunLine className="w-5 h-5 text-gray-300 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <RiMoonLine className="w-5 h-5 text-gray-700 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="flex md:hidden items-center space-x-2">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? (
                  <RiSunLine className="w-5 h-5" />
                ) : (
                  <RiMoonLine className="w-5 h-5" />
                )}
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <RiCloseFill className="w-6 h-6" />
                ) : (
                  <RiMenu4Fill className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-800
                bg-white/90 dark:bg-black/90 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl
                        text-gray-700 dark:text-gray-300
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
