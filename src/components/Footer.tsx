'use client';

import { BaseProps } from '@/types/global';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface FooterProps extends BaseProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Coluna 1 - Sobre */}
          <div>
            <h4 className="text-white font-light mb-6">Sobre Nós</h4>
            <p className="text-white/60 font-light mb-6">
              Casa Igaratá é seu refúgio perfeito para momentos especiais. 
              Localizada em um condomínio exclusivo com vista privilegiada para a represa.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="text-white font-light mb-6">Links Rápidos</h4>
            <div className="space-y-4">
              <a href="#features" className="block text-white/60 hover:text-white transition-colors">Comodidades</a>
              <a href="#gallery" className="block text-white/60 hover:text-white transition-colors">Galeria</a>
              <a href="#location" className="block text-white/60 hover:text-white transition-colors">Localização</a>
              <a href="#contact" className="block text-white/60 hover:text-white transition-colors">Contato</a>
            </div>
          </div>

          {/* Coluna 3 - Social e Newsletter */}
          <div>
            <h4 className="text-white font-light mb-6">Fique Conectado</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors">
                <FaFacebook className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors">
                <FaInstagram className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors">
                <FaWhatsapp className="w-5 h-5 text-white/60 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/60 font-light">
          <p>&copy; {new Date().getFullYear()} Casa Igaratá. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 