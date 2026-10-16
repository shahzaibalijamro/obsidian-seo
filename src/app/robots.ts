import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'OAI-SearchBot',
          'ChatGPT-User',
          'GPTBot',
          'Claude-SearchBot',
          'Claude-User',
          'ClaudeBot',
          'PerplexityBot',
          'Perplexity-User',
          'Meta-WebIndexer',
          'Meta-ExternalFetcher',
          'Meta-ExternalAgent',
          'Applebot',
          'Applebot-Extended',
          'bingbot',
        ],
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
