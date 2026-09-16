import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tool } from "@/data/tools";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export function ToolCard({ tool, className }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <div className={cn("group flex flex-col border-t border-border py-8 transition-colors hover:border-accent", className)}>
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-sm bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-heading font-semibold text-primary tracking-tight mb-3">
        {tool.title}
      </h3>
      <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
        {tool.description}
      </p>
      <Link
        href={tool.href}
        className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent transition-colors hover:text-primary"
      >
        Open Tool
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
