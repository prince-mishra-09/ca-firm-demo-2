import { services } from "@/data/services";
import { ServiceCard } from "@/components/shared/ServiceCard";

export function HomeServices() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-muted/40 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-primary">
            Professional services, clearly structured.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
