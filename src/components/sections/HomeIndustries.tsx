import { industries } from "@/data/industries";
import { ChevronRight } from "lucide-react";

export function HomeIndustries() {
  const displayIndustries = industries.slice(0, 6);

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-muted/40 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-primary mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground">
            Extensive domain expertise across diverse sectors, delivering specialized compliance and growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayIndustries.map((industry, index) => (
            <div key={index} className="flex items-center gap-3 p-4 border border-border bg-background rounded-sm hover:border-accent transition-colors">
              <ChevronRight className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-medium text-primary">{industry}</span>
            </div>
          ))}
          <div className="flex items-center gap-3 p-4 border border-border/50 bg-secondary/50 rounded-sm hover:border-accent transition-colors justify-center cursor-pointer group">
            <span className="text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">View All Sectors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
