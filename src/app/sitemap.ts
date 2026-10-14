import type { MetadataRoute } from 'next';
import { SITE_URL, getCanonicalUrl } from '@/lib/seo';
import { client } from '../../sanity/lib/client';
import { allPostsQuery } from '../../sanity/lib/queries';
import { groq } from 'next-sanity';
import { remainingServices } from '@/data/remaining-services';
import { industryPages } from '@/data/industries';
import { locationPages } from '@/data/locations';
import { caseStudiesData } from '@/data/case-studies';

// Dedicated standalone service slugs
const dedicatedServiceSlugs = [
  'ai-integration',
  'app-development',
  'content-marketing',
  'content-writing',
  'search-engine-marketing',
  'search-engine-optimization',
  'social-media-management',
  'social-media-marketing',
  'software-development',
  'web-development',
  'wordpress-development',
];

const authorsWithPostsQuery = groq`*[_type == "author" && isActive == true && count(*[_type == "post" && references(^._id)]) > 0] {
  "slug": slug.current,
  _updatedAt
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // 1. Static Core Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: getCanonicalUrl('/'),
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: getCanonicalUrl('/about'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/contact'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/blogs'),
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: getCanonicalUrl('/case-studies'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/industries'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/locations'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getCanonicalUrl('/privacy'),
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: getCanonicalUrl('/terms'),
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 2. Dedicated Service Pages (11 routes)
  const dedicatedServiceRoutes: MetadataRoute.Sitemap = dedicatedServiceSlugs.map((slug) => ({
    url: getCanonicalUrl(`/services/${slug}`),
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // 3. Remaining Services (Dynamic services route)
  const remainingServiceRoutes: MetadataRoute.Sitemap = remainingServices.map(({ slug }) => ({
    url: getCanonicalUrl(`/services/${slug}`),
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 4. Industry Pages (17 routes)
  const industryRoutes: MetadataRoute.Sitemap = industryPages.map(({ slug }) => ({
    url: getCanonicalUrl(`/industries/${slug}`),
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // 5. Location City Pages (11 routes)
  const locationRoutes: MetadataRoute.Sitemap = locationPages.map(({ slug }) => ({
    url: getCanonicalUrl(`/locations/${slug}`),
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  // 6. Case Studies Details
  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudiesData.map(({ id }) => ({
    url: getCanonicalUrl(`/case-studies/${id}`),
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 7. Blog Posts from Sanity
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch(allPostsQuery);
    if (Array.isArray(posts)) {
      blogRoutes = posts
        .filter((post: any) => post?.slug)
        .map((post: any) => ({
          url: getCanonicalUrl(`/blogs/${post.slug}`),
          lastModified: post.publishedAt ? new Date(post.publishedAt) : currentDate,
          changeFrequency: 'monthly',
          priority: 0.7,
        }));
    }
  } catch (error) {
    console.error('Failed to fetch blog posts for sitemap:', error);
  }

  // 8. Authors from Sanity (only active authors with at least one published post)
  let authorRoutes: MetadataRoute.Sitemap = [];
  try {
    const authors = await client.fetch(authorsWithPostsQuery);
    if (Array.isArray(authors)) {
      authorRoutes = authors
        .filter((author: any) => author?.slug)
        .map((author: any) => ({
          url: getCanonicalUrl(`/insights/authors/${author.slug}`),
          lastModified: author._updatedAt ? new Date(author._updatedAt) : currentDate,
          changeFrequency: 'monthly',
          priority: 0.6,
        }));
    }
  } catch (error) {
    console.error('Failed to fetch authors for sitemap:', error);
  }

  return [
    ...staticRoutes,
    ...dedicatedServiceRoutes,
    ...remainingServiceRoutes,
    ...industryRoutes,
    ...locationRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
    ...authorRoutes,
  ];
}
