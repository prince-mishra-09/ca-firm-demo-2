import { Calculator, CalendarDays, FileCheck, Landmark } from "lucide-react";

export type Tool = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
};

export const tools: Tool[] = [
  {
    id: "gst-calculator",
    title: "GST Calculator",
    description: "Instantly calculate inclusive or exclusive GST amounts, segmented by CGST, SGST, and IGST.",
    icon: Landmark,
    href: "/tools/gst-calculator",
  },
  {
    id: "emi-calculator",
    title: "EMI Calculator",
    description: "Determine your monthly loan repayment amounts and total interest outflow.",
    icon: Calculator,
    href: "/tools/emi-calculator",
  },
  {
    id: "compliance-calendar",
    title: "Compliance Calendar",
    description: "Track critical statutory due dates across GST, Income Tax, and ROC filings.",
    icon: CalendarDays,
    href: "/tools/compliance-calendar",
  },
  {
    id: "document-checklist",
    title: "Document Checklist",
    description: "Access curated lists of required documentation for various statutory registrations and filings.",
    icon: FileCheck,
    href: "/tools/document-checklist",
  },
];
