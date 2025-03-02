"use client"

import { motion } from "framer-motion"

export const AnimatedHero = () => {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/85ED/VolteraCoifas/main/commercial-kitchen-fire-suppression-system.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 flex flex-col items-center justify-center gap-4 md:gap-6 translate-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xl md:text-3xl lg:text-5xl font-bold text-white mb-2"
        >
          Limpeza de Coifas Profissional
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-center text-sm md:text-base lg:text-xl text-gray-200 mb-4"
        >
          Há mais de 20 anos no mercado, seguindo as normas ABNT 14518. Atendemos São Paulo - Capital, Interior, Litoral e Minas Gerais.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4"
        >
          <a
            href="#contact"
            className="inline-flex h-8 md:h-10 items-center justify-center rounded-md bg-blue-600 px-4 md:px-8 text-xs md:text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
          >
            Solicitar Orçamento
          </a>
          <a
            href="https://wa.me/11960297939"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 md:h-10 items-center justify-center rounded-md bg-green-600 px-4 md:px-8 text-xs md:text-sm font-medium text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  )
}