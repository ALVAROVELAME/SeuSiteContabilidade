import { useEffect, useRef, useState } from 'react';

export function Partners() {
  const partners = ['Contabilidade', 'Finanças', 'Consultoria', 'Auditoria'];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isMarqueeReady, setIsMarqueeReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || isMarqueeReady) {
      return;
    }

    const startWhenIdle = () => {
      const browserWindow = window as Window & {
        requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
        cancelIdleCallback?: (handle: number) => void;
      };

      if (browserWindow.requestIdleCallback) {
        const idleId = browserWindow.requestIdleCallback(() => setIsMarqueeReady(true), { timeout: 1200 });

        return () => browserWindow.cancelIdleCallback?.(idleId);
      }

      const frameId = browserWindow.requestAnimationFrame(() => setIsMarqueeReady(true));

      return () => browserWindow.cancelAnimationFrame(frameId);
    };

    let cleanupIdle: VoidFunction | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        cleanupIdle = startWhenIdle();
        observer.disconnect();
      },
      {
        rootMargin: '200px 0px',
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cleanupIdle?.();
    };
  }, [isMarqueeReady]);

  return (
    <section ref={sectionRef} className="py-12 bg-white border-b border-slate-100 w-full overflow-hidden">
      <div className="partners-marquee-mask scroll-animate opacity-45 grayscale">
        <div className={`partners-marquee-track flex w-max items-center gap-8 ${isMarqueeReady ? 'is-running' : ''}`}>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner}-${index}`}
              aria-hidden={index >= partners.length}
              className="w-[76vw] sm:w-[42vw] md:w-[28vw] lg:w-60 shrink-0 text-center text-lg font-bold tracking-tight text-slate-900"
            >
              SeuSite<span className="text-teal-600 font-extrabold">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
