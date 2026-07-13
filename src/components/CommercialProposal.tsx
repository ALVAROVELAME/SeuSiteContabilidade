import { getResponsiveImage } from '../utils/imageLoader';

interface CommercialProposalProps {
  whatsappLink: string;
}

const proposalImage = getResponsiveImage('proposta/dashboard-financeiro.webp', 'Dashboard financeiro em notebook');

export function CommercialProposal({ whatsappLink }: CommercialProposalProps) {
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
          <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white font-bold bg-teal-600 px-4 py-2 rounded-sm text-sm">Modelo pronto para sua marca</span>
          </div>
        </div>
        <div className="scroll-animate">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">Site pronto para vender</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">Transforme seu escritório contábil em uma presença digital de confiança</h2>
          <p className="text-slate-500 mb-6 leading-relaxed">
            Este é um modelo premium para contadores que querem parecer mais profissionais, explicar seus serviços com clareza e receber pedidos de atendimento direto pelo WhatsApp.
          </p>
          <div className="space-y-3 mb-8 text-sm text-slate-600">
            <p className="flex items-center gap-2">✅ <span className="font-medium text-slate-900">Mais autoridade:</span> visual moderno para gerar confiança antes do primeiro contato.</p>
            <p className="flex items-center gap-2">✅ <span className="font-medium text-slate-900">Mais contatos:</span> chamadas fortes levando o visitante direto para seu WhatsApp.</p>
            <p className="flex items-center gap-2">✅ <span className="font-medium text-slate-900">Pronto para personalizar:</span> troque logo, cores, textos, endereço e serviços do seu escritório.</p>
          </div>
          <a href={whatsappLink} className="bg-slate-900 text-white px-8 py-3 rounded-sm font-bold text-sm hover:bg-teal-600 transition-all inline-block shadow-md">Quero comprar este modelo</a>
        </div>
      </div>
    </section>
  );
}
