import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { team } from "@/data/team";

export function HomePartners() {
  // Use first 3 partners
  const displayPartners = team.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              Our partners bring decades of institutional expertise across taxation, audit, and corporate law.
            </p>
          </div>
          <Link 
            href="/partners" 
            className="hidden md:inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            View all partners
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPartners.map((partner, index) => (
            <div key={index} className="bg-background rounded-xl overflow-hidden border border-border group transition-all hover:shadow-md">
              <div className="aspect-[4/5] bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                   {/* Placeholder for portrait */}
                   <span className="text-muted-foreground font-medium uppercase tracking-widest text-sm opacity-50">Portrait</span>
                </div>
                {/* Fallback image placeholder effect */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20 grayscale transition-opacity group-hover:opacity-40"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-1">{partner.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{partner.role}</p>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <div className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                    {partner.qualifications}
                  </div>
                  {partner.linkedinUrl && (
                    <a href={partner.linkedinUrl} className="text-muted-foreground hover:text-primary transition-colors">
                      <Globe className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Link 
            href="/partners" 
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent w-full"
          >
            View all partners
          </Link>
        </div>
      </div>
    </section>
  );
}
