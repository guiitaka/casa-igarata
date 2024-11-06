'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { 
  FaHome, 
  FaSwimmingPool, 
  FaWater, 
  FaShieldAlt,
  FaWifi,
  FaTv,
  FaParking,
  FaUmbrellaBeach
} from 'react-icons/fa';
import { 
  MdOutdoorGrill, 
  MdKitchen,
  MdMeetingRoom,
  MdPets 
} from 'react-icons/md';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IconType } from 'react-icons';

interface FeaturesProps {}

interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

const visibleFeatures: Feature[] = [
  {
    icon: FaHome,
    title: 'Espaço Amplo',
    description: '4 quartos (2 suítes), sala de TV, sala social e sala de jantar'
  },
  {
    icon: FaSwimmingPool,
    title: 'Piscina com Cascata',
    description: 'Piscina privativa disponível 24h com área de descanso'
  },
  {
    icon: FaWater,
    title: 'Acesso à Represa',
    description: 'Acesso particular à represa de Igaratá'
  },
  {
    icon: MdOutdoorGrill,
    title: 'Área Gourmet',
    description: 'Salão de festas com churrasqueira completa'
  },
  {
    icon: FaShieldAlt,
    title: 'Segurança 24h',
    description: 'Condomínio fechado com portaria 24 horas'
  },
  {
    icon: MdKitchen,
    title: 'Cozinha Completa',
    description: 'Cozinha integrada com todos os utensílios e eletrodomésticos'
  }
];

const featureImages = [
  '/images/casa/fachada.jpeg',
  '/images/casa/piscina.jpeg',
  '/images/casa/represa.jpeg',
  '/images/casa/area-gourmet.jpeg',
  '/images/casa/seguranca.jpeg',
  '/images/casa/cozinha.jpeg'
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Efeito parallax suave
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden" 
      id="features"
    >
      {/* Background com Parallax */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div 
          className="absolute inset-0 w-full h-[120%]"
          style={{ y: backgroundY }}
        >
          <Image
            src="/images/background-comodidades.jpeg"
            alt="Background Comodidades"
            fill
            className="object-cover object-[center_30%]"
            priority
          />
          {/* Overlay gradiente para melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      {/* Conteúdo */}
      <div className="relative container mx-auto px-4 py-32">
        {/* Título e Subtítulo com animações melhoradas */}
        <div className="text-center mb-20 overflow-hidden">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-light text-white mb-6 relative">
              <span className="relative inline-block">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 origin-left"
                />
                Comodidades
              </span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="text-xl text-white/80 max-w-3xl mx-auto font-light"
          >
            Desfrute de todas as facilidades que preparamos para tornar sua estadia ainda mais especial
          </motion.p>
        </div>

        {/* Grid de cards com animação suave */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visibleFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ 
                opacity: 0,
                y: 50,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm
                         border border-white/10 hover:border-white/20
                         transition-colors duration-500"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  ease: "backOut"
                }}
                viewport={{ once: true }}
                className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600
                         flex items-center justify-center text-white
                         group-hover:scale-110 transition-transform duration-500"
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>

              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-400
                           transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/70 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 