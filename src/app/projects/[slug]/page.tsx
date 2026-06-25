import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { projects, getProjectBySlug } from '@/data/projects';
import CTASection from '@/components/CTASection';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const BASE_URL = 'https://fixitup.au';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Fix It Up Pty Ltd',
    };
  }

  const ogImage = project.photo.startsWith('http')
    ? project.photo
    : `${BASE_URL}${project.photo}`;
  const description = project.description.slice(0, 160);

  return {
    title: `${project.name} — ${project.typeLabel} Project`,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: 'article',
      title: `${project.name} — ${project.typeLabel} Fitout`,
      description,
      url: `/projects/${project.slug}`,
      images: [{ url: ogImage, alt: `${project.name} — ${project.typeLabel} fitout by Fix It Up Pty Ltd` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.name} — ${project.typeLabel} Fitout`,
      description,
      images: [ogImage],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const photoUrl = project.photo.startsWith('http')
    ? project.photo
    : `${BASE_URL}${project.photo}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: `${project.name} — ${project.typeLabel} Fitout`,
        description: project.description,
        url: `${BASE_URL}/projects/${project.slug}`,
        creator: { '@id': `${BASE_URL}/#business` },
        image: {
          '@type': 'ImageObject',
          url: photoUrl,
          caption: `${project.name} — completed ${project.typeLabel.toLowerCase()} fitout by Fix It Up Pty Ltd`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/projects` },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.name,
            item: `${BASE_URL}/projects/${project.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero / Header */}
      <section className="bg-cream py-14 sm:py-18">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-charcoal transition-colors mb-6 group"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Type badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-copper-500 text-white">
              {project.typeLabel}
            </span>
          </div>

          {/* Project name */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight max-w-3xl">
            {project.name}
          </h1>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            {/* Project Photo */}
            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Project Photography
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={project.photo}
                  alt={`${project.name} — project photo`}
                  width={800}
                  height={600}
                  unoptimized={true}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Project Overview
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Floorplan */}
            <div>
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Floorplan
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src={project.floorplan}
                  alt={`${project.name} — floorplan`}
                  width={800}
                  height={600}
                  unoptimized={true}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Back link (bottom) */}
            <div className="pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal hover:text-copper-600 transition-colors group"
              >
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Inspired by What You See?"
        subtext="Get in touch with our team to discuss your commercial fitout project. We provide free, no-obligation quotes across Brisbane and South East Queensland."
      />
    </main>
  );
}
