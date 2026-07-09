import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleAnalyticsPageView from "@/components/GoogleAnalyticsPageView";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fixitup.au"),
  title: {
    default: "Fix It Up | Commercial Shopfitting & Joinery Brisbane",
    template: "%s | Fix It Up Pty Ltd",
  },
  description:
    "Fix It Up Pty Ltd — QBCC licensed commercial shopfitting, joinery & fitout specialists in Brisbane & South East Queensland.",
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
    url: "https://fixitup.au",
    siteName: "Fix It Up Pty Ltd",
    title: "Fix It Up Pty Ltd | Commercial Shopfitting & Joinery Brisbane",
    description:
      "QBCC licensed commercial shopfitting, joinery & fitout specialists in Brisbane & South East Queensland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix It Up Pty Ltd | Commercial Shopfitting & Joinery Brisbane",
    description:
      "QBCC licensed commercial shopfitting, joinery & fitout specialists in Brisbane & SEQ.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={geistSans.variable}>
      <body className="font-sans bg-white text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:rounded-lg focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <GoogleAnalyticsPageView />
        </Suspense>
        <JsonLd />
        <Navbar />
        <main id="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
