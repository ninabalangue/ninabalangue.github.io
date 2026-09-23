import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Clock, 
  Calendar,
  Sparkles,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Recruiter Hook, Intro, Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability & Role Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-emerald-400">Available Immediately</span>
              <span className="text-slate-600">•</span>
              <span>Full-time / Part-time Remote</span>
              <span className="text-slate-600">•</span>
              <span className="text-teal-300 font-medium">GMT+8 (US/EU Friendly)</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">Niña Bernadeth Balangue</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200">
                Executive & Administrative Virtual Assistant
              </p>
              <p className="text-sm font-medium text-teal-400 uppercase tracking-wider flex items-center gap-2">
                <span>Legal Operations</span>
                <span className="text-slate-600">•</span>
                <span>Google Workspace & MS 365</span>
                <span className="text-slate-600">•</span>
                <span>Canva Design</span>
              </p>
            </div>

            {/* Pitch for Recruiters */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Empowering busy founders, executives, and remote teams with proactive executive coordination, 
              inbox zero management, high-accuracy document preparation, and confidential administration. 
              Backed by <strong className="text-white font-semibold">480 hours in regional government legal services</strong>, 
              official <strong className="text-teal-300 font-semibold">Civil Service Professional Eligibility</strong>, and 
              proven e-commerce operations.
            </p>

            {/* Verified Recruiter Fast-Check Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">CSC Professional Level Passer</div>
                  <div className="text-[11px] text-slate-400">Civil Service Commission Certified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                <Award className="w-4 h-4 text-teal-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">480+ Hrs DILG Legal Service</div>
                  <div className="text-[11px] text-slate-400">Strict Confidentiality & Case Filing</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">BA Political Science (MSU-IIT)</div>
                  <div className="text-[11px] text-slate-400">Consistent Lister (2022–2026)</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="font-bold text-white">6x Integrity & Leadership Awards</div>
                  <div className="text-[11px] text-slate-400">Student Council Secretariat Leader</div>
                </div>
              </div>
            </div>

            {/* Call to Actions for Recruiters */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-bold text-sm hover:from-teal-300 hover:to-emerald-300 transition-all shadow-lg shadow-teal-500/25 flex items-center gap-2 active:scale-95"
              >
                <span>Hire Niña / Contact</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center gap-2 shadow-sm active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>View / Print Resume (PDF)</span>
              </button>

              <a
                href="#work-samples"
                className="px-4 py-3 rounded-xl text-slate-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-1.5"
              >
                <span>Browse Work Samples</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <button
                onClick={handleCopyEmail}
                className="hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer group"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-slate-300 group-hover:text-teal-300">{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <span className="text-[10px] text-emerald-400 font-bold ml-1 bg-emerald-950/90 border border-emerald-500/40 px-1.5 py-0.5 rounded">Copied!</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer group"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 group-hover:text-teal-300">{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <span className="text-[10px] text-emerald-400 font-bold ml-1 bg-emerald-950/90 border border-emerald-500/40 px-1.5 py-0.5 rounded">Copied!</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Misamis Oriental, Philippines</span>
              </span>
            </div>

          </div>

          {/* Right Column: High-Impact Recruiter Card with Photo & Snapshot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-900/90 rounded-3xl border border-slate-700/80 p-6 shadow-2xl backdrop-blur-md relative group">
              
              {/* Decorative corner accent */}
              <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg shadow-teal-500/30">
                Verified Candidate
              </div>

              {/* Profile Photo Display */}
              <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-xl bg-slate-800 mb-6 group-hover:border-teal-400 transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Niña Bernadeth Balangue"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if external image fails
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3 text-center">
                  <span className="text-xs font-bold text-white tracking-wide">Niña Bernadeth Balangue</span>
                  <div className="text-[11px] text-teal-300 font-medium">Virtual Assistant</div>
                </div>
              </div>

              {/* Recruiter Quick Fact Sheet */}
              <div className="space-y-3 bg-slate-950/60 rounded-2xl p-4 border border-slate-800/80 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Primary Discipline:</span>
                  <span className="font-semibold text-white">Executive & Legal Admin</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Civil Service Status:</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Professional Passer
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Highest Education:</span>
                  <span className="font-semibold text-white">BA Political Science (MSU-IIT)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Tools Mastery:</span>
                  <span className="font-semibold text-teal-300">Google Workspace, MS 365, Canva</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Availability:</span>
                  <span className="font-bold text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Immediate / 40h+ Week
                  </span>
                </div>
              </div>

              {/* Direct Recruiter Trigger */}
              <div className="mt-5 pt-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Interview%20Invitation%20-%20Virtual%20Assistant%20Role&body=Hi%20Ni%C3%B1a,%0D%0A%0D%0AWe%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20opportunity%20with%20our%20team.`}
                  className="w-full py-2.5 px-4 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Direct Interview Invite</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
