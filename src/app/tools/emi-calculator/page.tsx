"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Calculator } from "lucide-react";

export default function EmiCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(15);

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !tenureYears) return { emi: 0, totalInterest: 0, totalPayment: 0 };
    
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    
    // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    return {
      emi: isNaN(emi) || !isFinite(emi) ? 0 : emi,
      totalInterest: isNaN(totalInterest) || !isFinite(totalInterest) ? 0 : totalInterest,
      totalPayment: isNaN(totalPayment) || !isFinite(totalPayment) ? 0 : totalPayment
    };
  };

  const { emi, totalInterest, totalPayment } = calculateEMI();

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

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
                  <span className="text-primary">EMI Calculator</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-12">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-accent">
              <Calculator className="h-6 w-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">EMI Calculator</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Accurately determine your monthly loan repayment amounts, total interest outflow, and complete financial commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            
            {/* Input Section */}
            <div className="lg:col-span-6 bg-secondary/30 p-6 md:p-8 rounded-2xl border border-border">
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="loanAmount" className="text-sm font-semibold text-primary uppercase tracking-widest">
                      Loan Amount (₹)
                    </label>
                    <span className="text-sm font-bold text-accent">{formatCurrency(loanAmount)}</span>
                  </div>
                  <input
                    type="range"
                    id="loanAmount"
                    min="100000"
                    max="50000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-4 sm:h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="mt-4 flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={loanAmount || ""}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-input bg-background focus:ring-accent focus:border-accent text-base"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="interestRate" className="text-sm font-semibold text-primary uppercase tracking-widest">
                      Interest Rate (% p.a.)
                    </label>
                    <span className="text-sm font-bold text-accent">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    id="interestRate"
                    min="1"
                    max="30"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-4 sm:h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="mt-4">
                    <input
                      type="number"
                      step="0.1"
                      value={interestRate || ""}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="block w-full px-3 py-2 rounded-md border border-input bg-background focus:ring-accent focus:border-accent text-base"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="tenureYears" className="text-sm font-semibold text-primary uppercase tracking-widest">
                      Loan Tenure (Years)
                    </label>
                    <span className="text-sm font-bold text-accent">{tenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    id="tenureYears"
                    min="1"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-4 sm:h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="mt-4">
                    <input
                      type="number"
                      value={tenureYears || ""}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="block w-full px-3 py-2 rounded-md border border-input bg-background focus:ring-accent focus:border-accent text-base"
                    />
                  </div>
                </div>
              </div>
              
            </div>

            {/* Output Section */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-2xl shadow-lg flex-grow flex flex-col justify-center">
                
                <div className="space-y-8">
                  
                  <div className="border-b border-primary-foreground/20 pb-6">
                    <span className="block text-primary-foreground/80 font-medium mb-2 uppercase tracking-widest text-sm">Monthly EMI</span>
                    <span className="text-4xl md:text-5xl font-heading font-bold text-accent">{formatCurrency(emi)}</span>
                  </div>

                  <div className="flex justify-between items-end border-b border-primary-foreground/20 pb-4">
                    <span className="text-primary-foreground/80 font-medium">Principal Amount</span>
                    <span className="text-xl font-heading font-medium">{formatCurrency(loanAmount)}</span>
                  </div>

                  <div className="flex justify-between items-end border-b border-primary-foreground/20 pb-4">
                    <span className="text-primary-foreground/80 font-medium">Total Interest Payable</span>
                    <span className="text-xl font-heading font-medium text-accent">{formatCurrency(totalInterest)}</span>
                  </div>

                  <div className="flex justify-between items-end pt-2">
                    <span className="text-primary-foreground/90 font-bold uppercase tracking-wider text-sm">Total Payment</span>
                    <span className="text-3xl font-heading font-bold text-white">{formatCurrency(totalPayment)}</span>
                  </div>
                  
                </div>

              </div>

              <div className="mt-6 p-4 bg-muted border border-border rounded-lg">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Disclaimer:</strong> This calculator provides an indicative estimate. Actual interest rates, processing fees, and EMIs are subject to the terms dictated by the lending financial institution.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
