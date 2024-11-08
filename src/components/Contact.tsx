'use client';

import { BaseProps } from '@/types/global';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInfoCircle } from 'react-icons/fa';

interface ContactProps extends BaseProps {}

interface FormData {
  name: string;
  email: string;
  phone: string;
  guests: number;
  checkin: string;
  checkout: string;
  message: string;
}

export default function Contact({}: ContactProps) {
  return (
    <section className="relative py-32 bg-black" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center text-white mb-4">Contato</h2>
        <p className="text-white/60 text-center font-light mb-24 max-w-2xl mx-auto">
          Entre em contato conosco e reserve sua estadia em nosso paraíso
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Formulário de Contato */}
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/60 text-sm font-light mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Seu email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-sm font-light mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Alguma solicitação especial?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-lg font-light hover:bg-white/90 transition-colors"
              >
                Agendar Reserva
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-light text-white mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <a href="tel:+1234567890" className="flex items-center text-white/60 hover:text-white transition-colors">
                  <FaPhone className="w-5 h-5 mr-4" />
                  <span className="font-light">+55 (11) 99999-9999</span>
                </a>
                <a href="mailto:contato@example.com" className="flex items-center text-white/60 hover:text-white transition-colors">
                  <FaEnvelope className="w-5 h-5 mr-4" />
                  <span className="font-light">contato@casaigarata.com.br</span>
                </a>
                <a href="#" className="flex items-center text-white/60 hover:text-white transition-colors">
                  <FaWhatsapp className="w-5 h-5 mr-4" />
                  <span className="font-light">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 