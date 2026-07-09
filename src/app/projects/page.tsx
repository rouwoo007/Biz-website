'use client';

import { useState } from 'react';
import { projects, filterCategories } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span className="inline-block w-12 h-1 rounded-full bg-copper-500" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal leading-tight">
            Our Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Browse our portfolio of commercial fitouts across South East Queensland — from specialty
            cafes and retail boutiques to medical centres and hospitality venues.
          </p>
        </div>
      </section>

      {/* Filter Bar + Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading (visually hidden — keeps h1 -> h2 -> h3 card order) */}
          <h2 className="sr-only">Project portfolio</h2>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filterCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  activeFilter === category.value
                    ? 'bg-copper-500 text-white shadow-md'
                    : 'bg-gray-100 text-charcoal/70 hover:bg-gray-200 hover:text-charcoal'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  slug={project.slug}
                  type={project.type}
                  typeLabel={project.typeLabel}
                  photo={project.photo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
