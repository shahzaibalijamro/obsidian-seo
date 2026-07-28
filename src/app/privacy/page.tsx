import LegalPageLayout from "@/components/LegalPageLayout";

export default function PrivacyPolicyPage() {
    const directoryLinks = [
        { id: "introduction", label: "1. Introduction" },
        { id: "collection", label: "2. Information Collection" },
        { id: "utilization", label: "3. Data Utilization" }, // Adding a 3rd missing from design for continuity
        { id: "security", label: "4. Security Infrastructure" },
        { id: "rights", label: "5. User Rights" }
    ];

    return (
        <LegalPageLayout
            title="Privacy Policy"
            description="Privacy Protocol &amp; Data Governance"
            lastUpdated="Effective Date: October 24, 2024"
            directoryLinks={directoryLinks}
        >
            {/* Section 1 */}
            <article className="scroll-mt-32" id="introduction">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 border-b border-outline-variant/30 pb-4">
                    <span className="text-primary font-bold">1.</span> Introduction
                </h2>
                <div className="prose-custom max-w-none font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    <p>
                        Obsidian Digital operates on a foundational principle of data sovereignty and zero-trust architecture. We view privacy not as a regulatory compliance checklist, but as a fundamental human right engineered into the core of our digital ecosystems. This protocol outlines our unyielding commitment to securing your digital footprint while maintaining the operational excellence required of a premium agency partner.
                    </p>
                </div>
            </article>

            {/* Section 2 */}
            <article className="scroll-mt-32" id="collection">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 border-b border-outline-variant/30 pb-4">
                    <span className="text-primary font-bold">2.</span> Information Collection
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                    We architect our data collection methodologies to be strictly purposeful and contextually relevant. Information is categorized into discrete operational tiers.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel p-8 rounded-xl transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>badge</span>
                            <h3 className="font-headline-md text-headline-md text-on-surface text-xl">Identity Assets</h3>
                        </div>
                        <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant list-disc list-inside">
                            <li>Professional nomenclatures</li>
                            <li>Corporate communication vectors</li>
                            <li>Authentication cryptographic hashes</li>
                            <li>Billing and transactional identifiers</li>
                        </ul>
                    </div>
                    <div className="glass-panel p-8 rounded-xl transition-all duration-300">
                        <div className="flex items-center space-x-4 mb-4">
                            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>router</span>
                            <h3 className="font-headline-md text-headline-md text-on-surface text-xl">Technical Telemetry</h3>
                        </div>
                        <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant list-disc list-inside">
                            <li>Network origin routing (IP)</li>
                            <li>Client environment specifications</li>
                            <li>Interaction event sequencing</li>
                            <li>Latency and performance metrics</li>
                        </ul>
                    </div>
                </div>
            </article>

            {/* Section 3 (Added missing placeholder to match directory) */}
            <article className="scroll-mt-32" id="utilization">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 border-b border-outline-variant/30 pb-4">
                    <span className="text-primary font-bold">3.</span> Data Utilization
                </h2>
                <div className="prose-custom max-w-none font-body-md text-body-md text-on-surface-variant">
                    <p>
                        Data collected is utilized strictly to deliver the agreed-upon services, enhance platform performance, and ensure rigorous security protocols. We do not participate in secondary data markets or unauthorized brokerages.
                    </p>
                </div>
            </article>

            {/* Section 4 */}
            <article className="scroll-mt-32" id="security">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 border-b border-outline-variant/30 pb-4">
                    <span className="text-primary font-bold">4.</span> Security Infrastructure
                </h2>
                <div className="mb-10 rounded-xl overflow-hidden glass-panel">
                    <img alt="Cybersecurity in the Modern Era" className="w-full h-auto object-cover opacity-90 mix-blend-lighten" src="https://lh3.googleusercontent.com/aida/AP1WRLuTjQJgEZ2nX-ADnlUt0gBNkpUicenoFa_ncMrR2NFSQxXIuUNg89MrHVNxUtA68D2qGVVUrxk4SOeEYzY7c_geb29CIYCW7DY36OKqRmanWptu4eFoFvN5Nr92okdSGIFWTGSN2Mx_nKiOz1B05d5S7wDhtoKleW0omTG1IKS0-JElA64LhADKzp2Cf3iAipEMcZ1tkcKfa6otrdU0XFwnqeW0CffaY3me6tjiIGx5oIQf3Piu7GtWW_A" />
                </div>
                <div className="glass-panel p-8 rounded-xl bg-surface-container-low/50">
                    <div className="flex items-start space-x-4">
                        <span className="material-symbols-outlined text-primary text-4xl mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>shield_lock</span>
                        <div>
                            <h3 className="font-headline-md text-headline-md text-on-surface text-2xl mb-4">Enterprise-Grade Protection</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                                Our infrastructure is designed to exceed standard industry compliance, utilizing advanced cryptographic protocols to ensure data integrity at rest and in transit.
                            </p>
                            <ul className="space-y-2 font-label-md text-label-md text-primary">
                                <li className="flex items-center"><span className="material-symbols-outlined text-sm mr-2">check_circle</span> SOC 2 Type II Certified Environments</li>
                                <li className="flex items-center"><span className="material-symbols-outlined text-sm mr-2">check_circle</span> AES-256 Symmetric Encryption</li>
                                <li className="flex items-center"><span className="material-symbols-outlined text-sm mr-2">check_circle</span> TLS 1.3 Transport Layer Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>

            {/* Section 5 */}
            <article className="scroll-mt-32 pb-24" id="rights">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 border-b border-outline-variant/30 pb-4">
                    <span className="text-primary font-bold">5.</span> User Rights
                </h2>
                <div className="prose-custom max-w-none font-body-md text-body-md text-on-surface-variant">
                    <p>
                        You retain full sovereignty over your data. Requests for data exportation, modification, or complete cryptographic deletion can be executed by contacting our Strategy division.
                    </p>
                </div>
            </article>

        </LegalPageLayout>
    );
}
