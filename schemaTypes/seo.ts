import {defineField, defineType} from 'sanity'

/**
 * Shared by `page` and `post`. Field names mirror what
 * `app/[page]/page.tsx` already reads (`page.seo?.title`,
 * `page.seo?.description`) so the storefront needs no reshaping.
 */
export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {collapsible: true, collapsed: true},
  fields: [
    defineField({
      name: 'title',
      title: 'Meta title',
      type: 'string',
      description: 'Falls back to the document title when empty.',
      validation: (rule) =>
        rule.max(60).warning('Search results truncate titles past ~60 characters.'),
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      validation: (rule) =>
        rule.max(160).warning('Search results truncate descriptions past ~160 characters.'),
    }),
  ],
})
