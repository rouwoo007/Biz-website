export interface GuideSection {
  heading: string;
  body: string[];
  bullets?: string[];
  table?: { caption?: string; headers: string[]; rows: string[][] };
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  readTime: string;
  published: string;
  updated: string;
  excerpt: string;
  intro: string[];
  sections: GuideSection[];
  keyTakeaways: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[]; // service slugs
}

export const guides: Guide[] = [
  {
    slug: 'commercial-fitout-cost-brisbane',
    title: 'How Much Does a Commercial Fitout Cost in Brisbane? (2026 Price Guide)',
    metaTitle: 'Commercial Fitout Cost Brisbane (2026 Price Guide)',
    description:
      'Indicative 2026 commercial fitout costs in Brisbane and SEQ by project type, what drives the price, what is included and how to budget. Get a fixed-price quote.',
    category: 'Cost & Budgeting',
    readTime: '9 min read',
    published: '2026-06-25',
    updated: '2026-06-25',
    excerpt:
      'Indicative 2026 $/m² ranges for office, retail, cafe, restaurant, medical and dental fitouts across Brisbane and SEQ, plus the ten factors that move the price and how to keep costs down.',
    intro: [
      'A commercial fitout is one of the largest capital decisions a business makes, and "how much will it cost?" is almost always the first question. The honest answer is that the cost depends on your space, your scope and your standard of finish — two fitouts of the same floor area can differ by a factor of three.',
      'This guide gives you indicative 2026 price ranges for the Brisbane and South East Queensland market, broken down by fitout type and finish level. Use the numbers below to set an early budget and a realistic expectation, then get a fixed-price quote for your specific space before you commit.',
      'All figures are ex-GST, expressed per square metre of tenancy, and reflect the SEQ market at the time of writing. They are indicative only — every project differs, and the only number you should rely on is a written fixed-price quote for your tenancy.',
    ],
    sections: [
      {
        heading: 'What drives commercial fitout cost',
        body: [
          'Fitout cost is driven by three things: how much you build, how good it looks, and how hard it is to do. A bare open-plan office with carpet, paint and a few meeting rooms sits at the bottom of the range. A chef-designed restaurant with a full commercial kitchen, custom joinery and feature finishes sits at the top.',
          'Because of that spread, the most useful way to budget early is per square metre by fitout type and finish level. The table below shows indicative ranges; the sections that follow explain what is included, what typically is not, and the specific factors that push a project up or down within those ranges.',
        ],
      },
      {
        heading: 'Indicative fitout cost ranges (2026, ex-GST)',
        body: [
          'The ranges below are a planning tool, not a quote. They assume a standard commercial tenancy in reasonable condition. Specialised requirements — heavy services upgrades, extensive make-good, premium imported finishes — can take a project above the high-end figures shown.',
        ],
        table: {
          caption:
            'Indicative only — every project differs. Figures are ex-GST per square metre of tenancy for the Brisbane / SEQ market. Get a fixed-price quote for your space before budgeting.',
          headers: ['Fitout type', 'Budget ($/m²)', 'Mid-range ($/m²)', 'High-end ($/m²)'],
          rows: [
            ['Office fitout', '$550–$900', '$900–$1,800', '$1,800–$3,500+'],
            ['Retail fitout', '$800–$1,500', '$1,500–$2,500', '$2,500–$4,000+'],
            ['Cafe fitout', '$1,500–$2,800', '$2,800–$4,500', '$4,500–$6,000+'],
            ['Restaurant fitout', '$2,000–$3,500', '$3,500–$5,000', '$5,000–$7,000+'],
            ['Medical fitout', '$1,800–$2,800', '$2,800–$4,000', '$4,000–$5,500+'],
            ['Dental fitout', '$2,500–$4,000', '$4,000–$5,500', '$5,500–$7,500+ (equipment excluded)'],
          ],
        },
      },
      {
        heading: "What's included vs what's typically excluded",
        body: [
          'A fixed-price fitout contract from Fix It Up Pty Ltd typically includes design coordination, shop drawings, all building trades, project management and handover. The grey area is at the edges — services upgrades, loose items and statutory fees often sit outside the base scope. Knowing the line early prevents budget surprises.',
        ],
        bullets: [
          'Typically included: strip-out and make-good (where scoped), partitions and ceilings, flooring, painting, joinery, electrical and lighting, plumbing rough-in and fit-off, mechanical coordination, project management and a defects period.',
          'Sometimes included, scope-dependent: council and building approval fees, fire services upgrades, data and AV cabling, signage and external works.',
          'Typically excluded: GST, loose furniture (FF&E), specialised equipment (medical, dental, commercial kitchen appliances), IT hardware, landlord charges and security deposits, professional fees outside the build (your own designer, consultants), and any latent conditions discovered behind existing walls.',
        ],
      },
      {
        heading: 'Ten factors that affect your fitout cost',
        body: [
          'Within each range above, where your project lands comes down to the specifics of your tenancy and brief. These are the levers that move the number most:',
        ],
        bullets: [
          'Floor area — the headline driver. Larger tenancies cost more in total but often less per square metre as fixed costs are spread.',
          'Existing condition and strip-out / make-good — a fresh shell is cheaper than ripping out a previous tenant and reinstating to the landlord\'s standard.',
          'Services upgrades — new or upgraded electrical, plumbing and mechanical (air conditioning) are among the biggest cost movers.',
          'Joinery quantity and complexity — custom counters, cabinetry and feature joinery are labour-intensive and add up quickly.',
          'Finishes level — the jump from builder-standard to designer finishes (stone, timber veneer, feature tiling, specialist lighting) is where high-end budgets are spent.',
          'Compliance and council approvals — change of use, fire upgrades, disability access and development applications add cost and time.',
          'After-hours and staged works — working nights, weekends or in stages to keep you trading carries a labour premium.',
          'Site access and location — tight CBD access, high-rise floors, loading-dock restrictions and shopping-centre rules all add cost.',
          'Lead times — long-lead items and material price movements can affect both cost and programme; early ordering protects the budget.',
          'Landlord fitout-guide requirements — centre and building fitout guides often mandate specific systems, finishes and certifications that lift the base spec.',
        ],
      },
      {
        heading: 'Indicative trade cost breakdown',
        body: [
          'It helps to understand where the money goes. The split below is an indicative breakdown for a typical mid-range fitout — your project will vary, particularly hospitality and medical fitouts where services and equipment carry a heavier weighting.',
        ],
        table: {
          caption: 'Indicative percentage split for a typical mid-range commercial fitout — varies by project type.',
          headers: ['Cost area', 'Indicative share of build cost'],
          rows: [
            ['Preliminaries & project management', '8–12%'],
            ['Demolition, strip-out & make-good', '5–10%'],
            ['Partitions, ceilings & doors', '12–18%'],
            ['Joinery & millwork', '15–25%'],
            ['Flooring & wall finishes', '8–14%'],
            ['Electrical, data & lighting', '12–18%'],
            ['Plumbing & hydraulics', '5–10%'],
            ['Mechanical (HVAC)', '8–15%'],
            ['Painting & finishing', '4–8%'],
          ],
        },
      },
      {
        heading: 'How to keep costs down without cutting corners',
        body: [
          'Reducing cost does not have to mean reducing quality. The savings that hold up over time come from smart decisions made early — not from value-engineering finishes the week before handover.',
        ],
        bullets: [
          'Lock the scope before you build — design changes mid-project are the most expensive variations there are.',
          'Choose a fitout type and finish level honestly — spend the budget where customers and staff actually notice it.',
          'Reuse what works — keeping serviceable ceilings, glazing or services in place can save tens of thousands.',
          'Standardise joinery — repeatable units are cheaper to manufacture than one-off bespoke pieces.',
          'Plan services early — coordinating electrical, plumbing and mechanical at design stage avoids costly rework on site.',
          'Engage one contractor for the whole build — a single point of accountability removes the gaps where cost and blame fall through.',
        ],
      },
      {
        heading: 'Why a fixed-price quote matters',
        body: [
          'A per-square-metre estimate is useful for planning, but it is not a number you can sign a lease or a board paper against. A detailed fixed-price quote prices your actual tenancy, your actual scope and your chosen finishes — so you know the real figure before you commit, not after.',
          'Fix It Up Pty Ltd prepares fixed-price proposals covering all trades, with any variations documented and agreed in writing before works proceed. That is the difference between an indicative range and a number you can budget, finance and rely on.',
        ],
      },
    ],
    keyTakeaways: [
      'Indicative 2026 SEQ fitout costs run roughly $550–$3,500+/m² for offices and rise to $2,500–$7,500+/m² for dental — finish level and services drive the spread.',
      'The biggest cost movers are floor area, strip-out/make-good, services upgrades, joinery and the standard of finish.',
      'Equipment (medical, dental, commercial kitchen), loose furniture, GST and landlord charges typically sit outside the base build cost.',
      'You save real money by locking scope early, planning services at design stage and using one accountable contractor — not by cutting finishes late.',
      'Per-square-metre figures are for planning only; a written fixed-price quote for your space is the only number to budget against.',
    ],
    faqs: [
      {
        question: 'How much does a commercial fitout cost per square metre in Brisbane?',
        answer:
          'Indicatively, offices run around $550–$3,500+/m², retail $800–$4,000+/m², cafes $1,500–$6,000/m², restaurants $2,000–$7,000/m², medical $1,800–$5,500+/m² and dental $2,500–$7,500+/m² (ex-GST, equipment excluded for dental). These are planning ranges only — your actual cost depends on scope, condition and finish, so get a fixed-price quote for your tenancy.',
      },
      {
        question: 'Why do fitout costs vary so much for the same floor area?',
        answer:
          'Two tenancies of identical size can differ threefold because of finish level, services upgrades, joinery quantity, strip-out and make-good obligations, and compliance requirements. A bare open-plan office and a high-end restaurant are completely different builds even at the same square metreage.',
      },
      {
        question: 'Does the fitout price include GST and furniture?',
        answer:
          'No. The ranges in this guide are ex-GST. Loose furniture (FF&E), specialised equipment such as medical, dental or commercial kitchen appliances, IT hardware and landlord charges are typically excluded from the base build cost and budgeted separately.',
      },
      {
        question: 'How do I get an accurate fitout price for my space?',
        answer:
          'The only accurate figure is a written fixed-price quote prepared for your actual tenancy, scope and finishes. Fix It Up Pty Ltd prepares detailed fixed-price proposals covering all trades, with variations documented and agreed in writing before any work proceeds.',
      },
      {
        question: 'What is the best way to reduce fitout cost?',
        answer:
          'Lock your scope before construction starts, choose a finish level that matches where customers and staff actually look, reuse serviceable existing elements, standardise joinery and coordinate services at design stage. Late design changes and last-minute value-engineering are the most expensive ways to "save".',
      },
    ],
    relatedServices: [
      'commercial-fitout',
      'office-fitout',
      'retail-fitout',
      'cafe-restaurant-fitout',
      'medical-dental-fitout',
      'shopfitting',
      'joinery-manufacturing',
    ],
  },
  {
    slug: 'how-long-does-a-fitout-take',
    title: 'How Long Does a Commercial Fitout Take? Timelines by Project Type',
    metaTitle: 'How Long Does a Commercial Fitout Take? (Timelines)',
    description:
      'Typical commercial fitout timelines by project type, a phase-by-phase breakdown, what causes delays and how to hit a fixed opening date across Brisbane and SEQ.',
    category: 'Planning',
    readTime: '7 min read',
    published: '2026-06-25',
    updated: '2026-06-25',
    excerpt:
      'Typical fitout timelines by project type, the phases from consultation to handover, what causes delays, and how to build a programme that hits a fixed opening date.',
    intro: [
      'Once the budget question is answered, the next one is always about time: when can we open? For most businesses the opening date is fixed — a lease commencement, a school holiday trading peak, a franchise deadline — so understanding how long a fitout takes is critical to planning.',
      'This guide sets out realistic timelines for common commercial fitout types, walks through each phase from first consultation to handover, and explains the things that most often cause delays. The figures reflect how Fix It Up Pty Ltd plans and delivers projects across Brisbane and South East Queensland.',
      'A useful rule of thumb: construction is only part of the timeline. Design, quoting and approvals can take as long as the build itself, so the earlier you start the conversation, the more control you have over your opening date.',
    ],
    sections: [
      {
        heading: 'Typical fitout timelines by project type',
        body: [
          'The table below shows indicative end-to-end durations. The shorter figures are the on-site construction window for a straightforward project; the longer figures account for design, approvals and more complex scopes. Larger or heavily serviced projects can run beyond these ranges.',
        ],
        table: {
          caption:
            'Indicative timelines for the Brisbane / SEQ market. Construction durations are measured from approval; total project time includes design, quoting and approvals.',
          headers: ['Fitout type', 'Construction (from approval)', 'Typical total project'],
          rows: [
            ['Retail shopfit', '4–12 weeks', '8–16 weeks'],
            ['Office fitout (200–500 sqm)', '8–14 weeks', '12–20 weeks'],
            ['Cafe / restaurant fitout', '8–14 weeks', '14–22 weeks'],
            ['Medical / dental fitout', '8–14 weeks', '14–24 weeks'],
            ['Custom joinery package', '3–8 weeks (from drawing approval)', '5–12 weeks'],
          ],
        },
      },
      {
        heading: 'The phases of a fitout, step by step',
        body: [
          'Every Fix It Up project follows a clear, structured sequence. Understanding where the time goes in each phase helps you plan backwards from your opening date with confidence.',
        ],
        bullets: [
          'Consultation (around 1 week) — we meet on-site or virtually to understand your vision, budget and timeline, and review existing plans to identify key requirements.',
          'Design & quote (2–4 weeks) — we prepare detailed shop drawings and a fixed-price quote covering all trades, so there are no surprises on invoice day.',
          'Approvals & scheduling (2–6 weeks) — we handle council and building approvals, book all subcontractors and issue a firm programme aligned to your lease dates. This phase varies most with scope.',
          'Construction (4–14 weeks) — our site team manages daily progress, quality checks and trade coordination, with regular updates so you stay informed.',
          'Handover (around 1 week) — a thorough defects inspection is completed before keys are handed over, backed by a written workmanship warranty.',
        ],
      },
      {
        heading: 'How joinery lead times affect the programme',
        body: [
          'Custom joinery is frequently on the critical path. Lead times typically range from 3 to 8 weeks from drawing approval, so the date you sign off shop drawings often sets the date your fitout can finish.',
          'Because we manufacture joinery in our own workshop, we can begin fabrication as soon as drawings are approved and coordinate delivery to suit the site programme — rather than waiting on a third-party supplier\'s queue. Approving drawings promptly is one of the most effective things a client can do to protect the opening date.',
        ],
      },
      {
        heading: 'What causes fitout delays',
        body: [
          'Most overruns are not caused by construction — they are caused by decisions and approvals upstream. The common culprits are predictable and largely avoidable with early planning:',
        ],
        bullets: [
          'Late design decisions — finishes, layout or scope changes after drawings are signed off ripple through the whole programme.',
          'Slow drawing approvals — joinery and trades cannot start until drawings are signed, so a delayed sign-off directly delays handover.',
          'Council and building approvals — change of use, fire upgrades and development applications can take weeks; lodging early is essential.',
          'Long-lead materials and equipment — specialist finishes, joinery hardware and commercial equipment can carry multi-week lead times.',
          'Landlord and centre requirements — fitout-guide approvals, contractor inductions and restricted work hours within centres can add time.',
          'Latent conditions — issues uncovered behind existing walls or in base-building services may require additional works mid-project.',
          'Variations — changes requested during construction must be documented and priced, which can pause affected trades.',
        ],
      },
      {
        heading: 'How to hit a fixed opening date',
        body: [
          'When the opening date cannot move, the programme is built backwards from it. Retail deadlines in particular are non-negotiable, so we stage every milestone to land on time. These are the habits that keep a fixed date achievable:',
        ],
        bullets: [
          'Start early — engage your fitout contractor before the lease is signed so design and approvals run in parallel, not after.',
          'Approve drawings promptly — every day a drawing sits unsigned is a day off the back end of the programme.',
          'Lodge approvals first — get council, building and landlord approvals moving as the first priority, not the last.',
          'Order long-lead items immediately on sign-off — protect the critical path before construction even begins.',
          'Use one contractor for all trades — a single programme and single point of accountability removes the gaps where time is lost.',
          'Build in contingency — a realistic programme allows a buffer for approvals and latent conditions rather than assuming a perfect run.',
        ],
      },
    ],
    keyTakeaways: [
      'A retail shopfit typically takes 4–12 weeks to build; an office of 200–500 sqm runs 8–14 weeks from approval.',
      'Custom joinery has a 3–8 week lead time from drawing approval and is often on the critical path.',
      'Design, quoting and approvals can take as long as construction — total project time is usually well beyond the build window alone.',
      'Most delays come from late decisions, slow drawing sign-offs and approvals — not from the construction itself.',
      'To hit a fixed opening date, start early, approve drawings fast, lodge approvals first and use one contractor for all trades.',
    ],
    faqs: [
      {
        question: 'How long does a retail shopfit take?',
        answer:
          'Most retail shopfits range from 4 to 12 weeks of construction depending on size and complexity, with a total project time of roughly 8 to 16 weeks once design, quoting and approvals are included. We provide a detailed programme at quoting stage.',
      },
      {
        question: 'How long does an office fitout take?',
        answer:
          'Most office fitouts of 200–500 sqm are completed within 8 to 14 weeks from approval. Larger or more complex projects may take longer, and you should allow additional time before that for design, quoting and approvals.',
      },
      {
        question: 'What is the lead time for custom joinery?',
        answer:
          'Joinery lead times typically range from 3 to 8 weeks from drawing approval. Because we manufacture in our own workshop, we can start fabrication as soon as drawings are signed off and coordinate delivery to suit the site programme.',
      },
      {
        question: 'What causes most fitout delays?',
        answer:
          'The most common causes are late design decisions, slow drawing approvals, council and building approval timeframes, long-lead materials and equipment, landlord or centre requirements, and latent conditions found behind existing walls. Most are avoidable with early planning.',
      },
      {
        question: 'Can you hit a fixed opening date?',
        answer:
          'Yes. We build the programme backwards from your opening date and stage every milestone to suit it. The keys to success are engaging early, approving drawings promptly, lodging approvals first and ordering long-lead items immediately on sign-off.',
      },
    ],
    relatedServices: [
      'shopfitting',
      'office-fitout',
      'retail-fitout',
      'cafe-restaurant-fitout',
      'medical-dental-fitout',
      'joinery-manufacturing',
      'commercial-fitout',
    ],
  },
  {
    slug: 'franchise-fitout-rollouts',
    title: 'Franchise Fitout Rollouts: Opening Multiple Sites On Brand and On Time',
    metaTitle: 'Franchise Fitout Rollouts Brisbane & SEQ',
    description:
      'How to roll out franchise fitouts across multiple sites — every store on brand, on budget and on schedule. A guide for franchisors and multi-site operators.',
    category: 'Multi-Site & Rollouts',
    readTime: '8 min read',
    published: '2026-06-25',
    updated: '2026-06-25',
    excerpt:
      'What it takes to fit out a franchise network — from the prototype store to a repeatable rollout programme that holds brand standards, controls cost and hits every opening date across Brisbane and SEQ.',
    intro: [
      'For a franchise or multi-site brand, a fitout is not a one-off project — it is a repeatable system. Every new store has to look like the last one, open on a fixed date and land on budget, whether it is site number two or site number twenty. Get the system right and each opening gets faster, cheaper and more predictable. Get it wrong and every site reinvents the wheel.',
      'This guide explains how a franchise fitout rollout actually works — from the prototype store that sets the standard, through the documentation and programme that let you repeat it, to the on-site quality control that keeps every location on brand. It is written for franchisors, area developers and multi-site operators opening across Brisbane and South East Queensland.',
      'Fix It Up self-performs joinery from our own Sumner Park workshop, and that is the single biggest advantage in a rollout: the same team builds the same counters, the same cabinetry and the same finishes for every store, so site twelve matches site one.',
    ],
    sections: [
      {
        heading: 'What is a franchise fitout rollout?',
        body: [
          'A franchise fitout rollout is the coordinated delivery of the same store fitout across multiple locations, to a single set of brand standards, usually on a rolling programme. Instead of treating each store as a fresh design-and-build, a rollout treats the first completed store as a template that every later site replicates — same layout logic, same joinery, same finishes, same signage — adapted only as much as each tenancy requires.',
          'That shift from "project" to "programme" is what makes rollouts efficient. Decisions are made once and reused, trades learn the build and get faster, and the brand stays consistent from the flagship to the newest regional store.',
        ],
      },
      {
        heading: 'Why a rollout is different from a one-off fitout',
        body: [
          'A single fitout optimises for one space. A rollout optimises for repeatability, consistency and speed across many. The priorities change:',
        ],
        bullets: [
          'Consistency over bespoke — every store must match the brand standard, not express a one-off design.',
          'A repeatable programme — a documented method so each site follows the same proven sequence.',
          'Cost certainty at scale — a known rate per store so you can model the capital cost of the whole network.',
          'Brand compliance — finishes, joinery and signage that meet the brand manual exactly.',
          'Minimal disruption — staggered openings that keep the schedule moving without overloading any one trade.',
        ],
      },
      {
        heading: 'The advantage of one fitout partner across every site',
        body: [
          'Splitting a rollout across a different builder in each town guarantees inconsistency — different joiners, different finishes and different interpretations of the brand manual. A single partner running the whole programme delivers:',
        ],
        bullets: [
          'One point of contact and one contract for the entire rollout, not a new relationship in every town.',
          'Identical joinery every time — because we manufacture counters, cabinetry and displays in our own workshop, the prototype joinery is reproduced exactly for every store.',
          'Predictable lead times — controlling manufacturing in-house means each store joinery is ready when the programme needs it, not stuck in the queue of a third-party supplier.',
          'Economies of repetition — once value engineering and detailing are solved on the prototype, the savings apply to every site that follows.',
          'A single quality benchmark — the same QA checklist and standard of finish applied at every handover.',
        ],
      },
      {
        heading: 'How a franchise rollout works, step by step',
        body: [
          'A well-run rollout follows a clear sequence. The first store does the heavy lifting, and every store after it gets faster.',
        ],
        table: {
          caption:
            'A typical franchise rollout sequence. The prototype store sets the standard; subsequent sites replicate it on a rolling programme.',
          headers: ['Stage', 'What happens'],
          rows: [
            ['1. Prototype store', 'We build your first or reference store to the agreed design and document every detail — layout, joinery, finishes, services and signage.'],
            ['2. Fitout standards pack', 'The prototype becomes a documented standard: drawings, a finishes schedule, joinery specifications and a brand-compliant materials list to replicate.'],
            ['3. Site surveys', 'Each new tenancy is surveyed and the standard is adapted to its shell, services and landlord or centre requirements.'],
            ['4. Programme and staging', 'Sites are scheduled on a rolling programme aligned to your lease and opening dates, with joinery manufactured ahead of each install.'],
            ['5. Construction and install', 'Our crews fit out each store to the standard, coordinating all trades and centre inductions, often working after hours to hit opening dates.'],
            ['6. QA and handover', 'Each store is checked against the same defects and brand-compliance checklist before a clean handover — ready to trade.'],
          ],
        },
      },
      {
        heading: 'Keeping every store on brand',
        body: [
          'Brand consistency is the whole point of a franchise, and the fitout is where it is won or lost. We work to your brand standards manual — or help build one from the prototype — so finishes, joinery profiles, colours, lighting and signage are specified once and reproduced everywhere.',
          'Because the joinery is made in-house, the elements customers most associate with your brand — the service counter, the display joinery, the feature wall — come out identical at every site rather than "close enough". Where a tenancy forces a change, such as a structural column, a different ceiling height or a centre signage rule, we adapt around it while protecting the parts of the design that carry the brand.',
        ],
      },
      {
        heading: 'Managing cost and budget across a rollout',
        body: [
          'The financial advantage of a rollout is predictability. Once the prototype is priced and built, each later store can be quoted against a known scope and rate, so you can model the capital cost of the whole network rather than guessing site by site.',
          'Value engineering compounds: a smarter, cheaper way to build a counter or detail a shopfront, solved once on the prototype, saves money on every store that follows. We provide a fixed-price proposal per site so there are no surprises, and we flag the site-specific variables — tenancy condition, services upgrades, make-good and centre requirements — that legitimately move the number up or down. For indicative per-square-metre ranges by fitout type, see our commercial fitout cost guide.',
        ],
      },
      {
        heading: 'Common rollout challenges (and how we handle them)',
        body: [
          'Multi-site programmes carry risks a single fitout does not. The ones that derail rollouts are predictable, and manageable:',
        ],
        bullets: [
          'Tenancy variation — no two shells are identical, so we survey each site and adapt the standard rather than forcing it.',
          'Shopping-centre rules — different centres mean different fitout guides, inductions and trading-hour restrictions, which we manage so your programme stays on track.',
          'Regional sites — for stores outside the metro area we plan logistics and local trades into the programme while keeping joinery and QA centralised.',
          'Tight opening windows — leases and launch dates are fixed, so we build programmes backwards from each opening date.',
          'Trading while you build — for refits of existing stores we stage works and use after-hours shifts to keep the doors open.',
        ],
      },
    ],
    keyTakeaways: [
      'A franchise rollout is a repeatable system, not a series of one-off fitouts — the prototype store sets the standard every site replicates.',
      'One fitout partner across the whole network is the surest way to keep stores consistent, especially when the joinery is made in one workshop.',
      'In-house joinery manufacturing means identical counters, cabinetry and finishes at every site, with lead times you can plan around.',
      'A documented standard plus a fixed price per site gives you cost certainty across the whole rollout.',
      'The risks that derail rollouts — tenancy variation, centre rules, regional logistics and tight openings — are all manageable with the right programme.',
    ],
    faqs: [
      {
        question: 'Can you roll out a franchise across multiple sites in Brisbane and SEQ?',
        answer:
          'Yes. We deliver multi-site fitout rollouts across Brisbane and South East Queensland, and travel to regional Queensland for the right programme. One contract and one team cover every store, so you are not managing a different builder in each location.',
      },
      {
        question: 'Will every store actually look the same?',
        answer:
          'That is the goal of a rollout, and it is where our in-house joinery matters. Because we manufacture the counters, cabinetry and display joinery in our own Brisbane workshop, the brand-defining elements are reproduced identically at every site rather than reinterpreted by a different joiner each time.',
      },
      {
        question: 'Do you work to a franchisor brand standards manual?',
        answer:
          'Yes. We build to your existing brand standards and fitout guidelines, and if you do not have a documented standard yet we can help create one from the prototype store so every future site has a single source of truth.',
      },
      {
        question: 'Can you replicate a prototype or reference store?',
        answer:
          'Yes. The most efficient rollouts start with one completed reference store that we document in detail — drawings, finishes and joinery specifications — then replicate across every subsequent site, adapting only for each tenancy.',
      },
      {
        question: 'How do you price a franchise rollout?',
        answer:
          'After the prototype is scoped, we quote each store against a known standard and provide a fixed-price proposal per site, with the site-specific variables — tenancy condition, services, make-good and centre requirements — called out separately so your network budget stays predictable.',
      },
      {
        question: 'Can you fit out new stores without closing existing ones?',
        answer:
          'For refits of trading stores we stage the work and use after-hours and weekend shifts to minimise disruption, so your existing locations keep trading while the rollout continues.',
      },
    ],
    relatedServices: [
      'shopfitting',
      'retail-fitout',
      'cafe-restaurant-fitout',
      'commercial-fitout',
      'joinery-manufacturing',
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export default guides;
