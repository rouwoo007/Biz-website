interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  role: string;
  rating: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-orange' : 'text-gray-300'}`}
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

export default function TestimonialCard({ quote, name, company, role, rating }: TestimonialCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-card border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
      {/* Stars */}
      <StarRating rating={rating} />

      {/* Quote mark */}
      <svg
        className="w-8 h-8 text-orange/20 mt-4 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Quote text */}
      <blockquote className="mt-3 flex-1">
        <p className="text-sm text-gray-600 leading-relaxed italic">{quote}</p>
      </blockquote>

      {/* Divider */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <p className="text-sm font-semibold text-navy">{name}</p>
        <p className="text-xs text-gray-500 mt-0.5">
          {role}
          {company && (
            <>
              {' '}
              &mdash;{' '}
              <span className="text-orange font-medium">{company}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
