import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Our Projects",
    template: "%s | Fix It Up Pty Ltd",
  },
  description:
    "Browse Fix It Up Pty Ltd's portfolio of completed commercial shopfitting, joinery and fitout projects across Brisbane & South East Queensland.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | Fix It Up Pty Ltd",
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
