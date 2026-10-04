import React from 'react';
import { Award, CheckCircle, ShieldCheck, Eye, GraduationCap, Sparkles, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

import { Certificate } from '../types/portfolio';

interface CertificatesSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const CertificatesSection: React.FC<CertificatesSectionProps> = ({ onSelectCertificate }) => {
  return (
    <section id="certificates" className="py-16 md:py-24 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4edea3] dark:text-[#4edea3] light:text-emerald-700 mb-2">
              Credentials & Value-Added Specializations
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
              Certifications & Training
            </h2>
          </div>
          <p className="text-sm text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 max-w-md">
            Essential information on accredited department training in Agentic AI and high-velocity development workshops.
          </p>
        </div>

        {/* 2-Column Responsive Certificate Cards (Clean Information Layout without Images) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-[#4cd7f6]/40 shadow-sm"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Issuer */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 font-semibold">
                    <Award className="w-4 h-4 text-[#4edea3]" />
                    <span>{cert.issuerShort}</span>
                  </div>
                  <span className="text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                    {cert.title}
                  </h3>
                  {cert.duration && (
                    <p className="text-xs font-mono text-[#4edea3] dark:text-[#4edea3] light:text-emerald-700 mt-1">
                      {cert.duration}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 leading-relaxed">
                  {cert.description}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-1.5 pt-2 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-100">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#64748b]">
                    Key Skills & Verified Outcomes
                  </div>
                  <ul className="space-y-1.5">
                    {cert.keyLearnings.map((learning, lIdx) => (
                      <li key={lIdx} className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#4edea3] mt-0.5 shrink-0" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Conveners & Verification Note */}
                <div className="p-3 rounded-lg bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 text-xs font-mono text-[#94a3b8] space-y-1">
                  <div className="text-[10px] text-[#64748b] uppercase tracking-wider">Authentication / Signatory Info:</div>
                  <div className="text-[#4edea3]">{cert.credentials.verificationNote}</div>
                </div>

              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[#4edea3] font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authenticated Credential</span>
                </div>

                <div className="flex items-center gap-2.5">
                  {cert.driveUrl && (
                    <a
                      href={cert.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-semibold rounded bg-[#4cd7f6] text-[#051424] hover:bg-[#38bdf8] transition-colors inline-flex items-center gap-1.5 shadow"
                      title="Open Certificate in Google Drive"
                    >
                      <span>Drive Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => onSelectCertificate(cert)}
                    className="px-3.5 py-1.5 text-xs font-semibold rounded bg-[#122131] hover:bg-[#1c2b3c] dark:bg-[#122131] dark:hover:bg-[#1c2b3c] light:bg-slate-100 light:hover:bg-slate-200 text-white dark:text-white light:text-slate-800 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#4cd7f6]" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>


            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
