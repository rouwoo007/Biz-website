export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'shopfitting',
    title: 'Shopfitting',
    metaTitle: 'Shopfitting Brisbane | Commercial Shopfitters | Fix It Up',
    shortDescription:
      'End-to-end shopfitting solutions for retail, hospitality and commercial spaces across Brisbane and South East Queensland.',
    description:
      'From concept through to completion, Fix It Up Pty Ltd delivers high-quality shopfitting that transforms empty shells into fully functioning retail and commercial spaces. Our QBCC-licensed tradespeople manage every trade, timeline and detail so your doors open on schedule.',
    icon: 'store',
    features: [
      'Full project management from design through handover',
      'Custom joinery and display fixtures',
      'Flooring, ceiling and partition installation',
      'Electrical, plumbing and mechanical coordination',
      'Signage and branding integration',
      'Council approvals and certification support',
      'On-site safety and compliance management',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description:
          'We meet on-site or virtually to understand your vision, budget and timeline, and review existing plans to identify key requirements.',
      },
      {
        step: 2,
        title: 'Design & Quoting',
        description:
          'Our team prepares detailed shop drawings and a fixed-price quote covering all trades so there are no surprises on invoice day.',
      },
      {
        step: 3,
        title: 'Approvals & Scheduling',
        description:
          'We handle council and building approvals, book all subcontractors and issue a firm programme aligned to your lease dates.',
      },
      {
        step: 4,
        title: 'Construction',
        description:
          'Our site team manages daily progress, quality checks and communication so you stay informed without needing to be on-site constantly.',
      },
      {
        step: 5,
        title: 'Handover',
        description:
          'A thorough defects inspection is completed before keys are handed over, backed by a written warranty on workmanship.',
      },
    ],
    faqs: [
      {
        question: 'How long does a typical shopfit take?',
        answer:
          'Most retail shopfits range from 4 to 12 weeks depending on size and complexity. We provide a detailed programme at quoting stage.',
      },
      {
        question: 'Do you work after hours to minimise disruption?',
        answer:
          'Yes. We can schedule noisy or disruptive works outside trading hours when fitting out within an operating centre or tenancy.',
      },
      {
        question: 'Are you QBCC licensed?',
        answer:
          'Yes. Fix It Up Pty Ltd holds QBCC Licence 15059346 covering commercial building work in Queensland.',
      },
      {
        question: 'Can you manage council approvals?',
        answer:
          'Absolutely. We coordinate all development applications, building approvals and certifications as part of our full-service offering.',
      },
    ],
  },
  {
    slug: 'commercial-fitout',
    title: 'Commercial Fitout',
    metaTitle: 'Commercial Fitout Brisbane | Office & Retail Fitouts',
    shortDescription:
      'Turnkey commercial fitout services for offices, showrooms, gyms and mixed-use spaces throughout Brisbane and SEQ.',
    description:
      'Fix It Up Pty Ltd delivers complete commercial fitouts that align with your brand, workflow and budget. We self-perform joinery and manage every subcontractor, giving you a single point of contact from strip-out to final clean.',
    icon: 'building',
    features: [
      'Strip-out and make-good of existing tenancies',
      'Structural alterations and partition systems',
      'Custom joinery, millwork and built-ins',
      'Suspended ceilings and feature bulkheads',
      'Commercial flooring supply and installation',
      'Mechanical, electrical and hydraulic coordination',
      'Accessible design and DDA compliance',
    ],
    process: [
      {
        step: 1,
        title: 'Needs Analysis',
        description:
          'We assess your space, headcount, brand guidelines and operational requirements to define the scope clearly.',
      },
      {
        step: 2,
        title: 'Concept & Pricing',
        description:
          'Concept drawings and a comprehensive fixed-price proposal are prepared, allowing you to budget with confidence.',
      },
      {
        step: 3,
        title: 'Documentation & Approval',
        description:
          'Construction documentation is finalised, building approval is lodged and a construction programme is issued.',
      },
      {
        step: 4,
        title: 'Construction & Fitout',
        description:
          'Our crew coordinates all trades on-site with weekly progress reports and photos sent to you throughout the build.',
      },
      {
        step: 5,
        title: 'Practical Completion',
        description:
          'We complete a comprehensive defects rectification process before issuing practical completion and your warranty documents.',
      },
    ],
    faqs: [
      {
        question: 'What types of commercial spaces do you fitout?',
        answer:
          'We work across offices, showrooms, gyms, childcare centres, hospitality venues, medical suites, retail and mixed-use developments.',
      },
      {
        question: 'Can you work within a tenanted building?',
        answer:
          'Yes. We are experienced in working within occupied buildings and implement strict hoarding, dust control and noise management protocols.',
      },
      {
        question: 'Do you provide a fixed-price contract?',
        answer:
          'We provide a detailed fixed-price proposal so there are no hidden costs, subject to documented variations agreed in writing.',
      },
      {
        question: 'How do you handle variations?',
        answer:
          'All variations are documented in writing with pricing agreed before works commence, keeping the project fully transparent.',
      },
    ],
  },
  {
    slug: 'joinery-manufacturing',
    title: 'Joinery Manufacturing',
    metaTitle: 'Commercial Joinery Brisbane | Custom Joinery Manufacturing',
    shortDescription:
      'Custom commercial joinery manufactured in our Brisbane workshop and installed by our own tradespeople across SEQ.',
    description:
      'Our in-house joinery manufacturing capability means we control quality, lead times and costs. From reception counters and retail displays to kitchen cabinetry and feature walls, every piece is engineered to perform in a commercial environment.',
    icon: 'hammer',
    features: [
      'Custom-designed cabinetry and counters',
      'Retail display fixtures and shelving systems',
      'Reception desks and service counters',
      'Commercial kitchen and bar joinery',
      'Feature walls, panelling and bulkheads',
      'Solid timber, board and laminate options',
      'Supply and installation or supply-only available',
    ],
    process: [
      {
        step: 1,
        title: 'Design Brief',
        description:
          'We gather your design intent, material preferences, dimensions and budget to prepare detailed shop drawings for your approval.',
      },
      {
        step: 2,
        title: 'Engineering & Drawings',
        description:
          'Detailed joinery drawings are prepared and signed off by you before any material is ordered or cut.',
      },
      {
        step: 3,
        title: 'Material Procurement',
        description:
          'We source substrates, laminates, hardware and solid timber from trusted suppliers, ensuring consistent quality throughout.',
      },
      {
        step: 4,
        title: 'Workshop Fabrication',
        description:
          'Our cabinetmakers build and finish each piece in our Sumner Park workshop, quality-checking before despatch.',
      },
      {
        step: 5,
        title: 'Site Installation',
        description:
          'Our installation team fits, adjusts and touches up on-site, leaving every piece plumb, level and ready to use.',
      },
    ],
    faqs: [
      {
        question: 'What materials do you use?',
        answer:
          'We work with moisture-resistant MDF, HMR board, melamine, high-pressure laminates, solid timber and a wide range of hardware.',
      },
      {
        question: 'Can you match an existing finish?',
        answer:
          'Yes. We carry extensive laminate and veneer sample libraries and can source custom finishes to match existing joinery.',
      },
      {
        question: 'Do you offer supply-only joinery?',
        answer:
          'We can supply joinery for self-installation or builder installation, though we recommend our own install team for the best result.',
      },
      {
        question: 'What is your typical lead time?',
        answer:
          'Lead times vary by complexity but typically range from 3 to 8 weeks from drawing approval. Rush schedules may be accommodated on request.',
      },
    ],
  },
  {
    slug: 'cafe-restaurant-fitout',
    title: 'Cafe & Restaurant Fitout',
    metaTitle: 'Cafe & Restaurant Fitouts Brisbane | Hospitality Fitout',
    shortDescription:
      'Atmospheric cafe & restaurant fitouts across Brisbane & SEQ balancing design, commercial kitchen compliance & guest experience. Get a free quote.',
    description:
      'A successful hospitality fitout must look stunning and function flawlessly under pressure. Fix It Up Pty Ltd brings together custom joinery, commercial kitchen knowledge, acoustic design and brand-aligned finishes to create venues guests keep coming back to.',
    icon: 'coffee',
    features: [
      'Front-of-house design and construction',
      'Commercial kitchen layout and installation',
      'Custom banquette seating and booth joinery',
      'Bar and counter construction',
      'Acoustic panels and ceiling treatments',
      'Commercial-grade flooring and wall finishes',
      'Health and building code compliance',
    ],
    process: [
      {
        step: 1,
        title: 'Concept & Vision',
        description:
          'We explore your brand story, menu concept and guest flow to ensure the design supports both ambiance and efficiency.',
      },
      {
        step: 2,
        title: 'Design Development',
        description:
          'Detailed plans including kitchen layout, seating arrangement and material schedules are developed and reviewed with you.',
      },
      {
        step: 3,
        title: 'Approvals',
        description:
          'We manage council development approval, building approval and any food-premises certification requirements.',
      },
      {
        step: 4,
        title: 'Construction',
        description:
          'All trades — joinery, tiling, electrical, plumbing, mechanical — are coordinated on-site to keep the programme tight.',
      },
      {
        step: 5,
        title: 'Final Fit-off & Handover',
        description:
          'Equipment commissioning, final finishes and a thorough inspection ensure you open with confidence.',
      },
    ],
    faqs: [
      {
        question: 'Do you design commercial kitchens?',
        answer:
          'Yes. We work with experienced kitchen designers and equipment suppliers to create efficient, code-compliant kitchens.',
      },
      {
        question: 'Can you help with liquor licence fitout requirements?',
        answer:
          'We are familiar with Queensland liquor licensing construction requirements and ensure the fitout meets all necessary criteria.',
      },
      {
        question: 'How do you manage noise for neighbouring businesses?',
        answer:
          'We schedule noisy works outside peak trading hours and use dust barriers and hoarding to minimise impact on neighbours.',
      },
      {
        question: 'Do you handle equipment supply?',
        answer:
          'We can coordinate commercial equipment procurement through our supplier network, or work with your preferred equipment dealer.',
      },
    ],
  },
  {
    slug: 'retail-fitout',
    title: 'Retail Fitout',
    metaTitle: 'Retail Fitout Brisbane | Retail Shopfitters QLD',
    shortDescription:
      'Retail fitouts across Brisbane & SEQ engineered to maximise dwell time, drive sales & deliver a standout brand experience. Get a free quote.',
    description:
      'Retail success starts with great design and tight execution. Fix It Up Pty Ltd creates retail environments that guide customers through your space, showcase your product and reinforce your brand at every touchpoint — on time and within budget.',
    icon: 'shopping-bag',
    features: [
      'Retail design consultation and space planning',
      'Custom display fixtures and gondola systems',
      'Feature walls, display windows and signage support',
      'Flooring, lighting and ceiling systems',
      'Point-of-sale and service counter joinery',
      'Stockroom fitout and back-of-house construction',
      'Landlord fitout guide compliance',
    ],
    process: [
      {
        step: 1,
        title: 'Store Strategy',
        description:
          'We review your brand guidelines, planogram requirements and customer journey to inform the design direction.',
      },
      {
        step: 2,
        title: 'Design & Quote',
        description:
          'Detailed plans and a fixed-price quote aligned to your landlord\'s fitout guide are prepared for sign-off.',
      },
      {
        step: 3,
        title: 'Approvals',
        description:
          'Landlord, council and building approvals are managed by our team to avoid any delays to your opening date.',
      },
      {
        step: 4,
        title: 'Construction',
        description:
          'Our experienced crews work efficiently — often within shopping centres — to strict timeframes and centre rules.',
      },
      {
        step: 5,
        title: 'Store Ready',
        description:
          'Fixtures are installed, dressed and inspected so your team can merchandise and open as planned.',
      },
    ],
    faqs: [
      {
        question: 'Do you work in shopping centres?',
        answer:
          'Yes. We are experienced working within major retail centres and comply with all centre fitout guides and contractor induction requirements.',
      },
      {
        question: 'Can you work to a tight opening deadline?',
        answer:
          'Retail deadlines are non-negotiable. We build programmes backwards from your opening date to ensure everything is staged correctly.',
      },
      {
        question: 'Do you supply retail fixtures?',
        answer:
          'We manufacture custom fixtures and can also source and install standard gondola and display systems.',
      },
      {
        question: 'What if the landlord requests changes during construction?',
        answer:
          'We liaise directly with centre management on your behalf to resolve any compliance or design queries without delaying your programme.',
      },
    ],
  },
  {
    slug: 'medical-dental-fitout',
    title: 'Medical & Dental Fitout',
    metaTitle: 'Medical & Dental Fitout Brisbane | Clinic Fitouts',
    shortDescription:
      'Compliant, welcoming medical & dental fitouts across Brisbane & SEQ for GPs, specialists, allied health & dental practices. Get a free quote.',
    description:
      'Medical and dental fitouts require precision, infection-control knowledge and an understanding of patient flow. Fix It Up Pty Ltd delivers spaces that satisfy clinical requirements, accreditation standards and patient comfort — all managed under a single contract.',
    icon: 'medical',
    features: [
      'Consult room, treatment room and procedure room fitout',
      'Infection-control wall, floor and ceiling systems',
      'Medical gas rough-in and equipment support',
      'Custom clinical joinery and sterilisation areas',
      'Accessible design and DDA compliance',
      'Acoustic partitioning for patient privacy',
      'Reception, waiting and administration areas',
    ],
    process: [
      {
        step: 1,
        title: 'Clinical Brief',
        description:
          'We work with you and your practice manager to understand patient flow, equipment needs, accreditation requirements and staff workflows.',
      },
      {
        step: 2,
        title: 'Design & Compliance Check',
        description:
          'Plans are developed with reference to relevant standards including RACGP, AHPRA and infection control guidelines.',
      },
      {
        step: 3,
        title: 'Approvals',
        description:
          'Building approval and any healthcare-specific authority approvals are lodged and managed by our team.',
      },
      {
        step: 4,
        title: 'Construction',
        description:
          'Works are phased to minimise disruption if you are operating from the same building, with strict infection control on-site.',
      },
      {
        step: 5,
        title: 'Commissioning & Handover',
        description:
          'All systems are tested, clinical areas are deep-cleaned and a full defects inspection is completed before handover.',
      },
    ],
    faqs: [
      {
        question: 'Do you understand infection control requirements for clinical spaces?',
        answer:
          'Yes. Our team is familiar with healthcare infection-control standards and selects materials and finishes that meet clinical requirements.',
      },
      {
        question: 'Can you fit out a dental surgery?',
        answer:
          'Absolutely. We have delivered numerous dental fitouts including chair bays, sterilisation rooms, OPG alcoves and reception areas.',
      },
      {
        question: 'Can you stage works so we can keep seeing patients?',
        answer:
          'Yes. We regularly stage medical fitouts so practices can continue operating in one area while works proceed in another.',
      },
      {
        question: 'Do you handle medical gas installation?',
        answer:
          'We coordinate licensed medical gas installers as part of our project management, ensuring full compliance with AS 2896.',
      },
    ],
  },
  {
    slug: 'office-fitout',
    title: 'Office Fitout',
    metaTitle: 'Office Fitout Brisbane | Workplace Fitout Specialists',
    shortDescription:
      'Productive office fitouts across Brisbane & SEQ, designed around how your team works — open-plan, collaborative or hybrid. Get a free quote.',
    description:
      'The modern office is about more than desks. Fix It Up Pty Ltd creates workplaces that attract talent, support culture and flex with your business. We deliver on time, minimise disruption and back every project with a written workmanship warranty.',
    icon: 'office',
    features: [
      'Space planning and workplace strategy input',
      'Partition and glazing systems (demountable and fixed)',
      'Custom joinery including reception, kitchen and storage',
      'Acoustic ceiling, wall and floor systems',
      'IT and AV rough-in coordination',
      'Breakout, collaboration and quiet-room fitout',
      'End-of-trip facilities and accessible amenities',
    ],
    process: [
      {
        step: 1,
        title: 'Workplace Discovery',
        description:
          'We consult with your leadership and facilities teams to understand headcount projections, work styles and culture goals.',
      },
      {
        step: 2,
        title: 'Space Planning & Design',
        description:
          'A tested floor plan and design concept is developed, balancing collaboration, focus work and amenity.',
      },
      {
        step: 3,
        title: 'Fixed-Price Proposal',
        description:
          'A detailed scope and fixed-price contract is prepared so you can present a complete business case for board approval.',
      },
      {
        step: 4,
        title: 'Construction',
        description:
          'Works are typically staged or conducted out of hours to keep your business operating with minimal disruption.',
      },
      {
        step: 5,
        title: 'Move-In Ready',
        description:
          'Furniture is coordinated, AV is commissioned and a final defects walkthrough is completed before your team moves in.',
      },
    ],
    faqs: [
      {
        question: 'Can you work after hours to avoid disrupting our team?',
        answer:
          'Yes. We regularly carry out office fitouts in stages or after hours and on weekends to keep disruption to a minimum.',
      },
      {
        question: 'Do you help with furniture selection?',
        answer:
          'We can connect you with trusted furniture dealers and coordinate delivery and installation as part of the project if needed.',
      },
      {
        question: 'Can you help us meet lease incentive fitout requirements?',
        answer:
          'Yes. We are familiar with commercial lease fitout conditions and ensure the scope of works satisfies any landlord incentive obligations.',
      },
      {
        question: 'What is the typical timeline for an office fitout?',
        answer:
          'Most office fitouts of 200–500 sqm are completed within 8 to 14 weeks from approval. Larger or more complex projects may take longer.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export default services;
