import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getSiteSettings } from '@/sanity/dataService'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  return {
    title: {
      default: settings.siteTitle,
      template: `%s | ${settings.brandName}`,
    },
    description: settings.heroBio,
    keywords: [
      'Design Engineer',
      'Frontend Developer',
      'Sanity CMS',
      'Next.js Portfolio',
      'Creative Technologist',
      'React',
      'Tailwind CSS',
    ],
    authors: [{ name: settings.brandName }],
    creator: settings.brandName,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://gihanbhathi.dev',
      title: settings.siteTitle,
      description: settings.heroBio,
      siteName: settings.siteTitle,
    },
    icons: {
      icon: '/favicon.ico',
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen flex flex-col bg-white text-[#111111]">
        <Navbar brandName={settings.brandName} />
        <main className="flex-1">{children}</main>
        <Footer brandName={settings.brandName} socialLinks={settings.socialLinks} />
      </body>
    </html>
  )
}
