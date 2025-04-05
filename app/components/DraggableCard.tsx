"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "@/components/ui/card";
import { CardData } from "../types/card";

interface DraggableCardProps {
  card: CardData;
}

export function DraggableCard({ card }: DraggableCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`${
        card.orientation === 'vertical' ? 'h-full' : 'w-full'
      } transition-all duration-200`}
    >
      <Card className={`
        p-4 h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
        border-2 hover:border-primary cursor-move
        ${isDragging ? 'border-primary shadow-lg' : 'border-border'}
      `}>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          {card.subtitle && (
            <span className="text-sm text-muted-foreground">{card.subtitle}</span>
          )}
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {card.marketCap && (
            <div>
              <p className="text-sm text-muted-foreground">Market Cap</p>
              <p className="font-medium">{card.marketCap}</p>
            </div>
          )}
          
          {card.liquidity && (
            <div>
              <p className="text-sm text-muted-foreground">Liquidity</p>
              <p className="font-medium">{card.liquidity}</p>
            </div>
          )}
          
          {card.volume && (
            <div>
              <p className="text-sm text-muted-foreground">Volume</p>
              <p className="font-medium">{card.volume}</p>
            </div>
          )}
          
          {card.transactions && (
            <div>
              <p className="text-sm text-muted-foreground">Transactions</p>
              <p className="font-medium">{card.transactions}</p>
            </div>
          )}
          
          {card.percentageChange && (
            <div className="col-span-2">
              <p className={`font-medium ${
                parseFloat(card.percentageChange) >= 0 
                  ? 'text-green-500' 
                  : 'text-red-500'
              }`}>
                {card.percentageChange}%
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}