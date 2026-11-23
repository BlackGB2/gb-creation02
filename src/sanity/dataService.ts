import { sanityFetch } from './client'
import { urlForImage } from './image'
import {
  SITE_SETTINGS_QUERY,
  ABOUT_QUERY,
  EDUCATION_QUERY,
  PROJECTS_QUERY,
  CONTACT_QUERY,
} from './queries'
import {
  mockSiteSettings,
  mockAboutData,
  mockEducationData,
  mockProjectsData,
  mockContactData,
  type SiteSettings,
  type AboutData,
  type EducationItem,
  type ProjectItem,
  type ContactData,
} from '../data/mockData'

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await sanityFetch<any>({ query: SITE_SETTINGS_QUERY })
  if (!data) return mockSiteSettings

  return {
    brandName: data.brandName || mockSiteSettings.brandName,
    siteTitle: data.siteTitle || mockSiteSettings.siteTitle,
    announcementBadge: data.announcementBadge || mockSiteSettings.announcementBadge,
    announcementBadgeLink: data.announcementBadgeLink || mockSiteSettings.announcementBadgeLink,
    heroHeadline: data.heroHeadline || mockSiteSettings.heroHeadline,
    heroBio: data.heroBio || mockSiteSettings.heroBio,
    primaryCtaText: data.primaryCtaText || mockSiteSettings.primaryCtaText,
    primaryCtaLink: data.primaryCtaLink || mockSiteSettings.primaryCtaLink,
    secondaryCtaText: data.secondaryCtaText || mockSiteSettings.secondaryCtaText,
    secondaryCtaLink: data.secondaryCtaLink || mockSiteSettings.secondaryCtaLink,
    heroAvatar: data.heroAvatar ? (urlForImage(data.heroAvatar)?.url() || mockSiteSettings.heroAvatar) : mockSiteSettings.heroAvatar,
    socialLinks: (data.socialLinks && data.socialLinks.length > 0) ? data.socialLinks : mockSiteSettings.socialLinks,
  }
}

export async function getAboutData(): Promise<AboutData> {
  const data = await sanityFetch<any>({ query: ABOUT_QUERY })
  if (!data) return mockAboutData

  return {
    headline: data.headline || mockAboutData.headline,
    profileImage: data.profileImage ? (urlForImage(data.profileImage)?.url() || mockAboutData.profileImage) : mockAboutData.profileImage,
    shortBio: data.shortBio || mockAboutData.shortBio,
    story: (data.story && data.story.length > 0) ? data.story : mockAboutData.story,
    stats: (data.stats && data.stats.length > 0) ? data.stats : mockAboutData.stats,
    skillCategories: (data.skillCategories && data.skillCategories.length > 0) ? data.skillCategories : mockAboutData.skillCategories,
    workflow: (data.workflow && data.workflow.length > 0) ? data.workflow : mockAboutData.workflow,
  }
}

export async function getEducationData(): Promise<EducationItem[]> {
  const data = await sanityFetch<any[]>({ query: EDUCATION_QUERY })
  if (!data || data.length === 0) return mockEducationData

  return data.map((item, index) => ({
    _id: item._id || `edu-${index}`,
    degree: item.degree,
    institution: item.institution,
    location: item.location || '',
    period: item.period || '',
    type: item.type || 'degree',
    badgeLabel: item.badgeLabel || '',
    description: item.description || '',
    skillsLearned: item.skillsLearned || [],
    credentialUrl: item.credentialUrl,
    order: item.order ?? index,
  }))
}

export async function getProjectsData(): Promise<ProjectItem[]> {
  const data = await sanityFetch<any[]>({ query: PROJECTS_QUERY })
  if (!data || data.length === 0) return mockProjectsData

  return data.map((item, index) => {
    let imageUrl = item.mainImageUrl || ''
    if (item.mainImage) {
      imageUrl = urlForImage(item.mainImage)?.url() || imageUrl
    }
    if (!imageUrl) {
      imageUrl = mockProjectsData[index % mockProjectsData.length]?.mainImageUrl || ''
    }

    return {
      _id: item._id || `proj-${index}`,
      title: item.title,
      slug: typeof item.slug === 'object' ? item.slug.current : item.slug || `project-${index}`,
      category: item.category || 'Web App',
      featured: item.featured ?? true,
      excerpt: item.excerpt || '',
      fullDescription: item.fullDescription || item.excerpt || '',
      mainImageUrl: imageUrl,
      technologies: item.technologies || [],
      deliverables: item.deliverables || [],
      client: item.client || 'Confidential Client',
      year: item.year || '2024',
      liveUrl: item.liveUrl,
      githubUrl: item.githubUrl,
      order: item.order ?? index,
    }
  })
}

export async function getFeaturedProjects(): Promise<ProjectItem[]> {
  const all = await getProjectsData()
  const featured = all.filter((p) => p.featured)
  return featured.length > 0 ? featured.slice(0, 4) : all.slice(0, 4)
}

export async function getContactData(): Promise<ContactData> {
  const data = await sanityFetch<any>({ query: CONTACT_QUERY })
  if (!data) return mockContactData

  return {
    email: data.email || mockContactData.email,
    phone: data.phone || mockContactData.phone,
    location: data.location || mockContactData.location,
    timezone: data.timezone || mockContactData.timezone,
    availabilityNotice: data.availabilityNotice || mockContactData.availabilityNotice,
    responseTime: data.responseTime || mockContactData.responseTime,
    socialLinks: (data.socialLinks && data.socialLinks.length > 0) ? data.socialLinks : mockContactData.socialLinks,
  }
}
