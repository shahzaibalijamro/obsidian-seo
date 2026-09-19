interface IndustriesSectionProps {
    badge?: string;
    title?: string;
    industries?: string[];
}

const defaultIndustries = [
    "FinTech",
    "SaaS",
    "Web3",
    "Enterprise",
    "Healthcare",
    "Finance",
    "Automotive",
    "E-commerce",
    "Real Estate",
    "AI & Data"
];

export default function IndustriesSection({
    badge,
    title = "Industries We Work With",
    industries = defaultIndustries
}: IndustriesSectionProps = {}) {
    return (
        <>

            <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding bg-mesh section-curve-top section-curve-bottom">
                <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                    <div className="text-center mb-16">
                        {badge && (
                            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                                {badge}
                            </span>
                        )}
                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                            {title}</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {industries.map((industry) => (
                            <div
                                key={industry}
                                className="glass-panel px-4 py-6 rounded-2xl text-center hover:bg-surface-variant/50 transition-colors cursor-default">
                                <p className="font-headline-md my-auto sm:text-lg text-body-md text-on-surface">{industry}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}
