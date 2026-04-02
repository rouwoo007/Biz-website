export interface Location {
  slug: string;
  name: string;
  description: string;
  suburbs: string[];
}

export const locations: Location[] = [
  {
    slug: "brisbane",
    name: "Brisbane",
    description:
      "Fix It Up Pty Ltd delivers premium commercial shopfitting and joinery services across Brisbane and its greater metropolitan area. From the CBD to inner and outer suburbs, our QBCC-licensed team manages every phase of your fitout — design, manufacturing and installation — with strict attention to quality, budget and programme. Whether you are opening a new cafe, refitting a retail store or fitting out a medical practice, we bring 15+ years of Brisbane commercial experience to every project.",
    suburbs: [
      "Brisbane CBD",
      "South Brisbane",
      "Fortitude Valley",
      "West End",
      "Newstead",
      "Teneriffe",
      "Chermside",
      "Indooroopilly",
    ],
  },
  {
    slug: "ipswich",
    name: "Ipswich",
    description:
      "Fix It Up Pty Ltd brings quality commercial shopfitting and fitout expertise to Ipswich and the surrounding region. As one of Queensland's fastest-growing corridors, Ipswich presents exciting fitout opportunities in retail, hospitality, healthcare and office sectors. Our team is well versed in the approvals landscape and construction environment west of Brisbane, enabling smooth project delivery from Ipswich CBD through to Springfield and Ripley.",
    suburbs: [
      "Ipswich CBD",
      "Springfield",
      "Springfield Lakes",
      "Ripley",
      "Redbank Plains",
      "Goodna",
      "Booval",
      "Brassall",
    ],
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    description:
      "Fix It Up Pty Ltd provides expert commercial shopfitting and fitout services throughout the Gold Coast — from Coomera to Coolangatta. Our team understands the pace and presentation standards of the Gold Coast hospitality, retail and commercial sectors, delivering polished fitouts that stand out in a competitive market. We self-perform joinery manufacturing in our own Brisbane workshop, giving Gold Coast clients faster lead times and tighter quality control.",
    suburbs: [
      "Surfers Paradise",
      "Broadbeach",
      "Robina",
      "Southport",
      "Burleigh Heads",
      "Coolangatta",
      "Helensvale",
      "Coomera",
    ],
  },
  {
    slug: "sunshine-coast",
    name: "Sunshine Coast",
    description:
      "Fix It Up Pty Ltd serves the Sunshine Coast with the same high standard of commercial shopfitting and joinery that Brisbane businesses rely on. From Caloundra to Noosa, our crews are experienced in delivering coastal-inspired retail fitouts, professional office environments and hospitality venues on time and within budget. Our in-house joinery capability means bespoke cabinetry and millwork built specifically for each Sunshine Coast project.",
    suburbs: [
      "Maroochydore",
      "Mooloolaba",
      "Caloundra",
      "Noosa Heads",
      "Buderim",
      "Nambour",
      "Coolum Beach",
      "Kawana Waters",
    ],
  },
  {
    slug: "queensland",
    name: "Queensland",
    description:
      "Fix It Up Pty Ltd operates throughout Queensland, providing commercial shopfitting, joinery manufacturing and fitout services to businesses in regional centres and beyond. From Toowoomba and the Darling Downs to Logan, the Fraser Coast and Cairns, our team travels to deliver the same high-quality results our Brisbane clients expect. With our own workshop and a proven network of trade partners, we can manage full turnkey fitout projects anywhere in the state.",
    suburbs: [
      "Toowoomba",
      "Logan Central",
      "Browns Plains",
      "Beenleigh",
      "Caboolture",
      "Redcliffe",
      "Hervey Bay",
      "Townsville",
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}
