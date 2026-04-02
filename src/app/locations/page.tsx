import Link from 'next/link';
import type { Metadata } from 'next';
import { locations } from '@/data/locations';

/* ─── Metadata ───────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Service Locations | Commercial Shopfitting Across South East Queensland',
  description:
    'Fix It Up Pty Ltd delivers QBCC licensed commercial shopfitting, joinery manufacturing and fitout services across Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan and Toowoomba.',
  openGraph: {
    title: 'Service Locations | Fix It Up Pty Ltd',
    description:
      'Commercial shopfitting and fitout services across Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan and Toowoomba.',
  },
};

/* ─── Location pin icon ──────────────────────────────────────────── */
function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
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
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function LocationsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-grid-navy pointer-events-none" aria-hidden="true" />
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-40"
          aria-hidden="true"
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange/10 border border-orange/30 text-xs font-semibold text-orange uppercase tracking-widest mb-6">
            <PinIcon className="w-3.5 h-3.5" />
            Service Areas
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
            Commercial Shopfitting Across{' '}
            <span className="text-gradient-orange">South East Queensland</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Fix It Up Pty Ltd is a QBCC licensed shopfitter and joinery manufacturer servicing
            major centres throughout South East Queensland and beyond.
          </p>
        </div>
      </section>

      {/* ── Location cards ───────────────────────────────────────── */}
      <section className="bg-navy-800 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block w-12 h-1 rounded-full bg-orange mb-6" aria-hidden="true" />
            <h2 className="section-title">Areas We Service</h2>
            <p className="section-subtitle mx-auto mt-4">
              Click a location to learn more about our shopfitting and fitout services
              in that area.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <li key={location.slug}>
                <Link
                  href={`/locations/${location.slug}`}
                  className="group relative flex flex-col h-full rounded-2xl bg-navy border border-white/5 p-7 hover:border-orange/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Hover orange accent strip */}
                  <span
                    className="absolute top-0 left-0 right-0 h-0.5 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange/10 text-orange mb-5 group-hover:bg-orange group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <PinIcon className="w-6 h-6" />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange transition-colors duration-200">
                    {location.name}
                  </h3>

                  {/* Description snippet */}
                  <p className="text-sm text-white/60 leading-relaxed line-clamp-3 flex-1">
                    {location.description}
                  </p>

                  {/* Suburb count badge */}
                  <div className="flex items-center justify-between mt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      {location.suburbs.length} suburbs covered
                    </span>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange group-hover:gap-2 transition-all duration-200">
                      View area
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────────────────── */}
      <section className="bg-navy py-14 sm:py-16 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not sure if we cover your area?
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            We regularly travel beyond our listed regions for the right project.
            Get in touch and we will let you know.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                aria-hidden="true"
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
    </>
  );
}
