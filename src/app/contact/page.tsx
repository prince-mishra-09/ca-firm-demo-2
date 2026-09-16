import { ContactForm } from "@/components/shared/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} for specialized financial and regulatory advisory services.`,
};

const faqs = [
  {
    question: "How should I send documents?",
    answer: "For initial inquiries, no sensitive documents are required. Once engaged, we utilize secure, encrypted client portals for all document transfers to maintain strict confidentiality."
  },
  {
    question: "How quickly does the firm respond?",
    answer: "We aim to acknowledge all new inquiries within 24 business hours. Complex regulatory queries may require preliminary partner review before a detailed response is provided."
  },
  {
    question: "Can consultations be handled remotely?",
    answer: "Yes, our partners are fully equipped to conduct secure video consultations for domestic and international clients who cannot visit our corporate office."
  },
  {
    question: "What information should I prepare?",
    answer: "For an initial discussion, please have a brief overview of your organization's structure, the specific regulatory issue or advisory need, and relevant timelines."
  }
];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-background">
      
      {/* Page Header (Minimal) */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6 block">
              CONTACT THE FIRM
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
              Let's discuss your requirement.
            </h1>
          </div>
        </div>
      </section>

      {/* Main Split Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Details & Actions */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-12">
                
                {/* Contact Details */}
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Corporate Office</h3>
                      <address className="not-italic text-foreground font-medium text-lg leading-relaxed">
                        {siteConfig.contact.address.split(',').map((line, i) => (
                          <span key={i} className="block">{line.trim()}{i < siteConfig.contact.address.split(',').length - 1 ? ',' : ''}</span>
                        ))}
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Direct Line</h3>
                      <p className="text-foreground font-medium text-lg">{siteConfig.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Email Desk</h3>
                      <p className="text-foreground font-medium text-lg">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Working Hours</h3>
                      <div className="space-y-1 text-foreground font-medium text-base">
                        <div className="flex justify-between w-56 border-b border-border pb-1">
                          <span>Mon – Fri</span>
                          <span>09:30 AM – 06:30 PM</span>
                        </div>
                        <div className="flex justify-between w-56 border-b border-border pb-1">
                          <span>Saturday</span>
                          <span className="text-muted-foreground">By Appointment</span>
                        </div>
                        <div className="flex justify-between w-56">
                          <span>Sunday</span>
                          <span className="text-muted-foreground">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-8 border-t border-border">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Direct Communication</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex-1 inline-flex h-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80 border border-border">
                      <Phone className="mr-2 h-4 w-4" /> Call Us
                    </a>
                    <a href={`mailto:${siteConfig.contact.email}`} className="flex-1 inline-flex h-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80 border border-border">
                      <Mail className="mr-2 h-4 w-4" /> Email Us
                    </a>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex h-12 items-center justify-center rounded-md bg-green-50 text-green-700 hover:bg-green-100 font-medium transition-colors border border-green-200">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Office Map Section */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-2xl border border-border overflow-hidden h-[400px] flex items-center justify-center relative shadow-sm">
            {/* Visual map placeholder */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
            <div className="relative z-10 flex flex-col items-center bg-background/90 p-6 rounded-xl border border-border backdrop-blur-sm">
              <MapPin className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-heading font-bold text-lg text-primary mb-1">Corporate Headquarters</h3>
              <p className="text-muted-foreground text-sm text-center max-w-xs">{siteConfig.contact.address}</p>
              <button className="mt-4 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors">
                View on Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Inquiry Guidelines
              </h2>
              <p className="text-lg text-muted-foreground">
                Common questions regarding engaging our services.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-heading font-bold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
