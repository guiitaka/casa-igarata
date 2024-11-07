'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaWifi, FaSwimmingPool, FaUtensils, FaParking, FaTv, FaSnowflake } from 'react-icons/fa';

export default function FeaturesMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="block md:hidden">
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
        <div className="relative container mx-auto px-4 py-20">
          {/* Título e Subtítulo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-white mb-4">
              Comodidades
            </h2>
            <p className="text-lg text-white/80 font-light">
              Tudo que você precisa para uma estadia perfeita
            </p>
          </motion.div>

          {/* Grid de Features - Versão Mobile */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: FaWifi, title: "Wi-Fi", desc: "Internet de alta velocidade" },
              { icon: FaSwimmingPool, title: "Piscina", desc: "Área de lazer completa" },
              { icon: FaUtensils, title: "Cozinha", desc: "Totalmente equipada" },
              { icon: FaParking, title: "Garagem", desc: "Estacionamento coberto" },
              { icon: FaTv, title: "Smart TV", desc: "Com streaming" },
              { icon: FaSnowflake, title: "Ar Condicionado", desc: "Em todos os quartos" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"
              >
                <feature.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-white text-lg font-light mb-1">{feature.title}</h3>
                <p className="text-white/70 text-sm font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 