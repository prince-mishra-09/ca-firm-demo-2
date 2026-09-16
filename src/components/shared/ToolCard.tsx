import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Tool } from "@/data/tools";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export function ToolCard({ tool, className }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <Card className={cn("group transition-all duration-300 hover:shadow-md hover:border-primary/20", className)}>
      <CardHeader>
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-xl font-heading text-primary">{tool.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 mb-6 text-sm leading-relaxed">
          {tool.description}
        </CardDescription>
        <Link
          href={tool.href}
          className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-primary"
        >
          Open Tool
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
