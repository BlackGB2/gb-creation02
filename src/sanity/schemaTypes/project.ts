import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web App', value: 'Web App' },
          { title: 'Design System', value: 'Design System' },
          { title: 'Creative Tech', value: 'Creative Tech' },
          { title: 'Mobile & AI', value: 'Mobile & AI' },
          { title: 'SaaS Platform', value: 'SaaS Platform' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt / Summary',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Case Study Description',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover / Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImageUrl',
      title: 'Fallback Image URL (Optional)',
      type: 'url',
      description: 'Used for remote sample images or placeholder links',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies & Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'deliverables',
      title: 'Key Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'client',
      title: 'Client / Organization',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year Completed',
      type: 'string',
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live Preview URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Source URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
