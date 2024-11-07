'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
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
            <div className="text-center mb-24">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-6xl font-light text-white mb-6"
              >
                Comodidades
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-light text-white/80 max-w-2xl mx-auto"
              >
                Desfrute de momentos únicos em um ambiente planejado para seu conforto
              </motion.p>
            </div>

            {/* Grid de Features */}
            <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
              >
                <h3 className="text-3xl font-light text-white mb-4">Área Gourmet</h3>
                <p className="text-white/80 font-light text-lg">
                  Espaço completo para suas refeições com churrasqueira, forno e todo equipamento necessário.
                </p>
              </motion.div>

              {/* Feature 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
              >
                <h3 className="text-3xl font-light text-white mb-4">Piscina</h3>
                <p className="text-white/80 font-light text-lg">
                  Piscina aquecida com vista panorâmica para a represa.
                </p>
              </motion.div>

              {/* Feature 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
              >
                <h3 className="text-3xl font-light text-white mb-4">Área de Lazer</h3>
                <p className="text-white/80 font-light text-lg">
                  Espaço com mesa de sinuca, ping pong e jogos para toda família.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Versão Mobile */}
      <FeaturesMobile />
    </>
  );
} 