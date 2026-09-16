export type ChecklistCategory = {
 title: string;
 items: string[];
};

export type DocumentChecklist = {
 id: string;
 title: string;
 description: string;
 categories: ChecklistCategory[];
};

export const checklists: DocumentChecklist[] = [
 {
 id: "company-incorporation",
 title: "Company Incorporation (Private Limited)",
 description: "Standard documents required by the MCA for incorporating a new Private Limited Company in India.",
 categories: [
 {
 title: "For All Directors / Shareholders",
 items: [
 "PAN Card (Mandatory for Indian Nationals)",
 "Passport (Mandatory for Foreign Nationals)",
 "Address Proof (Bank Statement, Electricity Bill, or Mobile Bill - not older than 2 months)",
 "Identity Proof (Voter ID, Passport, or Driving License)",
 "Passport size photograph"
 ]
 },
 {
 title: "For Registered Office",
 items: [
 "Latest Electricity Bill / Property Tax Receipt of the premises",
 "No Objection Certificate (NOC) from the property owner",
 "Rent Agreement (if the property is rented)"
 ]
 }
 ]
 },
 {
 id: "gst-registration",
 title: "GST Registration",
 description: "Documentation required for obtaining a new GSTIN under the Goods and Services Tax Act.",
 categories: [
 {
 title: "Business Entity Documents",
 items: [
 "PAN Card of the Business / Applicant",
 "Certificate of Incorporation / Partnership Deed",
 "Authorization Letter / Board Resolution for Authorized Signatory"
 ]
 },
 {
 title: "Promoter / Partner / Director Documents",
 items: [
 "PAN Card and Aadhaar Card of all Promoters / Directors",
 "Passport size photographs of all Promoters / Directors"
 ]
 },
 {
 title: "Principal Place of Business",
 items: [
 "Electricity Bill or Property Tax Receipt",
 "Rent / Lease Agreement (if applicable)",
 "NOC from owner (if applicable)"
 ]
 },
 {
 title: "Bank Details",
 items: [
 "Cancelled Cheque or First page of Bank Passbook"
 ]
 }
 ]
 },
 {
 id: "income-tax-individual",
 title: "Income Tax Return (Salaried Individual)",
 description: "Essential documents required for filing an annual Income Tax Return for a salaried individual.",
 categories: [
 {
 title: "Income Documents",
 items: [
 "Form 16 (Part A and Part B) issued by the employer",
 "Salary Slips (if Form 16 is unavailable)",
 "Bank Statements for the financial year (for interest income)"
 ]
 },
 {
 title: "Tax Deduction Documents (Chapter VI-A)",
 items: [
 "Life Insurance Premium receipts (80C)",
 "PPF / EPF contribution statements (80C)",
 "ELSS Mutual Fund statements (80C)",
 "Medical Insurance Premium receipts (80D)",
 "Education Loan Interest certificate (80E)"
 ]
 },
 {
 title: "Housing Documents",
 items: [
 "Home Loan Interest Certificate (for Section 24b / 80EEA)",
 "Rent receipts and PAN of landlord (for claiming HRA if not submitted to employer)"
 ]
 }
 ]
 },
 {
 id: "statutory-audit",
 title: "Statutory Audit Preparation",
 description: "Preliminary documents and schedules required to commence a statutory audit engagement.",
 categories: [
 {
 title: "Financial & Accounting Records",
 items: [
 "Trial Balance for the financial year",
 "Draft Balance Sheet and Profit & Loss Statement",
 "General Ledger dump",
 "Bank Reconciliation Statements for all active accounts"
 ]
 },
 {
 title: "Statutory & Compliance",
 items: [
 "Copies of all GST returns filed (GSTR-1, GSTR-3B, GSTR-9)",
 "TDS/TCS returns and challans",
 "PF, ESI, and Professional Tax challans",
 "Minutes of Board and General Meetings"
 ]
 },
 {
 title: "Operational Data",
 items: [
 "Fixed Assets Register with depreciation workings",
 "Inventory valuation sheets",
 "List of sundry debtors and creditors with aging analysis"
 ]
 }
 ]
 }
];
