import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-sans",
});

const manrope = Manrope({
 subsets: ["latin"],
 variable: "--font-heading",
});

export const metadata: Metadata = {
 title: "CA Firm | Premium Accounting & Advisory",
 description: "Bespoke Chartered Accountancy, Tax Advisory, and Financial Consulting.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en" className="scroll-smooth">
 <body
 className={`${inter.variable} ${manrope.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased`}
 >
 <Navbar />
 <main className="flex-1">
 {children}
 </main>
 <Footer />
 </body>
 </html>
 );
}
