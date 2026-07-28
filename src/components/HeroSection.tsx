"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface HeroButton {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
    icon?: string;
}

export interface HeroSectionProps {
    badgeText?: string;
    title: React.ReactNode;
    description: string;
    buttons: HeroButton[];
}

export default function HeroSection({
    badgeText = "PREMIUM DIGITAL AGENCY",
    title = (
        <>
            Elevating Digital Landscapes Through <span className="text-gradient-indigo">Strategic Innovation And Design</span>
        </>
    ),
    description = "We forge sophisticated digital experiences for industry leaders. Melding visionary strategy with flawless execution, we engineer growth for elite brands in a complex digital ecosystem.",
    buttons = [
        { text: "Our Services", href: "#services", variant: "primary", icon: "arrow_forward" },
        { text: "Free Consultation", href: "#contact", variant: "secondary" }
    ]
}: Partial<HeroSectionProps>) {
    return (
        <section className="relative pt-[calc(var(--spacing-section-padding-mobile)+30px)] sm:pt-[calc(var(--spacing-section-padding)+30px)] pb-section-padding-mobile  sm:pb-section-padding min-h-[90dvh] flex items-center overflow-hidden section-curve-bottom bg-mesh">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none menu-orb"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-inverse-primary/20 rounded-full blur-[120px] pointer-events-none menu-orb"></div>
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop relative z-10 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center max-w-6xl mx-auto"
                >
                    {badgeText && (
                        <motion.span 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm"
                        >
                            {badgeText}
                        </motion.span>
                    )}
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="font-display-lg font-semibold text-display-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight"
                    >
                        {title}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-3xl mx-auto"
                    >
                        {description}
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        {buttons.map((btn, idx) => (
                            <a
                                key={idx}
                                href={btn.href}
                                className={
                                    btn.variant === 'primary'
                                        ? "px-8 py-4 bg-inverse-primary text-on-accent font-label-md rounded-full text-center hover:bg-primary hover:text-inverse-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-[var(--glow-primary-md)]"
                                        : "px-8 py-4 border border-outline-variant text-on-surface font-label-md rounded-full text-center hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                                }
                            >
                                {btn.text} {btn.icon && <span className="material-symbols-outlined text-sm">{btn.icon}</span>}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}