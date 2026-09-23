import React, { useState, useRef } from 'react';
import { 
  Copy, 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Camera,
  Upload,
  RotateCcw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [profileImage, setProfileImage] = useState<string>(() => {
    return localStorage.getItem('nina_custom_photo') || 'profile.png';
  });
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    return Boolean(localStorage.getItem('nina_custom_photo'));
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Client-side background removal helper for user-uploaded photos
  const processCutout = (dataUrl: string, callback: (resultUrl: string) => void) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) {
        callback(dataUrl);
        return;
      }
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Sample corners to sample background color
      const corners = [
        0,
        (canvas.width - 1) * 4,
        ((canvas.height - 1) * canvas.width) * 4,
        ((canvas.height - 1) * canvas.width + (canvas.width - 1)) * 4
      ];

      let bgR = 0, bgG = 0, bgB = 0;
      for (const idx of corners) {
        bgR += data[idx];
        bgG += data[idx + 1];
        bgB += data[idx + 2];
      }
      bgR /= corners.length;
      bgG /= corners.length;
      bgB /= corners.length;

      const tolerance = 40;
      const feather = 24;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

        if (dist < tolerance) {
          data[i + 3] = 0;
        } else if (dist < tolerance + feather) {
          const factor = (dist - tolerance) / feather;
          data[i + 3] = Math.round(data[i + 3] * factor);
        }
      }

      ctx.putImageData(imageData, 0, 0);
      callback(canvas.toDataURL('image/png'));
    };
    img.src = dataUrl;
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isPng = file.type === 'image/png';
      const reader = new FileReader();
      reader.onload = (event) => {
        const rawResult = event.target?.result as string;
        
        // If user uploaded a transparent PNG, use it directly; otherwise, run auto cutout
        if (isPng) {
          setProfileImage(rawResult);
          setIsCustomPhoto(true);
          try {
            localStorage.setItem('nina_custom_photo', rawResult);
          } catch {
            // storage quota fallback
          }
        } else {
          processCutout(rawResult, (cutoutResult) => {
            setProfileImage(cutoutResult);
            setIsCustomPhoto(true);
            try {
              localStorage.setItem('nina_custom_photo', cutoutResult);
            } catch {
              // storage quota fallback
            }
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setProfileImage('profile.png');
    setIsCustomPhoto(false);
    localStorage.removeItem('nina_custom_photo');
  };

  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white text-slate-900 border-b border-slate-100">
      {/* Subtle Warm Sunset Ambient Glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(251,146,60,0.12),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-rose-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 left-10 w-96 h-96 bg-amber-400/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Split Layout on Desktop / Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Text Details (Matching Attached Pic) & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            
            {/* Availability Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs text-slate-700 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-emerald-700">Available Immediately</span>
              <span className="text-slate-300">•</span>
              <span>Full-time / Part-time Remote</span>
              <span className="text-slate-300">•</span>
              <span className="text-orange-700 font-semibold">GMT+8 (US/EU Friendly)</span>
            </div>

            {/* Heading & Sub-headline (Exact match to second pic) */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-800">
                Virtual Assistant, legal and admin operations
              </p>
            </div>

            {/* Pitch for Recruiters (Exact text retained) */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Empowering busy founders, executives, and remote teams with proactive executive coordination, 
              inbox zero management, high-accuracy document preparation, and confidential administration. 
              Backed by <strong className="text-slate-900 font-bold">480 hours in regional government legal services</strong>, 
              official <strong className="text-orange-700 font-bold">Civil Service Professional Eligibility</strong>, and 
              proven e-commerce operations.
            </p>

            {/* Prominent Call to Action Buttons */}
            <div className="pt-2 pb-1">
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="#contact"
                  className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:via-orange-600 hover:to-rose-600 text-white font-extrabold text-base sm:text-lg transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/45 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 cursor-pointer"
                >
                  <span>Hire Niña / Contact</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-orange-50/60 hover:border-orange-400 text-slate-900 font-bold text-sm sm:text-base border-2 border-slate-200 hover:border-orange-300 transition-all flex items-center gap-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <FileText className="w-5 h-5 text-orange-600" />
                  <span>View / Print Resume (PDF)</span>
                </button>

                <a
                  href="#work-samples"
                  className="px-5 py-3.5 sm:py-4 rounded-2xl text-slate-700 hover:text-orange-600 hover:bg-orange-50/60 font-bold text-sm sm:text-base transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Browse Work Samples</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <button
                onClick={handleCopyEmail}
                className="hover:text-orange-600 flex items-center gap-1.5 transition-colors cursor-pointer group"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-slate-700 group-hover:text-orange-600">{PERSONAL_INFO.email}</span>
                {copiedEmail ? (
                  <span className="text-[10px] text-orange-700 font-bold ml-1 bg-orange-100 border border-orange-200 px-1.5 py-0.5 rounded">Copied!</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="hover:text-rose-600 flex items-center gap-1.5 transition-colors cursor-pointer group"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="text-slate-700 group-hover:text-rose-600">{PERSONAL_INFO.phone}</span>
                {copiedPhone ? (
                  <span className="text-[10px] text-rose-700 font-bold ml-1 bg-rose-100 border border-rose-200 px-1.5 py-0.5 rounded">Copied!</span>
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>

              <span className="flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Misamis Oriental, Philippines</span>
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Profile Picture on Right Side */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2 relative py-4">
            
            {/* Subtle Sunset Halo */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-amber-400/20 via-orange-400/15 to-rose-400/20 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="relative group w-full max-w-sm sm:max-w-md flex flex-col items-center">
              
              {/* Floating Verified Candidate Badge */}
              <div className="absolute -top-3 right-4 z-20 px-3.5 py-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white text-[11px] font-black uppercase tracking-wider rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span>Verified Candidate</span>
              </div>

              {/* High-Impact Portrait Frame */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-amber-100 via-orange-50 to-rose-100 border-2 border-orange-200/80 group-hover:border-orange-400 shadow-2xl shadow-orange-500/15 transition-all duration-300 cursor-pointer"
                title="Click to change or upload photo"
              >
                <img
                  src={profileImage}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== `${window.location.origin}/profile.png`) {
                      target.src = 'profile.png';
                    }
                  }}
                />

                {/* Bottom Overlay Gradient with Name and Role */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-5 text-center transition-opacity">
                  <span className="text-base font-extrabold text-white tracking-wide block drop-shadow-sm">
                    {PERSONAL_INFO.name}
                  </span>
                  <div className="text-xs text-amber-200 font-semibold mt-0.5">
                    Virtual Assistant • Legal & Admin Operations
                  </div>
                </div>

                {/* Floating "Change / Upload Photo" Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="absolute top-3.5 left-3.5 px-3 py-1.5 rounded-xl bg-white/95 hover:bg-white text-slate-800 text-xs font-bold backdrop-blur-md border border-orange-200 shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 z-20"
                >
                  <Camera className="w-3.5 h-3.5 text-orange-600" />
                  <span>Change Photo</span>
                </button>
              </div>

              {/* Helper Bar */}
              <div className="mt-3.5 flex items-center justify-between w-full px-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Photo saved in browser
                </span>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="text-orange-600 hover:text-orange-700 font-bold cursor-pointer underline flex items-center gap-1"
                  >
                    <Upload className="w-3.5 h-3.5" /> Upload Photo
                  </button>

                  {isCustomPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      className="p-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs transition-colors cursor-pointer"
                      title="Reset photo"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/*"
                className="hidden"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
