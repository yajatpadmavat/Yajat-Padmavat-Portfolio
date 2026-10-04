import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4edea3] dark:text-[#4edea3] light:text-emerald-700 mb-2">
              Academic Foundation
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Education & Academic Journey
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 max-w-md">
            Strong analytical, mathematical, and computer science engineering coursework with consistent academic excellence.
          </p>
        </div>

        {/* Timeline with hairlines and square diamond nodes */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#1e293b] dark:before:bg-[#1e293b] light:before:bg-slate-200">
          {EDUCATION_DATA.map((item, idx) => (
            <div key={item.institution} className="relative group">
              
              {/* Diamond Node Marker */}
              <div 
                className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-3.5 h-3.5 rotate-45 border-2 border-[#4cd7f6] bg-[#051424] dark:bg-[#051424] light:bg-white group-hover:bg-[#4cd7f6] transition-colors"
                aria-hidden="true" 
              />

              {/* Card Container */}
              <div className="rounded-xl border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white p-6 sm:p-7 space-y-4 shadow-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-medium text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 mt-0.5">
                      {item.degree}
                    </p>
                  </div>

                  {/* Tabular Score Badge */}
                  <div className="sm:text-right shrink-0">
                    <span className="text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500 block">
                      {item.scoreLabel}
                    </span>
                    <span className="text-lg font-bold font-sans text-white dark:text-white light:text-slate-900 tabular-nums">
                      {item.scoreValue}
                    </span>
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#4edea3]" />
                    <span>{item.period}</span>
                  </span>
                  <span aria-hidden="true" className="text-[#64748b]">·</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-1.5 pt-2 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-100">
                  {item.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="text-xs text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 flex items-start gap-2">
                      <span className="text-[#4edea3] mt-0.5">▸</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
