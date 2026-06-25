import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation quote from Fix It Up Pty Ltd for your commercial shopfitting, joinery or fitout project in Brisbane & South East Queensland.",
  alternates: {
    canonical: "/get-a-quote",
  },
  openGraph: {
    title: "Get a Free Quote | Fix It Up Pty Ltd",
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
