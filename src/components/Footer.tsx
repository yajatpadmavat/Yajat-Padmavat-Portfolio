import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowUp, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setIstTime(formatted);
      } catch {
        setIstTime('IST (+05:30)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#051424] dark:bg-[#051424] light:bg-slate-50 py-12 transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
          
          {/* Brand & Purpose (col-span-5) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
            </div>
            <p className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 max-w-sm leading-relaxed">
              Computer Engineering Undergraduate at Thadomal Shahani Engineering College, Mumbai. Focused on resilient full-stack applications and applied machine learning.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#4edea3]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dombivli / Mumbai Time: {istTime} (IST)</span>
            </div>
          </div>

          {/* Quick Navigation (col-span-3) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs font-medium text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
              <li>
                <a href="#projects" className="hover:text-[#4cd7f6] dark:hover:text-[#4cd7f6] light:hover:text-cyan-700 transition-colors">
                  Featured Projects (Muscler & ML Meter)
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-[#4cd7f6] dark:hover:text-[#4cd7f6] light:hover:text-cyan-700 transition-colors">
                  Agentic AI & Workshop Certifications
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#4cd7f6] dark:hover:text-[#4cd7f6] light:hover:text-cyan-700 transition-colors">
                  Technical Skills & Coursework
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#4cd7f6] dark:hover:text-[#4cd7f6] light:hover:text-cyan-700 transition-colors">
                  Academic Journey (TSEC · CGPA 8.67)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels (col-span-4) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
              Direct Inquiries
            </div>
            <div className="space-y-2 text-xs font-mono">
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <span className="text-[11px] text-[#64748b] block mt-0.5">Launches your default email app</span>
              </div>

              <div className="pt-1">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-[#4edea3] dark:text-[#4edea3] light:text-emerald-700 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs font-sans">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 transition-colors flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed in accordance with Synthetic Nexus guidelines.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#94a3b8] hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
