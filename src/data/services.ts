import { Landmark, Briefcase, FileSpreadsheet, Building2, ShieldCheck, Receipt } from "lucide-react";

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
  { phase: "Understand", description: "Comprehensive analysis of your current position and specific requirements." },
  { phase: "Review", description: "Rigorous evaluation of applicable frameworks and compliance standards." },
  { phase: "Prepare", description: "Formulation of structured documentation and strategic action plans." },
  { phase: "Execute", description: "Precise implementation and filing of necessary statutory requirements." },
  { phase: "Follow-up", description: "Continuous monitoring and proactive updates on any regulatory shifts." }
];

export const services: Service[] = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    shortDescription: "Independent verification and risk management.",
    fullDescription: "Independent verification of financial records ensuring transparency, accuracy, and adherence to accounting standards. We provide stakeholders with reliable financial insights and risk assessments.",
    icon: ShieldCheck,
    features: [
      "Statutory Audits",
      "Internal Audits",
      "Tax Audits",
      "Information Systems Audit",
      "Investigative Audits",
    ],
    overview: {
      what: "An independent examination of an entity's financial information, systems, and controls to express a professional opinion.",
      who: "Statutory audits apply to all incorporated companies, while internal/tax audits apply based on specific turnover thresholds or management requirements.",
      why: "It provides assurance to stakeholders, ensures regulatory compliance, identifies operational inefficiencies, and mitigates financial risks."
    },
    process: standardProcess,
    relevantFor: ["Corporations", "SMEs", "Trusts & NGOs", "Banks & Financial Institutions"],
    faqs: [
      { question: "Is a statutory audit mandatory for my private limited company?", answer: "Yes, under the Companies Act, every registered company must undergo a statutory audit regardless of turnover or profitability." },
      { question: "What is the difference between an internal and statutory audit?", answer: "A statutory audit is legally required and reports to shareholders, whereas an internal audit is initiated by management to improve internal controls and processes." },
      { question: "When is a Tax Audit applicable under the Income Tax Act?", answer: "Generally, it is applicable if your business turnover exceeds ₹1 Crore (or ₹10 Crore under specific digital transaction conditions) or if gross receipts from a profession exceed ₹50 Lakhs." },
      { question: "How long does a typical audit engagement take?", answer: "Timelines vary significantly based on organizational size and transaction volume, ranging from a few weeks for small entities to several months for large corporations." },
      { question: "Do you provide assurance services for specific grant utilization?", answer: "Yes, we provide specialized certification and assurance services for grant utilization required by funding agencies or government bodies." }
    ]
  },
  {
    id: "taxation",
    title: "Taxation",
    shortDescription: "Direct tax planning and corporate tax compliance.",
    fullDescription: "Comprehensive direct tax advisory to ensure regulatory compliance while optimizing organizational tax structures. Our approach is conservative, research-backed, and aligned with current statutory frameworks.",
    icon: Landmark,
    features: [
      "Corporate Tax Planning",
      "Income Tax Returns",
      "Transfer Pricing",
      "Tax Assessments & Appeals",
      "International Taxation",
    ],
    overview: {
      what: "Strategic planning and compliance management for direct taxes (Income Tax) and international tax regulations.",
      who: "Individuals, professionals, partnerships, and domestic/foreign corporations operating in India.",
      why: "Proper tax planning ensures compliance, prevents punitive penalities, and legally optimizes cash flow by utilizing available deductions and exemptions."
    },
    process: standardProcess,
    relevantFor: ["Corporations", "High Net-Worth Individuals", "Partnerships & LLPs", "NRIs"],
    faqs: [
      { question: "What documents are required for corporate tax filing?", answer: "Primary requirements include audited financial statements, tax audit reports (if applicable), details of TDS/TCS, and documentation supporting deductions claimed." },
      { question: "What is Transfer Pricing?", answer: "Transfer pricing regulations apply to international or specified domestic transactions between related enterprises, ensuring transactions occur at an 'arm's length' price." },
      { question: "How do you handle tax notices from the department?", answer: "We review the notice, gather necessary documentation, prepare a factual and legally sound response, and represent the client before the assessing authorities." },
      { question: "Can NRIs utilize your tax advisory services?", answer: "Absolutely. We provide specialized advisory for NRIs regarding repatriation, DTAA benefits, and domestic tax obligations." },
      { question: "Is advance tax applicable to everyone?", answer: "If your estimated tax liability for the year exceeds ₹10,000, advance tax must be paid in prescribed installments, subject to certain exemptions for senior citizens." }
    ]
  },
  {
    id: "gst-indirect-tax",
    title: "GST & Indirect Tax",
    shortDescription: "End-to-end GST compliance and advisory services.",
    fullDescription: "Navigating the complexities of the Goods and Services Tax framework. We provide strategic guidance, precise reconciliation, and robust support during departmental notices.",
    icon: Receipt,
    features: [
      "GST Registration",
      "GST Return Filing",
      "GST Advisory",
      "GST Reconciliation",
      "GST Notice Support",
    ],
    overview: {
      what: "Comprehensive management of Goods and Services Tax (GST) requirements, from initial registration to complex litigation support.",
      who: "Any business involved in the supply of goods or services exceeding the threshold limit, or engaged in inter-state supply.",
      why: "Strict compliance prevents the blockage of Input Tax Credit (ITC) for your clients and avoids heavy penalties for late filing or misreporting."
    },
    process: standardProcess,
    relevantFor: ["Manufacturers", "Service Providers", "E-commerce Operators", "Exporters"],
    faqs: [
      { question: "When is GST Registration mandatory?", answer: "Registration is mandatory if aggregate turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs in some states) or ₹20 Lakhs for services, or if making inter-state taxable supplies." },
      { question: "What is GSTR-2B reconciliation?", answer: "It is the process of matching the ITC claimed in your books with the ITC auto-populated in GSTR-2B (based on your suppliers' filings) to ensure accurate claims." },
      { question: "Do you handle GST refunds for exporters?", answer: "Yes, we handle the entire process of applying for and processing GST refunds for zero-rated supplies (exports) and inverted duty structures." },
      { question: "What should I do if I receive a GST notice?", answer: "Contact professional counsel immediately. Do not ignore it. We analyze the discrepancy, collate evidence, and file a formal reply within the stipulated timeline." },
      { question: "Is E-invoicing applicable to my business?", answer: "Currently, e-invoicing is mandatory for registered persons whose aggregate turnover in any preceding financial year from 2017-18 exceeds ₹5 Crores." }
    ]
  },
  {
    id: "accounting-finance",
    title: "Accounting & Finance",
    shortDescription: "Outsourced accounting, MIS, and financial reporting.",
    fullDescription: "Streamlined financial operations through technology-driven outsourced accounting, precise payroll management, and timely MIS reporting for informed decision-making.",
    icon: FileSpreadsheet,
    features: [
      "Bookkeeping & Accounting",
      "Payroll Management",
      "MIS Reporting",
      "Virtual CFO Services",
      "Financial Modeling",
    ],
    overview: {
      what: "The systematic recording, analysis, and presentation of financial transactions, acting as the foundation of your business.",
      who: "Startups requiring scalable financial infrastructure, and established SMEs looking to professionalize their reporting.",
      why: "Accurate accounting is essential for regulatory compliance, securing funding, and providing management with reliable data for strategic decisions."
    },
    process: standardProcess,
    relevantFor: ["Startups", "SMEs", "Foreign Subsidiaries", "Professionals"],
    faqs: [
      { question: "What software do you use for accounting?", answer: "We are proficient in modern cloud-based systems including TallyPrime, Zoho Books, and QuickBooks, ensuring secure and real-time access." },
      { question: "What does a Virtual CFO do?", answer: "A Virtual CFO provides high-level financial strategy, cash flow management, and budget oversight on a part-time or project basis, offering senior expertise without full-time costs." },
      { question: "How frequently will I receive financial reports?", answer: "We customize reporting cycles (monthly, quarterly, or annually) based on your management requirements and statutory deadlines." },
      { question: "Can you manage employee payroll end-to-end?", answer: "Yes, we handle salary computations, tax deductions (TDS), PF/ESI compliances, and the generation of structured pay slips." },
      { question: "Is my financial data secure?", answer: "Absolutely. We utilize enterprise-grade secure infrastructure and maintain strict confidentiality agreements to protect all client data." }
    ]
  },
  {
    id: "corporate-compliance",
    title: "Corporate Compliance",
    shortDescription: "Company law, secretarial services, and regulatory approvals.",
    fullDescription: "End-to-end support for corporate secretarial compliance, FEMA regulations, and RBI guidelines, ensuring strict adherence to the regulatory landscape.",
    icon: Briefcase,
    features: [
      "Company Formation",
      "ROC Compliances",
      "FEMA & RBI Approvals",
      "Corporate Governance",
      "SEBI Compliances",
    ],
    overview: {
      what: "Ensuring adherence to the intricate web of corporate laws, Ministry of Corporate Affairs (MCA) regulations, and foreign exchange rules.",
      who: "Private Limited Companies, LLPs, and entities receiving foreign direct investment (FDI).",
      why: "Non-compliance can lead to severe penalties, director disqualification, and the striking off of the company from the registry."
    },
    process: standardProcess,
    relevantFor: ["Private Limited Companies", "LLPs", "Foreign Companies (FDI)", "Section 8 Companies"],
    faqs: [
      { question: "What are the annual compliance requirements for a Private Limited Company?", answer: "Key requirements include conducting Board and Annual General Meetings, filing AOC-4 (Financials) and MGT-7 (Annual Return) with the ROC, and maintaining statutory registers." },
      { question: "Can a foreign national be a director in an Indian company?", answer: "Yes, a foreign national can be a director, provided they obtain a Director Identification Number (DIN). However, at least one director must be a resident of India." },
      { question: "What is FEMA compliance?", answer: "FEMA (Foreign Exchange Management Act) compliance is required for any inbound or outbound foreign investments, involving specific reporting to the RBI." },
      { question: "How long does it take to incorporate a company?", answer: "Subject to document readiness and ROC processing times, a standard Private Limited Company can usually be incorporated within 7-10 working days." },
      { question: "What happens if statutory filings are delayed?", answer: "Delayed filings attract additional late fees calculated per day of default. Persistent non-compliance may lead to prosecution and director disqualification." }
    ]
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    shortDescription: "Strategic consulting and process optimization.",
    fullDescription: "Partnering with businesses to enhance operational efficiency, implement robust financial controls, and guide capital restructuring initiatives.",
    icon: Building2,
    features: [
      "Business Valuations",
      "Standard Operating Procedures (SOP)",
      "Financial Due Diligence",
      "Mergers & Acquisitions",
      "Cost Reduction Strategies",
    ],
    overview: {
      what: "Specialized consulting that addresses complex financial challenges, valuations, and strategic operational improvements.",
      who: "Growing enterprises, companies preparing for funding/M&A, and organizations facing operational bottlenecks.",
      why: "It provides independent, expert perspectives to optimize operations, accurately value business assets, and successfully execute complex transactions."
    },
    process: standardProcess,
    relevantFor: ["Growth-stage Startups", "Mid-market Enterprises", "Investors & PE Firms", "Family Offices"],
    faqs: [
      { question: "When is a formal business valuation required?", answer: "Valuations are mandatory for issuing shares (under Companies Act and Income Tax Act), during M&A transactions, FEMA compliance for foreign investment, and dispute resolutions." },
      { question: "What does Financial Due Diligence involve?", answer: "It is an investigative analysis of a target company's financial health, identifying historical trends, potential liabilities, and verifying the accuracy of presented financial statements." },
      { question: "How can SOPs help my business?", answer: "Standard Operating Procedures (SOPs) formalize workflows, reduce dependency on specific individuals, ensure consistency, and establish clear internal controls." },
      { question: "Do you assist with post-merger integration?", answer: "Yes, we support the alignment of financial systems, reporting structures, and internal controls post-acquisition to ensure seamless operational continuity." },
      { question: "How do you identify cost reduction opportunities?", answer: "We conduct granular analyses of major expenditure heads, evaluate vendor contracts, assess process inefficiencies, and recommend structured optimizations without compromising quality." }
    ]
  },
];
