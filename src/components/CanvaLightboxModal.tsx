import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  Tag, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Award 
} from 'lucide-react';
import { CanvaWorkSample } from '../types';
import { WorkSamplePlaceholder } from './WorkSamplePlaceholder';

interface CanvaLightboxModalProps {
  sample: CanvaWorkSample | null;
  onClose: () => void;
}

export const CanvaLightboxModal: React.FC<CanvaLightboxModalProps> = ({
  sample,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (sample) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [sample, onClose]);

  if (!sample) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/90 sticky top-0 z-10 backdrop-blur-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              {sample.client}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              {sample.category}
            </span>
            {sample.dimensions && (
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500 border border-slate-200 hidden sm:inline-block">
                {sample.dimensions}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {sample.id === 'dilg-google-site-portal' ? (
            /* 1. DILG REGIONAL LEGAL SERVICE GOOGLE SITES SHOWCASE */
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-tr from-blue-900 via-indigo-900 to-slate-900 p-8 text-white relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 space-y-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
                    <Globe className="w-3.5 h-3.5 text-blue-300" />
                    <span>Live Google Sites Web Application</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    DILG Region X Regional Legal Service Portal
                  </h3>

                  <p className="text-sm text-blue-100/90 leading-relaxed">
                    Designed and built during 480 hours at the Department of the Interior and Local Government Regional Legal Service (DILG Region 10). The portal acts as the regional legal knowledge base, docket intake platform, and advisory directory for municipal and provincial governance units.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 text-xs">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Legal Records & Intake</span>
                      </div>
                      <p className="text-blue-200/80 text-[11px] mt-1">
                        Secure submission pathways and docket transmittal protocols across Northern Mindanao.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 text-xs">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-amber-400" />
                        <span>Civil Service Compliance</span>
                      </div>
                      <p className="text-blue-200/80 text-[11px] mt-1">
                        Standardized regional advisories, legal opinions, and municipal guidance libraries.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://sites.google.com/view/ord-rls-region-10/home?authuser=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Launch Official Google Site (Live Demo)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* 2. VISUAL COLLATERAL DISPLAY (Clarion-Aimera & Bonbon Blings Graphics) */
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative min-h-[300px] sm:min-h-[420px]">
              <WorkSamplePlaceholder sample={sample} isModal={true} />
            </div>
          )}

          {/* Details & Metadata Section */}
          <div className="space-y-4 pt-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
                {sample.client}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mt-0.5">{sample.title}</h2>
              <p className="text-sm font-semibold text-slate-600">{sample.subtitle}</p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {sample.description}
            </p>

            {sample.tags && sample.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {sample.tags.map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                    <Tag className="w-3 h-3 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/90 flex flex-wrap items-center justify-between gap-3 sticky bottom-0">
          <div className="text-xs text-slate-500">
            {sample.externalLink ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live Web Application Verified
              </span>
            ) : (
              <span>Authentic Client Deliverable</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Close
            </button>

            {sample.externalLink && (
              <a
                href={sample.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-xl shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <span>Visit Live Google Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {sample.canvaLink && !sample.externalLink && (
              <a
                href={sample.canvaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 rounded-xl shadow-md shadow-orange-500/20 transition-all cursor-pointer"
              >
                <span>Open in Canva</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
