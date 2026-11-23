import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'brandName',
      title: 'Brand / Logo Name',
      type: 'string',
      initialValue: 'GB.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteTitle',
      title: 'Site Meta Title',
      type: 'string',
      initialValue: 'Gihan Bhathi — Design Engineer & Creative Technologist',
    }),
    defineField({
      name: 'announcementBadge',
      title: 'Hero Announcement Badge Text',
      type: 'string',
      initialValue: 'Available for Freelance & New Projects ->',
      description: 'Top pill badge displayed in the hero section',
    }),
    defineField({
      name: 'announcementBadgeLink',
      title: 'Hero Announcement Badge Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Crafting digital products with precision, code & soul.',
    }),
    defineField({
      name: 'heroBio',
      title: 'Hero Subtitle / Short Bio',
      type: 'text',
      rows: 3,
      initialValue:
        'I am a design engineer blending modern front-end craftsmanship with clean aesthetics. Specializing in high-performance web applications, interactive design systems, and thoughtful digital experiences.',
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Button Text',
      type: 'string',
      initialValue: 'View My Work',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Button Link',
      type: 'string',
      initialValue: '/work',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Button Text',
      type: 'string',
      initialValue: 'Contact Me',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Button Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'heroAvatar',
      title: 'Hero Profile / Brand Avatar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'handle', title: 'Display Handle / Username', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
