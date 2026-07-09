import type { Metadata } from 'next';
import Link from 'next/link';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Fix It Up Pty Ltd collects, uses and protects the personal information you provide through our website and enquiry forms.',
  alternates: {
    canonical: '/privacy',
  },
};

const sections = [
  {
    heading: 'Information we collect',
    body: [
      'When you contact us or request a quote through this website, we collect the information you choose to provide. This typically includes your name, business or company name, phone number, email address, the suburb or location of your project, and details about the project itself such as type, budget range, timeline and any plans, drawings or photos you attach.',
      'We do not require you to create an account, and we do not collect sensitive information. Our website may use standard analytics to understand how visitors use the site, which involves basic technical data such as pages viewed and approximate location.',
    ],
  },
  {
    heading: 'Why we collect it',
    body: [
      'We use the information you provide solely to respond to your enquiry, prepare a quote, arrange a site visit, and manage any project we are engaged to deliver. We may also use your contact details to follow up on your enquiry or to keep you informed about the progress of work you have asked us to carry out.',
    ],
  },
  {
    heading: 'How we store and protect it',
    body: [
      'We take reasonable steps to protect the personal information we hold from misuse, loss, and unauthorised access, modification or disclosure. Enquiry details are stored on secure business systems and are accessible only to the people who need them to respond to you and deliver your project.',
    ],
  },
  {
    heading: 'Disclosure to third parties',
    body: [
      'We do not sell, rent or trade your personal information. We may share relevant project information with trusted subcontractors, suppliers or consultants where it is necessary to prepare a quote or carry out your project, and only to the extent required for that purpose. We may also disclose information where required or authorised by law.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You may request access to the personal information we hold about you, ask us to correct it if it is inaccurate, or ask us to delete it where there is no ongoing reason for us to keep it. To make a request, please get in touch using the contact options below.',
    ],
  },
  {
    heading: 'Australian Privacy Principles',
    body: [
      'We handle personal information in accordance with the Australian Privacy Principles set out in the Privacy Act 1988 (Cth). If you have a concern about how we have handled your personal information, please contact us and we will work with you to resolve it.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* -- Hero ------------------------------------------------------------ */}
      <section className="bg-cream border-b border-gray-100">
        <div className="container mx-auto py-14 sm:py-20">
          <div className="mb-5">
            <span className="inline-block w-10 h-1 rounded-full bg-copper-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            {company.name} respects your privacy. This page explains what information we collect
            through our website and enquiry forms, why we collect it, and how we look after it.
          </p>
        </div>
      </section>

      {/* -- Content --------------------------------------------------------- */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
                  {section.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-charcoal mb-4">
                How to contact us
              </h2>
              <div className="flex flex-col gap-4 text-gray-600 text-base leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or about the personal
                  information we hold, please reach out through our{' '}
                  <Link
                    href="/contact"
                    className="font-semibold text-copper-700 hover:text-copper-800 transition-colors"
                  >
                    contact page
                  </Link>
                  .
                </p>
                <p className="text-sm text-gray-500">
                  {company.name} · ABN {company.abn} · {company.address.street},{' '}
                  {company.address.suburb} {company.address.state} {company.address.postcode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
