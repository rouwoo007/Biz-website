import Script from 'next/script';

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

/**
 * Google Analytics 4 placeholder component.
 * Replace GA_MEASUREMENT_ID with your real tracking ID before going live.
 * Place this component inside the <head> of your root layout.
 */
export default function GoogleAnalytics() {
  return (
    <>
      {/* Load the GA4 gtag.js script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialise dataLayer and configure GA4 */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
