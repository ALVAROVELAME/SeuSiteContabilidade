import { getResponsiveImage } from '../utils/imageLoader';

interface HeroSectionProps {
  whatsappLink: string;
}

const heroImage = getResponsiveImage('hero/hero-contabilidade.webp', 'Mesa de trabalho com documentos contabeis');

export function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <header className="relative w-full min-h-[100dvh] flex items-center justify-center text-white overflow-hidden bg-slate-950">
      <img
        src={heroImage.src}
        srcSet={heroImage.srcSet}
        sizes="100vw"
        width={heroImage.width}
        height={heroImage.height}
        alt={heroImage.alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center min-h-full min-w-full pointer-events-none"
      />

      <div className="absolute inset-0 bg-slate-950/45 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.28)_0%,rgba(15,23,42,0.12)_48%,rgba(15,23,42,0.55)_100%)] z-10 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center justify-center pt-28">
        <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 text-xs font-semibold rounded-full mb-6 uppercase tracking-wider scroll-animate">
          Modelo demonstrativo
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-white drop-shadow-xl scroll-animate">
          Serviços Fiscais Especializados para <br />
          <span className="text-teal-300">Pessoas Físicas e Empresas</span>
        </h1>

        <p className="text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-md scroll-animate">
          Garantimos a conformidade fiscal e a saúde financeira da sua organização através de soluções contábeis estratégicas e atendimento consultivo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate">
          <a href={whatsappLink} className="bg-teal-500 text-slate-950 px-8 py-3.5 rounded-sm font-bold text-sm hover:bg-teal-400 hover:scale-105 transition-all text-center shadow-lg">
            Fale Conosco
          </a>
          <a href="#servicos" className="border border-white/40 text-white px-8 py-3.5 rounded-sm font-bold text-sm hover:bg-white/10 transition-all text-center">
            Explorar Serviços
          </a>
        </div>
      </div>
    </header>
  );
}
