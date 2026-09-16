import { siteConfig } from "@/data/siteConfig";
import { team } from "@/data/team";
import { ProfessionalProfile } from "@/components/shared/ProfessionalProfile";
import { CTASection } from "@/components/sections/CTASection";
import { ShieldCheck, Crosshair, Lock, Workflow, Laptop, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: `Firm Profile | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, our professional philosophy, and our approach to delivering premium advisory services.`,
};

export default function AboutPage() {
  const approaches = [
    {
      title: "Accuracy",
      description: "Rigorous attention to detail and exhaustive verification processes in all financial analyses and statutory filings.",
      icon: Crosshair,
    },
    {
      title: "Professional Discipline",
      description: "Adherence to the highest ethical frameworks and professional standards established by regulatory bodies.",
      icon: ShieldCheck,
    },
    {
      title: "Confidentiality",
      description: "Absolute discretion and secure handling of sensitive corporate and personal financial information.",
      icon: Lock,
    },
    {
      title: "Structured Processes",
      description: "Systematic methodologies that ensure consistent, high-quality deliverables across all engagements.",
      icon: Workflow,
    },
    {
      title: "Technology",
      description: "Utilization of advanced, secure software infrastructure for efficient data processing and communication.",
      icon: Laptop,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 block">
              ABOUT THE FIRM
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-8">
              Professional expertise, grounded in clarity.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              {siteConfig.name} is a premier firm of Chartered Accountants dedicated to providing bespoke financial, tax, and regulatory advisory services to modern enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Firm Story & 3. Firm Credentials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Firm Story */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 border-b border-border pb-4">
                Our Narrative
              </h2>
              <div className="prose prose-lg text-foreground/80 max-w-none">
                <p>
                  Established in {siteConfig.establishedYear}, {siteConfig.name} was founded on a singular premise: that complex financial and regulatory environments demand more than routine compliance. They require strategic foresight, deep institutional knowledge, and an unwavering commitment to quality.
                </p>
                <p>
                  Our professional philosophy is rooted in the belief that robust financial architecture acts as a catalyst for sustainable growth. We approach every engagement with a conservative, research-backed methodology, ensuring that our advisory is strictly aligned with current statutory frameworks.
                </p>
                <p>
                  Today, our areas of practice encompass complex corporate taxation, statutory and investigative audits, cross-border transactions, and comprehensive business advisory.
                </p>
                <p>
                  Our current structure leverages a partner-led execution model, ensuring that senior expertise is directly involved in critical advisory phases, providing our clients with absolute reliability and confidence.
                </p>
              </div>
            </div>

            {/* Firm Credentials */}
            <div className="lg:col-span-5">
              <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-heading font-bold text-primary mb-6">
                  Factual Credentials
                </h3>
                <dl className="divide-y divide-border">
                  <div className="py-4 flex justify-between gap-4">
                    <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Firm Name</dt>
                    <dd className="text-sm font-semibold text-primary text-right">{siteConfig.name}</dd>
                  </div>
                  <div className="py-4 flex justify-between gap-4">
                    <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider">FRN</dt>
                    <dd className="text-sm font-semibold text-primary text-right">{siteConfig.frn}</dd>
                  </div>
                  <div className="py-4 flex justify-between gap-4">
                    <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Established</dt>
                    <dd className="text-sm font-semibold text-primary text-right">{siteConfig.establishedYear}</dd>
                  </div>
                  <div className="py-4 flex justify-between gap-4">
                    <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Office</dt>
                    <dd className="text-sm font-semibold text-primary text-right">{siteConfig.contact.address.split(',')[1]?.trim() || "India"}</dd>
                  </div>
                  <div className="py-4 flex justify-between gap-4">
                    <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Partners</dt>
                    <dd className="text-sm font-semibold text-primary text-right">{team.length}</dd>
                  </div>
                  <div className="py-4 flex justify-between gap-4">
                    <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Peer Review Status</dt>
                    <dd className="text-sm font-semibold text-primary text-right">[Status Placeholder]</dd>
                  </div>
                  <div className="py-4 flex justify-between gap-4">
                    <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider">AQMM Status</dt>
                    <dd className="text-sm font-semibold text-primary text-right">[Status Placeholder]</dd>
                  </div>
                </dl>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Professional Approach */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Professional Approach
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our firm operates strictly within defined methodologies that guarantee consistency, security, and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-8 rounded-xl border border-border">
                <item.icon className="h-8 w-8 text-accent mb-6" />
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Partners */}
      <section className="py-24 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Leadership
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The partners at {siteConfig.name} bring deep technical competence and decades of practical experience across specialized domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((partner) => (
              <div key={partner.id} className="bg-background border border-border rounded-xl overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-md transition-shadow">
                <div className="sm:w-2/5 relative bg-secondary aspect-[3/4] sm:aspect-auto">
                  <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                    <span className="text-muted-foreground font-medium uppercase tracking-widest text-xs opacity-50 px-4 text-center">Passport Portrait Placeholder</span>
                  </div>
                  {/* Subtle placeholder image */}
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10 grayscale"></div>
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-1">{partner.name}</h3>
                  <p className="text-accent font-medium mb-6">{partner.role}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Qualifications</span>
                      <span className="text-sm text-foreground">{partner.qualifications}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Membership</span>
                      <span className="text-sm text-foreground">[Membership No. Placeholder]</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">Area of Experience</span>
                      <span className="text-sm text-foreground">Taxation, Audit & Corporate Advisory</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {partner.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Team Structure */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Professional Team
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our firm is supported by a robust hierarchy of qualified professionals, ensuring adequate resourcing for complex engagements.
            </p>
          </div>
          
          <div className="bg-secondary/30 border border-border rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-heading font-bold text-primary mb-2">[X]</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Partners</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-heading font-bold text-primary mb-2">[X]</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Qualified CAs</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-heading font-bold text-primary mb-2">[X]</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Article Assistants</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-3xl font-heading font-bold text-primary mb-2">[X]</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Support Staff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Office */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
                Corporate Office
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary mb-2">Address</h3>
                    <address className="not-italic text-foreground/80 leading-relaxed">
                      {siteConfig.contact.address.split(',').map((line, i) => (
                        <span key={i} className="block">{line.trim()}{i < siteConfig.contact.address.split(',').length - 1 ? ',' : ''}</span>
                      ))}
                    </address>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <h3 className="text-lg font-heading font-bold text-primary mb-2">Working Hours</h3>
                    <div className="space-y-2 text-foreground/80">
                      <div className="flex justify-between w-64 border-b border-border pb-2">
                        <span>Monday – Friday</span>
                        <span className="font-medium">09:30 AM – 06:30 PM</span>
                      </div>
                      <div className="flex justify-between w-64 border-b border-border pb-2">
                        <span>Saturday</span>
                        <span className="font-medium text-muted-foreground">By Appointment</span>
                      </div>
                      <div className="flex justify-between w-64">
                        <span>Sunday</span>
                        <span className="font-medium text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary border border-border rounded-xl min-h-[400px] flex items-center justify-center">
              <span className="text-muted-foreground font-medium uppercase tracking-widest text-sm opacity-50 px-4 text-center">Interactive Map Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Contact Section */}
      <CTASection 
        title="Require Specialized Counsel?"
        description="Our partners are available for a confidential consultation regarding your organization's specific financial and regulatory requirements."
        primaryActionLabel="Contact the Firm"
        primaryActionHref="/contact"
      />
    </div>
  );
}
