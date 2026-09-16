export type InsightCategory = "Tax" | "GST" | "Audit" | "Compliance" | "Business";

export type Insight = {
  id: string;
  title: string;
  category: InsightCategory;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string[];
};

export const insights: Insight[] = [
  {
    id: "lifestyle-tax-questions",
    title: "The ₹10 Lakh Question: When Does Your Lifestyle Start Raising Tax Questions?",
    category: "Tax",
    date: "September 7, 2026",
    readingTime: "5 min read",
    excerpt: "You earn ₹8 lakh. But your expenses tell a very different story. Does that automatically mean you have done something wrong?",
    content: [
      "You earn ₹8 lakh. But your expenses tell a very different story. Does that automatically mean you have done something wrong?",
      "The Income Tax Department increasingly relies on data analytics and AI to track high-value transactions. If your declared income doesn't match your lifestyle expenses—such as foreign travel, luxury car purchases, or high credit card bills—you might receive a notice seeking clarification.",
      "[This is a placeholder for the full article content. Real professional insights should be populated by the firm's partners.]"
    ],
  },
  {
    id: "ca-should-have-told-you",
    title: "What Your CA Should Have Told You Before the Tax Notice Arrived",
    category: "Compliance",
    date: "August 31, 2026",
    readingTime: "6 min read",
    excerpt: "Most Tax Notices Don't Start With a Problem — They Start With a Conversation That Never Happened.",
    content: [
      "Most Tax Notices Don't Start With a Problem — They Start With a Conversation That Never Happened.",
      "Proactive tax planning and open communication with your Chartered Accountant are essential. Many compliance issues arise simply because business owners were not informed of the latest regulatory requirements or failed to share critical financial decisions with their CA.",
      "[This is a placeholder for the full article content. Real professional insights should be populated by the firm's partners.]"
    ],
  },
  {
    id: "5-mistakes-msmes-make",
    title: "5 Mistakes MSMEs Make That Invite Income Tax Notices",
    category: "Business",
    date: "August 28, 2026",
    readingTime: "5 min read",
    excerpt: "Running an MSME in India is not easy. Business owners juggle sales, operations, employees, and more. Avoid these common tax pitfalls.",
    content: [
      "Running an MSME in India is not easy. Business owners juggle: Sales, Operations, Employees, Vendors, Customer relationships, and Cash flow challenges.",
      "In this constant hustle, tax compliance often takes a back seat. However, seemingly minor accounting mistakes, delayed TDS deposits, or mismatched GST returns can quickly trigger departmental scrutiny.",
      "[This is a placeholder for the full article content. Real professional insights should be populated by the firm's partners.]"
    ],
  }
];
