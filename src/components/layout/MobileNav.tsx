"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
 Sheet,
 SheetContent,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/data/siteConfig";

interface MobileNavProps {
 links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
 const [open, setOpen] = useState(false);
 const pathname = usePathname();

 return (
 <div className="lg:hidden">
 <Sheet open={open} onOpenChange={setOpen}>
 <SheetTrigger render={<Button variant="ghost" size="icon" className="h-12 w-12" aria-label="Open Navigation" />}>
 <Menu className="h-6 w-6" />
 </SheetTrigger>
        <SheetContent side="right" className="fixed inset-y-0 right-0 h-full w-[80vw] sm:w-[400px] bg-background border-l border-border p-6 shadow-xl flex flex-col z-50 overflow-y-auto">
          <SheetHeader className="mb-8 border-b border-border pb-4 text-left">
            <SheetTitle className="font-heading font-bold text-xl text-primary">
              {siteConfig.name}
            </SheetTitle>
          </SheetHeader>
 <div className="flex flex-col gap-6">
 <nav className="flex flex-col gap-4">
 {links.map((link) => (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setOpen(false)}
 className={cn(
 "text-lg font-medium transition-colors hover:text-primary py-2",
 pathname.startsWith(link.href) ? "text-primary" : "text-foreground"
 )}
 >
 {link.label}
 </Link>
 ))}
 <Link
 href="/contact"
 onClick={() => setOpen(false)}
 className="mt-4 inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
 >
 Contact Us
 </Link>
 </nav>
 <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground border-t pt-6">
 <span>{siteConfig.contact.phone}</span>
 <span>{siteConfig.contact.email}</span>
 </div>
 </div>
 </SheetContent>
 </Sheet>
 </div>
 );
}
