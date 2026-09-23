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
    <section id="contact" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Let's Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hire Niña for Your Team
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Ready to bring organization, accuracy, and executive peace of mind to your daily operations. 
            Reach out directly for full-time, part-time, or project-based engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Timezone Widget */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-orange-600" />
                Direct Candidate Contact
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-orange-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Primary Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 font-mono">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shadow-2xs"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between group hover:border-rose-400 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 font-mono">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shadow-2xs"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Location & Work Mode</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900">Medina, Misamis Oriental • 100% Remote</div>
                </div>
              </div>
            </div>

            {/* Timezone Overlap Checker */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-orange-600" />
                  Time Zone Compatibility Checker
                </h3>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
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
                        ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white font-bold shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                    }`}
                  >
                    {tz}
                  </button>
                ))}
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-xs">
                <div className="font-bold text-slate-900">{timezoneMap[selectedTimeZone].name}</div>
                <div className="text-slate-500 text-[11px]">{timezoneMap[selectedTimeZone].diff}</div>
                <div className="pt-2 text-orange-700 font-semibold text-[11px] leading-relaxed">
                  ✓ {timezoneMap[selectedTimeZone].overlap}
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between shadow-xs">
              <div>
                <div className="text-sm font-bold text-slate-900">Need a PDF Copy?</div>
                <div className="text-xs text-slate-500">Formatted for 1-click ATS print / export.</div>
              </div>
              <button
                onClick={onOpenResume}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:via-orange-500 hover:to-rose-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-md shadow-orange-500/20"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Recruiter Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">Send an Interview Invitation or Inquiry</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill this quick form to instantly launch a pre-formatted email to Niña.
              </p>
            </div>

            {formSent && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you! Your email client has been launched with the drafted inquiry. Niña will reply promptly!</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name / Recruiter Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Legal / Global Ventures"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Role
                  </label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-orange-500 focus:bg-white cursor-pointer"
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Scope or Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell Niña about the role, expected hours, key software used, or proposed interview dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:via-orange-500 hover:to-rose-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all active:scale-[0.99] cursor-pointer"
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
