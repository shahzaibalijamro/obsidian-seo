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

const seoFaqs = [
    {
        question: "How much do your SEO services cost?",
        answer: "The cost of SEO services in Saudi Arabia depends on your goals, competition, website size, and the level of optimisation required. We offer affordable SEO services in Saudi Arabia with flexible packages designed for SMEs and enterprises. Our team provides a clear, customised proposal based on your business needs and growth objectives."
    },
    {
        question: "Are your SEO services suitable for my industry?",
        answer: "Yes. Our SEO services in Saudi Arabia are designed for businesses across multiple industries, including e-commerce, healthcare, hospitality, real estate, technology, and B2B services. As an experienced SEO company in Saudi Arabia, we develop industry-specific strategies to improve visibility, rankings, and qualified organic traffic."
    },
    {
        question: "How long does it take to see results from SEO?",
        answer: "SEO results typically start appearing within 3 to 6 months, depending on your website condition, competition, and target keywords. Our SEO optimization company in KSA focuses on sustainable improvements through technical SEO, content optimisation, authority building, and ongoing performance analysis."
    },
    {
        question: "What is included in an SEO audit?",
        answer: "An SEO audit reviews your website’s technical health, keyword performance, content quality, backlinks, indexing, site structure, and user experience. It helps identify ranking opportunities and issues affecting visibility. Our SEO service company in Saudi Arabia provides detailed recommendations to create a roadmap for improving organic performance."
    },
    {
        question: "Do you work with businesses that have been penalised by Google?",
        answer: "Yes. We help businesses recover from Google penalties by identifying the causes, analysing backlink profiles, fixing technical issues, improving content quality, and following Google’s best practices. Our SEO experts create recovery strategies to restore website visibility and build long-term search performance."
    },
    {
        question: "Can you improve local search visibility for multiple Saudi cities?",
        answer: "Yes. We provide local SEO strategies to help businesses improve visibility across multiple Saudi cities, including Riyadh, Jeddah, Dammam, and other locations. Our approach includes Google Business Profile optimisation, location-based content, local citations, and targeted keyword strategies."
    },
    {
        question: "Will I own all the content and assets you produce?",
        answer: "Yes. All content, SEO assets, reports, and optimisation work created for your business remain yours. We focus on building valuable digital assets that support your long-term growth and help establish your brand as a trusted presence in search results."
    },
    {
        question: "How do you report on SEO performance each month?",
        answer: "We provide transparent monthly SEO reports covering keyword rankings, organic traffic, technical improvements, content progress, backlinks, and key performance insights. As a trusted SEO company in Saudi Arabia, we ensure you understand the impact of every optimisation activity and the next growth opportunities."
    }
];

export default function SeoServicePage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="SEO AGENCY IN SAUDI ARABIA"
                    title={
                        <>
                            The SEO Company in Saudi Arabia <span className="text-gradient-indigo">Helping Businesses Grow</span>
                        </>
                    }
                    description="We help businesses across the Kingdom rank higher on Google, attract the right visitors, and turn organic traffic into measurable revenue. No black-hat tactics, no empty promises. Just SEO that produces real, lasting results."
                    buttons={[
                        { text: "Request a Free SEO Audit", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "Explore Our SEO Services", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="SEO SERVICE OVERVIEW"
                    title={
                        <>
                            Search Engine Optimisation That <span className="text-gradient-indigo">Delivers Business Results</span>
                        </>
                    }
                    paragraphs={[
                        "Our SEO services in Saudi Arabia are built for businesses that want sustainable organic growth, not short-term spikes that fade after the next algorithm update. We combine technical rigour, content strategy, and authority development to improve your rankings, grow your traffic, and deliver a return on your SEO investment over the long term.",
                        "As an SEO service company in Saudi Arabia, we work across industries, from e-commerce and real estate to SaaS and professional services. Every engagement starts with a thorough understanding of your commercial goals, your target audience, and the competitive landscape you are operating in. That context shapes everything we do."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlQz9J6Vuwgss2y0berHetrsThuw09o2-dNq-ilbtuzjvvpuKlL_D_c3JHAzgiTmX9H6j6d-7j5CtB4KP2SrO3qSK1QPOwmiodyCTqQ7j-2PF0p1AqNnHuyz1AByfYJSjjGtcL4KruF_3eL-9sZsYLAzYqymJn-mYDfnFpgI-n7pDqjtWYzjF6zte2jbhoucs4CFHd4qMNt2FW795HK55XEqIYUXcjXrcPAKVdtjlzB5Xq1Yplio8aTMS1qnAgc3PSu-6JnHgvoo"
                />

                <ServicesSection
                    page="seo"
                    badgeText="CAPABILITIES"
                    title="Our SEO Services"
                    description="As an SEO optimisation company in KSA, we offer a full suite of search services. Each one is designed to improve your visibility in search, grow your organic traffic, and support your wider business objectives."
                    services={[
                        { icon: "settings_input_component", title: "Technical SEO", description: "We fix technical issues affecting crawlability, indexing, speed, Core Web Vitals, and structured data." },
                        { icon: "description", title: "On-Page SEO", description: "We optimise titles, headings, content, keywords, and internal links to improve search rankings." },
                        { icon: "public", title: "Off-Page SEO", description: "We build authority through strategic digital PR and quality editorial backlinks from trusted, relevant domains." },
                        { icon: "location_on", title: "Local SEO", description: "We help Saudi businesses improve local visibility through Google Business Profiles, citations, and targeted content." },
                        { icon: "shopping_cart", title: "eCommerce SEO", description: "We optimise product pages, categories, and architecture to attract high-intent shoppers and increase organic sales." },
                        { icon: "key", title: "Keyword Research", description: "We identify valuable keywords by analysing search intent, competition, relevance, and commercial opportunities." },
                        { icon: "auto_fix_high", title: "Content Optimization", description: "We improve existing content to match search intent, strengthen topical authority, and maintain performance." },
                        { icon: "link", title: "Link Building", description: "We earn relevant, authoritative backlinks through ethical strategies that strengthen long-term search visibility and credibility." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our SEO Services"
                    description="Businesses looking for the best SEO company services Saudi Arabia can provide need more than a checklist of deliverables. They need a partner with genuine technical expertise, an honest approach to expectations, and a strategy built around their specific goals. Here is what distinguishes how we work."
                    features={[
                        { icon: "search", title: "SEO Technical Expertise", description: "We go beyond basic audits, addressing site architecture, JavaScript rendering, crawl budgets, Core Web Vitals, and technical performance issues." },
                        { icon: "insights", title: "Customized SEO Strategies", description: "Our SEO strategies reflect your industry, audience, competition, and objectives, ensuring every recommendation supports your specific business goals." },
                        { icon: "analytics", title: "Data-Driven Intelligence", description: "We use keyword research, competitor analysis, traffic behaviour, and conversion data to prioritise actions delivering the greatest commercial impact." },
                        { icon: "dashboard", title: "Transparent Reporting", description: "Our regular reports connect SEO activities with rankings, traffic, leads, and conversions, providing clear insights into measurable progress and performance." },
                        { icon: "assessment", title: "Proven Search Results", description: "We follow Google’s guidelines and proven ethical practices, avoiding risky shortcuts while building sustainable visibility capable of surviving algorithm updates." },
                        { icon: "trending_up", title: "Long-Term Organic Growth", description: "We build organic authority steadily through sustainable SEO strategies designed to generate compounding returns, lasting visibility, and continuous business growth." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our SEO Process"
                    description="A seven-stage process that takes your business from initial audit through to sustained organic growth. We provide clear milestones and accountable delivery at every stage."
                    steps={[
                        { number: "01", icon: "troubleshoot", title: "SEO Audit", description: "We audit your website to identify technical issues, content gaps, and valuable growth opportunities." },
                        { number: "02", icon: "key", title: "Keyword Research", description: "We identify valuable keywords based on customer intent, search volume, competition, and relevance." },
                        { number: "03", icon: "map", title: "Strategy Planning", description: "We create a prioritised roadmap covering technical improvements, content, authority, timelines, and measurable goals." },
                        { number: "04", icon: "speed", title: "Website Optimization", description: "We improve technical performance, on-page elements, crawlability, usability, and overall search engine visibility." },
                        { number: "05", icon: "edit_note", title: "Content Creation", description: "We create relevant content aligned with search intent, strengthening topical authority and attracting qualified visitors." },
                        { number: "06", icon: "link", title: "Link Building", description: "We earn authoritative backlinks from relevant websites, strengthening credibility and improving your search competitiveness." },
                        { number: "07", icon: "query_stats", title: "Performance Tracking", description: "We monitor rankings, traffic, conversions, and results, refining strategies to achieve sustainable organic growth.", span: true }
                    ]}
                    layout="flat"
                />

                <FeaturesSection
                    title={<>What Good SEO <span className="text-gradient-indigo">Does for Your Business</span></>}
                    description={null}
                    features={[
                        { icon: "trending_up", title: "Higher Rankings", description: "Appear prominently in search results, putting your business before customers actively searching for relevant solutions." },
                        { icon: "group", title: "Increased Traffic", description: "Attract consistent, relevant visitors actively searching for your products, services, and solutions without paying per click." },
                        { icon: "target", title: "Qualified Leads", description: "Reach high-intent prospects through relevant searches, connecting your business with customers closer to making decisions." },
                        { icon: "verified", title: "Brand Authority", description: "Build credibility through consistent search visibility, helping your business appear established, trustworthy, and authoritative to audiences." },
                        { icon: "ads_click", title: "Better Conversions", description: "Optimise content and user experience to guide organic visitors toward meaningful actions, enquiries, and conversions." },
                        { icon: "leaderboard", title: "AI Search Visibility", description: "Optimise your content for AEO, GEO, and AIO, increasing visibility across AI search results and answer engines." }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection description="Hear from businesses we have helped grow through SEO." />

                <div className="relative -top-8">
                    <FeaturesSection
                        badgeText="TECH STACK"
                        title="Our SEO Technology"
                        description="We use industry-leading tools across every stage of the SEO process, from research and auditing through to tracking, reporting, and optimisation."
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

                <FAQSection
                    faqs={seoFaqs}
                    description="Common questions about our SEO services, how we work, and what results you can realistically expect."
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
