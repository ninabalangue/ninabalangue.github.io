import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  Tag, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
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
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [sample]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (sample?.pdfSlides) {
        if (e.key === 'ArrowRight') {
          setCurrentSlideIndex((prev) => Math.min(prev + 1, sample.pdfSlides!.length - 1));
        } else if (e.key === 'ArrowLeft') {
          setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
        }
      }
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

  const currentSlide = sample.pdfSlides ? sample.pdfSlides[currentSlideIndex] : null;

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

          {/* 1. PDF SLIDE DECK VIEWER (For Bonbon Blings 8-Page Pitch Deck) */}
          {sample.pdfSlides && currentSlide ? (
            <div className="space-y-4">
              {/* Slide Navigator Header */}
              <div className="flex items-center justify-between bg-slate-100 px-4 py-2.5 rounded-2xl border border-slate-200 text-xs">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Layers className="w-4 h-4 text-orange-500" />
                  <span>Canva Pitch Deck • Slide {currentSlide.slideNumber} of {sample.pdfSlides.length}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => Math.max(prev - 1, 0))}
                    disabled={currentSlideIndex === 0}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                    title="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4 text-slate-700" />
                  </button>
                  <span className="font-mono text-xs px-2 font-bold text-slate-700">
                    {currentSlideIndex + 1}/{sample.pdfSlides.length}
                  </span>
                  <button
                    onClick={() => setCurrentSlideIndex((prev) => Math.min(prev + 1, sample.pdfSlides!.length - 1))}
                    disabled={currentSlideIndex === sample.pdfSlides.length - 1}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                    title="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4 text-slate-700" />
                  </button>
                </div>
              </div>

              {/* Slide Thumbnail Navigation Strip */}
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {sample.pdfSlides.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlideIndex(i)}
                    className={`p-2 rounded-xl text-center border transition-all cursor-pointer text-xs ${
                      i === currentSlideIndex 
                        ? 'border-orange-500 bg-orange-50 text-orange-800 font-bold shadow-xs' 
                        : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-600'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-slate-400">P.{slide.slideNumber}</div>
                    <div className="truncate text-[10px] font-semibold mt-0.5">{slide.highlight || `Slide ${slide.slideNumber}`}</div>
                  </button>
                ))}
              </div>

              {/* Main Slide Card Presentation */}
              <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-gradient-to-tr from-pink-50 via-rose-50/70 to-amber-50 p-6 sm:p-8 min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-pink-200/60 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-white/80 px-2.5 py-1 rounded-md border border-rose-200">
                      {currentSlide.highlight || 'Executive Proposal'}
                    </span>
                    <span className="text-xs font-mono text-slate-500">16:9 Presentation Format</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {currentSlide.title}
                  </h3>
                  {currentSlide.subtitle && (
                    <p className="text-xs sm:text-sm font-semibold text-rose-700 mt-1">
                      {currentSlide.subtitle}
                    </p>
                  )}

                  <div className="mt-5 space-y-2.5">
                    {currentSlide.content.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-white/70 p-3 rounded-xl border border-pink-200/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-pink-200/60 mt-6 flex items-center justify-between text-xs text-slate-500">
                  <span>Bonbon Blings • Designed in Canva Pro by Niña Balangue</span>
                  <span>Use &larr; &rarr; arrow keys to navigate slides</span>
                </div>
              </div>
            </div>
          ) : sample.id === 'dilg-google-site-portal' ? (
            /* 2. DILG REGIONAL LEGAL SERVICE GOOGLE SITES SHOWCASE */
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
            /* 3. VISUAL COLLATERAL DISPLAY (Clarion-Aimera & Bonbon Blings Graphics) */
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
