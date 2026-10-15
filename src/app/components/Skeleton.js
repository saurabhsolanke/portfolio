'use client';
import React from 'react';

const Skeleton = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden bg-zinc-200/80 dark:bg-zinc-800/80 rounded-xl ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent" />
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <div className="rounded-3xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 p-6 flex flex-col justify-between h-96">
      <Skeleton className="h-44 w-full rounded-2xl mb-4" />
      <div className="space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="flex gap-2 mt-4">
        <Skeleton className="h-6 w-16 rounded-md" />
        <Skeleton className="h-6 w-20 rounded-md" />
      </div>
    </div>
  );
};

export const TechStackSkeleton = () => {
  return (
    <div className="p-4 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col items-center justify-center h-28">
      <Skeleton className="w-12 h-12 rounded-xl mb-3" />
      <Skeleton className="w-16 h-3 rounded-md" />
    </div>
  );
};

export default Skeleton;
