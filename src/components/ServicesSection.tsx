interface ServicesSectionProps {
  whatsappLink: string;
}

export function ServicesSection({ whatsappLink }: ServicesSectionProps) {
  const services = [
    {
      icon: '📄',
      title: 'Demonstrações Financeiras',
      description: 'Estruturação de balanços patrimoniais, DRE e relatórios consolidados para tomada de decisões seguras.',
    },
    {
      icon: '💰',
      title: 'Planejamento Tributário',
      description: 'Análise técnica detalhada focada em reduzir legalmente a carga de impostos da sua empresa.',
    },
    {
      icon: '📊',
      title: 'Rotinas Contábeis',
      description: 'Escrituração digital completa, conciliação bancária rigorosa e assessoria contínua para o dia a dia.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50 border-t border-b border-slate-100 w-full" id="servicos">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14 scroll-animate">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Soluções Eficientes para Todo Tipo de Empresa</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            Serviços organizados para empresas que precisam de clareza fiscal, rotina contábil segura e apoio estratégico para crescer com previsibilidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.title} className="group scroll-animate rounded-md border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-xl transition-colors group-hover:bg-teal-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">{service.description}</p>
              <a href={whatsappLink} className="inline-flex items-center text-sm font-semibold text-slate-900 transition-colors hover:text-teal-600">
                Ler Mais
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
