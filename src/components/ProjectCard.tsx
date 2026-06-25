import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  name: string;
  slug: string;
  type: string;
  typeLabel: string;
  photo: string;
}

export default function ProjectCard({ name, slug, typeLabel, photo }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block relative overflow-hidden rounded-2xl shadow-card bg-gray-100 aspect-[4/3] hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    >
      {/* Project image */}
      <Image
        src={photo}
        alt={name}
        fill
        unoptimized
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Type badge */}
      <div className="absolute top-3 left-3">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-copper-600 text-white shadow">
          {typeLabel}
        </span>
      </div>

      {/* Project name at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-base font-semibold text-white leading-snug group-hover:text-copper-300 transition-colors duration-200">
          {name}
        </h3>
        <div className="flex items-center gap-1 mt-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
          <span className="text-xs text-white/70">View project</span>
          <svg
            className="w-3.5 h-3.5 text-copper-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
