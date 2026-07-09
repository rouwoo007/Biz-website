'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Fires a GA4 page_view on App Router client-side navigations.
 *
 * The very first page load is already tracked by the gtag('config') call in
 * GoogleAnalytics, so we skip the initial render here to avoid double-counting.
 * Reads useSearchParams(), so it MUST be wrapped in a <Suspense> boundary in
 * the layout — otherwise it opts the whole route into client rendering.
 */
export default function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstRun = useRef(true);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    // Skip the initial load — gtag('config') already counted it.
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag !== 'function') return;

    const query = searchParams?.toString();
    const page_path = query ? `${pathname}?${query}` : pathname;
    w.gtag('event', 'page_view', {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
