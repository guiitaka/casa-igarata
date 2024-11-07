'use client';

import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300
                   ${isScrolled ? 'bg-black/80 backdrop-blur-sm py-4' : 'bg-transparent py-8'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-light text-white">
              Casa Igaratá
            </a>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center gap-12">
              <a href="#features" className="text-lg font-light text-white/90 hover:text-white">
                Comodidades
              </a>
              <a href="#gallery" className="text-lg font-light text-white/90 hover:text-white">
                Galeria
              </a>
              <a href="#location" className="text-lg font-light text-white/90 hover:text-white">
                Localização
              </a>
              <a href="#contact" className="text-lg font-light text-white/90 hover:text-white">
                Contato
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-transparent border border-white/20
                         text-lg font-light text-white rounded-full
                         hover:bg-white/10"
              >
                Reserve Agora
              </a>
            </nav>

            {/* Botão Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-white/90 hover:text-white"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
} 