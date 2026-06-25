import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { company } from '@/data/company';

export const metadata: Metadata = {
  title: 'Contact Our Brisbane Shopfitting Team',
  description:
    'Contact Fix It Up for commercial shopfitting & fitout enquiries across Brisbane & SEQ. Request a free quote online — we reply within one business day.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Our Brisbane Shopfitting Team | Fix It Up Pty Ltd',
    description:
      "Get in touch with Brisbane's trusted commercial shopfitting team. Free quotes available.",
  },
};

export default function ContactPage() {
  const hasPhone = !company.phone.includes('[');
  const hasEmail = !company.email.includes('[');

  return (
    <>
      {/* -- Hero ------------------------------------------------------------ */}
      <section className="bg-cream border-b border-gray-100">
        <div className="container mx-auto py-14 sm:py-20">
          <div className="mb-5">
            <span className="inline-block w-10 h-1 rounded-full bg-copper-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-xl leading-relaxed">
            Have a project in mind or need a free quote? Reach out to the Fix It
            Up team — we typically respond within one business day.
          </p>
        </div>
      </section>

      {/* -- Two-column content ---------------------------------------------- */}
      <section className="bg-white">
        <div className="container mx-auto py-14 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

            {/* -- Left: Contact Form ---------------------------------------- */}
            <div>
              <ContactForm />
            </div>

            {/* -- Right: Details + Map -------------------------------------- */}
            <div className="flex flex-col gap-8">

              {/* Contact details card */}
              <div className="rounded-xl bg-cream border border-gray-100 p-6 sm:p-8">
                <h2 className="text-lg font-bold text-charcoal mb-6">
                  Get in Touch
                </h2>

                <ul className="space-y-5">
                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-copper-50 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-copper-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
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
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        Address
                      </p>
                      <address className="not-italic text-sm text-charcoal/80 leading-relaxed">
                        {company.address.street}
                        <br />
                        {company.address.suburb} {company.address.state}{' '}
                        {company.address.postcode}
                      </address>
                    </div>
                  </li>

                  {/* Phone */}
                  {hasPhone && (
                    <li className="flex items-start gap-4">
                      <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-copper-50 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-copper-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                          Phone
                        </p>
                        <a
                          href={`tel:${company.phone.replace(/\s/g, '')}`}
                          className="text-sm text-charcoal/80 hover:text-copper-600 transition-colors"
                        >
                          {company.phone}
                        </a>
                      </div>
                    </li>
                  )}

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-copper-50 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-copper-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        {hasEmail ? 'Email' : 'Enquiries'}
                      </p>
                      {hasEmail ? (
                        <a
                          href={`mailto:${company.email}`}
                          className="text-sm text-charcoal/80 hover:text-copper-600 transition-colors break-all"
                        >
                          {company.email}
                        </a>
                      ) : (
                        <Link
                          href="/get-a-quote"
                          className="text-sm text-charcoal/80 hover:text-copper-600 transition-colors"
                        >
                          Send an enquiry via our quote form
                        </Link>
                      )}
                    </div>
                  </li>
                </ul>

                {/* Divider */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Business Hours
                  </p>
                  <p className="text-sm text-charcoal/70">
                    Monday – Friday &nbsp;·&nbsp; 7:00 am – 5:00 pm
                  </p>
                  <p className="text-sm text-gray-400">
                    Closed weekends &amp; public holidays
                  </p>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-gray-100 shadow-card aspect-video lg:aspect-[4/3]">
                <iframe
                  title="Fix It Up Pty Ltd location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.5!2d152.9!3d-27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMwJzAwLjAiUyAxNTLCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
