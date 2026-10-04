import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Layout, Cpu, Database } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Languages')) return <Code2 className="w-5 h-5 text-[#4cd7f6]" />;
    if (category.includes('Web')) return <Layout className="w-5 h-5 text-[#4edea3]" />;
    if (category.includes('Machine')) return <Cpu className="w-5 h-5 text-sky-400" />;
    return <Database className="w-5 h-5 text-amber-400" />;
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 mb-2">
              Technical Arsenal
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Coursework & Core Competencies
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 max-w-md">
            Strong foundations in low-level systems, modern web engineering, and machine learning pipelines.
          </p>
        </div>

        {/* 4-Column Grid for Competency Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.category}
              className="rounded-xl border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white p-6 sm:p-7 space-y-5 transition-all hover:border-[#1c2b3c] shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#051424] dark:bg-[#051424] light:bg-slate-100 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
                  {getCategoryIcon(cat.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill list with clean unboxed text and typography discipline */}
              <div className="space-y-3.5 pt-2 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-100">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white dark:text-white light:text-slate-900 font-mono">
                        {skill.name}
                      </span>
                      <span aria-hidden="true" className="text-[#64748b]">·</span>
                      <span className="text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 font-sans">
                        {skill.detail}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 font-medium shrink-0">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
