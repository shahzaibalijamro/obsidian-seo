"use client";

import { useState } from "react";
import ListingCard from "@/components/ListingCard";
import { urlForImage } from "../../../sanity/lib/image";

interface Category {
  _id: string;
  title: string;
  slug: string;
}

interface Post {
  _id: string;
  title: string;
  slug: string;
  category: string;
  authorName: string;
  authorImage?: any;
  mainImage?: any;
  excerpt: string;
  publishedAt: string;
  estimatedReadTime?: number;
}

interface BlogsClientProps {
  categories: Category[];
  initialPosts: Post[];
}

export default function BlogsClient({ categories, initialPosts }: BlogsClientProps) {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredBlogs = activeCategory === "All Insights"
    ? initialPosts
    : initialPosts.filter(blog => blog.category === activeCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="mb-12 flex flex-wrap items-center gap-3 md:gap-4 glass-panel bg-surface/20 backdrop-blur-xl p-4 rounded-lg sticky top-18 sm:top-22 z-40">
        <button
          onClick={() => setActiveCategory("All Insights")}
          className={`px-4 py-2 rounded-md font-label-md text-sm transition-colors ${activeCategory === "All Insights"
            ? "bg-primary/10 text-primary border border-primary/20"
            : "text-on-surface-variant hover:text-on-surface hover:bg-line-subtle border border-transparent"
            }`}
        >
          All Insights
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => setActiveCategory(category.title)}
            className={`px-4 py-2 rounded-md font-label-md text-sm transition-colors ${activeCategory === category.title
              ? "bg-primary/10 text-primary border border-primary/20"
              : "text-on-surface-variant hover:text-on-surface hover:bg-line-subtle border border-transparent"
              }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {filteredBlogs.map((blog) => (
          <ListingCard
            key={blog._id}
            id={blog.slug}
            title={blog.title}
            category={blog.category}
            date={blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
            readTime={blog.estimatedReadTime ? `${blog.estimatedReadTime} min read` : "5 min read"}
            excerpt={blog.excerpt}
            image={blog.mainImage ? urlForImage(blog.mainImage)?.url() || '' : ''}
            linkPrefix="/blogs/"
          />
        ))}
        {filteredBlogs.length === 0 && (
          <div className="col-span-1 md:col-span-3 text-center py-12 text-on-surface-variant">
            No blogs found for this category.
          </div>
        )}
      </div>

      {/* Pagination - Dummy for now as per original */}
      <div className="flex items-center justify-center gap-4 pt-8 border-t border-line-subtle">
        <button className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors opacity-50 cursor-not-allowed">
          <span className="material-symbols-outlined text-xl">chevron_left</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-primary/10 text-primary font-label-md flex items-center justify-center border border-primary/20">1</button>
          <button className="w-10 h-10 rounded-full border border-transparent text-on-surface-variant hover:border-line hover:bg-surface-container font-label-md flex items-center justify-center transition-colors">2</button>
        </div>
        <button className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors">
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </div>
    </>
  );
}
