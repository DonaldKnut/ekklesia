import type { Metadata } from "next";
import { Instrument_Serif, Sora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
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
    <html lang="en">
      <body className={`${instrument.variable} ${sora.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
