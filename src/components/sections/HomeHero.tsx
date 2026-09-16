"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  const [bars, setBars] = useState([40, 65, 45, 80, 55, 95, 70, 100]);
  const [taxEfficiency, setTaxEfficiency] = useState(24.5);
  const [blinkOn, setBlinkOn] = useState(true);

  useEffect(() => {
    // Animate the bars and numbers every 2 seconds
    const interval = setInterval(() => {
      setBars(prev => prev.map(val => {
        const shift = Math.floor(Math.random() * 15) - 5; // Tend to go up slightly, but fluctuate
        let next = val + shift;
        if (next > 100) next = 100;
        if (next < 20) next = 20;
        return next;
      }));

      setTaxEfficiency(prev => {
        const shift = (Math.random() * 1.5 - 0.5);
        let next = prev + shift;
        if (next > 35) next = 35;
        if (next < 15) next = 15;
        return Number(next.toFixed(1));
      });
    }, 2000);
    
    // Fast blinker for the status light
    const blinkInterval = setInterval(() => {
      setBlinkOn(b => !b);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
 <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center bg-background overflow-hidden border-b border-border">
 <div className="absolute inset-0 z-0 pointer-events-none bg-background"></div>
 
 <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
 
 {/* Left: Content */}
 <div className="max-w-xl">
 <div className="mb-8">
 <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-muted-foreground">
 {siteConfig.name} — Chartered Accountants
 </span>
 </div>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-primary leading-[1.15] mb-6">
 Practical solutions.<br />
 <span className="text-muted-foreground">Not just paper.</span>
 </h1>
 
 <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10">
 {siteConfig.description}
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <Link
 href="/services"
 className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm md:text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
 >
 Explore Services
 </Link>
 <Link
 href="/contact"
 className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm md:text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
 >
 Contact the Firm
 <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </div>
 </div>
 
        {/* Right: Premium Financial Visual */}
        <div className="hidden lg:block relative h-[600px] w-full rounded-sm overflow-hidden bg-secondary/30 border border-border">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="absolute inset-0 flex items-center justify-center p-12">
            
            {/* Main Financial Dashboard Card */}
            <div className="relative w-full h-[400px] bg-background border border-border shadow-2xl rounded-sm p-8 flex flex-col z-20 overflow-hidden group">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-heading font-bold text-primary text-xl mb-1">Corporate Growth</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">FY 2026-27 Projection</p>
                </div>
                <div className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs font-bold tracking-widest uppercase">
                  Optimized
                </div>
              </div>

              {/* Chart Area */}
              <div className="flex-1 flex items-end justify-between gap-4 border-b border-border pb-4">
                {bars.map((height, i) => (
                  <div key={i} className="w-1/8 w-full group-hover:bg-primary/20 bg-secondary rounded-t-sm transition-all duration-1000 ease-in-out relative group-hover:scale-y-105 origin-bottom" style={{ height: `${height}%`, transitionDelay: `${i * 50}ms` }}>
                    <div className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-1000 ease-in-out ${i === 7 ? 'bg-accent h-full' : 'bg-primary h-[80%]'}`}></div>
                  </div>
                ))}
              </div>

              {/* Footer Stats */}
              <div className="flex justify-between mt-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Compliance Score</p>
                  <p className="font-heading font-bold text-3xl text-primary">100%</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1 transition-colors">Tax Efficiency</p>
                  <p className="font-heading font-bold text-3xl text-accent transition-all duration-500">+{taxEfficiency}%</p>
                </div>
              </div>
            </div>

            {/* Floating Elements for Depth */}
            <div className="absolute top-16 right-8 bg-background border border-border p-4 rounded-sm shadow-xl z-30 animate-pulse" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <div className={`h-3 w-3 rounded-full bg-green-500 transition-opacity duration-300 ${blinkOn ? 'opacity-100' : 'opacity-30 shadow-[0_0_10px_rgba(34,197,94,0.8)]'}`}></div>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</p>
                  <p className="text-sm font-semibold text-primary">Audit Cleared</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 left-4 bg-primary text-primary-foreground p-5 rounded-sm shadow-xl z-30 max-w-[200px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground/70 mb-2">Notice</p>
              <p className="text-sm font-medium leading-tight">Zero regulatory penalties in the last 15 years.</p>
            </div>

          </div>
        </div>
 </div>
 </div>
 </section>
 );
}
