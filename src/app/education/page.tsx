import React from 'react'
import Link from 'next/link'
import { GraduationCap, Award, BookOpen, ExternalLink, Sparkles, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { getEducationData } from '@/sanity/dataService'

export const metadata = {
  title: 'Education & Certifications',
  description:
    'Academic degrees, professional certifications, and technical learning milestones of Gihan Bhathi.',
}

export default async function EducationPage() {
  const educationList = await getEducationData()

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return <GraduationCap className="w-5 h-5 text-[#111111]" />
      case 'certification':
        return <Award className="w-5 h-5 text-amber-600" />
      case 'course':
        return <BookOpen className="w-5 h-5 text-blue-600" />
      default:
        return <Sparkles className="w-5 h-5 text-purple-600" />
    }
  }

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#111111] border border-[#E5E7EB]">
            <GraduationCap className="w-4 h-4 text-[#111111]" />
            <span>Academic &amp; Professional Milestones</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            Education &amp; Credentials
          </h1>

          <p className="text-base text-[#4B5563] leading-relaxed">
            A structured timeline of my formal computer science education, specialized interaction design honors, and official technical certifications.
          </p>
        </div>

        {/* Structured Timeline / Cards */}
        <div className="space-y-6">
          {educationList.map((item, index) => (
            <div
              key={item._id || index}
              className="p-6 sm:p-8 bg-white rounded-3xl border border-[#E5E7EB] shadow-subtle hover:border-[#D1D5DB] hover:shadow-card-hover transition-all duration-300 space-y-5"
            >
              {/* Card Top: Type Icon, Period, Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center border border-[#E5E7EB]">
                    {getTypeIcon(item.type)}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                      {item.institution}
                    </h4>
                    {item.location && (
                      <span className="text-[11px] text-[#9CA3AF] flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs text-[#6B7280] bg-[#F9FAFB] px-3 py-1 rounded-full border border-[#E5E7EB]">
                    <Calendar className="w-3 h-3 text-[#9CA3AF]" />
                    {item.period}
                  </span>

                  {item.badgeLabel && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      {item.badgeLabel}
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                  {item.degree}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Skills Tags */}
              {item.skillsLearned && item.skillsLearned.length > 0 && (
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Key Competencies &amp; Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-full text-xs font-medium bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Credential link */}
              {item.credentialUrl && (
                <div className="pt-2 border-t border-[#F3F4F6] flex justify-end">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#4B5563] transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 bg-[#F9FAFB] rounded-3xl border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#111111]">
              Continual Learning &amp; Industry Research
            </h4>
            <p className="text-xs text-[#6B7280]">
              Constantly upgrading knowledge in modern browser standards, server actions, and AI UX patterns.
            </p>
          </div>
          <Link
            href="/work"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-colors whitespace-nowrap"
          >
            See Practical Applied Work &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
