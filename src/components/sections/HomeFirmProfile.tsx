import { siteConfig } from "@/data/siteConfig";

export function HomeFirmProfile() {
 return (
 <section className="py-10 md:py-16 lg:py-20 bg-background border-t border-border">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
 
        {/* Left: Professional Visual */}
        <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-sm overflow-hidden bg-secondary border border-border group">
          {/* High-quality architectural photo */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
          
          {/* Subtle overlay gradient to ensure it matches the premium aesthetic without being completely dark */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 border-[8px] border-background/20 z-10 m-4 rounded-sm pointer-events-none"></div>
          
          {/* Accent Box */}
          <div className="absolute bottom-8 left-8 bg-background p-6 border border-border shadow-2xl max-w-[250px] z-20">
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Global Standards</p>
            <p className="font-heading font-semibold text-primary leading-tight">Delivering strategic advisory with absolute precision.</p>
          </div>
        </div>

 {/* Right: Firm Profile Content */}
 <div className="order-1 lg:order-2">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
 Built on professional discipline.
 </h2>
 <div className="space-y-6 text-foreground/80 text-lg leading-relaxed mb-12">
 <p>
 {siteConfig.fullName} was founded by CA Vishnu Agrawal, leveraging over 25 years of professional experience. With our Head Office in Noida, the firm operates with a network of offices and associates across India and overseas.
 </p>
 <p>
 Our engagement methodology is centered on the "Client First" approach. We believe in providing accurate, practical solutions that work in reality, not just making things look good on paper.
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
