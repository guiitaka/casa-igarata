'use client';

import { useState, useEffect } from 'react';
import { BaseProps } from '@/types/global';

interface HeaderProps extends BaseProps {}

export default function Header({}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-8 pt-8">
        {/* Fundo único para toda a navegação */}
        <div className={`rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-black/50' : 'bg-white/10'
        } backdrop-blur-sm`}>
          <nav className="flex justify-between items-center h-24 px-8">
            {/* Logo com brilho mais intenso */}
            <a 
              href="#" 
              className="text-4xl font-normal tracking-wider text-white 
                       transition-all duration-300 
                       hover:text-white 
                       hover:scale-105
                       hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
            >
              Casa Igaratá
            </a>

            {/* Menu Central com brilho mais intenso */}
            <div className="flex items-center">
              {['Comodidades', 'Galeria', 'Localização', 'Contato'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl font-extralight tracking-wide text-white px-6 py-1 
                           transition-all duration-300 
                           hover:text-white 
                           hover:scale-110 
                           hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]
                           relative
                           after:content-['']
                           after:absolute
                           after:bottom-0
                           after:left-1/2
                           after:-translate-x-1/2
                           after:w-0
                           after:h-[1px]
                           after:bg-white
                           after:transition-all
                           after:duration-300
                           hover:after:w-1/2"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Botão Reserve Agora com brilho mais intenso */}
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