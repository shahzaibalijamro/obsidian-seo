"use client";

import { useEffect, useState } from "react";

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCHeading[];
  variant?: "desktop" | "mobile";
}

export default function TableOfContents({ headings, variant = "desktop" }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible heading closest to the top of the viewport
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-90px 0px -60% 0px",
        threshold: [0, 1],
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) {
    return null;
  }

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      window.history.pushState(null, "", `#${id}`);
      if (variant === "mobile") {
        setIsOpenMobile(false);
      }
    }
  };

  if (variant === "mobile") {
    return (
      <div className="md:hidden my-8 rounded-xl border border-line bg-surface-container-low/70 backdrop-blur-md overflow-hidden transition-all shadow-sm">
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          aria-expanded={isOpenMobile}
          className="w-full flex items-center justify-between p-4 text-left font-label-md font-semibold text-on-surface hover:text-primary transition-colors"
        >
          <span className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h14" />
            </svg>
            <span>Table of Contents</span>
            <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-normal">
              {headings.length}
            </span>
          </span>
          <svg
            className={`w-5 h-5 text-on-surface-variant transition-transform duration-200 ${isOpenMobile ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpenMobile && (
          <nav className="px-4 pb-4 pt-1 border-t border-line-subtle" aria-label="Mobile Table of Contents">
            <ul className="space-y-2.5 text-sm">
              {headings.map((heading) => {
                const isActive = activeId === heading.id;
                return (
                  <li key={heading.id} className={heading.level === 3 ? "pl-4" : "pl-0"}>
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => handleScrollTo(e, heading.id)}
                      className={`block py-1 transition-colors leading-snug ${
                        isActive
                          ? "text-primary font-medium"
                          : "text-on-surface-variant hover:text-on-surface"
                      }`}
                    >
                      {heading.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    );
  }

  // Desktop Sticky Sidebar Variant
  return (
    <nav className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto p-5 rounded-2xl border border-line bg-surface/60 backdrop-blur-md shadow-sm" aria-label="Table of Contents">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-line-subtle">
        <h4 className="font-label-md text-xs uppercase tracking-wider font-semibold text-primary flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h14" />
          </svg>
          Table of Contents
        </h4>
        <span className="text-xs text-on-surface-variant px-2 py-0.5 rounded-full bg-surface-container">
          {headings.length}
        </span>
      </div>

      <ul className="space-y-2 text-sm">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <li key={heading.id} className={heading.level === 3 ? "pl-3 text-xs" : "pl-0"}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleScrollTo(e, heading.id)}
                className={`group flex items-start gap-2 py-1 transition-all leading-snug ${
                  isActive
                    ? "text-primary font-semibold translate-x-0.5"
                    : "text-on-surface-variant hover:text-on-surface hover:translate-x-0.5"
                }`}
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 rounded-full transition-all shrink-0 ${
                    isActive ? "bg-primary scale-125" : "bg-on-surface-variant/30 group-hover:bg-primary/60"
                  }`}
                />
                <span className="line-clamp-2">{heading.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
