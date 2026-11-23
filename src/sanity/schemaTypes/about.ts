import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'Merging engineering rigor with timeless visual design.',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
      initialValue:
        'With over 6 years of experience building modern web applications, I live at the intersection of design, code, and user empathy.',
    }),
    defineField({
      name: 'story',
      title: 'Personal Story & Background',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'stats',
      title: 'Highlights / Key Numbers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g. 6+, 40+, 99.9%)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'skillCategories',
      title: 'Core Skills & Tools by Category',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Category Name', type: 'string' },
            {
              name: 'skills',
              title: 'Skills List',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'workflow',
      title: 'Workflow Principles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'step', title: 'Step / Phase Number (e.g. 01)', type: 'string' },
            { name: 'title', title: 'Phase Title', type: 'string' },
            { name: 'description', title: 'Phase Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
  ],
})
