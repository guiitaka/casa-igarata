'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaCouch, 
  FaBed, 
  FaHouse, 
  FaChevronUp, 
  FaChevronDown,
  FaShirt,
  FaWind,
  FaBoxArchive,
  FaBath,
  FaTv,
  FaWifi,
  FaUtensils,
  FaPersonSwimming,
  FaUmbrellaBeach,
  FaGamepad,
  FaTableTennisPaddleBall,
  FaChess
} from 'react-icons/fa6';
import { MdKitchen, MdLocalDining } from 'react-icons/md';
import { IoBed } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface Amenity {
  icon: IconType;
  text: string;
}

interface Accommodation {
  id: string;
  title: string;
  description: string;
  images: string[];
  icon: string;
  amenities: Amenity[];
}

const accommodations: Accommodation[] = [
  {
    id: 'bedroom',
    title: 'Suíte Master',
    description: 'Um refúgio de luxo para seu descanso',
    images: [
      '/images/casa/suite-master1.jpeg',
      '/images/casa/suite-master2.jpeg',
      '/images/casa/suite-master3.jpeg',
      '/images/casa/suite-master4.jpeg',
    ],
    icon: '/images/icons/cama-icone.png',
    amenities: [
      { icon: FaBed, text: 'Cama de casal king size' },
      { icon: FaShirt, text: 'Cabides' },
      { icon: IoBed, text: 'Cobertores e travesseiros extras' },
      { icon: FaShirt, text: 'Guarda-roupa amplo' },
      { icon: FaBoxArchive, text: 'Roupa de cama premium' },
      { icon: FaWind, text: 'Ventilador de teto' },
      { icon: FaBath, text: 'Banheiro privativo' }
    ]
  },
  {
    id: 'bedroom-1',
    title: 'Quarto 1',
    description: 'Conforto e tranquilidade para seu descanso',
    images: [
      '/images/casa/quarto1-1.jpeg',
      '/images/casa/quarto1-2.jpeg',
      '/images/casa/quarto1-3.jpeg',
    ],
    icon: '/images/icons/quarto1.png',
    amenities: [
      { icon: FaBed, text: 'Cama de casal confortável' },
      { icon: FaShirt, text: 'Guarda-roupa' },
      { icon: IoBed, text: 'Cobertores e travesseiros extras' },
      { icon: FaWind, text: 'Ventilador de teto' },
      { icon: FaBoxArchive, text: 'Roupa de cama premium' }
    ]
  },
  {
    id: 'bedroom-2',
    title: 'Quarto 2',
    description: 'Espaço acolhedor para seu repouso',
    images: [
      '/images/casa/quarto2-1.jpeg',
      '/images/casa/quarto2-2.jpeg',
      '/images/casa/quarto2-3.jpeg',
    ],
    icon: '/images/icons/quarto2.png',
    amenities: [
      { icon: FaBed, text: 'Cama de casal confortável' },
      { icon: FaShirt, text: 'Guarda-roupa' },
      { icon: IoBed, text: 'Cobertores e travesseiros extras' },
      { icon: FaWind, text: 'Ventilador de teto' },
      { icon: FaBoxArchive, text: 'Roupa de cama premium' }
    ]
  },
  {
    id: 'bedroom-4',
    title: 'Quarto 4',
    description: 'Ambiente tranquilo e aconchegante',
    images: [
      '/images/casa/quarto4-1.jpeg',
      '/images/casa/quarto4-2.jpeg',
      '/images/casa/quarto4-3.jpeg',
    ],
    icon: '/images/icons/quarto4.png',
    amenities: [
      { icon: FaBed, text: 'Cama de casal confortável' },
      { icon: FaShirt, text: 'Guarda-roupa' },
      { icon: IoBed, text: 'Cobertores e travesseiros extras' },
      { icon: FaWind, text: 'Ventilador de teto' },
      { icon: FaBoxArchive, text: 'Roupa de cama premium' }
    ]
  },
  {
    id: 'living-room',
    title: 'Sala de Estar',
    description: 'Descubra o conforto e elegância do nosso espaço',
    images: [
      '/images/casa/sala1.jpeg',
      '/images/casa/sala2.jpeg',
      '/images/casa/sala3.jpeg',
      '/images/casa/sala4.jpeg',
      '/images/casa/sala5.jpeg',
      '/images/casa/sala6.jpeg',
    ],
    icon: '/images/icons/sofa-icone.png',
    amenities: [
      { icon: FaCouch, text: 'Sofá confortável' },
      { icon: FaTv, text: 'Smart TV 55"' },
      { icon: FaWifi, text: 'Wi-Fi de alta velocidade' },
      { icon: MdLocalDining, text: 'Mesa de jantar' },
      { icon: FaUmbrellaBeach, text: 'Vista para a represa' }
    ]
  },
  {
    id: 'living-area',
    title: 'Área de Convivência',
    description: 'Espaço aconchegante para momentos especiais',
    images: [
      '/images/casa/piscina.jpeg',
      '/images/casa/represa.jpeg',
      '/images/casa/fachada.jpeg',
      '/images/casa/hero.jpeg',
    ],
    icon: '/images/icons/sala-icone.png',
    amenities: [
      { icon: FaPersonSwimming, text: 'Piscina privativa' },
      { icon: MdKitchen, text: 'Churrasqueira' },
      { icon: FaUtensils, text: 'Área gourmet completa' },
      { icon: FaUmbrellaBeach, text: 'Deck com vista panorâmica' }
    ]
  },
  {
    id: 'kitchen',
    title: 'Cozinha',
    description: 'Espaço completo para suas refeições',
    images: [
      '/images/casa/cozinha1-1.jpeg',
      '/images/casa/cozinha1-2.jpeg',
      '/images/casa/cozinha1-3.jpeg',
      '/images/casa/cozinha1-4.jpeg',
      '/images/casa/cozinha1-5.jpeg',
    ],
    icon: '/images/icons/cozinha.png',
    amenities: [
      { icon: MdKitchen, text: 'Cozinha completa' },
      { icon: FaUtensils, text: 'Utensílios de cozinha' },
      { icon: FaBoxArchive, text: 'Armários amplos' },
      { icon: MdLocalDining, text: 'Mesa de jantar' },
      { icon: FaWifi, text: 'Eletrodomésticos modernos' }
    ]
  },
  {
    id: 'dining-room',
    title: 'Sala de Jantar',
    description: 'Ambiente sofisticado para suas refeições em família',
    images: [
      '/images/casa/sala-jantar-1-1.jpeg',
      '/images/casa/sala-jantar-1-2.jpeg',
      '/images/casa/sala-jantar-1-3.jpeg',
      '/images/casa/sala-jantar-1-4.jpeg',
      '/images/casa/sala-jantar-1-5.jpeg',
      '/images/casa/sala-jantar-1-6.jpeg',
      '/images/casa/sala-jantar-1-7.jpeg',
      '/images/casa/sala-jantar-1-8.jpeg',
    ],
    icon: '/images/icons/jantar.png',
    amenities: [
      { icon: MdLocalDining, text: 'Mesa de jantar para 8 pessoas' },
      { icon: FaUtensils, text: 'Conjunto completo de talheres' },
      { icon: MdKitchen, text: 'Próximo à cozinha' },
      { icon: FaUmbrellaBeach, text: 'Vista para área externa' },
      { icon: FaWifi, text: 'Iluminação especial' }
    ]
  },
  {
    id: 'home-office',
    title: 'Home Office',
    description: 'Espaço ideal para trabalho e estudo',
    images: [
      '/images/casa/homeoffice-1-1.jpeg',
      '/images/casa/homeoffice-1-2.jpeg',
      '/images/casa/homeoffice-1-3.jpeg',
      '/images/casa/homeoffice-1-4.jpeg',
    ],
    icon: '/images/icons/homeoffice.png',
    amenities: [
      { icon: FaWifi, text: 'Internet de alta velocidade' },
      { icon: FaCouch, text: 'Mesa de trabalho confortável' },
      { icon: FaShirt, text: 'Armário para organização' },
      { icon: FaWind, text: 'Ambiente climatizado' },
      { icon: FaUmbrellaBeach, text: 'Vista para área externa' }
    ]
  },
  {
    id: 'backyard',
    title: 'Quintal',
    description: 'Área externa com muito espaço e natureza',
    images: [
      '/images/casa/quintal-1-1.jpeg',
      '/images/casa/quintal-1-2.jpeg',
      '/images/casa/quintal-1-3.jpeg',
      '/images/casa/quintal-1-4.jpeg',
      '/images/casa/quintal-1-5.jpeg',
      '/images/casa/quintal-1-6.jpeg',
      '/images/casa/quintal-1-7.jpeg',
      '/images/casa/quintal-1-8.jpeg',
      '/images/casa/quintal-1-9.jpeg',
      '/images/casa/quintal-1-10.jpeg',
      '/images/casa/quintal-1-11.jpeg',
    ],
    icon: '/images/icons/quintal.png',
    amenities: [
      { icon: FaPersonSwimming, text: 'Piscina privativa' },
      { icon: FaUmbrellaBeach, text: 'Área de descanso' },
      { icon: FaUtensils, text: 'Churrasqueira' },
      { icon: MdLocalDining, text: 'Mesa externa' },
      { icon: FaWind, text: 'Ambiente ao ar livre' }
    ]
  },
  {
    id: 'leisure',
    title: 'Área de Lazer',
    description: 'Espaço dedicado ao seu entretenimento e diversão',
    images: [
      '/images/casa/lazer1-1.jpeg',
      '/images/casa/lazer1-2.jpeg',
      '/images/casa/lazer1-3.jpeg',
    ],
    icon: '/images/icons/lazer.png',
    amenities: [
      { icon: FaGamepad, text: 'Jogos de videogame' },
      { icon: FaTableTennisPaddleBall, text: 'Mesa de ping pong' },
      { icon: FaChess, text: 'Jogos de tabuleiro' },
      { icon: FaWifi, text: 'Wi-Fi de alta velocidade' },
      { icon: FaCouch, text: 'Área de descanso' }
    ]
  }
];

// Adicione esta função helper fora do componente
const calculatePosition = (index: number, selectedIndex: number, total: number) => {
  let position = index - selectedIndex;
  
  // Ajusta para loop circular de forma mais suave
  if (position < -Math.floor(total/2)) {
    position += total;
  } else if (position > Math.floor(total/2)) {
    position -= total;
  }
  
  // Calcula a posição Y baseada na distância do item selecionado
  const y = position * 60; // Ajuste este valor para controlar o espaçamento vertical
  const scale = 1 - Math.abs(position) * 0.15; // Diminui gradualmente baseado na distância
  const opacity = 1 - Math.abs(position) * 0.3; // Fade out gradual
  
  return {
    y,
    scale: Math.max(0.4, scale), // Limita a escala mínima
    opacity: Math.max(0.2, opacity), // Limita a opacidade mínima
    zIndex: 10 - Math.abs(position)
  };
};

export default function Accommodations() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [velocity, setVelocity] = useState(0);

  const handleNext = () => {
    setVelocity(prev => prev + 1);
    setSelectedIndex(prev => (prev + 1) % accommodations.length);
    // Reset da velocidade após um tempo
    setTimeout(() => setVelocity(0), 800);
  };

  const handlePrev = () => {
    setVelocity(prev => prev - 1);
    setSelectedIndex(prev => (prev - 1 + accommodations.length) % accommodations.length);
    // Reset da velocidade após um tempo
    setTimeout(() => setVelocity(0), 800);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % accommodations[selectedIndex].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + accommodations[selectedIndex].images.length) % accommodations[selectedIndex].images.length
    );
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="relative min-h-screen py-24 bg-white" 
      id="accommodations"
    >
      {/* Conteúdo */}
      <div className="container mx-auto px-4">
        {/* Título com cores ajustadas */}
        <motion.div 
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-7xl font-semibold text-gray-900 mb-4 tracking-wide"
          >
            Acomodações
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl font-medium text-gray-600 tracking-wider"
          >
            Conheça cada espaço cuidadosamente planejado
          </motion.p>
        </motion.div>

        {/* Container principal */}
        <div className="flex items-center justify-center gap-12 max-w-[1400px] mx-auto">
          {/* Lado Esquerdo - Roleta (reduzido o espaço) */}
          <div className="relative h-[500px] w-[350px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {accommodations.map((acc, index) => (
                <motion.div
                  key={acc.id}
                  className={`absolute w-[300px] h-[300px] cursor-pointer
                           bg-white rounded-3xl p-8 backdrop-blur-sm
                           transition-shadow duration-500
                           ${index === selectedIndex ? 'shadow-[0_10px_40px_rgba(0,0,0,0.15)]' : ''}`}
                  initial={false}
                  animate={{
                    y: calculatePosition(index, selectedIndex, accommodations.length).y,
                    scale: calculatePosition(index, selectedIndex, accommodations.length).scale,
                    opacity: calculatePosition(index, selectedIndex, accommodations.length).opacity,
                    zIndex: calculatePosition(index, selectedIndex, accommodations.length).zIndex
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    mass: 1
                  }}
                  whileHover={{ 
                    scale: index === selectedIndex ? 1.1 : calculatePosition(index, selectedIndex, accommodations.length).scale * 1.1,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    }
                  }}
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.y > 50) {
                      handleNext();
                    } else if (info.offset.y < -50) {
                      handlePrev();
                    }
                  }}
                >
                  {/* Conteúdo do card */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {acc.icon.startsWith('/') ? (
                      <div className="relative w-[250px] h-[250px]">
                        <Image
                          src={acc.icon}
                          alt={acc.title}
                          fill
                          className="object-contain"
                          sizes="250px"
                        />
                      </div>
                    ) : (
                      <div className="w-[250px] h-[250px] flex items-center justify-center">
                        {acc.id === 'bedroom-1' && <FaBed className="w-40 h-40 text-gray-600" />}
                        {acc.id === 'bedroom-2' && <FaBed className="w-40 h-40 text-gray-600" />}
                        {acc.id === 'bedroom-4' && <FaBed className="w-40 h-40 text-gray-600" />}
                        {acc.id === 'living-room' && <FaCouch className="w-40 h-40 text-gray-600" />}
                        {acc.id === 'living-area' && <MdKitchen className="w-40 h-40 text-gray-600" />}
                        {acc.id === 'kitchen' && <MdLocalDining className="w-40 h-40 text-gray-600" />}
                        {acc.id === 'dining-room' && <FaHouse className="w-40 h-40 text-gray-600" />}
                        {acc.id === 'home-office' && <FaWifi className="w-40 h-40 text-gray-600" />}
                        {acc.id === 'backyard' && <FaUmbrellaBeach className="w-40 h-40 text-gray-600" />}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botões de navegação */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-14 z-20 pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.9)' }}
                transition={{ type: "spring", stiffness: 400 }}
                onClick={handlePrev}
                className="absolute top-0 left-0 right-0 p-4 
                         text-gray-400 hover:text-gray-600
                         bg-white/50 backdrop-blur-sm rounded-full
                         shadow-lg pointer-events-auto"
              >
                <FaChevronUp className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.9)' }}
                transition={{ type: "spring", stiffness: 400 }}
                onClick={handleNext}
                className="absolute bottom-0 left-0 right-0 p-4
                         text-gray-400 hover:text-gray-600
                         bg-white/50 backdrop-blur-sm rounded-full
                         shadow-lg pointer-events-auto"
              >
                <FaChevronDown className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Lado Direito - Card com Imagens */}
          <div className="relative w-[750px]">
            {/* Título e Descrição */}
            <div className="text-center mb-8">
              <h3 className="text-4xl font-semibold text-gray-900 mb-2 tracking-wide">
                {accommodations[selectedIndex].title}
              </h3>
              <p className="text-lg font-medium text-gray-600 tracking-wide">
                {accommodations[selectedIndex].description}
              </p>
            </div>

            {/* Container do Card com Controles */}
            <div className="relative w-[700px] mx-auto">
              {/* Controles Laterais */}
              <button
                onClick={prevImage}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-lg
                         flex items-center justify-center
                         text-gray-800 hover:scale-110 transition-transform
                         group"
              >
                <FaChevronLeft className="w-5 h-5 group-hover:text-cyan-500 transition-colors" />
              </button>

              {/* Card Principal com Flip */}
              <div className="group [perspective:1000px]">
                <div className="relative w-[700px] h-[500px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Frente do Card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                    <Image
                      src={accommodations[selectedIndex].images[currentImageIndex]}
                      alt={accommodations[selectedIndex].title}
                      fill
                      className="object-cover rounded-[40px]"
                      sizes="700px"
                    />
                  </div>

                  {/* Verso do Card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="w-full h-full rounded-[40px] bg-white shadow-lg p-8">
                      <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                        O que este espaço oferece
                      </h4>
                      <div className="grid grid-cols-2 gap-6">
                        {accommodations[selectedIndex].amenities.map((amenity, index) => {
                          const Icon = amenity.icon;
                          return (
                            <div key={index} className="flex items-center gap-3">
                              <Icon className="w-6 h-6 text-cyan-600" />
                              <span className="text-gray-700">{amenity.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão Next */}
              <button
                onClick={nextImage}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white shadow-lg
                         flex items-center justify-center
                         text-gray-800 hover:scale-110 transition-transform
                         group"
              >
                <FaChevronRight className="w-5 h-5 group-hover:text-cyan-500 transition-colors" />
              </button>
            </div>

            {/* Indicadores de Imagem */}
            <div className="flex justify-center gap-2 mt-6">
              {accommodations[selectedIndex].images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300
                            ${index === currentImageIndex 
                              ? 'w-6 bg-cyan-500' 
                              : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 