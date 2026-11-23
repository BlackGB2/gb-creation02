import React from 'react'
import { Mail, Phone, MapPin, Clock, ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import CopyButton from '@/components/CopyButton'
import { getContactData } from '@/sanity/dataService'

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Gihan Bhathi for new project inquiries, design engineering contracts, or technical collaborations.',
}

export default async function ContactPage() {
  const contact = await getContactData()

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#111111] border border-[#E5E7EB]">
            <MessageSquare className="w-3.5 h-3.5 text-[#111111]" />
            <span>Let&apos;s Connect</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111]">
            Get In Touch
          </h1>

          <p className="text-base text-[#4B5563] leading-relaxed">
            Have a project, freelance inquiry, or engineering role you would like to discuss? Send a note below or reach out directly via email or phone.
          </p>
        </div>

        {/* Content Grid: Left Contact Info Cards & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Availability Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 bg-white rounded-3xl border border-[#E5E7EB] shadow-subtle space-y-3 hover:border-[#D1D5DB] transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#111111]">
                  <Mail className="w-5 h-5" />
                </div>
                <CopyButton textToCopy={contact.email} label="Copy Email" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Direct Email
                </span>
                <p className="text-base font-bold text-[#111111] pt-0.5">
                  <a href={`mailto:${contact.email}`} className="hover:underline">
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Phone Card with 1-Click Copy */}
            <div className="p-6 bg-white rounded-3xl border border-[#E5E7EB] shadow-subtle space-y-3 hover:border-[#D1D5DB] transition-colors">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#F3F4F6] flex items-center justify-center text-[#111111]">
                  <Phone className="w-5 h-5" />
                </div>
                <CopyButton textToCopy={contact.phone} label="Copy Phone" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Phone / SMS
                </span>
                <p className="text-base font-bold text-[#111111] pt-0.5">
                  <a href={`tel:${contact.phone}`} className="hover:underline">
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Location & Timezone Details */}
            <div className="p-6 bg-[#F9FAFB] rounded-3xl border border-[#E5E7EB] space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Base Location
                </span>
                <p className="text-sm font-semibold text-[#111111]">
                  {contact.location}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Working Timezone
                </span>
                <p className="text-sm font-semibold text-[#111111]">
                  {contact.timezone}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E5E7EB] space-y-1">
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {contact.responseTime}
                </span>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {contact.availabilityNotice}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                Find Me Across The Web
              </h4>
              <div className="flex flex-wrap gap-2">
                {contact.socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-xs font-medium bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB] hover:text-[#111111] border border-[#E5E7EB] transition-colors"
                  >
                    <span>{s.platform}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Validated Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
