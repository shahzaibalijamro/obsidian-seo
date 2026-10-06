import { defineType, defineField } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isGuestContributor',
      title: 'Is Guest Contributor?',
      type: 'boolean',
      description: 'Toggle on if this author is not an internal team member.',
      initialValue: false,
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title / Role',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Only necessary for guest contributors',
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Biography',
      type: 'text',
      description: 'Used for blog post footers and author cards.',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'fullBio',
      title: 'Full Biography',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Used for the dedicated author profile page.',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
        { name: 'website', title: 'Personal Website', type: 'url' },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle off to hide this author from public listings if they are no longer relevant.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'jobTitle',
      media: 'image',
    },
  },
});
