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

export default function AIIntegrationPage() {
    return (
        <>
            <main>
                <HeroSection
                    badgeText="NEXT-GEN AI INTEGRATION"
                    title={
                        <>
                            Architecting Intelligence. <span className="text-gradient-indigo">Dominating the Future.</span>
                        </>
                    }
                    description="We integrate enterprise-grade AI solutions that transform data into decisive action. From predictive modeling to custom LLM deployment, we build the intelligent infrastructure that defines market leaders."
                    buttons={[
                        { text: "Initiate AI Audit", href: "#services", variant: "primary", icon: "arrow_forward" },
                        { text: "Explore Intelligence", href: "#contact", variant: "secondary" }
                    ]}
                />

                <TrustBadges />

                <StatsSection />

                <AboutSection
                    badgeText="AI INTEGRATION OVERVIEW"
                    title={
                        <>
                            Engineering Intelligent Systems for <span className="text-gradient-indigo">Market Dominance</span>
                        </>
                    }
                    paragraphs={[
                        "Our AI integration practice is precision-built to transform raw enterprise data into intelligent, decisive action. We leverage machine learning, generative AI, and advanced automation to ensure your business doesn't just process information—it anticipates, adapts, and leads.",
                        "By aligning your AI infrastructure with strategic business objectives, we drive measurable operational efficiency and compounding intelligence advantages across every layer of your organization."
                    ]}
                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDa503hjmRWeO1RqwggytC2mikW-tM91a9GK1LzJxLNwuiNgV_BX7WR628UV1xYzq4Ib0HLr67DuPrrIR8YLFrCjOuXY8b7u6zgoJZR8kMEvdESm6Cj7r8n8HwiZZcMQecXNsF3AKV-1d86Zdwl5OGyVT69ucuBG2jpmaspOZOzU6ma_44r6i9GMX2gBcugivd5SpyLKbahTKdWy_qkeTxvMxP30GpoqXrkBwrPCIddE4SUt8jbBpjyqCOGEJNxRSL5-ykB1AsELc0"
                    imageAlt="A premium, minimalist 3D abstract visualization of AI integration and neural networks"
                />

                <ServicesSection
                    page="ai-integration"
                    badgeText="CAPABILITIES"
                    title="AI Integration Services We Offer"
                    description="A comprehensive suite of intelligent solutions designed to automate workflows, enhance decision-making, and drive exponential growth."
                    services={[
                        { icon: "forum", title: "AI Chatbot Integration", description: "Intelligent, natural language conversational interfaces for 24/7 engagement." },
                        { icon: "psychology", title: "Generative AI Solutions", description: "Custom LLM deployments and creative AI tools tailored for your brand." },
                        { icon: "auto_mode", title: "AI Automation", description: "Streamlining repetitive tasks with intelligent, self-learning workflows." },
                        { icon: "hub", title: "Machine Learning Integration", description: "Advanced data modeling and pattern recognition for complex decision-making." },
                        { icon: "smart_toy", title: "AI Assistants", description: "Bespoke digital assistants designed to augment team productivity." },
                        { icon: "query_stats", title: "Predictive Analytics", description: "Forecasting market trends and user behavior with algorithmic precision." },
                        { icon: "account_tree", title: "Workflow Optimization", description: "Intelligent restructuring of business processes for maximum efficiency." },
                        { icon: "api", title: "API Integration", description: "Seamlessly connecting your infrastructure to industry-leading AI models." }
                    ]}
                />

                <FeaturesSection
                    title="Why Choose Our AI Integration Services"
                    description="We combine strategic AI expertise with secure technical implementation to build scalable intelligence that drives measurable business outcomes."
                    features={[
                        { icon: "psychology", title: "AI Expertise", description: "Deep proficiency in machine learning, neural networks, and generative AI architectures." },
                        { icon: "settings_suggest", title: "Custom Implementation", description: "Tailored AI solutions engineered specifically for your unique data sets and operational workflows." },
                        { icon: "gpp_good", title: "Secure Integrations", description: "Enterprise-grade security protocols ensuring data privacy and uncompromising integrity across all AI models." },
                        { icon: "layers", title: "Scalable Solutions", description: "Robust AI infrastructure built on cloud-native principles to grow seamlessly with your enterprise data demands." },
                        { icon: "verified", title: "Industry Experience", description: "Proven track record of deploying high-impact AI across fintech, healthcare, and global enterprise sectors." },
                        { icon: "monitoring", title: "Measurable Outcomes", description: "Strategic focus on ROI, efficiency gains, and clear performance metrics that validate your AI investment." }
                    ]}
                />

                <ProcessSection
                    badgeText="METHODOLOGY"
                    title="Our AI Integration Process"
                    description="A strategic, end-to-end workflow from business analysis and AI strategy to solution design, development, integration, testing, deployment, and ongoing optimization."
                    layout="flat"
                    steps={[
                        { number: "01", icon: "search", title: "Strategic Discovery", description: "Business analysis, objective alignment, and AI feasibility assessment." },
                        { number: "02", icon: "map", title: "AI Roadmap", description: "Defining the model architecture, data strategy, and integration roadmap." },
                        { number: "03", icon: "palette", title: "Solution Design", description: "Designing AI-driven user experiences and technical system architecture." },
                        { number: "04", icon: "code", title: "Development & Training", description: "Agile execution of model training, prompt engineering, and core development." },
                        { number: "05", icon: "verified_user", title: "Integration & Testing", description: "Seamlessly embedding AI into existing systems with rigorous performance and safety audits." },
                        { number: "06", icon: "rocket_launch", title: "Deployment", description: "Controlled launch with real-time monitoring and scale-ready protocols." },
                        { number: "07", icon: "update", title: "Ongoing Optimization", description: "Continuous learning, model refinement, and performance scaling based on real-world data.", span: true }
                    ]}
                />

                <BenefitsSection
                    badgeText="INTELLIGENT AUTOMATION"
                    title="AI Solutions We Build"
                    description="We deploy advanced machine learning and generative AI models to transform your operations and enhance user experiences."
                    columns={3}
                    cards={[
                        { icon: "forum", title: "AI Chatbots & Virtual Assistants", description: "Intelligent conversational agents for 24/7 engagement." },
                        { icon: "auto_awesome", title: "Recommendation Engines", description: "Data-driven personalization to boost engagement and sales." },
                        { icon: "description", title: "Document Processing", description: "Automated extraction and analysis of unstructured data." },
                        { icon: "manage_search", title: "Intelligent Search", description: "Semantic search solutions that understand user intent." },
                        { icon: "support_agent", title: "Customer Support Automation", description: "Streamlining resolutions with automated triaging and response." },
                        { icon: "edit_note", title: "Content Generation", description: "Leveraging LLMs for scalable, brand-aligned content creation." },
                        { icon: "account_tree", title: "Business Process Automation", description: "End-to-end intelligent workflows for operational efficiency.", span: true }
                    ]}
                />

                <CaseStudiesSection />
                <IndustriesSection />
                <TestimonialsSection />

                <FeaturesSection
                    badgeText="TECH STACK"
                    title="Technologies We Use"
                    description="A precision-engineered AI technology stack spanning models, machine learning, cloud platforms, APIs, vector databases, and automation."
                    columns={3}
                    features={[
                        { icon: "psychology", title: "AI Models & LLMs", description: "GPT-4, Claude 3, Llama 3" },
                        { icon: "hub", title: "Machine Learning", description: "PyTorch, TensorFlow, Scikit-learn" },
                        { icon: "cloud", title: "Cloud AI Platforms", description: "Google Cloud AI, AWS SageMaker, Azure AI" },
                        { icon: "api", title: "AI APIs & Services", description: "OpenAI API, Anthropic, LangChain" },
                        { icon: "database", title: "Vector Databases", description: "Pinecone, Milvus, Weaviate" },
                        { icon: "smart_toy", title: "Automation & Dev Tools", description: "AutoGPT, GitHub Copilot, Weights & Biases" }
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