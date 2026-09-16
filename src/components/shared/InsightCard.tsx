import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Insight } from "@/data/insights";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: Insight;
  className?: string;
}

export function InsightCard({ insight, className }: InsightCardProps) {
  return (
    <Link href={`/insights/${insight.id}`} className={cn("group block h-full", className)}>
      <article className="bg-background border border-border rounded-xl p-8 h-full transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground uppercase tracking-widest">
            {insight.category}
          </span>
          <div className="flex items-center text-xs font-medium text-muted-foreground gap-3">
            <span className="flex items-center">
              <Calendar className="mr-1 h-3.5 w-3.5" />
              {insight.date}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-3.5 w-3.5" />
              {insight.readingTime}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-3">
          {insight.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
          {insight.excerpt}
        </p>
        
        <div className="inline-flex items-center text-sm font-medium text-primary mt-auto uppercase tracking-widest">
          Read Article
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
}
