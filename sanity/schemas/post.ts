import { defineType, defineField, defineArrayMember } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image (Featured)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative text for SEO and accessibility. Describe what is in the image.',
          validation: (Rule) => Rule.required().error('Alt text is required for SEO and accessibility.'),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Short Summary',
      type: 'text',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
        defineArrayMember({
          type: 'object',
          name: 'table',
          title: 'Table',
          fields: [
            defineField({
              name: 'caption',
              title: 'Table Caption (Optional)',
              type: 'string',
            }),
            defineField({
              name: 'rows',
              title: 'Table Rows (First row will be treated as header)',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'row',
                  title: 'Row',
                  fields: [
                    defineField({
                      name: 'cells',
                      title: 'Cells (Columns)',
                      type: 'array',
                      of: [{ type: 'string' }],
                    }),
                  ],
                  preview: {
                    select: {
                      cells: 'cells',
                    },
                    prepare(selection) {
                      const { cells } = selection;
                      return {
                        title: Array.isArray(cells) && cells.length > 0 ? cells.join(' | ') : 'Empty Row',
                      };
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {
              caption: 'caption',
              rows: 'rows',
            },
            prepare({ caption, rows }) {
              return {
                title: caption || 'Data Table',
                subtitle: `${rows?.length || 0} rows`,
              };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions (FAQs)',
      description: 'Add FAQs for this article. They will display as an interactive dropdown accordion and generate Google FAQPage Schema markup.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publication Date',
      type: 'datetime',
      description: 'You can override this. Otherwise, it defaults to when you first publish.',
    }),
    defineField({
      name: 'estimatedReadTime',
      title: 'Estimated Read Time (minutes)',
      type: 'number',
      description: 'Leave blank to auto-calculate on the frontend.',
    }),
    defineField({
      name: 'seoMetadata',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string', description: 'Defaults to post title if left blank' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', description: 'Defaults to excerpt if left blank' },
        { name: 'ogImage', title: 'Open Graph Image', type: 'image', description: 'Defaults to main image if left blank' },
        {
          name: 'customSchema',
          title: 'Custom Schema Markup (JSON-LD)',
          type: 'text',
          description: 'Optional: Paste custom JSON-LD schema (e.g. from a schema generator). Will be inserted into the page head as structured data.',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
