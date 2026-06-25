import Link from 'next/link';
import { company } from '@/data/company';

const serviceLinks = [
  { label: 'Shopfitting', slug: 'shopfitting' },
  { label: 'Commercial Fitout', slug: 'commercial-fitout' },
  { label: 'Joinery Manufacturing', slug: 'joinery-manufacturing' },
  { label: 'Cafe & Restaurant Fitout', slug: 'cafe-restaurant-fitout' },
  { label: 'Retail Fitout', slug: 'retail-fitout' },
  { label: 'Medical & Dental Fitout', slug: 'medical-dental-fitout' },
  { label: 'Office Fitout', slug: 'office-fitout' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Guides', href: '/guides' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/get-a-quote' },
];

const locationLinks = [
  { label: 'Brisbane', href: '/locations/brisbane' },
  { label: 'Gold Coast', href: '/locations/gold-coast' },
  { label: 'Sunshine Coast', href: '/locations/sunshine-coast' },
  { label: 'Ipswich', href: '/locations/ipswich' },
  { label: 'Logan', href: '/locations/logan' },
  { label: 'Toowoomba', href: '/locations/toowoomba' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { address } = company;
  const fullAddress = `${address.street}, ${address.suburb} ${address.state} ${address.postcode}`;
  const hasPhone = !company.phone.includes('[');
  const hasEmail = !company.email.includes('[');

  return (
    <footer className="bg-charcoal">
      {/* Main footer content */}
      <div className="container mx-auto py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Company Info */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-block">
            <span className="text-xl font-extrabold text-white tracking-widest uppercase">
              Fix It Up
            </span>
          </Link>
          <p className="text-sm text-white/70 leading-relaxed">
            {company.tagline}
          </p>
          <address className="not-italic flex flex-col gap-2 mt-1">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-copper-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {fullAddress}
            </a>
            {hasPhone ? (
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0 text-copper-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {company.phone}
              </a>
            ) : (
              <Link
                href="/get-a-quote"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0 text-copper-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Request a free quote
              </Link>
            )}
            {hasEmail ? (
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0 text-copper-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {company.email}
              </a>
            ) : (
              <Link
                href="/contact"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0 text-copper-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact us
              </Link>
            )}
          </address>
          <div className="flex flex-col gap-1 mt-1">
            <span className="text-xs text-white/50">ABN: {company.abn}</span>
            <span className="text-xs text-white/50">QBCC Licence: {company.qbcc}</span>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Services
          </h3>
          <ul className="flex flex-col gap-2.5">
            {serviceLinks.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="text-sm text-white/70 hover:text-copper-300 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-copper-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Locations */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Locations
          </h3>
          <ul className="flex flex-col gap-2.5">
            {locationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-copper-300 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50 text-center sm:text-left">
            &copy; {currentYear} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper-500/10 border border-copper-500/30 text-xs font-semibold text-copper-300">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              QBCC Licensed
            </span>
            <Link
              href="/privacy"
              className="inline-flex items-center min-h-[44px] py-2 text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
