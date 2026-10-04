import React, { useState } from 'react';
import { ExternalLink, Database, Activity, Code2, ArrowRight, ShieldCheck, Cpu, Terminal, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  // State for the interactive Random Forest ML Simulator
  const [gamingHours, setGamingHours] = useState<number>(4);
  const [sleepHours, setSleepHours] = useState<number>(7);
  const [stressLevel, setStressLevel] = useState<number>(5);
  const [neglectingWork, setNeglectingWork] = useState<boolean>(false);

  // Simulated Random Forest scoring calculation based on Kaggle dataset correlations
  const calculateRiskScore = () => {
    let score = 0;
    if (gamingHours > 7) score += 40;
    else if (gamingHours > 4) score += 20;
    else score += 5;

    if (sleepHours < 5) score += 25;
    else if (sleepHours < 7) score += 12;

    score += stressLevel * 2;
    if (neglectingWork) score += 15;

    const clamped = Math.min(Math.max(score, 5), 98);
    let category = "Low Risk";
    let color = "text-[#4edea3]";
    let bg = "bg-emerald-500/10 border-emerald-500/30";
    let recommendation = "Balanced engagement pattern. Healthy gaming habits maintained.";

    if (clamped >= 65) {
      category = "High Addiction Risk";
      color = "text-rose-400";
      bg = "bg-rose-500/10 border-rose-500/30";
      recommendation = "Severe habit disruption detected. Recommend scheduled digital cooldowns.";
    } else if (clamped >= 35) {
      category = "Moderate Risk (Caution)";
      color = "text-amber-400";
      bg = "bg-amber-500/10 border-amber-500/30";
      recommendation = "Elevated screen time. Consider capping late-night gaming sessions.";
    }

    return { score: clamped, category, color, bg, recommendation };
  };

  const riskResult = calculateRiskScore();

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 mb-2">
              Featured Software & Machine Learning
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Projects & Live Applications
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 max-w-md">
            Direct links and essential technical information for deployed web applications and machine learning models.
          </p>
        </div>

        {/* Clean Project Cards Grid (No animated/mockup images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#4cd7f6]/50 shadow-md hover:shadow-lg"
            >
              <div className="space-y-4">
                
                {/* Top Row: Tags & Release Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-1.5 text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 font-medium">
                    {project.tags.map((tag, tIdx) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {tIdx < project.tags.length - 1 && <span aria-hidden="true" className="text-[#64748b]">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <span className="text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500">
                    {project.date}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#4edea3] dark:text-[#4edea3] light:text-emerald-700 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Basic Information / Description */}
                <p className="text-sm text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Bullet Points */}
                <div className="space-y-1.5 pt-2 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-100">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748b]">
                    Key Features & Stack Details
                  </div>
                  <ul className="space-y-1.5">
                    {project.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 flex items-start gap-2">
                        <span className="text-[#4cd7f6] mt-0.5">▸</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Website Links & Action Bar */}
              <div className="pt-4 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-100 flex flex-wrap items-center gap-3">
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
                    className="px-3.5 py-2 text-xs font-medium rounded border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 hover:border-amber-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Database className="w-3.5 h-3.5 text-amber-400" />
                    <span>Kaggle Dataset</span>
                  </a>
                )}

                <button
                  onClick={() => onSelectProject(project)}
                  className="px-3 py-2 text-xs font-medium text-[#94a3b8] hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 transition-colors underline decoration-[#1e293b] underline-offset-4"
                >
                  Tech Breakdown
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Compact Machine Learning Model Testing Box */}
        <div className="mt-12 rounded-xl border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#08121e] dark:bg-[#08121e] light:bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Interactive ML Model Playground</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                Test Gaming Addiction Risk Inference
              </h3>
            </div>
            <a
              href="https://gaming-addiction-predictor.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#4cd7f6] hover:underline inline-flex items-center gap-1"
            >
              <span>Visit full web app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Sliders */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#94a3b8]">Gaming Screen Time</span>
                  <span className="font-bold text-[#4cd7f6] tabular-nums">{gamingHours}h/day</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="14"
                  step="0.5"
                  value={gamingHours}
                  onChange={(e) => setGamingHours(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-[#1e293b] rounded appearance-none cursor-pointer accent-[#4cd7f6]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#94a3b8]">Daily Sleep</span>
                  <span className="font-bold text-[#4edea3] tabular-nums">{sleepHours}h</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="10"
                  step="0.5"
                  value={sleepHours}
                  onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-[#1e293b] rounded appearance-none cursor-pointer accent-[#4edea3]"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-[#94a3b8]">Fatigue / Stress</span>
                  <span className="font-bold text-sky-400 tabular-nums">{stressLevel} / 10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={stressLevel}
                  onChange={(e) => setStressLevel(parseInt(e.target.value, 10))}
                  className="w-full h-1.5 bg-[#1e293b] rounded appearance-none cursor-pointer accent-sky-400"
                />
              </div>
            </div>

            {/* Score Output */}
            <div className="lg:col-span-4 p-4 rounded-lg bg-[#051424] border border-[#1e293b] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#64748b] block">RANDOM FOREST RISK</span>
                <span className={`text-xs font-mono font-semibold ${riskResult.color}`}>
                  {riskResult.category}
                </span>
              </div>
              <div className="text-2xl font-bold font-sans text-white tabular-nums">
                {riskResult.score}%
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
