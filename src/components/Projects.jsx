import React from 'react';
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Motivora',
    description: 'A motivational quotes web application that dynamically queries an external API to display inspiring quotes and authors with a clean reading interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST API'],
    liveUrl: 'https://motivora.netlify.app/',
    slug: 'motivora.netlify.app',
    category: 'API Web App',
    previewType: 'quote',
    tagline: 'Dynamic Quote Generator & API Integration',
  },
  {
    title: 'Personal Profile Website',
    description: 'A personal website developed to practice clean HTML structure, custom CSS styling, responsive layout principles, and frontend fundamentals.',
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Frontend Basics'],
    liveUrl: 'https://shahranprofile.netlify.app/',
    slug: 'shahranprofile.netlify.app',
    category: 'Personal Portfolio',
    previewType: 'profile',
    tagline: 'Semantic HTML & Modern CSS Exploration',
  },
  {
    title: 'DevIdentity',
    description: 'A modern developer profile card interface engineered using frontend technologies, focusing on modular component aesthetics, typography, and interactive hover states.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'UI Engineering'],
    liveUrl: 'https://devidentity.netlify.app/',
    slug: 'devidentity.netlify.app',
    category: 'UI Component Interface',
    previewType: 'card',
    tagline: 'Interactive Identity Card Design',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e2433]/60 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141c] border border-[#1e2433] text-xs font-medium text-sky-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Crafted with clean code & modern aesthetics.
            </h2>
            <p className="text-slate-400 max-w-xl text-base">
              A curated selection of live deployed web applications demonstrating frontend engineering, API integration, and user interface design.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="rounded-2xl bg-[#11141c] border border-[#1e2433] overflow-hidden hover:border-sky-500/50 hover:shadow-subtle transition-all duration-300 flex flex-col group"
            >
              {/* Preview Window Header (Browser Bar) */}
              <div className="bg-[#0b0e14] px-4 py-3 border-b border-[#1e2433] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-red-400/80 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-amber-400/80 transition-colors" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-emerald-400/80 transition-colors" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#141822] text-[11px] text-slate-400 font-mono max-w-[190px] truncate border border-[#1f2738]">
                  <Globe className="w-3 h-3 text-sky-400 shrink-0" />
                  <span className="truncate">{project.slug}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-sans">0{idx + 1}</span>
              </div>

              {/* Minimal Interactive Visual Preview Area */}
              <div className="p-6 bg-gradient-to-b from-[#131722] to-[#10131b] border-b border-[#1e2433]/80 min-h-[160px] flex flex-col justify-center items-center text-center relative overflow-hidden group-hover:from-[#151c2a] group-hover:to-[#111624] transition-colors">
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                
                {/* Visual badge depending on type */}
                <div className="relative z-10 space-y-2">
                  <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-sky-400 bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <p className="text-sm font-medium text-slate-200">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#161c28] text-slate-300 border border-[#222c40]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-2 border-t border-[#1e2433]/60 flex items-center justify-between">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group/link"
                    >
                      <span>Live Application</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>

                    <span className="text-[11px] text-slate-400 font-medium">
                      Netlify Hosted
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
