'use client'

import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CopyButtonProps {
  textToCopy: string
  label?: string
  variant?: 'badge' | 'button' | 'icon'
  className?: string
}

export default function CopyButton({
  textToCopy,
  label,
  variant = 'button',
  className = '',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  if (variant === 'icon') {
    return (
      <button
        onClick={handleCopy}
        type="button"
        className={`p-2 rounded-lg text-[#6B7280] hover:text-[#111111] hover:bg-[#F3F4F6] transition-colors ${className}`}
        title={`Copy ${textToCopy}`}
        aria-label={`Copy ${textToCopy}`}
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600 animate-in zoom-in" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    )
  }

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
        copied
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm'
          : 'bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB] hover:text-[#111111] border border-[#E5E7EB]'
      } ${className}`}
      title={`Copy ${textToCopy}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600 animate-in zoom-in" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-[#6B7280]" />
          <span>{label || 'Copy'}</span>
        </>
      )}
    </button>
  )
}
