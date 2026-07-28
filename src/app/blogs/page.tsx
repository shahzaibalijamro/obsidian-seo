"use client";

import { useState } from "react";
import ListingCard from "@/components/ListingCard";
import { blogsData } from "@/data/blogs";

const categories = ["All Insights", "Technical SEO", "Digital Strategy", "UX Design", "Industry News"];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All Insights");

  const filteredBlogs = activeCategory === "All Insights"
    ? blogsData
    : blogsData.filter(blog => {
      // Map filter categories to mock data categories
      if (activeCategory === "Technical SEO") return blog.category.includes("SEO");
      if (activeCategory === "Digital Strategy") return blog.category === "Strategy" || blog.category === "Growth" || blog.category === "Data" || blog.category === "Mastery";
      if (activeCategory === "UX Design") return blog.category === "UX Design";
      if (activeCategory === "Industry News") return false; // We don't have matching mock data for this, will show empty
      return true;
    });

  return (
    <>
      <main className="flex-grow pt-32 pb-section-padding-mobile sm:pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Page Header */}
        <header className="mb-16 md:mb-24 text-center mx-auto">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6">
            Intelligence &amp; <span className="text-gradient-indigo">Insights</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Navigating the digital frontier with strategic foresight and technical precision. Explore our latest thoughts on strategy, design, and engineering.
          </p>
        </header>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center gap-3 md:gap-4 glass-panel bg-surface/20 backdrop-blur-xl p-4 rounded-lg sticky top-18 sm:top-22 z-40">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-label-md text-sm transition-colors ${activeCategory === category
                ? "bg-primary/10 text-primary border border-primary/20"
                : "text-on-surface-variant hover:text-on-surface hover:bg-line-subtle border border-transparent"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {filteredBlogs.map((blog) => (
            <ListingCard key={blog.id} {...blog} linkPrefix="/blogs/" />
          ))}
          {filteredBlogs.length === 0 && (
            <div className="col-span-1 md:col-span-3 text-center py-12 text-on-surface-variant">
              No blogs found for this category.
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 pt-8 border-t border-line-subtle">
          <button className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors opacity-50 cursor-not-allowed">
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-primary/10 text-primary font-label-md flex items-center justify-center border border-primary/20">1</button>
            <button className="w-10 h-10 rounded-full border border-transparent text-on-surface-variant hover:border-line hover:bg-surface-container font-label-md flex items-center justify-center transition-colors">2</button>
            <button className="w-10 h-10 rounded-full border border-transparent text-on-surface-variant hover:border-line hover:bg-surface-container font-label-md flex items-center justify-center transition-colors">3</button>
            <span className="text-on-surface-variant px-2">...</span>
            <button className="w-10 h-10 rounded-full border border-transparent text-on-surface-variant hover:border-line hover:bg-surface-container font-label-md flex items-center justify-center transition-colors">8</button>
          </div>
          <button className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </main>
    </>
  );
}
