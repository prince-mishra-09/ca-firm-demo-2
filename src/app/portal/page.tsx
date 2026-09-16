import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { 
 ShieldCheck, 
 LayoutDashboard, 
 Files, 
 ClipboardList, 
 Activity, 
 MessageSquare,
 Search,
 Bell,
 User,
 LogOut,
 FileText,
 AlertCircle,
 CheckCircle2,
 Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
 title: `Client Portal Preview | ${siteConfig.name}`,
 description: `Preview our secure client portal interface.`,
};

export default function PortalPreviewPage() {
 const documents = [
 { name: "GST Working Papers (Q3)", date: "Oct 15, 2024", size: "2.4 MB", type: "PDF" },
 { name: "Income Tax Computations FY 23-24", date: "Sep 28, 2024", size: "1.1 MB", type: "XLSX" },
 { name: "Draft Financial Statements", date: "Sep 10, 2024", size: "4.5 MB", type: "PDF" },
 { name: "ROC Compliance Forms", date: "Aug 05, 2024", size: "850 KB", type: "PDF" },
 ];

 const engagements = [
 { task: "Annual Statutory Audit", status: "Under Review", icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10" },
 { task: "GST Annual Return Filing", status: "Action Required", icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10" },
 { task: "Income Tax Filing", status: "Completed", icon: CheckCircle2, color: "text-green-500", bg: "bg-green-500/10" },
 { task: "Q2 Advance Tax Computation", status: "Uploaded", icon: FileText, color: "text-blue-500", bg: "bg-blue-500/10" },
 ];

 return (
 <div className="flex flex-col w-full bg-background min-h-screen">
 
 {/* Header / Disclaimer */}
 <div className="bg-primary text-primary-foreground py-8">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
 <ShieldCheck className="h-10 w-10 mx-auto mb-4 text-accent" />
 <h1 className="text-3xl font-heading font-bold mb-3 uppercase tracking-widest">Client Portal Preview</h1>
 <p className="text-primary-foreground/80 leading-relaxed">
 This is a secure UI demonstration. Portal functionality can be seamlessly connected to the firm's backend or an existing client management system (e.g., SharePoint, Practice Ignition, or custom backend).
 </p>
 </div>
 </div>

 {/* Portal Interface Wrapper */}
 <section className="py-12 md:py-16 bg-muted/30 flex-grow">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="bg-background border border-border rounded-sm overflow-hidden flex flex-col md:flex-row min-h-[800px]">
 
 {/* Sidebar */}
 <div className="w-full md:w-64 bg-secondary/20 border-r border-border flex flex-col">
 <div className="p-6 border-b border-border">
 <div className="font-heading font-bold text-xl text-primary tracking-tight truncate">
 {siteConfig.name}
 </div>
 <div className="text-xs font-semibold uppercase tracking-widest text-accent mt-1">
 Secure Portal
 </div>
 </div>

 <nav className="flex-grow py-6 px-4 space-y-2">
 <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm transition-colors">
 <LayoutDashboard className="h-4 w-4" /> Dashboard
 </a>
 <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-foreground hover:bg-muted/50 font-medium text-sm transition-colors">
 <Files className="h-4 w-4 text-muted-foreground" /> Documents
 </a>
 <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-foreground hover:bg-muted/50 font-medium text-sm transition-colors">
 <ClipboardList className="h-4 w-4 text-muted-foreground" /> Pending Requests
 </a>
 <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-foreground hover:bg-muted/50 font-medium text-sm transition-colors">
 <Activity className="h-4 w-4 text-muted-foreground" /> Engagement Status
 </a>
 <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-foreground hover:bg-muted/50 font-medium text-sm transition-colors">
 <MessageSquare className="h-4 w-4 text-muted-foreground" /> Messages
 <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-primary">2</span>
 </a>
 </nav>

 <div className="p-6 border-t border-border">
 <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-destructive transition-colors text-sm font-medium">
 <LogOut className="h-4 w-4" /> Sign Out
 </a>
 </div>
 </div>

 {/* Main Content Area */}
 <div className="flex-1 flex flex-col bg-background">
 
 {/* Top Nav */}
 <header className="h-16 border-b border-border flex items-center justify-between px-8">
 <div className="relative w-64 hidden sm:block">
 <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
 <input 
 type="text" 
 placeholder="Search documents..." 
 className="w-full h-9 pl-9 pr-4 rounded-md border border-input bg-muted/30 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
 disabled
 />
 </div>
 
 <div className="flex items-center gap-6 ml-auto">
 <button className="relative text-muted-foreground hover:text-primary transition-colors">
 <Bell className="h-5 w-5" />
 <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-destructive text-[8px] font-bold text-white"></span>
 </button>
 <div className="flex items-center gap-3 pl-6 border-l border-border">
 <div className="text-right hidden sm:block">
 <div className="text-sm font-bold text-primary">Demo Client Pvt Ltd</div>
 <div className="text-xs text-muted-foreground">GSTIN: 27AADCD1234E1Z5</div>
 </div>
 <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-primary font-bold border border-border">
 DC
 </div>
 </div>
 </div>
 </header>

 {/* Dashboard Content */}
 <main className="flex-1 p-6 md:p-8 overflow-y-auto">
 <div className="mb-8">
 <h2 className="text-2xl font-heading font-bold text-primary mb-1">Welcome back, Demo Client</h2>
 <p className="text-muted-foreground text-sm">Here is the latest overview of your ongoing engagements and required actions.</p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 
 {/* Engagement Status */}
 <div className="bg-background border border-border rounded-sm overflow-hidden flex flex-col">
 <div className="px-6 py-4 border-b border-border bg-secondary/20 flex justify-between items-center">
 <h3 className="font-heading font-bold text-primary">Engagement Status</h3>
 <button className="text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors">View All</button>
 </div>
 <div className="p-6 flex-1">
 <div className="space-y-5">
 {engagements.map((eng, i) => {
 const Icon = eng.icon;
 return (
 <div key={i} className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className={cn("h-8 w-8 rounded-md flex items-center justify-center shrink-0", eng.bg)}>
 <Icon className={cn("h-4 w-4", eng.color)} />
 </div>
 <span className="text-sm font-medium text-foreground">{eng.task}</span>
 </div>
 <span className={cn("text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md", eng.bg, eng.color)}>
 {eng.status}
 </span>
 </div>
 );
 })}
 </div>
 </div>
 </div>

 {/* Recent Documents */}
 <div className="bg-background border border-border rounded-sm overflow-hidden flex flex-col">
 <div className="px-6 py-4 border-b border-border bg-secondary/20 flex justify-between items-center">
 <h3 className="font-heading font-bold text-primary">Recent Documents</h3>
 <button className="text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors">Upload</button>
 </div>
 <div className="p-0 flex-1 overflow-x-auto">
 <table className="w-full text-left text-sm min-w-[350px]">
 <thead className="bg-muted/50 text-muted-foreground font-heading uppercase tracking-widest text-[10px]">
 <tr>
 <th className="px-6 py-3 font-semibold">Name</th>
 <th className="px-6 py-3 font-semibold">Date</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-border">
 {documents.map((doc, i) => (
 <tr key={i} className="hover:bg-muted/30 transition-colors">
 <td className="px-6 py-3.5">
 <div className="flex items-center gap-3">
 <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
 <span className="font-medium text-foreground truncate">{doc.name}</span>
 </div>
 </td>
 <td className="px-6 py-3.5 text-muted-foreground whitespace-nowrap">
 {doc.date}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>

 </div>
 
 {/* Pending Actions Alert */}
 <div className="mt-8 bg-destructive/5 border border-destructive/20 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
 <div className="flex items-start gap-4">
 <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
 <div>
 <h4 className="font-bold text-destructive mb-1">Action Required: Document Signature</h4>
 <p className="text-sm text-foreground/80">The engagement letter for the upcoming Statutory Audit requires your digital signature.</p>
 </div>
 </div>
 <button className="shrink-0 px-5 py-2.5 bg-destructive text-destructive-foreground rounded-md text-sm font-medium hover:bg-destructive/90 transition-colors">
 Review Document
 </button>
 </div>

 </main>

 </div>
 </div>

 </div>
 </section>
 </div>
 );
}
