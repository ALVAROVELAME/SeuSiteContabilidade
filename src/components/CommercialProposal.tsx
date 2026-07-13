import { getResponsiveImage } from '../utils/imageLoader';

interface CommercialProposalProps {
  whatsappLink: string;
}

const proposalImage = getResponsiveImage('proposta/dashboard-financeiro.webp', 'Dashboard financeiro em notebook');

export function CommercialProposal({ whatsappLink }: CommercialProposalProps) {
  const highlights = [
    {
      title: 'Mais autoridade',
      description: 'visual moderno para gerar confiança antes do primeiro contato.',
    },
    {
      title: 'Mais contatos',
      description: 'chamadas fortes levando o visitante direto para seu WhatsApp.',
    },
    {
      title: 'Pronto para personalizar',
      description: 'troque logo, cores, textos, endereço e serviços do seu escritório.',
    },
  ];

  return (
    <section className="py-24 w-full bg-teal-50/30 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="relative group overflow-hidden rounded-2xl shadow-xl scroll-animate">
          <img
            src={proposalImage.src}
            srcSet={proposalImage.srcSet}
            sizes="(min-width: 1024px) 50vw, 100vw"
            width={proposalImage.width}
            height={proposalImage.height}
            alt={proposalImage.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 rounded-sm bg-slate-950/85 px-4 py-2 text-xs font-bold uppercase tracking-widest text-teal-300">
            Modelo pronto para sua marca
          </div>
        </div>

        <div className="scroll-animate">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">Site pronto para vender</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">Transforme seu escritório contábil em uma presença digital de confiança</h2>
          <p className="text-slate-500 mb-6 leading-relaxed">
            Este é um modelo premium para contadores que querem parecer mais profissionais, explicar seus serviços com clareza e receber pedidos de atendimento direto pelo WhatsApp.
          </p>

          <div className="space-y-4 mb-8">
            {highlights.map((item) => (
              <div key={item.title} className="flex gap-3 text-sm">
                <span className="mt-0.5 text-teal-600 font-black">✓</span>
                <p className="text-sm leading-relaxed text-slate-600">
                  <span className="font-bold text-slate-900">{item.title}:</span> {item.description}
                </p>
              </div>
            ))}
          </div>

          <a href={whatsappLink} className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold text-sm hover:bg-teal-600 transition-all inline-block shadow-md">Quero comprar este modelo</a>
        </div>
      </div>
    </section>
  );
}
