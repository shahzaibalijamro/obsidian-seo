import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import AchievementsSection from "@/components/AchievementsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

export default function About() {
  return (
    <>
      <main>
        <HeroSection
          badgeText="THE OBSIDIAN VISION"
          title={
            <>
              Engineering the Future of <span className="text-gradient-indigo">Digital Authority.</span>
            </>
          }
          description="Obsidian Digital operates at the crucial intersection of aesthetic brilliance and technical superiority. We build the intelligent infrastructure that empowers market leaders to dominate the digital landscape through data-driven precision."
          buttons={[
            { text: "Learn Our Story", href: "#services", variant: "primary", icon: "arrow_forward" },
            { text: "Meet the Architects", href: "#contact", variant: "secondary" }
          ]}
        />
        <TrustBadges />
        <StatsSection />
        <AboutSection
          badgeText="COMPANY OVERVIEW"
          title={
            <>
              Architecting the Future of <span className="text-gradient-indigo">Digital Authority</span>
            </>
          }
          paragraphs={[
            "Obsidian Digital is a premier digital agency born at the intersection of technical precision and creative strategy. We specialize in engineering high-performance digital ecosystems for enterprises that demand absolute market dominance. Our mission is to bridge the gap between complex data intelligence and human-centric design, ensuring your brand leads with irrefutable authority.",
            "With a foundation built on algorithmic transparency and architectural excellence, we empower global brands to scale fearlessly in an ever-evolving digital landscape."
          ]}
          buttonText=""
          buttonHref=""
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDa503hjmRWeO1RqwggytC2mikW-tM91a9GK1LzJxLNwuiNgV_BX7WR628UV1xYzq4Ib0HLr67DuPrrIR8YLFrCjOuXY8b7u6zgoJZR8kMEvdESm6Cj7r8n8HwiZZcMQecXNsF3AKV-1d86Zdwl5OGyVT69ucuBG2jpmaspOZOzU6ma_44r6i9GMX2gBcugivd5SpyLKbahTKdWy_qkeTxvMxP30GpoqXrkBwrPCIddE4SUt8jbBpjyqCOGEJNxRSL5-ykB1AsELc0"
          imageAlt="A premium, minimalist 3D abstract visualization representing digital authority and architectural excellence"
        />
        <TimelineSection />
        <MissionVisionSection />
        <ValuesSection />

        <section className="py-section-padding-mobile sm:py-section-padding bg-mesh section-curve-top" id="why-choose-us">
          <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm uppercase tracking-wider">
                Expertise. Precision. Transparency.
              </span>
              <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                Why Choose Obsidian?
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
                We combine deep technical mastery with a customer-centric approach to deliver irrefutable digital authority for the world's most ambitious brands.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">history_edu</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface mb-4">Experience</h3>
                <p className="font-body-md text-on-surface-variant">A decade of engineering digital dominance for Tier-1 global enterprises.</p>
              </div>
              <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">architecture</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface mb-4">Technical Expertise</h3>
                <p className="font-body-md text-on-surface-variant">Deep architectural mastery across SEO, AI integration, and complex data modeling.</p>
              </div>
              <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">settings_suggest</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface mb-4">Custom Solutions</h3>
                <p className="font-body-md text-on-surface-variant">Bespoke digital ecosystems engineered for your specific industry challenges and growth objectives.</p>
              </div>
              <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">visibility</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface mb-4">Transparent Communication</h3>
                <p className="font-body-md text-on-surface-variant">Real-time access to our data models and deployment cycles. You see exactly what we see.</p>
              </div>
              <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-primary/20 bg-primary/5 md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                  <span className="material-symbols-outlined text-2xl">handshake</span>
                </div>
                <h3 className="font-headline-md text-xl text-on-surface mb-4">Customer-Focused Approach</h3>
                <p className="font-body-md text-on-surface-variant">We don't just build systems; we partner with your leadership to architect long-term market dominance.</p>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection
          theme="dark"
          page="about"
          badgeText="Capabilities"
          title="Our Services"
          description="From architectural engineering to tactical growth, we deliver precision-engineered digital solutions for the modern enterprise."
          services={[
            { icon: "terminal", title: "Software Development", description: "Custom enterprise-grade software solutions built with scalable architectures and robust security protocols." },
            { icon: "language", title: "Web Development", description: "High-performance, responsive web ecosystems engineered for speed, accessibility, and conversion optimization." },
            { icon: "smartphone", title: "App Development", description: "Native and cross-platform mobile applications designed for seamless user experiences and technical stability." },
            { icon: "psychology", title: "AI Integration", description: "Deploying advanced machine learning models and LLMs to automate workflows and enhance data intelligence." },
            { icon: "search", title: "SEO Dominance", description: "Infrastructure-level search engine optimization designed to establish irrefutable organic authority." },
            { icon: "share", title: "Social Media Marketing", description: "Strategic brand positioning and community engagement across high-impact social platforms." },
            { icon: "ads_click", title: "Digital Marketing Services", description: "A full-spectrum growth engine combining SEM, content strategy, and data-driven performance marketing.", colSpan: "lg:col-span-3", showIconLeft: true }
          ]}
        />
        <ProcessSection
          badgeText="Workflow"
          title="Our Process"
          description="A precision-engineered methodology designed to transform complex challenges into market-leading digital assets."
          steps={[
            { number: "01", icon: "search", title: "Discovery & Planning", description: "Deep-dive analysis of your business objectives, technical landscape, and market opportunities." },
            { number: "02", icon: "architecture", title: "Design & Architecture", description: "Architecting scalable systems and high-fidelity interfaces that align with your brand's authority." },
            { number: "03", icon: "auto_awesome", title: "Development & Delivery", description: "Agile engineering cycles focused on performance, security, and seamless integration." },
            { number: "04", icon: "rocket_launch", title: "Ongoing Support", description: "Continuous optimization and proactive maintenance to ensure long-term technical dominance." }
          ]}
        />
        <TeamSection />
        <AchievementsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <BackToTop />
    </>
  );
}
