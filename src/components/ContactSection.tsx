import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  Calendar, 
  FileText, 
  Sparkles,
  ArrowRight,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTimeZone, setSelectedTimeZone] = useState<'EST' | 'PST' | 'BST' | 'AEST' | 'PHT'>('EST');

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    roleType: 'Executive Virtual Assistant',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formData.roleType}] Inquiry from ${formData.name} - ${formData.company || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hello Niña,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInquiring for: ${formData.roleType}\n\nMessage:\n${formData.message}\n\nLooking forward to speaking with you!`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  // Timezone overlap helper
  const timezoneMap = {
    EST: { name: 'US Eastern (New York)', diff: '12 hours behind PHT', overlap: '8:00 PM – 12:00 AM PHT overlaps with 8:00 AM – 12:00 PM EST (Full night shifts also supported)' },
    PST: { name: 'US Pacific (San Francisco)', diff: '15 hours behind PHT', overlap: 'Morning US standups perfectly align with late afternoon or night shift PHT' },
    BST: { name: 'UK / London (BST)', diff: '7 hours behind PHT', overlap: '3:00 PM – 11:00 PM PHT aligns 100% with standard 8:00 AM – 4:00 PM UK business hours' },
    AEST: { name: 'Australia (Sydney)', diff: '2 hours ahead PHT', overlap: '7:00 AM – 3:00 PM PHT directly mirrors standard Australian 9:00 AM – 5:00 PM business day!' },
    PHT: { name: 'Philippines / Local Time (GMT+8)', diff: 'Home Base', overlap: 'Full 8:00 AM – 6:00 PM local availability' }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Hire Niña for Your Team
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Ready to bring organization, accuracy, and executive peace of mind to your daily operations. 
            Reach out directly for full-time, part-time, or project-based engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Timezone Widget */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                Direct Candidate Contact
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between group hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Primary Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-white font-mono">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between group hover:border-teal-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-white font-mono">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Location & Work Mode</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">Medina, Misamis Oriental • 100% Remote</div>
                </div>
              </div>
            </div>

            {/* Timezone Overlap Checker */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-400" />
                  Time Zone Compatibility Checker
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                  PHT: GMT+8
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {(['EST', 'PST', 'BST', 'AEST', 'PHT'] as const).map((tz) => (
                  <button
                    key={tz}
                    onClick={() => setSelectedTimeZone(tz)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedTimeZone === tz
                        ? 'bg-teal-400 text-slate-950 font-bold'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {tz}
                  </button>
                ))}
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-xs">
                <div className="font-bold text-white">{timezoneMap[selectedTimeZone].name}</div>
                <div className="text-slate-400 text-[11px]">{timezoneMap[selectedTimeZone].diff}</div>
                <div className="pt-2 text-teal-300 font-medium text-[11px] leading-relaxed">
                  ✓ {timezoneMap[selectedTimeZone].overlap}
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="p-5 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl border border-slate-700 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white">Need a PDF Copy?</div>
                <div className="text-xs text-slate-300">Formatted for 1-click ATS print / export.</div>
              </div>
              <button
                onClick={onOpenResume}
                className="px-4 py-2 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Recruiter Message Form */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">Send an Interview Invitation or Inquiry</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Fill this quick form to instantly launch a pre-formatted email to Niña.
              </p>
            </div>

            {formSent && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you! Your email client has been launched with the drafted inquiry. Niña will reply promptly!</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name / Recruiter Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Legal / Global Ventures"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Target Role
                  </label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-teal-400 cursor-pointer"
                  >
                    <option value="Executive Virtual Assistant">Executive Virtual Assistant</option>
                    <option value="Administrative & Operations Assistant">Administrative & Operations Assistant</option>
                    <option value="Legal Assistant / Records Management">Legal Assistant / Records Management</option>
                    <option value="E-Commerce & Customer Support Lead">E-Commerce & Customer Support Lead</option>
                    <option value="Canva & Marketing Collateral VA">Canva & Marketing Collateral VA</option>
                    <option value="Part-Time / Project Contract">Part-Time / Project Contract</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Project Scope or Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell Niña about the role, expected hours, key software used, or proposed interview dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-400 leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
