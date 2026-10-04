import React from 'react';
import { X, ExternalLink, Database, Layers, CheckCircle2, Code2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl border border-[#1e293b] bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white text-white dark:text-white light:text-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 flex items-center justify-between bg-[#08121e] dark:bg-[#08121e] light:bg-slate-50">
          <div>
            <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
              {project.title} · Technical Breakdown
            </h3>
            <p className="text-xs font-mono text-[#4edea3] dark:text-[#4edea3] light:text-emerald-700">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#94a3b8] hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-[#122131] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Quick Info Box */}
          <div className="p-4 rounded-lg bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#64748b]">DEPLOYED RELEASE</span>
              <span className="text-[#4cd7f6]">{project.date}</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#4edea3]">
              {project.tags.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-[#122131] border border-[#1e293b]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748b]">
              Overview & Architecture
            </h4>
            <p className="text-sm text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[10px] font-mono text-[#64748b] block uppercase">{m.label}</span>
                <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900 font-mono">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748b]">
              Key Features & Engineering Milestones
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((hl, idx) => (
                <li key={idx} className="text-xs text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] mt-0.5 shrink-0" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer with Direct Links */}
        <div className="px-6 py-4 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#08121e] dark:bg-[#08121e] light:bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded bg-[#4cd7f6] text-[#051424] hover:bg-[#38bdf8] transition-colors inline-flex items-center gap-1.5 shadow"
            >
              <span>Open Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.datasetUrl && (
              <a
                href={project.datasetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-xs font-medium rounded border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Database className="w-3.5 h-3.5 text-amber-400" />
                <span>Kaggle Dataset</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#94a3b8] hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
