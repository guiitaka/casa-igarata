'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps extends BaseProps {}

export default function Header({}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Ajuste este valor para controlar quando o header fica fixo
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
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-light tracking-wide text-white"
          >
            Chácara Azul
          </motion.a>

          {/* Menu de Navegação */}
          <nav className="flex items-center space-x-12">
            <motion.a 
              href="#features"
              className="text-2xl font-extralight tracking-wide text-white/80 
                       hover:text-white transition-colors duration-300"
            >
              Comodidades
            </motion.a>
            <motion.a 
              href="#gallery"
              className="text-2xl font-extralight tracking-wide text-white/80 
                       hover:text-white transition-colors duration-300"
            >
              Galeria
            </motion.a>
            <motion.a 
              href="#location"
              className="text-2xl font-extralight tracking-wide text-white/80 
                       hover:text-white transition-colors duration-300"
            >
              Localização
            </motion.a>
            <motion.a 
              href="#contact"
              className="text-2xl font-extralight tracking-wide text-white/80 
                       hover:text-white transition-colors duration-300"
            >
              Contato
            </motion.a>

            {/* Botão Reserve Agora */}
            <motion.a 
              href="#contact" 
              className="text-2xl font-extralight tracking-wide text-white 
                       transition-all duration-300 
                       hover:text-white 
                       hover:scale-105
                       hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
            >
              Reserve Agora
            </motion.a>
          </nav>
        </div>
      </div>
    </header>
  );
} 