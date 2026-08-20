"use client";

import { motion } from 'framer-motion';

export default function CaseStudiesSection() {
    const caseStudies = [
        {
            category: "SAAS",
            title: "Nexus B2B Analytics",
            metric: "+350% Data Processing Speed",
            image: "/images/case-studies/saas_analytics.png"
        },
        {
            category: "FINTECH",
            title: "PayFlow Payment Gateway",
            metric: "$2B+ Monthly Volume",
            image: "/images/case-studies/fintech_app.png"
        },
        {
            category: "HEALTHCARE / AI",
            title: "VitaScan AI Diagnostics",
            metric: "99.8% Anomaly Detection",
            image: "/images/case-studies/ai_health.png"
        },
        {
            category: "E-COMMERCE",
            title: "ShopGenius Engine",
            metric: "+45% Cart Conversion Rate",
            image: "/images/case-studies/ecommerce_rec.png"
        },
        {
            category: "ENTERPRISE AI",
            title: "Synthetix NLP Assistant",
            metric: "-60% Support Ticket Volume",
            image: "/images/case-studies/nlp_assistant.png"
        },
        {
            category: "DEVOPS",
            title: "InfraScale Automation",
            metric: "99.999% Uptime SLA",
            image: "/images/case-studies/devops_dash.png"
        }
    ];

    return (
        <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding" id="case-studies">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-end mb-16"
                >
                    <div>
                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-4">
                            Featured Case Studies
                        </h2>
                        <p className="font-body-lg text-on-surface-variant">A snapshot of what we have built and the results it has produced.</p>
                    </div>
                    <a className="hidden md:flex font-label-md text-primary items-center gap-2 hover:text-on-surface transition-colors"
                        href="/case-studies">View All Work <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                </motion.div>
                
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    {caseStudies.map((study, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel mb-6 p-2 glass-panel-hover">
                                <img alt={`${study.title} preview`}
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                                    src={study.image} />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-label-md text-primary mb-2">{study.category}</p>
                                    <h3 className="font-headline-md text-2xl text-on-surface mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                                    <p className="font-body-md text-on-surface-variant">{study.metric}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center md:hidden"
                >
                    <a className="inline-flex font-label-md text-primary items-center gap-2 hover:text-on-surface transition-colors"
                        href="/case-studies">View All Work <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                </motion.div>
            </div>
        </section>
    );
}
