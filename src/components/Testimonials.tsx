'use client';

import { BaseProps } from '@/types/global';
import { FaStar, FaSprayCan, FaCheck, FaKey, FaComments, FaMapMarkerAlt, FaTag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';

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
    date: 'outubro de 2023',
    rating: 5,
    comment: 'O Alexandre além de muito simpático, muito prestativo e acolhedor. A hospedagem estava dentro das expectativas. Super Recomendo.',
    platform: 'Airbnb',
    image: '/images/testimonials/Alexandre.jpeg',
    time: '2 anos no Airbnb'
  },
  {
    id: '2',
    name: 'Alexandre',
    date: 'julho de 2023',
    rating: 5,
    comment: 'Casa muito confortável, limpa e organizada, tem todos utensílios necessários para a estadia. Fica próximo de uma represa com uma paisagem sensacional, com uma vista linda de alguns quartos da casa. O anfitrião é muito solicito e gentil, adoramos nossa estadia!!',
    platform: 'Airbnb',
    image: '/images/testimonials/Alexandre2.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '3',
    name: 'Alexandre',
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
    date: 'março de 2024',
    rating: 5,
    comment: 'Excelente estadia! Anfitriões super fofos ainda deixaram chocolate para nós e um bilhete. Aproveitamos muitoo, casa em excelente estado com todos itens necessários inclusive cobertas e toalhas! Espero voltar mais vezes 🙏',
    platform: 'Airbnb',
    image: '/images/testimonials/Amanda.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '6',
    name: 'Ana Paula',
    date: 'abril de 2024',
    rating: 5,
    comment: 'A casa é muito boa! Tem uma natureza privilegiada, O terreno fica na beira da represa com uma mata privilegiada! O acesso a represa é bem íngreme, mas vale a pena descer, a vista é linda!',
    platform: 'Airbnb',
    image: '/images/testimonials/Ana%20Paula.jpeg',
    time: '8 anos no Airbnb'
  },
  {
    id: '7',
    name: 'Ana Silvia',
    date: 'setembro de 2023',
    rating: 5,
    comment: 'Lugar lindo! Casa ampla e com os ambientes conectados, tudo muito limpo e casa completa. O visual é maravilhoso! Espaço de churrasqueira e piscina muito gostoso. E os anfitriões são ótimos, respondem super rápido, nos deram dicas e tiraram todas as dúvidas! Realmente me senti em casa e com certeza voltaria!',
    platform: 'Airbnb',
    image: '/images/testimonials/Ana Silvia.jpeg',
    time: '8 anos no Airbnb'
  },
  {
    id: '8',
    name: 'André',
    date: 'abril de 2024',
    rating: 5,
    comment: 'Foi um tempo muito agradável a estada no espaço do Tadashi. Muita praticidade na cozinha (utensílios), as instruções foram bastante claras, a casa é muito aconchegante, e a natureza ao redor é maravilhosa. Apenas um contratempo: nas chácaras vizinhas (ao lado e atr) houve raves - mas logo que avisado, o anfitrião acionou a segurança do condomínio, e foi resolvido.',
    platform: 'Airbnb',
    image: '/images/testimonials/Andre.jpeg',
    time: '12 anos no Airbnb'
  },
  {
    id: '9',
    name: 'Camilla',
    date: 'dezembro de 2023',
    rating: 5,
    comment: 'Meu final de semana foi maravilhoso, casa, espaço de laser, o condomínio, tudo estava perfeito. Voltarei mais vezes.',
    platform: 'Airbnb',
    image: '/images/testimonials/Camilla.jpeg',
    time: '1 ano no Airbnb'
  },
  {
    id: '10',
    name: 'Cassio',
    date: 'março de 2024',
    rating: 5,
    comment: 'Casa ampla e confortável, pegamos final de semana chuvoso e a casa propiciou espaço para as crianças brincarem tranquilamente. Área do churrasco coberta. Lugar tranquilo com portaria e segurança. Alexandre ótimo anfitrião, flexível e super atencioso. Hoje ainda foi muito prestativo ao informar que esquecemos brinquedos do meu filho na casa. É uma casa super família tem tudo para o dia a dia. Nota 10 para os anfitriões. Que Deus os abençoe.',
    platform: 'Airbnb',
    image: '/images/testimonials/Cassio.jpeg',
    time: '4 anos no Airbnb'
  },
  {
    id: '11',
    name: 'Danilo',
    date: 'outubro de 2023',
    rating: 5,
    comment: 'tudo maravilhoso e condizentes com as fotos e discrição do anúncio. Alexandre muito gentil e prestativo sempre atento com a hospedagem foi um ótimo FDS. ctz voltaremos novamente.',
    platform: 'Airbnb',
    image: '/images/testimonials/Danilo.jpeg',
    time: '3 anos no Airbnb'
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
    date: 'fevereiro de 2024',
    rating: 5,
    comment: 'Linda casa, muito aconchegante e fácil acesso. Tem todos os utensílios para você fazer o que tiver vontade. Tem jogos de tabuleiro para diversão. Anfitrião muito prestativo e deu várias dicas!',
    platform: 'Airbnb',
    image: '/images/testimonials/Efrem.jpeg',
    time: '9 anos no Airbnb'
  },
  {
    id: '14',
    name: 'Fabio',
    date: 'outubro de 2023',
    rating: 5,
    comment: 'Lugar excelente, ótimo pra descansar e apreciar uma paisagem lindíssima, anfitrião muito solícito e acessível. Tem uma pizza top próximo ao local que entrega rápido e bem quentinha, e o melhor de todos me senti em casa de verdade, ambiente muito apto com tudo e algo mais descrito. Nota 10',
    platform: 'Airbnb',
    image: '/images/testimonials/Fabio.jpeg',
    time: '1 ano no Airbnb'
  },
  {
    id: '15',
    name: 'Gabriela',
    date: 'agosto de 2023',
    rating: 5,
    comment: 'Estadia maravilhosa. A casa é super espaçosa, estava tudo limpinho e organizado. O anfitrião foi super atencioso e deixou até uma caixa de bombom com recadinho para nós quando chegamos (detalhes que fazem a diferença). A casa é super equipada, tinha até sabonetes, papel higiênico etc... Voltaremos com certeza. Nota 1000',
    platform: 'Airbnb',
    image: '/images/testimonials/Gabriela.jpeg',
    time: '6 anos no Airbnb'
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
    date: 'abril de 2024',
    rating: 5,
    comment: 'Fiquei impressionado com o sobrado, originalmente planejava apenas uma pernoite, porém gostei tanto que acabei estendendo minha estadia. O lugar é incrivelmente limpo e organizado, com roupas de cama, mesa e banho trocadas e lavadas. Além disso, possui ótima conexão à internet e uma variedade de eletrônicos que garantiram minha comodidade mesmo estando longe da cidade. O condomínio é extremamente seguro e de quebra pude descer até a represa para apreciar um pôr do sol excepcional. Aproveitei para pescar tranquilamente, desfrutando da privacidade e tranquilidade que a chácara oferece. Com certeza, pretendo retornar e recomendar a todos. Não posso deixar de mencionar o anfitrião, que foi muito atencioso e prestativo durante toda a minha estadia. Ah, e o melhor de tudo, a chácara fica perto de São Paulo e é de fácil acesso! Foi uma experiência que realmente valeu a pena!',
    platform: 'Airbnb',
    image: '/images/testimonials/Gustavo.jpeg',
    time: '2 anos no Airbnb'
  },
  {
    id: '18',
    name: 'Ivanir',
    date: 'fevereiro de 2023',
    rating: 5,
    comment: 'A casa é muito bem cuidada, os utensílios de cozinhas são novos. A casa estava toda limpa. O condomínio é super seguro. O alexandre foi muito solícito e me ajudou sempre que necessário. Passamos um Carnaval super bom e tranquilo com os amigos. Pretendemos voltar!',
    platform: 'Airbnb',
    image: '/images/testimonials/Ivanir.jpeg',
    time: '9 anos no Airbnb'
  },
  {
    id: '19',
    name: 'Jessica',
    date: 'abril de 2024',
    rating: 5,
    comment: 'Hospedagem boa, lugar tranquilo e lindo, fácil localização, anfitrião extremamente prestativo e atencioso. Adoramos e pretendemos retornar!',
    platform: 'Airbnb',
    image: '/images/testimonials/Jessica.jpeg',
    time: '1 ano no Airbnb'
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
    date: 'fevereiro de 2024',
    rating: 5,
    comment: 'O Alexandre e Mari nos recebeu com muito carinho, sempre preocupados com nossa estadia, tudo muito limpo e organizado, casa bem equipada e completa, lugar bem tranquilo para quem quer descansar de verdade. Recomendo muito o local, fomos muito bem tratados pessoas muito humanas e preocupadas.',
    platform: 'Airbnb',
    image: '/images/testimonials/Jonas.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '22',
    name: 'Julia',
    date: 'abril de 2024',
    rating: 5,
    comment: 'Alexandre e Mary extremamente atenciosos. A casa é linda e exatamente como nas fotos, super limpa. Nós nos sentimos em casa, e tivemos todo apoio dos anfitriões. Faltou água em um momento mas assim que falamos com eles, prontamente tentaram nos auxiliar. Voltaria muito!',
    platform: 'Airbnb',
    image: '/images/testimonials/Julia.jpeg',
    time: '5 anos no Airbnb'
  },
  {
    id: '23',
    name: 'Karine',
    date: 'junho de 2023',
    rating: 5,
    comment: 'Alexandre é super atencioso e desde o início facilitou a comunicação e se colocou à disposição para qualquer duvida. A casa está localizada dentro de um condomínio fechado e o acesso é fácil. A casa possui acesso por uma "trilha" curtinha para a beira da represa. Há vista da casa p represa tbm - mto bonita. A piscina estava limpinha. Cozinha bem completa. Quartos confortáveis.',
    platform: 'Airbnb',
    image: '/images/testimonials/Karine.jpeg',
    time: '6 anos no Airbnb'
  },
  {
    id: '24',
    name: 'Leandra',
    date: 'dezembro de 2023',
    rating: 5,
    comment: 'Eu e minha família tivemos um Natal maravilhoso na casa. Lugar tranquilo, espaçoso, privativo, natureza maravilhosa ao redor, casa grande e aconchegante. Não precisamos levar toalhas de banho, utensílios de cozinha, tinha absolutamente tudo e um pouco mais. Churrasqueira ao lado da piscina. Custo x benefício muito bom! Anfitriões disponíveis e amáveis. Espero poder voltar em 2024!!',
    platform: 'Airbnb',
    image: '/images/testimonials/Leandra.jpeg',
    time: '2 anos no Airbnb'
  },
  {
    id: '25',
    name: 'Luciene',
    date: 'novembro de 2023',
    rating: 5,
    comment: 'Adorei a casa, tudo estava em ordem, tinha papel higiênico em todos os banheiros, saco de lixo pra repor, casa limpa e organizada.',
    platform: 'Airbnb',
    image: '/images/testimonials/Luciene.jpeg',
    time: '1 ano no Airbnb'
  },
  {
    id: '26',
    name: 'Marcio',
    date: 'julho de 2023',
    rating: 5,
    comment: 'Fui com a minha família, desde o começo antes msm de fechar a casa, tivemos uma ótima comunicação e tiramos tds as dúvidas possíveis, resposta rápida! A casa e como nas fotos, e pessoalmente melhor ainda, lugar de paz tranquilidade, linda vista, a casa tem tudo que precisamos é muito bem equipada. O checkin foi bem flexível, e os anfitriões sempre prontos a ajudar, não tivemos problemas nenhum. Levamos nosso pet que tbm aproveitou mt o espaço que é seguro. Agradeço pelo mimo deixado! Podem ir a casa é perfeita e segura em um condomínio otimo!',
    platform: 'Airbnb',
    image: '/images/testimonials/Marcio.jpeg',
    time: '6 anos no Airbnb'
  },
  {
    id: '27',
    name: 'Merli',
    date: 'dezembro de 2023',
    rating: 5,
    comment: 'Tudo conforme combinado! Amei a estadia e a gentileza dos proprietários! Casa ampla e agradável! Extremamente limpa e proprietários gentis e atenciosos! #superindico #voltarei',
    platform: 'Airbnb',
    image: '/images/testimonials/Merli.jpeg',
    time: '8 anos no Airbnb'
  },
  {
    id: '28',
    name: 'Milena',
    date: 'janeiro de 2024',
    rating: 5,
    comment: 'Amamos a casa do seu Alexandre, foi um fds maravilhoso com a família. Casa limpa, toalhas pra todos, roupas de cama, cozinha tem tudo que precisa, e piscina sempre limpa. Adoramos tudo, voltarei!! ✨❤️ Tirando a parte que ele esteve sempre muito apoio caso precisasse e atenção o tempo todo, tirando dúvidas e dicas. Deixou chocolate de boas vindas, muito gentil. Recomendo',
    platform: 'Airbnb',
    image: '/images/testimonials/Milena.jpeg',
    time: '4 anos no Airbnb'
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
    date: 'outubro de 2023',
    rating: 5,
    comment: 'Adoramos nossa hospedagem, tudo muito limpo , Alexandre e May sempre disponível, casa muito boa com uma sala ampla , quartos grandes organizada , lugar para descansar e curtir a família. Fomos com dois pets que foi super tranquilo porque tem muito espaço e bem seguro. Super indicamos . Logo voltaremos .',
    platform: 'Airbnb',
    image: '/images/testimonials/Patricia.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '31',
    name: 'Patricia',
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
    date: 'fevereiro de 2024',
    rating: 5,
    comment: 'Local perfeito, extremamente limpo e organizado, anfitriões sempre à disposição.',
    platform: 'Airbnb',
    image: '/images/testimonials/Rafael.jpeg',
    time: '6 anos no Airbnb'
  },
  {
    id: '33',
    name: 'Rodolfo',
    date: 'janeiro de 2024',
    rating: 5,
    comment: 'Fim de semana maravilhoso com a família e amigos, Alexandre e Mari impecáveis desde o início até o fim! Muito organizado tanto o espaço quanto as instruções prévias. Me senti muito a vontade durante toda a estadia.. recomendo',
    platform: 'Airbnb',
    image: '/images/testimonials/Rodolfo.jpeg',
    time: '5 anos no Airbnb'
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
    date: 'janeiro de 2024',
    rating: 5,
    comment: 'Anfitrião sempre com disponibilidade para responder, muito atencioso e gentil. Casa bem espaçosa, acomodou todos muito bem.',
    platform: 'Airbnb',
    image: '/images/testimonials/Roseli.jpeg',
    time: '2 anos no Airbnb'
  },
  {
    id: '36',
    name: 'Suzane',
    date: 'novembro de 2023',
    rating: 5,
    comment: 'tudo em perfeito estado como esperado voltaremos em breve gratidão',
    platform: 'Airbnb',
    image: '/images/testimonials/Suzane.jpeg',
    time: '3 anos no Airbnb'
  },
  {
    id: '37',
    name: 'Thamiris',
    date: 'dezembro de 2023',
    rating: 5,
    comment: 'O Alexandre é muito prestativo e atencioso. O espaço estava muito bem arrumado e limpo quando chegamos, com toalhas de rosto limpas nos banheiros e sabonetes novos para banho. As camas também estavam com roupas limpas. Foi uma surpresa maravilhosa! O lugar é muito tranquilo, aproveitei muito com a minha família e nossos pets. Com certeza voltaremos! :)',
    platform: 'Airbnb',
    image: '/images/testimonials/Thamiris.jpeg',
    time: '9 anos no Airbnb'
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

// Função de embaralhamento (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MAX_COMMENT_LENGTH = 150; // Ajuste este valor conforme necessário

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

export default function Testimonials({}: TestimonialsProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true,
    amount: 0.2
  });

  // Usar useState para manter os testimonials embaralhados consistentes durante a navegação
  const [shuffledTestimonials] = useState(() => shuffleArray(testimonials));
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(shuffledTestimonials.length / ITEMS_PER_PAGE);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Otimização 1: Memoizar a função de renderização das estrelas
  const renderStars = useCallback((rating: number, animate = false) => {
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
  }, [isInView]);

  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  // Otimização 2: Memoizar handlers
  const handleTestimonialClick = useCallback((testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
  }, []);

  const handleClose = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedTestimonial(null);
  }, []);

  // Otimização 3: Reduzir complexidade das animações
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      rotateY: 180
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateY: 360,
      transition: {
        duration: 0.6, // Reduzido de 0.8
        type: "tween", // Mudado de "spring" para "tween"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.5,
      rotateY: 180,
      transition: {
        duration: 0.3 // Adicionado duration específico para saída
      }
    }
  };

  return (
    <section className="py-32 bg-black overflow-hidden relative" id="testimonials" ref={sectionRef}>
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
            {shuffledTestimonials
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
                  onClick={() => handleTestimonialClick(testimonial)}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl
                           hover:border-white/20 transition-colors duration-500 cursor-pointer"
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

                  <div className="flex flex-col h-full">
                    <p className="text-white/80 font-light leading-relaxed mb-4">
                      {truncateText(testimonial.comment, MAX_COMMENT_LENGTH)}
                    </p>
                    
                    {testimonial.comment.length > MAX_COMMENT_LENGTH && (
                      <div className="mt-auto">
                        <span className="text-white/60 text-sm hover:text-white/80 transition-colors cursor-pointer">
                          Ver mais...
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-white/40 text-sm">
                        via {testimonial.platform}
                      </span>
                    </div>
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

      {/* Modal do depoimento expandido */}
      <AnimatePresence mode="wait">
        {selectedTestimonial && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-2xl mx-4 bg-white/10 backdrop-blur-xl p-12 rounded-3xl
                         border border-white/20 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Botão fechar otimizado */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/60 hover:text-white
                         transition-colors text-2xl"
                >
                  ×
                </motion.button>

                {/* Conteúdo do card expandido */}
                <div className="flex items-center gap-6 mb-8">
                  <motion.div 
                    className="relative w-24 h-24 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={selectedTestimonial.image}
                      alt={selectedTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-light text-2xl mb-1">
                      {selectedTestimonial.name}
                    </h3>
                    <p className="text-white/60 text-lg">{selectedTestimonial.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-1">
                    {renderStars(selectedTestimonial.rating, true)}
                  </div>
                  <span className="text-white/60 text-lg ml-2">
                    {selectedTestimonial.date}
                  </span>
                </div>

                <p className="text-white/90 font-light leading-relaxed text-xl">
                  {selectedTestimonial.comment}
                </p>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <span className="text-white/40 text-lg">
                    via {selectedTestimonial.platform}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
} 