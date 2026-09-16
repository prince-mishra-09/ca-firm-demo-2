import { services } from "@/data/services";
import { ServiceCard } from "@/components/shared/ServiceCard";

export function HomeServices() {
  // Use all 6 services from data/services.ts since they match the prompt's categories
  // (Audit, Tax, GST, Accounting, Corporate, Advisory)
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Professional services, clearly structured.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
