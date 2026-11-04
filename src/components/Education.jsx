import React from 'react';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

const educationList = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Allenhouse Group of Institutions',
    affiliation: 'Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow.',
    period: '2025 – 2029',
    status: 'In Progress (Undergraduate)',
    scores: [
      { label: '1st Semester SGPA', value: '7.68' },
      { label: '2nd Semester SGPA', value: '7.68' },
    ],
    highlight: 'Core CS Foundations, Data Structures, Algorithms, Web Technologies',
  },
  {
    degree: 'Class XII (Senior Secondary)',
    institution: 'MSVM Inter College',
    affiliation: 'Intermediate Board Examination',
    period: '2025',
    status: 'Completed',
    scores: [
      { label: 'Aggregate Score', value: '77%' },
    ],
    highlight: 'Science & Mathematics curriculum with strong analytical grounding',
  },
  {
    degree: 'Class X (Secondary School)',
    institution: 'Ambedkar Inter College',
    affiliation: 'High School Board Examination',
    period: '2023',
    status: 'Completed',
    scores: [
      { label: 'Aggregate Score', value: '84%' },
    ],
    highlight: 'Academic excellence and foundational sciences',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#1e2433]/60 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11141c] border border-[#1e2433] text-xs font-medium text-sky-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & qualifications.
          </h2>
          <p className="text-slate-400 max-w-xl text-base">
            Academic background in Computer Science and Engineering, demonstrating consistent analytical and academic performance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#1e2433] ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {educationList.map((item, index) => (
            <div key={item.degree} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#11141c] border-2 border-sky-400 group-hover:bg-sky-400 group-hover:shadow-glow-sm transition-all" />

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#11141c] border border-[#1e2433] hover:border-sky-500/40 hover:bg-[#141823] transition-all duration-300 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e2433]/60 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-sky-400 font-medium mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-sky-400/80" />
                      <span>{item.institution}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {item.affiliation}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-[#161c28] px-3 py-1.5 rounded-full border border-[#222c40] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Score Chips */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {item.scores.map((score, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18202d] border border-sky-900/40"
                    >
                      <Award className="w-3.5 h-3.5 text-sky-400" />
                      <span className="text-xs text-slate-300">{score.label}:</span>
                      <span className="text-xs font-bold text-sky-300">{score.value}</span>
                    </div>
                  ))}
                </div>

                <div className="text-xs text-slate-400 pt-1">
                  <span className="text-slate-400 font-medium">Focus:</span> {item.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
