import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Mail, FileText, Bell, CheckCircle, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
  inquiryCount: number;
  onOpenInquiries: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  inquiryCount,
  onOpenInquiries
}) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-200 border-b bg-[#051424]/85 border-[#1e293b] dark:bg-[#051424]/85 dark:border-[#1e293b] light:bg-white/85 light:border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="text-lg sm:text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 transition-colors flex items-center gap-2 group"
        >
          <span>{PERSONAL_INFO.name}</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4cd7f6] group-hover:scale-125 transition-transform" />
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#4cd7f6] dark:hover:text-[#4cd7f6] light:hover:text-cyan-600 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions & controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Notification Inbox Button if inquiries exist */}
          {inquiryCount > 0 && (
            <button
              onClick={onOpenInquiries}
              className="relative p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#122131] dark:hover:bg-[#122131] light:hover:bg-slate-100 transition-colors"
              title={`${inquiryCount} Employer message notification(s)`}
              aria-label="View employer notifications"
            >
              <Bell className="w-4 h-4 text-[#4cd7f6]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] font-bold rounded-full bg-[#10b981] text-black flex items-center justify-center">
                {inquiryCount}
              </span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#122131] dark:hover:bg-[#122131] light:hover:bg-slate-100 light:text-slate-600 light:hover:text-slate-900 transition-colors border border-transparent hover:border-[#1e293b] light:hover:border-slate-200"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#4cd7f6]" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-700" />
            )}
          </button>

          {/* Resume Link - Direct to Google Drive */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 hover:border-[#4cd7f6] dark:hover:border-[#4cd7f6] light:hover:border-cyan-600 transition-colors whitespace-nowrap"
            title="Open Resume in Google Drive"
          >
            <FileText className="w-3.5 h-3.5 text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-600" />
            <span>Resume</span>
            <ExternalLink className="w-3 h-3 text-[#64748b]" />
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-md bg-[#4cd7f6] hover:bg-[#38bdf8] text-[#051424] transition-all shadow-[0_0_15px_rgba(76,215,246,0.25)] hover:shadow-[0_0_20px_rgba(76,215,246,0.45)] whitespace-nowrap inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#122131] dark:hover:bg-[#122131] light:hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#051424] dark:bg-[#051424] light:bg-white px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-md text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-800 hover:bg-[#122131] dark:hover:bg-[#122131] light:hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 flex items-center justify-between gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex justify-center items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-md border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 hover:border-[#4cd7f6]"
            >
              <FileText className="w-3.5 h-3.5 text-[#4cd7f6]" />
              <span>Resume (Drive)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="mailto:yajatpadmavat@gmail.com"
              className="flex-1 inline-flex justify-center items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-md bg-[#4cd7f6] text-[#051424]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
