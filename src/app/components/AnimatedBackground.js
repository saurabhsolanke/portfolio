'use client';
import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive subtle cursor spotlight */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-transform duration-300 ease-out opacity-25 dark:opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 70%)',
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
      />

      {/* Subtle ambient corner glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
    </div>
  );
};

export default AnimatedBackground;
