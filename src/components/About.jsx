import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, Cpu, Layers, BookOpen } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Academic Foundation',
      description: 'B.Tech student in Computer Science & Engineering at Allenhouse Institute of Technology, AKTU.',
    },
    {
      icon: Code2,
      title: 'Current Focus',
      description: 'Deepening proficiency in JavaScript, C++, Data Structures & Algorithms, and modern frontend development.',
    },
    {
      icon: Layers,
      title: 'Practical Builder',
      description: 'Focused on developing real-world projects with clean code architectures and intuitive user interfaces.',
    },
    {
      icon: Compass,
      title: 'Continuous Learner',
      description: 'Constantly exploring new tools, software engineering paradigms, and algorithmic problem-solving.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e2433]/60 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141c] border border-[#1e2433] text-xs font-medium text-sky-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Driven by curiosity, grounded in fundamentals.
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            A developer who values clarity, strong foundational programming principles, and building thoughtful user experiences.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              I am <span className="text-white font-medium">Shahran Ansari</span>, a Computer Science and Engineering student at <span className="text-slate-200">Allenhouse Institute of Technology</span>, affiliated with <span className="text-slate-200">AKTU</span>.
            </p>
            <p>
              I am deeply interested in <span className="text-sky-300">Web Development</span>, <span className="text-sky-300">Software Engineering</span>, programming, and systematic problem-solving. My journey in tech is fueled by the thrill of turning ideas into functional, clean, and elegant digital products.
            </p>
            <p>
              I enjoy learning new technologies and developing practical projects to sharpen my technical skills. Rather than merely consuming theory, I prioritize implementing real concepts in code.
            </p>
            <p className="p-4 rounded-xl bg-[#11141c] border border-[#1e2433] text-slate-300">
              <span className="text-sky-400 font-semibold block mb-1">Current Focus:</span>
              Strengthening JavaScript, C++, Data Structures and Algorithms, and frontend development.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-[#11141c]/70 border border-[#1e2433] hover:border-sky-500/40 hover:bg-[#141923] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#161b26] border border-[#1e2433] flex items-center justify-center text-sky-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
