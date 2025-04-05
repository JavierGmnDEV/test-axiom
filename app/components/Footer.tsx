"use client";

import { Bitcoin, Wallet, Bell, Link, Twitter, Disc as Discord, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-10 items-center justify-between">
          <div className="flex items-center gap-3 text-xs">
            <span className="text-blue-400">≡ PRESET 1</span>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Wallet className="h-3 w-3" />
              </Button>
              <span>1</span>
              <span className="text-muted-foreground">0</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Twitter className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Bell className="h-3 w-3" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <Bitcoin className="h-3 w-3" />
              <span>$83.8K</span>
              <span className="text-muted-foreground">$1,812</span>
            </div>
            <div className="flex items-center gap-2">
              <span>≡</span>
              <span>$120.83</span>
            </div>
            <div className="flex items-center gap-2">
              <Link className="h-3 w-3" />
              <span>$48.9K</span>
            </div>
            <div className="flex items-center gap-2">
              <span>₳</span>
              <span>0.0₿26</span>
            </div>
            <div className="flex items-center gap-2">
              <span>◎</span>
              <span>0.0₿68</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-green-500">Connection is stable</span>
            </div>
            <select name="select zone" className="bg-transparent border-none text-xs outline-none">
              <option>US-C</option>
            </select>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Bell className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Discord className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}