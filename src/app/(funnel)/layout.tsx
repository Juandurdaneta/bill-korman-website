import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get The 168 Game Book Free | Bill Korman",
  description: "Get your FREE copy of The 168 Game: Time Ownership vs. Time Management. Just cover $5.95 shipping. The proven framework that took Bill Korman from bankruptcy to building multiple 7-figure businesses.",
  robots: "noindex, nofollow", // Funnel pages shouldn't be indexed
};

export default function FunnelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // No Header/Footer for funnel pages - just pass children through
  return <>{children}</>;
}
