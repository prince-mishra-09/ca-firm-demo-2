export function HomeProcess() {
 const steps = [
 { number: "01", title: "Understand", description: "Comprehensive analysis of your current financial and regulatory position." },
 { number: "02", title: "Review", description: "Rigorous evaluation of applicable frameworks and compliance requirements." },
 { number: "03", title: "Advise", description: "Formulation of strategic recommendations and structured action plans." },
 { number: "04", title: "Execute", description: "Precise implementation of advisory and statutory filings." },
 { number: "05", title: "Follow through", description: "Continuous monitoring and proactive updates on regulatory changes." },
 ];

 return (
 <section className="py-10 md:py-16 lg:py-20 bg-background">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col lg:flex-row gap-16">
 <div className="lg:w-1/3">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
 Engagement Process
 </h2>
 <p className="text-lg text-foreground/80 leading-relaxed">
 A systematic approach to professional engagements, ensuring thoroughness at every phase from initial assessment to final execution.
 </p>
 </div>
 
 <div className="lg:w-2/3">
 <div className="relative">
 {/* Vertical line for desktop */}
 <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block"></div>
 
 <div className="space-y-12">
 {steps.map((step, index) => (
 <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
 <div className="flex items-center md:items-start z-10">
 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg border-4 border-background shrink-0">
 {step.number}
 </div>
 {/* Mobile horizontal line */}
 <div className="h-px bg-border flex-grow ml-4 md:hidden"></div>
 </div>
 <div className="pt-1 md:pt-2">
 <h3 className="text-xl font-heading font-bold text-primary mb-2">{step.title}</h3>
 <p className="text-muted-foreground leading-relaxed">{step.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
