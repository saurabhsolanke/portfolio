import React from 'react';
import { motion } from 'framer-motion';

export default function MacWindow({ title, children }) {
  return (
    <motion.div 
      className="bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow-xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Window Header */}
      <div className="h-12 bg-zinc-100/80 dark:bg-zinc-800/80 border-b border-zinc-200/50 dark:border-zinc-700/50 flex items-center px-4">
        {/* Window Controls */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        
        {/* Window Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            {title}
          </span>
        </div>
      </div>

      {/* Window Content */}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
} 