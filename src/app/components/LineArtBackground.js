'use client';
import React from 'react';

const LineArtBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Dot Grid with Radial Mask */}
      <div 
        className="absolute inset-0 dot-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-70 dark:opacity-40" 
      />

      {/* Ambient Top Glow */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-blue-100/40 via-purple-100/20 to-transparent dark:from-blue-950/20 dark:via-purple-950/10 dark:to-transparent rounded-full blur-3xl pointer-events-none"
      />
    </div>
  );
};

export default LineArtBackground;
