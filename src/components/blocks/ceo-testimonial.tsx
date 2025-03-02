import { motion } from "framer-motion";

export function CEOTestimonial() {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <img
              src="https://raw.githubusercontent.com/85ED/VolteraCoifas/main/IMG_6874.jpg"
              alt="Luiz Voltera - CEO"
              className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              "Estamos há mais de 20 anos no ramo respeitando as normas da ABNT 14518 realizando limpeza de coifas e dutos, sem uso de água, limpeza de coifa industrial, limpeza de coifa de restaurante, manutenção de coifa industrial com fornecimento de laudo técnico, certificado e relatório fotográfico, realizamos conserto de exaustor centrífugo, atendemos capital, litoral, interior de São Paulo e Minas Gerais."
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Luiz Voltera</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">CEO - Voltera Coifas</p>
              <div className="mt-2 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                <p>Fone Fixo: (11) 2386-7612 | WhatsApp: (11) 96029-7939</p>
                <p>
                  Email: <a href="mailto:tecnico@volteracoifas.com.br" className="text-blue-600 dark:text-blue-400 hover:underline">tecnico@volteracoifas.com.br</a> - ou clique na página <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">contato</a> abaixo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}