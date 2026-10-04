import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Sparkles, Building, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { EmployerInquiry } from '../types/portfolio';

interface ContactSectionProps {
  onInquirySubmitted: (inquiry: EmployerInquiry) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onInquirySubmitted }) => {
  const [formData, setFormData] = useState({
    senderName: '',
    email: '',
    company: '',
    roleType: 'Software Engineering Internship',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastDraftMailto, setLastDraftMailto] = useState('');

  const roleOptions = [
    'Software Engineering Internship',
    'Machine Learning / Applied AI Role',
    'Frontend / React Developer',
    'Full-Stack Project / Freelance',
    'Technical Interview / Exploratory Chat'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.senderName || !formData.email || !formData.message) {
      return;
    }

    const newInquiry: EmployerInquiry = {
      id: Date.now().toString(),
      senderName: formData.senderName,
      email: formData.email,
      company: formData.company || 'Direct Outreach',
      roleType: formData.roleType,
      message: formData.message,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Construct standard pre-filled mailto URL for employer's client
    const mailSubject = encodeURIComponent(
      `[${formData.roleType}] Inquiry from ${formData.senderName}${formData.company ? ` (${formData.company})` : ''}`
    );
    const mailBody = encodeURIComponent(
      `Hi Yajat,\n\nI came across your portfolio and would like to connect regarding an opportunity.\n\n` +
      `Role / Opportunity: ${formData.roleType}\n` +
      `Organization: ${formData.company || 'N/A'}\n` +
      `Contact Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.senderName}`
    );

    const generatedMailto = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
    setLastDraftMailto(generatedMailto);

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#4cd7f6', '#4edea3', '#38bdf8', '#ffffff']
      });
    } catch {
      // ignore in environments without canvas support
    }

    // Call callback to record notification in parent state / navbar badge
    onInquirySubmitted(newInquiry);
    setSubmitted(true);
  };

  const handleCopyDraft = () => {
    const text = `To: ${PERSONAL_INFO.email}\nSubject: [${formData.roleType}] Inquiry from ${formData.senderName}\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      senderName: '',
      email: '',
      company: '',
      roleType: 'Software Engineering Internship',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 mb-2">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Let's Build Something Exceptional Together
          </h2>
          <p className="mt-3 text-sm text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 leading-relaxed">
            I am currently open to Software Engineering, React development, and Applied Machine Learning internships. Use the direct email link below to launch your default email client, or submit an employer inquiry using the structured form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Affordances & Info (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-xl border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white p-6 sm:p-7 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                Direct Channels
              </h3>

              <div className="space-y-4">
                {/* Email Address - Strictly opens default mail application on click */}
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#64748b]">EMAIL ADDRESS</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-mono font-medium text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 hover:underline flex items-center gap-2 group"
                    title="Clicking launches default email client"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>{PERSONAL_INFO.email}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-[11px] text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500">
                    Click to compose directly in your native mail app (Apple Mail, Outlook, Thunderbird, etc.)
                  </p>
                </div>

                {/* Telephone */}
                <div className="space-y-1 pt-3 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-100">
                  <div className="text-xs font-mono text-[#64748b]">PHONE / WHATSAPP</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm sm:text-base font-mono font-medium text-[#4edea3] dark:text-[#4edea3] light:text-emerald-700 hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>
                </div>

                {/* Location */}
                <div className="space-y-1 pt-3 border-t border-[#1e293b] dark:border-[#1e293b] light:border-slate-100">
                  <div className="text-xs font-mono text-[#64748b]">LOCATION</div>
                  <div className="text-sm font-medium text-white dark:text-white light:text-slate-800 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <p className="text-[11px] text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-500">
                    Mumbai Metropolitan Region · Open to in-person & remote positions
                  </p>
                </div>
              </div>

              {/* Status Box */}
              <div className="p-4 rounded-lg bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#4edea3] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>Immediate Response Guarantee</span>
                </div>
                <p className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                  Messages received via email or form are monitored directly. Typical response time is within 12–24 hours.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Employer Contact Form (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#0d1c2d] dark:bg-[#0d1c2d] light:bg-white p-6 sm:p-8 shadow-sm">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                      Prospective Employer & Recruiter Outreach
                    </h3>
                    <p className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600 mt-1">
                      Share your team's opening or project requirements to initiate a conversation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Employer Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.senderName}
                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-[#64748b] focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-colors"
                      />
                    </div>

                    {/* Work Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                        Work / Contact Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. s.jenkins@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-[#64748b] focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Organization Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme FinTech / Labs"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-[#64748b] focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-colors"
                      />
                    </div>

                    {/* Role Type Selector */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                        Opportunity Type
                      </label>
                      <select
                        value={formData.roleType}
                        onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-[#4cd7f6] transition-colors"
                      >
                        {roleOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0d1c2d] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                      Message & Role Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Yajat, we were impressed by your projects Muscler and Gaming Addiction Meter. We'd like to schedule an introductory discussion regarding..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded bg-[#051424] dark:bg-[#051424] light:bg-slate-50 border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-[#64748b] focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-[#64748b]">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-2.5 text-sm font-semibold rounded bg-[#4cd7f6] hover:bg-[#38bdf8] text-[#051424] transition-all shadow-[0_0_15px_rgba(76,215,246,0.3)] hover:shadow-[0_0_20px_rgba(76,215,246,0.5)] flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation & Notification Screen */
                <div className="space-y-6 py-2">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                        Inquiry Received & Notification Dispatched
                      </h4>
                      <p className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                        Thank you, {formData.senderName}. Your employer outreach has been logged.
                      </p>
                    </div>
                  </div>

                  {/* Dispatch Actions Box */}
                  <div className="p-5 rounded-lg border border-[#1e293b] dark:border-[#1e293b] light:border-slate-200 bg-[#051424] dark:bg-[#051424] light:bg-slate-50 space-y-4">
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-semibold text-[#4cd7f6] dark:text-[#4cd7f6] light:text-cyan-700 uppercase tracking-wider">
                        Direct Mail Client Integration
                      </div>
                      <p className="text-xs text-[#94a3b8] dark:text-[#94a3b8] light:text-slate-600">
                        To immediately transmit this message through your organization's authenticated mail client with pre-filled fields:
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={lastDraftMailto}
                        className="px-4 py-2 text-xs font-semibold rounded bg-[#4cd7f6] hover:bg-[#38bdf8] text-[#051424] transition-colors inline-flex items-center gap-2 shadow"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send via Native Email App</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyDraft}
                        className="px-3.5 py-2 text-xs font-medium rounded border border-[#1e293b] dark:border-[#1e293b] light:border-slate-300 text-[#d4e4fa] dark:text-[#d4e4fa] light:text-slate-700 hover:border-[#4cd7f6] transition-colors inline-flex items-center gap-1.5"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Message Draft</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="text-xs font-mono text-[#94a3b8] hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 underline transition-colors"
                    >
                      ← Send another inquiry
                    </button>
                    <span className="text-xs font-mono text-[#4edea3]">
                      Status: Active Notification Pushed
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
