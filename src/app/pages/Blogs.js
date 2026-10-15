'use client';
import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineClock } from 'react-icons/hi';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { CardSkeleton } from '../components/Skeleton';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      } else {
        throw new Error('Failed to fetch');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setBlogs([
        {
          id: 1,
          title: "How to Install and Use AOS",
          description: "AOS (Animate On Scroll) is a lightweight JavaScript library that makes it easy to add smooth scroll-based animations to your website. In this guide, I walk you through installing AOS in an Angular 15 project.",
          image: "/images/aos.png",
          readUrl: "https://medium.com/p/76b0da09dab1",
          date: "Nov 18, 2024",
          readTime: "5 min read",
          platform: "Medium"
        },
        {
          id: 2,
          title: "SpendTracker: The Personal Finance App That Puts Your Privacy (and Wallet) First",
          description: "Managing money is stressful—especially with apps that treat your financial data as a product. We built SpendTracker because we needed a powerful, simple, and uncompromisingly private financial companion.",
          image: "/images/spendtracker.png",
          readUrl: "https://medium.com/@saurabh.solanke_6285/spendtracker-the-personal-finance-app-that-puts-your-privacy-and-wallet-first-748d9e4e3e4d",
          date: "Nov 19, 2025",
          readTime: "3 min read",
          platform: "Medium"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blogs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div>
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">BLOGS</span>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mt-2">
            Writing &amp; insights
          </h2>
        </div>
        <p className="text-sm font-mono text-zinc-400">
          Tutorials, architecture decisions, and developer notes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {loading ? (
          [...Array(2)].map((_, i) => (
            <CardSkeleton key={i} />
          ))
        ) : (
          blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl bg-zinc-900/60 border border-zinc-800/90 overflow-hidden hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono bg-zinc-950/80 backdrop-blur-md text-zinc-300 border border-zinc-800">
                  {blog.platform}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3 font-mono">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <HiOutlineClock className="w-3.5 h-3.5" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-amber-200/90 transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal line-clamp-3">
                    {blog.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80">
                  <Link
                    href={blog.readUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-amber-300 transition-colors"
                  >
                    <span>Read on {blog.platform}</span>
                    <RiArrowRightUpLine className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))
        )}
      </div>
    </section>
  );
}
