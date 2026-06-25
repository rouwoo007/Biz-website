import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { guides, getGuideBySlug } from '@/data/guides';
import { services } from '@/data/services';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: { absolute: guide.metaTitle },
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.description,
      url: `/guides/${guide.slug}`,
      type: 'article',
    },
  };
}

const BASE_URL = 'https://fixitup.au';

function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const relatedServices = guide.relatedServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        datePublished: guide.published,
        dateModified: guide.updated,
        author: { '@id': `${BASE_URL}/#business` },
        publisher: { '@id': `${BASE_URL}/#business` },
        image: `${BASE_URL}/opengraph-image`,
        mainEntityOfPage: `${BASE_URL}/guides/${guide.slug}`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides` },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: `${BASE_URL}/guides/${guide.slug}`,
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
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-600 hover:text-copper-700 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Guides
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-copper-50 text-copper-700 text-xs font-semibold">
                {guide.category}
              </span>
              <span className="text-xs font-medium text-gray-400">{guide.readTime}</span>
              <span className="text-xs font-medium text-gray-400">
                Updated {formatDate(guide.updated)}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight">
              {guide.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            {/* Intro */}
            <div className="space-y-5 mb-12">
              {guide.intro.map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {guide.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-4">
                    {section.heading}
                  </h2>

                  <div className="space-y-4">
                    {section.body.map((para, j) => (
                      <p key={j} className="text-base text-gray-600 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet, k) => (
                        <li key={k} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-copper-50 flex items-center justify-center mt-0.5">
                            <svg
                              className="w-3.5 h-3.5 text-copper-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="mt-6">
                      <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-card">
                        <table className="w-full text-left border-collapse min-w-[36rem]">
                          <thead>
                            <tr className="bg-charcoal">
                              {section.table.headers.map((header, h) => (
                                <th
                                  key={h}
                                  scope="col"
                                  className="px-4 py-3 text-xs sm:text-sm font-semibold text-white whitespace-nowrap"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, r) => (
                              <tr
                                key={r}
                                className={r % 2 === 0 ? 'bg-white' : 'bg-cream'}
                              >
                                {row.map((cell, c) => (
                                  <td
                                    key={c}
                                    className={`px-4 py-3 text-xs sm:text-sm leading-relaxed border-t border-gray-100 ${
                                      c === 0
                                        ? 'font-semibold text-charcoal'
                                        : 'text-gray-600'
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {section.table.caption && (
                        <p className="mt-3 text-xs text-gray-400 italic leading-relaxed">
                          {section.table.caption}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Key takeaways */}
            <div className="mt-14 bg-cream rounded-2xl border border-copper-100 p-7">
              <h2 className="text-xl font-extrabold text-charcoal mb-5">Key Takeaways</h2>
              <ul className="space-y-3">
                {guide.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-copper-500 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-charcoal/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {guide.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
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
                <div className="px-5 pb-5 pt-1 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal mb-6">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-charcoal hover:border-copper-500 hover:text-copper-600 transition-colors shadow-sm"
                >
                  {s.title}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        heading="Get a Fixed-Price Quote for Your Space"
        subtext="Indicative guides only go so far. Contact our team for a free, no-obligation fixed-price quote tailored to your tenancy, scope and timeline."
      />
    </>
  );
}
