import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fixitup.com.au"),
  title: {
    default: "Fix It Up Pty Ltd | Commercial Shopfitting & Joinery Brisbane",
    template: "%s | Fix It Up Pty Ltd",
  },
  description:
    "Fix It Up Pty Ltd — QBCC licensed commercial shopfitting, joinery manufacturing & fitout specialists in Brisbane & South East Queensland. Call for a free quote.",
  keywords: [
    "commercial shopfitting Brisbane",
    "joinery manufacturing QLD",
    "cafe fitout Brisbane",
    "retail fitout Queensland",
    "office fitout Brisbane",
    "medical fitout Brisbane",
    "commercial fitout South East Queensland",
    "QBCC licensed shopfitter",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Fix It Up Pty Ltd",
    title: "Fix It Up Pty Ltd | Commercial Shopfitting & Joinery Brisbane",
    description:
      "QBCC licensed commercial shopfitting, joinery & fitout specialists in Brisbane & South East Queensland.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="font-sans bg-navy text-white antialiased">
        <GoogleAnalytics />
        <JsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
