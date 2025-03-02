import React from 'react';
import { FeatureSteps } from '../components/blocks/feature-section';

export function Portfolio() {
  const features = [
    {
      step: "Tratamento de Fumaça",
      title: "Sistema de Exaustão Eficiente",
      content: "A instalação de coifa garante a extração eficiente de vapores e partículas, promovendo um ambiente limpo e seguro.",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/20201209_120518.png"
    },
    {
      step: "Residencial",
      title: "Soluções para sua Casa",
      content: "Em residências, a coifa oferece um sistema discreto e eficaz que assegura a qualidade do ar e o conforto dos moradores.",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/CYMERA_20180402_001155.png"
    }
  ];

  return (
    <div className="pt-24 pb-12 bg-white dark:bg-gray-900">
      <FeatureSteps
        features={features}
        title="Nossos Trabalhos"
        autoPlayInterval={5000}
        imageHeight="h-[500px]"
      />
    </div>
  );
}