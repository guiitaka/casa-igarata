'use client';

import { useEffect, useState } from 'react';
import { BaseProps } from '@/types/global';

interface HeaderProps extends BaseProps {}

export default function Header({}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'top-0 bg-black/80 backdrop-blur-sm py-4' 
        : 'top-8 bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#"
            className="text-7xl font-extralight leading-none tracking-tight text-white"
          >
            Chácara Azul
          </a>

          {/* Menu de Navegação */}
          <nav className="flex items-center space-x-12">
            <a 
              href="#features"
              className="text-2xl font-extralight tracking-wide text-white/80 hover:text-white transition-colors duration-300"
            >
              Comodidades
            </a>
            <a 
              href="#gallery"
              className="text-2xl font-extralight tracking-wide text-white/80 hover:text-white transition-colors duration-300"
            >
              Galeria
            </a>
            <a 
              href="#location"
              className="text-2xl font-extralight tracking-wide text-white/80 hover:text-white transition-colors duration-300"
            >
              Localização
            </a>
            <a 
              href="#contact"
              className="text-2xl font-extralight tracking-wide text-white/80 hover:text-white transition-colors duration-300"
            >
              Contato
            </a>

            {/* Botão Reserve Agora */}
            <a 
              href="#contact" 
              className="text-2xl font-extralight tracking-wide text-white 
                       transition-all duration-300 
                       hover:text-white 
                       hover:scale-105
                       hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
            >
              Reserve Agora
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 