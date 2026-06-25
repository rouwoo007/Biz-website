import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import HeroSlideshow from '@/components/HeroSlideshow';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';

const heroImages = [
  '/images/hero-fitout.jpg',
  '/images/Curva_107 Coffee_1.jpg',
  '/images/DSC00398.jpg',
  '/images/Curva_107 Coffee_5.jpg',
  '/images/DSC00649.jpg',
  '/images/Curva_107 Coffee_8.jpg',
  '/images/DSC00719.jpg',
];

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

// --- Service icon map --------------------------------------------------------
const serviceIcons: Record<string, React.ReactNode> = {
  retail: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 7h13L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>
  ),
  cafe: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
    </svg>
  ),
  office: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  joinery: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  medical: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM12 8v8M8 12h8" />
    </svg>
  ),
  project: (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
};

// --- Trust bar items ---------------------------------------------------------
const trustItems = [
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-copper-500 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'QBCC Licensed',
    value: 'Licence No. 15059346',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-copper-500 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    label: 'ABN Registered',
    value: 'ABN 37 166 086 835',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-copper-500 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: '15+ Years Experience',
    value: 'In Commercial Fitouts',
  },
  {
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-copper-500 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    label: '500+ Projects',
    value: 'Successfully Completed',
  },
];

// --- Common questions (sourced from src/data/services.ts) --------------------
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
      {/* -- Hero Section ---------------------------------------------------- */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background slideshow */}
        <HeroSlideshow images={heroImages} interval={5000} />

        {/* Overlay for text readability — light on the left, clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/50 to-transparent" />

        <div className="container mx-auto relative z-10 py-24 sm:py-32">
          <div className="max-w-4xl">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-copper-50 border border-copper-200 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse" />
              <span className="text-charcoal/60 text-sm font-medium tracking-wide">
                Brisbane &amp; South East Queensland
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-charcoal leading-[1.08] tracking-tight mb-6">
              Commercial{' '}
              <span className="text-copper-600">Shopfitting</span>
              {' '}&amp; Joinery{' '}
              <span className="relative inline-block">
                Experts
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-copper-500/40 rounded-full" />
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-charcoal/80 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
              One team for your entire fitout — retail, hospitality, medical and office. We design
              it, manufacture the joinery in our own Brisbane workshop, and manage every trade, so
              your doors open on schedule and on budget across South East Queensland.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/get-a-quote"
                className="group inline-flex items-center gap-2.5 bg-copper-600 hover:bg-copper-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-copper-glow hover:shadow-lg hover:-translate-y-0.5"
              >
                Get a Free Quote
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center gap-2.5 border-2 border-charcoal/20 hover:border-charcoal/40 text-charcoal font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-charcoal/5"
              >
                View Our Work
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Quick trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10">
              {['QBCC Licensed', 'ABN Registered', '15+ Years Experience', '500+ Projects'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-charcoal/70 text-sm">
                  <svg className="w-3.5 h-3.5 text-copper-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Trust Bar ------------------------------------------------------- */}
      <section className="bg-white border-y border-gray-100 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start sm:items-center gap-3 p-4 rounded-xl bg-cream border border-gray-100"
              >
                <div className="mt-0.5 sm:mt-0">{item.icon}</div>
                <div>
                  <p className="text-charcoal font-bold text-sm sm:text-base leading-snug">{item.label}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Services Grid --------------------------------------------------- */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-copper-50 border border-copper-200 rounded-full px-4 py-1.5 mb-5">
              <span className="text-copper-600 text-xs font-semibold uppercase tracking-widest">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              From concept to completion, we provide specialist shopfitting and joinery services
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={serviceIcons[service.icon]}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-copper-700 font-semibold text-sm hover:text-copper-800 transition-colors"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* -- Featured Projects ----------------------------------------------- */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-copper-50 border border-copper-200 rounded-full px-4 py-1.5 mb-5">
                <span className="text-copper-600 text-xs font-semibold uppercase tracking-widest">Our Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal">
                Featured Projects
              </h2>
              <p className="text-gray-500 text-base sm:text-lg mt-3 max-w-xl leading-relaxed">
                A selection of our recent commercial fitout and joinery projects across
                Brisbane and South East Queensland.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-copper-700 font-semibold text-sm hover:text-copper-800 transition-colors flex-shrink-0"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                type={project.type}
                typeLabel={project.typeLabel}
                photo={project.photo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* -- Testimonials ---------------------------------------------------- */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-copper-50 border border-copper-200 rounded-full px-4 py-1.5 mb-5">
              <span className="text-copper-600 text-xs font-semibold uppercase tracking-widest">Client Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              We measure our success by the satisfaction of the businesses we work with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* -- Common Questions ------------------------------------------------ */}
      <section className="bg-white py-20 sm:py-28 border-t border-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-copper-50 border border-copper-200 rounded-full px-4 py-1.5 mb-5">
              <span className="text-copper-700 text-xs font-semibold uppercase tracking-widest">FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal mb-4">
              Common Questions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Answers to the questions Brisbane and South East Queensland businesses ask us most
              before starting a fitout.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {homeFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-cream rounded-xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex cursor-pointer select-none items-center justify-between gap-4 p-5 font-semibold text-charcoal hover:text-copper-700 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="text-base font-semibold leading-snug">{faq.question}</h3>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-copper-600 transition-transform duration-200 group-open:rotate-45"
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

      {/* -- CTA Section ----------------------------------------------------- */}
      <CTASection
        heading="Ready to Transform Your Space?"
        subtext="Get a free, no-obligation quote from our expert team. We'll visit your site, discuss your vision and deliver a detailed proposal — at no cost to you."
      />
    </>
  );
}
