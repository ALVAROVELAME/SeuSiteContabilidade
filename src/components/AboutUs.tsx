import { getResponsiveImage } from '../utils/imageLoader';

interface AboutUsProps {
  whatsappLink: string;
}

const aboutImage = getResponsiveImage('sobre/equipe-contabil.webp', 'Profissionais de contabilidade trabalhando juntos');

export function AboutUs({ whatsappLink }: AboutUsProps) {
  return (
    <section className="py-24 w-full bg-white" id="sobre">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="relative scroll-animate">
          <div className="relative bg-slate-200 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={aboutImage.src}
              srcSet={aboutImage.srcSet}
              sizes="(min-width: 1024px) 50vw, 100vw"
              width={aboutImage.width}
              height={aboutImage.height}
              alt={aboutImage.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 !h-full !w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="scroll-animate">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">Quem Somos</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">Serviços Contábeis Profissionais para o seu Negócio</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Nossa missão é simplificar a burocracia contábil da sua empresa. Atuamos de forma consultiva, analisando gargalos fiscais e identificando oportunidades reais de economia tributária para que você foque no que importa: crescer.
          </p>
          <a href={whatsappLink} className="bg-teal-500 text-slate-950 px-8 py-3 rounded-sm font-bold text-sm hover:bg-teal-400 transition-all inline-block">Saber Mais</a>
        </div>
      </div>
    </section>
  );
}
