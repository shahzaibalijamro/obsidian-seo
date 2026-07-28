"use client";

import { useState } from "react";
import ListingCard from "@/components/ListingCard";
import { caseStudiesData } from "@/data/case-studies";

const categories = ["All Work", "Technical SEO", "AI Integration", "Digital Strategy", "Social Media"];

export default function CaseStudiesPage() {
  const ITEMS_PER_PAGE = 10;
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const filteredCaseStudies = activeCategory === "All Work"
    ? caseStudiesData
    : caseStudiesData.filter(study => {
      // Map filter categories to mock data categories
      if (activeCategory === "Technical SEO") return study.category.includes("SEO");
      if (activeCategory === "AI Integration") return study.category.includes("AI");
      if (activeCategory === "Digital Strategy") return study.category === "Strategy" || study.category === "Growth" || study.category === "Data" || study.category === "Mastery";
      if (activeCategory === "Social Media") return study.category === "Social";
      return true;
    });

  const totalPages = Math.max(1, Math.ceil(filteredCaseStudies.length / ITEMS_PER_PAGE));
  const paginatedStudies = filteredCaseStudies.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <main className="flex-grow pt-32 pb-section-padding-mobile sm:pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Page Header */}
        <header className="mb-16 md:mb-24 text-center mx-auto">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6">
            Proven Impact &amp; <span className="text-gradient-indigo">Case Studies</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Explore how we've helped industry leaders achieve technical precision and market dominance through data-driven strategies.
          </p>
        </header>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap items-center gap-3 md:gap-4 glass-panel bg-surface/20 backdrop-blur-xl p-4 rounded-lg sticky top-18 sm:top-22 z-40">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-md font-label-md text-sm transition-colors ${activeCategory === category
                ? "bg-primary/10 text-primary border border-primary/20"
                : "text-on-surface-variant hover:text-on-surface hover:bg-line-subtle border border-transparent"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {paginatedStudies.map((study) => (
            <ListingCard key={study.id} {...study} linkPrefix="/case-studies/" />
          ))}
          {filteredCaseStudies.length === 0 && (
            <div className="col-span-1 md:col-span-3 text-center py-12 text-on-surface-variant">
              No case studies found for this category.
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredCaseStudies.length > 0 && (
          <div className="flex items-center justify-center gap-4 pt-8 border-t border-line-subtle">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full border border-line flex items-center justify-center transition-colors ${currentPage === 1 ? 'text-on-surface-variant opacity-50 cursor-not-allowed' : 'text-on-surface hover:text-primary hover:border-primary/50'}`}>
              <span className="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-label-md flex items-center justify-center transition-colors ${currentPage === page ? 'bg-primary/10 text-primary border border-primary/20' : 'border border-transparent text-on-surface-variant hover:border-line hover:bg-surface-container'}`}>
                  {page}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-full border border-line flex items-center justify-center transition-colors ${currentPage === totalPages ? 'text-on-surface-variant opacity-50 cursor-not-allowed' : 'text-on-surface hover:text-primary hover:border-primary/50'}`}>
              <span className="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>
        )}
      </main>
    </>
  );
}
