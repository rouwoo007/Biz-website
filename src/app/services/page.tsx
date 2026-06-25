import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Expert commercial shopfitting, joinery, retail, cafe, medical and office fitouts across Brisbane & South East Queensland.',
  alternates: {
    canonical: '/services',
  },
};

function ServiceIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'store':
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
        </svg>
      );
    case 'building':
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M8 10h1m3 0h1m-5 4h1m3 0h1m-5 4h1m3 0h1" />
        </svg>
      );
    case 'hammer':
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.343 9.657L3.515 6.83A4.5 4.5 0 019.828 3.5l2.829 2.829m-6.314 3.328l8.485 8.485m0 0l1.415 1.415a2 2 0 002.828-2.829L17.16 15.1m-8.485-8.485l3.182-3.182" />
        </svg>
      );
    case 'coffee':
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14l-1.5 9H6.5L5 3zm0 0H3m16 0h2M6 21h12M8 12v5m4-5v5m4-5v5" />
        </svg>
      );
    case 'shopping-bag':
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 10-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
    case 'medical':
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 3h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'office':
    default:
      return (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      );
  }
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-5">
            <span className="inline-block w-12 h-1 rounded-full bg-copper-500" />
          </div>
          <p className="text-copper-600 font-semibold uppercase tracking-wider text-sm mb-3">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight">
            Our Services
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            QBCC-licensed commercial fitout and joinery specialists serving Brisbane and South East
            Queensland. Whatever your space, we have the expertise to deliver it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* Services grid */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal">
              Everything Under One Roof
            </h2>
            <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
              From a single joinery piece to a full commercial fitout, our in-house team and trusted
              subcontractors deliver quality you can count on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={<ServiceIcon icon={service.icon} />}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-copper-700 py-14 sm:py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              {
                stat: '15+',
                label: 'Years Experience',
                detail: 'Delivering commercial fitouts across Brisbane and SEQ since 2009.',
              },
              {
                stat: '500+',
                label: 'Projects Completed',
                detail: 'From small joinery packages to full multi-site fitout programmes.',
              },
              {
                stat: 'QBCC',
                label: 'Licensed & Insured',
                detail: 'Licence 15059346. Full public liability and contract works cover.',
              },
            ].map(({ stat, label, detail }) => (
              <div key={label} className="flex flex-col items-center gap-2 px-4">
                <span className="text-4xl font-extrabold text-white">{stat}</span>
                <span className="text-base font-semibold text-white/90">{label}</span>
                <p className="text-sm text-white/60 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to Discuss Your Project?"
        subtext="Contact our team for a free, no-obligation quote. We service Brisbane, Gold Coast, Sunshine Coast, Ipswich, Logan and Toowoomba."
      />
    </>
  );
}
