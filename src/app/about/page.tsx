import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'About | Brisbane Shopfitting & Joinery',
  description:
    'Meet Fix It Up Pty Ltd — Brisbane commercial shopfitters with 15+ years & 500+ fitouts across SEQ. QBCC licensed. Get a free quote.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: `About ${company.name}`,
    description: `QBCC licensed commercial shopfitting company with ${company.yearsExperience} years experience in Brisbane & South East Queensland.`,
  },
};

const values = [
  {
    title: 'Quality Craftsmanship',
    description:
      'Every project we deliver is built to last. We combine skilled tradespeople with premium materials to produce fitouts that stand up to the demands of commercial environments.',
  },
  {
    title: 'On-Time Delivery',
    description:
      'We know that time is money in business. Our project management processes keep every job on schedule so your doors open on time, every time.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'No hidden costs, no surprises. We provide detailed, itemised quotes upfront and keep you informed of any changes throughout the project lifecycle.',
  },
  {
    title: 'Client-First Approach',
    description:
      'Your vision drives everything we do. We listen carefully, communicate openly, and tailor our work to meet your exact brief — from concept through to handover.',
  },
];

const credentials = [
  { label: 'QBCC Licence', value: company.qbcc },
  { label: 'ABN', value: company.abn },
  { label: 'Insurance', value: 'Fully Insured' },
  { label: 'Coverage', value: 'Public Liability' },
];

export default function AboutPage() {
  return (
    <main>
      {/* -- Hero ------------------------------------------------------------ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-block w-12 h-1 rounded-full bg-copper-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-charcoal leading-tight">
            About Fix It Up
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-gray-500 leading-relaxed">
            {company.tagline}
          </p>
        </div>
      </section>

      {/* -- Company Story --------------------------------------------------- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-1 rounded-full bg-copper-500" />
            <span className="text-sm font-semibold text-copper-600 uppercase tracking-wider">
              Our Story
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight mb-8">
            Built on Brisbane, Trusted Across Queensland
          </h2>
          <div className="flex flex-col gap-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              {company.name} was founded with a single purpose: to give
              commercial businesses in South East Queensland a shopfitting
              partner they could genuinely rely on. From our early days fitting
              out small retail shops in suburban Brisbane, we quickly earned a
              reputation for meticulous workmanship and a no-fuss approach to
              getting the job done right.
            </p>
            <p>
              As word spread, so did our reach. Over {company.yearsExperience}{' '}
              years we have grown into a full-service commercial shopfitting and
              joinery business, delivering more than {company.projectsCompleted}{' '}
              projects for retailers, hospitality venues, medical practices,
              offices, and more. Our workshop in {company.address.suburb},{' '}
              {company.address.state} allows us to manufacture custom joinery
              in-house, giving us tight control over quality, lead times, and
              cost.
            </p>
            <p>
              Today {company.name} is one of Brisbane&apos;s most trusted names
              in commercial fitout. Whether you are opening a flagship store on
              Queen Street Mall, renovating a café in the inner north, or
              fitting out a medical clinic on the Gold Coast, our experienced
              team brings the same level of professionalism, precision, and
              pride to every square metre.
            </p>
          </div>
        </div>
      </section>

      {/* -- Values ---------------------------------------------------------- */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-1 rounded-full bg-copper-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight">
              What We Stand For
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-gray-500 text-base leading-relaxed">
              Four principles that guide every project we take on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-3 rounded-2xl bg-white border border-gray-100 p-6 hover:border-copper-300 hover:shadow-card transition-all duration-200"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-copper-50 shrink-0">
                  <span className="w-3 h-3 rounded-full bg-copper-500" />
                </span>
                <h3 className="text-base font-bold text-charcoal leading-snug">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Credentials ----------------------------------------------------- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <span className="inline-block w-10 h-1 rounded-full bg-copper-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight">
              Licensed, Insured &amp; Accredited
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-gray-500 text-base leading-relaxed">
              You can engage {company.name} with full confidence. We hold all
              relevant licences and insurances required for commercial fitout
              work in Queensland.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white shadow-card px-6 py-5"
              >
                <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-copper-50">
                  <svg
                    className="w-5 h-5 text-copper-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {cred.label}
                  </span>
                  <span className="text-base font-bold text-charcoal mt-0.5">
                    {cred.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA ------------------------------------------------------------- */}
      <CTASection />
    </main>
  );
}
