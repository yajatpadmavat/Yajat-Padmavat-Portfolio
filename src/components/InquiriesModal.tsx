import React from 'react';
import { X, Bell, Mail, Building, Clock, Trash2, CheckCircle2 } from 'lucide-react';
import { EmployerInquiry } from '../types/portfolio';

interface InquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: EmployerInquiry[];
  onClearInquiries: () => void;
}

export const InquiriesModal: React.FC<InquiriesModalProps> = ({
  isOpen,
  onClose,
  inquiries,
  onClearInquiries
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-xl border border-[#1e293b] bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white text-white dark:text-white light:text-slate-900 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 flex items-center justify-between bg-[#08121e] dark:bg-[#08121e] light:bg-slate-50">
          <div className="flex items-center gap-2.5">
            <Bell className="w-5 h-5 text-[#4cd7f6]" />
            <div>
              <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                Employer Notification Feed ({inquiries.length})
              </h3>
              <p className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500">
                Logged contact submissions & recruiter messages
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {inquiries.length > 0 && (
              <button
                onClick={onClearInquiries}
                className="p-1.5 rounded text-[#94a3b8] hover:text-rose-400 text-xs flex items-center gap-1 transition-colors"
                title="Clear all logged notifications"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94a3b8] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="overflow-y-auto p-6 space-y-4">
          {inquiries.length === 0 ? (
            <div className="text-center py-10 text-[#64748b] space-y-2">
              <CheckCircle2 className="w-8 h-8 mx-auto text-[#4edea3]" />
              <p className="text-sm">No new notifications in the feed.</p>
              <p className="text-xs">Fill out the contact form below to test employer outreach notifications.</p>
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-4 rounded-lg border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#051424] dark:bg-[#051424] light:bg-slate-50 space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white dark:text-white light:text-slate-900">
                      {inq.senderName}
                    </span>
                    <span className="text-xs text-[#64748b]">·</span>
                    <span className="text-xs font-mono text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700">
                      {inq.roleType}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#64748b] flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{inq.timestamp}</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{inq.company}</span>
                  </span>
                  <span>·</span>
                  <a href={`mailto:${inq.email}`} className="text-cyan-400 hover:underline">
                    {inq.email}
                  </a>
                </div>

                <p className="text-xs text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-800 pt-1 leading-relaxed bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white p-2.5 rounded border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
                  "{inq.message}"
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#08121e] dark:bg-[#08121e] light:bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium rounded border border-[#1e293b] text-[#d4e4fa] hover:bg-[#122131] transition-colors"
          >
            Close Feed
          </button>
        </div>

      </div>
    </div>
  );
};
