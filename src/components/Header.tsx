'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeaderProps extends BaseProps {}

export default function Header({}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Efeito para detectar scroll
  useEffect(() => {
    const updateScrollPosition = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-black/80 backdrop-blur-sm' 
          : 'py-8 bg-transparent'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="text-3xl font-extralight tracking-wide text-white 
                     transition-all duration-300 
                     hover:text-white/80"
          >
            Casa Igaratá
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
                       text-lg font-light text-white
                       transition-all duration-300
                       hover:bg-white/10"
            >
              Reserve Agora
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
} 