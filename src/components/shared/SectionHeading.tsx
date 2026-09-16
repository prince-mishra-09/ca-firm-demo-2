import { cn } from "@/lib/utils";

interface SectionHeadingProps {
 title: string;
 subtitle?: string;
 alignment?: "left" | "center";
 className?: string;
}

export function SectionHeading({
 title,
 subtitle,
 alignment = "left",
 className,
}: SectionHeadingProps) {
 return (
 <div
 className={cn(
 "mb-12 flex flex-col gap-4",
 alignment === "center" ? "items-center text-center" : "items-start text-left",
 className
 )}
 >
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary">
 {title}
 </h2>
 {subtitle && (
 <p className="text-lg text-muted-foreground max-w-2xl">
 {subtitle}
 </p>
 )}
 </div>
 );
}
