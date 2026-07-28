import React from 'react';

export default function TeamSection() {
    return (
        <section className="pt-section-padding-mobile sm:pt-section-padding pb-[calc(var(--spacing-section-padding-mobile)+40px)] sm:pb-[calc(var(--spacing-section-padding)+40px)] bg-mesh" id="meet-the-team">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-10 sm:mb-20">
                    <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm uppercase tracking-wider">
                        Leadership
                    </span>
                    <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                        Meet the Architects
                    </h2>
                    <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
                        The strategic minds engineering the future of digital authority.
                    </p>
                </div>
                <div className="grid text-center grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group">
                        <div className="glass-panel p-4 rounded-3xl border border-line-subtle mb-6 overflow-hidden">
                            <img alt="Elias Vance" className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLvkd8Z52OZZ2coeoNNnORZP_EMtFWbsvddfEDtwogKF2rm2rl6tBni2csg0Ye47y0fLtx-hM6zEzkGdOxzzlQdRi8jcVG5OUQQGGzAxPhZKHmqM6KqXc_MNniN1jM-pBv9R_8jHjdNxvr5nHbXc4c3zmpFVTMeRs_x-yMMpse1yo58o73BI3qAuwk5oe4jaOEcimbF-TL53mBrgSsfEMBXV39Qdh2UuFLEaDVfrOmlkX5yE3FfbRsKg54s" />
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface">Elias Vance</h3>
                        <p className="font-label-md text-primary uppercase tracking-wider text-xs mt-1">Founder &amp; CEO</p>
                    </div>
                    <div className="group">
                        <div className="glass-panel p-4 rounded-3xl border border-line-subtle mb-6 overflow-hidden">
                            <img alt="Sarah Chen" className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuUC_i19c2k5ycSrqlXH968_p_WUY5eltXTNNI5TvkYNnarr_gdEDN1FkO3129NdkC45aKu_vRds16BjjBptztRBg-8G8Rn0l8bREaR8yrbbSdWg9g546r-AAmuPKv8n6eQkBMT6fS_3fo1mVFg30wJeoSYpci-QpmzWrSR-45GwZ-xVXNCNoMlyaRce1Q4B8o6hOARb3aDAe9pUsTm3dGT6Slssom9p4cA3tGX9DCRn_jzjmY4yE-lQnSgTqXYfQWDkLjpsAvllg" />
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface">Sarah Chen</h3>
                        <p className="font-label-md text-primary uppercase tracking-wider text-xs mt-1">Senior Technical Strategist</p>
                    </div>
                    <div className="group">
                        <div className="glass-panel p-4 rounded-3xl border border-line-subtle mb-6 overflow-hidden">
                            <img alt="Marcus Thorne" className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5LVMavLSN2wBvpozbYlZdvFcDDWS5Pop7fIomU4eDcEq8ZaA5EyY-ssBmDYSSEykr5ais68HceZhKwFhMzp4hlzqFtSKAZJoU0jHzVm4jAiSYpqp0X_Sku7qnFsiPsu9u7ajflcuOi5h9gllqAFs0oD16kF0yV03rdSMzwIT4bFKLeGenpz7snICV2G3QlEVd9JoCbyaajrWDZK5QPc26nq-LLt6-OVjGN0VBRwqPR6ndyXHCNtKMCAcrYbxYFseE5PFXukvjiNM" />
                        </div>
                        <h3 className="font-headline-md text-xl text-on-surface">Marcus Thorne</h3>
                        <p className="font-label-md text-primary uppercase tracking-wider text-xs mt-1">Chief Technology Officer</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
