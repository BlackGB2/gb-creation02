import { groq } from 'next-sanity'

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    _id,
    brandName,
    siteTitle,
    announcementBadge,
    announcementBadgeLink,
    heroHeadline,
    heroBio,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    heroAvatar,
    socialLinks[] {
      platform,
      url,
      handle
    }
  }
`

export const ABOUT_QUERY = groq`
  *[_type == "about"][0] {
    _id,
    headline,
    profileImage,
    shortBio,
    story,
    stats[] {
      value,
      label
    },
    skillCategories[] {
      category,
      skills
    },
    workflow[] {
      step,
      title,
      description
    }
  }
`

export const EDUCATION_QUERY = groq`
  *[_type == "education"] | order(order asc) {
    _id,
    degree,
    institution,
    location,
    period,
    type,
    badgeLabel,
    description,
    skillsLearned,
    credentialUrl,
    order
  }
`

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    featured,
    excerpt,
    fullDescription,
    mainImage,
    mainImageUrl,
    technologies,
    deliverables,
    client,
    year,
    liveUrl,
    githubUrl,
    order
  }
`

export const CONTACT_QUERY = groq`
  *[_type == "contact"][0] {
    _id,
    email,
    phone,
    location,
    timezone,
    availabilityNotice,
    responseTime,
    socialLinks[] {
      platform,
      url,
      handle
    }
  }
`
