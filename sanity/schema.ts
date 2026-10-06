import { type SchemaTypeDefinition } from 'sanity';

import { category } from './schemas/category';
import { author } from './schemas/author';
import { post } from './schemas/post';
import { contactQuery } from './schemas/contactQuery';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, author, post, contactQuery],
};
