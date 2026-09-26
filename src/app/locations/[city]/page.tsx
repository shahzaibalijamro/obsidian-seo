import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { locationPages } from "@/data/locations";

type Props = { params: Promise<{ city: string }> };

const serviceGroups = [
    { title: "Search", icon: "travel_explore", description: "Help people find useful answers when they look for a service like yours.", links: [{ label: "SEO", href: "/services/seo" }] },
    { title: "Social Media", icon: "campaign", description: "Connect campaigns and everyday communication to a clear customer journey.", links: [{ label: "Social Media Marketing", href: "/services/social-media-marketing" }, { label: "Social Media Management", href: "/services/social-media-management" }] },
    { title: "Content", icon: "edit_note", description: "Explain your offer with pages and messages shaped around your audience.", links: [{ label: "Content Writing", href: "/services/content-writing" }, { label: "Content Marketing", href: "/services/content-marketing" }] },
    { title: "AI & Automation", icon: "psychology", description: "Explore practical ways to connect information and workflows.", links: [{ label: "AI Integration", href: "/services/ai-integration" }] },
    { title: "Development", icon: "code", description: "Build a web presence that is usable today and maintainable tomorrow.", links: [{ label: "Web Development", href: "/services/web-development" }, { label: "Software Development", href: "/services/software-development" }, { label: "WordPress Development", href: "/services/wordpress-development" }] },
];

export const dynamicParams = false;

export function generateStaticParams() {
    return locationPages.map(({ slug }) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const location = locationPages.find(({ slug }) => slug === city);
    if (!location) notFound();
    return {
        title: `Digital Marketing & Web Services in ${location.name} | Obsidian Digital`,
        description: location.description,
    };
}

export default async function LocationPage({ params }: Props) {
    const { city } = await params;
    const location = locationPages.find(({ slug }) => slug === city);
    if (!location) notFound();
    const nearbyPages = locationPages.filter(({ slug }) => slug !== city);

    return (
        <main>
            <section className="relative overflow-hidden bg-mesh pb-24 pt-36 sm:pb-32 sm:pt-44">
                <div className="pointer-events-none absolute -right-24 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
                <div className="relative mx-auto grid max-w-container-max items-center gap-12 px-margin-mobile sm:px-margin-desktop lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
                            <span className="text-primary">{location.name}</span>
                        </nav>
                        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-label-md text-sm text-primary">
                            <span aria-hidden="true" className="material-symbols-outlined text-base">location_on</span>
                            SAUDI ARABIA SERVICE AREA
                        </p>
                        <h1 className="mb-7 max-w-3xl font-display-lg text-display-lg-mobile font-semibold leading-tight text-on-surface md:text-display-lg">
                            {location.heroLead} <span className="text-gradient-indigo">{location.heroHighlight}</span>
                        </h1>
                        <p className="mb-9 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">{location.description}</p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="rounded-full bg-inverse-primary px-7 py-4 font-label-md text-on-accent shadow-[var(--glow-primary-sm)] transition-colors hover:bg-primary">Start a Conversation</Link>
                            <a href="#services" className="rounded-full border border-outline-variant px-7 py-4 font-label-md text-on-surface transition-colors hover:border-primary hover:text-primary">Explore Services</a>
                        </div>
                    </div>
                    <div aria-hidden="true" className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[2.5rem] border border-line bg-surface/75 shadow-[var(--glow-primary-md)]">
                        <div className="absolute h-[80%] w-[80%] rounded-full border border-primary/15" />
                        <div className="absolute h-[58%] w-[58%] rounded-full border border-primary/20" />
                        <div className="absolute h-[34%] w-[34%] rounded-full bg-primary/10 blur-2xl" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <span className="material-symbols-outlined mb-4 text-7xl text-primary">location_on</span>
                            <span className="font-display-lg text-3xl font-semibold text-on-surface sm:text-4xl">{location.name}</span>
                            <span className="mt-2 font-label-md text-sm uppercase tracking-[0.2em] text-on-surface-variant">Saudi Arabia</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto grid max-w-container-max gap-12 px-margin-mobile sm:px-margin-desktop lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    <div>
                        <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">WORKING IN {location.name.toUpperCase()}</p>
                        <h2 className="font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">{location.contextTitle}</h2>
                    </div>
                    <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
                        {location.contextParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </div>
                <div className="mx-auto mt-16 grid max-w-container-max gap-6 px-margin-mobile sm:px-margin-desktop md:grid-cols-3">
                    {location.priorities.map((priority) => (
                        <div key={priority.title} className="glass-panel rounded-3xl p-8">
                            <div aria-hidden="true" className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
                                <span className="material-symbols-outlined block text-2xl leading-none text-primary">{priority.icon}</span>
                            </div>
                            <h3 className="mb-3 font-headline-md text-xl text-on-surface">{priority.title}</h3>
                            <p className="font-body-md text-on-surface-variant">{priority.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="services" className="bg-mesh py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <div className="mb-12 max-w-3xl">
                        <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">CONNECTED CAPABILITIES</p>
                        <h2 className="mb-5 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">Services for Businesses in {location.name}</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">Choose the work that supports your current goals. We can connect search, social, content, AI, and development where they need to work together.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {serviceGroups.map((group) => (
                            <div key={group.title} className="glass-panel rounded-3xl p-7">
                                <div aria-hidden="true" className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/10">
                                    <span className="material-symbols-outlined block text-2xl leading-none text-primary">{group.icon}</span>
                                </div>
                                <h3 className="mb-3 font-headline-md text-xl text-on-surface">{group.title}</h3>
                                <p className="mb-5 font-body-md text-sm text-on-surface-variant">{group.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {group.links.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-primary">{link.label}</Link>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection title={`Questions About Working With Us in ${location.name}`} description="A few practical answers before we discuss your goals and project scope." faqs={location.faqs} />

            <section className="py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <h2 className="mb-4 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">Explore Other Service Areas</h2>
                    <p className="mb-8 max-w-2xl font-body-lg text-on-surface-variant">Find the same connected services for businesses across these Saudi cities.</p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {nearbyPages.map((other) => <Link key={other.slug} href={`/locations/${other.slug}`} className="glass-panel flex items-center justify-between rounded-2xl p-5 font-headline-md text-on-surface transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{other.name}<span aria-hidden="true" className="material-symbols-outlined text-primary">arrow_forward</span></Link>)}
                    </div>
                </div>
            </section>

            <CTASection title={`Ready to Grow Your Presence in ${location.name}?`} description="Tell us about your business, your customers, and the digital work you want to improve. We will help you define a useful next step." buttonText="Contact Us" buttonHref="/contact" />
        </main>
    );
}
