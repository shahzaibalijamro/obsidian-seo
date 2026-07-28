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

export default function AppDevelopmentPage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="PREMIUM APP DEVELOPMENT"
                    title={
                        <>
                            Engineering Digital Frontiers with <span className="text-gradient-indigo">Mobile Mastery</span>
                        </>
                    }
                    description="We build scalable, high-performance mobile applications and cross-platform solutions tailored for the modern enterprise. From native iOS and Android to complex mobile ecosystems, we deliver precision-engineered apps that drive engagement."
                    buttons={[
                        { text: "Initiate App Audit", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "Explore Frameworks", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="APP DEVELOPMENT OVERVIEW"
                    title={
                        <>
                            Engineering Mobile Experiences for <span className="text-gradient-indigo">Enterprise Dominance</span>
                        </>
                    }
                    paragraphs={[
                        "Our mobile engineering practice is precision-built to transform ambitious product visions into elegant, high-performance applications. We leverage native and cross-platform expertise, rigorous engineering standards, and deep domain knowledge to ensure your app doesn't just launch—it dominates the marketplace.",
                        "By aligning your mobile infrastructure with strategic business objectives, we drive measurable user engagement and compounding technological advantage across iOS, Android, and beyond."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDa503hjmRWeO1RqwggytC2mikW-tM91a9GK1LzJxLNwuiNgV_BX7WR628UV1xYzq4Ib0HLr67DuPrrIR8YLFrCjOuXY8b7u6zgoJZR8kMEvdESm6Cj7r8n8HwiZZcMQecXNsF3AKV-1d86Zdwl5OGyVT69ucuBG2jpmaspOZOzU6ma_44r6i9GMX2gBcugivd5SpyLKbahTKdWy_qkeTxvMxP30GpoqXrkBwrPCIddE4SUt8jbBpjyqCOGEJNxRSL5-ykB1AsELc0"
                    imageAlt="A premium, minimalist 3D abstract visualization of mobile app architecture and engineering"
                />

                <ServicesSection
                    page="app-development"
                    badgeText="CAPABILITIES"
                    title="App Development Services We Offer"
                    description="A comprehensive suite of engineering solutions including Android, iOS, cross-platform, and hybrid apps, enterprise solutions, MVP development, app modernization, and ongoing maintenance."
                    services={[
                        { icon: "android", title: "Android App Development", description: "High-performance native Android applications built for the global ecosystem." },
                        { icon: "phone_iphone", title: "iOS App Development", description: "Premium, intuitive iOS experiences crafted for the Apple ecosystem." },
                        { icon: "devices", title: "Cross-Platform Development", description: "Efficient, single-codebase solutions using Flutter or React Native." },
                        { icon: "web", title: "Hybrid App Development", description: "Versatile web-technology based apps for rapid deployment across platforms." },
                        { icon: "corporate_fare", title: "Enterprise App Solutions", description: "Secure and scalable mobile tools designed for complex corporate workflows." },
                        { icon: "rocket_launch", title: "MVP Development", description: "Rapid prototyping and launch-ready minimal viable products for startups." },
                        { icon: "update", title: "App Modernization", description: "Updating legacy mobile applications with modern UI and architecture." },
                        { icon: "support_agent", title: "App Maintenance & Support", description: "Ongoing performance optimization and feature updates for your app portfolio." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our App Development Services"
                    description="We combine user-centric design with technical mastery to build scalable mobile experiences that drive measurable transformation."
                    features={[
                        { icon: "terminal", title: "Mobile Expertise", description: "Deep proficiency in native and cross-platform development for high-stakes mobile environments." },
                        { icon: "settings_suggest", title: "User-Centric Design", description: "Intuitive interfaces engineered specifically for your users needs and operational goals." },
                        { icon: "layers", title: "Scalable Architecture", description: "Robust mobile backends built with cloud-native principles to grow seamlessly with your enterprise." },
                        { icon: "sync", title: "Agile Development", description: "Rapid, iterative delivery with full transparency and flexibility to adapt to changing markets." },
                        { icon: "verified_user", title: "Quality Assurance", description: "Rigorous testing protocols ensuring peak performance, security, and uncompromising reliability across all devices." },
                        { icon: "support_agent", title: "Long-Term Support", description: "Dedicated maintenance and evolution to keep your app at the cutting edge of mobile technology." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our App Development Process"
                    description="A precision-engineered workflow from discovery and planning to UI/UX design, development, testing, deployment, and post-launch maintenance."
                    layout="flat"
                    steps={[
                        { number: "01", icon: "search", title: "Discovery", description: "Deep-dive into app goals, user research, and technical feasibility for mobile platforms." },
                        { number: "02", icon: "map", title: "Planning", description: "Strategic roadmap, mobile architecture mapping, and platform-specific timeline definition." },
                        { number: "03", icon: "palette", title: "UI/UX Design", description: "High-fidelity mobile prototyping, visual identity, and user experience engineering for touch interfaces." },
                        { number: "04", icon: "code", title: "Development", description: "Agile execution using modern mobile stacks, clean code, and scalable cloud-native backends." },
                        { number: "05", icon: "verified_user", title: "Testing & QA", description: "Rigorous performance auditing, security checks, and cross-device validation on iOS and Android." },
                        { number: "06", icon: "rocket_launch", title: "Deployment", description: "Seamless App Store and Play Store launch with zero-downtime protocols and monitoring." },
                        { number: "07", icon: "update", title: "Post-Launch Maintenance", description: "Ongoing optimizations, OS compatibility updates, security patches, and feature scaling.", span: true }
                    ]}
                />

                <BenefitsSection
                    badgeText="ENGINEERING EXCELLENCE"
                    title="App Development Solutions"
                    description="We engineer high-performance mobile experiences across diverse industries, from enterprise-grade tools to disruptive startup MVPs."
                    cards={[
                        {
                            icon: "phone_iphone",
                            title: "Custom Mobile Apps",
                            description: "Bespoke iOS and Android applications built with native precision and cross-platform efficiency for maximum reach."
                        },
                        {
                            icon: "corporate_fare",
                            title: "Enterprise & Business",
                            description: "Scalable mobile ecosystems designed to streamline corporate workflows and enhance internal operational efficiency."
                        },
                        {
                            icon: "shopping_bag",
                            title: "Ecommerce & Fintech",
                            description: "Secure, high-conversion mobile shopping and financial platforms integrated with advanced payment gateways."
                        },
                        {
                            icon: "rocket_launch",
                            title: "Startup MVP Development",
                            description: "Rapid prototyping and launch-ready minimal viable products designed to validate your vision and scale with demand."
                        }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection />

                <FeaturesSection
                    badgeText="TECH STACK"
                    title="Technologies We Use"
                    description="A precision-engineered mobile technology stack spanning frameworks, languages, backend services, cloud, databases, and deployment."
                    columns={3}
                    features={[
                        { icon: "devices", title: "Mobile Frameworks", description: "React Native, Flutter, Swift, Kotlin" },
                        { icon: "code", title: "Programming Languages", description: "TypeScript, Dart, Swift, Kotlin" },
                        { icon: "cloud", title: "Backend Technologies", description: "Node.js, Go, Python" },
                        { icon: "api", title: "APIs & Cloud Services", description: "Firebase, AWS Amplify, Google Cloud, Stripe" },
                        { icon: "database", title: "Databases", description: "PostgreSQL, MongoDB, Redis" },
                        { icon: "verified_user", title: "Testing & Deployment", description: "Jest, Appium, GitHub Actions, Fastlane" }
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