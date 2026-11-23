'use client'

import React, { useState, useMemo } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import type { ProjectItem } from '@/data/mockData'

interface WorkGridProps {
  projects: ProjectItem[]
  defaultCategory?: string
  limit?: number
}

export default function WorkGrid({
  projects,
  defaultCategory = 'All',
  limit,
}: WorkGridProps) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  // Derive unique categories dynamically
  const categories = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => {
      if (p.category) set.add(p.category)
    })
    return ['All', ...Array.from(set)]
  }, [projects])

  // Filtered list
  const filteredProjects = useMemo(() => {
    let list =
      activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory)
    if (limit) {
      list = list.slice(0, limit)
    }
    return list
  }, [projects, activeCategory, limit])

  return (
    <div className="space-y-8">
      {/* Category Filter Pills (if more than 1 category) */}
      {categories.length > 2 && (
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const count =
              category === 'All'
                ? projects.length
                : projects.filter((p) => p.category === category).length
            const isSelected = activeCategory === category

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB] hover:text-[#111111] border border-[#E5E7EB]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#6B7280]'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 px-4 bg-[#F9FAFB] rounded-2xl border border-dashed border-[#E5E7EB]">
          <p className="text-sm font-medium text-[#6B7280]">
            No projects found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project._id || (typeof project.slug === 'string' ? project.slug : project.slug.current)}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
