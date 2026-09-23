import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  Check, 
  Copy, 
  Github, 
  Phone,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenGithubGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenGithubGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Core Skills', href: '#skills' },
    { label: 'Work Samples', href: '#work-samples' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education & Awards', href: '#education' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Availability */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 text-white font-black text-lg flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            NB
          </div>
          <div>
            <div className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Niña Balangue</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for Hire
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Virtual Assistant • Legal & Admin</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Copy Email */}
          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200 rounded-lg flex items-center gap-1.5 transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-orange-600" />
                <span className="text-orange-600 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>

          {/* View Resume Button */}
          <button
            onClick={onOpenResume}
            className="px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 rounded-lg flex items-center gap-1.5 shadow-sm shadow-orange-500/25 transition-all active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>

          {/* GitHub Pages Deploy Guide */}
          <button
            onClick={onOpenGithubGuide}
            title="How to publish to GitHub Pages"
            className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <Github className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-rose-500 rounded-md"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 rounded-lg border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Full-time / Part-time VA
            </span>
            <button
              onClick={onOpenGithubGuide}
              className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" /> GitHub Pages Guide
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                handleCopyEmail();
                setTimeout(() => setMobileMenuOpen(false), 800);
              }}
              className="w-full py-2.5 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2 border border-slate-200"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-orange-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
              <span>{copiedEmail ? 'Email Copied!' : `Copy Email: ${PERSONAL_INFO.email}`}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-lg flex items-center justify-center gap-2 shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>Open ATS-Formatted Resume (PDF Ready)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
