import React from 'react';

export interface PerformanceItem {
    step: string;
    title: string;
    description: string;
}

export interface PerformanceSectionProps {
    badgeText?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    items?: PerformanceItem[];
}

export default function PerformanceSection({
    badgeText = "PERFORMANCE",
    title = "Paid Social Advertising",
    description = "Precision-targeted ad campaigns engineered for maximum ROI and scalable growth.",
    items = [
        {
            step: "01. Setup",
            title: "Campaign Architecture",
            description: "Strategic account structuring and pixel integration for flawless tracking."
        },
        {
            step: "02. Targeting",
            title: "Audience Intelligence",
            description: "Deep-dive persona mapping and lookalike modeling to reach high-intent users."
        },
        {
            step: "03. Creative",
            title: "Ad Optimization",
            description: "Continuous A/B testing of creative assets and copy to drive down CPA."
        },
        {
            step: "04. Scale",
            title: "ROI Tracking",
            description: "Real-time performance dashboards and iterative scaling of winning campaigns."
        }
    ]
}: PerformanceSectionProps) {
    return (
        <section className="py-section-padding-mobile sm:py-section-padding bg-mesh">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-20">
                    {badgeText && (
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                            {badgeText}
                        </span>
                    )}
                    <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                        {title}
                    </h2>
                    {description && (
                        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
                    {items.map((item, idx) => (
                        <div key={idx} className="p-8 border-l border-line hover:border-primary transition-colors group">
                            <h4 className="font-label-md text-primary mb-4 uppercase tracking-widest">{item.step}</h4>
                            <h3 className="font-headline-md text-xl md:min-h-14 text-on-surface mb-4">{item.title}</h3>
                            <p className="font-body-md text-on-surface-variant">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
