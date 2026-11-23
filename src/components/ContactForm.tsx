'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Design Engineering',
    budget: '$5k - $15k',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = 'Please provide your name'
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('loading')

    // Simulate clean network dispatch / webhook
    setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'Design Engineering',
      budget: '$5k - $15k',
      message: '',
    })
    setStatus('idle')
    setErrors({})
  }

  if (status === 'success') {
    return (
      <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB] shadow-subtle text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-[#111111]">
            Inquiry Sent Successfully!
          </h3>
          <p className="text-sm text-[#4B5563] max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-[#111111]">{formData.name}</span>. Your message has been received. You will receive a direct reply at{' '}
            <span className="font-medium text-[#111111]">{formData.email}</span> within 24 hours.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#F3F4F6] text-[#111111] hover:bg-[#E5E7EB] border border-[#E5E7EB] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 md:p-10 bg-white rounded-3xl border border-[#E5E7EB] shadow-subtle space-y-6"
    >
      <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-[#111111]">
            Project Inquiry Form
          </h3>
          <p className="text-xs text-[#6B7280]">
            Fill out the details below to start a conversation.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#F3F4F6] text-[#4B5563] border border-[#E5E7EB]">
          <Sparkles className="w-3 h-3 text-amber-500" /> Fast Response
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#374151]">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white border ${
              errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
            } text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] transition-all`}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#374151]">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="jane@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl text-sm bg-white border ${
              errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
            } text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] transition-all`}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service Type Selection */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#374151]">
            Project Scope / Interest
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl text-sm bg-white border border-[#E5E7EB] text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#111111] transition-all"
          >
            <option value="Design Engineering">Design Engineering & Web App</option>
            <option value="Design Systems">Design System & Token Architecture</option>
            <option value="Headless Sanity CMS">Headless CMS & Sanity Migration</option>
            <option value="Interactive Tech">Creative Technology & Interactive Canvas</option>
            <option value="Full-Time / Advising">Full-time Role or Technical Advising</option>
          </select>
        </div>

        {/* Budget Scope */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-[#374151]">
            Estimated Budget Range
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl text-sm bg-white border border-[#E5E7EB] text-[#111111] focus:outline-none focus:ring-2 focus:ring-[#111111] transition-all"
          >
            <option value="< $5k">&lt; $5,000</option>
            <option value="$5k - $15k">$5,000 - $15,000</option>
            <option value="$15k - $30k">$15,000 - $30,000</option>
            <option value="$30k+">$30,000+</option>
            <option value="Equity / Full-time">Full-time / Equity Advisory</option>
          </select>
        </div>
      </div>

      {/* Message Area */}
      <div className="space-y-1.5">
        <label className="block text-xs font-semibold text-[#374151]">
          Project Overview & Timeline <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Tell me about what you are building, key milestones, and preferred launch timeline..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${
            errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E5E7EB]'
          } text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] transition-all`}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black disabled:opacity-50 transition-all duration-200 shadow-sm hover:shadow"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Inquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Project Inquiry</span>
          </>
        )}
      </button>
    </form>
  )
}
