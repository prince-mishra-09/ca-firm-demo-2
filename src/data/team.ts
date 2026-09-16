export type TeamMember = {
  id: string;
  name: string;
  qualifications: string;
  role: string;
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
};

export const team: TeamMember[] = [
  {
    id: "partner-1",
    name: "[PARTNER 1 NAME]",
    qualifications: "FCA, DISA (ICAI)",
    role: "Managing Partner",
    bio: "Over [X] years of experience in corporate taxation, audit, and management consultancy. Specializes in complex tax litigation and corporate restructuring.",
  },
  {
    id: "partner-2",
    name: "[PARTNER 2 NAME]",
    qualifications: "FCA, CS, LLB",
    role: "Senior Partner - Corporate Law",
    bio: "Expertise in corporate secretarial compliance, FEMA regulations, and mergers & acquisitions. Represents clients before the NCLT and other appellate authorities.",
  },
  {
    id: "partner-3",
    name: "[PARTNER 3 NAME]",
    qualifications: "ACA, CISA",
    role: "Partner - Assurance & Risk",
    bio: "Focuses on statutory audits, internal control reviews, and information systems audits. Has extensive experience in the banking and manufacturing sectors.",
  }
];
