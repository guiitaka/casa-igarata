'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HeroMobile from './HeroMobile';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && textRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        
        heroRef.current.style.transform = `translateY(${rate}px)`;
        
        const opacity = 1 - Math.min(1, Math.max(0, scrolled / 700));
        const scale = 1 + scrolled * 0.001;
        textRef.current.style.opacity = opacity.toString();
        textRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Versão Desktop */}
      <div className="hidden md:block">
        <section className="relative h-screen overflow-hidden">
          {/* Imagem de Fundo com Parallax */}
          <div ref={heroRef} className="absolute inset-0 z-0">
            <Image
              src="/images/casa/hero.jpeg"
              alt="Casa de Luxo"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Texto Principal e Botão */}
          <div 
            className="relative z-10 h-full flex flex-col items-center justify-center text-white"
          >
            <h1 
              ref={textRef}
              className="text-[120px] font-extralight leading-none tracking-tight mb-12"
            >
              Você merece isso
            </h1>
            
            <a 
              href="#features"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full 
                       text-2xl font-extralight tracking-wide text-white 
                       transition-colors duration-300 
                       hover:bg-white/20"
            >
              Saiba mais
            </a>
          </div>
        </section>
      </div>

      {/* Versão Mobile */}
      <HeroMobile />
    </>
  );
}