import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 lg:hidden"
        >
          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/80 hover:text-white"
          >
            <FaTimes size={24} />
          </button>

          {/* Links de Navegação */}
          <nav className="h-full flex flex-col items-center justify-center gap-8">
            <a 
              href="#features" 
              onClick={onClose}
              className="text-2xl font-light text-white/80 hover:text-white"
            >
              Comodidades
            </a>
            <a 
              href="#gallery" 
              onClick={onClose}
              className="text-2xl font-light text-white/80 hover:text-white"
            >
              Galeria
            </a>
            <a 
              href="#location" 
              onClick={onClose}
              className="text-2xl font-light text-white/80 hover:text-white"
            >
              Localização
            </a>
            <a 
              href="#contact" 
              onClick={onClose}
              className="text-2xl font-light text-white/80 hover:text-white"
            >
              Contato
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="mt-4 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full
                       text-xl font-light text-white
                       hover:bg-white/20"
            >
              Reserve Agora
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 