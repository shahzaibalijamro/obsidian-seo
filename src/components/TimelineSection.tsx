import React from 'react';

export default function TimelineSection() {
    return (
        <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding bg-mesh section-curve-top section-curve-bottom" id="timeline">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                        OUR JOURNEY
                    </span>
                    <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                        From Code to Command: The Evolution of Obsidian.
                    </h2>
                    <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
                        What began as a boutique technical SEO firm has evolved into a full-spectrum digital authority agency. We have consistently pushed the boundaries of what's possible at the intersection of infrastructure and intelligence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="text-primary font-display-lg text-2xl mb-4">2018</div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">The Genesis</h3>
                        <p className="font-body-md text-on-surface-variant">Founded as a technical SEO collective focused on infrastructure-level dominance.</p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="text-primary font-display-lg text-2xl mb-4">2020</div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">Intelligence Integration</h3>
                        <p className="font-body-md text-on-surface-variant">Expanded into AI-driven data modeling and predictive search analytics.</p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="text-primary font-display-lg text-2xl mb-4">2022</div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">Global Command</h3>
                        <p className="font-body-md text-on-surface-variant">Scaled operations to serve Tier-1 financial and tech enterprises across 3 continents.</p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-primary/20 bg-primary/5">
                        <div className="text-gradient-indigo font-display-lg text-2xl mb-4">2024</div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">The Nexus</h3>
                        <p className="font-body-md text-on-surface-variant">Launching the unified Obsidian Digital ecosystem, merging design brilliance with technical precision.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
