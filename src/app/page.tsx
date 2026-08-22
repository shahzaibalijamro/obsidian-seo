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
          badgeText="DIGITAL MARKETING AGENCY — SAUDI ARABIA"
          title={
            <>
              The Digital Marketing Agency <span className="text-gradient-indigo">Saudi Businesses Rely On</span>
            </>
          }
          description="Obsidian Digital helps businesses across the Kingdom build a stronger, more visible digital presence through search, social, content, and technology that work together to deliver real commercial results."
          buttons={[
            { text: "Our Services", href: "#services", variant: "primary", icon: "arrow_forward" },
            { text: "Free Consultation", href: "#contact", variant: "secondary" }
          ]}
        />
        <TrustBadges />
        <StatsSection
          stats={[
            { value: "500+", label: "Projects Delivered" },
            { value: "12+", label: "Years Experience" },
            { value: "98%", label: "Client Retention" },
            { value: "250M+", label: "Revenue Generated" }
          ]}
        />
        <AboutSection
          badgeText="OUR MISSION"
          title={<>Built Around <span className="text-gradient-indigo">Your Growth</span></>}
          paragraphs={[
            "Obsidian Digital is a full-service digital marketing agency in KSA working with businesses at every stage, from ambitious startups to established enterprises. We combine strategic thinking with strong technical execution to help our clients grow their digital presence and generate more revenue online.",
            "Our work spans SEO, paid media, social media, content strategy, custom software, and AI-powered solutions. We do not believe in generic strategies. Every client receives a plan built around their specific objectives, their audience, and the realities of operating in the Saudi market."
          ]}
          buttonText="See How We Work"
          buttonHref="#process"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA_hdaMLw3kvrwxmF_BeFe5ugUObf-zgGDa-sk8FbbECXYELSzNE3TIkZP_6FnzTe6pXTjVz0oNPd7R22A3qo0bTCjUsb4RTSfpM-EihABXmW586KzexAbluXFsJZJ60SHwwnajWG4Tewtf0IJOMUXmYB9cDGMHCxZhnKAOxmTWruqF-NNFmAVnyOn274h9t1A5glVzrvZUVqxa7gREnBiRJdiINtVE8-gFTZHB2nNYCq1fglygfe85rQnb6kYP7uey0QUeLooT9P4"
          imageAlt="Abstract fluid glass"
        />
        <ServicesSection
          page="home"
          badgeText="CAPABILITIES"
          title="Our Services"
          description="Eight specialist services. One agency. A strategy built around your business goals."
          theme="light"
          services={[
            { icon: "code", title: "Digital Platforms", description: "We build high-performance websites and web applications that convert visitors, handle real-world demand, and support your long-term digital ambitions.", linkText: "Learn More", linkHref: "#" },
            { icon: "trending_up", title: "Search & Visibility", description: "From technical SEO to performance-driven paid search, we help your business get found by the right audience at the moment they are looking.", linkText: "Learn More", linkHref: "#" },
            { icon: "ads_click", title: "Social Media", description: "We build and maintain your brand's social presence with content that engages your audience and keeps your business active and visible.", linkText: "Learn More", linkHref: "#" },
            { icon: "edit_document", title: "Brand & Content", description: "We develop content strategies and brand messaging that communicate what you do clearly, build trust with your audience, and support sustainable search growth.", linkText: "Learn More", linkHref: "#" }
          ]}
        />
        <FeaturesSection
          title="Why Businesses in KSA Choose Obsidian Digital"
          description="We are a digital marketing agency in Saudi Arabia focused on results, not activity. Every service we deliver is designed to contribute to measurable business growth, not just metrics that look good on a report. Here is what working with us looks like in practice."
          features={[
            { icon: "groups", title: "Senior-Led from Start to Finish", description: "Every engagement is handled by experienced professionals throughout. Your work is not handed to junior staff once the contract is signed." },
            { icon: "settings_suggest", title: "Strategies Built for Your Business", description: "We build around your goals, your customers, and your market position. Not an off-the-shelf package applied to every client we work with." },
            { icon: "ads_click", title: "Clear, Honest Reporting", description: "We agree success metrics at the start of every project and report against them transparently. You always know what your budget is achieving." },
            { icon: "rocket_launch", title: "Technology That Earns Its Place", description: "We use modern platforms, tools, and AI capabilities where they produce better outcomes, not because they are new or impressive." },
            { icon: "devices", title: "Built to Grow With You", description: "Our solutions are designed with your future in mind. Whether you are scaling up or expanding into new markets, the infrastructure grows with you." },
            { icon: "support_agent", title: "A Relationship, Not a Retainer", description: "We work best with clients who want a genuine long-term partnership. The longer we work together, the more effective our work becomes for you." }
          ]}
        />
        <ProcessSection
          layout="up-down"
          badgeText="METHODOLOGY"
          title="Our Approach"
          description="A clear, structured process that keeps every project on track, on brief, and accountable at every stage."
          steps={[
            { number: "01", icon: "search", title: "Discovery", description: "We start by understanding your business thoroughly; your goals, your audience, your competition, and what a successful outcome looks like for you." },
            { number: "02", icon: "architecture", title: "Strategy", description: "We define a clear plan: what we are building, why it matters, who it is for, and how we will measure whether it is working." },
            { number: "03", icon: "auto_awesome", title: "Execution", description: "Our team builds, launches, and activates. Whether it is a campaign, a platform, or a software product, we deliver to brief and on time." },
            { number: "04", icon: "rocket_launch", title: "Optimisation", description: "Once live, we measure performance, identify what can be improved, and make the adjustments that produce better results over time." }
          ]}
        />
        <CaseStudiesSection />
        <IndustriesSection />
        <TestimonialsSection
          title="What Our Clients Say"
          description="Real feedback from businesses we have worked with."
          testimonials={[
            { quote: "Obsidian didn't just build us a platform — they understood what we were trying to achieve commercially and built around that. The results have been significant.", name: "Sarah Jenkins", title: "CTO, Nexus Financial" },
            { quote: "What sets Obsidian apart is that they are genuinely invested in the outcome. They ask the right questions, they push back when something is not right, and they deliver.", name: "Marcus Thorne", title: "CMO, TechNova" },
            { quote: "We had worked with other agencies before and always felt like one of many clients. With Obsidian, it felt like a proper partnership from the first conversation.", name: "Elena Rodriguez", title: "Founder, Aura FinTech" }
          ]}
        />
        <FAQSection />
        <BlogSection />
        <div className="">
          <CTASection />
        </div>
        <ContactSection />
      </main>
      <BackToTop />
    </>
  );
}
