/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { InquiriesModal } from './components/InquiriesModal';
import { NotificationToast } from './components/NotificationToast';
import { Project, Certificate, EmployerInquiry } from './types/portfolio';

function PortfolioContent() {
  const { theme } = useTheme();

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isInquiriesOpen, setIsInquiriesOpen] = useState<boolean>(false);

  // Inquiries & notifications state
  const [inquiries, setInquiries] = useState<EmployerInquiry[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('yajat_portfolio_inquiries');
        if (saved) return JSON.parse(saved);
      } catch {
        // ignore parse error
      }
    }
    return [];
  });

  const [toastMessage, setToastMessage] = useState<{ message: string; subMessage?: string } | null>(null);

  // Persist inquiries
  useEffect(() => {
    try {
      localStorage.setItem('yajat_portfolio_inquiries', JSON.stringify(inquiries));
    } catch {
      // ignore
    }
  }, [inquiries]);

  const handleInquirySubmitted = (newInquiry: EmployerInquiry) => {
    setInquiries(prev => [newInquiry, ...prev]);
    setToastMessage({
      message: `Outreach from ${newInquiry.senderName} (${newInquiry.company}) logged!`,
      subMessage: `Role: ${newInquiry.roleType}. Click the mail app link to send your message directly.`
    });
  };

  const handleClearInquiries = () => {
    setInquiries([]);
    localStorage.removeItem('yajat_portfolio_inquiries');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#051424] text-[#d4e4fa]' : 'bg-[#f8fafc] text-[#0f172a]'}`}>
      
      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        inquiryCount={inquiries.length}
        onOpenInquiries={() => setIsInquiriesOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <CertificatesSection onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
        <SkillsSection />
        <EducationSection />
        <ContactSection onInquirySubmitted={handleInquirySubmitted} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <InquiriesModal
        isOpen={isInquiriesOpen}
        onClose={() => setIsInquiriesOpen(false)}
        inquiries={inquiries}
        onClearInquiries={handleClearInquiries}
      />

      {/* Real-time Notification Toast */}
      {toastMessage && (
        <NotificationToast
          message={toastMessage.message}
          subMessage={toastMessage.subMessage}
          onClose={() => setToastMessage(null)}
        />
      )}

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
