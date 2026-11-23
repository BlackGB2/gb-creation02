'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'

interface NavbarProps {
  brandName?: string
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/education', label: 'Education' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar({ brandName = 'GB.' }: NavbarProps) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-[#E5E7EB] shadow-subtle py-3.5'
            : 'bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]/60 py-4.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[#111111] font-semibold tracking-tight text-lg focus:outline-none"
          >
            <span className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center text-xs font-bold font-mono tracking-normal group-hover:scale-105 transition-transform">
              GB
            </span>
            <span className="font-bold tracking-tight text-[17px] text-[#111111] group-hover:opacity-80 transition-opacity">
              {brandName}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 hidden sm:inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
              Available
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F3F4F6]/80 p-1.5 rounded-full border border-[#E5E7EB]">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#111111] shadow-sm font-semibold'
                      : 'text-[#6B7280] hover:text-[#111111] hover:bg-white/50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#4B5563] hover:text-[#111111] bg-[#F3F4F6] hover:bg-[#E5E7EB] border border-[#E5E7EB] rounded-full transition-all duration-200"
              title="Open embedded Sanity Studio to manage content"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Sanity CMS</span>
              <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-all duration-200 shadow-sm hover:shadow"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-[#F3F4F6] border border-[#E5E7EB] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden transition-transform duration-300 ease-out border-l border-[#E5E7EB] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#E5E7EB]">
            <Link href="/" className="font-bold text-lg text-[#111111]">
              {brandName}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-md hover:bg-[#F3F4F6] text-[#6B7280] hover:text-[#111111]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#111111] text-white font-semibold'
                      : 'text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111111]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-[#E5E7EB]">
          <Link
            href="/studio"
            target="_blank"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-medium bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111111] border border-[#E5E7EB]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Open Sanity Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </Link>
          <Link
            href="/contact"
            className="w-full flex items-center justify-center py-2.5 px-4 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  )
}
