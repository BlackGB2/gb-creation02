'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { X, ExternalLink, Github, CheckCircle2, Calendar, User, Layers } from 'lucide-react'
import type { ProjectItem } from '@/data/mockData'

interface ProjectModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between bg-white/90 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#111111] border border-[#E5E7EB]">
              {project.category}
            </span>
            <span className="text-xs text-[#9CA3AF]">•</span>
            <span className="text-xs text-[#6B7280] font-medium">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F3F4F6] text-[#6B7280] hover:text-[#111111] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-8">
          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#F3F4F6] border border-[#E5E7EB]">
            <Image
              src={project.mainImageUrl}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 750px"
              priority
            />
          </div>

          {/* Title and Short Excerpt */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                {project.title}
              </h2>

              <div className="flex items-center gap-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-colors"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#111111] hover:bg-[#E5E7EB] border border-[#E5E7EB] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>

            <p className="text-base text-[#4B5563] leading-relaxed">
              {project.excerpt}
            </p>
          </div>

          {/* Metadata Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#F3F4F6]/80 rounded-2xl border border-[#E5E7EB]">
            <div className="space-y-0.5">
              <span className="text-[11px] font-medium text-[#6B7280] flex items-center gap-1">
                <User className="w-3 h-3" /> Client
              </span>
              <p className="text-xs font-semibold text-[#111111]">{project.client}</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-medium text-[#6B7280] flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Timeline
              </span>
              <p className="text-xs font-semibold text-[#111111]">{project.year}</p>
            </div>
            <div className="space-y-0.5 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-medium text-[#6B7280] flex items-center gap-1">
                <Layers className="w-3 h-3" /> Focus
              </span>
              <p className="text-xs font-semibold text-[#111111]">{project.category}</p>
            </div>
          </div>

          {/* Deep Case Study / Full Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
              Project Overview & Architecture
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
                Key Deliverables & Outcomes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-[#E5E7EB]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-xs text-[#374151] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E5E7EB] bg-[#F9FAFB] flex items-center justify-between">
          <p className="text-xs text-[#6B7280]">
            Editable in real-time via Sanity Studio
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-medium text-[#374151] hover:text-[#111111] bg-white hover:bg-[#F3F4F6] border border-[#E5E7EB] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
