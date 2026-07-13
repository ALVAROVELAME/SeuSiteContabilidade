import { getResponsiveImage } from '../utils/imageLoader';

export function BlogSection() {
  const posts = [
    {
      data: "24 de Maio, 2026",
      autor: "Contador",
      titulo: "Planejamento Tributário: Como reduzir custos legalmente na sua empresa",
      image: getResponsiveImage('blog/planejamento-tributario.webp', 'Documentos fiscais sobre uma mesa')
    },
    {
      data: "15 de Maio, 2026",
      autor: "Contador",
      titulo: "Mudanças no Simples Nacional: O que muda para o seu negócio este ano",
      image: getResponsiveImage('blog/simples-nacional.webp', 'Relatorios financeiros para empresas')
    },
    {
      data: "02 de Maio, 2026",
      autor: "Contador",
      titulo: "Guia definitivo de fluxo de caixa para micro e pequenas empresas",
      image: getResponsiveImage('blog/fluxo-de-caixa.webp', 'Analise de fluxo de caixa')
    }
  ];

  return (
    <section className="py-24 w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="flex justify-between items-end mb-16 scroll-animate">
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest block mb-3">Blog Informativo</span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Últimas Postagens</h2>
          </div>
          <a href="#" className="bg-teal-500 text-slate-950 px-6 py-2.5 rounded-sm font-bold text-xs hover:bg-teal-400 transition-all">Ver Todos</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.titulo} className="group cursor-pointer scroll-animate">
              <div className="bg-slate-100 aspect-video rounded-md overflow-hidden mb-4">
                <img
                  src={post.image.src}
                  srcSet={post.image.srcSet}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  width={post.image.width}
                  height={post.image.height}
                  alt={post.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="flex gap-4 text-xs text-slate-400 mb-2">
                <span>📅 {post.data}</span>
                <span>👤 Por {post.autor}</span>
              </div>
              <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-all duration-200 leading-snug">{post.titulo}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
