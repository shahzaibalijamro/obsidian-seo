import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import ListingCard from "@/components/ListingCard";
import CTASection from "@/components/CTASection";
import { client } from "../../../../../sanity/lib/client";
import { authorProfileQuery } from "../../../../../sanity/lib/queries";
import { urlForImage } from "../../../../../sanity/lib/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

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
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 bg-surface-container/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-on-surface/10">
            {authorImageUrl && (
              <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
                <img
                  src={authorImageUrl}
                  alt={author.name}
                  className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-xl"
                />
              </div>
            )}

            <div className="flex-grow text-center md:text-left">
              <h1 className="font-headline-lg text-4xl md:text-5xl text-on-surface mb-2">
                {author.name}
              </h1>

              <div className="font-label-md text-label-md text-primary uppercase tracking-widest mb-6">
                {author.jobTitle} {author.company && `at ${author.company}`}
              </div>

              {author.fullBio && (
                <div className="prose-custom font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-8">
                  <PortableText value={author.fullBio} />
                </div>
              )}

              {author.socialLinks && (
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  {author.socialLinks.linkedin && (
                    <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                      LinkedIn
                    </a>
                  )}
                  {author.socialLinks.twitter && (
                    <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                      Twitter
                    </a>
                  )}
                  {author.socialLinks.website && (
                    <a href={author.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                      Website
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Author's Articles */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
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
        <section className="mt-section-padding">
          <CTASection />
        </section>
      </main>
    </>
  );
}
