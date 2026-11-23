import React from 'react'
import { Sparkles, Layers } from 'lucide-react'
import WorkGrid from '@/components/WorkGrid'
import { getProjectsData } from '@/sanity/dataService'

export const metadata = {
  title: 'Work & Projects',
  description:
    'Explore featured case studies, design systems, web apps, and creative technology experiments by Gihan Bhathi.',
}

export default async function WorkPage() {
  const projects = await getProjectsData()

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Section */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#111111] border border-[#E5E7EB]">
            <Layers className="w-3.5 h-3.5 text-[#111111]" />
            <span>Interactive Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            Selected Works &amp; Case Studies
          </h1>

          <p className="text-base text-[#4B5563] leading-relaxed">
            A curated collection of web applications, design systems, and creative experiments. Click any project card to inspect the interactive case study, tech stack, and key deliverables.
          </p>
        </div>

        {/* Interactive Filter Pills & Project Grid */}
        <WorkGrid projects={projects} defaultCategory="All" />

        {/* Bottom Note */}
        <div className="p-6 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] text-center space-y-1">
          <p className="text-xs font-medium text-[#111111] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>All projects are managed in real-time through Sanity CMS Studio</span>
          </p>
          <p className="text-[11px] text-[#6B7280]">
            You can add new case studies, reorder items, or edit descriptions anytime without modifying code.
          </p>
        </div>
      </div>
    </div>
  )
}
