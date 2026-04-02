import { company } from '@/data/company';

/**
 * Renders LocalBusiness + Contractor JSON-LD structured data for Fix It Up Pty Ltd.
 * Place this component inside <head> (or directly in a layout/page) — it outputs
 * a <script type="application/ld+json"> tag that search engines can read.
 */
export default function JsonLd() {
  const { address } = company;
  const fullAddress = `${address.street}, ${address.suburb} ${address.state} ${address.postcode}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Contractor', 'HomeAndConstructionBusiness'],
    name: company.name,
    alternateName: 'Fix It Up Shopfitters',
    description: company.tagline,
    url: 'https://www.fixitup.com.au',
    telephone: company.phone,
    email: company.email,
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
      {
        '@type': 'City',
        name: 'Brisbane',
      },
      {
        '@type': 'City',
        name: 'Gold Coast',
      },
      {
        '@type': 'City',
        name: 'Sunshine Coast',
      },
      {
        '@type': 'City',
        name: 'Ipswich',
      },
      {
        '@type': 'City',
        name: 'Logan',
      },
      {
        '@type': 'City',
        name: 'Toowoomba',
      },
      {
        '@type': 'State',
        name: 'Queensland',
      },
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
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
