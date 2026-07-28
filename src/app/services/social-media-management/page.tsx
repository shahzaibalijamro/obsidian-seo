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

export default function SocialMediaManagementPage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="PREMIUM SOCIAL MANAGEMENT"
                    title={
                        <>
                            Master the Social Conversation with <span className="text-gradient-indigo">Strategic Precision</span>
                        </>
                    }
                    description="We engineer brand dominance through data-driven social architectures. Scale your community and capture market attention with our elite management protocols."
                    buttons={[
                        { text: "Launch Social Strategy", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "View Process", href: "#contact", variant: "secondary" }
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
                    title="Social Media Management Services"
                    description="Precision-engineered social strategies designed to dominate the digital landscape and drive meaningful brand engagement."
                    services={[
                        { icon: "edit_calendar", title: "Content Planning", description: "Strategic editorial calendars aligned with your brand's seasonal goals and audience trends." },
                        { icon: "palette", title: "Content Creation", description: "High-fidelity visual assets and compelling copy tailored for maximum platform engagement." },
                        { icon: "admin_panel_settings", title: "Account Management", description: "Full-spectrum profile optimization and brand voice consistency across all social channels." },
                        { icon: "groups", title: "Community Management", description: "Fostering active dialogue and building loyal brand advocates through proactive interaction." },
                        { icon: "schedule", title: "Post Scheduling", description: "Precision timing and automated deployment to ensure your content reaches users at peak hours." },
                        { icon: "forum", title: "Engagement", description: "Real-time response management and sentiment tracking to maintain a positive brand presence." },
                        { icon: "bar_chart", title: "Performance Reporting", description: "Data-driven insights and comprehensive analytics to measure growth and social ROI.", colSpan: "md:col-span-2" }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our Social Media Management Services"
                    description="We blend creative storytelling with data-driven strategy to build thriving digital communities. Our campaigns are engineered to maximize engagement, reach, and measurable business growth."
                    features={[
                        { icon: "palette", title: "Agency Expertise", description: "Proven mastery in managing complex brand identities across global social platforms." },
                        { icon: "query_stats", title: "Creative Strategy", description: "Bespoke content pillars and narrative structures designed for viral resonance and brand affinity." },
                        { icon: "hub", title: "Consistent Branding", description: "Laser-focused visual and tonal alignment to ensure your brand remains unmistakable on every feed." },
                        { icon: "edit_road", title: "Transparent Reporting", description: "Real-time access to performance data, attribution metrics, and audience sentiment analysis." },
                        { icon: "bar_chart", title: "Dedicated Management", description: "Your personal account lead ensuring tactical precision and 24/7 community vigilance." },
                        { icon: "ads_click", title: "Growth-Focused", description: "A relentless pursuit of audience expansion and high-conversion social funnels." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our Social Media Management Process"
                    description="Explain the workflow from strategy and content planning to publishing, audience engagement, performance monitoring, and continuous optimization."
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
                    badgeText="PLATFORMS"
                    title="Platforms We Manage"
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
                        {
                            icon: "movie",
                            title: "Content Creation & Publishing",
                            description: "We engineer high-impact graphics, cinematic video content, and strategic captions that resonate with your target demographic. Our precision-timed content calendars ensure a consistent, dominant presence across all feeds.",
                            bullets: [
                                "Visual Storytelling",
                                "Video Production",
                                "Editorial Scheduling"
                            ]
                        },
                        {
                            icon: "forum",
                            title: "Community Management",
                            description: "Strengthen brand relationships through proactive engagement. We manage comments, direct messages, and customer interactions with a sophisticated brand voice that fosters loyalty and active dialogue.",
                            bullets: [
                                "Real-time Interaction",
                                "Sentiment Analysis",
                                "Crisis Mitigation"
                            ]
                        },
                        {
                            icon: "analytics",
                            title: "Performance & Analytics",
                            description: "Data-driven insights to scale your social ROI. We track reach, engagement velocity, and conversion funnels, providing comprehensive monthly reports that inform your broader marketing strategy.",
                            bullets: [
                                "Growth Velocity Tracking",
                                "Conversion Attribution",
                                "Monthly ROI Audits"
                            ]
                        }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection />

                <FeaturesSection
                    badgeText="TECH STACK"
                    title="Our Social Media Management Tech Arsenal"
                    description="Precision-engineered tools for scheduling, community management, analytics, and brand reputation monitoring."
                    columns={3}
                    features={[
                        { icon: "edit_calendar", title: "Scheduling & Publishing", description: "Later, Buffer, Hootsuite" },
                        { icon: "palette", title: "Content Creation", description: "Adobe Creative Cloud, Canva, CapCut" },
                        { icon: "query_stats", title: "Analytics & Reporting", description: "Sprout Social, Google Analytics 4" },
                        { icon: "record_voice_over", title: "Social Listening", description: "Brandwatch, Mention" },
                        { icon: "hub", title: "Community Management", description: "Sprout Social, Agorapulse" },
                        { icon: "reviews", title: "Reputation Management", description: "Google Business Profile, Yelp for Business" }
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
