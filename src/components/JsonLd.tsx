import { company } from '@/data/company';
import { testimonials } from '@/data/testimonials';

const BASE_URL = 'https://fixitup.au';

/**
 * Renders the structured-data entity graph for Fix It Up Pty Ltd as a single
 * JSON-LD @graph: a GeneralContractor LocalBusiness node, a WebSite node, and
 * customer reviews + aggregate rating. Place this inside a layout/page — it
 * outputs a <script type="application/ld+json"> tag search engines can read.
 *
 * Contact data is sourced from src/data/company.ts, where phone/email may still
 * be bracketed placeholders. We omit those keys until real values are supplied.
 */
export default function JsonLd() {
  const { address } = company;
  const fullAddress = `${address.street}, ${address.suburb} ${address.state} ${address.postcode}`;

  const hasPhone = !company.phone.includes('[');
  const hasEmail = !company.email.includes('[');

  // Schema.org prefers E.164 — convert AU national format (0410…) to +61410…
  const phoneDigits = company.phone.replace(/\D/g, '');
  const telephone = phoneDigits.startsWith('0')
    ? `+61${phoneDigits.slice(1)}`
    : company.phone;

  const ratingValue =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  const business = {
    '@type': ['LocalBusiness', 'GeneralContractor', 'HomeAndConstructionBusiness'],
    '@id': `${BASE_URL}/#business`,
    name: company.name,
    alternateName: 'Fix It Up Shopfitters',
    description: company.tagline,
    url: BASE_URL,
    logo: `${BASE_URL}/opengraph-image`,
    image: `${BASE_URL}/opengraph-image`,
    ...(hasPhone ? { telephone } : {}),
    ...(hasEmail ? { email: company.email } : {}),
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Cash, Invoice, Bank Transfer',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.suburb,
      addressRegion: address.state,
      postalCode: address.postcode,
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Sumner Park / Sumner, Brisbane QLD
      latitude: -27.547,
      longitude: 152.944,
    },
    areaServed: [
      { '@type': 'City', name: 'Brisbane' },
      { '@type': 'City', name: 'Gold Coast' },
      { '@type': 'City', name: 'Sunshine Coast' },
      { '@type': 'City', name: 'Ipswich' },
      { '@type': 'City', name: 'Logan' },
      { '@type': 'City', name: 'Toowoomba' },
      { '@type': 'State', name: 'Queensland' },
    ],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    knowsAbout: [
      'Shopfitting',
      'Commercial Fitout',
      'Joinery Manufacturing',
      'Cafe & Restaurant Fitout',
      'Retail Fitout',
      'Medical & Dental Fitout',
      'Office Fitout',
    ],
    identifier: [
      {
        '@type': 'PropertyValue',
        name: 'ABN',
        value: company.abn,
      },
      {
        '@type': 'PropertyValue',
        name: 'QBCC Licence',
        value: company.qbcc,
      },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'QBCC Licence',
      identifier: company.qbcc,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Queensland Building and Construction Commission',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: testimonials.length,
      bestRating: 5,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.quote,
    })),
    sameAs: [
      // Google Business Profile (resolved from the owner's share link)
      'https://www.google.com/search?kgmid=/g/11c42p_x3f',
    ],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: company.name,
    publisher: { '@id': `${BASE_URL}/#business` },
    inLanguage: 'en-AU',
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [business, website],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
