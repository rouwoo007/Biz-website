export const company = {
  name: "Fix It Up Pty Ltd",
  abn: "37 166 086 835",
  qbcc: "15059346",
  tagline: "Commercial Shopfitting & Joinery — Brisbane & South East Queensland",
  address: {
    street: "3A/10 Jijaws Street",
    suburb: "Sumner Park",
    state: "QLD",
    postcode: "4074",
  },
  phone: "[ADD YOUR NUMBER]",
  email: "[ADD YOUR EMAIL]",
  yearsExperience: "15+",
  projectsCompleted: "500+",
} as const;

export type Company = typeof company;
