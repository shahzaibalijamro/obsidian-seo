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

export default function SoftwareDevelopmentPage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="PREMIUM SOFTWARE AGENCY"
                    title={
                        <>
                            Engineer Digital Frontiers with <span className="text-gradient-indigo">Technical Supremacy</span>
                        </>
                    }
                    description="We build scalable, high-performance software solutions tailored for the modern enterprise. From cloud-native architectures to complex digital ecosystems, we deliver precision-engineered code that drives innovation."
                    buttons={[
                        { text: "Initiate Development", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "Explore Methodologies", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="SOFTWARE DEVELOPMENT OVERVIEW"
                    title={
                        <>
                            Engineering Scalable Systems for <span className="text-gradient-indigo">Enterprise Dominance</span>
                        </>
                    }
                    paragraphs={[
                        "Our software engineering practice is precision-built to transform complex business problems into elegant, high-performance systems. We leverage modern architecture patterns, rigorous engineering standards, and deep domain expertise to ensure your software doesn't just function—it accelerates your business.",
                        "By aligning your technical infrastructure with strategic business objectives, we drive measurable operational efficiency and compounding technological advantage."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDa503hjmRWeO1RqwggytC2mikW-tM91a9GK1LzJxLNwuiNgV_BX7WR628UV1xYzq4Ib0HLr67DuPrrIR8YLFrCjOuXY8b7u6zgoJZR8kMEvdESm6Cj7r8n8HwiZZcMQecXNsF3AKV-1d86Zdwl5OGyVT69ucuBG2jpmaspOZOzU6ma_44r6i9GMX2gBcugivd5SpyLKbahTKdWy_qkeTxvMxP30GpoqXrkBwrPCIddE4SUt8jbBpjyqCOGEJNxRSL5-ykB1AsELc0"
                    imageAlt="A premium, minimalist 3D abstract visualization of software architecture and engineering"
                />

                <ServicesSection
                    page="software-development"
                    badgeText="CAPABILITIES"
                    title="Software Development Services We Offer"
                    description="A comprehensive suite of engineering solutions designed to build scalable, high-performance software that drives business transformation."
                    services={[
                        { icon: "code", title: "Custom Software Development", description: "Tailored solutions engineered from the ground up to solve your unique business challenges." },
                        { icon: "corporate_fare", title: "Enterprise Software", description: "Scalable, secure, and robust systems designed to streamline complex corporate operations." },
                        { icon: "web", title: "Web Applications", description: "High-performance, responsive web platforms built with modern frameworks and intuitive UX." },
                        { icon: "smartphone", title: "Mobile Applications", description: "Native and cross-platform mobile experiences that engage users on every device." },
                        { icon: "cloud_done", title: "SaaS Development", description: "End-to-end product engineering for scalable cloud-based software-as-a-service solutions." },
                        { icon: "api", title: "API Integration", description: "Seamless connectivity between systems to optimize data flow and extend functionality." },
                        { icon: "cloud", title: "Cloud Solutions", description: "Secure cloud architecture and migration strategies for enhanced scalability and reliability." },
                        { icon: "update", title: "Software Modernization", description: "Re-engineering legacy systems to improve performance, security, and maintainability." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our Software Development Services"
                    description="We combine technical mastery with business-first engineering to build scalable software that drives measurable transformation."
                    features={[
                        { icon: "terminal", title: "Technical Expertise", description: "Deep proficiency in modern stacks and complex problem-solving for high-stakes environments." },
                        { icon: "settings_suggest", title: "Custom Development", description: "Tailored solutions engineered specifically for your unique business goals and operational needs." },
                        { icon: "layers", title: "Scalable Architecture", description: "Robust systems built with cloud-native principles to grow seamlessly with your enterprise." },
                        { icon: "sync", title: "Agile Methodology", description: "Rapid, iterative delivery with full transparency and flexibility to adapt to changing markets." },
                        { icon: "verified_user", title: "Quality Assurance", description: "Rigorous testing protocols ensuring peak performance, security, and uncompromising reliability." },
                        { icon: "support_agent", title: "Long-Term Support", description: "Dedicated maintenance and evolution to keep your software at the cutting edge of technology." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our Development Process"
                    description="A precision-engineered workflow from discovery and planning to UI/UX design, development, testing, deployment, and ongoing maintenance."
                    layout="flat"
                    steps={[
                        { number: "01", icon: "search", title: "Discovery", description: "Deep-dive into goals, audience research, and technical feasibility." },
                        { number: "02", icon: "map", title: "Planning", description: "Strategic roadmap, architecture mapping, and timeline definition." },
                        { number: "03", icon: "palette", title: "UI/UX Design", description: "High-fidelity prototyping, visual identity, and user experience engineering." },
                        { number: "04", icon: "code", title: "Development", description: "Agile execution using modern stacks, clean code, and scalable architecture." },
                        { number: "05", icon: "verified_user", title: "Testing & QA", description: "Rigorous performance auditing, security checks, and cross-device validation." },
                        { number: "06", icon: "rocket_launch", title: "Deployment", description: "Seamless launch with zero-downtime protocols and performance monitoring." },
                        { number: "07", icon: "update", title: "Maintenance", description: "Ongoing optimizations, security updates, and feature scaling.", span: true }
                    ]}
                />

                <BenefitsSection
                    badgeText="ENGINEERING EXCELLENCE"
                    title="Custom Software Solutions"
                    description="Showcase tailored software solutions designed to meet unique business requirements across different industries."
                    cards={[
                        {
                            icon: "developer_board",
                            title: "Tailored Architecture",
                            description: "We design bespoke system architectures that align perfectly with your specific operational workflows and long-term scalability goals."
                        },
                        {
                            icon: "integration_instructions",
                            title: "Legacy Modernization",
                            description: "Transform outdated systems into modern, high-performance applications without disrupting your core business operations."
                        },
                        {
                            icon: "security",
                            title: "Enterprise Security",
                            description: "Built-in security protocols and data privacy standards that meet the most rigorous industry compliance requirements."
                        },
                        {
                            icon: "speed",
                            title: "Performance Optimization",
                            description: "High-velocity engineering focused on reducing latency and maximizing throughput for mission-critical applications."
                        }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection />

                <FeaturesSection
                    badgeText="TECH STACK"
                    title="Technologies We Use"
                    description="A precision-engineered technology stack spanning languages, frameworks, databases, cloud infrastructure, APIs, and DevOps."
                    columns={3}
                    features={[
                        { icon: "code", title: "Programming Languages", description: "Python, Go, TypeScript, Swift" },
                        { icon: "layers", title: "Frameworks & Libraries", description: "React, Next.js, Flutter, Node.js" },
                        { icon: "database", title: "Databases", description: "PostgreSQL, MongoDB, Redis, Pinecone" },
                        { icon: "cloud", title: "Cloud & Infrastructure", description: "AWS, Google Cloud, Docker, Kubernetes" },
                        { icon: "api", title: "APIs & Integration", description: "GraphQL, Stripe, Twilio, OpenAI" },
                        { icon: "monitoring", title: "DevOps & Monitoring", description: "GitHub Actions, Terraform, Datadog, Sentry" }
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