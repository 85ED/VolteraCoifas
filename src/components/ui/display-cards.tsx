import React from 'react';

interface Card {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  iconClassName?: string;
  titleClassName?: string;
  className?: string;
}

interface DisplayCardsProps {
  cards: Card[];
}

function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <div className="relative grid min-h-[300px] w-full grid-cols-1 items-center justify-center gap-4">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`group relative grid h-full w-full rounded-xl border border-border bg-background p-4 transition-all duration-700 ${card.className}`}
        >
          <div className="flex items-center gap-2">
            <div className={`rounded-full bg-background/95 p-2 ${card.iconClassName}`}>
              {card.icon}
            </div>
            <h3 className={`font-semibold ${card.titleClassName}`}>{card.title}</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
          <p className="mt-2 text-xs text-muted-foreground">{card.date}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayCards;