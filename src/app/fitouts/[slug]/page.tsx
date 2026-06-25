import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { serviceAreas, getServiceAreaBySlug } from '@/data/serviceAreas';
import { getServiceBySlug } from '@/data/services';
import { getLocationBySlug } from '@/data/locations';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const area = getServiceAreaBySlug(params.slug);
  if (!area) return {};
  return {
    title: { absolute: area.metaTitle },
    description: area.metaDescription,
    alternates: {
      canonical: `/fitouts/${area.slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/fitouts/${area.slug}`,
    },
  };
}

const BASE_URL = 'https://fixitup.au';

export default function ServiceAreaPage({ params }: { params: { slug: string } }) {
  const area = getServiceAreaBySlug(params.slug);
  if (!area) notFound();

  const service = getServiceBySlug(area.serviceSlug);
  const location = getLocationBySlug(area.locationSlug);
  if (!service || !location) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: area.h1,
        description: area.metaDescription,
        url: `${BASE_URL}/fitouts/${area.slug}`,
        serviceType: service.title,
        areaServed: { '@type': 'City', name: location.name },
        provider: { '@id': `${BASE_URL}/#business` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: area.faqs.map((faq) => ({
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
          { '@type': 'ListItem', position: 2, name: 'Fitouts', item: `${BASE_URL}/fitouts` },
          {
            '@type': 'ListItem',
            position: 3,
            name: area.h1,
            item: `${BASE_URL}/fitouts/${area.slug}`,
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

      {/* -- Hero ------------------------------------------------------------ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-copper-600 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/fitouts" className="hover:text-copper-600 transition-colors">
                  Fitouts
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal/70 font-medium">{area.h1}</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="flex justify-start mb-5">
              <span className="inline-block w-12 h-1 rounded-full bg-copper-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight">
              {area.h1}
            </h1>

            <div className="mt-6 space-y-5">
              {area.intro.map((paragraph, i) => (
                <p key={i} className="text-lg sm:text-xl text-gray-500 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

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

      {/* -- What's included ------------------------------------------------- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              What&apos;s Included
            </h2>
            <p className="mt-3 text-base text-gray-500 leading-relaxed">
              Our {service.title.toLowerCase()} service in {location.name} is delivered end to end —
              one contract, one team, zero gaps.
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

      {/* -- Process --------------------------------------------------------- */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">Our Process</h2>
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

      {/* -- Local context --------------------------------------------------- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <span className="inline-block w-12 h-1 rounded-full bg-copper-500 mb-6" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-6">
              {service.title} in {location.name} — Local Knowledge
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {area.localContext}
            </p>
          </div>
        </div>
      </section>

      {/* -- FAQ ------------------------------------------------------------- */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-gray-500 leading-relaxed">
              Common questions about {service.title.toLowerCase()} projects in {location.name}.
            </p>
          </div>

          <div className="max-w-3xl space-y-3">
            {area.faqs.map((faq, i) => (
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

      {/* -- Cross-links ----------------------------------------------------- */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-charcoal mb-6">
            Explore More
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cream border border-gray-200 text-sm font-medium text-charcoal hover:border-copper-500 hover:text-copper-600 transition-colors shadow-sm"
            >
              {service.title} (all areas)
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={`/locations/${location.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cream border border-gray-200 text-sm font-medium text-charcoal hover:border-copper-500 hover:text-copper-600 transition-colors shadow-sm"
            >
              All services in {location.name}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/fitouts"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cream border border-gray-200 text-sm font-medium text-charcoal hover:border-copper-500 hover:text-copper-600 transition-colors shadow-sm"
            >
              All fitout service areas
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* -- CTA ------------------------------------------------------------- */}
      <CTASection
        heading={`Planning a ${service.title} in ${location.name}?`}
        subtext={`Get in touch for a free, no-obligation quote. We deliver ${service.title.toLowerCase()} projects across ${location.name} and surrounds, on time and on budget.`}
      />
    </>
  );
}
