interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  role: string;
  rating: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-copper-500' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function TestimonialCard({ quote, name, company, role, rating }: TestimonialCardProps) {
  return (
    <figure className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-white border border-charcoal/10 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-float-lg hover:border-copper-200">
      {/* Oversized decorative quote mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-6 text-[9rem] leading-none font-serif text-copper-500/10 select-none transition-colors duration-300 group-hover:text-copper-500/20"
      >
        &rdquo;
      </span>

      <StarRating rating={rating} />

      <blockquote className="relative mt-6 flex-1">
        <p className="text-lg sm:text-xl text-charcoal/85 leading-relaxed font-medium">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4 pt-6 border-t border-charcoal/10">
        <span className="flex-shrink-0 grid place-items-center w-12 h-12 rounded-full bg-gradient-to-br from-copper-500 to-copper-700 text-white font-bold text-sm shadow-copper-glow">
          {initials(name)}
        </span>
        <div>
          <p className="text-base font-bold text-charcoal leading-tight">{name}</p>
          <p className="text-sm text-gray-500 mt-0.5">
            {role}
            {company && (
              <>
                {' '}&middot;{' '}
                <span className="text-copper-600 font-medium">{company}</span>
              </>
            )}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
