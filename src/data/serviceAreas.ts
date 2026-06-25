export interface ServiceArea {
  slug: string; // e.g. 'cafe-fitout-gold-coast'
  serviceSlug: string; // must match a slug in services.ts
  locationSlug: string; // must match a slug in locations.ts
  h1: string; // e.g. 'Cafe & Restaurant Fitouts — Gold Coast'
  metaTitle: string; // <=60c, commercial-intent
  metaDescription: string; // <=160c, with soft CTA
  intro: string[]; // 2-3 UNIQUE paragraphs specific to this service+city
  localContext: string; // 1 UNIQUE paragraph: local precincts, council/approvals, market notes
  faqs: { question: string; answer: string }[]; // 2-3 UNIQUE local Q&As
}

export const serviceAreas: ServiceArea[] = [
  /* ─── 1. Cafe & Restaurant Fitout × Brisbane ─────────────────────── */
  {
    slug: 'cafe-fitout-brisbane',
    serviceSlug: 'cafe-restaurant-fitout',
    locationSlug: 'brisbane',
    h1: 'Cafe & Restaurant Fitouts — Brisbane',
    metaTitle: 'Cafe & Restaurant Fitout Brisbane | Fix It Up',
    metaDescription:
      'Brisbane cafe and restaurant fitouts that pass food-premises approval and trade hard from day one. James St to West End. Get a free quote.',
    intro: [
      'Brisbane hospitality is crowded and unforgiving — a new venue in Fortitude Valley or along James Street is judged on its fitout before the first coffee is poured. Fix It Up builds cafes and restaurants that read well on social media and hold up to a 200-cover Saturday service, combining custom front-of-house joinery with a commercial kitchen that an experienced head chef will actually want to work in.',
      'We self-deliver the joinery — banquettes, the coffee bar, the pass — from our Sumner Park workshop, so the pieces that define your venue are not subcontracted out and never become the bottleneck on your programme. That control matters most on inner-city tenancies where loading docks are tight, build windows are short and your lease clock is already running.',
      'From a 40-seat specialty coffee shop to a licensed restaurant with a full exhaust canopy, we coordinate every trade under one fixed-price contract: tiling, mechanical, hydraulic, electrical and grease management. One team, one programme, one number to call.',
    ],
    localContext:
      'Brisbane City Council treats most new food premises as assessable development, so a change of use into a vacant tenancy usually needs a Development Application alongside the building approval, and the kitchen must satisfy the food-premises construction standard before you can get a licence to operate. We have worked through this across the Valley dining precinct, the West End strip and the James Street / Newstead scene, where heritage overlays, grease-arrestor requirements and shared-tenancy acoustic limits all routinely shape the build. Knowing where the council and the body corporate will push back saves weeks at the front of a Brisbane hospitality programme.',
    faqs: [
      {
        question: 'Do I need a development application for a cafe in Brisbane?',
        answer:
          'Usually yes. If the tenancy was not previously approved as a food premises, Brisbane City Council treats the change of use as assessable development requiring a DA, in addition to a building approval. We lodge and manage both so your fitout is not held up at certification.',
      },
      {
        question: 'Can you fit out a venue in the James Street or Fortitude Valley precincts?',
        answer:
          'Yes — these are some of our most familiar precincts. We plan around tight inner-city loading access, shared-tenancy acoustic limits and the higher presentation standard that James Street and Valley diners expect, staging deliveries so the build does not block neighbouring traders.',
      },
      {
        question: 'How do you handle the grease arrestor and kitchen exhaust?',
        answer:
          'We coordinate the hydraulic, mechanical and grease-management trades so the arrestor sizing, exhaust canopy and make-up air all satisfy Queensland Urban Utilities and the food-premises standard before commissioning. It is built into the fixed price, not a surprise variation.',
      },
    ],
  },

  /* ─── 2. Cafe & Restaurant Fitout × Gold Coast ───────────────────── */
  {
    slug: 'cafe-fitout-gold-coast',
    serviceSlug: 'cafe-restaurant-fitout',
    locationSlug: 'gold-coast',
    h1: 'Cafe & Restaurant Fitouts — Gold Coast',
    metaTitle: 'Cafe & Restaurant Fitout Gold Coast | Fix It Up',
    metaDescription:
      'Gold Coast cafe and restaurant fitouts built for high-presentation, tourist-driven trade. Broadbeach, Burleigh, Surfers. Get a free quote.',
    intro: [
      'On the Gold Coast a cafe or restaurant lives and dies on presentation. Tourists, day-trippers and a discerning local crowd all choose with their eyes, so a Burleigh Heads diner or a Broadbeach eatery needs a fitout that photographs beautifully and copes with the brutal seasonal swing from a quiet Tuesday to a packed school-holiday rush.',
      'Fix It Up designs and builds for that reality: durable coastal-grade finishes that shrug off salt air and constant foot traffic, generous indoor-outdoor flow to make the most of the climate, and a kitchen sized for peak covers rather than the average week. We manufacture the joinery ourselves in Brisbane and freight it down, which keeps quality and lead times under our control even though the site is an hour up the M1.',
      'Whether you are chasing the early Burleigh breakfast trade or a late-service Surfers dining room, we run the whole job — front-of-house, bar, kitchen and compliance — on a single fixed-price contract built backwards from your opening date.',
    ],
    localContext:
      'City of Gold Coast handles food-business approvals and most fitouts will need a building approval plus a food-business licence assessment, and many tenancies in Surfers Paradise and Broadbeach sit within larger complexes that impose their own fitout guidelines and trading-hour restrictions. The seasonal economy here changes the brief: venues want to be open and earning before the summer and school-holiday peaks, so programmes are tight and immovable. Coastal exposure also drives material choice — we specify finishes and hardware that hold up to salt air and heavy turnover, because a beachfront venue that looks tired after one season is a venue that loses repeat trade.',
    faqs: [
      {
        question: 'Can you finish a Gold Coast fitout before the summer trading peak?',
        answer:
          'Yes, and it is the single most common request we get here. We build the programme backwards from your target opening and lock in long-lead items early, because missing the summer or school-holiday peak on the Coast can cost a whole season of trade.',
      },
      {
        question: 'You are based in Brisbane — does that slow a Gold Coast job down?',
        answer:
          'No. We manufacture the joinery in our own Sumner Park workshop and freight finished pieces to site, so quality control and lead times stay in our hands. Our crews work the Coast regularly, from Coomera through to Coolangatta.',
      },
      {
        question: 'How do you handle fitouts inside Broadbeach or Surfers complexes?',
        answer:
          'Many beachfront and centre tenancies have landlord fitout guidelines, induction requirements and restricted work hours. We liaise with centre management on your behalf and schedule noisy works around trading so neighbouring venues are not disrupted.',
      },
    ],
  },

  /* ─── 3. Cafe & Restaurant Fitout × Sunshine Coast ───────────────── */
  {
    slug: 'cafe-fitout-sunshine-coast',
    serviceSlug: 'cafe-restaurant-fitout',
    locationSlug: 'sunshine-coast',
    h1: 'Cafe & Restaurant Fitouts — Sunshine Coast',
    metaTitle: 'Cafe & Restaurant Fitout Sunshine Coast | Fix It Up',
    metaDescription:
      'Sunshine Coast cafe and restaurant fitouts with a relaxed coastal feel and a kitchen built to perform. Noosa to Maroochydore. Get a free quote.',
    intro: [
      'The Sunshine Coast dining scene runs on a lifestyle promise — relaxed, light-filled, locally minded — and the fitout has to deliver that feeling without compromising on a kitchen that performs. A Noosa restaurant or a Mooloolaba beachside cafe needs natural materials, easy indoor-outdoor transitions and finishes that feel coastal rather than corporate, all wrapped around a back-of-house built for real service.',
      'Fix It Up brings metropolitan build standards to that brief. We craft the joinery — timber-look counters, banquettes, the service bar — in our Brisbane workshop and install it ourselves, so a Caloundra or Buderim venue gets the same quality control a city project would, with lead times we can actually commit to despite the distance.',
      'From a daytime brunch cafe to a licensed dinner venue, we manage the full scope under one contract and one programme: shopfront, dining room, kitchen, compliance and handover, sequenced so you open on the date you have planned your launch around.',
    ],
    localContext:
      'Sunshine Coast Council assesses food-premises fitouts and most new venues need a building approval together with food-business licensing, with extra care in environmentally sensitive and tourism-focused pockets around Noosa where design and signage expectations sit high. Maroochydore is the standout shift in the region — the new city centre is drawing hospitality and commercial tenants into a genuine CBD, while Mooloolaba, Caloundra and Noosa keep their established coastal-village character. Demand here leans toward lifestyle-led venues with strong outdoor seating, so we plan early for alfresco approvals, weather protection and the durable-but-natural finishes that suit a coastal climate and a design-conscious local market.',
    faqs: [
      {
        question: 'Do you travel to Noosa and the northern Sunshine Coast for fitouts?',
        answer:
          'Yes. Our crews regularly work from Caloundra through Maroochydore and Mooloolaba up to Noosa and Coolum. Because we build the joinery in Brisbane and bring it finished, the travel does not compromise quality or our ability to hit a committed completion date.',
      },
      {
        question: 'Can you design a venue around outdoor and alfresco dining?',
        answer:
          'Absolutely — it is central to the Sunshine Coast brief. We plan for indoor-outdoor flow, weather protection and alfresco approvals early, since outdoor seating is often where these venues make their margin and their atmosphere.',
      },
      {
        question: 'What does food-premises approval involve on the Sunshine Coast?',
        answer:
          'Most new venues need a building approval plus a food-business licence assessed by Sunshine Coast Council, covering kitchen construction, finishes and hygiene. We design to those standards from the outset and manage the approvals so commissioning is not delayed.',
      },
    ],
  },

  /* ─── 4. Office Fitout × Brisbane ────────────────────────────────── */
  {
    slug: 'office-fitout-brisbane',
    serviceSlug: 'office-fitout',
    locationSlug: 'brisbane',
    h1: 'Office Fitouts — Brisbane',
    metaTitle: 'Office Fitout Brisbane | Workplace Fitout | Fix It Up',
    metaDescription:
      'Brisbane office and workplace fitouts delivered around your team — CBD towers, Newstead and the inner fringe. Minimal disruption. Get a free quote.',
    intro: [
      'A Brisbane office fitout has to do two jobs at once: support how your people actually work and help you win the talent competing for the same floor space across the CBD. Fix It Up designs and builds workplaces — open-plan floors, collaboration zones, quiet rooms, client-facing reception — that flex as your headcount changes and reflect the culture you are trying to build.',
      'We self-perform the joinery that gives an office its identity: the reception desk, the kitchen and breakout, built-in storage and meeting-room cabinetry, all made in our Sumner Park workshop. Managing that in-house means tighter control over the finishes clients and staff touch every day, and one less subcontractor on a programme that often has to fit around a live, occupied business.',
      'Whether you are taking new space in a CBD tower, consolidating teams in Newstead or refreshing an existing floor, we deliver a fixed-price scope, stage works around your operations and back the lot with a written workmanship warranty.',
    ],
    localContext:
      'Most Brisbane office fitouts are governed less by council and more by the building — base-build conditions, after-hours access, loading-dock bookings, goods-lift windows and fire-and-services tie-ins are all dictated by building management, particularly in CBD and Spring Hill towers. Tenancy work still needs building approval, and we coordinate that alongside the landlord and certifier. Inner-fringe precincts like Newstead, Fortitude Valley and Milton offer character and warehouse-style floors that read very differently to a CBD tower, and we tailor the workplace strategy accordingly. We also build with lease incentives in mind, since a Brisbane fitout scope frequently has to satisfy a make-good clause or a landlord contribution.',
    faqs: [
      {
        question: 'Can you do the fitout while our Brisbane office keeps operating?',
        answer:
          'Yes. We routinely stage office fitouts in zones or work after hours and weekends so your team keeps trading. In CBD towers we book the goods lift, loading dock and after-hours access through building management and sequence noisy works outside business hours.',
      },
      {
        question: 'Do you handle building management and base-build requirements in CBD towers?',
        answer:
          'We do. Tower fitouts are driven by base-build conditions, contractor inductions, and fire and services tie-ins controlled by building management. We coordinate all of that with the landlord and certifier so your tenancy approval and services connections go smoothly.',
      },
      {
        question: 'Can the fitout satisfy our lease incentive or make-good obligations?',
        answer:
          'Yes. We are familiar with Brisbane commercial lease conditions and scope the works to satisfy a landlord incentive or a make-good clause, documenting everything so there is no dispute at the end of your term.',
      },
    ],
  },

  /* ─── 5. Office Fitout × Gold Coast ──────────────────────────────── */
  {
    slug: 'office-fitout-gold-coast',
    serviceSlug: 'office-fitout',
    locationSlug: 'gold-coast',
    h1: 'Office Fitouts — Gold Coast',
    metaTitle: 'Office Fitout Gold Coast | Workplace Fitout | Fix It Up',
    metaDescription:
      'Gold Coast office and workplace fitouts for Robina, Southport and Bundall business hubs. Sharp, practical, on time. Get a free quote.',
    intro: [
      'The Gold Coast workplace market has matured well past beachside back-offices. Professional services, tech, finance and health businesses are taking serious commercial space in Robina, Southport, Bundall and Varsity Lakes, and they want fitouts that present like a city practice while suiting the lighter, more relaxed Coast culture.',
      'Fix It Up delivers exactly that. We design floors that balance focus work, collaboration and a polished client-facing front, then build the defining joinery — reception, boardroom, kitchen and storage — in our own Brisbane workshop. That in-house manufacturing is why a Gold Coast client gets metropolitan finish quality and a lead time we can actually stand behind, rather than waiting on a local subbie\'s queue.',
      'From a single-floor professional suite to a multi-tenancy commercial refit, we run a fixed-price scope, stage the build around your operations and hand over a workplace that is ready for your team and your clients on day one.',
    ],
    localContext:
      'Gold Coast office fitouts generally need a building approval through City of Gold Coast, and tenancies in the major commercial hubs — Robina, Southport CBD, Bundall and Varsity Lakes — usually sit within managed buildings with their own access rules, parking constraints and after-hours conditions. The market here skews toward growing professional and health-adjacent businesses, so demand is strong for flexible, future-proofed floors that can absorb headcount growth without a full refit. Presentation still matters more than it might inland: a client-facing Gold Coast office is part of how these firms compete, so reception and meeting spaces tend to carry a higher finish spec than the back-of-house.',
    faqs: [
      {
        question: 'Which Gold Coast business areas do you fit out?',
        answer:
          'We work across the Coast\'s commercial hubs — Robina, Southport, Bundall, Varsity Lakes and Helensvale — as well as standalone suites elsewhere. Our crews cover the whole city from Coomera to Coolangatta, and we manufacture the joinery in Brisbane to keep quality and lead times tight.',
      },
      {
        question: 'Can you design an office that scales as we grow?',
        answer:
          'Yes. Many of our Gold Coast clients are growing professional and health businesses, so we plan flexible floors — demountable partitions, modular workstations and adaptable meeting spaces — that absorb headcount growth without forcing a full refit later.',
      },
      {
        question: 'Do you manage building approval for Gold Coast tenancies?',
        answer:
          'We do. Most office fitouts here need a building approval through City of Gold Coast, and managed buildings add their own access and after-hours rules. We coordinate the certifier and building management so the project runs to programme.',
      },
    ],
  },

  /* ─── 6. Retail Fitout × Brisbane ────────────────────────────────── */
  {
    slug: 'retail-fitout-brisbane',
    serviceSlug: 'retail-fitout',
    locationSlug: 'brisbane',
    h1: 'Retail Fitouts — Brisbane',
    metaTitle: 'Retail Fitout Brisbane | Shop Fitouts | Fix It Up',
    metaDescription:
      'Brisbane retail fitouts engineered for centre handover deadlines and standout brand presence. Chermside, Indooroopilly, the city. Get a free quote.',
    intro: [
      'Brisbane retail runs on deadlines that do not move. A handover date in a major centre like Chermside or Indooroopilly is locked months in advance, and the cost of missing it — penalties, lost trade, a marketing launch with no store behind it — is steep. Fix It Up builds retail fitouts backwards from that date, so the shopfront is dressed and the doors open exactly when they are meant to.',
      'We create retail environments that pull customers in and move them through the space the way your merchandising plan intends — feature windows, custom display fixtures, point-of-sale joinery and lighting that makes product look its best. The fixtures that carry your brand are manufactured in our Sumner Park workshop, so we control their quality and their delivery to site rather than relying on an outside fixtures supplier.',
      'From a specialty tenancy in a shopping centre to a flagship on a high street, we manage every trade to centre rules and a tight programme, liaising directly with centre management so compliance queries never become your problem.',
    ],
    localContext:
      'Retail fitouts in Brisbane\'s major centres — Westfield Chermside, Indooroopilly Shopping Centre, Queen Street Mall tenancies and the like — are governed by the centre\'s own fitout guidelines, design-approval process and contractor induction, on top of the standard building approval. Centres typically require your shop drawings to be approved by their design team before work starts and enforce strict night-works rules so trade is not disrupted. Strip retail in precincts like the Valley, West End and Paddington plays by different rules, with council shopfront and signage considerations coming to the fore. We have delivered under both regimes and build the centre\'s approval and induction lead times into the programme from the start, because that early paperwork is where retail fitouts most often slip.',
    faqs: [
      {
        question: 'Do you work inside Brisbane shopping centres like Chermside or Indooroopilly?',
        answer:
          'Yes. We are experienced working within major Brisbane centres and comply with each centre\'s fitout guide, design-approval process and contractor induction. We submit shop drawings for the centre design team\'s sign-off and program night works around the centre\'s rules.',
      },
      {
        question: 'Can you guarantee we open by the centre handover date?',
        answer:
          'Retail handover dates are non-negotiable, so we build the programme backwards from yours and stage long-lead items early. Manufacturing our own fixtures in Brisbane removes a common point of delay and keeps the opening date secure.',
      },
      {
        question: 'What if centre management asks for changes mid-build?',
        answer:
          'We liaise directly with centre management on your behalf to resolve compliance and design queries, document any variation and adjust the program so a centre request does not push out your opening.',
      },
    ],
  },

  /* ─── 7. Retail Fitout × Gold Coast ──────────────────────────────── */
  {
    slug: 'retail-fitout-gold-coast',
    serviceSlug: 'retail-fitout',
    locationSlug: 'gold-coast',
    h1: 'Retail Fitouts — Gold Coast',
    metaTitle: 'Retail Fitout Gold Coast | Shop Fitouts | Fix It Up',
    metaDescription:
      'Gold Coast retail fitouts built for tourist-driven foot traffic and standout presentation. Pacific Fair, Robina, Surfers. Get a free quote.',
    intro: [
      'Retail on the Gold Coast competes for the attention of both locals and a constant stream of tourists, which raises the bar on presentation. A store in Pacific Fair, Robina Town Centre or along the Surfers Paradise strip has to stop browsers mid-stride, and the fitout is your first and best chance to do it. Fix It Up builds retail spaces that command that attention and convert footfall into sales.',
      'We engineer the customer journey — display windows, fixture layout, lighting and point-of-sale — to showcase product and guide shoppers through the store, then manufacture the brand-defining fixtures in our Brisbane workshop for finish quality you can rely on. Bringing finished joinery to the Coast keeps lead times predictable, which matters when you are working to a centre handover or a seasonal launch.',
      'From a boutique in a tourist precinct to a tenancy in a major centre, we deliver a fixed-price fitout to the centre\'s guidelines and your opening date, handling the compliance and centre liaison so you can focus on stock and staff.',
    ],
    localContext:
      'The Gold Coast\'s premier centres — Pacific Fair, Robina Town Centre, Australia Fair and Harbour Town — run rigorous fitout guidelines, design approvals and contractor inductions on top of the City of Gold Coast building approval, and their presentation standards are deliberately high to match a tourism market. Seasonality shapes the calendar: retailers push to be open before the summer and school-holiday surges, so handover deadlines are immovable and programmes are tight. High-street retail in Surfers Paradise, Broadbeach and Burleigh adds shopfront and signage considerations, plus salt-air exposure that influences material and finish selection. We plan the centre approval and induction lead times into the schedule from day one so the paperwork never costs you the opening.',
    faqs: [
      {
        question: 'Do you fit out tenancies in Pacific Fair and Robina Town Centre?',
        answer:
          'Yes. We work within the Coast\'s major centres and comply with each one\'s fitout guidelines, design approvals and inductions. We submit drawings for the centre design team\'s approval and schedule night works to the centre\'s rules so trade is not disrupted.',
      },
      {
        question: 'Can you have our store open before the summer holiday rush?',
        answer:
          'That is the goal for most Gold Coast retailers, and we build the programme backwards from your target opening to make it happen. Manufacturing fixtures in our own Brisbane workshop removes a common delay and protects a seasonal launch date.',
      },
      {
        question: 'Does the coastal location affect material choices for a shopfront?',
        answer:
          'For high-street stores in Surfers, Broadbeach or Burleigh, salt air and heavy foot traffic both matter. We specify durable, coastal-appropriate finishes and hardware so the shopfront still looks sharp after a busy season.',
      },
    ],
  },

  /* ─── 8. Medical & Dental Fitout × Brisbane ──────────────────────── */
  {
    slug: 'medical-dental-fitout-brisbane',
    serviceSlug: 'medical-dental-fitout',
    locationSlug: 'brisbane',
    h1: 'Medical & Dental Fitouts — Brisbane',
    metaTitle: 'Medical & Dental Fitout Brisbane | Fix It Up',
    metaDescription:
      'Brisbane medical and dental fitouts built to RACGP and infection-control standards for GPs, specialists and dental practices. Get a free quote.',
    intro: [
      'A Brisbane medical or dental fitout has to satisfy clinical standards and accreditation before it ever has to look welcoming — and Fix It Up delivers both. We build consult rooms, treatment and procedure rooms, sterilisation areas and reception zones that meet infection-control requirements and patient-flow logic, whether you are a solo GP, a specialist suite or a multi-chair dental practice.',
      'The clinical joinery is where precision counts most: sealed, hygienic cabinetry, sterilisation benches and reception desks built to exacting tolerances. We manufacture these in our own Sumner Park workshop, which lets us control the finishes and detailing that an infection-control audit will scrutinise, and coordinate the licensed trades — medical gas, hydraulic, electrical and mechanical — under one contract.',
      'Many Brisbane practices fit out while still seeing patients, so we stage works to keep one part of the practice operating while we build in another, with strict dust and infection control on site throughout. The result is a compliant, calm, professional space delivered without shutting your doors.',
    ],
    localContext:
      'Brisbane medical and dental fitouts are designed against RACGP and AHPRA expectations and healthcare infection-control standards, with building approval through Brisbane City Council and any healthcare-authority requirements managed alongside it. Demand is strongest in the inner suburbs and established medical clusters — around Spring Hill, the Wickham Terrace specialist precinct, Greenslopes and the major hospital catchments — as well as in fast-growing suburban centres opening new GP and allied-health clinics. Medical gas installation must satisfy AS 2896, and accessible design and DDA compliance are non-negotiable for patient-facing premises. We design to those standards from the first drawing, because retrofitting compliance into a clinical space after the fact is expensive and slow.',
    faqs: [
      {
        question: 'Can you fit out our Brisbane practice while we keep seeing patients?',
        answer:
          'Yes. We regularly stage medical and dental fitouts so you can keep operating in one area while we build in another, with strict dust barriers and infection-control measures on site. We schedule the disruptive works to suit your appointment book.',
      },
      {
        question: 'Do you build to RACGP and infection-control accreditation standards?',
        answer:
          'We design and build with reference to RACGP and AHPRA expectations and healthcare infection-control standards, selecting sealed, cleanable finishes and clinical joinery that will stand up to an accreditation audit. Getting this right at design stage avoids costly rework later.',
      },
      {
        question: 'Can you handle medical gas and specialist clinical services?',
        answer:
          'Yes. We coordinate licensed medical gas installers to AS 2896 along with the hydraulic, electrical and mechanical trades as part of our project management, so the clinical services are compliant and commissioned before handover.',
      },
    ],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((s) => s.slug === slug);
}

export default serviceAreas;
