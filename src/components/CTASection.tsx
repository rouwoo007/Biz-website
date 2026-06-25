import Link from 'next/link';
import { company } from '@/data/company';

interface CTASectionProps {
  heading?: string;
  subtext?: string;
}

export default function CTASection({
  heading = 'Ready to Start Your Project?',
  subtext = 'Get in touch with our expert team for a free, no-obligation quote on your commercial fitout or shopfitting project.',
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
      {/* Copper bloom + grid texture */}
      <div
        aria-hidden="true"
        className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[140%] h-[140%] rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(181,85,58,0.35) 0%, rgba(181,85,58,0) 70%)',
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="container relative z-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-copper-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-copper-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-copper-400" />
          </span>
          Free On-Site Consultation
        </span>

        <h2 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] max-w-3xl mx-auto text-balance">
          {heading}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-white/65 max-w-xl mx-auto leading-relaxed">
          {subtext}
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-a-quote"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-copper-500 text-white text-base font-bold hover:bg-copper-400 transition-all duration-200 shadow-copper-glow hover:-translate-y-0.5"
          >
            Get a Free Quote
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <a
            href={`tel:${company.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-white/25 text-white text-base font-semibold hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
