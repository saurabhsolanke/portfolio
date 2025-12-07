'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState('light');
  const [colorTheme, setColorTheme] = useState('luxury'); // 'luxury' or 'corporate'

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('theme') || 'light';
    const savedColorTheme = localStorage.getItem('colorTheme') || 'luxury';
    
    setDarkMode(savedDarkMode);
    setColorTheme(savedColorTheme);
    
    if (savedDarkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    document.documentElement.setAttribute('data-color-theme', savedColorTheme);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = darkMode === 'light' ? 'dark' : 'light';
    setDarkMode(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', newTheme);
  };

  const changeColorTheme = (theme) => {
    setColorTheme(theme);
    document.documentElement.setAttribute('data-color-theme', theme);
    localStorage.setItem('colorTheme', theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        colorTheme,
        toggleDarkMode,
        changeColorTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

