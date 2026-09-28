import type { Metadata } from "next";
import Link from "next/link";
import LocationCard from "@/components/LocationCard";
import { locationPages, upcomingLocations } from "@/data/locations";

export const metadata: Metadata = {
    title: "Locations We Serve in Saudi Arabia | Obsidian Digital",
    description: "Explore Obsidian Digital's Saudi service areas, including Riyadh, Jeddah, Dammam, Makkah, Madinah, and more.",
};

export default function LocationsPage() {
    return (
        <main>
            <section className="relative overflow-hidden bg-mesh pb-20 pt-36 sm:pb-24 sm:pt-44">
                <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-20 h-[460px] w-[460px] rounded-full bg-primary/10 blur-[100px]" />
                <div className="relative mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant">
                        <Link href="/" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">Home</Link>
                        <span aria-hidden="true" className="material-symbols-outlined text-base">chevron_right</span>
                        <span className="text-primary">Locations</span>
                    </nav>
                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-label-md text-sm text-primary">
                        <span aria-hidden="true" className="material-symbols-outlined text-base">location_on</span>
                        SAUDI ARABIA SERVICE AREAS
                    </span>
                    <h1 className="mb-6 max-w-3xl font-display-lg text-display-lg-mobile font-semibold leading-tight text-on-surface md:text-display-lg">
                        Our Service Areas <span className="text-gradient-indigo">Across Saudi Arabia</span>
                    </h1>
                    <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                        Explore our city pages to see how we help businesses make their services easier to find, understand, and use. More city guides are on the way.
                    </p>
                </div>
            </section>

            <section aria-labelledby="city-pages-heading" className="bg-surface-container-low py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <div className="mb-10 max-w-2xl">
                        <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">EXPLORE BY CITY</p>
                        <h2 id="city-pages-heading" className="mb-4 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">City pages</h2>
                        <p className="text-base leading-7 text-on-surface-variant sm:text-body-lg">Each guide introduces our approach to serving businesses in that city.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
                        {locationPages.map((location, index) => (
                            <LocationCard
                                key={location.slug}
                                location={location}
                                number={index + 1}
                                className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="upcoming-cities-heading" className="border-t border-line-subtle bg-surface py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <div className="mb-10 max-w-2xl">
                        <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">MORE SERVICE AREAS</p>
                        <h2 id="upcoming-cities-heading" className="mb-4 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">City pages coming soon</h2>
                        <p className="text-base leading-7 text-on-surface-variant sm:text-body-lg">Dedicated pages for these cities are being prepared.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {upcomingLocations.map((city) => (
                            <div key={city} className="flex min-h-44 flex-col justify-between rounded-[1.75rem] border border-line bg-surface-container-low p-7 sm:p-8">
                                <span aria-hidden="true" className="material-symbols-outlined text-2xl text-primary/60">location_on</span>
                                <div className="mt-7 flex flex-wrap items-end justify-between gap-3">
                                    <h3 className="font-display-lg text-2xl font-semibold text-on-surface">{city}</h3>
                                    <span className="rounded-full border border-line bg-surface px-3 py-1.5 font-label-md text-xs text-on-surface-variant">City page coming soon</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
