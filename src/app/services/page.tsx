import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
 title: `Our Services | ${siteConfig.name}`,
 description: `Explore our comprehensive range of financial, tax, and corporate advisory services.`,
};

export default function ServicesPage() {
 return (
 <div className="flex flex-col w-full bg-background">
 <PageHero 
 title="Practice Areas" 
 description="Comprehensive financial, tax, and regulatory solutions designed to mitigate risk and unlock organizational value."
 />

 <section className="py-10 md:py-16 lg:py-20 lg:py-32">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="flex flex-col gap-0 border-t border-border">
 {services.map((service, index) => {
 const Icon = service.icon;
 const number = String(index + 1).padStart(2, '0');
 
 return (
 <div key={service.id} className="group py-10 md:py-16 md:py-10 md:py-16 lg:py-24 border-b border-border hover:bg-muted/30 transition-colors duration-500">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
 
 {/* Left Column: Number, Title, Description, Link */}
 <div className="lg:col-span-7 flex gap-6 md:gap-10">
 <div className="text-2xl md:text-3xl font-heading font-medium text-muted-foreground/40 pt-1 shrink-0">
 {number}
 </div>
 
 <div className="flex flex-col">
 <div className="mb-6 h-12 w-12 rounded-lg bg-secondary flex items-center justify-center border border-border">
 <Icon className="h-6 w-6 text-accent" />
 </div>
 
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4 tracking-tight group-hover:text-accent transition-colors">
 {service.title}
 </h2>
 
 <p className="text-lg text-foreground/80 leading-relaxed max-w-xl mb-8">
 {service.shortDescription}
 </p>
 
 <Link
 href={`/services/${service.id}`}
 className="inline-flex items-center text-sm font-medium text-primary uppercase tracking-widest hover:text-accent transition-colors mt-auto"
 >
 View Service Details
 <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </div>
 </div>
 
 {/* Right Column: Individual Services List */}
 <div className="lg:col-span-5 lg:pl-12 lg:border-l lg:border-border/50">
 <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
 Core Capabilities
 </h3>
 <ul className="space-y-4">
 {service.features.map((feature, i) => (
 <li key={i} className="flex items-start">
 <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
 <span className="text-lg font-medium text-foreground/90">{feature}</span>
 </li>
 ))}
 </ul>
 </div>
 
 </div>
 </div>
 );
 })}
 </div>

 </div>
 </section>

 {/* Need Help Informational Section */}
 <section className="py-10 md:py-16 lg:py-24 bg-secondary">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-background p-8 md:p-12 rounded-sm border border-border ">
 <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center shrink-0">
 <HelpCircle className="h-8 w-8 text-accent" />
 </div>
 
 <div className="flex-grow text-center md:text-left">
 <h3 className="text-2xl font-heading font-bold text-primary mb-3">
 Need help identifying the right service?
 </h3>
 <p className="text-muted-foreground text-lg leading-relaxed mb-6 md:mb-0">
 Our regulatory landscape can be complex. Reach out for a preliminary discussion to determine the specific advisory framework your organization requires.
 </p>
 </div>
 
 <div className="shrink-0 w-full md:w-auto">
 <Link
 href="/contact"
 className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 whitespace-nowrap"
 >
 Request Callback
 </Link>
 </div>
 </div>
 </div>
 </section>
 </div>
 );
}
