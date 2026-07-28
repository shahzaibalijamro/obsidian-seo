import React from 'react';

export default function ValuesSection() {
    return (
        <section className="py-section-padding-mobile sm:py-section-padding relative -top-20 -z-1 bg-mesh section-curve-top section-curve-bottom overflow-hidden" id="values">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                        OUR VALUES
                    </span>
                    <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                        Our Values
                    </h2>
                    <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        Guided by a commitment to technical excellence and client success.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-2xl">lightbulb</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">Innovation</h3>
                        <p className="font-body-md text-on-surface-variant">Pioneering new frontiers in digital intelligence and technical architecture.</p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-2xl">groups</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">Collaboration</h3>
                        <p className="font-body-md text-on-surface-variant">Partnering deeply with your team to align technical execution with business objectives.</p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-2xl">verified</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">Integrity</h3>
                        <p className="font-body-md text-on-surface-variant">Uncompromising transparency in data modeling, reporting, and strategic advice.</p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-2xl">high_quality</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">Quality</h3>
                        <p className="font-body-md text-on-surface-variant">Precision-engineered solutions built for stability, performance, and scale.</p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-2xl">trending_up</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">Customer Success</h3>
                        <p className="font-body-md text-on-surface-variant">Measuring our impact through your growth and long-term market dominance.</p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-2xl">sync</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface mb-4">Continuous Improvement</h3>
                        <p className="font-body-md text-on-surface-variant">An iterative approach to optimization, ensuring your infrastructure evolves with the digital landscape.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
