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
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection
          badgeText="AI-POWERED MARKETING • AUTOMATION • DEVELOPMENT"
          title={
            <>
              The Digital Marketing Agency <span className="text-gradient-indigo">Designed for Growth in Saudi Arabia</span>
            </>
          }
          description="The Obsidian is a digital marketing agency for Saudi businesses seeking more qualified traffic, better leads, and stronger digital experiences. We bring together search, content, paid media, AI automation, and development to make your strategy work from first click to conversion."
          buttons={[
            { text: "Free Strategy Call", href: "#contact", variant: "primary", icon: "arrow_forward" },
            { text: "Explore Our Services", href: "#services", variant: "secondary" }
          ]}
        />
        <TrustBadges heading="Designed for businesses across Saudi Arabia" />
        <StatsSection
          stats={[
            { value: "35+", label: "Projects Completed" },
            { value: "18+", label: "Clients Served" },
            { value: "89%", label: "Client Retention" },
            { value: "8+", label: "Industries/Markets Served" }
          ]}
        />
        <AboutSection
          badgeText="ABOUT THE OBSIDIAN"
          title={<>Designed for <span className="text-gradient-indigo">Your Growth</span></>}
          paragraphs={[
            "The Obsidian was founded in 2026 on one idea: businesses shouldn’t require disconnected teams for marketing, content, automation, and development.",
            "We are an AI-powered digital marketing agency in KSA that integrates strategy and execution across the full customer journey. We help people find your business, enhance their experience when they arrive, automate tedious tasks, and create digital products that support the experience.",
            "AI powers research, analysis, campaign optimisation, customer support, and workflow automation. Human strategy, brand judgement, and quality control remain key."
          ]}
          buttonText="About The Obsidian"
          buttonHref="/about"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA_hdaMLw3kvrwxmF_BeFe5ugUObf-zgGDa-sk8FbbECXYELSzNE3TIkZP_6FnzTe6pXTjVz0oNPd7R22A3qo0bTCjUsb4RTSfpM-EihABXmW586KzexAbluXFsJZJ60SHwwnajWG4Tewtf0IJOMUXmYB9cDGMHCxZhnKAOxmTWruqF-NNFmAVnyOn274h9t1A5glVzrvZUVqxa7gREnBiRJdiINtVE8-gFTZHB2nNYCq1fglygfe85rQnb6kYP7uey0QUeLooT9P4"
          imageAlt="Abstract fluid glass"
        />
        <ServicesSection
          page="home"
          badgeText="CAPABILITIES"
          title="Our Services"
          description="Services designed to generate demand and fuel growth."
          theme="light"
          services={[
            { icon: "search", title: "SEO", description: "Improve organic visibility through technical SEO, keyword strategy, on-page optimisation, local search, and content planning around real-world search demand.", linkText: "Learn More About Service", linkHref: "/services/seo" },
            { icon: "ads_click", title: "Search Engine Marketing", description: "Reach high-intent customers through paid search campaigns focused on commercial keywords, conversion tracking, landing pages, and efficient budget utilisation.", linkText: "Learn More About Service", linkHref: "/services/sem" },
            { icon: "campaign", title: "Social Media Marketing", description: "Raise awareness and generate demand through platform strategy, paid social campaigns, creative direction, and performance-driven execution.", linkText: "Explore Service", linkHref: "/services/social-media-marketing" },
            { icon: "edit_document", title: "Content Writing", description: "Turn customer questions and search demand into website, landing page, and blog content that informs, ranks, and converts.", linkText: "Explore Service", linkHref: "/services/content-marketing" },
            { icon: "psychology", title: "AI Integration", description: "Leverage AI that works for your business with assistants, intelligent workflows, knowledge tools, automation, and integrations built for real operational needs.", linkText: "Explore Service", linkHref: "/services/ai-integration" },
            { icon: "code", title: "Software Development", description: "Build secure and scalable software for internal operations, customer experiences, and new digital products using technology based on your needs.", linkText: "Explore Service", linkHref: "/services/software-development" },
            { icon: "phone_iphone", title: "App Development", description: "Build reliable, fast, and intuitive mobile and web apps with clean user journeys and room to scale.", linkText: "Explore Service", linkHref: "/services/app-development" },
            { icon: "web", title: "WordPress Development", description: "Create or recreate a high-speed WordPress website for search visibility, lead generation, performance, and easy content management.", linkText: "Explore Service" }
          ]}
          footerAction={{ text: "Explore All Services" }}
        />
        <FeaturesSection
          badgeText="WHY THE OBSIDIAN"
          title="Why Saudi Businesses Choose The Obsidian"
          description="The best digital marketing agency in Saudi Arabia is defined by its understanding of business, the quality of its execution, and whether the team can connect marketing with the technology that powers it."
          features={[
            { icon: "auto_awesome", title: "AI-Enabled Execution", description: "We use AI for research, analysis, and automation where it speeds things up or makes them more accurate, while keeping important decisions human-led." },
            { icon: "trending_up", title: "Growth, Not Vanity Metrics", description: "We focus on qualified demand, leads, conversions, and business outcomes—not traffic or impressions reported without context." },
            { icon: "devices", title: "Marketing & Technology", description: "Websites, analytics, CRM workflows, and customer journeys need to work well to drive better campaign performance. We can improve both sides." },
            { icon: "location_on", title: "Built for Saudi Arabia", description: "Our tactics are rooted in local search, city-level visibility, Arabic and English audiences, and how customers find businesses across KSA." },
            { icon: "forum", title: "Clear Communication", description: "Expect crystal-clear priorities, actionable advice, and visibility into what’s happening, why it matters, and what’s next." },
            { icon: "tune", title: "Flexible Commitments", description: "Start with a focused service or combine disciplines when your growth plan needs a more connected approach." }
          ]}
        />
        <ProcessSection
          layout="up-down"
          badgeText="OUR PROCEDURE"
          title="How We Work"
          description="Good growth is a repeatable process. We are a top digital marketing agency that bridges business goals with implementation, measurement, and continuous improvement."
          steps={[
            { number: "01", icon: "search", title: "Explore", description: "We learn about your business, customers, competitors, current marketing, technology, bottlenecks, and goals." },
            { number: "02", icon: "architecture", title: "Devise a Plan", description: "We identify the opportunities that will add the most value, select the right channels, and develop a practical roadmap." },
            { number: "03", icon: "auto_awesome", title: "Execute", description: "Whether it’s search, content, campaigns, AI, automation, or development, our specialists are clearly responsible for delivery." },
            { number: "04", icon: "rocket_launch", title: "Optimise", description: "We review performance and customer behaviour, fix what isn’t working, and make what is working even better." }
          ]}
        />
        <CaseStudiesSection
          badge="FEATURED CASE STUDIES"
          title="Work Built Around Real Business Problems"
          description="Find out how marketing, automation, and development can work together on different growth challenges."
          linkText="See All Case Studies"
          limit={3}
        />
        <IndustriesSection
          badge="INDUSTRIES"
          title="Industries We Cover"
          industries={[
            "Real Estate",
            "Healthcare & Clinics",
            "Restaurants & Food & Beverage",
            "Retail & E-commerce",
            "Hospitality & Hotels",
            "Travel & Tourism",
            "Automotive",
            "Education",
            "Beauty, Salons & Spas",
            "Legal Services",
            "Construction & Engineering",
            "Fitness & Gyms",
            "Finance & Fintech",
            "Logistics & Transportation",
            "Professional Services",
            "Manufacturing",
            "Technology & SaaS"
          ]}
        />
        <TestimonialsSection
          badge="CLIENT FEEDBACK"
          title="What Our Clients Say"
          description="Real feedback from businesses we have worked with."
          testimonials={[
            { quote: "Obsidian didn't just build us a platform — they understood what we were trying to achieve commercially and built around that. The results have been significant.", name: "Sarah Jenkins", title: "CTO, Nexus Financial" },
            { quote: "What sets Obsidian apart is that they are genuinely invested in the outcome. They ask the right questions, they push back when something is not right, and they deliver.", name: "Marcus Thorne", title: "CMO, TechNova" },
            { quote: "We had worked with other agencies before and always felt like one of many clients. With Obsidian, it felt like a proper partnership from the first conversation.", name: "Elena Rodriguez", title: "Founder, Aura FinTech" }
          ]}
        />
        <FAQSection
          badge="FAQS"
          title="Frequently Asked Questions (FAQs)"
          faqs={[
            { question: "Which digital marketing services are available from an agency in Saudi Arabia?", answer: "A full-service agency is a connected ecosystem. Rather than dealing with different vendors, companies need one partner to manage SEO, search engine marketing, social media management, content strategy, AI automation, and web design in one place. The Obsidian brings these capabilities together so your digital strategy works seamlessly from the first click to the final conversion." },
            { question: "What is the cost of digital marketing services in Saudi Arabia?", answer: "Average digital marketing costs in KSA range from SAR 3,000 to SAR 150,000 per month. This depends heavily on the size of your business, competition in the market, and the required scope of work. Typical pricing models include one-off project fees for web or app development and monthly retainers for ongoing SEO, PPC, and social media. At The Obsidian, we offer flexible engagements to fit your budget and growth stage." },
            { question: "How do I choose the best digital marketing agency in Saudi Arabia?", answer: "The best agency is not necessarily the biggest. It’s the one that best fits your specific business needs. Look for a partner who understands local buying habits, communicates transparently, and focuses on measurable outcomes rather than vanity metrics. Most importantly, they should be able to link your marketing strategy directly to the technology supporting it, such as your website and CRM." },
            { question: "How long does it take for digital marketing to work?", answer: "Timing depends on the channels you use. Paid ads can build visibility and generate qualified leads within days, while meaningful ROI is usually reached after a few weeks of optimisation. SEO and content marketing are organic strategies that typically take three to six months to produce significant ranking improvements. We combine both approaches for immediate traction and sustainable long-term development." },
            { question: "Do you provide Arabic and English bilingual marketing and SEO?", answer: "Yes. To capture demand in the Saudi market, your strategy needs to account for search behaviour in both Arabic and English. We do more than translate content: we culturally adapt your messaging, target regional dialects, and optimise for city-level visibility across the Kingdom to connect with local audiences." },
            { question: "Why are website design and development important for marketing performance?", answer: "If a digital marketing campaign directs traffic to a slow, confusing, or structurally broken website, even the best campaign will not work. Your site is the engine that converts traffic into revenue. Alongside our marketing services, we offer custom WordPress, Shopify, and app development to ensure your digital storefront is technically sound and built to convert." },
            { question: "How can I implement AI in my business?", answer: "AI extends far beyond marketing and can remove operational bottlenecks. We build practical AI integrations such as intelligent lead-qualification chatbots, custom workflow automations, and CRM routing. That means less repetitive manual work, fewer missed after-hours enquiries, and more time for your team to focus on high-value tasks while important decisions remain human-led." },
            { question: "What is the difference between SEO and search engine marketing?", answer: "SEO is the process of optimising your website structure and content to rank organically in free search results over the long term. Search engine marketing uses paid ads based on commercial keywords so you can appear at the top of search results immediately. The Obsidian manages both to help you maximise search visibility." },
            { question: "How do you determine the success of a digital marketing campaign?", answer: "Success is measured by commercial impact, not just clicks. Traffic and impressions are useful metrics, but we focus on qualified demand, lead generation, conversion rates, and lower customer acquisition costs. You receive clear reporting on what is happening, why it matters, and how it directly affects your sales pipeline." },
            { question: "What happens when I request a free strategy call?", answer: "Discovery is the beginning of every engagement. We review your business model, target customers, current bottlenecks, and technology stack. From there, we identify your highest-value opportunities and develop a practical, customised roadmap showing how our marketing, automation, and development services can fuel your growth." }
          ]}
        />
        <BlogSection
          badge="INSIGHTS AND RESOURCES"
          title="Practical Tips for Growing in Saudi Arabia"
          description="Read guides, breakdowns, and practical advice on SEO, paid media, content, automation, web design, conversion, and digital growth."
        />
        <div className="">
          <CTASection
            badge="FINAL CALL TO ACTION (CTA)"
            title="Looking to Expand Your Business to Saudi Arabia?"
            description="Partner with a digital marketing agency that can unite traffic, content, AI-driven automation, and development around a single commercial objective."
            buttonText="Start a Conversation"
            buttonHref="#contact"
          />
        </div>
        <ContactSection />
      </main>
      <BackToTop />
    </>
  );
}
