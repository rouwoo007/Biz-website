export interface Project {
  id: number;
  name: string;
  slug: string;
  type: string;
  typeLabel: string;
  /** Optional floorplan image. Not every project has one. */
  floorplan?: string;
  photo: string;
  description: string;
}

const typeLabelMap: Record<string, string> = {
  retail: "Retail",
  medical: "Medical",
  wellness: "Wellness",
  cafe: "Cafe",
  hospitality: "Hospitality",
};

export const filterCategories: { value: string; label: string }[] = [
  { value: "all", label: "All" },
  { value: "retail", label: "Retail" },
  { value: "medical", label: "Medical" },
  { value: "wellness", label: "Wellness" },
  { value: "cafe", label: "Cafe" },
  { value: "hospitality", label: "Hospitality" },
];

export const projects: Project[] = [
  {
    id: 61,
    name: "Cindy Chow",
    slug: "cindy-chow",
    type: "retail",
    typeLabel: typeLabelMap["retail"],
    floorplan: "/images/cindy-chow-floorplan.jpg",
    photo: "/images/cindy-chow.png",
    description:
      "Complete retail shopfitting for Cindy Chow, including custom joinery, display fixtures, and branded signage. Delivered to a premium finish specification in Brisbane.",
  },
  {
    id: 23,
    name: "Cocobliss",
    slug: "cocobliss",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/cocobliss-floorplan.jpg",
    photo: "/images/cocobliss.jpeg",
    description:
      "Full hospitality fitout for Cocobliss featuring custom counter joinery, seating areas, and a welcoming customer experience space.",
  },
  {
    id: 32,
    name: "The Matriarch",
    slug: "the-matriarch",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/the-matriarch-floorplan.jpg",
    photo: "/images/the-matriarch.jpeg",
    description:
      "Hospitality fitout for The Matriarch, encompassing full interior build, custom bar joinery, feature lighting, and bespoke furniture packages.",
  },
  {
    id: 70,
    name: "ISPA Kebab",
    slug: "ispa-kebab",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/ispa-kebab-floorplan.jpg",
    photo: "/images/ispa-kebab.jpg",
    description:
      "Food and beverage fitout for ISPA Kebab including commercial kitchen installation, counter displays, signage, and customer seating area.",
  },
  {
    id: 63,
    name: "Kulture Kebab",
    slug: "kulture-kebab",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/kulture-kebab-floorplan.jpg",
    photo: "/images/kulture-kebab.jpg",
    description:
      "Complete food and beverage shopfitting for Kulture Kebab with custom joinery, commercial kitchen setup, and branded interior finishes.",
  },
  {
    id: 15,
    name: "Andersens Flooring",
    slug: "andersens-flooring",
    type: "retail",
    typeLabel: typeLabelMap["retail"],
    floorplan: "/images/andersens-flooring-floorplan.jpg",
    photo: "/images/andersens-flooring.jpg",
    description:
      "Retail showroom fitout for Andersens Flooring featuring product display systems, custom cabinetry, consultation areas, and branded shopfront signage.",
  },
  {
    id: 27,
    name: "Little Locals",
    slug: "little-locals",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/little-locals-floorplan.jpg",
    photo: "/images/little-locals.jpeg",
    description:
      "Hospitality fitout for Little Locals including full interior build, custom counter and service area joinery, and a warm, inviting design palette.",
  },
  {
    id: 36,
    name: "Soul Pantry",
    slug: "soul-pantry",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/soul-pantry-floorplan.jpg",
    photo: "/images/soul-pantry.jpg",
    description:
      "Full hospitality fitout for Soul Pantry with bespoke joinery, feature walls, commercial kitchen equipment, and customer dining area.",
  },
  {
    id: 20,
    name: "Metro Medical Centre",
    slug: "metro-medical-centre",
    type: "medical",
    typeLabel: typeLabelMap["medical"],
    floorplan: "/images/metro-medical-centre-floorplan.jpg",
    photo: "/images/metro-medical-centre.jpeg",
    description:
      "Medical centre fitout including compliant consultation rooms, reception area, waiting room, and treatment spaces built to health infrastructure standards.",
  },
  {
    id: 69,
    name: "Melt Brothers Chermside",
    slug: "melt-brothers-chermside",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/melt-brothers-chermside-floorplan.jpg",
    photo: "/images/melt-brothers-chermside.jpg",
    description:
      "Food and beverage fitout for Melt Brothers at Chermside including custom counter, commercial kitchen, branded interior elements, and seating.",
  },
  {
    id: 25,
    name: "Big",
    slug: "big",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/big-floorplan.jpg",
    photo: "/images/big.jpg",
    description:
      "Complete hospitality fitout for Big, featuring custom counter and service joinery, commercial kitchen installation, branded interior finishes, and a welcoming customer area.",
  },
  {
    id: 24,
    name: "Hawkers Lane",
    slug: "hawkers-lane",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/hawkers-lane-floorplan.jpg",
    photo: "/images/hawkers-lane.jpg",
    description:
      "Complete food hall fitout for Hawkers Lane with vendor stalls, shared seating precinct, custom joinery, and integrated signage systems.",
  },
  {
    id: 33,
    name: "Healing Stone",
    slug: "healing-stone",
    type: "wellness",
    typeLabel: typeLabelMap["wellness"],
    floorplan: "/images/healing-stone-floorplan.jpg",
    photo: "/images/healing-stone.jpg",
    description:
      "Wellness studio fitout for Healing Stone featuring treatment rooms, reception joinery, calming interior finishes, and a relaxing client experience space.",
  },
  {
    id: 40,
    name: "Mister Cuts",
    slug: "mister-cuts",
    type: "retail",
    typeLabel: typeLabelMap["retail"],
    floorplan: "/images/mister-cuts-floorplan.jpg",
    photo: "/images/mister-cuts.jpg",
    description:
      "Retail fitout for Mister Cuts including custom cabinetry, workstations, reception counter, and branded interior design.",
  },
  {
    id: 41,
    name: "Origin Kebabs",
    slug: "origin-kebabs",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/origin-kebabs-floorplan.jpg",
    photo: "/images/origin-kebabs.jpg",
    description:
      "Food and beverage shopfitting for Origin Kebabs featuring commercial kitchen, custom service counter, menu displays, and customer seating.",
  },
  {
    id: 49,
    name: "Turquoise Kebab",
    slug: "turquoise-kebab",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/turquoise-kebab-floorplan.jpg",
    photo: "/images/turquoise-kebab.jpg",
    description:
      "Complete fitout for Turquoise Kebab including custom joinery, commercial cooking equipment installation, branded signage, and customer area.",
  },
  {
    id: 11,
    name: "7 Cup",
    slug: "7-cup",
    type: "cafe",
    typeLabel: typeLabelMap["cafe"],
    floorplan: "/images/7-cup-floorplan.jpg",
    photo: "/images/7-cup.jpg",
    description:
      "Cafe fitout for 7 Cup featuring custom brew bar joinery, espresso machine installation, seating area, and warm interior finishes.",
  },
  {
    id: 19,
    name: "Origin Kebab",
    slug: "origin-kebab",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan: "/images/origin-kebab-floorplan.jpg",
    photo: "/images/origin-kebab.jpg",
    description:
      "Food and beverage fitout for Origin Kebab with full kitchen build, service counter, customer area, and branded interior elements.",
  },
  {
    id: 80,
    name: "Hey Tea",
    slug: "hey-tea",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    photo: "/images/hero-fitout.webp",
    description:
      "Full hospitality fitout for Hey Tea featuring custom counter joinery, tea preparation area, interior finishes, and a welcoming customer experience space.",
  },
  {
    id: 81,
    name: "Cafe 107",
    slug: "cafe-107",
    type: "cafe",
    typeLabel: typeLabelMap["cafe"],
    photo: "/images/Curva_107 Coffee_1.webp",
    description:
      "Complete cafe fitout for Cafe 107 including espresso bar joinery, commercial kitchen installation, customer seating area, and modern interior design.",
  },
  {
    id: 82,
    name: "RoRo",
    slug: "roro",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    photo: "/images/DSC00398.webp",
    description:
      "Hospitality fitout for RoRo featuring custom bar and counter joinery, commercial kitchen setup, branded interior finishes, and dining area.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
