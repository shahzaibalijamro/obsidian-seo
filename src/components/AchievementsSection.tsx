import React from 'react';

export default function AchievementsSection() {
    return (
        <section className="py-24 relative -top-10 bg-mesh section-curve-top section-curve-bottom" id="achievements">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm uppercase tracking-wider">
                        Performance &amp; Recognition
                    </span>
                    <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                        Our Achievements
                    </h2>
                </div>

                {/* 1. Key Statistics & Client Satisfaction */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    <div className="glass-panel p-8 text-center border border-line-subtle">
                        <p className="font-display-lg text-4xl md:text-5xl text-gradient-indigo mb-2">99.9%</p>
                        <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs">Uptime SLA</p>
                    </div>
                    <div className="glass-panel p-8 text-center border border-line-subtle">
                        <p className="font-display-lg text-4xl md:text-5xl text-gradient-indigo mb-2">45%</p>
                        <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs">Avg. Conv. Increase</p>
                    </div>
                    <div className="glass-panel p-8 text-center border border-line-subtle">
                        <p className="font-display-lg text-4xl md:text-5xl text-gradient-indigo mb-2">&lt;0.5s</p>
                        <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs">Render Time</p>
                    </div>
                    <div className="glass-panel p-8 text-center border border-primary/20 bg-primary/5">
                        <p className="font-display-lg text-4xl md:text-5xl text-gradient-indigo mb-2">98%</p>
                        <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs">Client Retention</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* 2. Milestones & Awards */}
                    <div>
                        <h3 className="font-headline-md text-2xl text-on-surface mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">workspace_premium</span>
                            Milestones &amp; Awards
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-6 glass-panel border border-line-subtle">
                                <span className="font-body-lg text-on-surface">Global Design Award 2023</span>
                                <span className="font-label-md text-primary">Winner</span>
                            </div>
                            <div className="flex items-center justify-between p-6 glass-panel border border-line-subtle">
                                <span className="font-body-lg text-on-surface">10+ Years of Excellence</span>
                                <span className="font-label-md text-primary">Established 2014</span>
                            </div>
                            <div className="flex items-center justify-between p-6 glass-panel border border-line-subtle">
                                <span className="font-body-lg text-on-surface">500+ Projects Delivered</span>
                                <span className="font-label-md text-primary">Global Scale</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Certifications */}
                    <div>
                        <h3 className="font-headline-md text-2xl text-on-surface mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">verified</span>
                            Industry Certifications
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center border border-line-subtle">
                                <span className="material-symbols-outlined text-3xl text-primary mb-3">security</span>
                                <p className="font-label-md text-on-surface text-xs uppercase tracking-wider">ISO 27001</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">Data Security</p>
                            </div>
                            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center border border-line-subtle">
                                <span className="material-symbols-outlined text-3xl text-primary mb-3">partner_reports</span>
                                <p className="font-label-md text-on-surface text-xs uppercase tracking-wider">Google Partner</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">Marketing Excellence</p>
                            </div>
                            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center border border-line-subtle">
                                <span className="material-symbols-outlined text-3xl text-primary mb-3">cloud_done</span>
                                <p className="font-label-md text-on-surface text-xs uppercase tracking-wider">AWS Certified</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">Cloud Architecture</p>
                            </div>
                            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center border border-line-subtle">
                                <span className="material-symbols-outlined text-3xl text-primary mb-3">star</span>
                                <p className="font-label-md text-on-surface text-xs uppercase tracking-wider">4.9/5 Rating</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">Clutch &amp; G2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
