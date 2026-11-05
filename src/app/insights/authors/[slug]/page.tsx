import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import ListingCard from "@/components/ListingCard";
import CTASection from "@/components/CTASection";
import { client } from "../../../../../sanity/lib/client";
import { authorProfileQuery } from "../../../../../sanity/lib/queries";
import { urlForImage } from "../../../../../sanity/lib/image";
import { getCanonicalUrl } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = await client.fetch(authorProfileQuery, { slug });

  if (!author || !author.posts || author.posts.length === 0) {
    return {};
  }

  return {
    title: `${author.name} | Nawa Digital`,
    description: author.shortBio || `Explore articles and strategic insights published by ${author.name} at Nawa Digital.`,
    alternates: {
      canonical: getCanonicalUrl(`/insights/authors/${slug}`),
    },
  };
}

const authorBioComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-base md:text-lg text-on-surface-variant leading-relaxed mb-4">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline underline-offset-4"
      >
        {children}
      </a>
    ),
  },
};

export default async function AuthorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const author = await client.fetch(authorProfileQuery, { slug });

  // If author doesn't exist or has 0 posts, return 404 to avoid thin content
  if (!author || !author.posts || author.posts.length === 0) {
    notFound();
  }

  const authorImageUrl = author.image ? urlForImage(author.image)?.url() : '';

  return (
    <>
      <main className="pt-32 pb-section-padding">
        {/* Author Header */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 md:mb-24">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 bg-surface-container/30 backdrop-blur-md p-6 sm:p-10 md:p-12 rounded-2xl border border-on-surface/10">
            {authorImageUrl && (
              <div className="w-32 h-32 md:w-44 md:h-44 flex-shrink-0 self-center md:self-start">
                <img
                  src={authorImageUrl}
                  alt={author.name}
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-xl"
                />
              </div>
            )}

            <div className="flex-grow text-left">
              <h1 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-3 tracking-tight">
                {author.name}
              </h1>

              <div className="font-label-md text-sm md:text-base text-primary uppercase tracking-widest mb-6 font-semibold">
                {author.jobTitle} {author.company && `at ${author.company}`}
              </div>

              {author.fullBio && (
                <div className="font-body-lg text-on-surface-variant max-w-3xl mb-8">
                  <PortableText value={author.fullBio} components={authorBioComponents} />
                </div>
              )}

              {author.socialLinks && (
                <div className="flex flex-wrap items-center justify-start gap-6 pt-4 border-t border-on-surface/10">
                  {author.socialLinks.linkedin && (
                    <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                      <span>LinkedIn</span> &rarr;
                    </a>
                  )}
                  {author.socialLinks.twitter && (
                    <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                      <span>Twitter</span> &rarr;
                    </a>
                  )}
                  {author.socialLinks.website && (
                    <a href={author.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
                      <span>Website</span> &rarr;
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Author's Articles */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-20 md:mb-24">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-12 border-b border-on-surface/10 pb-4">
            Articles by {author.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {author.posts.map((post: any) => (
              <ListingCard
                key={post._id}
                id={post.slug}
                title={post.title}
                category={post.category}
                date={post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                readTime={post.estimatedReadTime ? `${post.estimatedReadTime} min read` : "5 min read"}
                excerpt={post.excerpt}
                image={post.mainImage ? urlForImage(post.mainImage)?.url() || '' : ''}
                linkPrefix="/blogs/"
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 md:mt-24">
          <CTASection />
        </section>
      </main>
    </>
  );
}
