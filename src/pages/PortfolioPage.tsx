import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { FloatingWhatsapp } from '../components/FloatingWhatsapp';
import { GlobalEffects } from '../components/GlobalEffects';

// Importação da configuração global de contato
import { getWhatsappLink } from '../data/config';

// Importação dos novos componentes isolados
import { DeveloperBanner } from '../components/DeveloperBanner';
import { HeroSection } from '../components/HeroSection';
import { Partners } from '../components/Partners';
import { CommercialProposal } from '../components/CommercialProposal';
import { AboutUs } from '../components/AboutUs';
import { ServicesSection } from '../components/ServicesSection';
import { HistorySection } from '../components/HistorySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BlogSection } from '../components/BlogSection';
import { FaqSection } from '../components/FaqSection';
import { SchedulingMapSection } from '../components/SchedulingMapSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';

export default function PortfolioPage() {
  // Hook isolado para controlar as animações após os dados estarem prontos no DOM
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const timer = setTimeout(() => {
      const animatedElements = document.querySelectorAll('.scroll-animate');
      animatedElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Consumindo o link do WhatsApp de forma global e centralizada
  const whatsappLink = getWhatsappLink();

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-800 selection:bg-teal-100 font-sans scroll-smooth overflow-x-hidden w-full">
      {/* Estilos CSS Controlados para Scroll Animation de Alta Performance */}
      <style>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .scroll-animate.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <GlobalEffects />

      <FloatingWhatsapp />
      <Navbar />

      {/* BANNER DE VENDA DO DESENVOLVEDOR */}
      <DeveloperBanner whatsappLink={getWhatsappLink("Ola! Quero comprar e personalizar este modelo de site para contabilidade.")} />

      <main>
        {/* HERO SECTION */}
        <HeroSection whatsappLink={whatsappLink} />

        {/* LOGOS / PARCEIROS */}
        <Partners />

        {/* PROPOSTA COMERCIAL */}
        <CommercialProposal whatsappLink={whatsappLink} />

        {/* QUEM SOMOS */}
        <div className="scroll-animate">
          <AboutUs whatsappLink={whatsappLink} />
        </div>

        {/* CARDS DE SERVIÇOS */}
        <ServicesSection whatsappLink={whatsappLink} />

        {/* TRAJETÓRIA */}
        <HistorySection whatsappLink={whatsappLink} />

        {/* DEPOIMENTOS */}
        <TestimonialsSection />

        {/* POSTS RECENTES */}
        <BlogSection />

        {/* PERGUNTAS FREQUENTES */}
        <FaqSection />

        {/* AGENDAMENTO E MAPA */}
        <SchedulingMapSection />

        {/* BANNER INFERIOR DE CONSULTA GRATUITA */}
        <CtaBanner whatsappLink={whatsappLink} />
      </main>

      {/* RODAPÉ CORPORATIVO */}
      <Footer whatsappLink={whatsappLink} />
    </div>
  );
}
