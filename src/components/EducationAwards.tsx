import React from 'react';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, Star, Sparkles, BookOpen } from 'lucide-react';
import { EDUCATION_DATA, AWARDS_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const EducationAwards: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Academic Excellence & Vetted Integrity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Eligibility & Awards
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            A proven track record of intellectual stamina, consistent academic excellence, and 
            institutional awards for honesty, commitment, and leadership.
          </p>
        </div>

        {/* Highlight Banner: Civil Service Eligibility */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-950/70 via-slate-900 to-emerald-950/60 border border-teal-500/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold uppercase tracking-wider mb-1">
                Official Philippine Government Eligibility
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Civil Service Examination (Professional Level) – Passer
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                Certified by the Philippine Civil Service Commission. Confers permanent first and second-level government career eligibility, verifying exceptional proficiency in analytical reasoning, numerical logic, written communications, and ethical conduct.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="px-4 py-2 rounded-xl bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-teal-500/20">
              <CheckCircle2 className="w-4 h-4" />
              Verified Status
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-teal-400" />
              <h3 className="text-xl font-bold text-white">Academic Degrees</h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-teal-400 font-mono">{edu.period}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                      {edu.honors}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">
                    {edu.degree}
                  </h4>

                  <div className="text-xs font-semibold text-slate-300">
                    {edu.institution}
                  </div>

                  <div className="text-[11px] text-slate-400">
                    {edu.location}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Leadership Awards Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Leadership & Integrity Awards</h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">6 Official Commendations</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {AWARDS_DATA.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded-full">
                        {award.period}
                      </span>
                      <Star className="w-3.5 h-3.5 text-amber-400/70 group-hover:scale-125 transition-transform" />
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {award.title}
                    </h4>

                    <div className="text-[11px] font-medium text-slate-400 mt-1">
                      {award.role} • {award.organization}
                    </div>

                    <p className="text-[11px] text-slate-300 leading-snug mt-2 pt-2 border-t border-slate-800/80">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Integrity Note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-white">Recruiter Takeaway:</strong> Awards like the <em className="text-teal-300">Beacon of Integrity</em> and <em className="text-teal-300">Pillar of Commitment</em> directly reflect Niña's accountability with sensitive client data, budget tracking, and reliable follow-through.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
