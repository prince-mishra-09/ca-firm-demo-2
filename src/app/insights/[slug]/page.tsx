import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Share2, Globe } from "lucide-react";
import { insights } from "@/data/insights";
import { siteConfig } from "@/data/siteConfig";
import { InsightCard } from "@/components/shared/InsightCard";
import { CTASection } from "@/components/sections/CTASection";

interface InsightPageProps {
 params: Promise<{
 slug: string;
 }>;
}

export async function generateMetadata({ params }: InsightPageProps) {
 const resolvedParams = await params;
 const insight = insights.find((i) => i.id === resolvedParams.slug);

 if (!insight) {
 return {
 title: "Insight Not Found",
 };
 }

 return {
 title: `${insight.title} | Insights | ${siteConfig.name}`,
 description: insight.excerpt,
 };
}

export function generateStaticParams() {
 return insights.map((insight) => ({
 slug: insight.id,
 }));
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
 const resolvedParams = await params;
 const insight = insights.find((i) => i.id === resolvedParams.slug);

 if (!insight) {
 notFound();
 }

 // Get up to 3 related articles (exclude current, matching category first if possible)
 let relatedInsights = insights.filter(i => i.id !== insight.id && i.category === insight.category);
 if (relatedInsights.length < 3) {
 const additional = insights.filter(i => i.id !== insight.id && i.category !== insight.category);
 relatedInsights = [...relatedInsights, ...additional].slice(0, 3);
 } else {
 relatedInsights = relatedInsights.slice(0, 3);
 }

 return (
 <div className="flex flex-col w-full bg-background">
 {/* Breadcrumb */}
 <div className="bg-background pt-8 pb-4 border-b border-border">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
 <nav className="flex text-sm text-muted-foreground font-medium" aria-label="Breadcrumb">
 <ol className="inline-flex items-center space-x-1 md:space-x-2 truncate">
 <li className="inline-flex items-center shrink-0">
 <Link href="/" className="hover:text-primary transition-colors">Home</Link>
 </li>
 <li className="shrink-0">
 <div className="flex items-center">
 <ChevronRight className="h-4 w-4 mx-1" />
 <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
 </div>
 </li>
 <li aria-current="page" className="truncate">
 <div className="flex items-center truncate">
 <ChevronRight className="h-4 w-4 mx-1 shrink-0" />
 <span className="text-primary truncate">{insight.title}</span>
 </div>
 </li>
 </ol>
 </nav>
 </div>
 </div>

 {/* Article Header & Content */}
 <article className="pt-12 pb-16 md:pt-24 md:pb-32">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
 
 <header className="mb-16">
 <div className="flex items-center justify-between mb-8">
 <span className="inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground uppercase tracking-widest border border-border">
 {insight.category}
 </span>
 
 <div className="flex items-center gap-4">
 <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Share via Web">
 <Globe className="h-5 w-5" />
 </button>
 <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Share via Link">
 <Share2 className="h-5 w-5" />
 </button>
 </div>
 </div>

 <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-[1.15] mb-8">
 {insight.title}
 </h1>

 <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground border-y border-border py-6">
 <div className="flex items-center">
 <Calendar className="mr-2 h-4 w-4 text-accent" />
 Published {insight.date}
 </div>
 <div className="hidden sm:block h-1 w-1 rounded-full bg-border"></div>
 <div className="flex items-center">
 <Clock className="mr-2 h-4 w-4 text-accent" />
 {insight.readingTime}
 </div>
 <div className="hidden sm:block h-1 w-1 rounded-full bg-border"></div>
 <div className="flex items-center text-primary">
 By {siteConfig.name} Advisory
 </div>
 </div>
 </header>

 <div className="prose prose-lg md:prose-xl max-w-none text-foreground/80 prose-headings:font-heading prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-accent prose-blockquote:bg-secondary/30 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg">
 <p className="lead text-2xl text-primary font-medium mb-12">
 {insight.excerpt.replace('[PLACEHOLDER] ', '')}
 </p>
 
 {insight.content.map((paragraph, index) => (
 <p key={index}>{paragraph}</p>
 ))}
 
 <div className="mt-16 p-8 bg-secondary/30 border border-border rounded-sm not-prose">
 <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Professional Disclaimer</h4>
 <p className="text-sm text-foreground/70 leading-relaxed">
 The information contained in this article is for general guidance and informational purposes only. It does not constitute professional accounting, tax, or legal advice. Regulations and statutes are subject to change. Please consult with our partners before making any decisions based on this content.
 </p>
 </div>
 </div>
 
 </div>
 </article>

 {/* Related Articles */}
 {relatedInsights.length > 0 && (
 <section className="py-10 md:py-16 lg:py-24 bg-muted/30 border-y border-border">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
 <div>
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
 Related Analysis
 </h2>
 <p className="text-lg text-muted-foreground">
 Continue reading our latest professional updates.
 </p>
 </div>
 <Link 
 href="/insights" 
 className="hidden md:inline-flex items-center text-sm font-medium text-primary uppercase tracking-widest hover:text-accent transition-colors"
 >
 View all insights
 <ChevronRight className="ml-1 h-4 w-4" />
 </Link>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {relatedInsights.map((ri) => (
 <InsightCard key={ri.id} insight={ri} />
 ))}
 </div>
 
 <div className="mt-10 flex justify-center md:hidden">
 <Link 
 href="/insights" 
 className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent w-full uppercase tracking-widest"
 >
 View all insights
 </Link>
 </div>
 </div>
 </section>
 )}

 {/* Contact Section */}
 <CTASection 
 title="Require specialized advisory?"
 description="Our partners are available to discuss how these regulatory updates specifically impact your organization's compliance architecture."
 primaryActionLabel="Contact the Firm"
 primaryActionHref="/contact"
 />
 </div>
 );
}
