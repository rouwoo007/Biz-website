export interface Location {
  slug: string;
  name: string;
  description: string;
  suburbs: string[];
  /** Local authority responsible for approvals in this area (omitted for the state-wide page). */
  council?: string;
  /** Location-specific Q&A — adds unique on-page content and powers FAQ schema. */
  faqs: { question: string; answer: string }[];
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
    council: "Brisbane City Council",
    faqs: [
      {
        question: "Which areas of Brisbane do you cover for shopfitting?",
        answer:
          "We deliver commercial shopfitting and fitouts right across Brisbane — from the CBD, South Brisbane, Fortitude Valley and West End through to Newstead, Teneriffe, Chermside and Indooroopilly. Our Sumner Park workshop is on the western side of the city, so we cover the greater metropolitan area comfortably.",
      },
      {
        question: "Do you handle Brisbane City Council approvals?",
        answer:
          "Yes. We regularly lodge and manage building approvals and development applications through Brisbane City Council and private certifiers, including change-of-use and food-premises requirements, as part of our full-service fitout offering.",
      },
      {
        question: "Where is your workshop located in Brisbane?",
        answer:
          "Our joinery workshop is in Sumner Park, just off the Centenary Motorway in Brisbane's west. Manufacturing locally means tighter quality control, shorter delivery runs to Brisbane sites and reliable lead times on custom joinery.",
      },
      {
        question: "What types of businesses do you fit out in Brisbane?",
        answer:
          "We work across cafes and restaurants, retail stores, medical and dental practices, offices, gyms and wellness studios throughout Brisbane — from single-tenancy shopfits to full turnkey commercial fitouts.",
      },
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
    council: "Ipswich City Council",
    faqs: [
      {
        question: "Do you service the Ipswich and Springfield region?",
        answer:
          "Yes. We cover Ipswich CBD, Springfield, Springfield Lakes, Ripley, Redbank Plains, Goodna, Booval and Brassall — one of Queensland's fastest-growing corridors for retail, hospitality and healthcare fitouts.",
      },
      {
        question: "Do you manage Ipswich City Council approvals?",
        answer:
          "We do. Our team is familiar with the Ipswich City Council approvals landscape and coordinates building approvals, development applications and certifications so your fitout stays on programme.",
      },
      {
        question: "How far is Ipswich from your workshop?",
        answer:
          "Our Sumner Park workshop sits between Brisbane and Ipswich, a short run down the Centenary Motorway. That proximity keeps travel times short and delivery of custom joinery to Ipswich sites quick and predictable.",
      },
      {
        question: "Can you fit out new tenancies in Springfield's growth precincts?",
        answer:
          "Absolutely. We regularly fit out new retail, cafe, medical and office tenancies across the Springfield and Ripley growth areas, working within centre fitout guides and tight opening deadlines.",
      },
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
    council: "City of Gold Coast",
    faqs: [
      {
        question: "Which Gold Coast suburbs do you cover?",
        answer:
          "We deliver commercial fitouts from Coomera and Helensvale through Southport, Surfers Paradise, Broadbeach and Robina down to Burleigh Heads and Coolangatta — the full length of the Gold Coast.",
      },
      {
        question: "Do you handle City of Gold Coast approvals?",
        answer:
          "Yes. We coordinate building approvals, development applications and certification through the City of Gold Coast and private certifiers, including the food-premises and change-of-use requirements common to hospitality and retail fitouts.",
      },
      {
        question: "Are you set up to work on the Gold Coast from Brisbane?",
        answer:
          "We are. We manufacture joinery in our own Brisbane workshop and deliver to the Gold Coast on a planned programme, giving Gold Coast clients faster lead times and tighter quality control than relying on a third-party supplier's queue.",
      },
      {
        question: "Do you understand Gold Coast presentation standards?",
        answer:
          "Yes. The Gold Coast hospitality and retail market moves fast and expects a polished finish. We deliver brand-aligned fitouts that stand out in a competitive market while still meeting your opening date and budget.",
      },
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
    council: "Sunshine Coast Council",
    faqs: [
      {
        question: "Do you cover the whole Sunshine Coast?",
        answer:
          "Yes. We deliver commercial fitouts from Caloundra and Kawana Waters through Mooloolaba, Maroochydore and Buderim up to Coolum Beach, Nambour and Noosa Heads across the Sunshine Coast.",
      },
      {
        question: "Which council approvals apply on the Sunshine Coast?",
        answer:
          "Most of the region falls under Sunshine Coast Council, with Noosa Shire Council covering the Noosa area. We coordinate the relevant building approvals, development applications and certifications for your specific tenancy.",
      },
      {
        question: "Can you build custom joinery for a Sunshine Coast fitout?",
        answer:
          "Yes. Our in-house joinery capability means bespoke cabinetry, counters and millwork are built and finished in our own workshop specifically for each Sunshine Coast project, then delivered and installed by our team.",
      },
      {
        question: "Do you fit out coastal cafes and hospitality venues?",
        answer:
          "We do. Coastal-inspired cafe, restaurant and retail fitouts are a regular part of our Sunshine Coast work, alongside professional offices and medical suites — all delivered on time and within budget.",
      },
    ],
  },
  {
    slug: "logan",
    name: "Logan",
    description:
      "Fix It Up Pty Ltd delivers commercial shopfitting, joinery manufacturing and full fitout services throughout the City of Logan. Positioned between Brisbane and the Gold Coast, Logan is a fast-growing commercial hub where new retail precincts, medical centres, cafes and office suites are opening across Springwood, Browns Plains, Beenleigh and Loganholme. Our QBCC-licensed team understands the local council approvals process and the practicalities of fitting out within established shopping centres and standalone tenancies alike. Because we manufacture our own joinery in our Sumner Park workshop just down the motorway, Logan clients benefit from short travel times, tight quality control and reliable lead times. From a single counter to a complete turnkey fitout, we manage every trade under one contract so your doors open on schedule and on budget.",
    suburbs: [
      "Logan Central",
      "Springwood",
      "Browns Plains",
      "Beenleigh",
      "Shailer Park",
      "Loganholme",
      "Meadowbrook",
      "Marsden",
    ],
    council: "Logan City Council",
    faqs: [
      {
        question: "Which parts of Logan do you service?",
        answer:
          "We deliver commercial shopfitting and fitouts across the City of Logan, including Logan Central, Springwood, Browns Plains, Beenleigh, Shailer Park, Loganholme, Meadowbrook and Marsden.",
      },
      {
        question: "Do you manage Logan City Council approvals?",
        answer:
          "Yes. Our QBCC-licensed team understands the Logan City Council approvals process and coordinates building approvals and certifications for both shopping-centre tenancies and standalone sites.",
      },
      {
        question: "How quickly can you get to a Logan project?",
        answer:
          "Logan sits between Brisbane and the Gold Coast, a short run down the motorway from our Sumner Park workshop. Short travel times mean tight quality control and reliable lead times on every Logan fitout.",
      },
      {
        question: "Can you handle a complete turnkey fitout in Logan?",
        answer:
          "Absolutely. From a single counter to a full turnkey fitout, we manage every trade under one contract so your Logan project opens on schedule and on budget.",
      },
    ],
  },
  {
    slug: "toowoomba",
    name: "Toowoomba",
    description:
      "Fix It Up Pty Ltd brings Brisbane-grade commercial shopfitting and joinery to Toowoomba and the wider Darling Downs. As Queensland's largest inland city, Toowoomba supports a thriving mix of retail, hospitality, healthcare and professional services, and its continued growth is driving demand for well-executed commercial fitouts. Our experienced crews regularly make the trip up the range to deliver projects across Toowoomba CBD, Newtown, Wilsonton, Kearneys Spring and the surrounding suburbs, applying the same standards of workmanship our metropolitan clients expect. With custom joinery built and finished in our own Sumner Park workshop, we control quality and timelines from the first drawing to final handover. Whether you are opening a cafe, refitting a retail store or fitting out a medical practice, we coordinate every trade under a single fixed-price contract.",
    suburbs: [
      "Toowoomba CBD",
      "Newtown",
      "Wilsonton",
      "Kearneys Spring",
      "Glenvale",
      "Highfields",
      "Drayton",
      "Middle Ridge",
    ],
    council: "Toowoomba Regional Council",
    faqs: [
      {
        question: "Do you travel to Toowoomba for commercial fitouts?",
        answer:
          "Yes. Our crews regularly make the trip up the range to deliver projects across Toowoomba CBD, Newtown, Wilsonton, Kearneys Spring, Glenvale, Highfields, Drayton and Middle Ridge, applying the same standards our metropolitan clients expect.",
      },
      {
        question: "Do you handle Toowoomba Regional Council approvals?",
        answer:
          "We do. We coordinate building approvals, development applications and certifications through Toowoomba Regional Council and private certifiers as part of our full-service fitout offering.",
      },
      {
        question: "How do you keep quality consistent on a Toowoomba project from Brisbane?",
        answer:
          "We build and finish the custom joinery in our own Sumner Park workshop and deliver it to site, so we control quality and timelines from the first drawing to final handover regardless of the distance up the range.",
      },
      {
        question: "What types of fitouts do you deliver in Toowoomba?",
        answer:
          "Toowoomba supports a thriving mix of retail, hospitality, healthcare and professional services. Whether you are opening a cafe, refitting a retail store or fitting out a medical practice, we coordinate every trade under a single fixed-price contract.",
      },
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
    council: "Local councils statewide",
    faqs: [
      {
        question: "Do you work outside South East Queensland?",
        answer:
          "Yes. We operate throughout Queensland, from Toowoomba and the Darling Downs to Logan, the Fraser Coast, Caboolture, Redcliffe and as far as Hervey Bay and Townsville for the right project.",
      },
      {
        question: "How do you manage approvals across different Queensland councils?",
        answer:
          "Each region has its own local authority, so we coordinate the relevant building approvals, development applications and certifications for your specific council and tenancy as part of the project.",
      },
      {
        question: "Can you deliver a full turnkey fitout in regional Queensland?",
        answer:
          "Absolutely. With our own Brisbane workshop and a proven network of trade partners, we can manage full turnkey fitout projects anywhere in the state, travelling to deliver the same high-quality results our Brisbane clients expect.",
      },
      {
        question: "Does working regionally affect joinery quality or lead times?",
        answer:
          "No. Because we manufacture joinery in our own workshop and deliver it finished to site, quality control and lead times stay in our hands wherever the project is located in Queensland.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}
