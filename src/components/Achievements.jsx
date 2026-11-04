import React from 'react';
import { Award, Sparkles, CheckCircle2, ShieldCheck, Flag } from 'lucide-react';

const achievements = [
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Skills',
    type: 'Learning Badge & Certification',
    description: 'Foundational training covering Generative AI principles, large language models (LLMs), attention mechanisms, and ethical AI deployment principles directly from Google.',
    badgeLabel: 'Google Skills Verified',
    icon: Sparkles,
  },
  {
    title: 'Smart India Hackathon (SIH) 2026',
    issuer: 'Ministry of Education & AICTE (National Initiative)',
    type: 'Hackathon Participation',
    description: 'Team Member & Participant at the National-Level Stage, collaborating under time constraints to design and architect practical technical solutions for real-world problem statements.',
    badgeLabel: 'National-Level Stage',
    icon: Flag,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e2433]/60 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141c] border border-[#1e2433] text-xs font-medium text-sky-400">
            <Award className="w-3.5 h-3.5" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Achievements & certifications.
          </h2>
          <p className="text-slate-400 max-w-xl text-base">
            Verified accomplishments in competitive technical problem-solving and modern artificial intelligence learning.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-[#11141c] border border-[#1e2433] hover:border-sky-500/40 hover:bg-[#141823] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#161c28] border border-[#232c40] flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#162133] text-sky-300 border border-sky-800/40">
                      {item.badgeLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-sky-400 font-medium mt-1">
                    {item.issuer}
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e2433]/60 flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400/90" />
                  <span>{item.type}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
