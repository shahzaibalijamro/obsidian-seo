import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Our Digital & Technology Services | Nawa Digital",
    description: "Explore our full spectrum of digital marketing, strategic content, AI automation, and custom software development services in Saudi Arabia.",
    alternates: {
        canonical: getCanonicalUrl("/services"),
    },
};

const serviceCategories = [
    {
        title: "Marketing",
        badge: "Growth & Visibility",
        description: "Data-driven organic search, search engine marketing, and multi-channel audience acquisition tailored for competitive Saudi markets.",
        icon: "trending_up",
        services: [
            { label: "Search Engine Optimization (SEO)", href: "/services/search-engine-optimization", desc: "Organic search dominance, technical audits, and high-intent keyword strategies." },
            { label: "Search Engine Marketing (SEM)", href: "/services/search-engine-marketing", desc: "Performance advertising and paid search campaigns that maximize conversion efficiency." },
            { label: "Social Media Marketing", href: "/services/social-media-marketing", desc: "Targeted paid social campaigns that build brand authority and capture high-intent leads." },
            { label: "Social Media Management", href: "/services/social-media-management", desc: "End-to-end community engagement, publishing cadence, and creative storytelling." },
            { label: "Email Marketing", href: "/services/email-marketing", desc: "Lifecycle sequences, newsletters, and retention workflows that drive lasting customer value." },
            { label: "Influencer Marketing", href: "/services/influencer-marketing", desc: "Strategic creator partnerships that build credible affinity with Saudi audiences." },
            { label: "Online Reputation Management", href: "/services/online-reputation-management", desc: "Proactive sentiment tracking, review workflows, and executive profile management." },
            { label: "Conversion Rate Optimization (CRO)", href: "/services/conversion-rate-optimization", desc: "Frictionless user journeys, A/B testing, and funnel improvements that lift revenue." },
        ],
    },
    {
        title: "Content",
        badge: "Editorial & Strategy",
        description: "Authoritative, industry-specific content engineering designed to map search intent and build domain authority.",
        icon: "edit_document",
        services: [
            { label: "Content Writing", href: "/services/content-writing", desc: "High-value articles, localized copy, and technical documentation written with precision." },
            { label: "Content Marketing", href: "/services/content-marketing", desc: "Topic clusters, distribution frameworks, and content ecosystems that drive compounding traffic." },
        ],
    },
    {
        title: "Automation & AI",
        badge: "Intelligent Systems",
        description: "Streamline enterprise workflows, automate recurring tasks, and integrate custom AI models into daily operations.",
        icon: "smart_toy",
        services: [
            { label: "AI Integration", href: "/services/ai-integration", desc: "Seamless integration of frontier language models and machine intelligence into existing stacks." },
            { label: "AI Agents", href: "/services/ai-agents", desc: "Autonomous digital agents that execute complex workflows and business operations." },
            { label: "AI Chatbots", href: "/services/ai-chatbots", desc: "Context-aware conversational assistants trained on your proprietary data and brand guidelines." },
            { label: "Business Automation", href: "/services/business-automation", desc: "End-to-end process automation connecting CRM, billing, reporting, and operational tooling." },
            { label: "Custom AI Solutions", href: "/services/custom-ai-solutions", desc: "Bespoke machine learning architectures built specifically for your proprietary workflows." },
        ],
    },
    {
        title: "Development",
        badge: "Engineering & Architecture",
        description: "High-performance websites, custom web applications, and enterprise digital platforms built for scale.",
        icon: "code",
        services: [
            { label: "Web Development", href: "/services/web-development", desc: "Fast, accessible, and responsive web platforms optimized for Core Web Vitals and conversions." },
            { label: "Software Development", href: "/services/software-development", desc: "Bespoke cloud-native software and resilient APIs engineered for complex enterprise use cases." },
            { label: "App Development", href: "/services/app-development", desc: "Cross-platform mobile experiences that deliver seamless native performance on iOS and Android." },
            { label: "WordPress Development", href: "/services/wordpress-development", desc: "High-security, custom-themed WordPress builds configured for content marketing velocity." },
            { label: "Shopify / E-commerce Development", href: "/services/shopify-ecommerce-development", desc: "Scalable e-commerce infrastructure with frictionless checkout and localized payment gateways." },
        ],
    },
];

export default function ServicesPage() {
    return (
        <main>
            <HeroSection
                badgeText="FULL-SERVICE DIGITAL AGENCY"
                title={
                    <>
                        Strategic Capabilities Built for <span className="text-gradient-indigo">Measurable Scale</span>
                    </>
                }
                description="From technical SEO and authoritative content to custom AI workflows and bespoke software engineering, explore our comprehensive suite of digital capabilities."
                buttons={[
                    {
                        text: "Request a Proposal",
                        href: "#contact",
                        variant: "primary",
                        icon: "arrow_forward",
                    },
                ]}
            />

            <section className="py-section-padding-mobile sm:py-section-padding bg-mesh" aria-labelledby="all-services-heading">
                <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <div className="space-y-20">
                        {serviceCategories.map((category) => (
                            <div key={category.title} className="space-y-8">
                                <div className="border-b border-line-subtle pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                                    <div>
                                        <span className="inline-block px-3 py-1 mb-2 rounded-full bg-primary/10 text-primary font-label-md text-xs uppercase tracking-wider font-semibold border border-primary/20">
                                            {category.badge}
                                        </span>
                                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface flex items-center gap-3">
                                            <span aria-hidden="true" className="material-symbols-outlined text-primary text-3xl">{category.icon}</span>
                                            <span>{category.title}</span>
                                        </h2>
                                    </div>
                                    <p className="max-w-xl text-sm md:text-base text-on-surface-variant leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    {category.services.map((service) => (
                                        <Link
                                            key={service.label}
                                            href={service.href}
                                            className="group glass-panel rounded-2xl p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--glow-primary-sm)] flex flex-col justify-between"
                                        >
                                            <div>
                                                <h3 className="font-headline-md text-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
                                                    {service.label}
                                                </h3>
                                                <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed mb-6">
                                                    {service.desc}
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
                                                <span>Learn More</span>
                                                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mt-section-padding">
                <CTASection />
            </section>
        </main>
    );
}
