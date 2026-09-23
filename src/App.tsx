import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { SkillsSection } from './components/SkillsSection';
import { WorkSamples } from './components/WorkSamples';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationAwards } from './components/EducationAwards';
import { RecruiterFAQ } from './components/RecruiterFAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { GithubDeployGuide } from './components/GithubDeployGuide';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGithubGuideOpen, setIsGithubGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-teal-400 selection:text-slate-950">
      {/* Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenGithubGuide={() => setIsGithubGuideOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <StatsBar />
        <SkillsSection />
        <WorkSamples />
        <ExperienceSection />
        <EducationAwards />
        <RecruiterFAQ />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer & Mobile Sticky Bar */}
      <Footer 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenGithubGuide={() => setIsGithubGuideOpen(true)}
      />

      {/* Modals */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

      <GithubDeployGuide 
        isOpen={isGithubGuideOpen} 
        onClose={() => setIsGithubGuideOpen(false)} 
      />
    </div>
  );
}
