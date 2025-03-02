"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "../../lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Nossos Clientes",
  logos = [
    {
      id: "logo-1",
      description: "Volkswagen",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/logo-volkswagen-2048.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-2",
      description: "Scania",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/logo-scania-icon-1024.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-3",
      description: "Hyundai",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/hyundai-logo-0.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-4",
      description: "Ford",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/ford-logo-png_seeklogo-56584.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-5",
      description: "Carrefour",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/carrefour-logo-1-1.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-6",
      description: "C&A",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/c-e-a-logo-1.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-7",
      description: "Marisa",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/Logo-marisa.svg.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "Extra",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/Extra_logo_2005.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-9",
      description: "Record",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/Logotipo_da_Rede_Record.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-10",
      description: "NGK",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/NGK.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-11",
      description: "Nitto",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/Nitto_Denko-Logo.wine.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-12",
      description: "BASF",
      image: "https://raw.githubusercontent.com/85ED/VolteraCoifas/main/imagens%20/BASF-Logo_bw.svg.png",
      className: "h-12 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="mb-12 text-3xl font-bold text-gray-800 dark:text-white">
          {heading}
        </h2>
      </div>
      <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 0.5 })]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="mx-4 flex shrink-0 items-center justify-center">
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={cn("object-contain", logo.className)}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent"></div>
      </div>
    </section>
  );
};

export { Logos3 };