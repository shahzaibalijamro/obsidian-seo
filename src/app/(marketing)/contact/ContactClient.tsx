"use client";

import { useState } from "react";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    service: formData.service,
                    message: `[Phone: ${formData.phone || "N/A"}] [Budget: ${formData.budget || "N/A"}] [Timeline: ${formData.timeline || "N/A"}]\n\n${formData.message}`,
                }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    budget: "",
                    timeline: "",
                    message: ""
                });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("idle");
                alert("Failed to submit inquiry. Please try again or email us directly at contact@nawadigital.me");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("idle");
            alert("An error occurred. Please contact us at contact@nawadigital.me");
        }
    };

    return (
        <>
            <main className="">
                {/* 1. Hero / Get in Touch Section */}
                <HeroSection
                    badgeText="GET IN TOUCH"
                    title={
                        <>
                            Initiate Your <br className="hidden md:block" /><span className="text-gradient-indigo">Growth Analysis</span>
                        </>
                    }
                    description="Secure your competitive advantage. Request a preliminary architectural review of your digital presence and discuss your upcoming projects with our experts."
                    buttons={[]}
                />

                {/* 2 & 3. Contact Grid */}
                <section id="contact-form" className="w-full px-margin-mobile md:px-margin-desktop mt-16 py-12 pb-section-padding-mobile sm:pb-section-padding bg-mesh section-curve-top section-curve-bottom">
                    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <div className="glass-panel p-8 md:p-12 h-full">
                                <h2 className="font-headline-md text-headline-md text-on-surface mb-8">Direct Inquiry</h2>

                                {status === "success" ? (
                                    <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl text-center">
                                        <span className="material-symbols-outlined text-primary text-4xl mb-4">check_circle</span>
                                        <h3 className="font-headline-md text-xl text-on-surface mb-2">Request Received</h3>
                                        <p className="font-body-md text-on-surface-variant">Thank you for reaching out. One of our senior architects will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="name">Full Name *</label>
                                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input-Nawa w-full text-body-md" placeholder="John Doe" required />
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="email">Corporate Email *</label>
                                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input-Nawa w-full text-body-md" placeholder="john@company.com" required />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="phone">Phone Number</label>
                                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input-Nawa w-full text-body-md" placeholder="+1 (555) 000-0000" />
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="company">Company Name</label>
                                                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="form-input-Nawa w-full text-body-md" placeholder="Acme Corp" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="service">Primary Interest *</label>
                                                <select id="service" name="service" value={formData.service} onChange={handleChange} className="form-input-Nawa w-full text-body-md appearance-none bg-surface-variant/20" required>
                                                    <option value="" disabled>Select Primary Interest...</option>
                                                    <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                                                    <option value="Search Engine Marketing (SEM)">Search Engine Marketing (SEM)</option>
                                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                                    <option value="Social Media Management">Social Media Management</option>
                                                    <option value="Content Marketing">Content Marketing</option>
                                                    <option value="Content Writing">Content Writing</option>
                                                    <option value="Email Marketing">Email Marketing</option>
                                                    <option value="Influencer Marketing">Influencer Marketing</option>
                                                    <option value="Online Reputation Management">Online Reputation Management</option>
                                                    <option value="Conversion Rate Optimization (CRO)">Conversion Rate Optimization (CRO)</option>
                                                    <option value="AI Integration">AI Integration</option>
                                                    <option value="AI Agents & Chatbots">AI Agents & Chatbots</option>
                                                    <option value="Business Automation">Business Automation</option>
                                                    <option value="Custom AI Solutions">Custom AI Solutions</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="WordPress Development">WordPress Development</option>
                                                    <option value="Software Development">Software Development</option>
                                                    <option value="App Development">App Development</option>
                                                    <option value="Shopify / E-commerce Development">Shopify / E-commerce Development</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="budget">Project Budget</label>
                                                <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="form-input-Nawa w-full text-body-md appearance-none bg-surface-variant/20">
                                                    <option value="" disabled>Select Budget Range...</option>
                                                    <option value="50k-100k">$50k - $100k</option>
                                                    <option value="100k-250k">$100k - $250k</option>
                                                    <option value="250k+">$250k+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="timeline">Expected Timeline</label>
                                            <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="form-input-Nawa w-full text-body-md appearance-none bg-surface-variant/20">
                                                <option value="" disabled>Select Timeline...</option>
                                                <option value="immediate">Immediate</option>
                                                <option value="1-3-months">1-3 Months</option>
                                                <option value="3-6-months">3-6 Months</option>
                                                <option value="planning">Planning Phase</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block font-label-md text-on-surface-variant mb-2 ml-2" htmlFor="message">Project Details</label>
                                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="form-input-Nawa w-full text-body-md resize-none" placeholder="Tell us about your objectives..." required></textarea>
                                        </div>
                                        <button type="submit" disabled={status === "submitting"} className="w-full bg-inverse-primary hover:bg-accent text-on-primary font-label-md text-label-md py-4 rounded-xl uppercase tracking-widest transition-all duration-300 shadow-[var(--glow-primary-md)] hover:shadow-[var(--glow-primary-lg)] border border-accent/30 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2">
                                            {status === "submitting" ? (
                                                <>
                                                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                                    Transmitting...
                                                </>
                                            ) : (
                                                "Transmit Request"
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                        {/* Info Column */}
                        <div className="lg:col-span-5 flex flex-col gap-gutter">
                            {/* Contact Details Card */}
                            <div className="glass-panel p-8 md:p-12 flex-grow">
                                <h3 className="font-headline-md text-headline-md text-on-surface mb-8">Direct Contact</h3>
                                <div className="space-y-8">
                                    {/* Direct Channels */}
                                    <div className="space-y-6">
                                        <a href="mailto:contact@nawadigital.me" className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                                            </div>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Email</p>
                                                <p className="font-body-lg text-body-lg text-on-surface group-hover:text-primary transition-colors break-all">contact@nawadigital.me</p>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                                            </div>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Working Hours</p>
                                                <p className="font-body-lg text-body-lg text-on-surface">Sunday – Thursday (9:00 AM – 6:00 PM AST)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                                            </div>
                                            <div>
                                                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Response Time</p>
                                                <p className="font-body-lg text-body-lg text-on-surface">&lt; 24 Hours</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Why Contact Us Section */}
                <section className="py-[calc(var(--spacing-section-padding-mobile)+40px)] sm:py-[calc(var(--spacing-section-padding)+40px)] -top-10 relative -z-1 bg-mesh" id="why-contact-us">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm uppercase tracking-wider">Partner With Us</span>
                            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">Why Reach Out?</h2>
                            <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto">We combine deep technical mastery with a customer-centric approach to deliver irrefutable digital authority for the world's most ambitious brands.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full border border-primary/20 bg-primary/5">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                    <span className="material-symbols-outlined text-2xl">architecture</span>
                                </div>
                                <h3 className="font-headline-md text-xl text-on-surface mb-4">Expert Consultation</h3>
                                <p className="font-body-md text-on-surface-variant">Engage with our senior architects to dissect your digital challenges and uncover hidden growth vectors.</p>
                            </div>
                            <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full border border-primary/20 bg-primary/5">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                    <span className="material-symbols-outlined text-2xl">settings_suggest</span>
                                </div>
                                <h3 className="font-headline-md text-xl text-on-surface mb-4">Custom Solutions</h3>
                                <p className="font-body-md text-on-surface-variant">Receive bespoke technical and strategic recommendations engineered specifically for your market position.</p>
                            </div>
                            <div className="glass-panel glass-panel-hover p-8 flex flex-col h-full border border-primary/20 bg-primary/5">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary border border-primary/20">
                                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                                </div>
                                <h3 className="font-headline-md text-xl text-on-surface mb-4">Dedicated Support</h3>
                                <p className="font-body-md text-on-surface-variant">Experience unwavering commitment from initial inquiry through deployment and continuous optimization.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FAQ Section */}
                <div className="-top-20 relative">
                    <FAQSection />
                </div>

                {/* 7. Final CTA Section */}
                <div className="">
                    <CTASection buttonText="Schedule a Free Strategy Session" buttonHref="#contact-form" />
                </div>

            </main>
        </>
    );
}
