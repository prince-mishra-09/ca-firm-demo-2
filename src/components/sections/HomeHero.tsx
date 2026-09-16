import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-background overflow-hidden border-b border-border">
      {/* Decorative abstract elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-[linear-gradient(to_bottom_left,var(--color-soft-emerald)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-[linear-gradient(to_top_right,var(--color-warm-ivory)_0%,transparent_50%)]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Content */}
          <div className="max-w-xl">
            <div className="mb-8">
              <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-muted-foreground">
                {siteConfig.name} — Chartered Accountants
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-primary leading-[1.15] mb-6">
              Clarity in numbers.<br />
              <span className="text-muted-foreground">Confidence in decisions.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10">
              {siteConfig.name} provides professional services across taxation, audit, accounting, compliance and business advisory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm md:text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm md:text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
              >
                Contact the Firm
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Right: Visual Composition */}
          <div className="hidden lg:block relative h-[600px] w-full rounded-2xl overflow-hidden bg-secondary border border-border">
            <div className="absolute inset-0 bg-primary/5"></div>
            
            {/* Abstract financial structures (Ledger lines / geometric) */}
            <div className="absolute inset-0 flex flex-col justify-between p-12 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-primary"></div>
              ))}
            </div>
            
            <div className="absolute inset-0 flex justify-end items-end p-12">
               {/* Abstract geometric shapes representing growth/structure */}
               <div className="w-64 h-64 border border-primary/20 rounded-full absolute -right-12 -bottom-12"></div>
               <div className="w-96 h-96 border border-primary/10 rounded-full absolute -right-24 -bottom-24"></div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-white shadow-2xl rounded-lg p-8 flex flex-col gap-6">
               <div className="w-full h-8 bg-muted rounded-md w-1/3"></div>
               <div className="w-full h-px bg-border"></div>
               <div className="flex-1 flex gap-4">
                 <div className="w-1/2 h-full bg-muted rounded-md flex items-end p-4">
                    <div className="w-full h-[60%] bg-primary/20 rounded-sm"></div>
                 </div>
                 <div className="w-1/2 flex flex-col gap-4">
                   <div className="w-full h-12 bg-secondary rounded-md"></div>
                   <div className="w-full h-12 bg-secondary rounded-md"></div>
                   <div className="w-full h-12 bg-secondary rounded-md"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
