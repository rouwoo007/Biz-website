import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { getLocationBySlug } from '@/data/locations';
import { guides } from '@/data/guides';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  // /services/shopfitting is a bespoke "Commercial Shopfitters Brisbane" pillar
  // page (src/app/services/shopfitting/page.tsx), so exclude it here to avoid a
  // duplicate-route conflict at build time.
  return services
    .filter((service) => service.slug !== 'shopfitting')
    .map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.shortDescription,
      url: `/services/${service.slug}`,
    },
    twitter: {
      title: service.metaTitle,
      description: service.shortDescription,
    },
  };
}

const BASE_URL = 'https://fixitup.au';

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const relatedAreas = serviceAreas.filter((area) => area.serviceSlug === params.slug);
  const relatedGuides = guides.filter((g) => g.relatedServices.includes(service.slug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        description: service.shortDescription,
        url: `${BASE_URL}/services/${service.slug}`,
        serviceType: service.title,
        areaServed: [
          { '@type': 'City', name: 'Brisbane' },
          { '@type': 'City', name: 'Gold Coast' },
          { '@type': 'City', name: 'Sunshine Coast' },
          { '@type': 'City', name: 'Ipswich' },
          { '@type': 'City', name: 'Logan' },
          { '@type': 'City', name: 'Toowoomba' },
          { '@type': 'State', name: 'Queensland' },
        ],
        provider: { '@id': `${BASE_URL}/#business` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `${BASE_URL}/services/${service.slug}`,
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
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>

          <div className="max-w-3xl">
            <div className="flex justify-start mb-5">
              <span className="inline-block w-12 h-1 rounded-full bg-copper-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              What&apos;s Included
            </h2>
            <p className="mt-3 text-base text-gray-500 leading-relaxed">
              Our {service.title.toLowerCase()} service is comprehensive by design — one contract,
              one team, zero gaps.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-card p-5"
              >
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
                <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Our Process
            </h2>
            <p className="mt-3 text-base text-gray-500 leading-relaxed">
              A clear, structured process means no surprises — just a smooth project from first call
              to final handover.
            </p>
          </div>

          <div className="relative max-w-3xl">
            <div
              className="absolute left-5 top-5 bottom-5 w-px bg-copper-200 hidden sm:block"
              aria-hidden="true"
            />

            <ol className="space-y-8">
              {service.process.map((step) => (
                <li key={step.step} className="relative flex gap-6 sm:gap-8">
                  <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-copper-500 text-white text-sm font-bold shadow-copper-glow z-10">
                    {step.step}
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-5 border border-gray-100 shadow-card">
                    <h3 className="text-base font-semibold text-charcoal mb-1.5">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-gray-500 leading-relaxed">
              Common questions about our {service.title.toLowerCase()} service.
            </p>
          </div>

          <div className="max-w-3xl space-y-3">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-cream rounded-xl border border-gray-100 overflow-hidden"
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

      {/* {Service} by location */}
      {relatedAreas.length > 0 && (
        <section className="bg-white py-14 sm:py-20 border-t border-gray-100">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal mb-2">
              {service.title} by Location
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-2xl">
              See how we tailor {service.title.toLowerCase()} projects to specific markets across
              South East Queensland.
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedAreas.map((area) => {
                const loc = getLocationBySlug(area.locationSlug);
                return (
                  <Link
                    key={area.slug}
                    href={`/fitouts/${area.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cream border border-gray-200 text-sm font-medium text-charcoal hover:border-copper-500 hover:text-copper-600 transition-colors shadow-sm"
                  >
                    {service.title} — {loc ? loc.name : area.locationSlug}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="bg-cream py-14 sm:py-20">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal mb-6">
            Explore Other Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
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

      {/* Related guides */}
      {relatedGuides.length > 0 && (
        <section className="bg-white py-14 sm:py-20 border-t border-gray-100">
          <div className="container mx-auto">
            <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal mb-2">
              Related Guides
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-2xl">
              Planning a {service.title.toLowerCase()}? These guides walk through the costs,
              timelines and decisions before you commit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex flex-col rounded-xl bg-cream border border-gray-100 px-6 py-5 hover:border-copper-300 hover:shadow-card-hover transition-all duration-200"
                >
                  <span className="text-xs font-semibold text-copper-600 uppercase tracking-wider mb-2">
                    {guide.category} · {guide.readTime}
                  </span>
                  <span className="text-base font-semibold text-charcoal group-hover:text-copper-600 transition-colors duration-200 leading-snug">
                    {guide.title}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-copper-600 mt-3 group-hover:gap-2 transition-all duration-200">
                    Read guide
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        heading={`Ready to Start Your ${service.title} Project?`}
        subtext="Get in touch today for a free consultation and no-obligation quote. We&apos;ll bring your vision to life on time and on budget."
      />
    </>
  );
}
