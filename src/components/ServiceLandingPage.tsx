import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection, { type ServiceItem } from "@/components/ServicesSection";
import FeaturesSection, { type Feature } from "@/components/FeaturesSection";
import ProcessSection, { type ProcessStep } from "@/components/ProcessSection";
import BenefitsSection, { type BenefitCard } from "@/components/BenefitsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

export interface ServiceLandingContent {
    slug: string;
    badge: string;
    heroLead: string;
    heroHighlight: string;
    heroDescription: string;
    primaryAction: string;
    overviewBadge: string;
    overviewLead: string;
    overviewHighlight: string;
    overviewParagraphs: string[];
    imageSrc: string;
    imageAlt: string;
    servicesTitle: string;
    servicesDescription: string;
    services: ServiceItem[];
    featuresTitle: string;
    featuresDescription: string;
    features: Feature[];
    processTitle: string;
    processDescription: string;
    process: ProcessStep[];
    benefitsTitle: string;
    benefitsDescription: string;
    benefits: BenefitCard[];
    closingTitle: string;
    closingDescription: string;
    closingFeatures: Feature[];
    faqs: FAQItem[];
    ctaTitle: string;
    ctaDescription: string;
}

export default function ServiceLandingPage({ content }: { content: ServiceLandingContent }) {
    return (
        <main>
            <HeroSection
                badgeText={content.badge}
                title={<>{content.heroLead} <span className="text-gradient-indigo">{content.heroHighlight}</span></>}
                description={content.heroDescription}
                buttons={[
                    { text: content.primaryAction, href: "#contact", variant: "primary", icon: "arrow_forward" },
                    { text: "Explore Our Services", href: "#services", variant: "secondary" },
                ]}
            />
            <TrustBadges />
            <StatsSection />
            <AboutSection
                badgeText={content.overviewBadge}
                title={<>{content.overviewLead} <span className="text-gradient-indigo">{content.overviewHighlight}</span></>}
                paragraphs={content.overviewParagraphs}
                imageSrc={content.imageSrc}
                imageAlt={content.imageAlt}
                buttonText="See How We Work"
                buttonHref="#process"
            />
            <ServicesSection
                page={content.slug}
                badgeText="CAPABILITIES"
                title={content.servicesTitle}
                description={content.servicesDescription}
                services={content.services}
            />
            <FeaturesSection title={content.featuresTitle} description={content.featuresDescription} features={content.features} />
            <ProcessSection badgeText="METHODOLOGY" title={content.processTitle} description={content.processDescription} steps={content.process} layout="flat" />
            <BenefitsSection badgeText="PRACTICAL VALUE" title={content.benefitsTitle} description={content.benefitsDescription} cards={content.benefits} />
            <CaseStudiesSection />
            <IndustriesSection />
            <TestimonialsSection />
            <FeaturesSection badgeText="DELIVERABLES" title={content.closingTitle} description={content.closingDescription} features={content.closingFeatures} />
            <FAQSection title={`${content.servicesTitle}: FAQs`} description="Answers to common questions about scope, delivery, and working together." faqs={content.faqs} />
            <CTASection title={content.ctaTitle} description={content.ctaDescription} buttonText="Discuss Your Project" buttonHref="#contact" />
            <ContactSection />
        </main>
    );
}
