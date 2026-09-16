import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { ProfessionalProfile } from "@/components/shared/ProfessionalProfile";
import { team } from "@/data/team";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: `Our Partners | ${siteConfig.name}`,
  description: `Meet the leadership team at ${siteConfig.name}. Our partners bring decades of institutional expertise across taxation, audit, and corporate law.`,
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Leadership Team" 
        description="Our practice is led by seasoned professionals with profound technical expertise and a commitment to delivering strategic, compliance-first advisory."
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Partners" 
            subtitle="The driving force behind our firm's commitment to quality and professional excellence."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {team.map((member) => (
              <ProfessionalProfile key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Require Specialized Counsel?"
        description="Schedule a confidential discussion with one of our partners to explore strategic solutions for your organizational requirements."
      />
    </div>
  );
}
