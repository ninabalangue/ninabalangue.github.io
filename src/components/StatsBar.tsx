import React from 'react';
import { ShieldCheck, Award, GraduationCap, CheckCircle, Clock, Globe } from 'lucide-react';
import { CORE_METRICS } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {CORE_METRICS.map((metric, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-teal-500/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
