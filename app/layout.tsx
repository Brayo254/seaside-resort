import type { Metadata } from "next";
import { Oswald, Quattrocento, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistOswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700']
});

const geistQuattrocento = Quattrocento({
  variable: "--font-quattrocento",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Seaside Resort | Beach & Resort in Kenya",
  description: "Experience paradise at Seaside Resort. Luxury beachfront accommodation, stunning wedding venues, and exceptional meeting facilities in Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistOswald.variable, geistQuattrocento.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}