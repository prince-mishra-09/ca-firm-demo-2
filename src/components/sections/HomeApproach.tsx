import { ShieldCheck, Workflow, MessageSquare, Lock, Laptop } from "lucide-react";

export function HomeApproach() {
  const principles = [
    {
      title: "Partner-led oversight",
      description: "Direct involvement of senior partners in all critical advisory and audit engagements.",
      icon: ShieldCheck,
    },
    {
      title: "Structured processes",
      description: "Rigorous standard operating procedures ensuring accuracy and timely delivery.",
      icon: Workflow,
    },
    {
      title: "Clear communication",
      description: "Transparent reporting and straightforward explanations of complex regulatory matters.",
      icon: MessageSquare,
    },
    {
      title: "Confidential handling",
      description: "Strict adherence to data security protocols and professional confidentiality standards.",
      icon: Lock,
    },
    {
      title: "Technology-enabled workflow",
      description: "Leveraging secure cloud infrastructure for efficient data exchange and processing.",
      icon: Laptop,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            How we work
          </h2>
          <p className="text-lg text-foreground/80">
            Our operating framework is designed to deliver consistent quality and absolute reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mb-6">
                <principle.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-3">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
