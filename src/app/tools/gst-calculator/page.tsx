"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GstCalculatorPage() {
 const [amount, setAmount] = useState<number>(10000);
 const [rate, setRate] = useState<number>(18);
 const [isInclusive, setIsInclusive] = useState<boolean>(false);
 const [isInterState, setIsInterState] = useState<boolean>(false); // false = Intra (CGST+SGST), true = Inter (IGST)

 let taxableAmount = 0;
 let totalGst = 0;
 let finalAmount = 0;

 if (isInclusive) {
 taxableAmount = amount / (1 + rate / 100);
 totalGst = amount - taxableAmount;
 finalAmount = amount;
 } else {
 taxableAmount = amount;
 totalGst = amount * (rate / 100);
 finalAmount = amount + totalGst;
 }

 const cgst = isInterState ? 0 : totalGst / 2;
 const sgst = isInterState ? 0 : totalGst / 2;
 const igst = isInterState ? totalGst : 0;

 const formatCurrency = (val: number) => 
 new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(val);

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
 <span className="text-primary">GST Calculator</span>
 </div>
 </li>
 </ol>
 </nav>
 </div>
 </div>

      <section className="py-10 md:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
 <div className="mb-12">
 <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent">
 <Landmark className="h-6 w-6" />
 </div>
 <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">GST Calculator</h1>
 <p className="text-lg text-muted-foreground max-w-2xl">
 Instantly calculate inclusive or exclusive GST amounts, segmented by CGST, SGST, and IGST for your transactions.
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
 
 {/* Input Section */}
 <div className="lg:col-span-6 bg-secondary/30 p-6 md:p-8 rounded-sm border border-border">
 
 <div className="space-y-8">
 <div>
 <label htmlFor="amount" className="block text-sm font-semibold text-primary uppercase tracking-widest mb-2">
 Amount (₹)
 </label>
 <input
 type="number"
 id="amount"
 value={amount || ""}
 onChange={(e) => setAmount(Number(e.target.value))}
 className="w-full bg-background border border-input rounded-md px-4 py-3 text-lg font-medium text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
 />
 </div>

 <div>
 <label className="block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
 GST Rate
 </label>
 <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
 {[5, 12, 18, 28].map((r) => (
 <button
 key={r}
 onClick={() => setRate(r)}
 className={cn(
 "py-3 rounded-md text-sm font-medium transition-all duration-200 border",
 rate === r 
 ? "bg-primary text-primary-foreground border-primary" 
 : "bg-background text-foreground border-border hover:border-primary/40"
 )}
 >
 {r}%
 </button>
 ))}
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
 Calculation Type
 </label>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 <button
 onClick={() => setIsInclusive(false)}
 className={cn(
 "py-3 rounded-md text-sm font-medium transition-all duration-200 border",
 !isInclusive
 ? "bg-primary text-primary-foreground border-primary" 
 : "bg-background text-foreground border-border hover:border-primary/40"
 )}
 >
 Exclusive
 </button>
 <button
 onClick={() => setIsInclusive(true)}
 className={cn(
 "py-3 rounded-md text-sm font-medium transition-all duration-200 border",
 isInclusive
 ? "bg-primary text-primary-foreground border-primary" 
 : "bg-background text-foreground border-border hover:border-primary/40"
 )}
 >
 Inclusive
 </button>
 </div>
 </div>

 <div>
 <label className="block text-sm font-semibold text-primary uppercase tracking-widest mb-3">
 Supply Type
 </label>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 <button
 onClick={() => setIsInterState(false)}
 className={cn(
 "py-3 rounded-md text-sm font-medium transition-all duration-200 border",
 !isInterState
 ? "bg-primary text-primary-foreground border-primary" 
 : "bg-background text-foreground border-border hover:border-primary/40"
 )}
 >
 Intra-state (Same State)
 </button>
 <button
 onClick={() => setIsInterState(true)}
 className={cn(
 "py-3 rounded-md text-sm font-medium transition-all duration-200 border",
 isInterState
 ? "bg-primary text-primary-foreground border-primary" 
 : "bg-background text-foreground border-border hover:border-primary/40"
 )}
 >
 Inter-state (Across States)
 </button>
 </div>
 </div>
 </div>
 
 </div>

 {/* Output Section */}
 <div className="lg:col-span-6 flex flex-col">
 <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-sm flex-grow flex flex-col justify-center">
 
 <div className="space-y-6">
 <div className="flex justify-between items-end border-b border-primary-foreground/20 pb-4">
 <span className="text-primary-foreground/80 font-medium">Taxable Amount</span>
 <span className="text-2xl font-heading font-semibold">{formatCurrency(taxableAmount)}</span>
 </div>

 {!isInterState ? (
 <>
 <div className="flex justify-between items-end border-b border-primary-foreground/20 pb-4">
 <span className="text-primary-foreground/80 font-medium">CGST ({rate/2}%)</span>
 <span className="text-xl font-heading font-medium text-accent">{formatCurrency(cgst)}</span>
 </div>
 <div className="flex justify-between items-end border-b border-primary-foreground/20 pb-4">
 <span className="text-primary-foreground/80 font-medium">SGST ({rate/2}%)</span>
 <span className="text-xl font-heading font-medium text-accent">{formatCurrency(sgst)}</span>
 </div>
 </>
 ) : (
 <div className="flex justify-between items-end border-b border-primary-foreground/20 pb-4">
 <span className="text-primary-foreground/80 font-medium">IGST ({rate}%)</span>
 <span className="text-xl font-heading font-medium text-accent">{formatCurrency(igst)}</span>
 </div>
 )}

 <div className="flex justify-between items-end border-b border-primary-foreground/20 pb-4">
 <span className="text-primary-foreground/80 font-medium">Total GST</span>
 <span className="text-xl font-heading font-medium text-accent">{formatCurrency(totalGst)}</span>
 </div>

 <div className="flex justify-between items-end pt-4">
 <span className="text-primary-foreground/90 font-bold uppercase tracking-wider text-sm">Final Amount</span>
 <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">{formatCurrency(finalAmount)}</span>
 </div>
 </div>

 </div>

 <div className="mt-6 p-4 bg-muted border border-border rounded-lg">
 <p className="text-xs text-muted-foreground leading-relaxed">
 <strong>Disclaimer:</strong> This tool is for general informational purposes and should not be treated as professional tax advice. Always consult with a qualified chartered accountant for accurate statutory computations and compliance regarding your specific business transactions.
 </p>
 </div>
 </div>

 </div>
 </div>
 </section>
 </div>
 );
}
