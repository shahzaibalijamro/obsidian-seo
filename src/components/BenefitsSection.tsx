import React from 'react';

export interface BenefitMetric {
    value: string;
    label: string;
}

export interface BenefitCard {
    icon: string;
    title: string;
    description: string;
    bullets?: string[];
    bulletColumns?: 1 | 2;
    metrics?: BenefitMetric[];
    note?: string;
    span?: boolean;
}

export interface BenefitsSectionProps {
    badgeText?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    cards?: BenefitCard[];
    columns?: 2 | 3;
}

export default function BenefitsSection({
    badgeText,
    title,
    description,
    cards = [],
    columns = 2
}: BenefitsSectionProps) {
    const gridClass = columns === 3
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8";
    const spanClass = columns === 3 ? "lg:col-span-3" : "md:col-span-2 lg:col-span-2";

    return (
        <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding bg-mesh section-curve-top">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-20">
                    {badgeText && (
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                            {badgeText}
                        </span>
                    )}
                    {title && (
                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
                <div className={gridClass}>
                    {cards.map((card, idx) => (
                        <div key={idx} className={`glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl ${card.span ? spanClass : ''}`}>
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                            </div>
                            <h3 className="font-headline-md text-xl text-on-surface mb-4">{card.title}</h3>
                            <p className="font-body-md text-on-surface-variant mb-6">{card.description}</p>
                            {card.bullets && card.bullets.length > 0 && (
                                <ul className={`font-body-md text-on-surface-variant text-sm ${card.bulletColumns === 2 ? 'grid grid-cols-2 gap-3' : 'space-y-3'}`}>
                                    {card.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {card.metrics && card.metrics.length > 0 && (
                                <>
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        {card.metrics.map((metric, mIdx) => (
                                            <div key={mIdx} className="p-3 bg-line-subtle rounded-xl">
                                                <p className="text-primary font-bold">{metric.value}</p>
                                                <p className="text-xs opacity-60">{metric.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {card.note && (
                                        <p className="mt-6 font-body-md text-on-surface-variant text-sm italic">{card.note}</p>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}