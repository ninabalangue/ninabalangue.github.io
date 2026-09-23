import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, CheckCircle2 } from 'lucide-react';
import { RECRUITER_FAQS } from '../data/portfolioData';

export const RecruiterFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Recruiter Quick Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions by Hiring Teams
          </h2>
          <p className="mt-3 text-slate-300 text-base">
            Everything you need to know about working hours, remote infrastructure, data privacy, and onboarding.
          </p>
        </div>

        <div className="space-y-4">
          {RECRUITER_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-teal-400 shrink-0" />
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-teal-400" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/90">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Remote Readiness Checklist */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950/60 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-teal-400 font-bold text-xs uppercase tracking-wider">Fiber Internet</div>
            <div className="text-white text-sm font-semibold mt-1">100+ Mbps Fiber</div>
            <div className="text-[11px] text-slate-400">+ Mobile LTE Backup</div>
          </div>
          <div>
            <div className="text-teal-400 font-bold text-xs uppercase tracking-wider">Workstation</div>
            <div className="text-white text-sm font-semibold mt-1">Dual-Screen Setup</div>
            <div className="text-[11px] text-slate-400">Fast SSD & Quiet Space</div>
          </div>
          <div>
            <div className="text-teal-400 font-bold text-xs uppercase tracking-wider">Turnaround</div>
            <div className="text-white text-sm font-semibold mt-1">&lt; 15-Min Response</div>
            <div className="text-[11px] text-slate-400">During scheduled shift</div>
          </div>
          <div>
            <div className="text-teal-400 font-bold text-xs uppercase tracking-wider">Confidentiality</div>
            <div className="text-white text-sm font-semibold mt-1">100% NDA Ready</div>
            <div className="text-[11px] text-slate-400">Gov-grade discretion</div>
          </div>
        </div>

      </div>
    </section>
  );
};
