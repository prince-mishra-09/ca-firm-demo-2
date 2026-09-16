import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { ProfessionalProfile } from "@/components/shared/ProfessionalProfile";
import { team } from "@/data/team";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: `Our Team | ${siteConfig.name}`,
  description: `Meet the leadership and professional team at ${siteConfig.name}.`,
};

export default function PartnersPage() {
  const founder = team.find(t => t.group === "founder");
  const leadership = team.filter(t => t.group === "leadership");
  const professionals = team.filter(t => t.group === "team");

  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Professional Directory" 
        description="Our practice is led by seasoned professionals with profound technical expertise and a commitment to delivering strategic, compliance-first advisory."
      />

      {/* Founder Section */}
      {founder && (
        <section className="py-10 md:py-16 lg:py-20 lg:py-28 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title="Founder" 
              subtitle="The driving force behind our firm's commitment to quality and professional excellence."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ProfessionalProfile member={founder} />
            </div>
          </div>
        </section>
      )}

      {/* Leadership Section */}
      <section className="py-10 md:py-16 lg:py-20 lg:py-28 bg-muted/20 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Leadership" 
            subtitle="The partners and leadership team providing expert direction."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {leadership.map((member) => (
              <ProfessionalProfile key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 md:py-16 lg:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Professional Team" 
            subtitle="Our dedicated roster of Chartered Accountants and professional staff."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {professionals.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center p-6 border border-border bg-secondary/20 rounded-sm hover:border-accent transition-colors">
                <div className="w-16 h-16 bg-muted rounded-full mb-4 flex items-center justify-center font-bold text-primary font-heading">
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-bold text-primary mb-1">{member.name}</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Require Specialized Counsel?"
        description="Schedule a confidential discussion with our professionals to explore strategic solutions for your organizational requirements."
      />
    </div>
  );
}
