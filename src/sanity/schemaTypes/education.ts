import { defineField, defineType } from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education & Certifications',
  type: 'document',
  fields: [
    defineField({
      name: 'degree',
      title: 'Degree / Program Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'institution',
      title: 'Institution / Organization',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'period',
      title: 'Time Period (e.g., 2020 - 2024)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          { title: 'Academic Degree', value: 'degree' },
          { title: 'Certification', value: 'certification' },
          { title: 'Specialized Course', value: 'course' },
          { title: 'Honors & Award', value: 'award' },
        ],
      },
      initialValue: 'degree',
    }),
    defineField({
      name: 'badgeLabel',
      title: 'Badge Label (e.g., First Class Honours, Top 1%)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Overview & Highlights',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'skillsLearned',
      title: 'Key Focus Areas & Skills',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'credentialUrl',
      title: 'Credential / Verification Link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
