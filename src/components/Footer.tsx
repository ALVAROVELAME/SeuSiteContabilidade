import { SITE_CONFIG } from '../data/config';

interface FooterProps {
  whatsappLink: string;
}

export function Footer({ whatsappLink }: FooterProps) {
  const navigationLinks = [
    { label: 'Quem Somos', href: '#sobre' },
    { label: 'Nossos Serviços', href: '#servicos' },
    { label: 'Agendamento', href: '#agendamento' },
    { label: 'Contato Direto', href: whatsappLink },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 px-4 md:px-8 w-full text-sm">
      <div className="max-w-6xl mx-auto py-10 md:py-12">
        <div className="grid md:grid-cols-[1.2fr_0.8fr_1fr] gap-8 md:gap-10 items-start">
          <div>
            <p className="text-lg font-bold tracking-tight text-white">
              SeuSite<span className="text-teal-400 font-extrabold">Contabilidade</span>
            </p>
            <p className="mt-3 max-w-sm leading-relaxed text-xs text-slate-300">
              Transformando obrigações contábeis e fiscais em inteligência financeira estratégica para a sua organização.
            </p>
            <a
              href={whatsappLink}
              className="mt-4 inline-flex items-center justify-center rounded-sm bg-teal-500 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-teal-400"
            >
              Falar com especialista
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Navegação</h4>
            <ul className="space-y-2 text-xs">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-slate-300 hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Contato</h4>
            <div className="space-y-2 text-xs leading-relaxed">
              <p><span className="font-bold text-teal-400">Endereço:</span> {SITE_CONFIG.contact.address}</p>
              <p><span className="font-bold text-teal-400">Telefone:</span> {SITE_CONFIG.contact.phoneFormatted}</p>
              <p><span className="font-bold text-teal-400">E-mail:</span> {SITE_CONFIG.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-5 text-xs text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
          <p>© 2026 SeuSiteContabilidade. Todos os direitos reservados.</p>
          <p>Modelo demonstrativo disponível para personalização.</p>
        </div>
      </div>
    </footer>
  );
}
