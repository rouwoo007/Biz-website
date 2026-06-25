import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import HeroSlideshow from '@/components/HeroSlideshow';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import { company } from '@/data/company';

const heroImages = [
  '/images/hero-fitout.webp',
  '/images/Curva_107 Coffee_1.webp',
  '/images/DSC00398.webp',
  '/images/Curva_107 Coffee_5.webp',
  '/images/DSC00649.webp',
  '/images/Curva_107 Coffee_8.webp',
  '/images/DSC00719.webp',
];

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

// --- Service icons — keyed by the `icon` field in src/data/services.ts ------
const serviceIcons: Record<string, React.ReactNode> = {
  store: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
    </svg>
  ),
  building: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 10h1m3 0h1m-5 4h1m3 0h1m-5 4h1m3 0h1" />
    </svg>
  ),
  hammer: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.343 9.657L3.515 6.83A4.5 4.5 0 019.828 3.5l2.829 2.829m-6.314 3.328l8.485 8.485m0 0l1.415 1.415a2 2 0 002.828-2.829L17.16 15.1m-8.485-8.485l3.182-3.182" />
    </svg>
  ),
  coffee: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14l-1.5 9H6.5L5 3zm0 0H3m16 0h2M6 21h12M8 12v5m4-5v5m4-5v5" />
    </svg>
  ),
  'shopping-bag': (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 10-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  medical: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 3h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  office: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
    </svg>
  ),
};

// --- Floating stat band ------------------------------------------------------
const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 15, suffix: '+', label: 'Years in Business' },
  { value: 100, suffix: '%', label: 'In-House Joinery' },
];

// --- Marquee sectors ---------------------------------------------------------
const sectors = [
  'Retail Fitouts',
  'Café & Restaurant',
  'Medical & Dental',
  'Office Workplaces',
  'Custom Joinery',
  'Shopfronts',
  'Hospitality Venues',
  'Gyms & Wellness',
];

// --- "The difference" feature points ----------------------------------------
const differences = [
  {
    title: 'Our own joinery workshop',
    body: 'Custom cabinetry, counters and fixtures built in our Sumner Park workshop — so we control quality, lead times and cost.',
  },
  {
    title: 'A single point of contact',
    body: 'One team manages every trade from strip-out to handover. No subcontractor finger-pointing, no gaps in the schedule.',
  },
  {
    title: 'Fixed-price proposals',
    body: 'A detailed quote covering every trade up front, so there are no surprises when the invoice lands.',
  },
  {
    title: 'QBCC licensed & insured',
    body: `Licence ${company.qbcc} — fully compliant commercial building work right across South East Queensland.`,
  },
];

// --- Process steps -----------------------------------------------------------
const processSteps = [
  { title: 'Consult & Measure', body: 'We meet on-site to understand your vision, budget and lease dates.' },
  { title: 'Design & Fixed Quote', body: 'Shop drawings and a fixed-price proposal covering every trade.' },
  { title: 'Approvals & Programme', body: 'We manage council approvals and issue a firm build programme.' },
  { title: 'Build & Manage', body: 'Our crew coordinates every trade with weekly progress updates.' },
  { title: 'Handover & Warranty', body: 'A full defects inspection, then keys and a written warranty.' },
];

// --- Common questions --------------------------------------------------------
const homeFaqs = [
  {
    question: 'How long does a commercial fitout take?',
    answer:
      'Most retail shopfits range from 4 to 12 weeks and office fitouts of 200–500 sqm from 8 to 14 weeks, depending on size and complexity. We provide a detailed programme at quoting stage.',
  },
  {
    question: 'Do you provide a fixed-price quote?',
    answer:
      'Yes. We provide a detailed fixed-price proposal covering all trades so there are no hidden costs, subject to any variations documented and agreed in writing.',
  },
  {
    question: 'Can you work after hours or in an occupied premises?',
    answer:
      'Yes. We regularly stage works or schedule noisy and disruptive tasks outside trading hours, using hoarding, dust control and noise management to keep your business operating.',
  },
  {
    question: 'Are you QBCC licensed?',
    answer:
      'Yes. Fix It Up Pty Ltd holds QBCC Licence 15059346, covering commercial building work throughout Queensland.',
  },
  {
    question: 'Do you manufacture your own joinery?',
    answer:
      'Yes. We design and build custom joinery in our own Sumner Park workshop, giving us tight control over quality, lead times and cost across every project.',
  },
];

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 2);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Keep reveal content visible when JS is unavailable */}
      <noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: '.reveal-init{opacity:1 !important;transform:none !important;}',
          }}
        />
      </noscript>

      {/* ================================================================== */}
      {/* HERO                                                                */}
      {/* ================================================================== */}
      <section className="relative isolate flex min-h-[86vh] items-center overflow-hidden bg-charcoal sm:min-h-[90vh]">
        <HeroSlideshow images={heroImages} interval={6000} />

        {/* Cinematic scrims */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/25" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/45 to-transparent" />

        <div className="container relative z-10 py-28 sm:py-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md"
              style={{ animationDelay: '0.05s' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-copper-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-copper-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-white/85 sm:text-sm">
                Brisbane &amp; South East Queensland &middot; QBCC Licensed
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up mt-7 text-[2.65rem] font-extrabold leading-[1.04] tracking-tight text-white text-balance sm:text-6xl xl:text-7xl"
              style={{ animationDelay: '0.15s' }}
            >
              Commercial shopfitting &amp; joinery,{' '}
              <span className="relative whitespace-nowrap text-copper-400">
                built to open on time.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-copper-500/70"
                >
                  <path d="M2 8c60-5 120-6 180-4s90 4 116 2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="animate-fade-up mt-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl"
              style={{ animationDelay: '0.28s' }}
            >
              One team for your entire fitout — retail, hospitality, medical and office. We design it,
              manufacture the joinery in our own Brisbane workshop, and manage every trade, so your
              doors open on schedule and on budget.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: '0.4s' }}
            >
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-copper-500 px-8 py-4 text-base font-bold text-white shadow-copper-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-copper-400"
              >
                Get a Free Quote
                <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10"
              >
                View Our Work
                <svg className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex">
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em]">Scroll</span>
          <svg className="h-5 w-5 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FLOATING STAT BAND                                                  */}
      {/* ================================================================== */}
      <section className="bg-cream">
        <div className="container">
          <div className="relative z-20 -mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-charcoal/10 bg-charcoal/10 shadow-float-lg sm:-mt-20 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-8 text-center sm:py-10">
                <div className="text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
            {/* Licence cell */}
            <div className="flex flex-col items-center justify-center bg-white px-6 py-8 text-center sm:py-10">
              <svg className="mb-2 h-9 w-9 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-sm font-extrabold uppercase tracking-wider text-charcoal">QBCC Licensed</p>
              <p className="mt-1 text-xs text-gray-500">Lic. {company.qbcc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SECTOR MARQUEE                                                      */}
      {/* ================================================================== */}
      <section className="mt-16 sm:mt-24" aria-label="Sectors we fit out">
        <div className="mask-fade-x relative flex overflow-hidden border-y border-charcoal/10 bg-charcoal py-5">
          <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
            {[...sectors, ...sectors].map((sector, i) => (
              <span key={i} className="flex items-center" aria-hidden={i >= sectors.length}>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-base">
                  {sector}
                </span>
                <span className="mx-8 h-1.5 w-1.5 rotate-45 bg-copper-500" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SERVICES                                                            */}
      {/* ================================================================== */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="badge-copper">What We Do</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl lg:text-5xl text-balance">
              Everything your fitout needs, under one roof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              From concept to completion, we self-perform joinery and manage every trade — so your
              project has one team, one schedule and one point of accountability.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-copper-300 hover:shadow-card-hover"
                >
                  {/* Top fill bar on hover */}
                  <span aria-hidden="true" className="absolute left-0 top-0 h-1 w-0 bg-copper-500 transition-all duration-500 group-hover:w-full" />

                  {/* Index watermark */}
                  <span aria-hidden="true" className="absolute right-6 top-5 text-5xl font-extrabold text-charcoal/[0.04] transition-colors duration-300 group-hover:text-copper-500/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-copper-50 text-copper-600 transition-colors duration-300 group-hover:bg-copper-500 group-hover:text-white">
                    <span className="h-7 w-7">{serviceIcons[service.icon]}</span>
                  </div>

                  <h3 className="mb-2 text-lg font-bold leading-snug text-charcoal">{service.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-500">{service.shortDescription}</p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-copper-700">
                    Learn more
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-charcoal/15 px-7 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-copper-400 hover:text-copper-700"
            >
              View All Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* THE DIFFERENCE (dark)                                               */}
      {/* ================================================================== */}
      <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-[0.03]" />
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full opacity-50"
          style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(181,85,58,0.4) 0%, rgba(181,85,58,0) 70%)' }}
        />

        <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-white/10 sm:aspect-[5/4]">
                <Image
                  src="/images/DSC00649.webp"
                  alt="Custom commercial joinery and fitout by Fix It Up"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-white/95 p-5 shadow-float-lg backdrop-blur sm:block">
                <div className="text-3xl font-extrabold text-copper-600">
                  <CountUp end={15} suffix="+" />
                </div>
                <p className="mt-1 max-w-[8rem] text-xs font-medium leading-snug text-charcoal/70">
                  years fitting out South East Queensland
                </p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-copper-500/30 bg-copper-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-300">
                Why Fix It Up
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl text-balance">
                One contract. Every trade. Zero finger-pointing.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
                Most fitouts go sideways at the seams between trades. We close those gaps by
                self-performing joinery and managing the whole build in-house.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {differences.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="flex gap-4">
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-copper-500/15 text-copper-400">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-copper-300 transition-colors hover:text-copper-200"
              >
                More about how we work
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FEATURED PROJECTS (bento)                                           */}
      {/* ================================================================== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <span className="badge-copper">Our Work</span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
                  Featured projects
                </h2>
                <p className="mt-3 text-base leading-relaxed text-gray-500 sm:text-lg">
                  A selection of our recent commercial fitout and joinery projects across Brisbane
                  and South East Queensland.
                </p>
              </div>
              <Link
                href="/projects"
                className="group inline-flex flex-shrink-0 items-center gap-2 text-sm font-semibold text-copper-700 transition-colors hover:text-copper-800"
              >
                View all projects
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {featuredProjects.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={i * 90}
                className={i === 0 ? 'sm:col-span-2 lg:row-span-2' : ''}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group relative block h-full w-full overflow-hidden rounded-3xl bg-charcoal ${
                    i === 0
                      ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[30rem]'
                      : 'aspect-[4/3] lg:aspect-auto lg:min-h-[14.5rem]'
                  }`}
                  aria-label={`View project: ${project.name}`}
                >
                  <Image
                    src={project.photo}
                    alt={project.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={i === 0 ? '(max-width: 640px) 100vw, 66vw' : '(max-width: 640px) 100vw, 33vw'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  <span className="absolute left-4 top-4 inline-block rounded-full bg-copper-600 px-3 py-1 text-xs font-semibold text-white shadow">
                    {project.typeLabel}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className={`font-bold leading-snug text-white ${i === 0 ? 'text-xl sm:text-2xl' : 'text-base'}`}>
                      {project.name}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-copper-300 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span className="text-xs font-medium">View project</span>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PROCESS                                                             */}
      {/* ================================================================== */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="badge-copper">How It Works</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl lg:text-5xl text-balance">
              From first sketch to final handover
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              A clear, proven five-step process that keeps your fitout on schedule and on budget.
            </p>
          </Reveal>

          <div className="relative mt-16">
            {/* Connecting line */}
            <div aria-hidden="true" className="absolute left-0 right-0 top-7 hidden h-px bg-charcoal/15 md:block" />

            <div className="grid gap-10 md:grid-cols-5">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80} className="relative text-center md:text-left">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-copper-600 text-lg font-bold text-white shadow-copper-glow ring-8 ring-cream md:mx-0">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-charcoal">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TESTIMONIALS                                                        */}
      {/* ================================================================== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="badge-copper">Client Stories</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl lg:text-5xl text-balance">
              Businesses that trusted us with their space
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              We measure our success by the satisfaction of the businesses we work with.
            </p>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {featuredTestimonials.map((testimonial, i) => (
              <Reveal key={testimonial.id} delay={i * 100}>
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  rating={testimonial.rating}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ                                                                 */}
      {/* ================================================================== */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="badge-copper">FAQs</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl lg:text-5xl text-balance">
              Common questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-500 sm:text-lg">
              Answers to the questions Brisbane and South East Queensland businesses ask us most
              before starting a fitout.
            </p>
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {homeFaqs.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <details className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-white transition-colors open:border-copper-200">
                  <summary className="flex cursor-pointer select-none items-center justify-between gap-4 p-5 font-semibold text-charcoal transition-colors hover:text-copper-700 [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base font-semibold leading-snug">{faq.question}</h3>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-copper-600 transition-transform duration-200 group-open:rotate-45 group-open:border-copper-300"
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-charcoal/10 px-5 pb-5 pt-4 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA                                                                 */}
      {/* ================================================================== */}
      <CTASection
        heading="Ready to transform your space?"
        subtext="Get a free, no-obligation quote from our expert team. We'll visit your site, discuss your vision and deliver a detailed proposal — at no cost to you."
      />
    </>
  );
}
