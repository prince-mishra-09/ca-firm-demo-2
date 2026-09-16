import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <div className={cn("bg-primary text-primary-foreground py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 text-white">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
