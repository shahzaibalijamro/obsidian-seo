import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

export default function SemPage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="PREMIUM SEM AGENCY"
                    title={
                        <>
                            Dominate Search with <span className="text-gradient-indigo">SEM Precision</span>
                        </>
                    }
                    description="We engineer immediate market dominance through data-driven search architectures. Scale your visibility and capture high-intent traffic with our elite SEM management protocols."
                    buttons={[
                        { text: "Launch SEM Strategy", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "View Process", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="SEM SERVICE OVERVIEW"
                    title={
                        <>
                            Drive High-Intent Traffic with <span className="text-gradient-indigo">Strategic SEM</span>
                        </>
                    }
                    paragraphs={[
                        "Our search engine marketing services are precision-engineered to transform your digital presence into a lead-generation engine. We leverage targeted keyword bidding, high-intent audience mapping, and conversion-optimized ad copy to ensure your brand doesn't just appear—it dominates.",
                        "By aligning your paid infrastructure with real-time auction intelligence, we drive measurable business growth and compounding ROI."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDa503hjmRWeO1RqwggytC2mikW-tM91a9GK1LzJxLNwuiNgV_BX7WR628UV1xYzq4Ib0HLr67DuPrrIR8YLFrCjOuXY8b7u6zgoJZR8kMEvdESm6Cj7r8n8HwiZZcMQecXNsF3AKV-1d86Zdwl5OGyVT69ucuBG2jpmaspOZOzU6ma_44r6i9GMX2gBcugivd5SpyLKbahTKdWy_qkeTxvMxP30GpoqXrkBwrPCIddE4SUt8jbBpjyqCOGEJNxRSL5-ykB1AsELc0"
                />

                <ServicesSection
                    page="sem"
                    badgeText="CAPABILITIES"
                    title="SEM Services We Offer"
                    description="Comprehensive paid search strategies including Google Ads management, Microsoft Ads, and performance optimization to drive high-intent traffic and conversions."
                    services={[
                        { icon: "ads_click", title: "Google Ads Management", description: "Strategic search campaigns targeting high-conversion keywords." },
                        { icon: "search", title: "Microsoft Ads", description: "Expanding reach across the Bing and Yahoo search networks." },
                        { icon: "campaign", title: "Search Advertising", description: "High-impact text ads designed for top-of-page visibility." },
                        { icon: "image", title: "Display Advertising", description: "Visually compelling banner ads across premium publisher networks." },
                        { icon: "shopping_cart", title: "Shopping Ads", description: "Optimized product listings for e-commerce growth and direct sales." },
                        { icon: "replay", title: "Remarketing", description: "Strategic retargeting to re-engage past visitors and boost LTV." },
                        { icon: "trending_up", title: "Performance Optimization", description: "Continuous A/B testing and bid management for maximum ROI." },
                        { icon: "analytics", title: "Conversion Tracking", description: "Deep-funnel analytics to measure every dollar of ad spend." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our SEM Services"
                    description="We deliver high-performance search engine marketing campaigns through certified expertise, data-driven strategies, and a relentless focus on ROI."
                    features={[
                        { icon: "verified", title: "Certified Experts", description: "Google Ads and Meta Blueprint certified specialists driving strategic growth." },
                        { icon: "query_stats", title: "Data-Driven Strategies", description: "Algorithmic analysis and keyword intelligence to dominate search intent." },
                        { icon: "ads_click", title: "ROI-Focused Campaigns", description: "Precision-targeted ad spend optimized for maximum conversion value." },
                        { icon: "bar_chart", title: "Transparent Reporting", description: "Real-time dashboard access to CPA, ROAS, and attribution metrics." },
                        { icon: "trending_up", title: "Continuous Optimization", description: "Relentless A/B testing and bid management to maintain market leadership." },
                        { icon: "public", title: "Global Reach", description: "Scale your brand across international markets with localized search dominance." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our SEM Process"
                    description="Explain the workflow from campaign research and keyword planning to ad creation, bid management, optimization, and performance reporting."
                    layout="flat"
                    steps={[
                        { number: "01", icon: "search", title: "Campaign Research", description: "In-depth market analysis and competitor keyword auditing." },
                        { number: "02", icon: "architecture", title: "Keyword Strategy", description: "Strategic selection of high-intent keywords and negative keyword mapping." },
                        { number: "03", icon: "edit_calendar", title: "Ad Creation", description: "Developing high-converting ad copy and strategic landing page alignment." },
                        { number: "04", icon: "palette", title: "Bid Management", description: "Algorithmic and manual bid adjustments for maximum ROI and visibility." },
                        { number: "05", icon: "rocket_launch", title: "Campaign Launch", description: "Phased deployment across search networks with real-time tracking." },
                        { number: "06", icon: "monitoring", title: "Optimization", description: "Continuous A/B testing and quality score enhancement for lower CPA." },
                        { number: "07", icon: "trending_up", title: "Performance Reporting", description: "Comprehensive data analysis and strategic scaling of top-performing assets.", span: true }
                    ]}
                />

                <BenefitsSection
                    badgeText="STRATEGIC IMPACT"
                    title="Maximizing SEM Value"
                    description="Our search engine marketing protocols are engineered to capture high-intent demand and convert it into measurable business growth."
                    cards={[
                        {
                            icon: "campaign",
                            title: "Paid Advertising Solutions",
                            description: "We deploy multi-channel search strategies designed for total market coverage and high-intent lead generation.",
                            bullets: ["Search & Display", "Shopping Ads", "Video Campaigns", "Remarketing", "Local Search", "App Promotion"],
                            bulletColumns: 2
                        },
                        {
                            icon: "manage_search",
                            title: "Keyword & Competitor Intelligence",
                            description: "Algorithmic analysis of search intent and competitor bidding patterns to identify high-yield opportunities.",
                            bullets: ["Intent-Based Keyword Mapping", "Competitor Gap Analysis", "Audience Segment Targeting"],
                            bulletColumns: 1
                        },
                        {
                            icon: "web_asset",
                            title: "Landing Page Optimization",
                            description: "We align ad creative with high-performance landing pages to maximize Quality Score and lower your cost-per-acquisition.",
                            bullets: ["Conversion Rate Optimization (CRO)", "Quality Score Enhancement", "Mobile-First UX Design"],
                            bulletColumns: 1
                        },
                        {
                            icon: "monitoring",
                            title: "Performance & Results",
                            description: "Real-time data transparency across the entire funnel, focusing on the metrics that drive your bottom line.",
                            metrics: [
                                { value: "ROAS", label: "Targeted" },
                                { value: "CTR", label: "Optimized" },
                                { value: "CPA", label: "Minimized" }
                            ],
                            note: "Comprehensive reporting on clicks, impressions, and lead generation velocity."
                        }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection />

                <FeaturesSection
                    badgeText="TECH STACK"
                    title="Our SEM Tech Arsenal"
                    description="Precision-engineered tools for search engine marketing, conversion tracking, and campaign optimization."
                    columns={3}
                    features={[
                        { icon: "ads_click", title: "Advertising Platforms", description: "Google Ads, Microsoft Advertising" },
                        { icon: "search", title: "Keyword Research", description: "SEMrush, Ahrefs, Keyword Planner" },
                        { icon: "query_stats", title: "Analytics & Intelligence", description: "Google Analytics 4, Adobe Analytics" },
                        { icon: "track_changes", title: "Conversion Tracking", description: "Google Tag Manager, HubSpot" },
                        { icon: "bar_chart", title: "Reporting & Visualization", description: "Looker Studio, Supermetrics" },
                        { icon: "trending_up", title: "Campaign Optimization", description: "Optmyzr, WordStream" }
                    ]}
                />

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