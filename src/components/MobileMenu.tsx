'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#features", label: "Comodidades" },
    { href: "#gallery", label: "Galeria" },
    { href: "#location", label: "Localização" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="text-white p-2"
        aria-label="Abrir menu"
      >
        <RiMenu3Line size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2"
                aria-label="Fechar menu"
              >
                <IoClose size={28} />
              </button>
            </div>

            <nav className="flex flex-col items-center gap-8 pt-12">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-light text-white/90 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full
                         text-xl font-light text-white 
                         transition-colors duration-300 
                         hover:bg-white/20"
              >
                Reserve Agora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 