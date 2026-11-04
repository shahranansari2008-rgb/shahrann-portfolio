import React from 'react';
import { Github, Linkedin, Code2, ArrowUpRight, Globe, Terminal } from 'lucide-react';

const profiles = [
  {
    name: 'GitHub',
    handle: '@shahranansari2008-rgb',
    url: 'https://github.com/shahranansari2008-rgb',
    description: 'Explore open-source repositories, web frontend projects, and experimental codebases.',
    badge: 'Code & Version Control',
    icon: Github,
    color: 'hover:border-slate-500',
  },
  {
    name: 'LeetCode',
    handle: 'shahranansari',
    url: 'https://leetcode.com/u/shahranansari/',
    description: 'Continuous practice with Data Structures, Algorithms, problem-solving in C++, and time-complexity optimization.',
    badge: 'DSA & Problem Solving',
    icon: Code2,
    color: 'hover:border-amber-500/40',
  },
  {
    name: 'LinkedIn',
    handle: 'shahran-ansari-b8524b30a',
    url: 'https://www.linkedin.com/in/shahran-ansari-b8524b30a/',
    description: 'Professional engineering network, student updates, career milestones, and industry connections.',
    badge: 'Professional Network',
    icon: Linkedin,
    color: 'hover:border-sky-500/40',
  },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e2433]/60 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141c] border border-[#1e2433] text-xs font-medium text-sky-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Coding profiles & social handles.
          </h2>
          <p className="text-slate-400 max-w-xl text-base">
            Where I push code, solve algorithmic challenges, and connect with fellow developers and recruiters.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 sm:p-7 rounded-2xl bg-[#11141c] border border-[#1e2433] ${profile.color} hover:bg-[#141924] transition-all duration-300 flex flex-col justify-between group shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#161c28] border border-[#232c40] flex items-center justify-center text-slate-200 group-hover:text-sky-400 group-hover:scale-105 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#16202f] text-slate-300 border border-[#223048]">
                      {profile.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {profile.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="text-xs font-mono text-sky-400/90 mt-1 truncate">
                    {profile.handle}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e2433]/60 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span>Visit Profile</span>
                  <span className="text-sky-400 font-mono text-[11px]">External &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
