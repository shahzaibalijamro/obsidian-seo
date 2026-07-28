export default function ContactSection() {
    return (
        <>

            <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding relative overflow-hidden" id="contact">
                <div className="absolute inset-0 bg-mesh z-0"></div>
                <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                                Ready to <span className="text-gradient-indigo">Flow?</span></h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
                                Initiate a conversation with our strategy team. We take on a limited number of new partners
                                each quarter to ensure uncompromising focus.
                            </p>
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 py-2">
                                    <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                                    <p className="font-body-md text-on-surface">strategy@obsidiandigital.com</p>
                                </div>
                                <div className="flex items-center gap-4 py-2">
                                    <span className="material-symbols-outlined text-primary text-2xl">call</span>
                                    <p className="font-body-md text-on-surface">+44 (0) 20 7946 0958</p>
                                </div>
                                <div className="flex items-center gap-4 mt-8 ml-2"><a href="#"
                                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300">
                                    <span className="material-symbols-outlined">facebook</span>
                                </a>
                                    <a href="#"
                                        className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300">
                                        <span className="material-symbols-outlined">photo_camera</span>
                                    </a>
                                    <a href="#"
                                        className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300">
                                        <span className="material-symbols-outlined">work</span>
                                    </a>
                                    <a href="#"
                                        className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300">
                                        <span className="material-symbols-outlined">close</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="glass-panel px-6 py-10 sm:p-10 rounded-3xl">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-label-md text-on-surface-variant mb-2 ml-2"
                                            htmlFor="full-name">Full Name *</label>
                                        <input className="form-input-obsidian w-full text-body-md" id="full-name"
                                            placeholder="John Doe" type="text" required />
                                    </div>
                                    <div>
                                        <label className="block font-label-md text-on-surface-variant mb-2 ml-2"
                                            htmlFor="email-address">Email Address *</label>
                                        <input className="form-input-obsidian w-full text-body-md" id="email-address"
                                            placeholder="john@company.com" type="email" required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-label-md text-on-surface-variant mb-2 ml-2"
                                            htmlFor="phone-number">Phone Number</label>
                                        <input className="form-input-obsidian w-full text-body-md" id="phone-number"
                                            placeholder="+1 (555) 000-0000" type="tel" />
                                    </div>
                                    <div>
                                        <label className="block font-label-md text-on-surface-variant mb-2 ml-2"
                                            htmlFor="company-name">Company Name</label>
                                        <input className="form-input-obsidian w-full text-body-md" id="company-name"
                                            placeholder="Acme Corp" type="text" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-label-md text-on-surface-variant mb-2 ml-2"
                                        htmlFor="service-interest">Service Interested In</label>
                                    <select
                                        className="form-input-obsidian w-full text-body-md appearance-none bg-surface-variant/20"
                                        id="service-interest">
                                        <option value="" disabled defaultValue="">Select a service...</option>
                                        <option value="seo">SEO Dominance</option>
                                        <option value="web-dev">Web Development</option>
                                        <option value="sem">Growth Marketing (SEM)</option>
                                        <option value="content">Content Strategy</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-label-md text-on-surface-variant mb-2 ml-2"
                                        htmlFor="project-details">Project Details / Message</label>
                                    <textarea className="form-input-obsidian w-full text-body-md resize-none"
                                        id="project-details" placeholder="Tell us about your objectives..."
                                        rows={4}></textarea>
                                </div>
                                <div className="flex flex-col gap-4 pt-4">
                                    <button
                                        className="w-full py-4 bg-inverse-primary text-on-primary font-label-md rounded-xl hover:bg-primary hover:text-inverse-primary transition-all duration-300 shadow-lg"
                                        type="submit">
                                        Send Message
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}