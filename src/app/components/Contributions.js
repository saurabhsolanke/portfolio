import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MacWindow from './MacWindow';
import { HiOutlineCamera, HiOutlineLocationMarker, HiOutlinePencil } from 'react-icons/hi';

export default function Contributions() {
  const contributions = [
    {
      title: "Photography",
      description: "Capturing moments and sharing beauty through Pexels",
      icon: <HiOutlineCamera className="w-8 h-8" />,
      stats: "100+ Photos",
      link: "/photography",
      bgColor: "from-pink-500 to-rose-500"
    },
    {
      title: "Local Guide",
      description: "Contributing to Google Maps with reviews and photos",
      icon: <HiOutlineLocationMarker className="w-8 h-8" />,
      stats: "Level 6 Guide",
      link: "/local-guide",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      title: "Blog Writing",
      description: "Sharing knowledge and experiences on Medium",
      icon: <HiOutlinePencil className="w-8 h-8" />,
      stats: "10+ Articles",
      link: "/blogs",
      bgColor: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="py-20">
      <MacWindow title="More Than Just Code.app">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.link}>
                <div className="group relative overflow-hidden rounded-xl p-6 bg-white/50 dark:bg-zinc-800/50 hover:shadow-xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="mb-4 text-zinc-800 dark:text-zinc-200">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                      {item.description}
                    </p>
                    <span className="text-sm font-medium bg-zinc-100 dark:bg-zinc-700 px-3 py-1 rounded-full">
                      {item.stats}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </MacWindow>
    </div>
  );
} 