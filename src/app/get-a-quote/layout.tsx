import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Fitout Quote | Brisbane Shopfitting",
  description:
    "Request a free, no-obligation quote for your commercial shopfitting, joinery or fitout project across Brisbane & SEQ. QBCC licensed.",
  alternates: {
    canonical: "/get-a-quote",
  },
  openGraph: {
    title: "Free Fitout Quote | Brisbane Shopfitting",
    description:
      "Request a free quote for your commercial fitout project. QBCC licensed shopfitters serving Brisbane & SEQ.",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
