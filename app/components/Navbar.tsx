"use client";

import { Button } from "@/components/ui/button";
import { Search, Bell, Wallet, User, Star, BarChart2 } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="relative h-7 w-7">
                <div className="bg-white rounded-md h-full w-full"></div>
              </div>
              <span className="font-semibold text-sm">AXIOM Pro</span>
            </div>
            <div className="flex items-center gap-6">
              <Star className="h-4 w-4 text-muted-foreground" />
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Wallet className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-1 px-2">
              <span className="text-muted-foreground text-sm">≈ 0</span>
              <span className="text-muted-foreground text-sm">₳ 0</span>
            </div>
            <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600 h-8 px-4 text-sm">
              Deposit
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}