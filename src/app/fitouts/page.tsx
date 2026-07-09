import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceAreas } from '@/data/serviceAreas';
import { locations } from '@/data/locations';
import { getServiceBySlug } from '@/data/services';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Fitouts by Location | Service Areas',
  description:
    'Cafe, restaurant, retail, office, medical & dental fitouts across Brisbane, Gold Coast & Sunshine Coast. Find your service area & get a free quote.',
  alternates: {
    canonical: '/fitouts',
  },
  openGraph: {
    title: 'Fitouts by Location | Fix It Up Pty Ltd',
    description:
      'Curated commercial fitout service areas across Brisbane, the Gold Coast and the Sunshine Coast. Cafe, retail, office and medical fitouts.',
    url: '/fitouts',
  },
  twitter: {
    title: 'Fitouts by Location | Fix It Up Pty Ltd',
    description:
      'Curated commercial fitout service areas across Brisbane, the Gold Coast and the Sunshine Coast. Cafe, retail, office and medical fitouts.',
  },
};

// Order locations by how many curated service-area pages they have, keeping
// the data-driven groups tidy on the page.
const grouped = locations
  .map((location) => ({
    location,
    areas: serviceAreas.filter((a) => a.locationSlug === location.slug),
  }))
  .filter((group) => group.areas.length > 0);

const BASE_URL = 'https://fixitup.au';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Fitouts by Location', item: `${BASE_URL}/fitouts` },
  ],
};

export default function FitoutsIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* -- Hero ------------------------------------------------------------ */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-500 to-transparent opacity-40"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper-50 border border-copper-200 text-xs font-semibold text-copper-600 uppercase tracking-widest mb-6">
            Service Areas
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight text-balance">
            Fitouts <span className="text-gradient-copper">by Location</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Specialist commercial fitouts, matched to your city. Choose your service area below
            to see how Fix It Up delivers cafe, retail, office and medical fitouts across
            South East Queensland.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-copper-500 text-white text-sm font-semibold hover:bg-copper-600 transition-colors shadow-copper-glow"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
      </section>

      {/* -- Grouped service-area cards -------------------------------------- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {grouped.map(({ location, areas }) => (
            <div key={location.slug}>
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <span className="inline-block w-12 h-1 rounded-full bg-copper-500 mb-4" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
                    {location.name}
                  </h2>
                </div>
                <Link
                  href={`/locations/${location.slug}`}
                  className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-copper-600 hover:gap-2 transition-all"
                >
                  All services in {location.name}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {areas.map((area) => {
                  const service = getServiceBySlug(area.serviceSlug);
                  return (
                    <li key={area.slug}>
                      <Link
                        href={`/fitouts/${area.slug}`}
                        className="group relative flex flex-col h-full rounded-2xl bg-cream border border-gray-100 p-7 hover:border-copper-300 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                      >
                        <span
                          className="absolute top-0 left-0 right-0 h-0.5 bg-copper-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
                          aria-hidden="true"
                        />

                        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-copper-600 transition-colors duration-200">
                          {service ? service.title : area.h1}
                        </h3>

                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
                          {area.intro[0]}
                        </p>

                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-copper-600 group-hover:gap-2 transition-all duration-200 mt-6">
                          View {location.name} fitouts
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* -- CTA ------------------------------------------------------------- */}
      <CTASection
        heading="Don't See Your Exact Service or Area?"
        subtext="We deliver commercial fitouts right across South East Queensland. Get in touch and we'll let you know how we can help with your project."
      />
    </>
  );
}
