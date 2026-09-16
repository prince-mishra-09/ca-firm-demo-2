import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";
import { InsightCard } from "@/components/shared/InsightCard";

export function HomeInsights() {
 const displayInsights = insights.slice(0, 3);

 return (
 <section className="py-10 md:py-16 lg:py-20 bg-background">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
 <div className="max-w-2xl">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
 Professional Insights
 </h2>
 <p className="text-lg text-muted-foreground">
 Analysis on the evolving regulatory landscape and its implications for corporate taxpayers.
 </p>
 </div>
 <Link 
 href="/insights" 
 className="hidden md:inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
 >
 View all insights
 <ArrowRight className="ml-1 h-4 w-4" />
 </Link>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {displayInsights.map((insight) => (
 <InsightCard key={insight.id} insight={insight} />
 ))}
 </div>

 <div className="mt-10 flex justify-center md:hidden">
 <Link 
 href="/insights" 
 className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent w-full"
 >
 View all insights
 </Link>
 </div>
 </div>
 </section>
 );
}
