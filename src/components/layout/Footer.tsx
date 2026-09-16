import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col">
              <span className="font-heading font-bold text-2xl text-white leading-tight">
                {siteConfig.name}
              </span>
              <span className="text-xs text-primary-foreground/70 font-medium tracking-widest uppercase">
                Chartered Accountants
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-lg text-white">Firm</h3>
            <nav className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/partners" className="hover:text-white transition-colors">Our Partners</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-lg text-white">Resources</h3>
            <nav className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <Link href="/insights" className="hover:text-white transition-colors">Insights & Articles</Link>
              <Link href="/tools" className="hover:text-white transition-colors">Calculators & Tools</Link>
              <Link href="/portal" className="hover:text-white transition-colors">Client Portal</Link>
              <Link href="/tools/checklists" className="hover:text-white transition-colors">Compliance Checklists</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-lg text-white">Contact</h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-primary-foreground/80">
              <p>{siteConfig.contact.address}</p>
              <p>Email: <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">{siteConfig.contact.email}</a></p>
              <p>Phone: <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">{siteConfig.contact.phone}</a></p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {currentYear} {siteConfig.name}. All rights reserved. FRN: {siteConfig.frn}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
