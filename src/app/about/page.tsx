import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Compass, Lightbulb, Terminal, Zap } from 'lucide-react'
import { getAboutData } from '@/sanity/dataService'

export const metadata = {
  title: 'About Me',
  description:
    'Learn more about Gihan Bhathi — Design Engineer blending engineering rigor with timeless visual design.',
}

export default async function AboutPage() {
  const about = await getAboutData()

  const workflowIcons = [
    <Compass key="1" className="w-5 h-5 text-[#111111]" />,
    <Lightbulb key="2" className="w-5 h-5 text-[#111111]" />,
    <Terminal key="3" className="w-5 h-5 text-[#111111]" />,
    <Zap key="4" className="w-5 h-5 text-[#111111]" />,
  ]

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* TOP SECTION: PHOTO & INTRO */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Profile Photo with crisp rounded corners */}
          <div className="md:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-[#F3F4F6] border border-[#E5E7EB] shadow-subtle group">
              <Image
                src={about.profileImage}
                alt="Gihan Bhathi Profile"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm">
                <p className="text-xs font-semibold text-[#111111]">Gihan Bhathi</p>
                <p className="text-[11px] text-[#6B7280]">Design Engineer &bull; San Francisco / Remote</p>
              </div>
            </div>
          </div>

          {/* Intro & Bio */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#111111] border border-[#E5E7EB]">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>About Me &amp; Philosophy</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              {about.headline}
            </h1>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
              {about.shortBio}
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-colors"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium bg-[#F3F4F6] text-[#111111] hover:bg-[#E5E7EB] border border-[#E5E7EB] transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </section>

        {/* STATS HIGHLIGHTS */}
        {about.stats && about.stats.length > 0 && (
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 bg-[#F9FAFB] rounded-3xl border border-[#E5E7EB]">
            {about.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1 text-center md:text-left">
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                  {stat.value}
                </p>
                <p className="text-xs text-[#6B7280] font-medium">{stat.label}</p>
              </div>
            ))}
          </section>
        )}

        {/* PERSONAL STORY SECTION */}
        <section className="space-y-6 max-w-3xl">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              The Story Behind the Code
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            {about.story.map((paragraph, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* CORE SKILLS & TOOLS PILLS */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Core Skills &amp; Technologies
            </h2>
            <p className="text-sm text-[#6B7280]">
              The stack and tools I rely on to turn concepts into fast, resilient digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.skillCategories.map((group, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-subtle space-y-4 hover:border-[#D1D5DB] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#111111]" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB] hover:text-[#111111] transition-colors border border-[#E5E7EB]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW & PROCESS HIGHLIGHTS */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              My 4-Step Product Workflow
            </h2>
            <p className="text-sm text-[#6B7280]">
              A disciplined, transparent process that eliminates guesswork and delivers measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.workflow.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-[#E5E7EB] text-[#111111]">
                    PHASE {item.step}
                  </span>
                  <div className="p-2 rounded-xl bg-white border border-[#E5E7EB]">
                    {workflowIcons[idx % workflowIcons.length]}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#111111] pt-1">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM REDIRECT TO EDUCATION & WORK */}
        <div className="p-8 bg-[#111111] text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Want to review my academic credentials?</h3>
            <p className="text-xs text-gray-400">
              Check out my degrees, honors, and verified engineering certifications.
            </p>
          </div>
          <Link
            href="/education"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-[#111111] hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            View Education &amp; Honors &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
