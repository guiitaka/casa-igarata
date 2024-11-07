'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function GalleryMobile() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/images/casa/area-gourmet.jpeg',
      alt: 'Área Gourmet',
      title: 'Área Gourmet Completa'
    },
    {
      src: '/images/casa/represa.jpeg',
      alt: 'Vista da Represa',
      title: 'Vista Panorâmica'
    },
    {
      src: '/images/casa/cozinha1-1.jpeg',
      alt: 'Cozinha',
      title: 'Cozinha Principal'
    },
    {
      src: '/images/casa/sala-jantar-1-1.jpeg',
      alt: 'Sala de Jantar',
      title: 'Sala de Jantar Principal'
    },
    // Adicionei apenas 4 imagens para exemplo, você pode adicionar mais
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="block md:hidden">
      <section className="py-20" id="gallery">
        <div className="container mx-auto px-4">
          {/* Título */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Galeria
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Conheça cada detalhe da nossa casa
            </p>
          </motion.div>

          {/* Carrossel Mobile */}
          <div className="relative" {...handlers}>
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
              <h3 className="absolute bottom-4 left-4 text-white text-xl font-light">
                {images[currentIndex].title}
              </h3>
            </div>

            {/* Botões de Navegação */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
            >
              <FaChevronRight />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 