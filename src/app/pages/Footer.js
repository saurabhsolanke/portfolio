'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaStackOverflow, FaMedium, FaDev } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineClipboardCheck, HiOutlineClipboard, HiOutlineArrowUp } from 'react-icons/hi';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "saurabh.solanke@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/saurabhsolanke" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/saurabh-solanke/" },
    { name: "Stack Overflow", icon: <FaStackOverflow />, url: "https://stackoverflow.com/users/11864453/saurabh-solanke" },
    { name: "Medium", icon: <FaMedium />, url: "https://medium.com/@saurabh.solanke_6285" },
    { name: "Dev.to", icon: <FaDev />, url: "https://dev.to/saurabhsolanke" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        {/* Contact Block */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800/90 p-8 sm:p-12 mb-16 backdrop-blur-md">
          <div className="max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">CONTACT</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2 mb-4">
              Let&apos;s build something great.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal mb-8">
              Open to high-impact full-time engineering roles, technical architecture consulting, and select client collaborations. My inbox is always open.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-medium tracking-wide bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-95"
              >
                <HiOutlineMail className="w-4 h-4" />
                <span>saurabh.solanke@gmail.com</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono text-zinc-300 bg-zinc-800/90 border border-zinc-700/80 hover:bg-zinc-700 transition-all duration-200"
              >
                {copied ? (
                  <>
                    <HiOutlineClipboardCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <HiOutlineClipboard className="w-4 h-4" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-800/60 font-mono text-xs text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="text-zinc-300 font-semibold font-sans">Saurabh Solanke</span>
            <span>•</span>
            <span>Based in Hyderabad &amp; Pune, India</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                title={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <HiOutlineArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
