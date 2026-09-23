import React, { useState } from 'react';
import { Mail, Phone, ArrowUp, Github, FileText, Check, Copy, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenGithubGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenGithubGuide }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12 relative no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          
          {/* Col 1: Brand & Role */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-400 text-slate-950 font-black text-sm flex items-center justify-center">
                NB
              </div>
              <span className="text-base font-bold text-white">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Executive & Administrative Virtual Assistant • Legal Operations Specialist • CSC Professional Eligible.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 text-xs">
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : PERSONAL_INFO.email}</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              <span>Resume</span>
            </button>

            <button
              onClick={onOpenGithubGuide}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Pages</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Niña Bernadeth R. Balangue. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built for high recruiter conversion • GitHub Pages Ready</span>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Recruiter Quick Action Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 p-3 sm:hidden z-40 flex items-center justify-around gap-2 shadow-2xl">
        <a
          href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Virtual%20Assistant`}
          className="flex-1 py-2.5 px-3 bg-teal-400 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-teal-500/20"
        >
          <Mail className="w-4 h-4" />
          <span>Email Niña</span>
        </a>

        <button
          onClick={onOpenResume}
          className="flex-1 py-2.5 px-3 bg-slate-800 text-white font-semibold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-1.5"
        >
          <FileText className="w-4 h-4 text-teal-400" />
          <span>View Resume</span>
        </button>
      </div>
    </footer>
  );
};
