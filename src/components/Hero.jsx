import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, ExternalLink, Sparkles, Terminal, Code } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#11141c] border border-[#1e2433] text-xs font-medium text-slate-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Internship Opportunities</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              SHAHRAN ANSARI
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-medium text-sky-400">
              <span>Computer Science & Engineering Student</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-300">Aspiring Web Developer</span>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl">
            Passionate about building modern web experiences, solving problems through code, and continuously learning new technologies.
          </p>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
            Focused on crafting clean, accessible, and high-performance interfaces with modern frontend technologies and solid programming foundations.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-sky-400 text-slate-950 font-semibold text-sm hover:bg-sky-300 hover:shadow-glow transition-all duration-200 flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-[#11141c] text-slate-200 border border-[#1e2433] hover:border-slate-500 hover:text-white transition-all duration-200 font-medium text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Contact Me</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/shahranansari2008-rgb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-lg bg-[#11141c] border border-[#1e2433] text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/shahran-ansari-b8524b30a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-lg bg-[#11141c] border border-[#1e2433] text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Subtle Animated Developer Terminal / Code Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative group">
            {/* Soft subtle glow behind card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/20 to-blue-600/10 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition duration-500" />

            <div className="relative rounded-xl bg-[#0e1118] border border-[#1e2433] shadow-2xl overflow-hidden text-left font-mono text-xs">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0a0c10] border-b border-[#1e2433]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#f87171]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#fbbf24]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#34d399]/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-sans">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>shahran@developer-env</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#161b26] text-emerald-400 font-sans border border-[#222a3a]">
                    active
                  </span>
                </div>
              </div>

              {/* Card Tabs */}
              <div className="flex items-center border-b border-[#1e2433] bg-[#0c0e14] px-2 text-[11px]">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-2 border-b-2 font-sans transition-colors ${
                    activeTab === 'profile'
                      ? 'border-sky-400 text-sky-300 bg-[#11141c]/50'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  developer.json
                </button>
                <button
                  onClick={() => setActiveTab('philosophy')}
                  className={`px-3 py-2 border-b-2 font-sans transition-colors ${
                    activeTab === 'philosophy'
                      ? 'border-sky-400 text-sky-300 bg-[#11141c]/50'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  mindset.ts
                </button>
              </div>

              {/* Code Content */}
              <div className="p-4 sm:p-5 text-slate-300 space-y-1 leading-relaxed overflow-x-auto min-h-[220px]">
                {activeTab === 'profile' ? (
                  <>
                    <p className="text-slate-500">// Personal developer config</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-sky-300">developer</span> = &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300">"Shahran Ansari"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">degree:</span>{' '}
                      <span className="text-emerald-300">"B.Tech CSE (2025-2029)"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">institution:</span>{' '}
                      <span className="text-emerald-300">"Allenhouse Group Of Institutions (AKTU)"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">focus:</span> [
                      <span className="text-amber-300">"Web Dev"</span>,{' '}
                      <span className="text-amber-300">"JavaScript"</span>,{' '}
                      <span className="text-amber-300">"C++ / DSA"</span>],
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">status:</span>{' '}
                      <span className="text-sky-300">"Ready for Internships"</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">openForCollaboration:</span>{' '}
                      <span className="text-indigo-300">true</span>
                    </p>
                    <p>&#125;;</p>
                  </>
                ) : (
                  <>
                    <p className="text-slate-500">// Engineering philosophy</p>
                    <p>
                      <span className="text-purple-400">interface</span>{' '}
                      <span className="text-sky-300">CodePrinciples</span> &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">clarity:</span>{' '}
                      <span className="text-emerald-300">"Clean, legible structure"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">performance:</span>{' '}
                      <span className="text-emerald-300">"Fast, lightweight assets"</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-slate-400">curiosity:</span>{' '}
                      <span className="text-emerald-300">"Continuous daily learning"</span>;
                    </p>
                    <p>&#125;</p>
                    <p className="pt-2 text-sky-400">
                      <span className="text-purple-400">export default</span> buildModernWeb;
                    </p>
                  </>
                )}

                <div className="pt-2 flex items-center gap-2 text-slate-500 text-[11px]">
                  <span className="w-2 h-3.5 bg-sky-400 animate-pulse inline-block" />
                  <span>terminal ready</span>
                </div>
              </div>

              {/* Bottom Status Bar */}
              <div className="px-4 py-2 bg-[#090b0f] border-t border-[#1e2433] flex items-center justify-between text-[11px] text-slate-400 font-sans">
                <div className="flex items-center gap-2">
                  <Code className="w-3 h-3 text-sky-400" />
                  <span>UTF-8</span>
                </div>
                <div className="text-slate-400">
                  Kanpur, UP, India
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
