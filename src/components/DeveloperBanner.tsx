interface DeveloperBannerProps {
  whatsappLink: string;
}

export function DeveloperBanner({ whatsappLink }: DeveloperBannerProps) {
  return (
    <div className="fixed top-20 w-full z-40 bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-3 px-4 text-center text-xs md:text-sm font-semibold shadow-md animate-pulse">
      Modelo premium para escritórios de contabilidade. Quer este site com sua marca, cores e WhatsApp?
      <a href={whatsappLink} className="underline ml-2 hover:text-slate-100 transition-all font-bold">Solicitar personalização</a>
    </div>
  );
}
