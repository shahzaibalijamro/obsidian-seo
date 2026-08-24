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

const smmFaqs = [
    {
        question: "How much do social media marketing services cost?",
        answer: "Our social media marketing packages are based on your specific requirements, including platforms, content volume, community management, and paid advertising. We avoid one-size-fits-all pricing and create a transparent proposal based on your goals, scope, and expected level of support."
    },
    {
        question: "How long does it take to see results from social media?",
        answer: "Results depend on your objectives, channels, and starting point. Social media marketing in Saudi typically takes three to six months of consistent organic activity to generate meaningful audience growth and engagement. Paid campaigns can begin generating traffic and leads within days, with performance improving through ongoing optimisation."
    },
    {
        question: "Which social media platforms do you work with?",
        answer: "We work across Instagram, TikTok, LinkedIn, Facebook, X, YouTube, Pinterest, and Snapchat. We recommend platforms based on your target audience, industry, and commercial objectives rather than simply following trends. For Saudi consumer brands, Instagram and TikTok often perform strongly, while LinkedIn is typically more effective for B2B."
    },
    {
        question: "Do you create all the content, or do we need to provide creative assets?",
        answer: "We handle full content production, including copywriting, graphic design, short-form video editing, and creative direction. You can provide brand guidelines, product information, photography, or existing footage. If you need new photography or video production, we can also incorporate this into the project scope."
    },
    {
        question: "Can you manage both paid and organic social media at the same time?",
        answer: "Yes. We recommend combining both where the budget allows. Organic content builds your brand, establishes your voice, and develops your community, while paid campaigns accelerate reach and generate targeted leads. Managing both together also keeps your messaging, creative, and audience targeting consistent."
    },
    {
        question: "Who will be managing our social media accounts?",
        answer: "As a social media marketing company in Saudi with dedicated teams, we assign a focused team to your account rather than relying on a shared pool of freelancers. Depending on your scope, this can include a strategist, content creator, paid media specialist, and community manager, with a dedicated account lead overseeing communication."
    },
    {
        question: "How do you measure the success of social media campaigns?",
        answer: "As a social media marketing company focused on commercial outcomes, we measure performance against KPIs that directly support your business objectives. These may include engagement, website traffic, lead volume, cost per lead, conversions, and revenue influence. We report consistently and use performance data to optimise campaigns over time."
    },
    {
        question: "Do you work with both B2B and B2C businesses in Saudi Arabia?",
        answer: "Yes. Our social media marketing Saudi Arabia B2B vs B2C approach is tailored to the differences between each audience and buying journey. For B2C brands, we focus on reach, visual content, engagement, and conversions across platforms like Instagram and TikTok. For B2B, we prioritise thought leadership, credibility, and lead generation, particularly through LinkedIn."
    }
];

export default function SocialMediaMarketingPage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="SOCIAL MEDIA MARKETING AGENCY IN SAUDI ARABIA"
                    title={
                        <>
                            The Full-Service Social Media Marketing Agency <span className="text-gradient-indigo">Saudi Brands Choose</span>
                        </>
                    }
                    description="We build social media strategies that grow real audiences, generate qualified leads, and deliver measurable returns for businesses across the Kingdom. Organic content, paid campaigns, influencer partnerships, planned and executed by one dedicated team."
                    buttons={[
                        { text: "Launch a Social Campaign", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "Explore Our Strategy", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="SOCIAL MEDIA STRATEGY"
                    title={
                        <>
                            Social Media Marketing That <span className="text-gradient-indigo">Builds Real Business Value</span>
                        </>
                    }
                    paragraphs={[
                        "The social media marketing Saudi Arabia businesses trust to deliver results is not built on follower counts and vanity metrics, it is built on strategy. We develop campaigns that connect your brand with the right audiences, convert engagement into commercial opportunities, and ensure every piece of content serves a defined purpose aligned with your business goals.",
                        "As a social media marketing company in Saudi, we work with businesses across a broad range of industries, from e-commerce and hospitality to B2B technology and professional services. Whether you need a complete social media strategy or focused support on specific channels, we structure each engagement around what your business genuinely needs."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDa503hjmRWeO1RqwggytC2mikW-tM91a9GK1LzJxLNwuiNgV_BX7WR628UV1xYzq4Ib0HLr67DuPrrIR8YLFrCjOuXY8b7u6zgoJZR8kMEvdESm6Cj7r8n8HwiZZcMQecXNsF3AKV-1d86Zdwl5OGyVT69ucuBG2jpmaspOZOzU6ma_44r6i9GMX2gBcugivd5SpyLKbahTKdWy_qkeTxvMxP30GpoqXrkBwrPCIddE4SUt8jbBpjyqCOGEJNxRSL5-ykB1AsELc0"
                />

                <ServicesSection
                    page="social-media"
                    badgeText="CAPABILITIES"
                    title="Social Media Services"
                    description="Our full social media marketing services cover strategy, content creation, community management, paid advertising, influencer partnerships, and analytics, everything your brand needs to grow its presence and generate results across social platforms."
                    services={[
                        { icon: "hub", title: "Social Media Strategy", description: "Data-driven strategies aligning platforms, content, audiences, and posting schedules with your commercial objectives." },
                        { icon: "palette", title: "Content Creation", description: "Platform-native graphics, videos, copy, and creative direction designed to communicate clearly and drive engagement." },
                        { icon: "forum", title: "Social Media Management", description: "Manage comments, messages, and conversations while maintaining brand voice and building lasting customer relationships." },
                        { icon: "ads_click", title: "Paid Advertising", description: "Launch and optimise targeted social campaigns that generate qualified leads, sales, and sustainable returns." },
                        { icon: "groups", title: "Influencer Marketing", description: "Partner with relevant creators to authentically reach audiences and deliver measurable brand outcomes beyond awareness." },
                        { icon: "volunteer_activism", title: "Community Management", description: "Grow relevant followers through organic engagement and targeted promotion designed to attract ideal customers." },
                        { icon: "rocket_launch", title: "Campaign Management", description: "Coordinate social campaigns from briefing through reporting, ensuring creative, targeting, scheduling, and performance align." },
                        { icon: "bar_chart", title: "Analytics Reporting", description: "Track social performance through meaningful metrics connecting reach, engagement, traffic, leads, and revenue contribution." }
                    ]}
                />

                <FeaturesSection
                    title="Why Businesses Choose Our Social Media Marketing Agency"
                    description="As a social media marketing agency Saudi Arabia businesses have partnered with across multiple industries, we understand that every brand has a different audience, a different voice, and different commercial goals. A strategy that works for a consumer brand will not work for a B2B software company, and we build accordingly. Here is what makes our approach different."
                    features={[
                        { icon: "palette", title: "Purposeful Content", description: "Content designed to build awareness, engagement, traffic, and purchasing intent." },
                        { icon: "query_stats", title: "Audience First", description: "Campaigns backed by platform analytics and trend forecasting." },
                        { icon: "hub", title: "Platform Expertise", description: "Expertise across major platforms, formats, algorithms, audiences, and emerging channels." },
                        { icon: "edit_road", title: "Goal Driven", description: "Campaigns structured around clear objectives, KPIs, and measurable performance outcomes." },
                        { icon: "bar_chart", title: "Honest Reporting", description: "Clear reporting focused on meaningful metrics, conversions, traffic, and engagement." },
                        { icon: "ads_click", title: "Commercial Results", description: "We prioritise qualified leads, revenue, retention, credibility, and meaningful business impact." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our Social Media Marketing Process"
                    description="A seven-stage process that takes your brand from research and strategy through to live campaigns, active community management, and continuous performance improvement."
                    layout="flat"
                    steps={[
                        { number: "01", icon: "search", title: "Research", description: "Understand your brand, audience, competitors, and market landscape." },
                        { number: "02", icon: "architecture", title: "Strategy Development", description: "Define platforms, content, cadence, voice, and campaign priorities." },
                        { number: "03", icon: "edit_calendar", title: "Content Planning", description: "Plan themes, formats, messages, and publishing schedules." },
                        { number: "04", icon: "palette", title: "Creative Production", description: "Create platform-optimised graphics, videos, copy, and creative assets." },
                        { number: "05", icon: "rocket_launch", title: "Campaign Execution", description: "Publish, manage, monitor, and coordinate campaigns effectively." },
                        { number: "06", icon: "monitoring", title: "Performance Tracking", description: "Track reach, engagement, clicks, leads, and conversions." },
                        { number: "07", icon: "trending_up", title: "Optimization", description: "Refine creative, targeting, budgets, and strategy using data.", span: true }
                    ]}
                />

                <FeaturesSection
                    badgeText="ECOSYSTEM"
                    title="Social Media Platforms We Manage"
                    description="We manage brand presence across all major social platforms, with strategies built around how each platform's audience behaves and what actually drives results on each channel."
                    columns={4}
                    centerAlign={true}
                    features={[
                        { icon: "facebook", title: "Facebook", description: "Community, reach, engagement, and targeted advertising." },
                        { icon: "photo_camera", title: "Instagram", description: "Visual storytelling, Reels, influencers, and discovery." },
                        { icon: "work", title: "LinkedIn", description: "B2B thought leadership, content, and networking." },
                        { icon: "music_note", title: "TikTok", description: "Short-form video, trends, creativity, and reach." },
                        { icon: "close", title: "X / Twitter", description: "Real-time engagement, commentary, and conversations." },
                        { icon: "smart_display", title: "YouTube", description: "Long-form video, SEO, authority, and reach." },
                        { icon: "push_pin", title: "Pinterest", description: "Visual discovery, inspiration, commerce, and intent." },
                        { icon: "dynamic_feed", title: "Emerging", description: "Early adoption, testing, growth, and positioning." }
                    ]}
                />

                <FeaturesSection
                    badgeText="BENEFITS"
                    title="What Good Social Media Does for Your Business"
                    description="Done properly, social media delivers measurable value across the full customer journey, from first impression through to loyalty and repeat purchase."
                    features={[
                        { icon: "visibility", title: "Increased Brand Awareness", description: "Consistent social content builds brand recognition among audiences most likely to become customers." },
                        { icon: "favorite", title: "Audience Engagement", description: "Social media builds trust, encourages feedback, and keeps your audience actively connected." },
                        { icon: "language", title: "Website Traffic", description: "Targeted campaigns attract qualified visitors who are more likely to explore and convert." },
                        { icon: "person_add", title: "Lead Generation", description: "Social campaigns capture relevant prospects and provide sales teams with valuable opportunities." },
                        { icon: "loyalty", title: "Customer Loyalty", description: "Ongoing engagement strengthens relationships, encourages repeat purchases, and increases customer referrals." },
                        { icon: "trending_up", title: "Stronger Conversions", description: "Social proof, retargeting, and credibility influence decisions and improve overall marketing performance." }
                    ]}
                />

                <PerformanceSection 
                    title="Paid Social Advertising"
                    description="As a social media marketing company working across both paid and organic channels, we design paid social campaigns that reach the right audiences at the right moment, with targeting, creative, and budget structures built to drive measurable commercial outcomes."
                    items={[
                        { step: "01. Setup", title: "Campaign Architecture", description: "Build structured campaigns, tracking, and conversion systems correctly." },
                        { step: "02. Targeting", title: "Audience Intelligence", description: "Identify high-value audiences using data and customer insights." },
                        { step: "03. Creative", title: "Ad Optimization", description: "Test creative, messaging, and placements to improve performance." },
                        { step: "04. Scale", title: "ROI Tracking", description: "Track leads, enquiries, revenue, and overall advertising returns." }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection description="Hear from businesses we have helped grow through social media." />

                <FeaturesSection
                    badgeText="TECH STACK"
                    title="Our Social Media Marketing Tech Arsenal"
                    description="We use industry-leading tools to support our social media marketing services at every stage, from content planning and scheduling through to analytics, listening, paid campaign management, and performance reporting."
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

                <FAQSection 
                    faqs={smmFaqs} 
                    description="Common questions about our social media marketing services, how we structure engagements, and what results you can realistically expect."
                />

                <div className="">
                    <CTASection />
                </div>

                <ContactSection />
            </main>
            <BackToTop />
        </>
    );
}
