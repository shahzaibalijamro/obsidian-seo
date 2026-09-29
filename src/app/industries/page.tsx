import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { industryPages } from "@/data/industries";

export const metadata: Metadata = {
    title: "Industries We Serve | Obsidian Digital",
    description: "Explore digital marketing, content, automation, and development services for seventeen industries in Saudi Arabia.",
};

export default function IndustriesPage() {
    return <main>
        <HeroSection
            badgeText="INDUSTRIES WE SERVE"
            title={<>Digital work shaped around <span className="text-gradient-indigo">your industry</span></>}
            description="Different buyers need different information. Explore how we approach discovery, content, and digital journeys across the industries we serve."
            buttons={[]}
        />
        <section className="py-section-padding-mobile sm:py-section-padding">
            <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                <h2 className="mb-10 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">Explore by industry</h2>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {industryPages.map((industry) => <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group glass-panel flex flex-col rounded-3xl p-7 transition-colors hover:border-primary/30 focus-visible:outline-2 focus-visible:outline-primary">
                        <h3 className="mb-3 font-headline-md text-xl text-on-surface">{industry.name}</h3>
                        <p className="mb-6 flex-1 font-body-md text-on-surface-variant">{industry.description}</p>
                        <span className="inline-flex items-center gap-2 font-label-md text-sm text-primary">Explore industry <span aria-hidden="true" className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span></span>
                    </Link>)}
                </div>
            </div>
        </section>
    </main>;
}
