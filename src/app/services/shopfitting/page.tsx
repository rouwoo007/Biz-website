import type { Metadata } from 'next';
import Link from 'next/link';
import { getServiceBySlug } from '@/data/services';
import { getProjectBySlug, type Project } from '@/data/projects';
import { company } from '@/data/company';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';

const BASE_URL = 'https://fixitup.au';

export const metadata: Metadata = {
  title: { absolute: 'Shopfitters Brisbane | Commercial Shopfitting | Fix It Up' },
  description:
    'Commercial shopfitters in Brisbane delivering retail, cafe, office & medical fitouts end-to-end. QBCC licensed, 500+ projects, in-house joinery. Free quote.',
  alternates: { canonical: '/services/shopfitting' },
  openGraph: {
    title: 'Commercial Shopfitters Brisbane | Fix It Up Pty Ltd',
    description:
      'QBCC-licensed commercial shopfitters in Brisbane — retail, cafe, medical & office fitouts with joinery built in our own Sumner Park workshop.',
    url: '/services/shopfitting',
  },
  twitter: {
    title: 'Commercial Shopfitters Brisbane | Fix It Up Pty Ltd',
    description:
      'QBCC-licensed commercial shopfitters in Brisbane — retail, cafe, medical & office fitouts with in-house joinery.',
  },
};

// --- Sectors we shopfit (each links to the relevant service page) ------------
const sectors = [
  {
    title: 'Retail shopfitting',
    href: '/services/retail-fitout',
    body: 'Shopfronts, display systems and counters for stores and showrooms — recent retail work includes Cindy Chow, Andersens Flooring and Mister Cuts.',
  },
  {
    title: 'Cafe & restaurant fitouts',
    href: '/services/cafe-restaurant-fitout',
    body: 'Espresso bars, commercial kitchens and dining fitouts built to health and food-premises standards — including 7 Cup, Cafe 107, Soul Pantry and Melt Brothers Chermside.',
  },
  {
    title: 'Medical & dental fitouts',
    href: '/services/medical-dental-fitout',
    body: 'Compliant consult rooms, reception and treatment spaces built to health-infrastructure standards, like our Metro Medical Centre fitout.',
  },
  {
    title: 'Office & workplace fitouts',
    href: '/services/office-fitout',
    body: 'Open-plan, partitioned and hybrid workplaces fitted out around how your team actually works, from reception joinery to meeting rooms.',
  },
  {
    title: 'Commercial joinery',
    href: '/services/joinery-manufacturing',
    body: 'Our biggest point of difference — custom counters, cabinetry, displays and shopfronts designed and built in our own Sumner Park workshop, not subcontracted out.',
  },
  {
    title: 'Turnkey commercial fitouts',
    href: '/services/commercial-fitout',
    body: 'One fixed-price contract from strip-out to handover, with every trade scheduled, managed and certified by us so your doors open on time.',
  },
];

// --- Real Brisbane suburbs we cover (from src/data/locations.ts) --------------
const brisbaneSuburbs = [
  'Brisbane CBD',
  'South Brisbane',
  'Fortitude Valley',
  'West End',
  'Newstead',
  'Teneriffe',
  'Chermside',
  'Indooroopilly',
];

const seqAreas = [
  { name: 'Brisbane', href: '/locations/brisbane' },
  { name: 'Ipswich', href: '/locations/ipswich' },
  { name: 'Logan', href: '/locations/logan' },
  { name: 'Gold Coast', href: '/locations/gold-coast' },
  { name: 'Sunshine Coast', href: '/locations/sunshine-coast' },
  { name: 'Toowoomba', href: '/locations/toowoomba' },
];

const localFitoutLinks = [
  { label: 'Retail fitouts in Brisbane', href: '/fitouts/retail-fitout-brisbane' },
  { label: 'Cafe fitouts in Brisbane', href: '/fitouts/cafe-fitout-brisbane' },
  { label: 'Office fitouts in Brisbane', href: '/fitouts/office-fitout-brisbane' },
  { label: 'Medical & dental fitouts in Brisbane', href: '/fitouts/medical-dental-fitout-brisbane' },
];

// --- Trust signals (all verified in src/data/company.ts) ---------------------
const trustPoints = [
  `QBCC Licence ${company.qbcc} — licensed commercial builder`,
  `${company.yearsExperience} years in commercial fitout`,
  `${company.projectsCompleted} projects completed across SEQ`,
  'In-house joinery workshop in Sumner Park',
  'Fixed-price proposals covering every trade',
  'A single point of contact from quote to handover',
  'Written warranty on workmanship',
];

// --- FAQs (answers use only verified facts; FAQPage schema below) ------------
const faqs = [
  {
    question: 'What does a commercial shopfitter do?',
    answer:
      'A commercial shopfitter turns an empty or stripped tenancy into a finished, trading space — managing design, joinery, flooring, ceilings, partitions, electrical, plumbing and mechanical, plus signage and council approvals. Fix It Up delivers all of this under one fixed-price contract across Brisbane and South East Queensland.',
  },
  {
    question: 'Are you a QBCC-licensed shopfitter?',
    answer: `Yes. Fix It Up Pty Ltd holds QBCC Licence ${company.qbcc}, covering commercial building work throughout Queensland.`,
  },
  {
    question: 'Do you make your own joinery?',
    answer:
      'Yes. We design and build custom joinery — counters, cabinetry, displays and shopfronts — in our own Sumner Park workshop in Brisbane’s west, giving us tight control over quality, lead times and cost rather than relying on a third-party supplier’s queue.',
  },
  {
    question: 'How long does a shopfit take in Brisbane?',
    answer:
      'Most retail shopfits take around 4 to 12 weeks on site depending on size and complexity, with extra time up front for design, quoting and approvals. We issue a detailed programme at quoting stage — see our guide on how long a fitout takes for the full breakdown.',
  },
  {
    question: 'How much does a shopfit cost in Brisbane?',
    answer:
      'It depends on size, scope and finish, so the only reliable figure is a written fixed-price quote for your specific tenancy. Our Brisbane commercial fitout cost guide breaks down the typical ranges by fitout type to help you budget.',
  },
  {
    question: 'Which areas of Brisbane and SEQ do you cover?',
    answer:
      'We shopfit right across Brisbane — from the CBD, South Brisbane, Fortitude Valley and West End through to Newstead, Teneriffe, Chermside and Indooroopilly — and across South East Queensland including Ipswich, Logan, the Gold Coast, Sunshine Coast and Toowoomba. Our Sumner Park workshop keeps us central to the whole region.',
  },
  {
    question: 'Can you work after hours or in an occupied centre?',
    answer:
      'Yes. We regularly stage works or schedule noisy tasks outside trading hours, using hoarding, dust control and noise management, so you and neighbouring tenancies keep operating during the fitout.',
  },
  {
    question: 'Do you handle council and building approvals?',
    answer:
      'Yes. We coordinate development applications, building approvals and certifications — including change-of-use and food-premises requirements — through Brisbane City Council and private certifiers as part of our full-service offering.',
  },
];

export default function ShopfittingPage() {
  const service = getServiceBySlug('shopfitting');
  const features = service?.features ?? [];
  const processSteps = service?.process ?? [];

  const proofSlugs = [
    'cindy-chow',
    'cafe-107',
    'melt-brothers-chermside',
    'metro-medical-centre',
    'andersens-flooring',
    'soul-pantry',
  ];
  const proofProjects = proofSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => Boolean(p));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Commercial Shopfitting Brisbane',
        description:
          'End-to-end commercial shopfitting and fitouts for retail, hospitality, medical and office spaces across Brisbane and South East Queensland.',
        url: `${BASE_URL}/services/shopfitting`,
        serviceType: 'Commercial shopfitting',
        provider: { '@id': `${BASE_URL}/#business` },
        areaServed: [
          { '@type': 'City', name: 'Brisbane' },
          { '@type': 'City', name: 'Ipswich' },
          { '@type': 'City', name: 'Logan' },
          { '@type': 'City', name: 'Gold Coast' },
          { '@type': 'City', name: 'Sunshine Coast' },
          { '@type': 'City', name: 'Toowoomba' },
          { '@type': 'State', name: 'Queensland' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Shopfitting',
            item: `${BASE_URL}/services/shopfitting`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-600 hover:text-copper-700 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>

          <div className="max-w-3xl">
            <div className="flex justify-start mb-5">
              <span className="inline-block w-12 h-1 rounded-full bg-copper-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight">
              Commercial Shopfitters Brisbane
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              {company.name} is a QBCC-licensed commercial shopfitter based in Brisbane&apos;s west,
              delivering retail, hospitality, medical and office fitouts end to end across Brisbane and
              South East Queensland. With {company.yearsExperience} years in the trade and{' '}
              {company.projectsCompleted} projects completed, we manage every trade under one
              fixed-price contract — and because we manufacture our own joinery in our Sumner Park
              workshop, the fixtures that define your space are built and controlled by us, not
              subcontracted out.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-copper-500 text-white text-sm font-semibold hover:bg-copper-600 transition-colors shadow-copper-glow"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-gray-300 text-charcoal text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / what is commercial shopfitting */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-6">
            Commercial shopfitting across Brisbane and SEQ
          </h2>
          <div className="flex flex-col gap-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            <p>
              We fit out cafes and restaurants, retail stores, medical and dental practices, offices,
              gyms and wellness studios — from a single tenancy in a shopping centre to a full turnkey
              shopfit of a standalone building. Whatever the space, you deal with one team that owns the
              programme from first measure to final handover.
            </p>
            <p>
              That single-contract approach is the difference between a fitout that opens on time and one
              that stalls between trades. We design it, build the joinery in-house, coordinate every
              subcontractor, manage council approvals and hand you the keys with a written warranty.{' '}
              <Link href="/about" className="text-copper-700 font-semibold hover:text-copper-800">
                Learn more about Fix It Up
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What's included (features) */}
      {features.length > 0 && (
        <section className="bg-cream py-16 sm:py-24">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                What our Brisbane shopfitting service includes
              </h2>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                One contract, one team, zero gaps — every trade managed under the same roof.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-card p-5"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-copper-50 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sectors we cover */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Shopfitting sectors we cover in Brisbane
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Specialist experience across every commercial sector — explore the service that fits your
              project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                href={sector.href}
                className="group flex flex-col rounded-2xl bg-cream border border-gray-100 p-6 hover:border-copper-300 hover:shadow-card-hover transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-charcoal group-hover:text-copper-700 transition-colors mb-2">
                  {sector.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{sector.body}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-copper-700 mt-4 group-hover:gap-2 transition-all">
                  Explore
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* In-house joinery — point of difference */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-copper-50 border border-copper-200 rounded-full px-4 py-1.5 mb-5">
            <span className="text-copper-700 text-xs font-semibold uppercase tracking-widest">
              Our point of difference
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-6">
            In-house joinery, built in our Sumner Park workshop
          </h2>
          <div className="flex flex-col gap-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            <p>
              Most shopfitters subcontract their joinery, which means your counters, cabinetry and
              shopfronts sit in someone else&apos;s production queue — and any quality or timing problem
              becomes a finger-pointing exercise. We don&apos;t work that way. Our joinery is designed and
              manufactured in our own workshop in Sumner Park, in Brisbane&apos;s west, just off the
              Centenary Motorway.
            </p>
            <p>
              Building locally and in-house gives us tight control over quality, shorter delivery runs to
              Brisbane sites and reliable lead times on custom work — the fixtures that define how your
              space looks and works are made, controlled and installed by the same team that manages the
              build.{' '}
              <Link href="/services/joinery-manufacturing" className="text-copper-700 font-semibold hover:text-copper-800">
                See our commercial joinery service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      {processSteps.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">Our shopfitting process</h2>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                A clear, structured process means no surprises — just a smooth project from first call to
                final handover.
              </p>
            </div>
            <div className="relative max-w-3xl">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-copper-200 hidden sm:block" aria-hidden="true" />
              <ol className="space-y-8">
                {processSteps.map((step) => (
                  <li key={step.step} className="relative flex gap-6 sm:gap-8">
                    <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-copper-500 text-white text-sm font-bold shadow-copper-glow z-10">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-5 border border-gray-100 shadow-card">
                      <h3 className="text-base font-semibold text-charcoal mb-1.5">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Recent projects */}
      {proofProjects.length > 0 && (
        <section className="bg-cream py-16 sm:py-24">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                  Recent Brisbane shopfitting projects
                </h2>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  A snapshot of recent retail, hospitality and medical fitouts delivered across Brisbane
                  and South East Queensland.
                </p>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-copper-700 font-semibold text-sm hover:text-copper-800 transition-colors flex-shrink-0"
              >
                View all projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {proofProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  name={project.name}
                  slug={project.slug}
                  type={project.type}
                  typeLabel={project.typeLabel}
                  photo={project.photo}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Areas we serve */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Areas we serve for shopfitting
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              We shopfit across Brisbane — including {brisbaneSuburbs.slice(0, -1).join(', ')} and{' '}
              {brisbaneSuburbs[brisbaneSuburbs.length - 1]} — and right across South East Queensland.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-sm font-semibold text-charcoal uppercase tracking-widest mb-4">
                Cities &amp; regions
              </h3>
              <div className="flex flex-wrap gap-3">
                {seqAreas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cream border border-gray-200 text-sm font-medium text-charcoal hover:border-copper-500 hover:text-copper-700 transition-colors shadow-sm"
                  >
                    Shopfitters {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-charcoal uppercase tracking-widest mb-4">
                Popular Brisbane fitouts
              </h3>
              <ul className="space-y-2.5">
                {localFitoutLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-copper-700 hover:text-copper-800 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Why choose Fix It Up as your Brisbane shopfitter
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-card p-5"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-copper-50 flex items-center justify-center mt-0.5">
                  <svg className="w-3.5 h-3.5 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-gray-700 leading-relaxed font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost & timelines */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-6">
            Shopfitting cost and timelines
          </h2>
          <div className="flex flex-col gap-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            <p>
              Every shopfit is different, so the cost depends on the size of the tenancy, the scope of
              work and the finish level. The only reliable number is a written, fixed-price quote for your
              space — and that&apos;s exactly what we provide, with every trade itemised so there are no
              surprises on invoice day.
            </p>
            <p>
              For planning, our guides walk through the real ranges and how long a project takes:{' '}
              <Link href="/guides/commercial-fitout-cost-brisbane" className="text-copper-700 font-semibold hover:text-copper-800">
                commercial fitout costs in Brisbane
              </Link>{' '}
              and{' '}
              <Link href="/guides/how-long-does-a-fitout-take" className="text-copper-700 font-semibold hover:text-copper-800">
                how long a fitout takes
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              Common questions about commercial shopfitting in Brisbane.
            </p>
          </div>
          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex cursor-pointer select-none items-center justify-between gap-4 p-5 font-semibold text-charcoal hover:text-copper-600 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold leading-snug">{faq.question}</h3>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-copper-500 transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to start your Brisbane shopfit?"
        subtext="Get in touch for a free, no-obligation fixed-price quote. We'll visit your site, scope the works and deliver a detailed proposal — at no cost to you."
      />
    </>
  );
}
