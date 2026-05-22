import { useEffect, useRef } from 'react';

/**
 * Componente Lightbox para visualização de imagens em tela cheia.
 * Suporta navegação por teclado, cliques e gestos de toque (swipe).
 */
export function Lightbox({ index, images, onClose, onNext, onPrev }: any) {
  // Referência para armazenar a coordenada X inicial do toque
  const touchStartX = useRef(0);

  // Efeito para capturar navegação via teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext(); // Próxima imagem
      if (e.key === 'ArrowLeft') onPrev();  // Imagem anterior
      if (e.key === 'Escape') onClose();    // Fecha o Lightbox
    };

    window.addEventListener('keydown', handleKeyDown);
    // Limpeza do listener para evitar vazamento de memória
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onClose]);

  /**
   * Registra a posição X inicial onde o usuário tocou na tela.
   */
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  /**
   * Calcula a distância do arraste e decide se deve avançar ou retroceder.
   */
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX;

    // Define uma zona morta de 50px para evitar disparos acidentais
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext(); // Arraste para a esquerda (próximo)
      else onPrev();          // Arraste para a direita (anterior)
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Botão de Fechar: Posicionado no topo direito */}
      <button 
        className="absolute top-6 right-6 text-white/50 hover:text-white z-[210] transition-colors" 
        onClick={onClose}
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      {/* Botão de Navegação Anterior */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }} 
        className="absolute left-8 p-4 text-white hover:text-orange-500 bg-white/5 rounded-full z-[210] transition-all hover:bg-white/10"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      {/* Área Central: Exibição da imagem e contador */}
      <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <img 
          src={images[index]} 
          alt="Visualização" 
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 pointer-events-auto"
          onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o Lightbox
        />
        
        {/* Indicador de página (ex: 1 / 5) */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-2">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>

      {/* Botão de Navegação Próximo */}
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }} 
        className="absolute right-8 p-4 text-white hover:text-orange-500 bg-white/5 rounded-full z-[210] transition-all hover:bg-white/10"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  );
}