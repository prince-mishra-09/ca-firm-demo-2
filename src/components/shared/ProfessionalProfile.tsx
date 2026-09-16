import { TeamMember } from "@/data/team";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfessionalProfileProps {
 member: TeamMember;
 className?: string;
}

export function ProfessionalProfile({ member, className }: ProfessionalProfileProps) {
 return (
  <div className={cn("bg-background border border-border rounded-sm overflow-hidden flex flex-col transition-shadow hover:border-accent group", className)}>
    {member.imageUrl && (
      <div className="w-full aspect-[4/3] bg-secondary relative overflow-hidden border-b border-border">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${member.imageUrl}')` }}
        ></div>
      </div>
    )}
    <div className="p-8 flex flex-col h-full">
      <div className="mb-6 border-b border-border pb-6">
 <div className="flex justify-between items-start">
 <div>
 <h3 className="text-2xl font-heading font-bold text-primary mb-1">
 {member.name}
 </h3>
 <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
 <div className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
 {member.qualifications}
 </div>
 </div>
 {member.linkedinUrl && (
 <a 
 href={member.linkedinUrl} 
 target="_blank" 
 rel="noopener noreferrer"
 className="text-muted-foreground hover:text-[#0A66C2] transition-colors p-2"
 aria-label={`Profile of ${member.name}`}
 >
 <Globe className="h-5 w-5" />
 </a>
 )}
 </div>
 </div>
 
 <div className="flex-grow">
 <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
 {member.bio}
 </p>
 </div>
 </div>
 </div>
 );
}
