import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Commercial Fitout Project Portfolio",
    template: "%s | Fix It Up Pty Ltd",
  },
  description:
    "Browse our portfolio of completed commercial shopfitting, joinery & fitout projects across Brisbane & SEQ. See our work, then get a quote.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Commercial Fitout Project Portfolio | Fix It Up Pty Ltd",
    description:
      "View our portfolio of completed commercial shopfitting and fitout projects in Brisbane & SEQ.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
