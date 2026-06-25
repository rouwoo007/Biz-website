import Link from 'next/link';

interface CTASectionProps {
  heading?: string;
  subtext?: string;
}

export default function CTASection({
  heading = 'Ready to Start Your Project?',
  subtext = 'Get in touch with our expert team for a free, no-obligation quote on your commercial fitout or shopfitting project.',
}: CTASectionProps) {
  return (
    <section className="bg-copper-700 py-16 sm:py-20">
      <div className="container mx-auto text-center">
        {/* Decorative top accent */}
        <div className="flex justify-center mb-6">
          <span className="inline-block w-12 h-1 rounded-full bg-white/30" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
          {heading}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
          {subtext}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-copper-700 text-sm font-semibold hover:bg-copper-50 transition-colors shadow-lg"
          >
            Get a Free Quote
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
