import { PageHero } from "@/components/shared/PageHero";
import { InsightsList } from "@/components/sections/InsightsList";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: `Insights & Perspectives | ${siteConfig.name}`,
  description: `Research, analysis, and professional updates on taxation, audit, and corporate law.`,
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      <PageHero 
        title="Insights & Perspectives" 
        description="Professional analysis of the evolving regulatory landscape, economic trends, and their implications for your business."
      />

      <InsightsList />
    </div>
  );
}
