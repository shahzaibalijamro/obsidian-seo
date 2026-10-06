import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import CTASection from "@/components/CTASection";
import ListingCard from "@/components/ListingCard";
import { client } from "../../../../sanity/lib/client";
import { postBySlugQuery, allPostsQuery } from "../../../../sanity/lib/queries";
import { urlForImage } from "../../../../sanity/lib/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const posts = await client.fetch(allPostsQuery);
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

// Custom components for Portable Text to match existing styling
const ptComponents = {
  block: {
    normal: ({ children }: any) => <p className="text-xl text-on-surface leading-relaxed mb-12">{children}</p>,
    h2: ({ children }: any) => <h2 className="font-headline-lg text-headline-lg text-on-surface mt-12 mb-6">{children}</h2>,
    h3: ({ children }: any) => <h3 className="font-headline-md text-headline-md text-on-surface mt-8 mb-4">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="my-16 py-8 pl-8 border-l-4 border-primary bg-surface-container-low rounded-r-lg">
        <p className="font-headline-md text-headline-md text-on-surface italic m-0">
          {children}
        </p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-none space-y-4 my-8 pl-0">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start">
        <span className="material-symbols-outlined text-primary mr-4 mt-1">check_circle</span>
        <span className="">{children}</span>
      </li>
    ),
  },
};

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await client.fetch(postBySlugQuery, { slug });

  if (!blog) {
    notFound();
  }

  // Get up to 3 related blogs in the same category
  // For simplicity here, we'll fetch all and filter. In a real large app, do this in GROQ.
  const allPosts = await client.fetch(allPostsQuery);
  const relatedBlogs = allPosts
    .filter((b: any) => b.category === blog.category && b.slug !== blog.slug)
    .slice(0, 3);

  // If not enough related, pad with recent blogs
  if (relatedBlogs.length < 3) {
    const otherBlogs = allPosts.filter((b: any) => !relatedBlogs.find((rb: any) => rb.slug === b.slug) && b.slug !== blog.slug).slice(0, 3 - relatedBlogs.length);
    relatedBlogs.push(...otherBlogs);
  }

  const publishedDate = blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
  const readTime = blog.estimatedReadTime ? `${blog.estimatedReadTime} min read` : "5 min read";
  const mainImageUrl = blog.mainImage ? urlForImage(blog.mainImage)?.url() : '';
  const authorImageUrl = blog.authorImage ? urlForImage(blog.authorImage)?.url() : '';

  return (
    <>
      <main className="pt-32 pb-section-padding">
        {/* Article Header */}
        <article className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Breadcrumbs */}
            <nav className="flex justify-center items-center space-x-2 text-on-surface-variant font-label-md text-label-md uppercase tracking-widest mb-8">
              <Link href="/blogs" className="hover:text-primary transition-colors">
                Insights
              </Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary">{blog.category}</span>
            </nav>

            <h1 className="font-headline-lg text-4xl md:text-6xl text-on-surface mb-8 max-w-4xl mx-auto tracking-tighter">
              {blog.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-on-surface-variant font-body-md text-sm md:text-base">
              <span>
                By <Link href={`/insights/authors/\${blog.authorSlug}`} className="hover:text-primary transition-colors">{blog.authorName}</Link>
              </span>
              <span className="hidden md:inline">•</span>
              <span>{publishedDate}</span>
              <span className="hidden md:inline">•</span>
              <span>{readTime}</span>
            </div>
          </div>

          {/* Hero Image */}
          {mainImageUrl && (
            <div className="w-full aspect-video rounded-xl overflow-hidden mb-section-padding border border-on-surface/10 relative group">
              <img
                src={mainImageUrl}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none"></div>
            </div>
          )}

          {/* Editorial Content & Layout */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-gutter max-w-6xl mx-auto">
            {/* Social Share (Sticky Sidebar on Desktop) */}
            <div className="hidden md:block col-span-1 md:col-span-2 relative">
              <div className="sticky top-40 flex flex-col space-y-6 items-center">
                <button className="w-10 h-10 rounded-full border border-on-surface/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors glow-hover">
                  <span className="material-symbols-outlined">share</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-on-surface/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors glow-hover">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="col-span-1 md:col-span-8 prose-custom font-body-lg text-body-lg text-on-surface-variant">
              {/* Portable Text rendering replacing dangerouslySetInnerHTML */}
              <div className="portable-text-content">
                <PortableText value={blog.content} components={ptComponents} />
              </div>

              {/* Author Bio Card */}
              <div className="mt-16 p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10 flex flex-col md:flex-row items-center md:items-start gap-8">
                {authorImageUrl && (
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={authorImageUrl}
                      alt={blog.authorName}
                      className="w-full h-full object-cover rounded-full border-2 border-primary/20"
                    />
                  </div>
                )}
                <div className="flex-grow text-center md:text-left">
                  <div className="mb-4">
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                      <Link href={`/insights/authors/\${blog.authorSlug}`} className="hover:text-primary transition-colors">
                        {blog.authorName}
                      </Link>
                    </h4>
                    {blog.authorRole && (
                      <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                        {blog.authorRole}
                      </p>
                    )}
                  </div>
                  {blog.authorBio && (
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                      {blog.authorBio}
                    </p>
                  )}
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <Link href={`/insights/authors/\${blog.authorSlug}`} className="text-primary hover:underline transition-colors text-sm font-semibold">
                      View all posts by {blog.authorName} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Service Integration CTA */}
        <section className="mt-section-padding">
          <CTASection />
        </section>

        {/* Related Insights Grid */}
        <section className="mt-section-padding max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-12 border-b border-on-surface/10 pb-4">
            Related Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {relatedBlogs.map((relatedBlog: any) => (
              <ListingCard
                key={relatedBlog._id}
                id={relatedBlog.slug}
                title={relatedBlog.title}
                category={relatedBlog.category}
                date={relatedBlog.publishedAt ? new Date(relatedBlog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                readTime={relatedBlog.estimatedReadTime ? `${relatedBlog.estimatedReadTime} min read` : "5 min read"}
                excerpt={relatedBlog.excerpt}
                image={relatedBlog.mainImage ? urlForImage(relatedBlog.mainImage)?.url() || '' : ''}
                linkPrefix="/blogs/"
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
