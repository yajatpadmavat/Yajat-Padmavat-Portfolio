import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, GraduationCap, Award, Code2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATES, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border border-[#1e293b] bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white text-white dark:text-white light:text-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="no-print px-6 py-4 border-b border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 flex items-center justify-between bg-[#08121e] dark:bg-[#08121e] light:bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="font-bold text-base text-white dark:text-white light:text-slate-900">
              Curriculum Vitae · {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-semibold rounded bg-[#4cd7f6] text-[#051424] hover:bg-[#38bdf8] transition-colors inline-flex items-center gap-1.5 shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-[#122131] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-slate-900 font-sans print:p-0 print:m-0">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-200 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-medium text-slate-600">
              {PERSONAL_INFO.location}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-slate-700">
              <a href={PERSONAL_INFO.socials.phoneTel} className="hover:underline flex items-center gap-1">
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.socials.emailMailto} className="hover:underline text-cyan-700 font-semibold flex items-center gap-1">
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-700">
                LinkedIn: Yajat Padmavat
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-700">
                GitHub: yajatpadmavat
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between items-baseline text-xs">
                <div>
                  <strong className="text-sm font-bold text-slate-900">Thadomal Shahani Engineering College</strong>
                  <div className="text-slate-700">B.E. Computer Engineering — <strong>CGPA: 8.67</strong></div>
                </div>
                <div className="text-right text-slate-600 sm:text-right">
                  <div>September '24 – Present</div>
                  <div className="italic">Bandra, Maharashtra</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between items-baseline text-xs">
                <div>
                  <strong className="text-sm font-bold text-slate-900">Royal Junior College</strong>
                  <div className="text-slate-700">Higher Secondary Certificate (HSC) — <strong>Percentage: 83%</strong></div>
                </div>
                <div className="text-right text-slate-600">
                  <div>July '22 – April '24</div>
                  <div className="italic">Dombivli, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>


          {/* Coursework / Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Coursework & Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-800">
              <div>• C Programming</div>
              <div>• Python Development</div>
              <div>• OOPS Concept</div>
              <div>• Web Development (React)</div>
              <div>• Machine Learning (Applied)</div>
              <div>• SQL & Databases</div>
              <div>• Supabase & Firebase</div>
              <div>• Agentic AI Frameworks</div>
            </div>
          </div>

          {/* Certificates */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Certifications & Specialized Courses
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-semibold text-slate-900">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span>Agentic AI for Fintech Enterprises | Thadomal Shahani Engineering College</span>
                    <a
                      href="https://drive.google.com/file/d/12cgBBFbE8tEpvdLB46N9Agw6ry_bfOUN/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:underline inline-flex items-center gap-0.5 font-medium text-[11px]"
                    >
                      [View Certificate ↗]
                    </a>
                  </div>
                  <span className="font-mono text-slate-600">07/2026</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 mt-1 space-y-0.5">
                  <li>Completed a 1-week (36 Hours) Value Added Course organized by the Department of Computer Engineering.</li>
                  <li>Gained hands-on exposure to agentic AI frameworks and their practical applications within fintech enterprises.</li>
                  <li>Digitally verified signature by GOPAKUMARAN TRIVIKRAMAN THAMPI.</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-semibold text-slate-900">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span>AI Tools and ChatGPT Workshop | be10x</span>
                    <a
                      href="https://drive.google.com/file/d/1N4CTix2BYmyNhKsSUGNGvejXewlYSrw3/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:underline inline-flex items-center gap-0.5 font-medium text-[11px]"
                    >
                      [View Certificate ↗]
                    </a>
                  </div>
                  <span className="font-mono text-slate-600">10/2026</span>
                </div>
                <ul className="list-disc list-inside text-slate-700 mt-1 space-y-0.5">
                  <li>Learned to leverage AI tools for rapid presentation building, automated data analysis, and efficient code debugging.</li>
                  <li>Verified completion credential issued on October 4th, 2026.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Software & Machine Learning Projects
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Muscler | React, Supabase, SQL, Firebase, Tailwind CSS</span>
                  <span className="font-mono">02/2026</span>
                </div>
                <p className="text-slate-700 mt-1">
                  Muscler helps you track your own fitness. You can log your workouts, calculate the calories you've burnt, record individual sets and weights, and pave your own way toward a healthy lifestyle.
                </p>
                <div className="text-cyan-800 font-mono mt-0.5">
                  Live: https://yajatpadmavat.github.io/Muscler-Your-personal-fitness-tracker/
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-900">
                  <span>Gaming Addiction Meter | Python, Machine Learning, Random Forest, React</span>
                  <span className="font-mono">07/2026</span>
                </div>
                <p className="text-slate-700 mt-1">
                  A web application that helps classify gaming addiction patterns to prevent digital burnout in today's era of hyper-immersive gaming and screens. Trained with a supervised Random Forest classifier on a clinical Kaggle dataset.
                </p>
                <div className="text-cyan-800 font-mono mt-0.5">
                  Live: https://gaming-addiction-predictor.vercel.app/ | Dataset: Kaggle clinical analysis
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
