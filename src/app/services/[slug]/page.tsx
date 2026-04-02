import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Fix It Up Pty Ltd`,
      description: service.shortDescription,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-orange hover:text-orange-400 transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All Services
          </Link>

          <div className="max-w-3xl">
            <div className="flex justify-start mb-5">
              <span className="inline-block w-12 h-1 rounded-full bg-orange" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/60 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-orange text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-orange-glow"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
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
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-orange"
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
      <section className="bg-navy py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Process
            </h2>
            <p className="mt-3 text-base text-white/50 leading-relaxed">
              A clear, structured process means no surprises — just a smooth project from first call
              to final handover.
            </p>
          </div>

          <div className="relative max-w-3xl">
            {/* Vertical connector line */}
            <div
              className="absolute left-5 top-5 bottom-5 w-px bg-white/10 hidden sm:block"
              aria-hidden="true"
            />

            <ol className="space-y-8">
              {service.process.map((step, index) => (
                <li key={step.step} className="relative flex gap-6 sm:gap-8">
                  {/* Step number bubble */}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-orange text-white text-sm font-bold shadow-orange-glow z-10">
                    {step.step}
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 bg-navy-800 rounded-xl p-5 border border-white/8 ${
                      index < service.process.length - 1 ? 'mb-0' : ''
                    }`}
                  >
                    <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-800 py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-white/50 leading-relaxed">
              Common questions about our {service.title.toLowerCase()} service.
            </p>
          </div>

          <div className="max-w-3xl space-y-3">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-navy rounded-xl border border-white/8 overflow-hidden"
              >
                <summary className="flex cursor-pointer select-none items-center justify-between gap-4 p-5 font-semibold text-white hover:text-orange transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-base leading-snug">{faq.question}</span>
                  {/* Plus / minus indicator */}
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-orange transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 text-sm text-white/55 leading-relaxed border-t border-white/8">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="container mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy mb-6">
            Explore Other Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-navy hover:border-orange hover:text-orange transition-colors shadow-sm"
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

      {/* CTA */}
      <CTASection
        heading={`Ready to Start Your ${service.title} Project?`}
        subtext="Get in touch today for a free consultation and no-obligation quote. We&apos;ll bring your vision to life on time and on budget."
      />
    </>
  );
}
