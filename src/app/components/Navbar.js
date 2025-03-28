import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiAppleFill,
  RiUserLine,
  RiCodeSSlashLine,
  RiCameraLensLine,
  RiMapPin2Line,
  RiArticleLine,
  RiMoonLine,
  RiSunLine,
  RiMenu4Fill,
  RiCloseFill,
  RiWifiLine,
  RiBatteryLine,
  RiSearchLine,
  RiNotification3Line
} from "react-icons/ri";
import Link from "next/link";

const Navbar = ({ toggleTheme, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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
      href: "/about",
      icon: <RiUserLine className="w-4 h-4" />,
      tooltip: "View Profile"
    },
    { 
      name: "Projects", 
      href: "/projects",
      icon: <RiCodeSSlashLine className="w-4 h-4" />,
      tooltip: "Browse Projects"
    },
    { 
      name: "Photography", 
      href: "/photography",
      icon: <RiCameraLensLine className="w-4 h-4" />,
      tooltip: "View Photography"
    },
    { 
      name: "Local Guide", 
      href: "/local-guide",
      icon: <RiMapPin2Line className="w-4 h-4" />,
      tooltip: "Local Guide Contributions"
    },
    { 
      name: "Blogs", 
      href: "/blogs",
      icon: <RiArticleLine className="w-4 h-4" />,
      tooltip: "Read Articles"
    }
  ];

  return (
    <>
      <div 
        className={`fixed w-full top-0 z-50 transition-all duration-300 
          ${isScrolled ? 'bg-white/60 dark:bg-black/60' : 'bg-white/40 dark:bg-black/40'} 
          backdrop-blur-xl border-b border-white/10`}
      >
        <div className="h-7 flex items-center px-3">
          <nav className="w-full flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              {/* Apple Logo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center"
              >
                <RiAppleFill className="w-4 h-4 text-black dark:text-white" />
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onHoverStart={() => setHoveredItem(item.name)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className="macos-button px-2 py-0.5 rounded-md 
                        text-xs font-medium flex items-center space-x-1.5
                        text-black/80 dark:text-white/80 
                        hover:bg-white/10 dark:hover:bg-white/10"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                    
                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredItem === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                            px-2 py-1 text-xs font-medium text-white 
                            bg-black/80 backdrop-blur-sm rounded-md whitespace-nowrap"
                        >
                          {item.tooltip}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-3">
                <RiWifiLine className="w-4 h-4" />
                <RiBatteryLine className="w-4 h-4" />
                <RiSearchLine className="w-4 h-4" />
                <RiNotification3Line className="w-4 h-4" />
                
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-1 rounded-md hover:bg-white/10"
                >
                  {theme === 'dark' ? 
                    <RiSunLine className="w-4 h-4" /> : 
                    <RiMoonLine className="w-4 h-4" />
                  }
                </button>
              </div>

              {/* Time */}
              <span className="text-xs">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour: 'numeric', 
                  minute: '2-digit'
                })}
              </span>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-1 rounded-md hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <RiCloseFill className="w-4 h-4" />
                ) : (
                  <RiMenu4Fill className="w-4 h-4" />
                )}
              </motion.button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-7 p-4 bg-white/60 dark:bg-black/60 
              backdrop-blur-xl border-b border-white/10 md:hidden z-50"
          >
            {/* Mobile menu content */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
