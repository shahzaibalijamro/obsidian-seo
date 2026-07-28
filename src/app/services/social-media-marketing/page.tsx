import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import PerformanceSection from "@/components/PerformanceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

export default function SocialMediaMarketingPage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="PREMIUM SOCIAL AGENCY"
                    title={
                        <>
                            Dominate Social with <span className="text-gradient-indigo">Strategic Precision</span>
                        </>
                    }
                    description="We engineer viral growth through data-driven social architectures. Scale your brand presence and capture audience attention with our elite engagement protocols."
                    buttons={[
                        { text: "Launch Social Campaign", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "Explore Strategies", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="SOCIAL MEDIA STRATEGY"
                    title={
                        <>
                            Cultivating Digital Communities for <span className="text-gradient-indigo">Brand Dominance</span>
                        </>
                    }
                    paragraphs={[
                        "Our social media marketing strategies are precision-engineered to transform your brand's digital presence into a highly engaged community. We leverage strategic content distribution, audience persona mapping, and high-impact engagement tactics to ensure your brand doesn't just broadcast—it connects.",
                        "By aligning your social infrastructure with platform-specific intelligence, we drive measurable brand awareness and compounding audience growth."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDa503hjmRWeO1RqwggytC2mikW-tM91a9GK1LzJxLNwuiNgV_BX7WR628UV1xYzq4Ib0HLr67DuPrrIR8YLFrCjOuXY8b7u6zgoJZR8kMEvdESm6Cj7r8n8HwiZZcMQecXNsF3AKV-1d86Zdwl5OGyVT69ucuBG2jpmaspOZOzU6ma_44r6i9GMX2gBcugivd5SpyLKbahTKdWy_qkeTxvMxP30GpoqXrkBwrPCIddE4SUt8jbBpjyqCOGEJNxRSL5-ykB1AsELc0"
                />

                <ServicesSection
                    page="social-media"
                    badgeText="CAPABILITIES"
                    title="Social Media Services"
                    description="Precision-engineered social strategies designed to dominate the digital landscape and drive meaningful brand engagement."
                    services={[
                        { icon: "hub", title: "Social Media Strategy", description: "Data-driven roadmaps to align social presence with business objectives." },
                        { icon: "palette", title: "Content Creation", description: "High-impact visual and narrative assets tailored for each platform." },
                        { icon: "forum", title: "Social Media Management", description: "Full-spectrum community oversight and brand voice consistency." },
                        { icon: "ads_click", title: "Paid Advertising", description: "Targeted ad campaigns optimized for maximum ROI and audience growth." },
                        { icon: "groups", title: "Influencer Marketing", description: "Strategic partnerships with key voices to amplify brand reach." },
                        { icon: "volunteer_activism", title: "Community Management", description: "Fostering active engagement and building loyal brand advocates." },
                        { icon: "rocket_launch", title: "Campaign Management", description: "End-to-end execution of high-velocity social initiatives." },
                        { icon: "bar_chart", title: "Analytics Reporting", description: "Comprehensive performance tracking and data-driven insights." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our Social Media Marketing Services"
                    description="We blend creative storytelling with data-driven strategy to build thriving digital communities. Our campaigns are engineered to maximize engagement, reach, and measurable business growth."
                    features={[
                        { icon: "palette", title: "Creative Expertise", description: "High-impact content that resonates with your audience." },
                        { icon: "query_stats", title: "Data-Driven Strategies", description: "Campaigns backed by platform analytics and trend forecasting." },
                        { icon: "hub", title: "Platform Knowledge", description: "Deep mastery of Instagram, LinkedIn, X, and emerging channels." },
                        { icon: "edit_road", title: "Customized Campaigns", description: "Bespoke social roadmaps tailored to your brand's unique goals." },
                        { icon: "bar_chart", title: "Transparent Reporting", description: "Real-time insights into reach, engagement, and conversion metrics." },
                        { icon: "ads_click", title: "Measurable Results", description: "A relentless focus on ROI and sustainable community growth." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our Social Media Marketing Process"
                    description="A precision-engineered 7-step lifecycle designed to architect social dominance and sustainable organic growth."
                    layout="flat"
                    steps={[
                        { number: "01", icon: "search", title: "Research", description: "Deep audience insights and competitor landscape analysis." },
                        { number: "02", icon: "architecture", title: "Strategy Development", description: "Crafting a comprehensive social roadmap aligned with business goals." },
                        { number: "03", icon: "edit_calendar", title: "Content Planning", description: "Intentional scheduling and thematic content pillar creation." },
                        { number: "04", icon: "palette", title: "Creative Production", description: "High-fidelity visual assets and compelling copy tailored for engagement." },
                        { number: "05", icon: "rocket_launch", title: "Campaign Execution", description: "Strategic deployment and active community management across channels." },
                        { number: "06", icon: "monitoring", title: "Performance Tracking", description: "Real-time monitoring of engagement metrics and growth velocity." },
                        { number: "07", icon: "trending_up", title: "Optimization", description: "Iterative refinements based on data to maximize social ROI.", span: true }
                    ]}
                />

                <FeaturesSection
                    badgeText="ECOSYSTEM"
                    title="Social Media Platforms We Manage"
                    description="We architect high-performance presence across the digital landscape, leveraging platform-specific algorithms to maximize your brand's reach and resonance."
                    columns={4}
                    centerAlign={true}
                    features={[
                        { icon: "facebook", title: "Facebook", description: "Community building & targeted reach." },
                        { icon: "photo_camera", title: "Instagram", description: "Visual storytelling & aesthetic dominance." },
                        { icon: "work", title: "LinkedIn", description: "B2B authority & professional networking." },
                        { icon: "music_note", title: "TikTok", description: "Viral short-form & trend-setting content." },
                        { icon: "close", title: "X / Twitter", description: "Real-time engagement & brand voice." },
                        { icon: "smart_display", title: "YouTube", description: "Long-form authority & video SEO." },
                        { icon: "push_pin", title: "Pinterest", description: "Visual discovery & conversion intent." },
                        { icon: "dynamic_feed", title: "Emerging", description: "Early adoption of new social frontiers." }
                    ]}
                />

                <FeaturesSection
                    badgeText="BENEFITS"
                    title="Compounding Social Value"
                    description="Our strategic approach delivers measurable impact across every stage of the customer journey."
                    features={[
                        { icon: "visibility", title: "Increased Brand Awareness", description: "Expand your reach and establish a dominant presence in your industry's digital conversation." },
                        { icon: "favorite", title: "Audience Engagement", description: "Transform passive followers into active brand advocates through high-impact interaction." },
                        { icon: "language", title: "Website Traffic", description: "Drive high-intent users from social platforms directly to your conversion-optimized funnels." },
                        { icon: "person_add", title: "Lead Generation", description: "Capture qualified leads through targeted social campaigns and strategic lead magnets." },
                        { icon: "loyalty", title: "Customer Loyalty", description: "Build long-term relationships and increase lifetime value through consistent community care." },
                        { icon: "trending_up", title: "Improved Conversions", description: "Leverage social proof and retargeting to maximize your overall marketing ROI." }
                    ]}
                />

                <PerformanceSection />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection />

                <FeaturesSection
                    badgeText="TECH STACK"
                    title="Our Social Media Marketing Tech Arsenal"
                    description="Precision-engineered tools for content creation, scheduling, social analytics, and community engagement."
                    columns={3}
                    features={[
                        { icon: "edit_calendar", title: "Content Planning & Scheduling", description: "Later, Buffer, Hootsuite" },
                        { icon: "palette", title: "Content Creation", description: "Adobe Creative Cloud, Canva, CapCut" },
                        { icon: "query_stats", title: "Social Analytics", description: "Sprout Social, Google Analytics 4" },
                        { icon: "record_voice_over", title: "Social Listening", description: "Brandwatch, Mention" },
                        { icon: "ads_click", title: "Paid Social Advertising", description: "Meta Ads Manager, TikTok Ads Manager" },
                        { icon: "hub", title: "Community Management", description: "Sprout Social, Agorapulse" }
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
