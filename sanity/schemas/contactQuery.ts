import { defineType, defineField } from 'sanity';

export const contactQuery = defineType({
  name: 'contactQuery',
  title: 'Contact Query',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true, // Should only be written by the API
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'service',
      title: 'Service Interested In',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Read', value: 'read' },
          { title: 'Responded', value: 'responded' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Only visible here in the Studio.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status',
    },
    prepare({ title, subtitle, status }) {
      return {
        title,
        subtitle: `${status ? `[${status.toUpperCase()}] ` : ''}${subtitle}`,
      };
    },
  },
});
