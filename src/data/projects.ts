export interface Project {
  id: number;
  name: string;
  slug: string;
  type: string;
  typeLabel: string;
  floorplan: string;
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
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_264854d34649419e9cd46d16f2d32589~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_a9a6041dd1a040b2b3d4f86025347ca6~mv2.png",
    description:
      "Complete retail shopfitting for Cindy Chow, including custom joinery, display fixtures, and branded signage. Delivered to a premium finish specification in Brisbane.",
  },
  {
    id: 23,
    name: "Cocobliss",
    slug: "cocobliss",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_df3b974c660e42b9aef0da93c7e9a0b0~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_df4c0094b9e34910875a2869640de691~mv2.jpeg",
    description:
      "Full hospitality fitout for Cocobliss featuring custom counter joinery, seating areas, and a welcoming customer experience space.",
  },
  {
    id: 32,
    name: "The Matriarch",
    slug: "the-matriarch",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_bf3bfab1403249ec90f8225bca8297b5~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_f7cce4e5bbc940a3a9a492a720482eab~mv2.jpeg",
    description:
      "Hospitality fitout for The Matriarch, encompassing full interior build, custom bar joinery, feature lighting, and bespoke furniture packages.",
  },
  {
    id: 70,
    name: "ISPA Kebab",
    slug: "ispa-kebab",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_49e87b1e229945c895d26845180f001f~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_fb3dfd58c90c4e1ab140df40bcdd35aa~mv2.jpg",
    description:
      "Food and beverage fitout for ISPA Kebab including commercial kitchen installation, counter displays, signage, and customer seating area.",
  },
  {
    id: 63,
    name: "Kulture Kebab",
    slug: "kulture-kebab",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_d03ebc0d449f406b8fedd3700e299503~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_4052ed5542e64ff49a3c9f27a73ae0c3~mv2.jpg",
    description:
      "Complete food and beverage shopfitting for Kulture Kebab with custom joinery, commercial kitchen setup, and branded interior finishes.",
  },
  {
    id: 15,
    name: "Andersens Flooring",
    slug: "andersens-flooring",
    type: "retail",
    typeLabel: typeLabelMap["retail"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_66beb7cf4ded404ea9835f8892891b77~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_46c2ee710b6d4b7ea599045fae80cd65~mv2.jpg",
    description:
      "Retail showroom fitout for Andersens Flooring featuring product display systems, custom cabinetry, consultation areas, and branded shopfront signage.",
  },
  {
    id: 27,
    name: "Little Locals",
    slug: "little-locals",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_8f4775294be443f097555d3e2f21c215~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_e591d6e71f5e46f69d585b51a7f09f08~mv2.jpeg",
    description:
      "Hospitality fitout for Little Locals including full interior build, custom counter and service area joinery, and a warm, inviting design palette.",
  },
  {
    id: 36,
    name: "Soul Pantry",
    slug: "soul-pantry",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_90f7d5c7560a46f2ae876e453167b850~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_a6e57ee4a5fd4f338dbfedb41e636f7d~mv2.jpg",
    description:
      "Full hospitality fitout for Soul Pantry with bespoke joinery, feature walls, commercial kitchen equipment, and customer dining area.",
  },
  {
    id: 20,
    name: "Metro Medical Centre",
    slug: "metro-medical-centre",
    type: "medical",
    typeLabel: typeLabelMap["medical"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_a2643771c94c49a5bbd3a56ce04822bb~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_b645296c38e446e89662080bf44a5196~mv2.jpeg",
    description:
      "Medical centre fitout including compliant consultation rooms, reception area, waiting room, and treatment spaces built to health infrastructure standards.",
  },
  {
    id: 69,
    name: "Melt Brothers Chermside",
    slug: "melt-brothers-chermside",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_f638edb0be0449fc98413a85f9302271~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_8683d42c8e1c48debac328572499e8cf~mv2.jpg",
    description:
      "Food and beverage fitout for Melt Brothers at Chermside including custom counter, commercial kitchen, branded interior elements, and seating.",
  },
  {
    id: 24,
    name: "Hawkers Lane",
    slug: "hawkers-lane",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_93413117c929437e801f6d39cb39eb46~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_e68fed9b5f824745b0d802e0fa0bce77~mv2.jpg",
    description:
      "Complete food hall fitout for Hawkers Lane with vendor stalls, shared seating precinct, custom joinery, and integrated signage systems.",
  },
  {
    id: 33,
    name: "Healing Stone",
    slug: "healing-stone",
    type: "wellness",
    typeLabel: typeLabelMap["wellness"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_a87f54292c3d4885b868c4df18788a9b~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_bf6eae44d6fe439f8f3217e98e3d814d~mv2.jpg",
    description:
      "Wellness studio fitout for Healing Stone featuring treatment rooms, reception joinery, calming interior finishes, and a relaxing client experience space.",
  },
  {
    id: 40,
    name: "Mister Cuts",
    slug: "mister-cuts",
    type: "retail",
    typeLabel: typeLabelMap["retail"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_4ff11149025d45d0a2f264b402075f52~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_2dca920d709940c5ad999bf5902d1d66~mv2.jpg",
    description:
      "Retail fitout for Mister Cuts including custom cabinetry, workstations, reception counter, and branded interior design.",
  },
  {
    id: 41,
    name: "Origin Kebabs",
    slug: "origin-kebabs",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_07a83a9453e943029b6c092e8eebe647~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_bf0b87f0cf164520b7de96f260005fad~mv2.jpg",
    description:
      "Food and beverage shopfitting for Origin Kebabs featuring commercial kitchen, custom service counter, menu displays, and customer seating.",
  },
  {
    id: 49,
    name: "Turquoise Kebab",
    slug: "turquoise-kebab",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_a44f2463eddd4a7d9769fe81b60fa18b~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_df5acce2eff142aca901b7a0f5dd170b~mv2.jpg",
    description:
      "Complete fitout for Turquoise Kebab including custom joinery, commercial cooking equipment installation, branded signage, and customer area.",
  },
  {
    id: 11,
    name: "7 Cup",
    slug: "7-cup",
    type: "cafe",
    typeLabel: typeLabelMap["cafe"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_1e28ea330e5b4d17856922b3c84c2526~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_1224f5e3b6b847b9aefa960d5f11422f~mv2.jpg",
    description:
      "Cafe fitout for 7 Cup featuring custom brew bar joinery, espresso machine installation, seating area, and warm interior finishes.",
  },
  {
    id: 19,
    name: "Origin Kebab",
    slug: "origin-kebab",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_a98128008199463ba52f2f585f1e0c93~mv2.jpg",
    photo:
      "https://static.wixstatic.com/media/27e9c0_327f575e36da49abb0087b231c3cbf73~mv2.jpg",
    description:
      "Food and beverage fitout for Origin Kebab with full kitchen build, service counter, customer area, and branded interior elements.",
  },
  {
    id: 80,
    name: "Hey Tea",
    slug: "hey-tea",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_1e28ea330e5b4d17856922b3c84c2526~mv2.jpg",
    photo:
      "/images/hero-fitout.jpg",
    description:
      "Full hospitality fitout for Hey Tea featuring custom counter joinery, tea preparation area, interior finishes, and a welcoming customer experience space.",
  },
  {
    id: 81,
    name: "Cafe 107",
    slug: "cafe-107",
    type: "cafe",
    typeLabel: typeLabelMap["cafe"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_1e28ea330e5b4d17856922b3c84c2526~mv2.jpg",
    photo:
      "/images/Curva_107 Coffee_1.jpg",
    description:
      "Complete cafe fitout for Cafe 107 including espresso bar joinery, commercial kitchen installation, customer seating area, and modern interior design.",
  },
  {
    id: 82,
    name: "RoRo",
    slug: "roro",
    type: "hospitality",
    typeLabel: typeLabelMap["hospitality"],
    floorplan:
      "https://static.wixstatic.com/media/27e9c0_1e28ea330e5b4d17856922b3c84c2526~mv2.jpg",
    photo:
      "/images/DSC00398.jpg",
    description:
      "Hospitality fitout for RoRo featuring custom bar and counter joinery, commercial kitchen setup, branded interior finishes, and dining area.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
