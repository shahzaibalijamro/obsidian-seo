export interface Stat {
    value: string;
    label: string;
}

export interface StatsSectionProps {
    stats?: Stat[];
}

export default function StatsSection({
    stats = [
        { value: "500+", label: "Projects Delivered" },
        { value: "12+", label: "Years Experience" },
        { value: "98%", label: "Client Retention" },
        { value: "250M+", label: "Revenue Generated" }
    ]
}: StatsSectionProps) {
    return (
        <section className="pt-24 pb-24 bg-mesh section-curve-top section-curve-bottom">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="glass-panel p-6 sm:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-gutter">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <p className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-gradient-indigo mb-3">
                                    {stat.value}
                                </p>
                                <p className="font-label-md text-on-surface-variant tracking-wider uppercase">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}