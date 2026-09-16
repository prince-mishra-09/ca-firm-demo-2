"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, CalendarDays, Filter } from "lucide-react";
import { compliances } from "@/data/compliance";
import { cn } from "@/lib/utils";

const months = ["All", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const categories = ["All", "GST", "Income Tax", "ROC / MCA", "PF / ESI", "Other"];

export default function ComplianceCalendarPage() {
  const [activeMonth, setActiveMonth] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCompliances = compliances.filter(item => {
    const matchMonth = activeMonth === "All" || item.month === activeMonth;
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    return matchMonth && matchCategory;
  });

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
                  <span className="text-primary">Compliance Calendar</span>
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
              <CalendarDays className="h-6 w-6" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Compliance Calendar</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Track critical statutory due dates across GST, Income Tax, and ROC filings to ensure your organization remains fully compliant.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-secondary/30 border border-border p-6 rounded-xl mb-12 space-y-6">
            <div className="flex items-center gap-2 mb-2 text-primary font-heading font-semibold">
              <Filter className="h-4 w-4" />
              Filter Deadlines
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Month</label>
                <div className="flex flex-wrap gap-2">
                  {months.map(m => (
                    <button
                      key={m}
                      onClick={() => setActiveMonth(m)}
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-colors border",
                        activeMonth === m 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-background text-foreground border-border hover:border-primary/30"
                      )}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(c => (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c)}
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-colors border",
                        activeCategory === c 
                          ? "bg-primary text-primary-foreground border-primary" 
                          : "bg-background text-foreground border-border hover:border-primary/30"
                      )}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="border border-border rounded-xl overflow-hidden bg-background shadow-sm">
            {filteredCompliances.length > 0 ? (
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left text-sm min-w-[600px]">
                  <thead className="bg-muted text-muted-foreground font-heading uppercase tracking-widest text-xs border-b border-border">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Due Date</th>
                      <th className="px-6 py-4 font-semibold">Category</th>
                      <th className="px-6 py-4 font-semibold">Compliance Item</th>
                      <th className="px-6 py-4 font-semibold min-w-[250px]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredCompliances.map((item) => (
                      <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="font-bold text-primary">{item.dueDate}</span>
                          <span className="block text-xs text-muted-foreground mt-1">{item.month}</span>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-5 font-medium text-foreground">
                          {item.title}
                        </td>
                        <td className="px-6 py-5 text-muted-foreground leading-relaxed">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-muted-foreground">No compliance deadlines found for the selected filters.</p>
              </div>
            )}
          </div>
          
          <div className="mt-8 p-4 bg-muted border border-border rounded-lg">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> Statutory dates are subject to change based on government notifications and extensions. This calendar is indicative and editable via the firm's central configuration. Always verify with official portals or our advisory team before filing.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
