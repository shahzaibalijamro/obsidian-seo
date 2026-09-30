import Link from "next/link";
import LocationCard from "@/components/LocationCard";
import LocationCarousel from "@/components/LocationCarousel";
import { locationPages } from "@/data/locations";

export default function LocationsSection() {
    return (
        <section id="locations" aria-labelledby="locations-heading" className="relative overflow-hidden border-y border-line-subtle bg-surface-container-low py-section-padding-mobile sm:py-section-padding">
            <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-0 h-[440px] w-[440px] rounded-full bg-primary/5 blur-[100px]" />
            <div className="relative mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
                    <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-label-md text-sm text-primary">SERVICE AREAS</span>
                    <h2 id="locations-heading" className="mb-5 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">
                        Explore Our <span className="text-gradient-indigo">Saudi Service Areas</span>
                    </h2>
                    <p className="font-body-lg text-base leading-7 text-on-surface-variant sm:text-body-lg">
                        See how we help businesses connect search, content, marketing, and digital experiences in cities across Saudi Arabia.
                    </p>
                </div>

                <LocationCarousel label="Saudi service areas">
                    {locationPages.map((location, index) => (
                        <LocationCard
                            key={location.slug}
                            location={location}
                            number={index + 1}
                            className="w-full"
                        />
                    ))}
                </LocationCarousel>

                <div className="mt-12 text-center">
                    <Link href="/locations" className="inline-flex items-center gap-2 rounded-full bg-inverse-primary px-7 py-4 font-label-md text-sm font-semibold text-on-primary shadow-[var(--glow-primary-sm)] transition-all duration-300 hover:bg-primary hover:shadow-[var(--glow-primary-md)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                        View all locations
                        <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
