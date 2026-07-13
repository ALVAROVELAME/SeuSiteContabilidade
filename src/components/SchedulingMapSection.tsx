import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { SITE_CONFIG, getWhatsappLink } from '../data/config';

type SchedulingForm = {
  nome: string;
  telefone: string;
  servico: string;
  data: string;
  horario: string;
  mensagem: string;
};

type FormErrors = Partial<Record<keyof SchedulingForm, string>>;

const serviceOptions = [
  'Abertura de empresa',
  'Planejamento tributario',
  'Regularizacao fiscal',
  'Consultoria contabil',
];

const initialForm: SchedulingForm = {
  nome: '',
  telefone: '',
  servico: serviceOptions[0],
  data: '',
  horario: '',
  mensagem: '',
};

function getTodayInputValue() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);

  return localDate.toISOString().slice(0, 10);
}

function onlyDigits(value: string) {
  return value.replace(/\D/g, '').slice(0, 11);
}

function formatPhone(value: string) {
  const digits = onlyDigits(value);

  if (digits.length === 0) {
    return '';
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateForm(form: SchedulingForm) {
  const errors: FormErrors = {};
  const phoneDigits = onlyDigits(form.telefone);

  if (form.nome.trim().length < 3) {
    errors.nome = 'Informe um nome valido.';
  }

  if (phoneDigits.length < 10) {
    errors.telefone = 'Informe um telefone com DDD.';
  }

  if (!serviceOptions.includes(form.servico)) {
    errors.servico = 'Selecione um servico valido.';
  }

  if (!form.data) {
    errors.data = 'Escolha uma data.';
  } else if (form.data < getTodayInputValue()) {
    errors.data = 'Escolha uma data atual ou futura.';
  }

  if (!form.horario) {
    errors.horario = 'Escolha um horario.';
  }

  if (form.mensagem.length > 280) {
    errors.mensagem = 'Use no maximo 280 caracteres.';
  }

  return errors;
}

export function SchedulingMapSection() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState<SchedulingForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const mapExternalLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.contact.address)}`;
  const todayInputValue = getTodayInputValue();

  const updateField = (field: keyof SchedulingForm, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
    setErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[field];

      return nextErrors;
    });
  };

  const getFieldClass = (field: keyof SchedulingForm, extraClasses = '') => {
    const stateClasses = errors[field]
      ? 'border-red-400 bg-red-50/60 focus:border-red-500'
      : 'border-slate-200 bg-slate-50 focus:border-teal-500 focus:bg-white';

    return `w-full rounded-sm border px-4 py-3 text-sm text-slate-900 outline-none ${stateClasses} ${extraClasses}`;
  };

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (!mapContainer || shouldLoadMap) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setShouldLoadMap(true);
        observer.disconnect();
      },
      {
        rootMargin: '300px 0px',
      },
    );

    observer.observe(mapContainer);

    return () => observer.disconnect();
  }, [shouldLoadMap]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanForm = {
      ...form,
      nome: form.nome.trim().replace(/\s+/g, ' '),
      mensagem: form.mensagem.trim(),
    };
    const nextErrors = validateForm(cleanForm);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setForm(cleanForm);

    const message = [
      'Ola, quero agendar uma consulta contabil.',
      `Nome: ${cleanForm.nome}`,
      `Telefone: ${cleanForm.telefone}`,
      `Servico: ${cleanForm.servico}`,
      `Data: ${cleanForm.data}`,
      `Horario: ${cleanForm.horario}`,
      cleanForm.mensagem ? `Mensagem: ${cleanForm.mensagem}` : '',
    ].filter(Boolean).join('\n');

    window.open(getWhatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" data-hide-floating-whatsapp="true" className="py-24 bg-slate-50 w-full border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-stretch">
          <div className="scroll-animate">
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">Agendamento</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Marque uma conversa com um especialista</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Informe seus dados e envie a solicitação direto para o WhatsApp. A equipe retorna com a confirmação do melhor horario.
            </p>

            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-md shadow-sm p-6 md:p-8 space-y-4">
              <div>
                <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Nome</label>
                <input
                  id="nome"
                  type="text"
                  value={form.nome}
                  onChange={(event) => updateField('nome', event.target.value)}
                  onBlur={() => updateField('nome', form.nome.trim().replace(/\s+/g, ' '))}
                  className={getFieldClass('nome')}
                  placeholder="Seu nome completo"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={errors.nome ? 'nome-error' : undefined}
                />
                {errors.nome ? <p id="nome-error" className="mt-2 text-xs font-semibold text-red-600">{errors.nome}</p> : null}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="telefone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Telefone</label>
                  <input
                  id="telefone"
                  type="tel"
                  value={form.telefone}
                    onChange={(event) => updateField('telefone', formatPhone(event.target.value))}
                    className={getFieldClass('telefone')}
                    placeholder="(75) 99999-9999"
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={15}
                    aria-invalid={Boolean(errors.telefone)}
                    aria-describedby={errors.telefone ? 'telefone-error' : undefined}
                  />
                  {errors.telefone ? <p id="telefone-error" className="mt-2 text-xs font-semibold text-red-600">{errors.telefone}</p> : null}
                </div>

                <div>
                  <label htmlFor="servico" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Servico</label>
                  <select
                    id="servico"
                    value={form.servico}
                    onChange={(event) => updateField('servico', event.target.value)}
                    className={getFieldClass('servico')}
                    aria-invalid={Boolean(errors.servico)}
                    aria-describedby={errors.servico ? 'servico-error' : undefined}
                  >
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                  {errors.servico ? <p id="servico-error" className="mt-2 text-xs font-semibold text-red-600">{errors.servico}</p> : null}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="data" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Data</label>
                  <input
                    id="data"
                    type="date"
                    value={form.data}
                    onChange={(event) => updateField('data', event.target.value)}
                    className={getFieldClass('data')}
                    min={todayInputValue}
                    aria-invalid={Boolean(errors.data)}
                    aria-describedby={errors.data ? 'data-error' : undefined}
                  />
                  {errors.data ? <p id="data-error" className="mt-2 text-xs font-semibold text-red-600">{errors.data}</p> : null}
                </div>

                <div>
                  <label htmlFor="horario" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Horario</label>
                  <input
                    id="horario"
                    type="time"
                    value={form.horario}
                    onChange={(event) => updateField('horario', event.target.value)}
                    className={getFieldClass('horario')}
                    aria-invalid={Boolean(errors.horario)}
                    aria-describedby={errors.horario ? 'horario-error' : undefined}
                  />
                  {errors.horario ? <p id="horario-error" className="mt-2 text-xs font-semibold text-red-600">{errors.horario}</p> : null}
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  value={form.mensagem}
                  onChange={(event) => updateField('mensagem', event.target.value.slice(0, 280))}
                  className={getFieldClass('mensagem', 'min-h-28 resize-y')}
                  placeholder="Conte rapidamente o que precisa resolver"
                  maxLength={280}
                  aria-invalid={Boolean(errors.mensagem)}
                  aria-describedby={errors.mensagem ? 'mensagem-error' : 'mensagem-count'}
                />
                <div className="mt-2 flex items-center justify-between gap-3">
                  {errors.mensagem ? <p id="mensagem-error" className="text-xs font-semibold text-red-600">{errors.mensagem}</p> : <span />}
                  <p id="mensagem-count" className="text-xs font-semibold text-slate-400">{form.mensagem.length}/280</p>
                </div>
              </div>

              <button type="submit" className="w-full bg-slate-950 text-white px-6 py-4 rounded-sm font-bold text-sm hover:bg-teal-600 transition-all shadow-md">
                Enviar agendamento pelo WhatsApp
              </button>
            </form>
          </div>

          <div id="localizacao" className="scroll-animate">
            <h3 className="text-3xl font-bold mb-2 text-slate-900">Nossa Localizacao</h3>
            <p className="text-slate-500 mb-6">{SITE_CONFIG.contact.address}</p>

            <div
              ref={mapContainerRef}
              className="w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl"
            >
              {shouldLoadMap ? (
                <iframe
                  title="Mapa de localizacao do escritorio"
                  src={SITE_CONFIG.contact.mapLink}
                  width="100%"
                  height="100%"
                  className="border-none"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-4 bg-white px-6 text-center">
                  <p className="max-w-sm text-sm text-slate-500">
                    O mapa interativo sera carregado quando esta secao se aproximar da tela.
                  </p>
                  <a
                    href={mapExternalLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-teal-500 hover:text-teal-600"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
