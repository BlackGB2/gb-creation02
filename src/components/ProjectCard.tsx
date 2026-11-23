'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { ProjectItem } from '@/data/mockData'

interface ProjectCardProps {
  project: ProjectItem
  onSelect: (project: ProjectItem) => void
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer flex flex-col bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-[#D1D5DB]"
    >
      {/* Image Container with subtle aspect-ratio and clean zoom */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3F4F6]">
        <Image
          src={project.mainImageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Floating Category Pill */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/90 backdrop-blur-md text-[#111111] border border-[#E5E7EB] shadow-subtle">
            {project.category}
          </span>
        </div>

        {/* Top Right Quick Action Icon */}
        <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E7EB] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-subtle">
          <ArrowUpRight className="w-4 h-4 text-[#111111]" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#6B7280]">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="text-lg font-bold tracking-tight text-[#111111] group-hover:text-black transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#4B5563] line-clamp-2 leading-relaxed">
            {project.excerpt}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F3F4F6] text-[#4B5563]"
            >
              {tag}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#F3F4F6] text-[#9CA3AF]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
