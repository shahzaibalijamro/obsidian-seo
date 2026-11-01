import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from '@portabletext/react';
import CTASection from "@/components/CTASection";
import ListingCard from "@/components/ListingCard";
import TableOfContents, { type TOCHeading } from "@/components/TableOfContents";
import BlogFAQAccordion from "@/components/BlogFAQAccordion";
import { client } from "../../../../sanity/lib/client";
import { postBySlugQuery, allPostsQuery } from "../../../../sanity/lib/queries";
import { urlForImage } from "../../../../sanity/lib/image";
import { getCanonicalUrl, SITE_URL } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(allPostsQuery);
    return (posts || []).map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn("Could not fetch posts for generateStaticParams:", error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const blog = await client.fetch(postBySlugQuery, { slug });

    if (!blog) {
      return {};
    }

    const title = blog.seoMetadata?.metaTitle || `${blog.title} | Nawa Digital`;
    const description = blog.seoMetadata?.metaDescription || blog.excerpt || "Nawa Digital Insights & Blog";

    return {
      title,
      description,
      alternates: {
        canonical: getCanonicalUrl(`/blogs/${slug}`),
      },
    };
  } catch (error) {
    return {
      title: "Insights | Nawa Digital",
      description: "Nawa Digital Insights & Blog",
    };
  }
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

// Custom components for Portable Text to match editorial styling
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlForImage(value)?.url();

      if (!imageUrl) {
        return null;
      }

      return (
        <figure className="my-10">
          <img
            src={imageUrl}
            alt={value.alt ?? ""}
            className="w-full h-auto rounded-xl border border-on-surface/10"
          />
          {value.caption && (
            <figcaption className="mt-3 text-sm text-center text-on-surface-variant italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }: any) => (
      <p className="text-base md:text-lg text-on-surface leading-relaxed mb-6 font-normal">
        {children}
      </p>
    ),
    h2: ({ children, value }: any) => {
      const text = (value?.children || []).map((c: any) => c.text || '').join('');
      const id = slugify(text);
      return (
        <h2 id={id} className="scroll-mt-28 font-display-lg text-2xl md:text-3xl font-bold text-on-surface mt-10 mb-4 tracking-tight">
          {children}
        </h2>
      );
    },
    h3: ({ children, value }: any) => {
      const text = (value?.children || []).map((c: any) => c.text || '').join('');
      const id = slugify(text);
      return (
        <h3 id={id} className="scroll-mt-28 font-display-lg text-xl md:text-2xl font-semibold text-on-surface mt-8 mb-3">
          {children}
        </h3>
      );
    },
    blockquote: ({ children }: any) => (
      <blockquote className="my-10 py-6 pl-6 border-l-4 border-primary bg-surface-container-low rounded-r-lg">
        <p className="font-headline-md text-lg md:text-xl text-on-surface italic m-0">
          {children}
        </p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-none space-y-3 my-6 pl-0">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal space-y-3 my-6 pl-6 text-base md:text-lg text-on-surface">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="flex items-start text-base md:text-lg text-on-surface">
        <span className="material-symbols-outlined text-primary mr-3 mt-1 text-lg shrink-0">check_circle</span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-base md:text-lg text-on-surface leading-relaxed">
        {children}
      </li>
    ),
  },
  marks: {
    link: ({ value, children }: any) => {
      const isExternal = (value?.href || '').startsWith('http');
      return (
        <a
          href={value?.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-primary font-medium underline underline-offset-4 decoration-primary/50 hover:decoration-primary hover:text-accent transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }: any) => <strong className="font-semibold text-on-surface">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-mono text-sm">
        {children}
      </code>
    ),
  },
};

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  let blog: any = null;
  let allPosts: any[] = [];
  try {
    blog = await client.fetch(postBySlugQuery, { slug });
    allPosts = await client.fetch(allPostsQuery) || [];
  } catch (error) {
    console.warn(`Could not fetch blog with slug "${slug}" from Sanity:`, error);
  }

  if (!blog) {
    notFound();
  }

  // Get up to 3 related blogs in the same category
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

  // Extract TOC headings from portable text
  const headings: TOCHeading[] = [];
  if (Array.isArray(blog.content)) {
    blog.content.forEach((block: any) => {
      if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
        const text = (block.children || []).map((c: any) => c.text || '').join('');
        if (text.trim()) {
          headings.push({
            id: slugify(text),
            text: text.trim(),
            level: block.style === 'h2' ? 2 : 3,
          });
        }
      }
    });
  }

  // 1. Automatic Article / BlogPosting Schema
  const canonicalUrl = getCanonicalUrl(`/blogs/${slug}`);
  const articleSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    "headline": blog.title,
    "description": blog.seoMetadata?.metaDescription || blog.excerpt || blog.title,
    ...(mainImageUrl ? { "image": [mainImageUrl] } : {}),
    ...(blog.publishedAt ? { "datePublished": blog.publishedAt } : {}),
    "dateModified": blog._updatedAt || blog.publishedAt || undefined,
    "author": {
      "@type": "Person",
      "name": blog.authorName || "Nawa Digital Editorial Team",
      ...(blog.authorSlug ? { "url": `${SITE_URL}/insights/authors/${blog.authorSlug}` } : {}),
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nawa Digital",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/nawa_digital_logo_blue.svg`,
      },
    },
  };

  // 2. Automatic FAQPage Schema (if post has FAQs)
  const faqSchema = (blog.faqs && blog.faqs.length > 0) ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  // 3. Custom Schema Markup (from Sanity Studio seoMetadata.customSchema)
  let customSchemaRaw: string | null = null;
  if (blog.seoMetadata?.customSchema) {
    const cleaned = blog.seoMetadata.customSchema.replace(/<\/?script[^>]*>/gi, '').trim();
    if (cleaned) {
      customSchemaRaw = cleaned;
    }
  }

  const hasHeadings = headings.length > 0;

  return (
    <>
      {/* Structured Data (Schema Markup) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {customSchemaRaw && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: customSchemaRaw }}
        />
      )}

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
                By <Link href={`/insights/authors/${blog.authorSlug}`} className="hover:text-primary transition-colors">{blog.authorName}</Link>
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
                alt={blog.mainImage?.alt || blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none"></div>
            </div>
          )}

          {/* Editorial Content & Layout */}
          <div className={`relative ${hasHeadings ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl' : 'max-w-4xl'} mx-auto`}>
            {/* Main Content Body */}
            <div className={`${hasHeadings ? 'col-span-1 lg:col-span-8' : 'w-full'} prose-custom font-body-md text-on-surface-variant`}>
              {/* Mobile Table of Contents */}
              {hasHeadings && <TableOfContents headings={headings} variant="mobile" />}

              {/* Portable Text rendering */}
              <div className="portable-text-content">
                <PortableText value={blog.content} components={ptComponents} />
              </div>

              {/* Blog FAQs (Interactive Dropdown) */}
              {blog.faqs && blog.faqs.length > 0 && (
                <BlogFAQAccordion faqs={blog.faqs} />
              )}

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
                      <Link href={`/insights/authors/${blog.authorSlug}`} className="hover:text-primary transition-colors">
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
                    <Link href={`/insights/authors/${blog.authorSlug}`} className="text-primary hover:underline transition-colors text-sm font-semibold">
                      View all posts by {blog.authorName} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Sticky Sidebar for Table of Contents */}
            {hasHeadings && (
              <aside className="hidden lg:block lg:col-span-4 relative">
                <TableOfContents headings={headings} variant="desktop" />
              </aside>
            )}
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
