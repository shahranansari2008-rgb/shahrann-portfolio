import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1e2433] bg-[#08090d] py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand & Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-semibold text-white tracking-tight text-sm">
              SHAHRAN ANSARI
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-400">B.Tech CSE</span>
          </div>
          <p className="text-slate-400">
            Designed & developed with modern React, Tailwind CSS & Framer Motion.
          </p>
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Shahran Ansari. All rights reserved.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/shahranansari2008-rgb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-[#11141c] border border-[#1e2433] text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shahran-ansari-b8524b30a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-[#11141c] border border-[#1e2433] text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://leetcode.com/u/shahranansari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2 rounded-lg bg-[#11141c] border border-[#1e2433] text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
          >
            <Code2 className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#11141c] border border-[#1e2433] text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
        </button>
      </div>
    </footer>
  );
}
