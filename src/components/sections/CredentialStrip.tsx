import { siteConfig } from "@/data/siteConfig";

export function CredentialStrip() {
 return (
 <div className="bg-primary text-primary-foreground py-6 border-y border-primary/20">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 text-sm md:text-base font-medium opacity-90">
 <div className="flex items-center">
 ICAI Registered Firm
 </div>
 <div className="hidden sm:block h-1 w-1 rounded-full bg-accent"></div>
 <div className="flex items-center">
 Established {siteConfig.establishedYear}
 </div>
 <div className="hidden sm:block h-1 w-1 rounded-full bg-accent"></div>
 <div className="flex items-center text-center">
 {siteConfig.contact.address.split(',')[1]?.trim() || "Location"}
 </div>
 <div className="hidden lg:block h-1 w-1 rounded-full bg-accent"></div>
 <div className="hidden lg:flex items-center gap-2">
 Audit <span className="text-accent/50">|</span> Tax <span className="text-accent/50">|</span> GST <span className="text-accent/50">|</span> Advisory
 </div>
 </div>
 </div>
 </div>
 );
}
