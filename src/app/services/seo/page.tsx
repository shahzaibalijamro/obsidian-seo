import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
    title: "SEO Company in Saudi Arabia | AI-Powered SEO",
    description: "Grow your business with an AI-powered SEO company in Saudi Arabia. Improve rankings, attract qualified traffic, and generate more leads with proven SEO",
};

const seoFaqs = [
    {
        question: "How do your SEO services in Saudi Arabia help grow?",
        answer: "We combine technical fixes, keyword mapping, local signals, and AI-assisted analysis to improve search rankings, bring qualified traffic, and generate consistent leads."
    },
    {
        question: "What makes you a top SEO company in Saudi Arabia?",
        answer: "We combine technical depth, local KSA market insights, transparent reporting, and AI search optimization to deliver measurable commercial results."
    },
    {
        question: "Do you offer affordable SEO services in Saudi Arabia for small businesses?",
        answer: "Yes. We prioritize your roadmap with high-impact optimizations first, maximizing your budget without sacrificing quality or tech depth."
    },
    {
        question: "What is your approach to local search across the different cities of KSA?",
        answer: "We optimize your local profiles, citations and city-specific landing pages so customers in Riyadh, Jeddah, Dammam and across the Kingdom can find your business easily."
    },
    {
        question: "How do you inject AI into your search methodology?",
        answer: "With advanced tooling we accelerate keyword clustering, SERP analysis and content gaps. But human experts validate decisions and manage the execution of strategy."
    },
    {
        question: "What are the core functionalities of your campaigns?",
        answer: "Our process involves Technical SEO, On-Page, Off-Page, Local SEO, eCommerce visibility, Content creation and ethical Link Building."
    },
    {
        question: "Will organic search drive long-term growth?",
        answer: "Yes. We Establish Strong Site Authority Using Strict Search Engine Guidelines For Long Term Organic Rankings That Withstand Algorithm Updates."
    },
    {
        question: "Why should we be worried about AI search visibility?",
        answer: "By optimizing your website for new-age platforms like ChatGPT and Gemini, your brand will appear as a trusted answer and not merely a blue link."
    },
    {
        question: "What is your typical optimization process like?",
        answer: "Our process consists of 7 distinct steps and includes a technical audit, keyword research, strategy, on-page changes, content creation, link building and tracking performance."
    },
    {
        question: "How soon can we expect to see results?",
        answer: "Technical fixes and local updates have immediate results in weeks. Competitive keyword ranks and sustained domain authority take months to compound."
    }
];

export default function SeoServicePage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="AI-POWERED SEO AGENCY IN SAUDI ARABIA"
                    title={
                        <>
                            A Growth-Focused <span className="text-gradient-indigo">SEO Company in Saudi Arabia</span>
                        </>
                    }
                    description="We assist businesses in Saudi Arabia with improving their Google visibility, attracting qualified search traffic, and converting demand into leads. We combine technical SEO, content, local search and AI Powered SEO for measurable, long-term success."
                    buttons={[
                        { text: "Get Your SEO Growth Plan", href: "/contact", variant: "primary", icon: "arrow_forward" },
                        { text: "See How We Work", href: "#process", variant: "secondary" }
                    ]}
                />

                <StatsSection stats={[
                    { value: "11", label: "Saudi Cities" },
                    { value: "17", label: "Industry Verticals" },
                    { value: "4", label: "Core Disciplines" },
                    { value: "AI", label: "Powered SEO" }
                ]} />

                <AboutSection
                    badgeText="Be Seen. Be Found."
                    title={
                        <>
                            SEO That  <span className="text-gradient-indigo">Drives Growth</span>
                        </>
                    }
                    paragraphs={[
                        "SEO puts your business in front of the people who are looking for what you sell. Our affordable SEO services in Saudi Arabia include technical optimization, search intent, content, local visibility, authority building and AI-assisted analysis.",
                        "We focus on relevant traffic that can lead to inquiries, sales and sustainable organic growth. All strategies are built around your customers, market, competitors and commercial priorities.",
                        "As an SEO company in Saudi Arabia, we use both data and human judgment to identify the work that will have the biggest impact on your business. This helps improve your visibility and perform better in search engines over time."
                    ]}
                    buttonText="Explore Our Methodology"
                    buttonHref="#process"
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAjlQz9J6Vuwgss2y0berHetrsThuw09o2-dNq-ilbtuzjvvpuKlL_D_c3JHAzgiTmX9H6j6d-7j5CtB4KP2SrO3qSK1QPOwmiodyCTqQ7j-2PF0p1AqNnHuyz1AByfYJSjjGtcL4KruF_3eL-9sZsYLAzYqymJn-mYDfnFpgI-n7pDqjtWYzjF6zte2jbhoucs4CFHd4qMNt2FW795HK55XEqIYUXcjXrcPAKVdtjlzB5Xq1Yplio8aTMS1qnAgc3PSu-6JnHgvoo"
                />

                <ServicesSection
                    page="seo"
                    badgeText="CAPABILITIES"
                    title="Our SEO Services"
                    description="We are an SEO optimization company in KSA focused on strategies and improvements that boost your organic visibility, from technical performance and content relevance to local search and website authority."
                    services={[
                        { icon: "settings_input_component", title: "Technical SEO", description: "We fix issues with crawling, indexing, speed, structured data and Core Web Vitals that affect visibility." },
                        { icon: "description", title: "On-Page SEO", description: "We optimize the landing pages for titles, headings, copy, internal links and intent alignment." },
                        { icon: "public", title: "Off-Page SEO", description: "We build authority through relevant outreach, digital PR, brand mentions and backlinks from credible websites." },
                        { icon: "location_on", title: "Local SEO", description: "We boost visibility in Saudi cities with profiles, citations, location pages, reviews and local signals." },
                        { icon: "shopping_cart", title: "eCommerce SEO", description: "We optimize categories, product pages, internal linking and site architecture to cater to high intent commercial search demand." },
                        { icon: "key", title: "Keyword Research", description: "We map keywords by intent, relevance, competition, location and measurable commercial business value." },
                        { icon: "auto_fix_high", title: "Content Optimization", description: "We are constantly refreshing our existing pages, closing content gaps, improving relevance and enhancing topical coverage." },
                        { icon: "link", title: "Link Building", description: "We look for trustworthy backlinks via ethical outreach and valuable assets that are worth sharing, citing and referencing." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our SEO Services"
                    description="The best SEO company in Saudi Arabia for businesses is not only about reports and screenshots of rankings. What they need is honest measurement, market understanding, technical depth and priorities. We combine SEO work with AI-assisted analysis to ensure that every recommendation has a reason, an owner, and a measurable purpose."
                    features={[
                        { icon: "search", title: "Technical SEO Expertise", description: "We diagnose issues with your architecture, rendering, crawling, indexing, performance, schema and internal linking and provide recommendations that impact your website." },
                        { icon: "insights", title: "Saudi Search Strategy", description: "Your roadmap is built around local search behavior, competitors, languages, locations, customer intent and the commercial priorities behind your growth." },
                        { icon: "analytics", title: "AI-Assisted Analysis", description: "We use AI to accelerate clustering, SERP review, content comparison and pattern recognition, then we use human expertise to validate decisions." },
                        { icon: "dashboard", title: "Transparent Reporting", description: "Our reports tie the work completed to visibility, rankings, traffic, leads and conversions so you can see what changed and why." },
                        { icon: "assessment", title: "Commercial SEO Prioritisation", description: "Our first priority is pages, searches, technical issues and content opportunities that have the most potential to impact business outcomes." },
                        { icon: "trending_up", title: "Sustainable Organic Growth", description: "We don’t take shortcuts that can disappear after algorithm updates; we build solid improvements that last, following search engine guidelines." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our SEO Process"
                    description="The best SEO company in KSA should have a clear process. Our seven-step approach translates research into prioritized action, measurement, learning and continuous improvement."
                    steps={[
                        { number: "01", icon: "troubleshoot", title: "SEO Audit", description: "We look for opportunities by examining indexation, content, competitors, authority, analytics, conversions and site health." },
                        { number: "02", icon: "key", title: "Keyword Research", description: "We map searches by intent, relevance, competition, location and commercial value to businesses." },
                        { number: "03", icon: "map", title: "Strategy Planning", description: "We translate findings into a roadmap around technical work, content, authority, timing & goals." },
                        { number: "04", icon: "speed", title: "Website Optimization", description: "We improve technical performance, page structure, internal linking, crawlability, usability and search visibility." },
                        { number: "05", icon: "edit_note", title: "Content Creation", description: "We build content that is useful around search intent, customer questions, topical depth and clear conversion opportunities." },
                        { number: "06", icon: "link", title: "Link Building", description: "We look for backlinks and mentions from reputable sites to build authority and search competitiveness." },
                        { number: "07", icon: "query_stats", title: "Performance Tracking", description: "We measure visibility, traffic, leads, conversions and pages and use the evidence to tweak the strategy.", span: true }
                    ]}
                    layout="flat"
                />

                <FeaturesSection
                    title={<>What Good SEO <span className="text-gradient-indigo">Does for Your Business</span></>}
                    description={null}
                    features={[
                        { icon: "trending_up", title: "Higher Rankings", description: "Boost visibility for the right searches, so customers see your business sooner in their decision journey." },
                        { icon: "group", title: "Qualified Traffic", description: "Attract visitors actively searching for the products, services, information, and locations your business actually provides online." },
                        { icon: "target", title: "Qualified Leads", description: "Align search visibility with pages built around customer needs to capture people with purchase intent." },
                        { icon: "verified", title: "Brand Authority", description: "Build credibility through regular visibility, helpful content and deeper topical coverage around the topics customers research." },
                        { icon: "ads_click", title: "Better Conversions", description: "Improve landing pages and user journeys to convert organic search visitors into inquiries." },
                        { icon: "leaderboard", title: "AI Search Visibility", description: "Structure content for AEO, GEO and AIO so your expertise can surface across modern AI-driven search experiences." }
                    ]}
                />

                <div className="relative -top-8">
                    <FeaturesSection
                        badgeText="TECH STACK"
                        title="Our SEO Technology"
                        description="We use industry-leading tools across every stage of the SEO process, from research and auditing through to tracking, reporting, and optimisation."
                        columns={3}
                        features={[
                            {
                                icon: "key",
                                title: "Keyword Research",
                                logos: [
                                    { src: "SEMRush Logo.svg", alt: "Semrush" },
                                    { src: "Ahrefs Logo.svg", alt: "Ahrefs" },
                                    { src: "Google Trends Logo.svg", alt: "Google Trends" },
                                    { src: "ChatGPT Logo.svg", alt: "ChatGPT" },
                                    { src: "Perplexity Logo.svg", alt: "Perplexity" }
                                ]
                            },
                            {
                                icon: "troubleshoot",
                                title: "Technical Audit",
                                logos: [
                                    { src: "Screaming Frog Logo.svg", alt: "Screaming Frog" },
                                    { src: "Search Console Logo.svg", alt: "Search Console" },
                                    { src: "Bing Webmaster Logo.svg", alt: "Bing Webmaster" },
                                    { src: "Page Speed Insights Logo.svg", alt: "PageSpeed Insights" },
                                    { src: "Google Lighthouse Logo.svg", alt: "Lighthouse" },
                                    { src: "ChatGPT Logo.svg", alt: "ChatGPT" },
                                    { src: "Claude Logo.svg", alt: "Claude" }
                                ]
                            },
                            {
                                icon: "query_stats",
                                title: "Analytics & Tracking",
                                logos: [
                                    { src: "Google Analytics Logo.svg", alt: "Google Analytics 4" },
                                    { src: "Search Console Logo.svg", alt: "Search Console" },
                                    { src: "Google Looker Studio Logo.svg", alt: "Looker Studio" },
                                    { src: "Ahrefs Logo.svg", alt: "Ahrefs" },
                                    { src: "SEMRush Logo.svg", alt: "Semrush" },
                                    { src: "Microsoft Clarity Logo.svg", alt: "Microsoft Clarity" },
                                    { src: "ChatGPT Logo.svg", alt: "ChatGPT" },
                                    { src: "Claude Logo.svg", alt: "Claude" }
                                ]
                            },
                            {
                                icon: "speed",
                                title: "Optimization",
                                logos: [
                                    { src: "Page Speed Insights Logo.svg", alt: "PageSpeed Insights" },
                                    { src: "Yoast SEO Logo.svg", alt: "Yoast SEO" },
                                    { src: "Rankmath SEO Logo.svg", alt: "Rank Math" },
                                    { src: "Surfer SEO Logo.svg", alt: "Surfer SEO" },
                                    { src: "SEMRush Logo.svg", alt: "Semrush" },
                                    { src: "Screaming Frog Logo.svg", alt: "Screaming Frog" },
                                    { src: "ChatGPT Logo.svg", alt: "ChatGPT" },
                                    { src: "Claude Logo.svg", alt: "Claude" }
                                ]
                            },
                            {
                                icon: "link",
                                title: "Link Building",
                                logos: [
                                    { src: "Ahrefs Logo.svg", alt: "Ahrefs" },
                                    { src: "SEMRush Logo.svg", alt: "Semrush" },
                                    { src: "Majestic Logo.svg", alt: "Majestic" },
                                    { src: "ChatGPT Logo.svg", alt: "ChatGPT" },
                                    { src: "Claude Logo.svg", alt: "Claude" },
                                    { src: "Perplexity Logo.svg", alt: "Perplexity" }
                                ]
                            },
                            {
                                icon: "description",
                                title: "Content Optimization",
                                logos: [
                                    { src: "Clearscope Logo.svg", alt: "Clearscope" },
                                    { src: "Surfer SEO Logo.svg", alt: "Surfer SEO" },
                                    { src: "Frase Logo.svg", alt: "Frase" },
                                    { src: "SEMRush Logo.svg", alt: "Semrush" },
                                    { src: "ChatGPT Logo.svg", alt: "ChatGPT" },
                                    { src: "Claude Logo.svg", alt: "Claude" },
                                    { src: "Google Gemini Logo.svg", alt: "Google Gemini" },
                                    { src: "Perplexity Logo.svg", alt: "Perplexity" }
                                ]
                            }
                        ]}
                    />
                </div>

                <CaseStudiesSection  description="Examples of SEO problems we solve across technical, local, content, and authority work."/>
                <IndustriesSection />
                <FAQSection
                    faqs={seoFaqs}
                    description="Straight answers to the most common questions about our SEO strategy, timelines, ownership, reports, costs and working relationship."
                />

                <div id="contact">
                    <CTASection
                        title="Want to Grow Your Business in Saudi Arabia?"
                        description="Our SEO services in Saudi Arabia are based on priorities, measurable progress and the search opportunities most likely to generate growth."
                        buttonText="Get Started"
                        buttonHref="/contact"
                    />
                </div>
            </main>
            <BackToTop />
        </>
    );
}
