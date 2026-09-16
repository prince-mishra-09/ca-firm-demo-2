"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MobileNav } from "./MobileNav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Phone, Mail } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/partners", label: "Partners" },
    { href: "/insights", label: "Insights" },
    { href: "/tools", label: "Tools" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-between py-2 border-b border-border text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              {siteConfig.contact.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              {siteConfig.contact.email}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/portal" className="hover:text-primary transition-colors">
              Client Portal
            </Link>
          </div>
        </div>

        {/* Main Nav */}
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex flex-col">
              <span className="font-heading font-bold text-xl text-primary leading-tight">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
                Chartered Accountants
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-2",
                    pathname.startsWith(link.href)
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[var(--color-gold-accent)]"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover:border-accent"
            >
              Enquire
            </Link>
          </div>

          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
}
