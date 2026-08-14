import type { Metadata } from "next";
import { Cinzel, Manrope, Cormorant_Garamond } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ekklesia — Simple tools for your whole church",
    template: "%s · Ekklesia",
  },
  description:
    "Ekklesia helps churches manage people, events, and giving — and support prayer and spiritual growth — in one safe place.",
  openGraph: {
    title: "Ekklesia",
    description:
      "One simple home for your whole church. People, events, giving, and spiritual life — together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cinzel.variable} ${manrope.variable} ${cormorant.variable} font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200`}
      >
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
