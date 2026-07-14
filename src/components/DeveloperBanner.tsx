import { useState } from 'react';

interface DeveloperBannerProps {
  whatsappLink: string;
}

export function DeveloperBanner({ whatsappLink }: DeveloperBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes developer-banner-pulse {
          0%, 100% {
            box-shadow: 0 16px 38px rgba(15, 23, 42, 0.13), 0 0 0 1px rgba(20, 184, 166, 0.18);
          }
          50% {
            box-shadow: 0 20px 46px rgba(15, 23, 42, 0.18), 0 0 0 4px rgba(20, 184, 166, 0.18);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .developer-banner-pulse {
            animation: none;
          }
        }
      `}</style>

      <div className="fixed left-0 right-0 top-[76px] z-40 px-4 md:px-8">
        <div className="developer-banner-pulse relative mx-auto w-full max-w-6xl overflow-hidden rounded-lg border border-teal-300/80 bg-teal-50/95 text-slate-900 shadow-xl shadow-slate-950/10 backdrop-blur-md animate-[developer-banner-pulse_5.5s_ease-in-out_infinite]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500" />

          <div className="flex items-center gap-3 px-3 py-3 pl-14 sm:px-4 sm:py-3.5 sm:pl-16 md:gap-4">
            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-md border border-teal-200 bg-white text-xs font-black text-teal-700 shadow-sm sm:flex">
              Site
            </div>

            <div className="min-w-0 flex-1">
              <span className="mb-1 hidden text-[10px] font-black uppercase tracking-widest text-teal-700 sm:block">
                Aviso do modelo demonstrativo
              </span>
              <p className="text-sm font-bold leading-snug text-slate-900 sm:text-[15px]">
                <span className="hidden md:inline">
                  Gostou deste site? Personalize com sua marca, cores, serviços e WhatsApp.
                </span>
                <span className="md:hidden">
                  Personalize este site com sua marca.
                </span>
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-md shadow-slate-950/15 transition-all hover:-translate-y-px hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-teal-50 sm:px-5 sm:py-2.5"
            >
              <span className="hidden sm:inline">Solicitar personalização</span>
              <span className="sm:hidden">Personalizar</span>
            </a>

            <button
              type="button"
              aria-label="Fechar aviso"
              onClick={() => setIsVisible(false)}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-950 shadow-md shadow-slate-950/10 transition-all hover:-translate-y-1/2 hover:scale-105 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2 focus:ring-offset-teal-50"
            >
              <span aria-hidden="true" className="block -translate-y-px text-2xl font-semibold leading-none">×</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
