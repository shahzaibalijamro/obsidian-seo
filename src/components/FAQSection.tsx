"use client";
import { useState } from "react";

const defaultFaqs = [
  {
    question: "How much does it cost to work with Obsidian Digital?",
    answer: "Our pricing depends on the scope, service mix, and level of resource required. Most mid-market engagements start from SAR 185,000. We are happy to review your requirements and provide a clear, itemised proposal. If you are looking for a top digital marketing agency in Saudi Arabia that is transparent about pricing, we will always give you a straight answer."
  },
  {
    question: "Do you offer ongoing support once a project is live?",
    answer: "Yes. We can provide ongoing support after launch depending on your requirements. This can include performance optimisation, SEO, marketing support, technical improvements, software maintenance, and other services needed to support long-term growth."
  },
  {
    question: "How do you track and report on performance?",
    answer: "We agree on the key objectives and success metrics at the beginning of each engagement, then track performance against them. Reporting focuses on meaningful business outcomes rather than vanity metrics, so you can clearly see what is working and where improvements are needed."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines depend on the scope, complexity, and services involved. A focused marketing engagement may have a different timeline from a website, application, or custom software project. During the strategy stage, we define the expected milestones and delivery schedule."
  },
  {
    question: "Who owns the work, code, and creative assets after delivery?",
    answer: "Ownership and usage rights are agreed as part of the project scope and contract. We make these terms clear before work begins so there is no uncertainty about what happens to your website, software, creative assets, and other deliverables after delivery."
  },
  {
    question: "Who will be working on my account day to day?",
    answer: "Your engagement is handled by experienced professionals throughout the project. The team involved depends on the services and expertise your project requires, with the work structured around your specific objectives and priorities."
  },
  {
    question: "Can you work alongside our existing marketing or development team?",
    answer: "Yes. We can work alongside an existing internal marketing, development, or technology team. Our approach is designed to complement your existing capabilities where useful, whether you need specialist expertise, additional delivery capacity, or support with a specific project."
  },
  {
    question: "How do you approach data privacy and information security?",
    answer: "We treat data privacy and information security as an important part of every engagement. The specific requirements and safeguards depend on the nature of the project, the systems involved, and the type of information being handled. These considerations are discussed during project planning."
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQItem[];
  description?: string;
}

export default function FAQSection({ faqs = defaultFaqs, description = "Common questions about working with us, how we structure engagements, and what to expect throughout the process." }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding bg-mesh section-curve-top section-curve-bottom">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            {description}
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl cursor-pointer group"
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-headline-md text-lg text-on-surface">{faq.question}</h4>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  {activeIndex === idx ? 'remove' : 'add'}
                </span>
              </div>
              {activeIndex === idx && (
                <p className="font-body-md text-on-surface-variant mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
