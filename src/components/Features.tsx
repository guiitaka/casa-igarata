'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaWifi, FaSwimmingPool, FaUtensils, FaParking, FaTv, FaSnowflake } from 'react-icons/fa';
import FeaturesMobile from './FeaturesMobile';

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <>
      {/* Versão Desktop */}
      <div className="hidden md:block">
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
            {/* Título e Subtítulo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-6xl font-light text-white mb-6">
                Comodidades
              </h2>
              <p className="text-2xl text-white/80 font-light">
                Tudo que você precisa para uma estadia perfeita
              </p>
            </motion.div>

            {/* Grid de Features */}
            <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center"
                >
                  <feature.icon className="w-12 h-12 text-white mx-auto mb-6" />
                  <h3 className="text-white text-2xl font-light mb-3">{feature.title}</h3>
                  <p className="text-white/70 text-lg font-light">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Versão Mobile */}
      <FeaturesMobile />
    </>
  );
} 