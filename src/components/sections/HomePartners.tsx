import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { team } from "@/data/team";

export function HomePartners() {
  const displayPartners = team.filter(t => t.group === "founder" || t.group === "leadership").slice(0, 3);

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-primary mb-4">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              Led by industry veterans providing accurate, practical solutions across audit, taxation, and international business.
            </p>
          </div>
          <Link 
            href="/partners" 
            className="hidden md:inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
          >
            View Professional Roster
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPartners.map((partner, index) => (
            <div key={index} className="bg-background rounded-sm overflow-hidden border-t border-border group transition-all hover:border-accent">
              <div className="aspect-[4/5] bg-secondary relative overflow-hidden">
                {partner.imageUrl ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${partner.imageUrl}')` }}
                  ></div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                      <span className="text-muted-foreground font-medium uppercase tracking-widest text-sm opacity-50">Portrait</span>
                    </div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20 grayscale transition-opacity group-hover:opacity-40"></div>
                  </>
                )}
              </div>
              <div className="pt-6 pb-2">
                <h3 className="text-xl font-heading font-bold text-primary mb-1">{partner.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{partner.role}</p>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
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
            className="inline-flex h-12 items-center justify-center rounded-sm border border-input bg-background px-8 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent w-full"
          >
            View Professional Roster
          </Link>
        </div>
      </div>
    </section>
  );
}
