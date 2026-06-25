import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: ReactNode;
}

export default function ServiceCard({ slug, title, shortDescription, icon }: ServiceCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-card border border-gray-100 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      {/* Icon container */}
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-copper-50 text-copper-600 mb-5 group-hover:bg-copper-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
        <span className="w-7 h-7 flex items-center justify-center">{icon}</span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-charcoal mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{shortDescription}</p>

      {/* Learn More link */}
      <Link
        href={`/services/${slug}`}
        className="inline-flex items-center gap-1.5 mt-4 min-h-[44px] text-sm font-semibold text-copper-700 hover:text-copper-800 transition-colors group/link"
        aria-label={`Learn more about ${title}`}
      >
        Learn More
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
