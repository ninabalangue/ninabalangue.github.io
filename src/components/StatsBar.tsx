import React from 'react';
import { ShieldCheck, Award, GraduationCap, CheckCircle, Clock, Globe } from 'lucide-react';
import { CORE_METRICS } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {CORE_METRICS.map((metric, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-orange-300 shadow-xs transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
