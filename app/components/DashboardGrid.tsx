"use client";

import { useState, useEffect } from 'react';
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { DraggableCard } from './DraggableCard';
import { CardData } from '../types/card';

const initialCards: CardData[] = [
  {
    id: '1',
    title: 'DARK',
    subtitle: 'Dark Eclipse',
    marketCap: '$4.18M',
    liquidity: '$128K',
    volume: '$399K',
    transactions: '2.48K',
    percentageChange: '13.66',
  },
  {
    id: '2',
    title: 'KvK',
    subtitle: 'Kanto vs Kansai',
    marketCap: '$1.08M',
    liquidity: '$53.9K',
    volume: '$1.58M',
    transactions: '14.3K',
    percentageChange: '15.87',
  },
  // Add more cards as needed
];

export function DashboardGrid() {
  const [cards, setCards] = useState<CardData[]>(() => {
    // Try to load from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dashboardCards');
      return saved ? JSON.parse(saved) : initialCards;
    }
    return initialCards;
  });

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    })
  );

  useEffect(() => {
    // Save to localStorage whenever cards change
    localStorage.setItem('dashboardCards', JSON.stringify(cards));
  }, [cards]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="p-4">
        <SortableContext items={cards} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cards.map((card) => (
              <DraggableCard key={card.id} card={card} />
            ))}
          </div>
        </SortableContext>
      </div>
    </DndContext>
  );
}