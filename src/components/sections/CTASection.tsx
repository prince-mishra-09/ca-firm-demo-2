import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryActionLabel?: string;
  primaryActionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  className?: string;
}

export function CTASection({
  title = "Ready to discuss your financial requirements?",
  description = "Schedule a consultation with our partners to explore how our bespoke advisory services can support your organizational objectives.",
  primaryActionLabel = "Contact Us",
  primaryActionHref = "/contact",
  secondaryActionLabel = "Our Services",
  secondaryActionHref = "/services",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-20 md:py-28 bg-primary text-primary-foreground", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight text-white">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href={primaryActionHref}
              className="inline-flex h-12 md:h-14 items-center justify-center rounded-md bg-white px-8 text-base font-medium text-primary shadow transition-colors hover:bg-gray-100"
            >
              {primaryActionLabel}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            {secondaryActionLabel && secondaryActionHref && (
              <Link
                href={secondaryActionHref}
                className="inline-flex h-12 md:h-14 items-center justify-center rounded-md border border-primary-foreground/20 bg-transparent px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-primary-foreground/10"
              >
                {secondaryActionLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
