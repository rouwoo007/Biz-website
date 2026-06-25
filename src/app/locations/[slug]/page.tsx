import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { locations, getLocationBySlug } from '@/data/locations';
import CTASection from '@/components/CTASection';

/* ─── Static params for SSG ──────────────────────────────────────── */
export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

/* ─── Metadata ───────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  if (!location) return {};

  const shortDesc = `QBCC licensed commercial shopfitting & joinery in ${location.name}. Fix It Up delivers fitouts for retail, hospitality, medical & office spaces.`;
  return {
    title: { absolute: `Shopfitting ${location.name} | Commercial Fitout & Joinery` },
    description: shortDesc,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `Commercial Shopfitting in ${location.name} | Fix It Up Pty Ltd`,
      description: shortDesc,
      url: `/locations/${location.slug}`,
    },
  };
}

/* ─── Services available in every location ───────────────────────── */
const services = [
  { label: 'Shopfitting', slug: 'shopfitting' },
  { label: 'Commercial Fitout', slug: 'commercial-fitout' },
  { label: 'Joinery Manufacturing', slug: 'joinery-manufacturing' },
  { label: 'Cafe & Restaurant Fitout', slug: 'cafe-restaurant-fitout' },
  { label: 'Retail Fitout', slug: 'retail-fitout' },
  { label: 'Medical & Dental Fitout', slug: 'medical-dental-fitout' },
  { label: 'Office Fitout', slug: 'office-fitout' },
];

/* ─── Page ───────────────────────────────────────────────────────── */
const BASE_URL = 'https://fixitup.au';

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);
  if (!location) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: `${BASE_URL}/locations` },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.name,
        item: `${BASE_URL}/locations/${location.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-navy pointer-events-none" aria-hidden="true" />
        {/* Orange bottom-edge accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-40"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          {/* Label pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 border border-orange/30 text-xs font-semibold text-orange uppercase tracking-widest mb-6">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Service Area
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
            Commercial Shopfitting in{' '}
            <span className="text-gradient-orange">{location.name}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            QBCC licensed shopfitting, joinery manufacturing and commercial fitouts
            delivered across {location.name} and surrounds.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-orange text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-orange-glow"
            >
              Get a Free Quote
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Description ───────────────────────────────────────── */}
      <section className="bg-navy-800 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block w-12 h-1 rounded-full bg-orange mb-6" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Fitout Specialists Serving {location.name}
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              {location.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Areas We Serve ────────────────────────────────────── */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">Coverage</p>
            <h2 className="section-title">Areas We Serve in {location.name}</h2>
            <p className="section-subtitle mx-auto mt-4">
              Our crews regularly work across the following suburbs and surrounding areas.
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {location.suburbs.map((suburb) => (
              <li key={suburb}>
                <div className="flex items-center gap-2 rounded-lg bg-navy-800 border border-white/5 px-4 py-3 hover:border-orange/30 transition-colors">
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0 text-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-white/80 leading-snug">{suburb}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. Services Available ─────────────────────────────────── */}
      <section className="bg-navy-800 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Services Available in {location.name}</h2>
            <p className="section-subtitle mx-auto mt-4">
              Our full range of commercial fitout and shopfitting services is available
              to businesses across {location.name}.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-3 rounded-xl bg-navy border border-white/5 px-5 py-4 hover:border-orange/40 hover:bg-navy/60 transition-all duration-200"
                >
                  {/* Arrow icon */}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange/10 flex items-center justify-center group-hover:bg-orange transition-colors duration-200">
                    <svg
                      className="w-3.5 h-3.5 text-orange group-hover:text-white transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                    {service.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. CTA ───────────────────────────────────────────────── */}
      <CTASection
        heading={`Start Your ${location.name} Fitout Project`}
        subtext={`Get in touch with our team for a free, no-obligation quote on your commercial shopfitting or fitout project anywhere across ${location.name}.`}
      />
    </>
  );
}
