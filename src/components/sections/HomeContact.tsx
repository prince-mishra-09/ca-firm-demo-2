import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/shared/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export function HomeContact() {
 return (
 <section className="py-10 md:py-16 lg:py-20 bg-primary text-primary-foreground">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
 
 <div className="lg:col-span-5">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6 text-white leading-tight">
 Have a financial or compliance requirement?
 </h2>
 <p className="text-lg text-primary-foreground/80 leading-relaxed mb-12">
 Our partners are available for a confidential consultation to explore how our bespoke advisory services can support your organizational objectives.
 </p>

 <div className="space-y-8">
 <div className="flex items-start gap-4">
 <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
 <Phone className="h-5 w-5 text-white" />
 </div>
 <div>
 <h4 className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1">Direct Line</h4>
 <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-xl text-white hover:text-accent transition-colors font-medium">
 {siteConfig.contact.phone}
 </a>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
 <Mail className="h-5 w-5 text-white" />
 </div>
 <div>
 <h4 className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1">Electronic Mail</h4>
 <a href={`mailto:${siteConfig.contact.email}`} className="text-xl text-white hover:text-accent transition-colors font-medium">
 {siteConfig.contact.email}
 </a>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
 <MapPin className="h-5 w-5 text-white" />
 </div>
 <div>
 <h4 className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-1">Corporate Headquarters</h4>
 <address className="not-italic text-lg text-white font-medium">
 {siteConfig.contact.address.split(',').map((line, i) => (
 <span key={i} className="block">{line.trim()}{i < siteConfig.contact.address.split(',').length - 1 ? ',' : ''}</span>
 ))}
 </address>
 </div>
 </div>
 </div>
 </div>

 <div className="lg:col-span-7">
 {/* The ContactForm expects to be on a light background, so we wrap it in a div that resets the context or we let it stand out */}
 <div className="bg-background text-foreground rounded-sm overflow-hidden">
 <ContactForm />
 </div>
 </div>

 </div>
 </div>
 </section>
 );
}
