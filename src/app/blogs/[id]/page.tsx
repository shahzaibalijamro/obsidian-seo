import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ListingCard from "@/components/ListingCard";
import { blogsData } from "@/data/blogs";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Ensure static generation for all existing blogs
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    id: blog.id,
  }));
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { id } = await params;
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  // Get up to 3 related blogs in the same category
  const relatedBlogs = blogsData
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);
  
  // If not enough related, pad with recent blogs
  if (relatedBlogs.length < 3) {
      const otherBlogs = blogsData.filter(b => !relatedBlogs.includes(b) && b.id !== blog.id).slice(0, 3 - relatedBlogs.length);
      relatedBlogs.push(...otherBlogs);
  }

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
              <span>By {blog.authorName}</span>
              <span className="hidden md:inline">•</span>
              <span>{blog.date}</span>
              <span className="hidden md:inline">•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-video rounded-xl overflow-hidden mb-section-padding border border-on-surface/10 relative group">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none"></div>
          </div>

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
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />

              {/* Author Bio Card */}
              <div className="mt-16 p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10 flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={blog.authorImage}
                    alt={blog.authorName}
                    className="w-full h-full object-cover rounded-full border-2 border-primary/20"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="mb-4">
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-1">
                      {blog.authorName}
                    </h4>
                    <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                      {blog.authorRole}
                    </p>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                    {blog.authorBio}
                  </p>
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">share</span>
                    </a>
                    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">alternate_email</span>
                    </a>
                    <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">language</span>
                    </a>
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
            {relatedBlogs.map((relatedBlog) => (
              <ListingCard key={relatedBlog.id} {...relatedBlog} linkPrefix="/blogs/" />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
