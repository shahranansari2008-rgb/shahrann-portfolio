import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Wrench, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    id: 'all',
    label: 'All Technologies',
  },
  {
    id: 'programming',
    label: 'Programming',
  },
  {
    id: 'web',
    label: 'Web Development',
  },
  {
    id: 'tools',
    label: 'Tools & Workflow',
  },
];

const skills = [
  // Programming
  {
    name: 'C',
    category: 'programming',
    iconName: 'C',
    tag: 'Core Systems',
    description: 'Fundamental procedural programming, memory pointers, and foundational logic.',
  },
  {
    name: 'C++',
    category: 'programming',
    iconName: 'C++',
    tag: 'Algorithms & OOP',
    description: 'Object-oriented programming, STL containers, algorithms, and Data Structures.',
  },
  {
    name: 'Python',
    category: 'programming',
    iconName: 'Py',
    tag: 'Scripting & Logic',
    description: 'Clean syntax programming, problem solving, data manipulation, and automation.',
  },

  // Web Development
  {
    name: 'HTML5',
    category: 'web',
    iconName: 'HTML',
    tag: 'Structure',
    description: 'Semantic markup, accessibility (a11y), clean document layout, and SEO standards.',
  },
  {
    name: 'CSS3',
    category: 'web',
    iconName: 'CSS',
    tag: 'Styling',
    description: 'Modern flexbox, grid systems, responsive mobile-first layouts, and smooth animations.',
  },
  {
    name: 'JavaScript',
    category: 'web',
    iconName: 'JS',
    tag: 'Interactivity',
    description: 'ES6+ modern syntax, asynchronous API requests, DOM manipulation, and functional logic.',
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    iconName: 'Git',
    tag: 'Version Control',
    description: 'Source code management, branching strategies, commit history, and collaborative workflow.',
  },
  {
    name: 'GitHub',
    category: 'tools',
    iconName: 'GH',
    tag: 'Collaboration',
    description: 'Repository hosting, open-source collaboration, pull requests, and code tracking.',
  },
  {
    name: 'VS Code',
    category: 'tools',
    iconName: 'VSC',
    tag: 'Primary IDE',
    description: 'Modern development environment, debugging, linters, and productivity extensions.',
  },
  {
    name: 'Netlify',
    category: 'tools',
    iconName: 'NT',
    tag: 'Deployment & CI/CD',
    description: 'Continuous web application deployment, domain management, and production hosting.',
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(item => item.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e2433]/60 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141c] border border-[#1e2433] text-xs font-medium text-sky-400">
              <Code className="w-3.5 h-3.5" />
              <span>Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Tools and technologies I work with.
            </h2>
            <p className="text-slate-400 max-w-xl text-base">
              Hands-on practical stack across core programming, modern web technologies, and developer tooling.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? 'bg-sky-400 text-slate-950 border-sky-400 font-semibold shadow-glow-sm'
                    : 'bg-[#11141c] text-slate-400 border-[#1e2433] hover:text-white hover:border-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-[#11141c]/60 border border-[#1e2433] hover:border-sky-500/40 hover:bg-[#151a24] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#161b26] border border-[#222a3a] flex items-center justify-center font-mono font-bold text-xs text-sky-400 group-hover:scale-105 group-hover:border-sky-500/40 transition-all">
                    {skill.iconName}
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#18202e] text-slate-300 border border-[#222e44]">
                    {skill.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1e2433]/50 flex items-center gap-1.5 text-[11px] text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400/80" />
                <span className="capitalize">{skill.category} Stack</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note regarding real capabilities */}
        <div className="p-4 rounded-xl bg-[#0f121a] border border-[#1e2433] flex items-center gap-3 text-xs text-slate-400">
          <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
          <span>
            Skills evaluated through active project development and problem solving rather than arbitrary percentage ratings.
          </span>
        </div>
      </div>
    </section>
  );
}
