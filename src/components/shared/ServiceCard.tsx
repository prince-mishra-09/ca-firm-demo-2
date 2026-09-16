import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className={cn("group overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20", className)}>
      <CardHeader className="pb-4">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-heading text-primary">{service.title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2 mt-2">
          {service.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="mb-6 space-y-2 text-sm text-foreground/80">
          {service.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center text-sm font-medium text-accent transition-colors hover:text-primary"
        >
          Explore Service
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
