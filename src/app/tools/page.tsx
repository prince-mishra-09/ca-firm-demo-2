import { PageHero } from "@/components/shared/PageHero";
import { ToolCard } from "@/components/shared/ToolCard";
import { tools } from "@/data/tools";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: `Tools & Calculators | ${siteConfig.name}`,
  description: `Access our suite of financial tools and calculators for tax estimation, EMI calculation, and GST computation.`,
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Financial Tools" 
        description="A curated suite of calculators and resources designed to assist with preliminary financial and tax planning."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          <div className="mt-16 p-6 bg-muted rounded-xl border border-border text-center max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground">
              <strong>Please Note:</strong> These calculators provide estimates based on current standard rates and should not be construed as definitive professional advice. For accurate computations tailored to your specific financial situation, please consult our advisory team.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
