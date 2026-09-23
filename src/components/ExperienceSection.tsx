import React, { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Briefcase,
  ShieldCheck,
  Award
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');

  const types = ['All', 'Legal & Admin', 'Government & Public Service', 'Student Governance', 'Business & E-Commerce'];

  const filteredExperience = selectedType === 'All'
    ? EXPERIENCE_DATA
    : EXPERIENCE_DATA.filter(exp => exp.type === selectedType);

  return (
    <section id="experience" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Career Timeline & Hands-on History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Leadership
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Demonstrated reliability across government legal services, local government units, 
            high-level university student governance, and profitable e-commerce operations.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedType === type
                  ? 'bg-teal-400 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {filteredExperience.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-teal-300">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-slate-300">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-teal-400" />
                      {exp.organization} {exp.department ? `– ${exp.department}` : ''}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0 self-start">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description & Accomplishments */}
              <div className="mt-4 space-y-3">
                <p className="text-xs sm:text-sm text-slate-300 font-normal">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Key Deliverables & Responsibilities:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="pt-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">Tools / Applied:</span>
                  {exp.skillsApplied.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300 text-[10px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
