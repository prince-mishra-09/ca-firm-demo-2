export type TeamMember = {
  id: string;
  name: string;
  qualifications: string;
  role: string;
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
  group: "founder" | "leadership" | "team";
};

export const team: TeamMember[] = [
  // FOUNDER
  {
    id: "vishnu-agrawal",
    name: "CA Vishnu Agrawal",
    qualifications: "FCA",
    role: "Founder",
    bio: "Over 25 years of experience in providing end-to-end services in audit & assurance, tax & regulatory services, business advisory, and international taxation.",
    group: "founder",
    imageUrl: "/images/team/vishnu-agrawal.jpg",
  },
  // LEADERSHIP / PARTNERS
  {
    id: "sriyans-naulakha",
    name: "Sriyans Naulakha",
    qualifications: "Chartered Accountant",
    role: "Partner / Leadership",
    bio: "[SPECIFIC EXPERTISE TO BE CONFIRMED]",
    group: "leadership",
    imageUrl: "/images/team/sriyans-naulakha.jpg",
  },
  {
    id: "sharwan-kumar-jain",
    name: "Sharwan Kumar Jain",
    qualifications: "Chartered Accountant",
    role: "Partner / Leadership",
    bio: "[SPECIFIC EXPERTISE TO BE CONFIRMED]",
    group: "leadership",
    imageUrl: "/images/team/sharwan-kumar-jain.jpg",
  },
  {
    id: "jasmine-tanna",
    name: "Jasmine Tanna",
    qualifications: "Chartered Accountant",
    role: "Partner / Leadership",
    bio: "[SPECIFIC EXPERTISE TO BE CONFIRMED]",
    group: "leadership",
    imageUrl: "/images/team/jasmine-tanna.jpg",
  },
  {
    id: "sulabh-jain",
    name: "Sulabh Jain",
    qualifications: "Chartered Accountant",
    role: "Partner / Leadership",
    bio: "[SPECIFIC EXPERTISE TO BE CONFIRMED]",
    group: "leadership",
    imageUrl: "/images/team/sulabh-jain.jpg",
  },
  // PROFESSIONAL TEAM
  { id: "pooja-kumari", name: "Pooja Kumari", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "akshay-tiwari", name: "Akshay Tiwari", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "priya-parjapati", name: "Priya Parjapati", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "shrey-sharma", name: "Shrey Sharma", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "aditi-dubey", name: "Aditi Dubey", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "amit-kumar", name: "Amit Kumar", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "ankit-jha", name: "Ankit Jha", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "avni-jain", name: "Avni Jain", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "rishabh-dwivedi", name: "Rishabh Dwivedi", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "gunjan-bansal", name: "Gunjan Bansal", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "shivam-chaudhary", name: "Shivam Chaudhary", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "shubham-chaudhary", name: "Shubham Chaudhary", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "aman-kumar", name: "Aman Kumar", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "tanisha-bansal", name: "Tanisha Bansal", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" },
  { id: "akanksha", name: "Akanksha", qualifications: "Professional Team", role: "Team Member", bio: "Professional team member at AVS & Associates.", group: "team" }
];
