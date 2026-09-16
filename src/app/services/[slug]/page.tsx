import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.shortDescription,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = services.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Get 3 related services (just the next 3 in the array, wrapping around)
  const currentIndex = services.findIndex((s) => s.id === service.id);
  const relatedServices = [
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
    services[(currentIndex + 3) % services.length],
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Breadcrumb */}
      <div className="bg-background pt-8 pb-4 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm text-muted-foreground font-medium" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 mx-1" />
                  <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 mx-1" />
                  <span className="text-primary">{service.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      {/* 2. Page Hero */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 block">
              PROFESSIONAL SERVICE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-8">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl border-l-4 border-accent pl-6">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Service Overview & 4. Scope of Support */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Overview */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 border-b border-border pb-4">
                Service Overview
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">What it is</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">{service.overview.what}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Who it applies to</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">{service.overview.who}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Why it matters</h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">{service.overview.why}</p>
                </div>
              </div>
            </div>

            {/* Scope */}
            <div className="lg:col-span-5">
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-primary mb-6">
                  Scope of Support
                </h3>
                <ul className="space-y-5">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mr-4 mt-0.5" />
                      <span className="text-base font-medium text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Typical Engagement Flow & 6. Who This Is Relevant For */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Engagement Flow */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-10 border-b border-border pb-4">
                Typical Engagement Flow
              </h2>
              <div className="space-y-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-heading font-bold text-sm shrink-0 border border-border">
                        0{index + 1}
                      </div>
                      {index < service.process.length - 1 && (
                        <div className="w-px h-full bg-border mt-4"></div>
                      )}
                    </div>
                    <div className="pt-1 pb-4">
                      <h3 className="text-lg font-heading font-bold text-primary mb-2">{step.phase}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant For */}
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-10 border-b border-border pb-4">
                Who This Is Relevant For
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.relevantFor.map((audience, index) => (
                  <div key={index} className="bg-muted/50 border border-border rounded-lg p-6 flex items-center">
                    <div className="h-2 w-2 rounded-full bg-accent mr-4 shrink-0"></div>
                    <span className="text-lg font-medium text-primary">{audience}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-secondary/30 border border-border rounded-xl">
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  Note: The applicability of statutory requirements varies significantly based on organizational structure, turnover thresholds, and industry-specific regulations. We recommend a preliminary consultation to determine your exact obligations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Practical insights regarding our {service.title.toLowerCase()} engagements.
              </p>
            </div>
            
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-primary mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-12">
            Related Advisory Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rs) => {
              const Icon = rs.icon;
              return (
                <Link key={rs.id} href={`/services/${rs.id}`} className="group block h-full">
                  <div className="bg-background border border-border rounded-xl p-8 h-full transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col">
                    <div className="mb-6 h-12 w-12 rounded-lg bg-secondary flex items-center justify-center border border-border">
                      <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {rs.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {rs.shortDescription}
                    </p>
                    <div className="inline-flex items-center text-sm font-medium text-primary mt-auto">
                      Explore Service
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Contact */}
      <section className="py-24 bg-primary text-primary-foreground border-t border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-white leading-tight">
              Discuss your requirement with the firm.
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Our partners are available for a confidential consultation regarding your specific {service.title.toLowerCase()} requirements and regulatory obligations.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-md bg-white px-10 text-lg font-medium text-primary shadow transition-colors hover:bg-white/90"
            >
              Contact the Firm
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
