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
          badgeText="PREMIUM DIGITAL AGENCY"
          title={
            <>
              Elevating Digital Landscapes Through <span className="text-gradient-indigo">Strategic Innovation And Design</span>
            </>
          }
          description="We forge sophisticated digital experiences for industry leaders. Melding visionary strategy with flawless execution, we engineer growth for elite brands in a complex digital ecosystem."
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
          title={<>Crafting <span className="text-gradient-indigo">Excellence</span></>}
          paragraphs={[
            "At Obsidian Digital, we don't just build websites; we engineer fluid digital ecosystems designed for dominance. Our approach is rooted in a meticulous understanding of market dynamics, user psychology, and cutting-edge technology.",
            "We partner exclusively with ambitious brands, providing bespoke solutions that flow seamlessly across platforms. From enterprise-grade software architecture to high-converting SEO strategies, our elite team ensures every touchpoint reflects uncompromising quality."
          ]}
          buttonText="Explore Our Methodology"
          buttonHref="#process"
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA_hdaMLw3kvrwxmF_BeFe5ugUObf-zgGDa-sk8FbbECXYELSzNE3TIkZP_6FnzTe6pXTjVz0oNPd7R22A3qo0bTCjUsb4RTSfpM-EihABXmW586KzexAbluXFsJZJ60SHwwnajWG4Tewtf0IJOMUXmYB9cDGMHCxZhnKAOxmTWruqF-NNFmAVnyOn274h9t1A5glVzrvZUVqxa7gREnBiRJdiINtVE8-gFTZHB2nNYCq1fglygfe85rQnb6kYP7uey0QUeLooT9P4"
          imageAlt="Abstract fluid glass"
        />
        <ServicesSection
          page="home"
          badgeText="CAPABILITIES"
          title="Our Services"
          description="Precision-engineered services designed to scale your digital presence organically"
          theme="light"
          services={[
            { icon: "code", title: "Digital Platforms", description: "Bespoke web applications, fluid architectures, and robust APIs tailored for seamless enterprise performance.", linkText: "Learn More", linkHref: "#" },
            { icon: "trending_up", title: "SEO Dominance", description: "Data-driven organic search strategies designed to capture high-intent traffic and outrank competitors effortlessly.", linkText: "Learn More", linkHref: "#" },
            { icon: "ads_click", title: "Growth Marketing", description: "Highly targeted, ROI-focused campaigns across premium networks designed to scale acquisition smoothly.", linkText: "Learn More", linkHref: "#" },
            { icon: "edit_document", title: "Brand Narrative", description: "Authoritative, fluid content that establishes industry leadership and naturally engages high-value prospects.", linkText: "Learn More", linkHref: "#" }
          ]}
        />
        <FeaturesSection />
        <ProcessSection
          layout="up-down"
          badgeText="METHODOLOGY"
          title="Our Process"
          description="A seamless, iterative approach to digital transformation, engineered for precision and scale."
          steps={[
            { number: "01", icon: "search", title: "Discovery", description: "Deep dive into your brand, audience, and objectives to define a fluid strategy." },
            { number: "02", icon: "architecture", title: "Architecture", description: "Drafting the structural blueprint and user journeys for seamless interaction." },
            { number: "03", icon: "auto_awesome", title: "Creation", description: "Fluid design and agile development bringing the vision to life." },
            { number: "04", icon: "rocket_launch", title: "Evolution", description: "Continuous optimization and scaling post-launch for sustained growth." }
          ]}
        />
        <CaseStudiesSection />
        <IndustriesSection />
        <TestimonialsSection />
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