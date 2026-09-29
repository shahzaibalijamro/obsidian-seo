import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import { industryPages } from "@/data/industries";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return industryPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const industry = industryPages.find((item) => item.slug === slug);
    if (!industry) notFound();
    return {
        title: `Digital Marketing for ${industry.name} | Obsidian Digital`,
        description: industry.description,
    };
}

export default async function IndustryPage({ params }: Props) {
    const { slug } = await params;
    const industry = industryPages.find((item) => item.slug === slug);
    if (!industry) notFound();
    const related = industryPages.filter((item) => item.slug !== slug).slice(0, 3);

    return <main>
        <section className="relative overflow-hidden bg-mesh pb-24 pt-36 sm:pb-32 sm:pt-44">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
            <div className="relative mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
                    <Link href="/industries" className="hover:text-primary">Industries</Link>
                    <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
                    <span className="text-primary">{industry.name}</span>
                </nav>
                <p className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-label-md text-sm uppercase tracking-widest text-primary">{industry.name}</p>
                <h1 className="mb-7 max-w-4xl font-display-lg text-display-lg-mobile font-semibold leading-tight text-on-surface md:text-display-lg">Digital services for <span className="text-gradient-indigo">{industry.name}</span></h1>
                <p className="mb-9 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{industry.description}</p>
                <div className="flex flex-wrap gap-4">
                    <a href="#contact" className="rounded-full bg-inverse-primary px-7 py-4 font-label-md text-on-accent shadow-[var(--glow-primary-sm)] transition-colors hover:bg-primary">Discuss Your Project</a>
                    <a href="#priorities" className="rounded-full border border-outline-variant px-7 py-4 font-label-md text-on-surface transition-colors hover:border-primary hover:text-primary">Explore Priorities</a>
                </div>
            </div>
        </section>

        <section className="py-section-padding-mobile sm:py-section-padding">
            <div className="mx-auto grid max-w-container-max gap-10 px-margin-mobile sm:px-margin-desktop lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                    <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">INDUSTRY CONTEXT</p>
                    <h2 className="font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">Start with the decisions your customers make</h2>
                </div>
                <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">{industry.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            </div>
        </section>

        <section id="priorities" className="bg-mesh py-section-padding-mobile sm:py-section-padding">
            <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">WHERE TO FOCUS</p>
                <h2 className="mb-10 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">Digital priorities for {industry.name.toLowerCase()}</h2>
                <div className="grid gap-6 md:grid-cols-3">{industry.priorities.map((priority, index) => <div key={priority.title} className="glass-panel rounded-3xl p-7">
                    <span className="mb-6 block font-display-lg text-3xl text-primary">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mb-3 font-headline-md text-xl text-on-surface">{priority.title}</h3>
                    <p className="font-body-md text-on-surface-variant">{priority.description}</p>
                </div>)}</div>
            </div>
        </section>

        <section className="py-section-padding-mobile sm:py-section-padding">
            <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">CONNECTED SERVICES</p>
                <h2 className="mb-5 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">Capabilities that can support your team</h2>
                <p className="mb-8 max-w-2xl font-body-lg text-on-surface-variant">The right scope depends on your current site, audience, and goals. These services are useful starting points for a conversation.</p>
                <div className="flex flex-wrap gap-3">{industry.services.map((service) => <Link key={service.href} href={service.href} className="rounded-full border border-primary/20 bg-primary/5 px-5 py-3 font-label-md text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary">{service.label}</Link>)}</div>
            </div>
        </section>

        <section className="border-t border-line-subtle bg-surface-container-low py-section-padding-mobile sm:py-section-padding">
            <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                <h2 className="mb-8 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">Explore other industries</h2>
                <div className="grid gap-4 md:grid-cols-3">{related.map((item) => <Link key={item.slug} href={`/industries/${item.slug}`} className="glass-panel flex items-center justify-between rounded-2xl p-5 font-headline-md text-on-surface transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{item.name}<span aria-hidden="true" className="material-symbols-outlined text-primary">arrow_forward</span></Link>)}</div>
                <Link href="/industries" className="mt-6 inline-flex font-label-md text-primary hover:underline">View all industries</Link>
            </div>
        </section>

        <CTASection title={`Let's discuss your ${industry.name.toLowerCase()} goals`} description="Tell us about your audience, current digital experience, and the questions your customers need answered." buttonText="Contact Us" buttonHref="#contact" />
        <ContactSection />
    </main>;
}
