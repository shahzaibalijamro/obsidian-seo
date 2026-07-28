import React from 'react';

export default function TechStackSection() {
    return (
        <section className="pt-[calc(var(--spacing-section-padding-mobile)+80px)] sm:pt-[calc(var(--spacing-section-padding)+80px)] relative -top-20 -z-1 pb-section-padding-mobile sm:pb-section-padding bg-mesh" id="tech-stack">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-10 sm:mb-20">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm uppercase tracking-wider">
                        Infrastructure
                    </span>
                    <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                        Tools &amp; Technologies
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="glass-panel p-8 border border-line-subtle">
                        <p className="font-label-md text-primary uppercase tracking-wider text-xs mb-6">Frontend</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">React</span>
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">Next.js</span>
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">Tailwind</span>
                        </div>
                    </div>
                    <div className="glass-panel p-8 border border-line-subtle">
                        <p className="font-label-md text-primary uppercase tracking-wider text-xs mb-6">Backend</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">Node.js</span>
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">Python</span>
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">PostgreSQL</span>
                        </div>
                    </div>
                    <div className="glass-panel p-8 border border-line-subtle">
                        <p className="font-label-md text-primary uppercase tracking-wider text-xs mb-6">AI/ML</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">PyTorch</span>
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">OpenAI</span>
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">TensorFlow</span>
                        </div>
                    </div>
                    <div className="glass-panel p-8 border border-line-subtle">
                        <p className="font-label-md text-primary uppercase tracking-wider text-xs mb-6">DevOps</p>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">AWS</span>
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">Docker</span>
                            <span className="px-3 py-1 bg-line-subtle rounded-full text-sm text-on-surface-variant">Vercel</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
