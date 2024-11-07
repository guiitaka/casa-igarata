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
    name: 'Alexandre',
    date: 'Janeiro 2024',
    rating: 5,
    comment: 'Lugar excepcional! A casa superou todas as expectativas. Ambiente espaçoso, limpo e muito bem cuidado. A vista para a represa é de tirar o fôlego.',
    platform: 'Airbnb',
    image: '/images/testimonials/Alexandre.jpeg',
    time: '6 anos no Airbnb'
  },
  {
    id: '2',
    name: 'Alexandre2',
    date: 'Dezembro 2023',
    rating: 5,
    comment: 'Experiência incrível! A área externa é um verdadeiro paraíso. Piscina impecável e área gourmet completa. Ideal para famílias.',
    platform: 'Airbnb',
    image: '/images/testimonials/Alexandre2.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '3',
    name: 'Alexandre3',
    date: 'Novembro 2023',
    rating: 5,
    comment: 'Férias perfeitas! A casa é ainda mais bonita pessoalmente. Tudo muito organizado e funcional. O condomínio é muito seguro.',
    platform: 'Booking',
    image: '/images/testimonials/Alexandre3.jpeg',
    time: '3 anos no Booking'
  },
  {
    id: '4',
    name: 'Aline',
    date: 'junho de 2024',
    rating: 5,
    comment: 'Estadia ótima! Alexandre muito gentil e atencioso durante toda a hospedagem! A família toda adorou a hospitalidade!',
    platform: 'Airbnb',
    image: '/images/testimonials/Aline.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '5',
    name: 'Amanda',
    date: 'Setembro 2023',
    rating: 5,
    comment: 'Um verdadeiro refúgio! Lugar perfeito para relaxar e recarregar as energias. A comunicação com os anfitriões foi excelente.',
    platform: 'Booking',
    image: '/images/testimonials/Amanda.jpeg',
    time: '5 anos no Booking'
  },
  {
    id: '6',
    name: 'Ana Paula',
    date: 'Agosto 2023',
    rating: 5,
    comment: 'Casa espetacular! Todos os ambientes são muito aconchegantes. A cozinha é um sonho para quem gosta de cozinhar.',
    platform: 'Airbnb',
    image: '/images/testimonials/Ana%20Paula.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '7',
    name: 'Ana Silvia',
    date: 'Julho 2023',
    rating: 5,
    comment: 'Fim de semana perfeito! A casa é linda e super bem equipada. O deck com vista para a represa é um diferencial incrível.',
    platform: 'Booking',
    image: '/images/testimonials/Ana Silvia.jpeg',
    time: '4 anos no Booking'
  },
  {
    id: '8',
    name: 'Andre',
    date: 'Junho 2023',
    rating: 5,
    comment: 'Lugar incrível! Passamos dias maravilhosos em família. A estrutura da casa é completa e muito confortável.',
    platform: 'Airbnb',
    image: '/images/testimonials/Andre.jpeg',
    time: '2 anos no Airbnb'
  },
  {
    id: '9',
    name: 'Camilla',
    date: 'Maio 2023',
    rating: 5,
    comment: 'Experiência única! A casa é um verdadeiro paraíso. Tudo muito limpo e organizado. Voltaremos com certeza!',
    platform: 'Booking',
    image: '/images/testimonials/Camilla.jpeg',
    time: '3 anos no Booking'
  },
  {
    id: '10',
    name: 'Cassio',
    date: 'Abril 2023',
    rating: 5,
    comment: 'Férias inesquecíveis! A casa é maravilhosa e os anfitriões são muito atenciosos. Recomendo fortemente!',
    platform: 'Airbnb',
    image: '/images/testimonials/Cassio.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '11',
    name: 'Danilo',
    date: 'Março 2023',
    rating: 5,
    comment: 'Local excepcional! A casa é um verdadeiro refúgio. Perfeita para momentos em família e com amigos.',
    platform: 'Booking',
    image: '/images/testimonials/Danilo.jpeg',
    time: '3 anos no Booking'
  },
  {
    id: '12',
    name: 'Edson',
    date: 'julho de 2024',
    rating: 5,
    comment: 'A melhor experiência em família! Imaginem que antes mesmo da reserva, esse casal já impactou a nossa decisão quando tiramos as dúvidas da nossa família, e sentimos aquela energia boa de família e pessoas que se preocupam com todo detalhe, responsáveis e são eles Alexandre e Mary os Super Hosts da plataforma!! As imagens do local já encantavam antes de chegarmos. Foi de fato o local que escolhemos e que proporcionou a celebração do meu aniversário para se conectar com a natureza, um local seguro, calmo, um ambiente bem cuidado e cheio de detalhes, aconchegante, uma terapia para a nossa alma. Nadamos, brincamos, comemos, caminhamos até o meu irmão pescou :D, bons cochilos na rede. As recomendações foram incríveis, a melhor pizza da região devemos destacar que foi a do Daniel. Renovamos as nossas energias, criamos novas memórias e queremos voltar o mais breve!!! Gratidão Alexandre e Mary por disponibilizarem e compartilharem um local tão especial, vocês fazem um diferencial imensurável.',
    platform: 'Airbnb',
    image: '/images/testimonials/Edson.jpeg',
    time: '9 anos no Airbnb'
  },
  {
    id: '13',
    name: 'Efrem',
    date: 'Janeiro 2023',
    rating: 5,
    comment: 'Excelente estadia! O espaço é ainda mais bonito pessoalmente. A vista para a represa é deslumbrante em qualquer horário.',
    platform: 'Booking',
    image: '/images/testimonials/Efrem.jpeg',
    time: '2 anos no Booking'
  },
  {
    id: '14',
    name: 'Fabio',
    date: 'Dezembro 2022',
    rating: 5,
    comment: 'Casa maravilhosa! Cada ambiente foi pensado nos mínimos detalhes. A área gourmet é um show à parte.',
    platform: 'Airbnb',
    image: '/images/testimonials/Fabio.jpeg',
    time: '5 anos no Airbnb'
  },
  {
    id: '15',
    name: 'Gabriela',
    date: 'Novembro 2022',
    rating: 5,
    comment: 'Lugar incrível! Perfeito para relaxar com a família. A casa é super aconchegante e bem equipada.',
    platform: 'Booking',
    image: '/images/testimonials/Gabriela.jpeg',
    time: '3 anos no Booking'
  },
  {
    id: '16',
    name: 'Giulia',
    date: '3 semanas atrás',
    rating: 5,
    comment: 'Alexandre é uma pessoa sensacional! No dia da viagem enviou pelo chat diversas informações, dicas e foi muito prestativo. Estava de prontidão para tirar qualquer dúvida! Nossa estadia foi muito boa, o ambiente é bem familiar e a casa muito linda. Nós adoramos a experiência!',
    platform: 'Airbnb',
    image: '/images/testimonials/Giulia.jpeg',
    time: '6 anos no Airbnb'
  },
  {
    id: '17',
    name: 'Gustavo',
    date: 'Setembro 2022',
    rating: 5,
    comment: 'Simplesmente fantástico! A casa é muito espaçosa e confortável. A vista para a represa é de tirar o fôlego.',
    platform: 'Booking',
    image: '/images/testimonials/Gustavo.jpeg',
    time: '2 anos no Booking'
  },
  {
    id: '18',
    name: 'Ivanir',
    date: 'Agosto 2022',
    rating: 5,
    comment: 'Tudo perfeito! Desde a recepção até o checkout. A casa é linda e super bem cuidada.',
    platform: 'Airbnb',
    image: '/images/testimonials/Ivanir.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '19',
    name: 'Jessica',
    date: 'setembro de 2024',
    rating: 5,
    comment: 'Ótimo lugar para estar com a família e amigos. Fotos correspondem com o ambiente.',
    platform: 'Airbnb',
    image: '/images/testimonials/Jessica.jpeg',
    time: '8 anos no Airbnb'
  },
  {
    id: '20',
    name: 'Jessica2',
    date: 'Junho 2022',
    rating: 5,
    comment: 'Férias memoráveis! A casa é um verdadeiro paraíso. Tudo muito limpo e organizado.',
    platform: 'Airbnb',
    image: '/images/testimonials/Jessica2.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '21',
    name: 'Jonas',
    date: 'Maio 2022',
    rating: 5,
    comment: 'Lugar extraordinário! A casa é muito bem equipada e os anfitriões são super atenciosos.',
    platform: 'Booking',
    image: '/images/testimonials/Jonas.jpeg',
    time: '2 anos no Booking'
  },
  {
    id: '22',
    name: 'Julia',
    date: 'Abril 2022',
    rating: 5,
    comment: 'Estadia perfeita! A casa é linda e super aconchegante. O deck com vista para a represa é maravilhoso.',
    platform: 'Airbnb',
    image: '/images/testimonials/Julia.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '23',
    name: 'Karine',
    date: 'Março 2022',
    rating: 5,
    comment: 'Lugar mágico! A casa é um refúgio perfeito. A vista do nascer e pôr do sol na represa é indescritível.',
    platform: 'Airbnb',
    image: '/images/testimonials/Karine.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '24',
    name: 'Leandra',
    date: 'Fevereiro 2022',
    rating: 5,
    comment: 'Experiência incrível! A casa é ainda mais bonita pessoalmente. Cada detalhe foi pensado com muito carinho.',
    platform: 'Booking',
    image: '/images/testimonials/Leandra.jpeg',
    time: '4 anos no Booking'
  },
  {
    id: '25',
    name: 'Luciene',
    date: 'Janeiro 2022',
    rating: 5,
    comment: 'Tudo perfeito! A casa é maravilhosa, super bem equipada e confortável. A área externa é um espetáculo.',
    platform: 'Airbnb',
    image: '/images/testimonials/Luciene.jpeg',
    time: '2 anos no Airbnb'
  },
  {
    id: '26',
    name: 'Marcio',
    date: 'Dezembro 2021',
    rating: 5,
    comment: 'Simplesmente sensacional! Estrutura completa, ambiente acolhedor e vista deslumbrante da represa.',
    platform: 'Booking',
    image: '/images/testimonials/Marcio.jpeg',
    time: '3 anos no Booking'
  },
  {
    id: '27',
    name: 'Merli',
    date: 'Novembro 2021',
    rating: 5,
    comment: 'Casa espetacular! Passamos momentos incríveis em família. A área gourmet é um show à parte.',
    platform: 'Airbnb',
    image: '/images/testimonials/Merli.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '28',
    name: 'Milena',
    date: 'Outubro 2021',
    rating: 5,
    comment: 'Lugar incrível! A casa é muito espaçosa e aconchegante. A piscina tem uma vista maravilhosa.',
    platform: 'Booking',
    image: '/images/testimonials/Milena.jpeg',
    time: '2 anos no Booking'
  },
  {
    id: '29',
    name: 'Nathalia',
    date: 'julho de 2024',
    rating: 5,
    comment: 'Muito completo limpo e organizado',
    platform: 'Airbnb',
    image: '/images/testimonials/Nathalia.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '30',
    name: 'Patricia',
    date: 'Agosto 2021',
    rating: 5,
    comment: 'Excelente estadia! Tudo muito limpo e organizado. Os anfitriões são super atenciosos.',
    platform: 'Booking',
    image: '/images/testimonials/Patricia.jpeg',
    time: '4 anos no Booking'
  },
  {
    id: '31',
    name: 'Patricia2',
    date: 'Julho 2021',
    rating: 5,
    comment: 'Casa maravilhosa! Ambiente familiar e acolhedor. A área de lazer é completa e muito bem planejada.',
    platform: 'Airbnb',
    image: '/images/testimonials/Patricia2.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '32',
    name: 'Rafael',
    date: 'Junho 2021',
    rating: 5,
    comment: 'Lugar extraordinário! A casa superou todas as expectativas. Condomínio seguro e localização privilegiada.',
    platform: 'Booking',
    image: '/images/testimonials/Rafael.jpeg',
    time: '2 anos no Booking'
  },
  {
    id: '33',
    name: 'Rodolfo',
    date: 'Maio 2021',
    rating: 5,
    comment: 'Experiência única! A casa é perfeita em todos os aspectos. A vista para a represa é deslumbrante.',
    platform: 'Airbnb',
    image: '/images/testimonials/Rodolfo.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '34',
    name: 'Rose',
    date: 'julho de 2024',
    rating: 5,
    comment: 'Alexandre e Mary foram super prestativos, deram todas as orientações e suporte necessários, apresentaram a casa previamente por vídeo e estavam sempre disponíveis. A casa estava super limpa e organizada, simplesmente maravilhosa. Casa ampla, arejada, uma excelente iluminação natural e com visual para a represa, o que nos garantiu um final de semana incrível. Se você quiser repor as energias, esse com certeza é o lugar certo. Recomendamos à todos, eles realmente são super hosts.',
    platform: 'Airbnb',
    image: '/images/testimonials/Rose.jpeg',
    time: '6 anos no Airbnb'
  },
  {
    id: '35',
    name: 'Roseli',
    date: 'Março 2021',
    rating: 5,
    comment: 'Casa espetacular! Ambiente perfeito para relaxar com a família. A área externa é um verdadeiro paraíso.',
    platform: 'Airbnb',
    image: '/images/testimonials/Roseli.jpeg',
    time: '2 anos no Airbnb'
  },
  {
    id: '36',
    name: 'Suzane',
    date: 'Fevereiro 2021',
    rating: 5,
    comment: 'Lugar incrível! A casa é ainda mais bonita ao vivo. Cada detalhe foi pensado com muito carinho.',
    platform: 'Booking',
    image: '/images/testimonials/Suzane.jpeg',
    time: '4 anos no Booking'
  },
  {
    id: '37',
    name: 'Thamiris',
    date: 'Janeiro 2021',
    rating: 5,
    comment: 'Férias memoráveis! A casa é um verdadeiro refúgio. Estrutura completa e vista deslumbrante.',
    platform: 'Airbnb',
    image: '/images/testimonials/Thamiris.jpeg',
    time: '3 anos no Airbnb'
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