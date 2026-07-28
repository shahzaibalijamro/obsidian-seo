"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is your typical engagement size and project minimum?",
    answer: "We typically partner with mid-market to enterprise organizations on engagements starting at $50,000. This ensures we can allocate the senior-level strategic and engineering resources required to deliver the high-impact results our clients expect."
  },
  {
    question: "Do you offer post-launch support and maintenance plans?",
    answer: "Yes, we provide ongoing maintenance and performance optimization to ensure your platform scales securely."
  },
  {
    question: "How do you measure success and ROI?",
    answer: "We establish clear KPIs upfront, focusing on conversion rates, user engagement, and measurable business growth."
  },
  {
    question: "What is the typical timeline for a custom software project?",
    answer: "Most custom projects take 3-6 months from initial discovery to final deployment, depending on complexity."
  },
  {
    question: "Who owns the intellectual property and code?",
    answer: "Upon final payment, you retain 100% ownership of all intellectual property and custom code."
  },
  {
    question: "What does the team composition look like?",
    answer: "Your dedicated team includes a strategist, UX/UI designer, senior engineers, and a project manager."
  },
  {
    question: "Can you integrate with our existing internal tech teams?",
    answer: "Absolutely. We routinely co-develop with internal teams, adhering to your established Git workflows and CI/CD pipelines."
  },
  {
    question: "What are your security protocols and data privacy standards?",
    answer: "We build with security-first architecture, ensuring SOC2 compliance, data encryption at rest, and regular vulnerability scanning."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding bg-mesh section-curve-top section-curve-bottom">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
            Frequently Asked Questions
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            Find answers to frequently asked questions about our process, pricing, and how we partner with brands to drive digital growth.
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