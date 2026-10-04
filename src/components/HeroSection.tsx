import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, GraduationCap, Code2, Terminal, Cpu, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Ambient Radial Gradient Background Light Cone */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#4cd7f6]/10 via-[#06b6d4]/5 to-transparent blur-3xl -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio, and CTAs (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability Telemetry Flag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Software Engineering & ML Internships</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.12] [text-wrap:balance]">
              Engineering Scalable Software & Applied Machine Learning.
            </h1>

            {/* Sub-headline / Narrative */}
            <p className="text-base sm:text-lg text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-600 leading-relaxed max-w-2xl">
              Hello, I'm <strong className="text-white dark:text-white light:text-slate-900 font-semibold">{PERSONAL_INFO.name}</strong>, a Computer Engineering undergraduate at{' '}
              <span className="text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 font-medium">Thadomal Shahani Engineering College</span> (CGPA 8.67). Specializing in React, Python, Machine Learning models, and Agentic AI workflows.
            </p>

            {/* Contact metadata as clean unboxed text with subtle typographic separators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-600 font-mono">
              <a
                href={PERSONAL_INFO.socials.emailMailto}
                className="hover:text-[#4cd7f6] dark:hover:text-[#4cd7f6] light:hover:text-cyan-700 transition-colors flex items-center gap-1.5"
                title="Click to open default mail client"
              >
                <Mail className="w-3.5 h-3.5 text-[#4cd7f6]" />
                <span className="underline decoration-[#4cd7f6]/40 underline-offset-4">{PERSONAL_INFO.email}</span>
              </a>
              <span aria-hidden="true" className="text-[#64748B]">·</span>
              <a
                href={PERSONAL_INFO.socials.phoneTel}
                className="hover:text-[#4cd7f6] dark:hover:text-[#4cd7f6] light:hover:text-cyan-700 transition-colors flex items-center gap-1.5"
                title="Click to call directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#4edea3]" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span aria-hidden="true" className="text-[#64748B]">·</span>
              <span className="flex items-center gap-1.5 text-[#64748B] dark:text-[#64748B] light:text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold rounded-md bg-[#4cd7f6] hover:bg-[#38bdf8] text-[#051424] transition-all shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:shadow-[0_0_25px_rgba(76,215,246,0.5)] flex items-center gap-2"
              >
                <span>View Live Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-medium rounded-md border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-white dark:text-white light:text-slate-800 hover:border-[#4cd7f6] dark:hover:border-[#4cd7f6] light:hover:border-cyan-600 hover:bg-[#4cd7f6]/5 transition-colors"
              >
                Get in Touch
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-medium text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors underline decoration-[#1e293b] underline-offset-4 inline-flex items-center gap-1.5"
              >
                <span>View Resume (Google Drive)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#4cd7f6]" />
              </a>
            </div>


            {/* Proof Metrics (Claim-to-Proof Adjacency with Tabular Figures - 93.2% removed) */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-sans text-white dark:text-white light:text-slate-900 tabular-nums">
                  8.67
                </div>
                <div className="text-xs font-mono text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-500 uppercase tracking-wider">
                  CGPA @ TSEC Mumbai
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-sans text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-600 tabular-nums">
                  36h
                </div>
                <div className="text-xs font-mono text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-500 uppercase tracking-wider">
                  Agentic AI Value-Added
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-sans text-[#4edea3] dark:text-[#4edea3] light:text-emerald-600 tabular-nums">
                  100%
                </div>
                <div className="text-xs font-mono text-[#94A3B8] dark:text-[#94A3B8] light:text-slate-500 uppercase tracking-wider">
                  Live Production Deployments
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Profile Terminal Card (No image) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Radial glow underneath card */}
              <div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#4cd7f6]/20 via-[#4edea3]/15 to-[#38bdf8]/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-xl border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white p-6 shadow-2xl transition-all space-y-5">
                
                {/* Terminal Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#1e293b] dark:border-[#1e293b] light:border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-[#64748b]">yajat@tsec-engineer: ~</span>
                </div>

                {/* Identity & Status */}
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700">
                    &gt; current_profile --verified
                  </div>
                  <div className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {PERSONAL_INFO.name}
                  </div>
                  <div className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 flex items-center gap-1.5 pt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#4edea3]" />
                    <span>Thadomal Shahani Engineering College (B.E. 2024–Present)</span>
                  </div>
                </div>

                {/* Technical Stack Specifications */}
                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#64748b] font-mono">ENGINEERING FOCUS</span>
                      <span className="font-mono text-white dark:text-white light:text-slate-800 font-semibold">Full-Stack & Applied ML</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#64748b] font-mono">LANGUAGES</span>
                      <span className="font-mono text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 font-medium">Python · C · JavaScript · SQL</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#64748b] font-mono">WEB FRAMEWORKS</span>
                      <span className="font-mono text-[#4edea3] dark:text-[#4edea3] light:text-emerald-700 font-medium">React · Tailwind CSS</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#64748b] font-mono">DATABASE SYSTEMS</span>
                      <span className="font-mono text-sky-400 font-medium">Supabase · SQL · Firebase</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#64748b] font-mono">MACHINE LEARNING</span>
                      <span className="font-mono text-amber-400 font-medium">Random Forest · Agentic AI</span>
                    </div>
                  </div>
                </div>

                {/* Quick Interactive Shortcut */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-[#64748b] font-mono">&gt; direct_inquiry</span>
                  <a
                    href={PERSONAL_INFO.socials.emailMailto}
                    className="text-[#4cd7f6] hover:underline font-mono font-medium flex items-center gap-1"
                  >
                    <span>Launch mailto app</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
