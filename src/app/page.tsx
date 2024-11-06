import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import Accommodations from '@/components/Accommodations';
import Location from '@/components/Location';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Gallery />
        <Accommodations />
        <Location />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 