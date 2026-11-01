"use client";

import { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQAccordionProps {
  faqs?: FAQItem[];
  title?: string;
}

export default function BlogFAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
}: BlogFAQAccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // First item open by default

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="my-16 pt-8 border-t border-line-subtle" aria-labelledby="blog-faq-heading">
      <div className="mb-8">
        <span className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/10 text-primary font-label-md text-xs uppercase tracking-wider font-semibold border border-primary/20">
          FAQ
        </span>
        <h3 id="blog-faq-heading" className="font-display-lg text-2xl md:text-3xl font-bold text-on-surface">
          {title}
        </h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          const answerId = `blog-faq-answer-${index}`;
          const questionId = `blog-faq-question-${index}`;

          return (
            <div
              key={index}
              className="rounded-2xl border border-line bg-surface-container-low/50 backdrop-blur-sm transition-all duration-200 overflow-hidden"
            >
              <h4>
                <button
                  type="button"
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleIndex(index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-headline-md text-base md:text-lg font-semibold text-on-surface hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span className="flex-1">{faq.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface border border-line transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary/10 text-primary border-primary/30" : "text-on-surface-variant"
                    }`}
                    aria-hidden="true"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </h4>

              {isOpen && (
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className="px-5 pb-5 pt-1 text-on-surface-variant font-body-md text-sm md:text-base leading-relaxed border-t border-line-subtle/50"
                >
                  <p className="whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
