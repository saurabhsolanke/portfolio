import React from 'react';

const Skeleton = ({ className }) => {
    return (
        <div className={`relative overflow-hidden bg-gray-200 dark:bg-gray-800 rounded-xl ${className}`}>
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
};

export const CardSkeleton = () => {
    return (
        <div className="flex-none w-[85vw] sm:w-[70vw] md:w-[45vw] lg:w-[40vw] snap-start">
            <div className="relative bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 overflow-hidden h-full p-4">
                {/* Image Skeleton */}
                <Skeleton className="h-64 w-full rounded-2xl mb-8" />

                {/* Content Skeleton */}
                <div className="px-4">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6 mb-6" />

                    {/* Tags Skeleton */}
                    <div className="flex gap-2 mb-6">
                        <Skeleton className="h-8 w-20 rounded-full" />
                        <Skeleton className="h-8 w-24 rounded-full" />
                        <Skeleton className="h-8 w-16 rounded-full" />
                    </div>

                    {/* Buttons Skeleton */}
                    <div className="flex gap-4">
                        <Skeleton className="h-12 flex-1 rounded-xl" />
                        <Skeleton className="h-12 flex-1 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TechStackSkeleton = () => {
    return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gray-800/50 border border-gray-700">
            <Skeleton className="w-full h-full rounded-lg opacity-50" />
        </div>
    );
};

export default Skeleton;
