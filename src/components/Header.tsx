'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
            className="text-3xl font-light tracking-wide text-white"
          >
            Chácara Azul
          </a>

          {/* Menu de Navegação */}
          <nav className="flex items-center space-x-12">
            <a 
              href="#features"
              className="text-lg font-light text-white/80 hover:text-white transition-colors"
            >
              Comodidades
            </a>
            <a 
              href="#gallery"
              className="text-lg font-light text-white/80 hover:text-white transition-colors"
            >
              Galeria
            </a>
            <a 
              href="#location"
              className="text-lg font-light text-white/80 hover:text-white transition-colors"
            >
              Localização
            </a>
            <a 
              href="#contact"
              className="text-lg font-light text-white/80 hover:text-white transition-colors"
            >
              Contato
            </a>

            {/* Botão Reserve Agora */}
            <a 
              href="#contact" 
              className="text-lg font-light text-white hover:text-white/70 transition-colors"
            >
              Reserve Agora
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 