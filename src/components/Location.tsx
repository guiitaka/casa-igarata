'use client';

import { BaseProps } from '@/types/global';
import { FaMapMarkerAlt, FaWater, FaTree, FaShieldAlt } from 'react-icons/fa';
import Image from 'next/image';

interface LocationProps extends BaseProps {}

const attractions = [
  {
    icon: FaMapMarkerAlt,
    title: 'Localização Privilegiada',
    description: 'Localizado em um condomínio fechado de alto padrão em Igaratá, SP, oferecendo o equilíbrio perfeito entre privacidade, segurança e natureza.'
  },
  {
    icon: FaWater,
    title: 'Acesso à Represa',
    description: 'Acesso privativo à represa de Igaratá a poucos passos da casa'
  },
  {
    icon: FaTree,
    title: 'Beleza Natural',
    description: 'Localização privilegiada cercada pela natureza com vistas panorâmicas'
  },
  {
    icon: FaShieldAlt,
    title: 'Segurança 24h',
    description: 'Condomínio de alto padrão com segurança 24 horas'
  }
];

export default function Location({}: LocationProps) {
  return (
    <section className="relative py-32" id="location">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/background-loc-compressed.mp4" type="video/mp4" />
        </video>
        {/* Overlay preto com opacidade reduzida */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Conteúdo */}
      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-light text-center text-white mb-4">Localização</h2>
        <p className="text-white/60 text-center font-light mb-24 max-w-2xl mx-auto">
          Experimente a tranquilidade em nossa localização exclusiva, onde o luxo encontra a natureza
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/map.png"
              alt="Mapa de localização"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
            <a 
              href="https://maps.google.com/?q=-23.222201,-46.087153"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 left-8 flex items-center text-white font-light text-sm hover:text-white/70 transition-colors"
            >
              <FaMapMarkerAlt className="mr-2" />
              Ver no Google Maps
            </a>
          </div>

          <div className="space-y-12">
            {attractions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-500 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-light mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 