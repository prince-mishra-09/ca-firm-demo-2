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
      <article className="border-t border-border py-8 h-full transition-colors hover:border-accent flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            {insight.category}
          </span>
          <div className="flex items-center text-xs font-medium text-muted-foreground gap-4">
            <span className="flex items-center">
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              {insight.date}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1.5 h-3.5 w-3.5" />
              {insight.readingTime}
            </span>
          </div>
        </div>
        
        <h3 className="text-2xl font-heading font-semibold text-primary mb-4 group-hover:text-accent transition-colors tracking-tight line-clamp-3">
          {insight.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {insight.excerpt}
        </p>
        
        <div className="inline-flex items-center text-xs font-bold text-primary mt-auto uppercase tracking-widest transition-colors group-hover:text-accent">
          Read Article
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
}
