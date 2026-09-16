"use client";

import { useState } from "react";
import { Insight, InsightCategory, insights } from "@/data/insights";
import { InsightCard } from "@/components/shared/InsightCard";
import { cn } from "@/lib/utils";

const categories: ("All" | InsightCategory)[] = ["All", "Tax", "GST", "Audit", "Compliance", "Business"];

export function InsightsList() {
 const [activeCategory, setActiveCategory] = useState<"All" | InsightCategory>("All");

 const filteredInsights = activeCategory === "All" 
 ? insights 
 : insights.filter(insight => insight.category === activeCategory);

 return (
 <section className="py-10 md:py-16 lg:py-20 lg:py-32 bg-background">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Filters */}
 <div className="flex flex-wrap items-center gap-3 mb-16 border-b border-border pb-8">
 {categories.map((category) => (
 <button
 key={category}
 onClick={() => setActiveCategory(category)}
 className={cn(
 "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
 activeCategory === category
 ? "bg-primary text-primary-foreground border-primary "
 : "bg-transparent text-muted-foreground border-border hover:border-primary/30 hover:text-primary"
 )}
 >
 {category}
 </button>
 ))}
 </div>

 {/* Article Grid */}
 {filteredInsights.length > 0 ? (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredInsights.map((insight) => (
 <InsightCard key={insight.id} insight={insight} />
 ))}
 </div>
 ) : (
 <div className="py-12 md:py-20 text-center border border-dashed border-border rounded-sm">
 <h3 className="text-xl font-heading font-semibold text-primary mb-2">No articles found</h3>
 <p className="text-muted-foreground">There are currently no articles published in this category.</p>
 </div>
 )}
 </div>
 </section>
 );
}
