import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

export default function SeoServicePage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="PREMIUM SEO AGENCY"
                    title={
                        <>
                            Dominate Search with <span className="text-gradient-indigo">Technical Precision</span>
                        </>
                    }
                    description="We engineer organic growth through data-driven SEO architectures. Scale your search visibility and capture market dominance with our elite optimization protocols."
                    buttons={[
                        { text: "Request Technical Audit", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "Explore Methodologies", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="SEO SERVICE OVERVIEW"
                    title={
                        <>
                            Architecting Search Authority for <span className="text-gradient-indigo">Sustainable Growth</span>
                        </>
                    }
                    paragraphs={[
                        "Our SEO strategies are precision-engineered to transform your digital presence into a market-dominant asset. We leverage advanced technical auditing, semantic content mapping, and high-trust authority acquisition to ensure your brand doesn't just rank—it leads.",
                        "By aligning your digital infrastructure with search engine intelligence, we drive measurable organic growth and compounding revenue."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlQz9J6Vuwgss2y0berHetrsThuw09o2-dNq-ilbtuzjvvpuKlL_D_c3JHAzgiTmX9H6j6d-7j5CtB4KP2SrO3qSK1QPOwmiodyCTqQ7j-2PF0p1AqNnHuyz1AByfYJSjjGtcL4KruF_3eL-9sZsYLAzYqymJn-mYDfnFpgI-n7pDqjtWYzjF6zte2jbhoucs4CFHd4qMNt2FW795HK55XEqIYUXcjXrcPAKVdtjlzB5Xq1Yplio8aTMS1qnAgc3PSu-6JnHgvoo"
                />

                <ServicesSection
                    page="seo"
                    badgeText="CAPABILITIES"
                    title="Our Services"
                    description="Precision-engineered search strategies designed to dominate the SERPs and drive sustainable organic growth."
                    services={[
                        { icon: "settings_input_component", title: "Technical SEO", description: "Audits, crawlability optimization, and site speed engineering for peak performance." },
                        { icon: "description", title: "On-Page SEO", description: "Semantic content optimization, meta-data strategy, and internal linking structures." },
                        { icon: "public", title: "Off-Page SEO", description: "High-authority digital PR and strategic link acquisition to build domain trust." },
                        { icon: "location_on", title: "Local SEO", description: "Hyper-targeted geographical campaigns for local market dominance and visibility." },
                        { icon: "shopping_cart", title: "eCommerce SEO", description: "Scalable search strategies for product catalogs and conversion-focused growth." },
                        { icon: "key", title: "Keyword Research", description: "Deep intent mapping and high-conversion volume analysis for strategic targeting." },
                        { icon: "auto_fix_high", title: "Content Optimization", description: "Data-driven refreshes to maintain topical authority and long-term rankings." },
                        { icon: "link", title: "Link Building", description: "Ethical, high-impact backlink profiles from top-tier industry domains." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our SEO Services"
                    description="We engineer organic growth through technical mastery and data intelligence. Our SEO strategies are designed to dominate search engine results pages and deliver sustainable, long-term ROI for the modern enterprise."
                    features={[
                        { icon: "search", title: "SEO Technical Expertise", description: "Deep architectural audits and infrastructure optimization to ensure peak crawlability and search visibility." },
                        { icon: "insights", title: "Customized SEO Strategies", description: "Bespoke growth maps tailored to your specific industry, competitive landscape, and business objectives." },
                        { icon: "analytics", title: "Data-Driven Intelligence", description: "Leveraging advanced analytics and proprietary data models to identify high-impact keyword opportunities and ranking vectors." },
                        { icon: "dashboard", title: "Transparent Reporting", description: "Live dashboard access and comprehensive monthly audits that show you exactly where every dollar of your investment is going." },
                        { icon: "assessment", title: "Proven Search Results", description: "A track record of propelling brands to the top of the SERPs through white-hat methodologies and algorithmic resilience." },
                        { icon: "trending_up", title: "Long-Term Organic Growth", description: "Sustainable scaling strategies that build compounding authority and protect your market position against future core updates." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our SEO Process"
                    description="A precision-engineered 7-step lifecycle designed to architect search dominance and sustainable organic growth."
                    steps={[
                        { number: "01", icon: "troubleshoot", title: "SEO Audit", description: "Deep technical analysis and crawl budget optimization to ensure a flawless foundation." },
                        { number: "02", icon: "key", title: "Keyword Research", description: "Strategic intent mapping and high-value opportunity identification for maximum reach." },
                        { number: "03", icon: "map", title: "Strategy Planning", description: "Customized roadmap for organic dominance and authority tailored to your industry." },
                        { number: "04", icon: "speed", title: "Website Optimization", description: "Technical SEO and on-page performance enhancements for peak user experience." },
                        { number: "05", icon: "edit_note", title: "Content Creation", description: "Entity-driven content clusters to capture search intent and build topical authority." },
                        { number: "06", icon: "link", title: "Link Building", description: "High-authority backlink acquisition from top-tier domains to boost trust signals." },
                        { number: "07", icon: "query_stats", title: "Performance Tracking", description: "Continuous monitoring, reporting, and iterative growth to maintain market leadership." }
                    ]}
                    layout="flat"
                />

                <FeaturesSection
                    title={<>Compounding Value. <span className="text-gradient-indigo">High-Impact SEO Benefits.</span></>}
                    description={null}
                    features={[
                        { icon: "trending_up", title: "Higher Rankings", description: "Secure top positions for queries that actually drive business value, not just vanity volume." },
                        { icon: "group", title: "Increased Traffic", description: "Attract users actively seeking your specific solutions, filtering out low-intent noise." },
                        { icon: "target", title: "Qualified Leads", description: "Transform visibility into a predictable, scalable lead generation mechanism." },
                        { icon: "verified", title: "Brand Authority", description: "Establish your brand as the go-to thought leader in your industry." },
                        { icon: "ads_click", title: "Better Conversions", description: "Optimize user experience (UX/UI) so every visit has the best chance of converting." },
                        { icon: "leaderboard", title: "Market Dominance", description: "Outpace competitors in the SERPs and capture a greater share of organic voice." }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection />

                <div className="relative -top-8">
                    <FeaturesSection
                        badgeText="TECH STACK"
                        title="Our SEO Tech Arsenal"
                        description="Precision-engineered tools for keyword research, technical auditing, analytics, and on-page optimization."
                        columns={3}
                        features={[
                            { icon: "key", title: "Keyword Research", description: "Semrush, Ahrefs" },
                            { icon: "troubleshoot", title: "Technical Audit", description: "Screaming Frog, Search Console" },
                            { icon: "query_stats", title: "Analytics & Tracking", description: "Google Analytics 4, Rank Tracker" },
                            { icon: "speed", title: "Optimization", description: "PageSpeed Insights, Yoast SEO" },
                            { icon: "link", title: "Link Building", description: "Ahrefs, Majestic" },
                            { icon: "description", title: "Content Optimization", description: "Clearscope, Surfer SEO" }
                        ]}
                    />
                </div>

                <FAQSection />

                <div className="">
                    <CTASection />
                </div>

                <ContactSection />
            </main>
            <BackToTop />
        </>
    );
}
