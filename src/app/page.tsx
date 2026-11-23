import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Code2, Palette, Sparkles, Cpu, Layers } from 'lucide-react'
import ParticleWave from '@/components/ParticleWave'
import WorkGrid from '@/components/WorkGrid'
import { getSiteSettings, getFeaturedProjects } from '@/sanity/dataService'

export default async function HomePage() {
  const settings = await getSiteSettings()
  const featuredProjects = await getFeaturedProjects()

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] flex items-center overflow-hidden border-b border-[#E5E7EB]/70">
        {/* Right side canvas particle wave fading into white space */}
        <div className="absolute top-0 right-0 w-full sm:w-2/3 lg:w-1/2 h-full z-0 pointer-events-auto">
          <ParticleWave />
        </div>

        {/* Content Container (elevated above wave) */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl space-y-8">
            {/* Announcement Pill Badge */}
            <div>
              <Link
                href={settings.announcementBadgeLink || '/contact'}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111111] border border-[#E5E7EB] transition-all duration-200 group shadow-subtle"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{settings.announcementBadge}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6B7280] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Profile Avatar & Brand Signature */}
            <div className="flex items-center gap-3.5 pt-1">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-[#F3F4F6]">
                <Image
                  src={settings.heroAvatar}
                  alt={settings.brandName}
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                  Gihan Bhathi
                </p>
                <p className="text-xs text-[#6B7280]">
                  Design Engineer &amp; Creative Technologist
                </p>
              </div>
            </div>

            {/* Bold Display Headline with Tight Letter-Spacing */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter-display text-[#111111] leading-[1.08]">
              {settings.heroHeadline}
            </h1>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
              {settings.heroBio}
            </p>

            {/* Dual Pill CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={settings.primaryCtaLink || '/work'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#111111] text-white hover:bg-black transition-all duration-200 shadow-sm hover:shadow"
              >
                <span>{settings.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={settings.secondaryCtaLink || '/contact'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-[#F3F4F6] text-[#111111] hover:bg-[#E5E7EB] border border-[#E5E7EB] transition-all duration-200"
              >
                <span>{settings.secondaryCtaText}</span>
              </Link>
            </div>

            {/* Micro credibility badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-[#6B7280]">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#111111]" /> Next.js 14 App Router
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Sanity Headless CMS
              </span>
              <span className="flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-purple-600" /> Precision Design Systems
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                <span>Selected Portfolio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                Featured Works &amp; Case Studies
              </h2>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#4B5563] group"
            >
              <span>Explore all projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Featured Projects Grid with Interactive Category Tabs & Modal */}
          <WorkGrid projects={featuredProjects} limit={4} />

          {/* Work Page Redirect Pill */}
          <div className="pt-4 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#111111] hover:bg-[#E5E7EB] border border-[#E5E7EB] transition-colors"
            >
              <span>View All 6 Projects &amp; Live Demos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS / SERVICES HIGHLIGHT */}
      <section className="w-full py-20 bg-[#F9FAFB] border-t border-b border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
              Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              How I help products stand out.
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              From initial wireframe tokens to edge-rendered web applications with headless CMS integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-white rounded-2xl border border-[#E5E7EB] shadow-subtle space-y-4 hover:border-[#D1D5DB] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#111111]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111111]">
                Design Systems &amp; Tokens
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Scalable component libraries built with Figma, Tailwind, and React. Ensuring consistent typography, spacing, and accessibility across entire engineering teams.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#E5E7EB] shadow-subtle space-y-4 hover:border-[#D1D5DB] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#111111]">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111111]">
                Modern Frontend Engineering
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Next.js App Router applications engineered for sub-50ms interaction response times, zero-layout-shift visual fidelity, and clean TypeScript maintainability.
              </p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#E5E7EB] shadow-subtle space-y-4 hover:border-[#D1D5DB] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#111111]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#111111]">
                Headless CMS &amp; Sanity Studio
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Structured content modeling with Sanity CMS, custom schema definitions, real-time live preview, and high-performance GROQ queries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-[#111111] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Available for Contract &amp; Full-Time
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Have a project in mind? Let&apos;s build something exceptional.
              </h2>
              <p className="text-sm text-gray-400">
                Open for Q1/Q2 engagements, design engineering consulting, and high-craft web builds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-[#111111] hover:bg-gray-100 transition-colors shadow-sm"
              >
                Start a Conversation
              </Link>
              <Link
                href="/studio"
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full text-xs sm:text-sm font-medium bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
              >
                <span>Edit via Sanity</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
