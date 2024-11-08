'use client';

import { BaseProps } from '@/types/global';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

interface GalleryProps extends BaseProps {}

const galleryImages = [
  // Sala de Estar
  {
    src: '/images/casa/sala1.jpeg',
    alt: 'Sala de Estar',
    title: 'Sala de Estar Espaçosa'
  },
  {
    src: '/images/casa/sala2.jpeg',
    alt: 'Sala de Estar',
    title: 'Sala de Estar com Vista'
  },
  {
    src: '/images/casa/sala3.jpeg',
    alt: 'Sala de Estar',
    title: 'Sala de Estar Integrada'
  },
  {
    src: '/images/casa/sala4.jpeg',
    alt: 'Sala de Estar',
    title: 'Sala de Estar Aconchegante'
  },
  {
    src: '/images/casa/sala5.jpeg',
    alt: 'Sala de Estar',
    title: 'Sala de Estar Ampla'
  },
  {
    src: '/images/casa/sala6.jpeg',
    alt: 'Sala de Estar',
    title: 'Sala de Estar Completa'
  },
  
  // Suíte Master
  {
    src: '/images/casa/suite-master1.jpeg',
    alt: 'Suíte Master',
    title: 'Suíte Master Principal'
  },
  {
    src: '/images/casa/suite-master2.jpeg',
    alt: 'Suíte Master',
    title: 'Suíte Master Vista Lateral'
  },
  {
    src: '/images/casa/suite-master3.jpeg',
    alt: 'Suíte Master',
    title: 'Suíte Master Detalhes'
  },
  {
    src: '/images/casa/suite-master4.jpeg',
    alt: 'Suíte Master',
    title: 'Suíte Master Completa'
  },

  // Quarto 1
  {
    src: '/images/casa/quarto1-1.jpeg',
    alt: 'Quarto 1',
    title: 'Quarto 1 Principal'
  },
  {
    src: '/images/casa/quarto1-2.jpeg',
    alt: 'Quarto 1',
    title: 'Quarto 1 Vista Lateral'
  },
  {
    src: '/images/casa/quarto1-3.jpeg',
    alt: 'Quarto 1',
    title: 'Quarto 1 Detalhes'
  },

  // Quarto 2
  {
    src: '/images/casa/quarto2-1.jpeg',
    alt: 'Quarto 2',
    title: 'Quarto 2 Principal'
  },
  {
    src: '/images/casa/quarto2-2.jpeg',
    alt: 'Quarto 2',
    title: 'Quarto 2 Vista Lateral'
  },
  {
    src: '/images/casa/quarto2-3.jpeg',
    alt: 'Quarto 2',
    title: 'Quarto 2 Detalhes'
  },

  // Quarto 4
  {
    src: '/images/casa/quarto4-1.jpeg',
    alt: 'Quarto 4',
    title: 'Quarto 4 Principal'
  },
  {
    src: '/images/casa/quarto4-2.jpeg',
    alt: 'Quarto 4',
    title: 'Quarto 4 Vista Lateral'
  },
  {
    src: '/images/casa/quarto4-3.jpeg',
    alt: 'Quarto 4',
    title: 'Quarto 4 Detalhes'
  },

  // Áreas Comuns
  {
    src: '/images/casa/piscina.jpeg',
    alt: 'Piscina',
    title: 'Piscina com Vista'
  },
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

  // Cozinha
  {
    src: '/images/casa/cozinha1-1.jpeg',
    alt: 'Cozinha',
    title: 'Cozinha Principal'
  },
  {
    src: '/images/casa/cozinha1-2.jpeg',
    alt: 'Cozinha',
    title: 'Cozinha Vista Lateral'
  },
  {
    src: '/images/casa/cozinha1-3.jpeg',
    alt: 'Cozinha',
    title: 'Cozinha Detalhes'
  },
  {
    src: '/images/casa/cozinha1-4.jpeg',
    alt: 'Cozinha',
    title: 'Cozinha Armários'
  },
  {
    src: '/images/casa/cozinha1-5.jpeg',
    alt: 'Cozinha',
    title: 'Cozinha Completa'
  },

  // Sala de Jantar
  {
    src: '/images/casa/sala-jantar-1-1.jpeg',
    alt: 'Sala de Jantar',
    title: 'Sala de Jantar Principal'
  },
  {
    src: '/images/casa/sala-jantar-1-2.jpeg',
    alt: 'Sala de Jantar',
    title: 'Sala de Jantar Vista Lateral'
  },
  {
    src: '/images/casa/sala-jantar-1-3.jpeg',
    alt: 'Sala de Jantar',
    title: 'Sala de Jantar Detalhes'
  },
  {
    src: '/images/casa/sala-jantar-1-4.jpeg',
    alt: 'Sala de Jantar',
    title: 'Sala de Jantar Ambiente'
  },
  {
    src: '/images/casa/sala-jantar-1-5.jpeg',
    alt: 'Sala de Jantar',
    title: 'Sala de Jantar Decoração'
  },
  {
    src: '/images/casa/sala-jantar-1-6.jpeg',
    alt: 'Sala de Jantar',
    title: 'Sala de Jantar Completa'
  },
  {
    src: '/images/casa/sala-jantar-1-7.jpeg',
    alt: 'Sala de Jantar',
    title: 'Sala de Jantar Vista Ampla'
  },
  {
    src: '/images/casa/sala-jantar-1-8.jpeg',
    alt: 'Sala de Jantar',
    title: 'Sala de Jantar Integração'
  },

  // Home Office
  {
    src: '/images/casa/homeoffice-1-1.jpeg',
    alt: 'Home Office',
    title: 'Home Office Principal'
  },
  {
    src: '/images/casa/homeoffice-1-2.jpeg',
    alt: 'Home Office',
    title: 'Home Office Vista Lateral'
  },
  {
    src: '/images/casa/homeoffice-1-3.jpeg',
    alt: 'Home Office',
    title: 'Home Office Detalhes'
  },
  {
    src: '/images/casa/homeoffice-1-4.jpeg',
    alt: 'Home Office',
    title: 'Home Office Completo'
  },

  // Quintal
  {
    src: '/images/casa/quintal-1-1.jpeg',
    alt: 'Quintal',
    title: 'Quintal Vista Principal'
  },
  {
    src: '/images/casa/quintal-1-2.jpeg',
    alt: 'Quintal',
    title: 'Quintal Área de Lazer'
  },
  {
    src: '/images/casa/quintal-1-3.jpeg',
    alt: 'Quintal',
    title: 'Quintal Piscina'
  },
  {
    src: '/images/casa/quintal-1-4.jpeg',
    alt: 'Quintal',
    title: 'Quintal Área de Descanso'
  },
  {
    src: '/images/casa/quintal-1-5.jpeg',
    alt: 'Quintal',
    title: 'Quintal Churrasqueira'
  },
  {
    src: '/images/casa/quintal-1-6.jpeg',
    alt: 'Quintal',
    title: 'Quintal Vista Lateral'
  },
  {
    src: '/images/casa/quintal-1-7.jpeg',
    alt: 'Quintal',
    title: 'Quintal Área Verde'
  },
  {
    src: '/images/casa/quintal-1-8.jpeg',
    alt: 'Quintal',
    title: 'Quintal Paisagismo'
  },
  {
    src: '/images/casa/quintal-1-9.jpeg',
    alt: 'Quintal',
    title: 'Quintal Vista Panorâmica'
  },
  {
    src: '/images/casa/quintal-1-10.jpeg',
    alt: 'Quintal',
    title: 'Quintal Área de Convivência'
  },
  {
    src: '/images/casa/quintal-1-11.jpeg',
    alt: 'Quintal',
    title: 'Quintal Vista Completa'
  },
];

export default function Gallery({}: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  // Configuração do Swipe
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  // Handler para scroll horizontal atualizado
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        
        // Acumula o valor do scroll
        scrollAccumulator.current += e.deltaX;

        // Limpa o timeout anterior se existir
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Define um novo timeout para resetar o acumulador
        scrollTimeout.current = setTimeout(() => {
          scrollAccumulator.current = 0;
        }, 150); // Ajuste este valor para mudar o tempo de espera entre scrolls

        // Só muda o slide se atingir o threshold
        if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
          if (scrollAccumulator.current > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
          scrollAccumulator.current = 0; // Reset após mudar o slide
        }
      }
    };

    const gallery = document.getElementById('gallery-container');
    if (gallery) {
      gallery.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (gallery) {
        gallery.removeEventListener('wheel', handleWheel);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [nextSlide, prevSlide]);

  return (
    <section id="gallery" className="min-h-screen bg-black py-24" {...handlers}>
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-light text-white text-center mb-4">
          Galeria
        </h2>
        <p className="text-white/60 text-center font-light mb-24 max-w-2xl mx-auto">
          Conheça cada detalhe de nossa propriedade através de imagens
        </p>
      </div>

      <div className="relative h-[500px]">
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
        >
          <FaChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
        >
          <FaChevronRight className="w-6 h-6 text-white" />
        </button>

        <div 
          id="gallery-container"
          className="relative h-full overflow-hidden"
          {...handlers}
        >
          <div className="absolute w-full h-full flex items-center justify-center">
            {galleryImages.map((image, index) => {
              // Calcular a posição relativa ao slide atual
              let position = index - currentIndex;
              
              // Ajustar para loop circular
              if (position < -2) position += galleryImages.length;
              if (position > 2) position -= galleryImages.length;
              
              const isActive = position === 0;
              
              // Não renderizar slides muito distantes
              if (Math.abs(position) > 2) return null;
              
              // Calcular transformações baseadas na posição
              let zIndex = 10 - Math.abs(position);
              let opacity = isActive ? 1 : 0.6;
              let scale = isActive ? 1 : 0.8;
              
              // Ajustar translateX para distribuir os slides
              let translateX = `${position * 50}%`;
              if (position < 0) translateX = `${position * 60}%`;
              if (position > 0) translateX = `${position * 60}%`;
              
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${translateX}) scale(${scale}) perspective(2000px) rotateY(${position * -25}deg)`,
                    zIndex,
                    opacity,
                  }}
                >
                  <div className="relative w-[800px] h-[450px] rounded-3xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="800px"
                      draggable={false}
                    />
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-white text-2xl font-light">
                          {image.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-12">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-white' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
} 