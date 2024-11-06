'use client';

import { BaseProps } from '@/types/global';
import { FaStar } from 'react-icons/fa';

interface TestimonialsProps extends BaseProps {}

interface Testimonial {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  platform: 'Airbnb' | 'Booking';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    date: 'Janeiro 2024',
    rating: 5,
    comment: 'Casa incrível! Superou todas as expectativas. Ambiente limpo, organizado e acolhedor. Voltaremos com certeza!',
    platform: 'Airbnb'
  },
  {
    id: '2',
    name: 'João Santos',
    date: 'Dezembro 2023',
    rating: 5,
    comment: 'Lugar perfeito para descansar com a família. A piscina é ótima e a vista é deslumbrante.',
    platform: 'Booking'
  },
  {
    id: '3',
    name: 'Ana Costa',
    date: 'Novembro 2023',
    rating: 5,
    comment: 'Excelente estrutura e atendimento. A casa é ainda mais bonita pessoalmente.',
    platform: 'Airbnb'
  }
];

export default function Testimonials({}: TestimonialsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Depoimentos</h2>
        <p className="text-center text-gray-600 mb-12">
          O que nossos hóspedes dizem sobre sua experiência
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {testimonial.platform}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 