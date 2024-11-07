'use client';

import { BaseProps } from '@/types/global';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

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

export default function Testimonials({}: TestimonialsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-32 bg-black" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center text-white mb-4">Avaliações</h2>
        <p className="text-white/60 text-center font-light mb-24 max-w-2xl mx-auto">
          O que nossos hóspedes dizem sobre sua experiência
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl
                       hover:border-white/20 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {renderStars(testimonial.rating)}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 