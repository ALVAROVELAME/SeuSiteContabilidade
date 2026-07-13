import { getResponsiveImage } from '../utils/imageLoader';

const testimonialAvatars = {
  amanda: getResponsiveImage('depoimentos/amanda-silva.webp', 'Amanda Silva'),
  ricardo: getResponsiveImage('depoimentos/ricardo-mendes.webp', 'Ricardo Mendes'),
};

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-950 text-white w-full relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="mb-16 scroll-animate">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-3">Parcerias de Sucesso</span>
          <h2 className="text-3xl font-bold tracking-tight">Aprovado por Empresas como a Sua</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#0f1b29] p-8 rounded-sm border border-slate-800 hover:border-teal-500 transition-colors scroll-animate">
            <p className="text-slate-300 italic mb-6">"Excelente transição de sistema. A equipe reduziu toda a nossa burocracia interna e conseguimos focar 100% nas nossas vendas, sabendo que a parte fiscal está impecável."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full overflow-hidden">
                <img
                  src={testimonialAvatars.amanda.src}
                  srcSet={testimonialAvatars.amanda.srcSet}
                  sizes="40px"
                  width={testimonialAvatars.amanda.width}
                  height={testimonialAvatars.amanda.height}
                  alt={testimonialAvatars.amanda.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm">Amanda Silva</h4>
                <span className="text-xs text-slate-500">Diretora, TechStore</span>
              </div>
            </div>
          </div>

          <div className="bg-[#0f1b29] p-8 rounded-sm border border-slate-800 hover:border-teal-500 transition-colors scroll-animate">
            <p className="text-slate-300 italic mb-6">"O planejamento tributário que fizeram poupou milhares de reais logo no primeiro trimestre do ano. Recomendo muito o modelo de atendimento consultivo deles."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full overflow-hidden">
                <img
                  src={testimonialAvatars.ricardo.src}
                  srcSet={testimonialAvatars.ricardo.srcSet}
                  sizes="40px"
                  width={testimonialAvatars.ricardo.width}
                  height={testimonialAvatars.ricardo.height}
                  alt={testimonialAvatars.ricardo.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm">Ricardo Mendes</h4>
                <span className="text-xs text-slate-500">Fundador, Construtora RM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
