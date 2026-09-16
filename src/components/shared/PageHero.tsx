import { cn } from "@/lib/utils";

interface PageHeroProps {
 title: string;
 description?: string;
 className?: string;
}

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <div className={cn("pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-24 bg-background border-b border-border", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
