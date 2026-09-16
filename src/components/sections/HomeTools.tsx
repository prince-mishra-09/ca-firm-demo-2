import { tools } from "@/data/tools";
import { ToolCard } from "@/components/shared/ToolCard";

export function HomeTools() {
  const displayTools = tools.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Financial & Compliance Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            A curated suite of calculators and resources designed to assist with preliminary financial and tax planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
