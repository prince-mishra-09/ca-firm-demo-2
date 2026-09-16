import { Building2, Globe, Laptop, Plane } from "lucide-react";

export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ElementType;
  features: string[];
  overview: {
    what: string;
    who: string;
    why: string;
  };
  process: { phase: string; description: string }[];
  relevantFor: string[];
  faqs: FAQ[];
};

const standardProcess = [
  { phase: "Consultation & Assessment", description: "Initial evaluation of requirements, business model, and specific regulatory obligations." },
  { phase: "Strategy & Structuring", description: "Designing the most efficient operational and tax-compliant structure." },
  { phase: "Documentation & Filing", description: "Preparation, review, and submission of all necessary statutory documents." },
  { phase: "Execution & Approval", description: "Liaising with regulatory authorities to ensure successful processing and approvals." },
  { phase: "Ongoing Compliance Support", description: "Continuous monitoring and advisory to ensure absolute compliance with dynamic laws." },
];

export const services: Service[] = [
  {
    id: "india-business",
    title: "India Business",
    shortDescription: "End-to-end support for business setup, regulatory registrations, ongoing compliance, and audit.",
    fullDescription: "Comprehensive professional support for Indian businesses covering everything from incorporation and registration to complex audits, GST consulting, and IPO funding services. We act as your end-to-end compliance and financial partner.",
    icon: Building2,
    features: [
      "Business Setup (Private Limited, LLP, OPC, etc.)",
      "Regulatory Registrations (Trademark, FSSAI, IEC, Startup India)",
      "Ongoing Compliance & Virtual CFO Services",
      "Statutory, Tax, Internal, and Forensic Audit",
      "Goods and Services Tax (GST) Outsourcing & Consulting",
      "Funding & IPO Services",
    ],
    overview: {
      what: "A full suite of professional services designed for Indian companies, startups, and established enterprises.",
      who: "Founders, SMEs, and large corporations operating within India.",
      why: "Ensures complete regulatory peace of mind and financial optimization so founders can focus on growth.",
    },
    process: standardProcess,
    relevantFor: ["Startups", "SMEs", "Corporations", "Partnerships"],
    faqs: [
      { question: "What is the best structure for a new business?", answer: "It depends on your funding goals, liability preferences, and compliance bandwidth. We generally recommend a Private Limited Company for scalable startups." },
      { question: "Do you offer Virtual CFO services?", answer: "Yes, we provide end-to-end accounting, bookkeeping, and Virtual CFO services to act as your internal finance team." }
    ]
  },
  {
    id: "global-business",
    title: "Global Business",
    shortDescription: "International taxation, FEMA compliance, and cross-border expansion support.",
    fullDescription: "Specialized advisory for multinational corporations setting up in India, and Indian enterprises expanding globally. We handle complex international tax treaties, transfer pricing, and FEMA regulations.",
    icon: Globe,
    features: [
      "India Business Set-up (Foreign Subsidiary, Branch/Liaison Office)",
      "International Taxation & DTAA Advisory",
      "FEMA Compliance & Transfer Pricing",
      "15CA / 15CB Certification",
      "Expat Taxation",
      "Expanding Outside India (UAE, USA, UK Expansion)",
    ],
    overview: {
      what: "Cross-border financial structuring, tax advisory, and incorporation services.",
      who: "MNCs entering India, Indian companies going global, and expatriates.",
      why: "International expansion is heavily regulated. We prevent severe penalties through proactive compliance.",
    },
    process: standardProcess,
    relevantFor: ["MNCs", "Exporters", "Tech Startups", "Expatriates"],
    faqs: [
      { question: "Can a foreign company set up a 100% subsidiary in India?", answer: "Yes, under the automatic route for most sectors, 100% FDI is permitted in an Indian Private Limited Company." },
      { question: "Do you handle UAE company incorporation?", answer: "Yes, we assist with business setup and compliance in the UAE, USA, and UK." }
    ]
  },
  {
    id: "freelancer-tech-digital",
    title: "Freelancer, Tech & Digital",
    shortDescription: "Specialized tax advisory for freelancers, digital creators, SaaS founders, and Crypto/Web3.",
    fullDescription: "Modern taxation requires modern solutions. We provide highly specialized tax structuring and compliance support for digital nomads, tech freelancers, SaaS founders, and individuals navigating Crypto and Web3 regulations.",
    icon: Laptop,
    features: [
      "Big Tech Freelancers & Foreign Income Taxation",
      "1099 & Withholding Advisory, GST on Export of Services",
      "Crypto & Web3 Taxation (Reporting, Staking, 30% Tax Advisory)",
      "Digital Creators & YouTubers / Influencers Taxation",
      "SaaS Founders Tax Structuring & Remote Employment",
      "ESOP / RSU Tax Planning",
    ],
    overview: {
      what: "Tax and compliance advisory tailored for the digital and decentralized economy.",
      who: "Freelancers, Influencers, SaaS Founders, Crypto Investors, Remote Workers.",
      why: "Traditional tax structures often fail to optimize for borderless digital income. We ensure maximum retention of wealth within legal frameworks.",
    },
    process: standardProcess,
    relevantFor: ["Digital Creators", "Remote Workers", "Web3 Investors", "SaaS Founders"],
    faqs: [
      { question: "Does GST apply to freelancers receiving foreign income?", answer: "Export of services is considered zero-rated under GST, but registration may still be mandatory depending on turnover. LUT filing is required." },
      { question: "How is Crypto taxed in India?", answer: "Virtual Digital Assets (VDAs) are taxed at a flat 30%, plus applicable surcharge and cess, without deductions for expenses other than the cost of acquisition." }
    ]
  },
  {
    id: "nri-services",
    title: "NRI Services",
    shortDescription: "Comprehensive tax, compliance, and asset management advisory for Non-Resident Indians.",
    fullDescription: "Dedicated support for NRIs navigating the complexities of Indian tax laws. From filing income tax returns and claiming DTAA relief to managing property capital gains and repatriation, we act as your trusted advisors on the ground.",
    icon: Plane,
    features: [
      "NRI Taxation & Income Tax Filing in India",
      "Capital Gains on Property & Rental Income Compliance",
      "Foreign Asset Reporting & DTAA Relief Claim",
      "Repatriation & Remittance (15CA/15CB)",
      "FEMA Advisory & Bank Compliance Support",
      "Return to India Advisory & RNOR Status Planning",
    ],
    overview: {
      what: "Specialized tax and financial advisory for Non-Resident Indians with interests in India.",
      who: "NRIs, PIOs, and individuals planning to return to India.",
      why: "Managing Indian assets and income from abroad is complex. We simplify compliance and prevent regulatory notices.",
    },
    process: standardProcess,
    relevantFor: ["NRIs", "Returning Indians", "PIOs", "Expatriates"],
    faqs: [
      { question: "Do NRIs need to file an Income Tax Return in India?", answer: "Yes, if the income earned in India exceeds the basic exemption limit, an ITR must be filed." },
      { question: "How can I repatriate funds from the sale of a property?", answer: "Funds can be repatriated up to USD 1 million per financial year via the NRO account, subject to filing Form 15CA and obtaining a 15CB certificate from a CA." }
    ]
  }
];
