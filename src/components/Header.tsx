'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-light text-white">
            Casa Igaratá
          </a>

          {/* Menu Desktop */}
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

          {/* Botão Menu Mobile */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col items-center gap-8 mt-16">
                <a 
                  href="#features" 
                  onClick={toggleMenu}
                  className="text-xl font-light text-white/90 hover:text-white"
                >
                  Comodidades
                </a>
                
                <a 
                  href="#gallery" 
                  onClick={toggleMenu}
                  className="text-xl font-light text-white/90 hover:text-white"
                >
                  Galeria
                </a>
                
                <a 
                  href="#location" 
                  onClick={toggleMenu}
                  className="text-xl font-light text-white/90 hover:text-white"
                >
                  Localização
                </a>
                
                <a 
                  href="#contact" 
                  onClick={toggleMenu}
                  className="text-xl font-light text-white/90 hover:text-white"
                >
                  Contato
                </a>

                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className="px-8 py-3 bg-transparent border border-white/20
                           text-xl font-light text-white rounded-full
                           hover:bg-white/10"
                >
                  Reserve Agora
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 