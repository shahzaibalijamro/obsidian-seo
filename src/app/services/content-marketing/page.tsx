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

export default function ContentMarketingPage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="PREMIUM CONTENT AGENCY"
                    title={
                        <>
                            Dominate Search with <span className="text-gradient-indigo">Strategic Content Precision</span>
                        </>
                    }
                    description="We engineer high-impact content strategies through data-driven storytelling. Scale your brand authority and capture audience attention with our elite editorial protocols."
                    buttons={[
                        { text: "Launch Content Strategy", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "Explore Methodologies", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="CONTENT MARKETING OVERVIEW"
                    title={
                        <>
                            Architecting Content Authority for <span className="text-gradient-indigo">Sustainable Growth</span>
                        </>
                    }
                    paragraphs={[
                        "Our content marketing strategies are precision-engineered to transform your brand's digital presence into a thought leadership engine. We leverage strategic storytelling, audience persona mapping, and high-impact editorial frameworks to ensure your brand doesn't just publish—it influences.",
                        "By aligning your content infrastructure with search intelligence and audience intent, we drive measurable brand authority and compounding organic growth."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDa503hjmRWeO1RqwggytC2mikW-tM91a9GK1LzJxLNwuiNgV_BX7WR628UV1xYzq4Ib0HLr67DuPrrIR8YLFrCjOuXY8b7u6zgoJZR8kMEvdESm6Cj7r8n8HwiZZcMQecXNsF3AKV-1d86Zdwl5OGyVT69ucuBG2jpmaspOZOzU6ma_44r6i9GMX2gBcugivd5SpyLKbahTKdWy_qkeTxvMxP30GpoqXrkBwrPCIddE4SUt8jbBpjyqCOGEJNxRSL5-ykB1AsELc0"
                    imageAlt="A premium, minimalist 3D abstract visualization of content strategy and brand storytelling"
                />

                <ServicesSection
                    page="content-marketing"
                    badgeText="CAPABILITIES"
                    title="Content Marketing Services We Offer"
                    description="A comprehensive suite of content solutions designed to build authority, engage audiences, and drive organic growth."
                    services={[
                        { icon: "hub", title: "Content Strategy", description: "Data-driven roadmaps to align content with business goals." },
                        { icon: "edit_note", title: "Blog Writing", description: "High-quality, long-form content to establish thought leadership." },
                        { icon: "article", title: "Website Copywriting", description: "Conversion-focused copy for landing pages and sites." },
                        { icon: "search_check", title: "SEO Content", description: "Content optimized for search visibility and organic rankings." },
                        { icon: "mail", title: "Email Content", description: "Engaging newsletters and high-converting email sequences." },
                        { icon: "share", title: "Social Media Content", description: "Platform-specific storytelling to engage your community." },
                        { icon: "video_library", title: "Video & Multimedia", description: "Engaging visual narratives and high-impact video content." },
                        { icon: "menu_book", title: "Ebooks & Whitepapers", description: "Deep-dive resources to generate high-quality leads." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our Content Marketing Services"
                    description="We combine strategic storytelling with audience-first distribution to build authority and drive measurable results."
                    features={[
                        { icon: "palette", title: "Content Expertise", description: "High-quality, authoritative writing that resonates with your target audience." },
                        { icon: "query_stats", title: "Audience-Focused Strategy", description: "Content plans built around deep audience insights and persona mapping." },
                        { icon: "hub", title: "SEO Integration", description: "Strategic keyword and topical authority alignment to dominate search rankings." },
                        { icon: "edit_road", title: "Consistent Branding", description: "Unified tone and voice across all content assets to strengthen brand identity." },
                        { icon: "bar_chart", title: "Multi-Channel Distribution", description: "Strategic placement across platforms where your audience is most active." },
                        { icon: "ads_click", title: "Results-Driven Approach", description: "A relentless focus on conversion metrics and long-term content ROI." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our Content Marketing Process"
                    description="A precision-engineered 7-step lifecycle designed to architect content dominance and sustainable organic growth."
                    layout="flat"
                    steps={[
                        { number: "01", icon: "search", title: "Research", description: "Audience persona mapping and keyword opportunity analysis." },
                        { number: "02", icon: "edit_calendar", title: "Content Planning", description: "Thematic pillar development and editorial calendar mapping." },
                        { number: "03", icon: "edit_note", title: "Creation", description: "High-authority storytelling and multimedia asset production." },
                        { number: "04", icon: "search_check", title: "Optimization", description: "SEO-driven refinement and readability enhancement." },
                        { number: "05", icon: "publish", title: "Publishing", description: "Strategic distribution across owned and earned channels." },
                        { number: "06", icon: "campaign", title: "Promotion", description: "Amplifying reach through social and email distribution." },
                        { number: "07", icon: "analytics", title: "Performance Analysis", description: "Data-backed insights into engagement and conversion impact.", span: true }
                    ]}
                />

                <BenefitsSection
                    badgeText="CONTENT INTELLIGENCE"
                    title="Strategic Content Value"
                    description="Our precision-engineered content ecosystem is designed to build authority and drive measurable business outcomes."
                    cards={[
                        {
                            icon: "insights",
                            title: "Content Strategy",
                            description: "We leverage deep audience research and keyword analysis to architect editorial calendars that align with your long-term marketing objectives and brand vision."
                        },
                        {
                            icon: "edit_square",
                            title: "Content Creation Services",
                            description: "From high-authority blog posts and conversion-focused landing pages to technical case studies and engaging newsletters, we produce elite assets across all digital formats."
                        },
                        {
                            icon: "campaign",
                            title: "Distribution & Promotion",
                            description: "We ensure your message reaches the right eyes through strategic amplification across search engines, email ecosystems, and high-impact social media channels."
                        },
                        {
                            icon: "monitoring",
                            title: "Performance & Analytics",
                            description: "Gain total visibility into your ROI with real-time reporting on organic traffic, keyword rankings, and conversion metrics that prove the value of your content investment."
                        }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection />

                <FeaturesSection
                    badgeText="TECH STACK"
                    title="Our Content Marketing Tech Arsenal"
                    description="Precision-engineered tools for content planning, SEO research, writing, analytics, and multi-channel distribution."
                    columns={3}
                    features={[
                        { icon: "edit_calendar", title: "Content Planning", description: "Asana, Monday.com" },
                        { icon: "search", title: "SEO Research", description: "Semrush, Ahrefs" },
                        { icon: "spellcheck", title: "Writing & Editing", description: "Grammarly, Hemingway" },
                        { icon: "query_stats", title: "Analytics", description: "Google Analytics, Hotjar" },
                        { icon: "forum", title: "Collaboration", description: "Slack, Notion" },
                        { icon: "web", title: "Content Management", description: "WordPress, Contentful" }
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