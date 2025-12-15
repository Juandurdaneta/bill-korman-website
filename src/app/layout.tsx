import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The 168 Game | Bill Korman - Time Ownership vs Time Management",
  description: "Reclaim 20+ hours per week without sacrificing revenue. The proven framework entrepreneurs use to scale past 6-figures while working less. By Bill Korman, Navy Veteran & Best-Selling Author.",
  keywords: ["time management", "time ownership", "entrepreneur coaching", "productivity", "Bill Korman", "168 game", "business coaching"],
  authors: [{ name: "Bill Korman" }],
  openGraph: {
    title: "The 168 Game | Time Ownership Framework by Bill Korman",
    description: "Stop managing time. Start owning it. The proven framework entrepreneurs use to reclaim 20+ hours weekly.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 168 Game | Bill Korman",
    description: "Reclaim 20+ hours per week without sacrificing revenue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0a0a0f] text-[#f8f8fa]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
