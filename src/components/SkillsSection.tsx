import React, { useState } from 'react';
import { 
  Mail, 
  FileSpreadsheet, 
  Palette, 
  Calendar, 
  Inbox, 
  ShieldCheck, 
  ShoppingBag, 
  ClipboardList, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All VA Skills' },
    { id: 'workspace', label: 'Google Workspace' },
    { id: 'office', label: 'Microsoft 365' },
    { id: 'operations', label: 'Executive Operations' },
    { id: 'legal', label: 'Legal & Compliance' },
    { id: 'design', label: 'Canva Design' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail className="w-5 h-5 text-teal-400" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-purple-400" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-blue-400" />;
      case 'Inbox': return <Inbox className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-pink-400" />;
      case 'ClipboardList': return <ClipboardList className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Technical & Operational Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Virtual Assistant Core Competencies
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Every skill backed by hands-on execution across government legal bureaus, local municipality offices, 
            e-commerce retail, and university executive leadership.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-teal-500/50 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-teal-500/5"
            >
              <div>
                {/* Header Icon + Level Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                  {skill.name}
                </h3>
                
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              {/* Practical Use Case snippet */}
              <div className="mt-5 pt-3 border-t border-slate-800/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Proven Application:
                </span>
                <p className="text-[11px] text-slate-300 font-medium">
                  {skill.practicalUse}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tools Software Badge Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white">Daily Software Stack</h4>
            <p className="text-xs text-slate-400">Ready to plug into your existing workflow on Day 1</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              'Google Docs', 'Google Sheets', 'Google Drive', 'Google Calendar', 'Gmail', 'Google Forms',
              'MS Excel', 'MS Word', 'MS PowerPoint', 'Canva Pro', 'Notion', 'Slack', 'Zoom', 'Trello', 'Asana'
            ].map((tool, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 font-mono text-[11px]">
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
