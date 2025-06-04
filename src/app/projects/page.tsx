'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProjectCard } from '@/components/ui/project-card'
import { Button } from '@/components/ui/button'
import { projects, categories, getProjectsByCategory } from '@/data/projects'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const filteredProjects = getProjectsByCategory(selectedCategory)

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeading
        title="Projects"
        description="A collection of my work in data science, machine learning, and software development"
        className="mb-12"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="mt-16 pt-12 border-t border-border/40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">
              {projects.length}
            </div>
            <div className="text-muted-foreground">Total Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">
              {projects.filter((p) => p.status === 'completed').length}
            </div>
            <div className="text-muted-foreground">Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">
              {categories.length - 1}
            </div>
            <div className="text-muted-foreground">Categories</div>
          </div>
        </div>
      </div>
    </div>
  )
}
