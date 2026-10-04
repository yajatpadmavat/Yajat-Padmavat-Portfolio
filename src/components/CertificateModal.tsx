import React from 'react';
import { X, ShieldCheck, Printer, CheckCircle2, Award, ExternalLink } from 'lucide-react';
import { Certificate } from '../types/portfolio';


interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl border border-[#1e293b] bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white text-white dark:text-white light:text-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 flex items-center justify-between bg-[#08121e] dark:bg-[#08121e] light:bg-slate-50">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#4edea3]" />
            <div>
              <h3 className="text-base font-bold tracking-tight text-white dark:text-white light:text-slate-900">
                Official Credential Verification
              </h3>
              <p className="text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500">
                {certificate.issuer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg text-[#94a3b8] hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-[#122131] transition-colors"
              title="Print Credential Details"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#94a3b8] hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-[#122131] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Certificate Credential Header */}
          <div className="p-5 rounded-lg border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#051424] dark:bg-[#051424] light:bg-slate-50 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 font-semibold">
              <Award className="w-4 h-4 text-[#4edea3]" />
              <span>{certificate.issuerShort} · {certificate.date}</span>
            </div>
            <h4 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
              {certificate.title}
            </h4>
            {certificate.duration && (
              <p className="text-xs font-mono text-[#4edea3]">
                Course Duration: {certificate.duration}
              </p>
            )}
            {certificate.driveUrl && (
              <div className="pt-2">
                <a
                  href={certificate.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded bg-[#4cd7f6] text-[#051424] hover:bg-[#38bdf8] transition-colors shadow"
                >
                  <span>View Official Certificate (Google Drive)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>


          {/* Description */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
              Course Syllabus & Overview
            </div>
            <p className="text-sm text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Key Learnings */}
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#64748b]">
              Competencies Verified
            </div>
            <ul className="space-y-2">
              {certificate.keyLearnings.map((learning, lIdx) => (
                <li key={lIdx} className="text-xs text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4edea3] mt-0.5 shrink-0" />
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification & Signatories info */}
          <div className="rounded-lg p-4 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#051424] dark:bg-[#051424] light:bg-slate-50 space-y-3">
            <div className="text-xs font-mono text-[#64748b] uppercase tracking-wider">
              Authorized Signatories & Conveners
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificate.credentials.signatories.map((sig, sIdx) => (
                <div key={sIdx} className="text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 flex items-center gap-2">
                  <span className="text-[#4edea3]">✓</span>
                  <span>{sig}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#1e293b] text-[11px] font-mono text-[#4edea3]">
              {certificate.credentials.verificationNote}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#08121e] dark:bg-[#08121e] light:bg-slate-50 flex items-center justify-between gap-3">
          {certificate.driveUrl ? (
            <a
              href={certificate.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4cd7f6] hover:underline"
            >
              <span>Open in Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : <div />}
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-md border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 hover:bg-[#122131] transition-colors"
          >
            Close
          </button>
        </div>


      </div>
    </div>
  );
};
