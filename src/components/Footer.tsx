'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Twitter, Dribbble, Heart } from 'lucide-react'
import type { SocialLink } from '@/data/mockData'

interface FooterProps {
  brandName?: string
  socialLinks?: SocialLink[]
}

export default function Footer({
  brandName = 'GB.',
  socialLinks = [],
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  const getSocialIcon = (platform: string) => {
    const p = platform.toLowerCase()
    if (p.includes('github')) return <Github className="w-4 h-4" />
    if (p.includes('linkedin')) return <Linkedin className="w-4 h-4" />
    if (p.includes('twitter') || p.includes('x')) return <Twitter className="w-4 h-4" />
    if (p.includes('dribbble')) return <Dribbble className="w-4 h-4" />
    return <ArrowUpRight className="w-4 h-4" />
  }

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#E5E7EB] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E5E7EB]">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-[#111111]">
              <span className="w-7 h-7 rounded bg-[#111111] text-white flex items-center justify-center text-xs font-mono font-bold">
                GB
              </span>
              <span>{brandName}</span>
            </Link>
            <p className="text-sm text-[#6B7280] max-w-sm leading-relaxed">
              Design engineer building fast, accessible web applications and high-craft design systems. Powered by Next.js and Sanity CMS.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#4B5563]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for new projects & contracts</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#6B7280] hover:text-[#111111] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#6B7280] hover:text-[#111111] transition-colors">
                  Work / Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#6B7280] hover:text-[#111111] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-[#6B7280] hover:text-[#111111] transition-colors">
                  Education & Honors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#6B7280] hover:text-[#111111] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: CMS & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111111]">
              Content & Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#4B5563] bg-[#F3F4F6] hover:bg-[#E5E7EB] hover:text-[#111111] transition-colors border border-[#E5E7EB]"
                >
                  {getSocialIcon(s.platform)}
                  <span>{s.platform}</span>
                </a>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/studio"
                target="_blank"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111111] border border-[#E5E7EB] transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Sanity CMS Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>© {currentYear} {brandName} All rights reserved. Crafted with precision.</p>
          <p className="flex items-center gap-1">
            Built with Next.js & Sanity CMS
          </p>
        </div>
      </div>
    </footer>
  )
}
