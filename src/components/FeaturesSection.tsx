import React from 'react';

export interface Feature {
    icon: string;
    title: string;
    description?: string;
    bullets?: string[];
    logos?: { src: string; alt: string }[];
}

export interface FeaturesSectionProps {
    badgeText?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    features?: Feature[];
    columns?: 3 | 4;
    centerAlign?: boolean;
}

export default function FeaturesSection({
    badgeText,
    title = "Why Choose Our Digital Agency",
    description = "We deliver bespoke technology solutions that drive business growth. Our expertise spans custom software development, high-performance web development services, and result-oriented digital marketing solutions designed for the modern enterprise.",
    columns = 3,
    centerAlign = false,
    features = [
        {
            icon: "groups",
            title: "Expert Software Development Team",
            description: "A dedicated group of senior engineers building robust, scalable architectures for complex business needs."
        },
        {
            icon: "settings_suggest",
            title: "Custom Digital Solutions",
            description: "Tailored strategies and products that solve unique challenges and create competitive advantages in your industry."
        },
        {
            icon: "ads_click",
            title: "Result-Driven Digital Marketing Services",
            description: "Data-backed campaigns focused on measurable KPIs, lead generation, and maximizing your digital ROI."
        },
        {
            icon: "rocket_launch",
            title: "Modern Technology & Innovation",
            description: "Leveraging the latest in AI, cloud-native infrastructure, and emerging tech to keep your business ahead of the curve."
        },
        {
            icon: "devices",
            title: "Scalable Web Development Services",
            description: "Future-proof web applications designed for speed, security, and seamless user experiences across all devices."
        },
        {
            icon: "support_agent",
            title: "Reliable Long-Term Support",
            description: "Beyond the launch, we provide continuous optimization and dedicated maintenance to ensure your digital ecosystem thrives."
        }
    ]
}: FeaturesSectionProps) {
    const gridClass = columns === 4
        ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

    return (
        <section className="py-section-padding-mobile sm:py-section-padding">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-16">
                    {badgeText && (
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface-variant text-on-surface-variant font-label-md border border-line-subtle">
                            {badgeText}
                        </span>
                    )}
                    <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                        {title}
                    </h2>
                    {description && (
                        <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
                <div className={gridClass}>
                    {features.map((feature, idx) => (
                        <div key={idx} className={`glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl ${centerAlign ? 'items-center text-center' : ''}`}>
                            <div className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/20 ${centerAlign ? 'w-14 h-14 rounded-2xl' : ''}`}>
                                <span className={`material-symbols-outlined ${centerAlign ? 'text-2xl' : ''}`}>{feature.icon}</span>
                            </div>
                            <h3 className="font-headline-md text-xl text-on-surface mb-3">{feature.title}</h3>
                            {feature.description && (
                                <p className={`font-body-md text-on-surface-variant ${centerAlign ? 'text-sm' : ''} ${feature.bullets || feature.logos ? 'mb-6' : ''}`}>{feature.description}</p>
                            )}
                            {feature.logos && feature.logos.length > 0 && (
                                <div className="flex flex-wrap gap-4 mt-4 items-center">
                                    {feature.logos.map((logo, lIdx) => (
                                        <div key={lIdx} className="w-12 h-12 bg-surface rounded-lg border border-line-subtle flex items-center justify-center p-2 tooltip-container relative group">
                                            <img src={`/${logo.src}`} alt={logo.alt} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" title={logo.alt} />
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-surface-variant text-on-surface-variant text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10 border border-line-subtle">
                                                {logo.alt}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {feature.bullets && feature.bullets.length > 0 && (
                                <ul className="space-y-3 font-body-md text-on-surface-variant text-sm mt-auto">
                                    {feature.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}