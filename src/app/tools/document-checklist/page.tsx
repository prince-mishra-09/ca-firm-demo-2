"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, FileCheck, CheckCircle2 } from "lucide-react";
import { checklists } from "@/data/checklists";
import { cn } from "@/lib/utils";

export default function DocumentChecklistPage() {
 const [activeChecklistId, setActiveChecklistId] = useState<string>(checklists[0].id);

 const activeChecklist = checklists.find(c => c.id === activeChecklistId) || checklists[0];

 return (
 <div className="flex flex-col w-full bg-background min-h-screen">
 {/* Breadcrumb */}
 <div className="bg-background pt-8 pb-4 border-b border-border">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <nav className="flex text-sm text-muted-foreground font-medium" aria-label="Breadcrumb">
 <ol className="inline-flex items-center space-x-1 md:space-x-2">
 <li className="inline-flex items-center">
 <Link href="/" className="hover:text-primary transition-colors">Home</Link>
 </li>
 <li>
 <div className="flex items-center">
 <ChevronRight className="h-4 w-4 mx-1" />
 <Link href="/tools" className="hover:text-primary transition-colors">Tools</Link>
 </div>
 </li>
 <li aria-current="page">
 <div className="flex items-center">
 <ChevronRight className="h-4 w-4 mx-1" />
 <span className="text-primary">Document Checklist</span>
 </div>
 </li>
 </ol>
 </nav>
 </div>
 </div>

 <section className="py-10 md:py-16" md:py-10 md:py-16 lg:py-24">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
 <div className="mb-12">
 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent">
 <FileCheck className="h-6 w-6" />
 </div>
 <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">Document Checklist</h1>
 <p className="text-lg text-muted-foreground max-w-2xl">
 Access curated lists of required documentation for various statutory registrations, filings, and audit preparations.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
 
 {/* Sidebar / Selector */}
 <div className="lg:col-span-4">
 <div className="bg-secondary/30 border border-border rounded-sm p-4 md:p-6 sticky top-24">
 <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 pl-2">
 Select Service
 </h2>
 <div className="flex flex-col gap-2">
 {checklists.map((checklist) => (
 <button
 key={checklist.id}
 onClick={() => setActiveChecklistId(checklist.id)}
 className={cn(
 "text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border",
 activeChecklistId === checklist.id
 ? "bg-primary text-primary-foreground border-primary "
 : "bg-background text-foreground border-border hover:border-primary/40 hover:bg-muted/50"
 )}
 >
 {checklist.title}
 </button>
 ))}
 </div>
 </div>
 </div>

 {/* Checklist Content */}
 <div className="lg:col-span-8">
 <div className="bg-background border border-border rounded-sm p-8 md:p-10 ">
 
 <div className="mb-10 pb-8 border-b border-border">
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-3">
 {activeChecklist.title}
 </h2>
 <p className="text-muted-foreground leading-relaxed">
 {activeChecklist.description}
 </p>
 </div>

 <div className="space-y-12">
 {activeChecklist.categories.map((category, idx) => (
 <div key={idx}>
 <h3 className="text-lg font-heading font-bold text-primary mb-5 flex items-center">
 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-accent text-xs mr-3 shrink-0">
 {idx + 1}
 </span>
 {category.title}
 </h3>
 <ul className="space-y-4">
 {category.items.map((item, itemIdx) => (
 <li key={itemIdx} className="flex items-start bg-muted/30 p-4 rounded-lg border border-border/50">
 <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mr-4 mt-0.5" />
 <span className="text-foreground/90 font-medium leading-relaxed">{item}</span>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>

 <div className="mt-12 p-6 bg-accent/10 border border-accent/20 rounded-sm">
 <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Important Note</h4>
 <p className="text-sm text-foreground/80 leading-relaxed">
 This checklist is indicative and covers standard requirements. Required documentation may vary based on your specific legal structure, jurisdiction, and individual circumstances. Please ensure all submitted documents are clear and self-attested where necessary.
 </p>
 </div>

 </div>
 </div>

 </div>
 </div>
 </section>
 </div>
 );
}
