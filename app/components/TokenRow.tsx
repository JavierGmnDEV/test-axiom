"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Token } from "../types/token";
import { Button } from "@/components/ui/button";
import { Globe, ArrowUpRight, Search } from "lucide-react";

interface TokenRowProps {
  token: Token;
}

export function TokenRow({ token }: TokenRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: token.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`border-b border-border hover:bg-secondary/50 cursor-move ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-secondary rounded-full overflow-hidden">
            {/* Token icon placeholder */}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">{token.name}</span>
              <span className="text-muted-foreground">{token.fullName}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{token.time}</span>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <ArrowUpRight className="w-4 h-4" />
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="p-4 text-right">
        <div>
          <div>{token.marketCap}</div>
          <div className={token.marketCapChange.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
            {token.marketCapChange}
          </div>
        </div>
      </td>
      <td className="p-4 text-right">{token.liquidity}</td>
      <td className="p-4 text-right">{token.volume}</td>
      <td className="p-4 text-right">
        <div>
          <div>{token.txns.total}</div>
          <div className="text-sm text-muted-foreground">
            {token.txns.buys} / {token.txns.sells}
          </div>
        </div>
      </td>
      <td className="p-4 text-right">
        <div>
          <div className={token.priceChange.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
            {token.priceChange}%
          </div>
          <div className="flex items-center justify-end gap-1 text-sm">
            <span className="text-emerald-500">↑ 100%</span>
            {token.status === 'paid' && (
              <span className="text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full text-xs">
                Paid
              </span>
            )}
          </div>
        </div>
      </td>
      <td className="p-4 text-right">
        <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">
          Buy
        </Button>
      </td>
    </tr>
  );
}