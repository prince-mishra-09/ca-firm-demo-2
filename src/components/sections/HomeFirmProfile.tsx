import { siteConfig } from "@/data/siteConfig";

export function HomeFirmProfile() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Professional Visual */}
          <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary border border-border">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577415124269-3187caef8e24?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-20 grayscale"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 to-primary/40"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-8">
               <div className="border border-white/20 p-8 md:p-12 backdrop-blur-sm rounded-xl">
                 <h3 className="text-3xl md:text-4xl font-heading font-bold text-white text-center tracking-tight leading-tight">
                   Excellence in <br /> Advisory.
                 </h3>
               </div>
            </div>
          </div>

          {/* Right: Firm Profile Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Built on professional discipline.
            </h2>
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed mb-12">
              <p>
                {siteConfig.name} operates with a singular focus on delivering high-quality, compliance-driven advisory services. We believe that robust financial architecture is not just a regulatory requirement, but a strategic advantage.
              </p>
              <p>
                Our engagement methodology is conservative, research-backed, and strictly aligned with current statutory frameworks, ensuring absolute reliability for our clients.
              </p>
            </div>
            
            {/* Factual Metadata */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-border pt-8">
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-1">Established</div>
                <div className="text-xl font-heading font-bold text-primary">{siteConfig.establishedYear}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-1">FRN</div>
                <div className="text-xl font-heading font-bold text-primary">{siteConfig.frn}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-1">Location</div>
                <div className="text-xl font-heading font-bold text-primary">{siteConfig.contact.address.split(',')[1]?.trim() || "India"}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-1">Leadership</div>
                <div className="text-xl font-heading font-bold text-primary">Partner-led</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
