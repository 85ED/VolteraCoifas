import { cn } from "../../lib/utils";
import {
  IconSpray,
  IconAirConditioning,
  IconBuildingStore,
  IconTool,
  IconCertificate,
  IconHome,
  IconBuildingFactory,
  IconRuler,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Limpeza de coifa industrial",
      description: "Higienização profunda e especializada para cozinhas industriais seguindo normas técnicas.",
      icon: <IconBuildingFactory className="w-8 h-8" />,
    },
    {
      title: "Limpeza de dutos",
      description: "Remoção completa de gordura e resíduos do sistema de exaustão.",
      icon: <IconAirConditioning className="w-8 h-8" />,
    },
    {
      title: "Limpeza de coifa de restaurante",
      description: "Manutenção preventiva para estabelecimentos comerciais.",
      icon: <IconBuildingStore className="w-8 h-8" />,
    },
    {
      title: "Manutenção de exaustores",
      description: "Serviço técnico especializado para garantir eficiência máxima.",
      icon: <IconTool className="w-8 h-8" />,
    },
    {
      title: "Certificado e laudo técnico",
      description: "Documentação completa atestando a qualidade do serviço.",
      icon: <IconCertificate className="w-8 h-8" />,
    },
    {
      title: "Coifas residenciais",
      description: "Soluções personalizadas para sua cozinha doméstica.",
      icon: <IconHome className="w-8 h-8" />,
    },
    {
      title: "Limpeza profissional",
      description: "Higienização com produtos específicos e equipamentos adequados.",
      icon: <IconSpray className="w-8 h-8" />,
    },
    {
      title: "Projeto e dimensionamento",
      description: "Desenvolvimento técnico para sistemas eficientes.",
      icon: <IconRuler className="w-8 h-8" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};