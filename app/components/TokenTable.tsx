"use client";

import { useState, useEffect } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { TokenRow } from './TokenRow';
import { Token } from '../types/token';

const LOCAL_STORAGE_KEY = 'tokenTableOrder';

const initialTokens: Token[] = [
  {
    id: '1',
    icon: '/dark-eclipse.png',
    name: 'DARK',
    fullName: 'Dark Eclipse',
    time: '12h',
    marketCap: '$4.18M',
    marketCapChange: '+14.94%',
    liquidity: '$128K',
    volume: '$399K',
    txns: {
      total: '2.48K',
      buys: '1.31K',
      sells: '1.17K'
    },
    status: 'paid',
    priceChange: '13.66'
  },
  {
    id: '2',
    icon: '/kvk.png',
    name: 'KvK',
    fullName: 'Kanto vs Kansai',
    time: '2h',
    marketCap: '$1.08M',
    marketCapChange: '+700%',
    liquidity: '$53.9K',
    volume: '$1.58M',
    txns: {
      total: '14.3K',
      buys: '7.23K',
      sells: '7.04K'
    },
    status: 'paid',
    priceChange: '15.87'
  },
  {
    id: '3',
    icon: '/401k.png',
    name: '401K',
    fullName: '401K',
    time: '26d',
    marketCap: '$1.47M',
    marketCapChange: '+25.1%',
    liquidity: '$75.2K',
    volume: '$517K',
    txns: {
      total: '3.33K',
      buys: '1.74K',
      sells: '1.59K'
    },
    status: 'paid',
    priceChange: '99.98'
  },
  {
    id: '4',
    icon: '/bounce.png',
    name: 'BOUNCE',
    fullName: 'Generational',
    time: '6h',
    marketCap: '$315K',
    marketCapChange: '-26.9%',
    liquidity: '$278K',
    volume: '$223K',
    txns: {
      total: '2.13K',
      buys: '1.24K',
      sells: '891'
    },
    status: 'paid',
    priceChange: '19.43'
  },
  {
    id: '5',
    icon: '/tgd.png',
    name: 'TGD',
    fullName: 'The Great Decou',
    time: '6h',
    marketCap: '$977K',
    marketCapChange: '-51.3%',
    liquidity: '$18K',
    volume: '$174K',
    txns: {
      total: '2.24K',
      buys: '1.3K',
      sells: '936'
    },
    status: 'paid',
    priceChange: '16.96'
  }
];

export function TokenTable() {
  const [tokens, setTokens] = useState<Token[]>([]);

  // Cargar desde localStorage al montar
  useEffect(() => {
    try {
      const savedOrder = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedOrder) {
        const parsed = JSON.parse(savedOrder);
        setTokens(parsed);
      } else {
        setTokens(initialTokens);
      }
    } catch (error) {
      console.error('Error loading saved order:', error);
      setTokens(initialTokens);
    }
  }, []);

  // Guardar en localStorage cuando cambia el orden
  useEffect(() => {
    if (tokens.length > 0) {
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tokens));
      } catch (error) {
        console.error('Error saving order:', error);
      }
    }
  }, [tokens]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTokens((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full overflow-x-auto bg-background rounded-lg border border-border">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border text-sm">
            <th className="text-left p-4 text-muted-foreground font-medium">Pair Info</th>
            <th className="text-right p-4 text-muted-foreground font-medium">Market Cap</th>
            <th className="text-right p-4 text-muted-foreground font-medium">Liquidity</th>
            <th className="text-right p-4 text-muted-foreground font-medium">Volume</th>
            <th className="text-right p-4 text-muted-foreground font-medium">TXNS</th>
            <th className="text-right p-4 text-muted-foreground font-medium">Audit Log</th>
            <th className="text-right p-4 text-muted-foreground font-medium">Action</th>
          </tr>
        </thead>
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
          <SortableContext items={tokens} strategy={verticalListSortingStrategy}>
            <tbody>
              {tokens.map((token) => (
                <TokenRow key={token.id} token={token} />
              ))}
            </tbody>
          </SortableContext>
        </DndContext>
      </table>
    </div>
  );
}