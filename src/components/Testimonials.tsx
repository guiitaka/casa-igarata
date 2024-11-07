'use client';

import { BaseProps } from '@/types/global';
import { FaStar, FaSprayCan, FaCheck, FaKey, FaComments, FaMapMarkerAlt, FaTag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

interface TestimonialsProps extends BaseProps {}

interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  platform: 'Airbnb' | 'Booking';
  image: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    date: 'Janeiro 2024',
    rating: 5,
    comment: 'Casa incrível! Superou todas as expectativas. Ambiente limpo, organizado e acolhedor. Voltaremos com certeza!',
    platform: 'Airbnb',
    image: '/images/review-left.jpg',
    time: '3 anos no Airbnb'
  },
  {
    id: '2',
    name: 'João Santos',
    date: 'Dezembro 2023',
    rating: 5,
    comment: 'Lugar perfeito para descansar com a família. A piscina é ótima e a vista é deslumbrante.',
    platform: 'Booking',
    image: '/images/review-right.jpg',
    time: '2 anos no Booking'
  }
];

const metrics = [
  { label: 'Limpeza', value: 4.9, icon: FaSprayCan },
  { label: 'Exatidão do anúncio', value: 5.0, icon: FaCheck },
  { label: 'Check-in', value: 5.0, icon: FaKey },
  { label: 'Comunicação', value: 5.0, icon: FaComments },
  { label: 'Localização', value: 5.0, icon: FaMapMarkerAlt },
  { label: 'Custo-benefício', value: 4.9, icon: FaTag },
];

const ITEMS_PER_PAGE = 3;

export default function Testimonials({}: TestimonialsProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2
  });

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderStars = (rating: number, animate = false) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <motion.div
        key={index}
        initial={animate ? { opacity: 0, scale: 0 } : {}}
        animate={animate && isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: index * 0.1 }}
      >
        <FaStar
          className={`w-4 h-4 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      </motion.div>
    ));
  };

  return (
    <section className="py-32 bg-black overflow-hidden" id="testimonials" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-4xl font-light text-center text-white mb-4"
        >
          Avaliações
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-white/60 text-center font-light mb-24 max-w-2xl mx-auto"
        >
          O que nossos hóspedes dizem sobre sua experiência
        </motion.p>

        <div className="max-w-4xl mx-auto mb-24">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                <motion.div
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={isInView ? { rotate: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.2 }}
                >
                  <FaStar className="w-10 h-10 text-yellow-400" />
                </motion.div>
                <motion.div className="flex items-center">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="text-7xl font-light text-white"
                  >
                    5
                  </motion.h3>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-7xl font-light text-white"
                  >
                    ,
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-7xl font-light text-white"
                  >
                    0
                  </motion.h3>
                </motion.div>
                <motion.div
                  initial={{ rotate: 180, opacity: 0 }}
                  animate={isInView ? { rotate: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <FaStar className="w-10 h-10 text-yellow-400" />
                </motion.div>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl font-light text-white mb-2"
              >
                Preferido dos hóspedes
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-sm text-white/60 max-w-md"
              >
                Esta acomodação está no <span className="font-medium">top 10%</span> dos 
                anúncios elegíveis, baseado em avaliações, comentários e confiabilidade
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                >
                  <metric.icon className="w-6 h-6 text-white/30" />
                </motion.div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-light text-white">{metric.value}</span>
                    <div className="flex gap-1">
                      {renderStars(5, true)}
                    </div>
                  </div>
                  <p className="text-sm text-white/60">{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={prevPage}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2
                       text-white/60 hover:text-white transition-colors
                       hidden md:block"
          >
            <FaChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2
                       text-white/60 hover:text-white transition-colors
                       hidden md:block"
          >
            <FaChevronRight className="w-10 h-10" />
          </button>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={false}
          >
            {testimonials
              .slice(
                currentPage * ITEMS_PER_PAGE,
                (currentPage + 1) * ITEMS_PER_PAGE
              )
              .map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.5 } }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl
                           hover:border-white/20 transition-colors duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="relative w-16 h-16 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-light text-lg">{testimonial.name}</h3>
                      <p className="text-white/60 text-sm">{testimonial.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {renderStars(testimonial.rating, true)}
                    </div>
                    <span className="text-white/60 text-sm ml-2">
                      {testimonial.date}
                    </span>
                  </div>

                  <p className="text-white/80 font-light leading-relaxed mb-4">
                    {testimonial.comment}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-white/40 text-sm">
                      via {testimonial.platform}
                    </span>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 
                           ${currentPage === index ? 'w-8 bg-white' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 