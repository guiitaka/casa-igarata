'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function HeaderMobile() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrollPosition = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', updateScrollPosition);
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return (
    <div className="block md:hidden">
      <motion.header 
        className={`fixed w-full z-50 ${
          isScrolled ? 'bg-black/80' : 'bg-transparent'
        } transition-colors duration-300`}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-extralight text-white">
              Chácara Azul
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm"
          >
            <nav className="flex flex-col py-4">
              <a 
                href="#features" 
                className="px-4 py-3 text-lg font-light text-white/90 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Comodidades
              </a>
              <a 
                href="#gallery" 
                className="px-4 py-3 text-lg font-light text-white/90 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Galeria
              </a>
              <a 
                href="#location" 
                className="px-4 py-3 text-lg font-light text-white/90 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Localização
              </a>
              <a 
                href="#contact" 
                className="px-4 py-3 text-lg font-light text-white/90 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <a
                href="#contact"
                className="mx-4 my-3 px-6 py-2 text-center bg-white/10 text-white rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Reserve Agora
              </a>
            </nav>
          </motion.div>
        )}
      </motion.header>
    </div>
  );
} 