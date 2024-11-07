'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrollPosition = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-light text-white">
            Casa Igaratá
          </a>

          {/* Menu Desktop - mantido exatamente igual */}
          <nav className="hidden lg:flex items-center gap-12">
            <a 
              href="#features" 
              className="text-lg font-light text-white/90
                       transition-colors duration-300 
                       hover:text-white"
            >
              Comodidades
            </a>
            
            <a 
              href="#gallery" 
              className="text-lg font-light text-white/90
                       transition-colors duration-300 
                       hover:text-white"
            >
              Galeria
            </a>
            
            <a 
              href="#location" 
              className="text-lg font-light text-white/90
                       transition-colors duration-300 
                       hover:text-white"
            >
              Localização
            </a>
            
            <a 
              href="#contact" 
              className="text-lg font-light text-white/90
                       transition-colors duration-300 
                       hover:text-white"
            >
              Contato
            </a>

            {/* Botão Reserve Agora */}
            <a
              href="#contact"
              className="px-6 py-2 bg-transparent border border-white/20
                       text-lg font-light text-white rounded-full
                       transition-all duration-300
                       hover:bg-white/10"
            >
              Reserve Agora
            </a>
          </nav>

          {/* Menu Mobile - só aparece em telas pequenas */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
} 