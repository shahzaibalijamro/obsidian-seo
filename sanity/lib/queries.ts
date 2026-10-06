import { groq } from 'next-sanity';

// Get all categories
export const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current
}`;

// Get all blog posts (for listing page)
export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "category": category->title,
  "authorName": author->name,
  "authorImage": author->image,
  "mainImage": mainImage,
  excerpt,
  publishedAt,
  estimatedReadTime
}`;

// Get a single blog post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  content,
  "category": category->title,
  "authorName": author->name,
  "authorRole": author->jobTitle,
  "authorImage": author->image,
  "authorBio": author->shortBio,
  "authorFullBio": author->fullBio,
  "authorSlug": author->slug.current,
  "mainImage": mainImage,
  excerpt,
  publishedAt,
  estimatedReadTime,
  seoMetadata
}`;

// Get an author and all their published posts by slug
export const authorProfileQuery = groq`*[_type == "author" && slug.current == $slug && isActive == true][0] {
  _id,
  name,
  "slug": slug.current,
  image,
  jobTitle,
  company,
  fullBio,
  socialLinks,
  "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    "mainImage": mainImage,
    excerpt,
    publishedAt,
    estimatedReadTime
  }
}`;
