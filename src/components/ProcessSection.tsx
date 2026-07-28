export interface ProcessStep {
    number: string;
    icon: string;
    title: string;
    description: string;
    span?: Boolean
}

export interface ProcessSectionProps {
    badgeText?: string;
    title: React.ReactNode;
    description: string;
    steps: ProcessStep[];
    layout?: "flat" | "up-down"
}

export default function ProcessSection({
    badgeText = "METHODOLOGY",
    title = "Our Process",
    layout = "flat",
    description = "A seamless, iterative approach to digital transformation, engineered for precision and scale.",
    steps = [
        {
            number: "01",
            icon: "search",
            title: "Discovery",
            description: "Deep dive into your brand, audience, and objectives to define a fluid strategy."
        },
        {
            number: "02",
            icon: "architecture",
            title: "Architecture",
            description: "Drafting the structural blueprint and user journeys for seamless interaction."
        },
        {
            number: "03",
            icon: "auto_awesome",
            title: "Creation",
            description: "Fluid design and agile development bringing the vision to life."
        },
        {
            number: "04",
            icon: "rocket_launch",
            title: "Evolution",
            description: "Continuous optimization and scaling post-launch for sustained growth."
        }
    ]
}: ProcessSectionProps) {
    return (
        <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding -top-10 relative bg-mesh section-curve-top section-curve-bottom overflow-hidden" id="process">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
                    <div>
                        {badgeText && (
                            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                                {badgeText}
                            </span>
                        )}
                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                            {title}
                        </h2>
                        <p className="font-body-lg text-on-surface-variant max-w-xl">
                            {description}
                        </p>
                    </div>
                    <div className="hidden lg:flex justify-end">
                        <div className="w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center animate-pulse">
                            <span className="material-symbols-outlined text-primary text-4xl">cyclone</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0">
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`group relative ${step.span && 'md:col-span-2'} ${idx % 2 && layout !== "flat" ? 'lg:mt-12' : ''}`}>
                                <div className="glass-panel p-8 sm:p-10 h-full flex flex-col transition-all duration-500 hover:bg-primary/5 hover:border-primary/30">
                                    <div className="relative mb-12">
                                        <span className="text-6xl font-display-lg font-bold text-on-surface/[0.03] absolute -top-6 -left-4 group-hover:text-primary/10 transition-colors duration-500">
                                            {step.number}
                                        </span>
                                        <div className="w-14 h-14 rounded-2xl bg-surface-variant flex items-center justify-center text-primary border border-line-subtle group-hover:scale-110 transition-transform duration-500">
                                            <span className="material-symbols-outlined">{step.icon}</span>
                                        </div>
                                    </div>
                                    <h3 className="font-headline-md text-2xl md:min-h-16 text-on-surface mb-4">{step.title}</h3>
                                    <p className="font-body-md text-on-surface-variant">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}