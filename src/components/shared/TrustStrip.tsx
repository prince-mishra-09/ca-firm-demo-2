import { Shield, Award, Users, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function TrustStrip() {
 const stats = [
 {
 icon: Shield,
 label: "Established",
 value: siteConfig.establishedYear,
 },
 {
 icon: Award,
 label: "FRN Number",
 value: siteConfig.frn,
 },
 {
 icon: Users,
 label: "Professionals",
 value: "Dedicated Team",
 },
 {
 icon: BookOpen,
 label: "ICAI",
 value: "Registered",
 },
 ];

 return (
 <div className="bg-secondary py-12 border-y border-border">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary/10">
 {stats.map((stat, i) => (
 <div key={i} className="flex flex-col items-center justify-center text-center px-4">
 <stat.icon className="h-8 w-8 text-primary mb-4 opacity-80" />
 <div className="text-2xl font-heading font-bold text-primary mb-1">
 {stat.value}
 </div>
 <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
 {stat.label}
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 );
}
