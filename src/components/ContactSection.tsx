"use client";

import { useState } from "react";
import Select from "react-select";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");


  const services = [
    {
      value: "search-engine-optimization",
      label: "Search Engine Optimization",
    },
    {
      value: "search-engine-marketing",
      label: "Search Engine Marketing",
    },
    {
      value: "social-media-marketing",
      label: "Social Media Marketing",
    },
    {
      value: "social-media-management",
      label: "Social Media Management",
    },
    {
      value: "content-marketing",
      label: "Content Marketing",
    },
    {
      value: "content-writing",
      label: "Content Writing",
    },
    {
      value: "email-marketing",
      label: "Email Marketing",
    },
    {
      value: "influencer-marketing",
      label: "Influencer Marketing",
    },
    {
      value: "online-reputation-management",
      label: "Online Reputation Management",
    },
    {
      value: "conversion-rate-optimization",
      label: "Conversion Rate Optimization (CRO)",
    },
    {
      value: "ai-integration",
      label: "AI Integration",
    },
    {
      value: "ai-agents",
      label: "AI Agents",
    },
    {
      value: "ai-chatbots",
      label: "AI Chatbots",
    },
    {
      value: "business-automation",
      label: "Business Automation",
    },
    {
      value: "custom-ai-solutions",
      label: "Custom AI Solutions",
    },
    {
      value: "web-development",
      label: "Web Development",
    },
    {
      value: "wordpress-development",
      label: "WordPress Development",
    },
    {
      value: "software-development",
      label: "Software Development",
    },
    {
      value: "app-development",
      label: "App Development",
    },
    {
      value: "shopify-ecommerce-development",
      label: "Shopify / E-commerce Development",
    },
  ];


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding relative overflow-hidden"
        id="contact"
      >
        <div className="absolute inset-0 bg-mesh z-0"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                Start a{" "}
                <span className="text-gradient-indigo">Conversation</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
                We take on a focused number of new clients each quarter so every
                engagement gets the attention it deserves. Share a few details
                and a member of our team will be in touch.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-4 py-2">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    mail
                  </span>
                  <p className="font-body-md text-on-surface">
                    contact@nawadigital.me
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-8 ml-2">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined">facebook</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined">
                      photo_camera
                    </span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined">work</span>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="glass-panel px-6 py-10 sm:p-10 rounded-3xl">
              {submitStatus === "success" ? (
                <div className="text-center py-12">
                  <span className="material-symbols-outlined text-5xl text-primary mb-4">
                    check_circle
                  </span>
                  <h3 className="font-headline-md text-on-surface mb-2">
                    Message Sent
                  </h3>
                  <p className="text-on-surface-variant">
                    We'll be in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-8 text-primary font-label-md hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block font-label-md text-on-surface-variant mb-2 ml-2"
                        htmlFor="full-name"
                      >
                        Full Name *
                      </label>
                      <input
                        name="name"
                        className="form-input-Nawa w-full text-body-md"
                        id="full-name"
                        placeholder="John Doe"
                        type="text"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block font-label-md text-on-surface-variant mb-2 ml-2"
                        htmlFor="email-address"
                      >
                        Email Address *
                      </label>
                      <input
                        name="email"
                        className="form-input-Nawa w-full text-body-md"
                        id="email-address"
                        placeholder="john@company.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label
                        className="block font-label-md text-on-surface-variant mb-2 ml-2"
                        htmlFor="company-name"
                      >
                        Company Name
                      </label>
                      <input
                        name="company"
                        className="form-input-Nawa w-full text-body-md"
                        id="company-name"
                        placeholder="Acme Corp"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block font-label-md text-on-surface-variant mb-2 ml-2"
                      htmlFor="service-interest"
                    >
                      Service Interested In
                    </label>
                    <Select
                      name="service"
                      instanceId="service-interest"
                      inputId="service-interest-input"
                      options={services}
                      placeholder="Select a service..."
                      maxMenuHeight={240}
                      menuPlacement="auto"
                      isSearchable
                      className="w-full text-body-md"
                    />
                  </div>
                  <div>
                    <label
                      className="block font-label-md text-on-surface-variant mb-2 ml-2"
                      htmlFor="project-details"
                    >
                      Project Details / Message
                    </label>
                    <textarea
                      name="message"
                      className="form-input-Nawa w-full text-body-md resize-none"
                      id="project-details"
                      placeholder="Tell us about your objectives..."
                      rows={4}
                    ></textarea>
                  </div>
                  {submitStatus === "error" && (
                    <p className="text-red-500 text-sm ml-2">
                      Failed to send message. Please try again later.
                    </p>
                  )}
                  <div className="flex flex-col gap-4 pt-4">
                    <button
                      disabled={isSubmitting}
                      className="w-full py-4 bg-inverse-primary text-on-primary font-label-md rounded-xl hover:bg-primary cursor-pointer transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
