export type ComplianceItem = {
 id: string;
 month: string;
 dueDate: string;
 title: string;
 category: "GST" | "Income Tax" | "ROC / MCA" | "PF / ESI" | "Other";
 description: string;
};

export const compliances: ComplianceItem[] = [
 {
 id: "gstr-3b-jan",
 month: "January",
 dueDate: "20th January",
 title: "GSTR-3B Filing",
 category: "GST",
 description: "Summary return for the month of December for taxpayers having turnover > 5 Cr."
 },
 {
 id: "gstr-1-jan",
 month: "January",
 dueDate: "11th January",
 title: "GSTR-1 Filing",
 category: "GST",
 description: "Details of outward supplies for the month of December."
 },
 {
 id: "tds-dec",
 month: "January",
 dueDate: "7th January",
 title: "TDS Payment",
 category: "Income Tax",
 description: "Due date for payment of TDS/TCS deducted in the month of December."
 },
 {
 id: "pf-esi-dec",
 month: "January",
 dueDate: "15th January",
 title: "PF & ESI Payment",
 category: "PF / ESI",
 description: "Provident Fund and ESI contributions for the month of December."
 },
 {
 id: "advance-tax-mar",
 month: "March",
 dueDate: "15th March",
 title: "Advance Tax (4th Installment)",
 category: "Income Tax",
 description: "Due date for payment of 100% of advance tax for the financial year."
 },
 {
 id: "roc-dir3",
 month: "September",
 dueDate: "30th September",
 title: "DIR-3 KYC",
 category: "ROC / MCA",
 description: "Due date for directors to file their KYC details with the MCA."
 },
 {
 id: "income-tax-return-non-audit",
 month: "July",
 dueDate: "31st July",
 title: "ITR Filing (Non-Audit)",
 category: "Income Tax",
 description: "Due date for filing Income Tax Returns for individuals and entities not subject to tax audit."
 },
 {
 id: "income-tax-return-audit",
 month: "October",
 dueDate: "31st October",
 title: "ITR Filing (Audit Cases)",
 category: "Income Tax",
 description: "Due date for filing Income Tax Returns for entities subject to tax audit or transfer pricing."
 }
];
