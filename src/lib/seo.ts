import type { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nawadigital.me';

/**
 * Returns a fully qualified canonical URL for a given relative path.
 * Normalizes leading slashes and ensures no trailing slashes on subpages.
 */
export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/' || cleanPath === '') {
    return `${SITE_URL}/`;
  }
  // Strip any trailing slash for subpaths
  const normalized = cleanPath.endsWith('/') ? cleanPath.slice(0, -1) : cleanPath;
  return `${SITE_URL}${normalized}`;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

/**
 * Generates consistent Metadata object with self-referencing canonical URL.
 */
export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: getCanonicalUrl(path),
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
