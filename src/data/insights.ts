export type InsightCategory = "Tax" | "GST" | "Audit" | "Compliance" | "Business";

export type Insight = {
  id: string;
  title: string;
  category: InsightCategory;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string[]; // Array of paragraphs to simulate a rich article
};

export const insights: Insight[] = [
  {
    id: "budget-analysis-current-year",
    title: "Union Budget [YEAR] Analysis: Direct Tax Proposals",
    category: "Tax",
    date: "February 2, [YEAR]",
    readingTime: "6 min read",
    excerpt: "[PLACEHOLDER] A detailed breakdown of key direct tax amendments introduced in the Union Budget, focusing on corporate tax rate changes and compliance requirements.",
    content: [
      "The recent Union Budget has introduced several procedural and substantive changes to the Income Tax Act. This professional briefing outlines the primary amendments affecting corporate taxpayers.",
      "Key changes include rationalization of capital gains tax structures, amendments to TDS/TCS provisions to widen the tax base, and specific incentives for start-ups and manufacturing units.",
      "Organizations must reassess their advance tax liabilities and ensure internal accounting systems are updated to reflect the new withholding tax rates to avoid interest under Section 234B/234C.",
      "[This is a placeholder article. Real professional insights should be populated by the firm's partners.]"
    ],
  },
  {
    id: "gst-amendments-q3",
    title: "Recent GST Council Recommendations: Impact on Input Tax Credit",
    category: "GST",
    date: "October 15, [YEAR]",
    readingTime: "5 min read",
    excerpt: "[PLACEHOLDER] An overview of the latest GST Council recommendations and their impact on supply chain operations and input tax credit claims.",
    content: [
      "The Goods and Services Tax (GST) framework continues to evolve. Recent notifications have tightened the conditions for availing Input Tax Credit (ITC).",
      "Taxpayers can now only claim ITC if the supplier has accurately reported the outward supplies in their GSTR-1, which subsequently reflects in the recipient's GSTR-2B. Provisional ITC is no longer permissible.",
      "It is imperative for businesses to establish robust vendor reconciliation processes. Failure to do so will result in blocked working capital and potential departmental scrutiny.",
      "[This is a placeholder article. Real professional insights should be populated by the firm's partners.]"
    ],
  },
  {
    id: "companies-act-compliance",
    title: "Navigating Stricter Disclosures under the Companies Act",
    category: "Compliance",
    date: "July 20, [YEAR]",
    readingTime: "4 min read",
    excerpt: "[PLACEHOLDER] Understanding the new disclosure requirements for directors and the implications of delayed ROC filings.",
    content: [
      "The Ministry of Corporate Affairs (MCA) has instituted stricter disclosure norms to enhance corporate governance and transparency.",
      "Significant changes include mandatory dematerialization of securities for private companies meeting specific criteria, and enhanced reporting in the Directors' Report regarding internal financial controls.",
      "Directors must ensure timely filing of AOC-4 and MGT-7. The MCA's automated scrutiny systems are immediately flagging delays, resulting in heavy additional fees and potential disqualification proceedings.",
      "[This is a placeholder article. Real professional insights should be populated by the firm's partners.]"
    ],
  },
  {
    id: "internal-audit-framework",
    title: "Transitioning to a Risk-Based Internal Audit Framework",
    category: "Audit",
    date: "May 10, [YEAR]",
    readingTime: "7 min read",
    excerpt: "[PLACEHOLDER] Why modern enterprises are shifting from traditional compliance audits to risk-based internal auditing methodologies.",
    content: [
      "Traditional internal audits have historically focused on historical financial compliance. However, modern corporate governance requires a forward-looking approach.",
      "A Risk-Based Internal Audit (RBIA) framework aligns the audit plan directly with the organization's strategic risk matrix. It prioritizes areas with the highest potential impact on business continuity and profitability.",
      "Implementing RBIA requires a paradigm shift. Management must first establish a comprehensive risk register, against which internal controls are evaluated for design adequacy and operational effectiveness.",
      "[This is a placeholder article. Real professional insights should be populated by the firm's partners.]"
    ],
  },
  {
    id: "business-valuation-fema",
    title: "FEMA Guidelines on Valuation for Foreign Direct Investment",
    category: "Business",
    date: "March 05, [YEAR]",
    readingTime: "5 min read",
    excerpt: "[PLACEHOLDER] A structured overview of the valuation methodologies acceptable to the RBI for issuing shares to non-resident entities.",
    content: [
      "When an Indian company issues equity instruments to a person resident outside India, the pricing guidelines under the Foreign Exchange Management Act (FEMA) are strictly applicable.",
      "The fair value of the equity instruments must be determined by a SEBI registered Merchant Banker or a practicing Chartered Accountant using internationally accepted pricing methodologies on an arm's length basis.",
      "Companies must ensure that the shares are not issued at a price lower than this determined fair value. Failure to comply can result in severe compounding penalties by the RBI.",
      "[This is a placeholder article. Real professional insights should be populated by the firm's partners.]"
    ],
  },
  {
    id: "tax-audit-thresholds",
    title: "Revisiting Tax Audit Applicability for the Current Assessment Year",
    category: "Tax",
    date: "January 12, [YEAR]",
    readingTime: "4 min read",
    excerpt: "[PLACEHOLDER] Clarifying the revised turnover thresholds and conditions for mandatory tax audits under Section 44AB.",
    content: [
      "Determining the applicability of a Tax Audit under Section 44AB of the Income Tax Act remains a critical compliance checkpoint for businesses and professionals.",
      "While the general threshold for businesses is a turnover of ₹1 Crore, this limit is extended to ₹10 Crores provided that aggregate cash receipts and cash payments do not exceed 5% of total receipts and payments, respectively.",
      "For professionals, the threshold remains ₹50 Lakhs. It is crucial to accurately classify receipts to determine if the extended threshold applies, thereby saving compliance costs.",
      "[This is a placeholder article. Real professional insights should be populated by the firm's partners.]"
    ],
  }
];
