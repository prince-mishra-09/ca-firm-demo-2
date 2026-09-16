import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className={cn("group flex flex-col border-b border-border/50 py-8 transition-colors hover:border-accent", className)}>
      <div className="flex items-start gap-6">
        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-heading font-semibold tracking-tight text-primary mb-3">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {service.shortDescription}
          </p>
          <ul className="mb-8 space-y-2.5 text-sm text-foreground/80">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Link
              href={`/services/${service.id}`}
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent transition-colors hover:text-primary"
            >
              Explore Service
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
