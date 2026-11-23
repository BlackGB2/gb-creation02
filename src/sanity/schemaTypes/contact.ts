import { defineField, defineType } from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact Details',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'hello@gihanbhathi.dev',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '+1 (555) 382-9014',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Current Location',
      type: 'string',
      initialValue: 'San Francisco, CA / Remote Worldwide',
    }),
    defineField({
      name: 'timezone',
      title: 'Time Zone',
      type: 'string',
      initialValue: 'PST (UTC-8) / Flexible',
    }),
    defineField({
      name: 'availabilityNotice',
      title: 'Availability Status Notice',
      type: 'string',
      initialValue: 'Available for freelance engagements, design systems, and modern web apps.',
    }),
    defineField({
      name: 'responseTime',
      title: 'Expected Response Time',
      type: 'string',
      initialValue: 'Guaranteed response within 24 hours',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform (GitHub, LinkedIn, X/Twitter, Dribbble)', type: 'string' },
            { name: 'url', title: 'Profile URL', type: 'url' },
            { name: 'handle', title: 'Handle (e.g. @gihanbhathi)', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
