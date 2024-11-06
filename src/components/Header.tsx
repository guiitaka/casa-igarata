'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

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
    <div className="fixed w-full flex justify-center z-50">
      <motion.header 
        className={`transition-all duration-500 rounded-full ${
          isScrolled 
            ? 'mt-4 bg-black/80' 
            : 'mt-8 bg-white/20'
        } backdrop-blur-sm`}
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-8 py-4 rounded-full border border-white/10">
          <div className="flex items-center gap-24">
            {/* Logo */}
            <a 
              href="#" 
              className="text-3xl font-extralight tracking-wide text-white 
                       transition-all duration-300 
                       hover:text-white/80"
            >
              Chácara Azul
            </a>

            {/* Menu de Navegação */}
            <nav className="flex items-center gap-12">
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
          </div>
        </div>
      </motion.header>
    </div>
  );
} 