import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  FileText, 
  Globe
} from 'lucide-react';
import { CanvaWorkSample } from '../types';

interface WorkSamplePlaceholderProps {
  sample: CanvaWorkSample;
  isModal?: boolean;
}

export const WorkSamplePlaceholder: React.FC<WorkSamplePlaceholderProps> = ({
  sample,
  isModal = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  const isPdf = sample.fileName?.endsWith('.pdf');
  const isGoogleSite = sample.id === 'dilg-google-site-portal';

  // Client-specific styling accents
  const themeClasses = {
    'Clarion-Aimera': {
      bg: 'bg-gradient-to-tr from-red-50 via-rose-50/60 to-amber-50/40',
      border: 'border-red-200/80',
      accent: 'text-red-700',
      badge: 'bg-red-100/90 text-red-800 border-red-200',
      iconBg: 'bg-red-100 text-red-600',
    },
    'Bonbon Blings': {
      bg: 'bg-gradient-to-tr from-pink-50 via-rose-50/60 to-purple-50/40',
      border: 'border-pink-200/80',
      accent: 'text-pink-700',
      badge: 'bg-pink-100/90 text-pink-800 border-pink-200',
      iconBg: 'bg-pink-100 text-pink-600',
    },
    'DILG Region X': {
      bg: 'bg-gradient-to-tr from-blue-50 via-indigo-50/60 to-emerald-50/40',
      border: 'border-blue-200/80',
      accent: 'text-blue-700',
      badge: 'bg-blue-100/90 text-blue-800 border-blue-200',
      iconBg: 'bg-blue-100 text-blue-600',
    },
  }[sample.client];

  // Primary image source (e.g. /samples/Cover Page.png)
  const primarySrc = sample.imageUrl ? encodeURI(sample.imageUrl) : '';

  // Fallback source (e.g. /Cover Page.png if saved directly in public root)
  const fallbackSrc = sample.fileName ? encodeURI(`/${sample.fileName}`) : '';

  const handleError = () => {
    if (!triedFallback && fallbackSrc && fallbackSrc !== primarySrc) {
      setTriedFallback(true);
    } else {
      setHasError(true);
    }
  };

  const currentSrc = !triedFallback ? primarySrc : fallbackSrc;

  // If there is an image URL and it hasn't errored out, render static image
  if (currentSrc && !hasError && !isPdf) {
    return (
      <div className={`w-full h-full relative overflow-hidden ${isModal ? 'min-h-[350px] sm:min-h-[480px] bg-slate-900/5 flex items-center justify-center' : 'bg-slate-100'}`}>
        <img
          src={currentSrc}
          alt={sample.title}
          onError={handleError}
          className={`w-full h-full transition-transform duration-300 ${
            isModal 
              ? 'max-h-[75vh] w-auto max-w-full object-contain mx-auto' 
              : 'object-cover group-hover:scale-105'
          }`}
        />

        {/* Client Tag Overlay */}
        <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border shadow-2xs backdrop-blur-xs bg-white/90 ${themeClasses.accent} ${themeClasses.border}`}>
            {sample.client}
          </span>
        </div>
      </div>
    );
  }

  // STATIC IMAGE PLACEHOLDER (When image file is awaiting upload to public/samples/ folder)
  // Completely read-only for site visitors
  return (
    <div
      className={`w-full h-full relative flex flex-col items-center justify-center p-4 text-center select-none border ${
        themeClasses.border
      } ${themeClasses.bg} ${isModal ? 'min-h-[320px] sm:min-h-[420px] rounded-2xl' : 'rounded-xl'}`}
    >
      {/* Top Badges */}
      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-10">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border shadow-2xs ${themeClasses.badge}`}>
          {sample.client}
        </span>
      </div>

      {sample.dimensions && (
        <div className="absolute top-2.5 right-2.5 z-10 hidden sm:block">
          <span className="text-[10px] font-medium text-slate-500 bg-white/90 border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs">
            {sample.dimensions}
          </span>
        </div>
      )}

      {/* Center Static Icon & Placeholder Information */}
      <div className="max-w-xs space-y-2 my-auto z-10 px-2">
        <div className={`mx-auto w-12 h-12 rounded-2xl ${themeClasses.iconBg} border ${themeClasses.border} shadow-xs flex items-center justify-center`}>
          {isPdf ? (
            <FileText className="w-6 h-6" />
          ) : isGoogleSite ? (
            <Globe className="w-6 h-6" />
          ) : (
            <ImageIcon className="w-6 h-6" />
          )}
        </div>

        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-bold text-slate-800">
            {sample.format}
          </p>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/80 border border-slate-200 text-[10px] sm:text-[11px] font-mono font-medium text-slate-600 shadow-2xs">
            <span>{sample.fileName}</span>
          </div>
        </div>
      </div>

      {/* Bottom Static Indicator */}
      <div className="absolute bottom-2 text-[9px] text-slate-400 font-mono hidden sm:block">
        public/samples/{sample.fileName}
      </div>
    </div>
  );
};
