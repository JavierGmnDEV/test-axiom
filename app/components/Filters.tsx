"use client";

import { Button } from "@/components/ui/button";
import { Settings, Filter, ChevronDown } from "lucide-react";

export function Filters() {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">DEX Screener</h2>
          <span className="text-muted-foreground text-sm">Trending</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <button className="text-muted-foreground hover:text-foreground px-1">5m</button>
          <button className="text-blue-400 px-1">1h</button>
          <button className="text-muted-foreground hover:text-foreground px-1">6h</button>
          <button className="text-muted-foreground hover:text-foreground px-1">24h</button>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" className="h-8 bg-secondary/50 hover:bg-secondary/70 text-sm gap-2">
            <Filter className="h-4 w-4" />
            Filter
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-1 px-2 text-sm">
            <span className="text-muted-foreground">1</span>
            <span className="text-muted-foreground">0</span>
          </div>
          <Button variant="secondary" size="sm" className="h-8 bg-secondary/50 hover:bg-secondary/70 text-sm">
            Quick Buy
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-muted-foreground text-sm">
            Amount
          </Button>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-sm">≡</span>
            <span className="text-sm">P1</span>
          </div>
        </div>
      </div>
    </div>
  );
}