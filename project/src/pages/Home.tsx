import React from 'react';
import { AnimatedHero } from '../components/ui/animated-hero';
import { Logos3 } from '../components/blocks/logos3';
import { FeaturesSectionWithHoverEffects } from '../components/blocks/feature-section-with-hover-effects';
import { CEOTestimonial } from '../components/blocks/ceo-testimonial';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="h-[70vh]">
        <AnimatedHero />
      </section>

      {/* Services */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Nossos Serviços</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Soluções completas em limpeza e manutenção de coifas</p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* CEO Testimonial */}
      <CEOTestimonial />

      {/* Clients Section */}
      <Logos3 />
    </>
  );
}