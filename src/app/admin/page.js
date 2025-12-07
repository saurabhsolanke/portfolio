'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiPaletteLine, RiMoonLine, RiSunLine, RiCheckLine, RiArrowLeftLine } from 'react-icons/ri';
import Link from 'next/link';

export default function AdminTheme() {
  const [darkMode, setDarkMode] = useState('light');
  const [colorTheme, setColorTheme] = useState('luxury');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('theme') || 'light';
    const savedColorTheme = localStorage.getItem('colorTheme') || 'luxury';
    
    setDarkMode(savedDarkMode);
    setColorTheme(savedColorTheme);
    
    if (savedDarkMode === 'dark') {
      document.documentElement.classList.add('dark');
    }
    
    document.documentElement.setAttribute('data-color-theme', savedColorTheme);
  }, []);

  const handleDarkModeToggle = () => {
    const newTheme = darkMode === 'light' ? 'dark' : 'light';
    setDarkMode(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
    showSavedMessage();
  };

  const handleColorThemeChange = (theme) => {
    setColorTheme(theme);
    document.documentElement.setAttribute('data-color-theme', theme);
    localStorage.setItem('colorTheme', theme);
    showSavedMessage();
  };

  const showSavedMessage = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const themes = [
    {
      id: 'luxury',
      name: 'Luxury Green',
      description: 'Sophisticated green palette with natural elegance',
      colors: ['#0D2B1D', '#345635', '#6B8F71', '#AEC3B0', '#E3EFD3'],
      gradient: 'from-luxury-darkest via-luxury-sage to-luxury-cream'
    },
    {
      id: 'corporate',
      name: 'Corporate Blue',
      description: 'Professional blue-gray with gold accents',
      colors: ['#2E4053', '#AAB7B8', '#BFC9CA', '#D5D8DC', '#F8F9FA'],
      gradient: 'from-luxury-darkest via-luxury-sage to-luxury-mint',
      accentColor: '#F1C40F'
    }
  ];

  return (
    <div className={`${darkMode} min-h-screen`}>
      <div className="min-h-screen bg-gradient-to-br from-luxury-cream via-white to-luxury-cream dark:from-luxury-darkest dark:via-luxury-dark/40 dark:to-luxury-darkest transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-luxury-dark dark:text-luxury-mint hover:text-luxury-sage dark:hover:text-luxury-cream transition-colors mb-6"
            >
              <RiArrowLeftLine className="w-5 h-5" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-luxury-sage to-luxury-mint rounded-2xl">
                <RiPaletteLine className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-luxury-dark via-luxury-sage to-luxury-mint">
                  Theme Settings
                </h1>
                <p className="text-luxury-dark/80 dark:text-luxury-mint/80 mt-1">
                  Customize your portfolio appearance
                </p>
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="bg-luxury-cream/60 dark:bg-luxury-dark/60 backdrop-blur-xl rounded-3xl border border-luxury-mint/30 dark:border-luxury-sage/30 p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-luxury-darkest dark:text-luxury-cream mb-2">
                    Dark Mode
                  </h2>
                  <p className="text-luxury-dark/80 dark:text-luxury-mint/80">
                    Switch between light and dark appearance
                  </p>
                </div>
                
                <button
                  onClick={handleDarkModeToggle}
                  className={`relative w-20 h-10 rounded-full transition-all duration-300 ${
                    darkMode === 'dark' 
                      ? 'bg-luxury-sage' 
                      : 'bg-luxury-mint/50'
                  }`}
                >
                  <motion.div
                    className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                    animate={{
                      x: darkMode === 'dark' ? 40 : 0
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    {darkMode === 'dark' ? (
                      <RiMoonLine className="w-5 h-5 text-luxury-darkest" />
                    ) : (
                      <RiSunLine className="w-5 h-5 text-luxury-sage" />
                    )}
                  </motion.div>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Color Theme Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-luxury-darkest dark:text-luxury-cream mb-6">
              Color Themes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {themes.map((theme, index) => (
                <motion.div
                  key={theme.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={`relative cursor-pointer group`}
                  onClick={() => handleColorThemeChange(theme.id)}
                >
                  <div className={`
                    bg-luxury-cream/60 dark:bg-luxury-dark/60 backdrop-blur-xl rounded-3xl 
                    border-2 transition-all duration-300 overflow-hidden shadow-xl
                    ${colorTheme === theme.id 
                      ? 'border-luxury-sage dark:border-luxury-mint shadow-2xl' 
                      : 'border-luxury-mint/30 dark:border-luxury-sage/30 hover:border-luxury-sage/50 dark:hover:border-luxury-mint/50'
                    }
                  `}>
                    {/* Selected Badge */}
                    {colorTheme === theme.id && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-luxury-sage dark:bg-luxury-mint text-white rounded-full p-2">
                          <RiCheckLine className="w-5 h-5" />
                        </div>
                      </div>
                    )}

                    {/* Gradient Preview */}
                    <div className={`h-32 bg-gradient-to-r ${theme.gradient} opacity-80`} />

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-luxury-darkest dark:text-luxury-cream mb-2">
                        {theme.name}
                      </h3>
                      <p className="text-luxury-dark/80 dark:text-luxury-mint/80 mb-4">
                        {theme.description}
                      </p>

                      {/* Color Swatches */}
                      <div className="flex flex-wrap gap-2">
                        {theme.colors.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 rounded-lg shadow-md border-2 border-white/50 dark:border-black/30"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                        {theme.accentColor && (
                          <div
                            className="w-10 h-10 rounded-lg shadow-md border-2 border-white/50 dark:border-black/30 ring-2 ring-offset-2 ring-luxury-sage"
                            style={{ backgroundColor: theme.accentColor }}
                            title={`${theme.accentColor} (Accent)`}
                          />
                        )}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-luxury-sage/5 to-luxury-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Saved Message */}
          {saved && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8 bg-luxury-sage dark:bg-luxury-mint text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2"
            >
              <RiCheckLine className="w-5 h-5" />
              <span className="font-medium">Settings saved!</span>
            </motion.div>
          )}

          {/* Preview Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-luxury-cream/40 dark:bg-luxury-dark/40 backdrop-blur-xl rounded-2xl border border-luxury-mint/30 dark:border-luxury-sage/30 p-6"
          >
            <p className="text-sm text-luxury-dark/80 dark:text-luxury-mint/80 text-center">
              💡 <strong>Tip:</strong> Theme changes are saved automatically and applied instantly across your entire portfolio. 
              Colors update dynamically without needing a page refresh!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

