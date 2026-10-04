import React, { useEffect } from 'react';
import { CheckCircle2, X, Bell } from 'lucide-react';

interface NotificationToastProps {
  message: string;
  subMessage?: string;
  onClose: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({
  message,
  subMessage,
  onClose
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 duration-300">
      <div className="rounded-xl border border-[#4cd7f6]/40 bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white text-white dark:text-white light:text-slate-900 p-4 shadow-2xl flex items-start gap-3 backdrop-blur-md">
        <div className="p-2 rounded-lg bg-[#4cd7f6]/10 text-[#4cd7f6] shrink-0 mt-0.5">
          <Bell className="w-4 h-4 animate-bounce" />
        </div>
        <div className="flex-1 space-y-0.5">
          <div className="text-xs font-mono font-semibold text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 uppercase tracking-wider">
            Employer Notification Alert
          </div>
          <p className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
            {message}
          </p>
          {subMessage && (
            <p className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
              {subMessage}
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-[#94a3b8] hover:text-white p-1 rounded-md transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
