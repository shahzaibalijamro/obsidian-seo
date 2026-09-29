import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import type { FocusedServiceContent } from "@/data/remaining-services";

export default function FocusedServicePage({ content }: { content: FocusedServiceContent }) {
    return (
        <main>
            <section className="relative overflow-hidden bg-mesh pb-24 pt-36 sm:pb-32 sm:pt-44">
                <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
                <div className="relative mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
                        <span>{content.category}</span>
                        <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
                        <span className="text-primary">{content.name}</span>
                    </nav>
                    <p className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-label-md text-sm uppercase tracking-widest text-primary">{content.name} services</p>
                    <h1 className="mb-7 max-w-4xl font-display-lg text-display-lg-mobile font-semibold leading-tight text-on-surface md:text-display-lg">{content.headline}</h1>
                    <p className="mb-9 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{content.description}</p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="rounded-full bg-inverse-primary px-7 py-4 font-label-md text-on-accent shadow-[var(--glow-primary-sm)] transition-colors hover:bg-primary">Discuss Your Project</a>
                        <a href="#capabilities" className="rounded-full border border-outline-variant px-7 py-4 font-label-md text-on-surface transition-colors hover:border-primary hover:text-primary">Explore Capabilities</a>
                    </div>
                </div>
            </section>

            <section className="py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto grid max-w-container-max gap-10 px-margin-mobile sm:px-margin-desktop lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                        <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">THE OPPORTUNITY</p>
                        <h2 className="font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">A practical approach to {content.name.toLowerCase()}</h2>
                    </div>
                    <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">{content.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </div>
            </section>

            <section id="capabilities" className="bg-mesh py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">WHAT WE CAN HELP WITH</p>
                    <h2 className="mb-10 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">{content.name} capabilities</h2>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {content.offerings.map((item) => <div key={item.title} className="glass-panel rounded-3xl p-7">
                            <span aria-hidden="true" className="material-symbols-outlined mb-5 block text-3xl text-primary">{item.icon}</span>
                            <h3 className="mb-3 font-headline-md text-xl text-on-surface">{item.title}</h3>
                            <p className="font-body-md text-on-surface-variant">{item.description}</p>
                        </div>)}
                    </div>
                </div>
            </section>

            <section className="py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">HOW WE WORK</p>
                    <h2 className="mb-10 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">From first brief to useful results</h2>
                    <div className="grid gap-6 md:grid-cols-3">{content.approach.map((step, index) => <div key={step} className="rounded-3xl border border-line bg-surface-container-low p-7">
                        <span className="mb-6 block font-display-lg text-3xl text-primary">{String(index + 1).padStart(2, "0")}</span>
                        <p className="font-body-lg text-on-surface">{step}</p>
                    </div>)}</div>
                </div>
            </section>

            <FAQSection title={`${content.name}: common questions`} description="A few details to help you plan the next conversation." faqs={content.faqs} />
            <CTASection title={`Let's plan your ${content.name.toLowerCase()} work`} description="Tell us about your current setup, your audience, and what you want to improve. We will help define a useful scope." buttonText="Contact Us" buttonHref="#contact" />
            <ContactSection />
        </main>
    );
}
