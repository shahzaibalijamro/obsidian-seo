import React from 'react';

export default function MissionVisionSection() {
    return (
        <section className="pt-[calc(var(--spacing-section-padding-mobile)+40px)] sm:pt-[calc(var(--spacing-section-padding)+40px)] pb-[calc(var(--spacing-section-padding-mobile)+40px)] sm:pb-[calc(var(--spacing-section-padding)+40px)] relative -top-10 -z-1 bg-mesh" id="mission-vision">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm uppercase tracking-wider">
                        Our Purpose
                    </span>
                    <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                        Mission &amp; Vision
                    </h2>
                    <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
                        Architecting the standards of digital authority through technical precision and strategic foresight.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="glass-panel glass-panel-hover p-8 sm:p-10  flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/20">
                            <span className="material-symbols-outlined">rocket_launch</span>
                        </div>
                        <h3 className="font-headline-md text-2xl text-on-surface mb-4">Our Mission</h3>
                        <p className="font-body-lg text-on-surface-variant leading-relaxed">
                            To engineer high-performance digital ecosystems that empower brands to dominate their digital landscape through precision, data-driven authority, and technical superiority.
                        </p>
                    </div>
                    <div className="glass-panel glass-panel-hover p-8 sm:p-10  flex flex-col h-full rounded-3xl border border-line-subtle">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/20">
                            <span className="material-symbols-outlined">visibility</span>
                        </div>
                        <h3 className="font-headline-md text-2xl text-on-surface mb-4">Our Vision</h3>
                        <p className="font-body-lg text-on-surface-variant leading-relaxed">
                            To be the global benchmark for digital technical excellence, where aesthetic brilliance meets architectural dominance.
                        </p>
                    </div>
                </div>
                <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-primary/20 bg-primary/5 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="font-label-md text-primary uppercase tracking-widest mb-4">Our Commitment</h3>
                        <p className="font-display-lg text-2xl md:text-3xl text-on-surface leading-tight">
                            Our unwavering commitment to delivering digital solutions that transcend standard optimization and establish unbreakable market dominance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
