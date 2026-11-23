import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#F3F4F6] text-[#111111] border border-[#E5E7EB]">
          404 ERROR
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-[#111111]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#4B5563]">
          The page you are looking for might have been moved or does not exist.
        </p>
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#111111] text-white hover:bg-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
