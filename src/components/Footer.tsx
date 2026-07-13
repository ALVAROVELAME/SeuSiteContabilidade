import { SITE_CONFIG } from '../data/config';

interface FooterProps {
  whatsappLink: string;
}

export function Footer({ whatsappLink }: FooterProps) {
  return (
    <footer className="py-16 bg-slate-950 text-slate-400 border-t border-slate-900 px-4 md:px-8 w-full text-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h4 className="text-white font-bold text-lg mb-4">SeuSiteContabilidade</h4>
          <p className="text-slate-400 leading-relaxed text-xs">Transformando obrigações contábeis e fiscais em inteligência financeira estratégica para a sua organização.</p>
        </div>
        <div>
          <h4 className="text-white font-bold text-md mb-4">Navegação</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#sobre" className="hover:text-teal-400 transition-all">Quem Somos</a></li>
            <li><a href="#servicos" className="hover:text-teal-400 transition-all">Nossos Serviços</a></li>
            <li><a href="#agendamento" className="hover:text-teal-400 transition-all">Agendamento</a></li>
            <li><a href={whatsappLink} className="hover:text-teal-400 transition-all">Contato Direto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-md mb-4">Informações de Contato</h4>
          <p className="text-xs text-slate-400 mb-2">📍 {SITE_CONFIG.contact.address}</p>
          <p className="text-xs text-slate-400 mb-2">📞 {SITE_CONFIG.contact.phoneFormatted}</p>
          <p className="text-xs text-slate-400">✉️ {SITE_CONFIG.contact.email}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-slate-900 text-center text-xs text-slate-600 flex flex-col sm:flex-row justify-between gap-4">
        <p>© 2026 SeuSiteContabilidade. Todos os direitos reservados.</p>
        <p className="hover:text-teal-400 transition-colors">Modelo demonstrativo disponível para personalização.</p>
      </div>
    </footer>
  );
}
