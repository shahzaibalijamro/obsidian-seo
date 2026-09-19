"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface ServiceItem {
    icon: string;
    title: string;
    description: string;
    linkText?: string;
    linkHref?: string;
    colSpan?: string;
    showIconLeft?: boolean;
}

export interface ServicesSectionProps {
    badgeText?: string;
    title: React.ReactNode;
    description: string;
    services: ServiceItem[];
    theme?: 'light' | 'dark';
    page: string;
    footerAction?: {
        text: string;
        href?: string;
    };
}

export default function ServicesSection({
    page = "/",
    badgeText = "CAPABILITIES",
    title = "Our Services",
    description = "Precision-engineered services designed to scale your digital presence organically",
    theme = 'light',
    services = [
        {
            icon: "code",
            title: "Digital Platforms",
            description: "Bespoke web applications, fluid architectures, and robust APIs tailored for seamless enterprise performance.",
            linkText: "Learn More",
            linkHref: "#"
        },
        {
            icon: "trending_up",
            title: "SEO Dominance",
            description: "Data-driven organic search strategies designed to capture high-intent traffic and outrank competitors effortlessly.",
            linkText: "Learn More",
            linkHref: "#"
        },
        {
            icon: "ads_click",
            title: "Growth Marketing",
            description: "Highly targeted, ROI-focused campaigns across premium networks designed to scale acquisition smoothly.",
            linkText: "Learn More",
            linkHref: "#"
        },
        {
            icon: "edit_document",
            title: "Brand Narrative",
            description: "Authoritative, fluid content that establishes industry leadership and naturally engages high-value prospects.",
            linkText: "Learn More",
            linkHref: "#"
        }
    ],
    footerAction
}: ServicesSectionProps) {
    const bgClass = theme === 'dark' ? 'bg-mesh' : 'bg-mesh section-curve-top section-curve-bottom';

    return (
        <section className={`pt-section-padding-mobile sm:pt-section-padding pb-[calc(var(--spacing-section-padding-mobile)+10px)] sm:pb-[calc(var(--spacing-section-padding)+40px)] ${bgClass}`} id="services">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    {badgeText && (
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface-variant text-on-surface-variant font-label-md border border-line-subtle uppercase tracking-wider">
                            {badgeText}
                        </span>
                    )}
                    <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                        {title}
                    </h2>
                    <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">
                        {description}
                    </p>
                </motion.div>
                <div className={`grid grid-cols-1 md:grid-cols-2 ${page === "about" ? "lg:grid-cols-3" : "lg:grid-cols-4"} gap-8`}>
                    {services.map((service, idx) => {
                        const colSpanClass = service.colSpan ? `md:col-span-2 ${service.colSpan}` : '';
                        const bgClass = service.colSpan ? 'border-primary/20 bg-primary/5' : 'border-line-subtle';

                        return (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`glass-panel glass-panel-hover p-8 flex flex-col h-full rounded-3xl border ${bgClass} ${colSpanClass}`}
                            >
                                {service.showIconLeft ? (
                                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex-shrink-0 flex items-center justify-center text-primary border border-primary/20">
                                            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-headline-md text-xl text-on-surface mb-2">{service.title}</h3>
                                            <p className="font-body-md text-on-surface-variant">{service.description}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{service.icon}</span>
                                        </div>
                                        <h3 className="font-headline-md text-xl text-on-surface mb-4">{service.title}</h3>
                                        <p className="font-body-md text-on-surface-variant flex-grow mb-8">{service.description}</p>
                                        {service.linkText && service.linkHref && (
                                            <a className="font-label-md text-primary mt-auto flex items-center gap-2 hover:text-on-surface transition-colors" href={service.linkHref}>
                                                {service.linkText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </a>
                                        )}
                                        {service.linkText && !service.linkHref && (
                                            <span className="font-label-md text-on-surface-variant mt-auto flex items-center gap-2 opacity-60 cursor-not-allowed" aria-disabled="true">
                                                {service.linkText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </span>
                                        )}
                                    </>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
                {footerAction && (
                    <div className="mt-12 text-center">
                        {footerAction.href ? (
                            <a
                                className="inline-flex px-8 py-4 bg-inverse-primary text-on-accent font-label-md rounded-full items-center justify-center gap-2 hover:bg-primary hover:text-inverse-primary transition-all duration-300 shadow-[var(--glow-primary-md)]"
                                href={footerAction.href}
                            >
                                {footerAction.text}
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        ) : (
                            <button
                                type="button"
                                disabled
                                className="inline-flex px-8 py-4 bg-inverse-primary text-on-accent font-label-md rounded-full items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                            >
                                {footerAction.text}
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
