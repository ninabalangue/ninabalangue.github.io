import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, AWARDS_DATA, SKILLS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const plainText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
Address: ${PERSONAL_INFO.location}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

ELIGIBILITY
${PERSONAL_INFO.eligibility}

TECHNICAL & VIRTUAL ASSISTANT SKILLS
- Google Workspace: Docs, Sheets, Forms, Drive, Calendar, Gmail
- Microsoft 365: Word, Excel (Formulas, Pivot Tables, Audits), PowerPoint, Outlook
- Creative & Design: Canva Graphic Design & Social Brand Kits
- Operations & Administration: Calendar & Inbox Zero Management, Executive Minutes, Travel Coordination, Client Support
- Retail & Commerce: Store Operations, Daily Sales Auditing, Payroll Facilitation, Pop-Up Market Coordination

WORK & LEADERSHIP EXPERIENCE
${EXPERIENCE_DATA.map(exp => `
* ${exp.role} | ${exp.organization} (${exp.period}) - ${exp.location}
${exp.highlights.map(h => `  - ${h}`).join('\n')}
`).join('')}

EDUCATION
* ${EDUCATION_DATA[0].degree}${EDUCATION_DATA[0].latinHonor ? ` (${EDUCATION_DATA[0].latinHonor})` : ''} - ${EDUCATION_DATA[0].institution} (${EDUCATION_DATA[0].period})
  Honors: ${EDUCATION_DATA[0].latinHonor ? `Graduated ${EDUCATION_DATA[0].latinHonor} • ` : ''}${EDUCATION_DATA[0].honors}

HONORS & AWARDS
${AWARDS_DATA.map(a => `* ${a.title} - ${a.organization} (${a.period})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col border border-slate-200">
        
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="no-print bg-slate-50 text-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold tracking-wide text-slate-900">
              ATS-Optimized Resume Preview
            </span>
            <span className="text-xs bg-orange-50 border border-orange-200 text-orange-700 px-2 py-0.5 rounded font-medium">
              Ready for Print & PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPlainText}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title="Copy plain text for ATS job applications"
            >
              {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedText ? 'Copied ATS Text!' : 'Copy Plain Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:via-orange-500 hover:to-rose-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans leading-relaxed text-slate-800 space-y-6">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-bold text-orange-600 tracking-wide mt-1 uppercase">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.subTitle}
            </p>
            <div className="text-xs text-slate-600 mt-2 flex flex-wrap items-center justify-center gap-3">
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-orange-700 underline font-semibold">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <span className="font-semibold text-emerald-700">Remote Worldwide</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-black tracking-widest text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Eligibility & Core Credentials */}
          <div>
            <h2 className="text-xs font-black tracking-widest text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Government Eligibility & Core Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-slate-900">Civil Service Eligibility:</strong> {PERSONAL_INFO.eligibility} (Professional Level Passer)
              </div>
              <div>
                <strong className="text-slate-900">Google Workspace:</strong> Docs, Sheets, Forms, Drive, Calendar, Gmail, Slides
              </div>
              <div>
                <strong className="text-slate-900">Microsoft 365:</strong> Word, Excel (Formulas & Data Entry), PowerPoint, Outlook
              </div>
              <div>
                <strong className="text-slate-900">Design & Operations:</strong> Canva Graphic Design, Calendar Management, Inbox Zero, Meeting Minutes
              </div>
              <div className="sm:col-span-2">
                <strong className="text-slate-900">Retail & Operations:</strong> Retail Store Management, Daily Sales Auditing, Payroll Facilitation, Pop-Up Market Coordination
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-black tracking-widest text-slate-950 uppercase border-b border-slate-300 pb-1 mb-3">
              Leadership & Work Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-slate-900">
                    <div>
                      <span>{exp.role}</span> — <span className="text-orange-700">{exp.organization}</span>
                      {exp.department && <span className="text-slate-600 font-medium"> ({exp.department})</span>}
                    </div>
                    <div className="text-[11px] text-slate-600 font-mono sm:text-right shrink-0">
                      {exp.period} | {exp.location}
                    </div>
                  </div>
                  <ul className="list-disc list-outside pl-4 mt-1.5 space-y-1 text-slate-700 text-[11px]">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-black tracking-widest text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <strong className="text-slate-900">{edu.degree}</strong>
                    {edu.latinHonor && <span className="text-amber-800 font-bold ml-1">({edu.latinHonor})</span>} — {edu.institution}
                    <div className="text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5 flex-wrap mt-0.5">
                      {edu.latinHonor && <span className="text-amber-800 font-bold">Graduated {edu.latinHonor} •</span>}
                      <span>{edu.honors}</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-600 font-mono sm:text-right shrink-0">
                    {edu.period} | {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h2 className="text-xs font-black tracking-widest text-slate-950 uppercase border-b border-slate-300 pb-1 mb-2">
              Honors & Institutional Commendations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
              {AWARDS_DATA.map((award, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>
                    <strong className="text-slate-900">{award.title}</strong> ({award.period}) – {award.organization}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
