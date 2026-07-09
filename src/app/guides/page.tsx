import type { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/data/guides';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Commercial Fitout Guides & Resources',
  description:
    'Practical guides on commercial fitout costs, timelines, cost per m² and project planning for Brisbane & SEQ businesses. Real numbers, clear advice, no fluff.',
  alternates: {
    canonical: '/guides',
  },
  openGraph: {
    title: 'Commercial Fitout Guides & Resources | Fix It Up Pty Ltd',
    description:
      'Practical guides on commercial fitout costs, timelines and planning for Brisbane and SEQ businesses.',
    url: '/guides',
  },
};

export default function GuidesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-5">
            <span className="inline-block w-12 h-1 rounded-full bg-copper-500" />
          </div>
          <p className="text-copper-600 font-semibold uppercase tracking-wider text-sm mb-3">
            Guides &amp; Resources
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight">
            Fitout Guides
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Practical, no-nonsense answers to the questions every business asks before a
            commercial fitout — costs, timelines and how to plan a project that opens on time and
            on budget.
          </p>
        </div>
      </section>

      {/* Guides grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                className="group flex flex-col bg-white rounded-2xl shadow-card border border-gray-100 p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-copper-50 text-copper-700 text-xs font-semibold">
                    {guide.category}
                  </span>
                  <span className="text-xs font-medium text-gray-600">{guide.readTime}</span>
                </div>

                <h2 className="text-xl font-semibold text-charcoal mb-3 leading-snug">
                  {guide.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{guide.excerpt}</p>

                <Link
                  href={`/guides/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 mt-5 min-h-[44px] text-sm font-semibold text-copper-700 hover:text-copper-800 transition-colors group/link"
                >
                  Read guide<span className="sr-only">: {guide.title}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Discuss Your Fitout?"
        subtext="Read the guides, then get a free, no-obligation fixed-price quote for your space. We service Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan and Toowoomba."
      />
    </>
  );
}
