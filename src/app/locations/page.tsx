import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import LocationCard from "@/components/LocationCard";
import LocationCarousel from "@/components/LocationCarousel";
import { locationPages } from "@/data/locations";

export const metadata: Metadata = {
    title: "Locations We Serve in Saudi Arabia | Nawa Digital",
    description: "Explore Nawa Digital's Saudi service areas, including Riyadh, Jeddah, Dammam, Makkah, Madinah, and more.",
};

export default function LocationsPage() {
    return (
        <main>
            <HeroSection
                badgeText="SAUDI ARABIA SERVICE AREAS"
                title={
                    <>
                        Our Service Areas <span className="text-gradient-indigo">Across Saudi Arabia</span>
                    </>
                }
                description="Explore all eleven city guides to see how we help businesses make their services easier to find, understand, and use."
                buttons={[]}
            />

            <section aria-labelledby="city-pages-heading" className="bg-surface-container-low py-section-padding-mobile sm:py-section-padding">
                <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                    <div className="mb-10 max-w-2xl">
                        <p className="mb-4 font-label-md text-sm uppercase tracking-widest text-primary">EXPLORE BY CITY</p>
                        <h2 id="city-pages-heading" className="mb-4 font-display-lg text-headline-lg-mobile text-on-surface sm:text-headline-lg">City pages</h2>
                        <p className="text-base leading-7 text-on-surface-variant sm:text-body-lg">Each guide introduces our approach to serving businesses in that city.</p>
                    </div>
                    <LocationCarousel label="Saudi city pages">
                        {locationPages.map((location, index) => (
                            <LocationCard
                                key={location.slug}
                                location={location}
                                number={index + 1}
                                className="w-full"
                            />
                        ))}
                    </LocationCarousel>
                </div>
            </section>
        </main>
    );
}
