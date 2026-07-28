import LegalPageLayout from "@/components/LegalPageLayout";

export default function TermsPage() {
    const directoryLinks = [
        { id: "acceptance", label: "1. Acceptance of Terms" },
        { id: "scope", label: "2. Scope of Services" },
        { id: "ip", label: "3. Intellectual Property Rights" },
        { id: "obligations", label: "4. User Obligations & Conduct" },
        { id: "liability", label: "5. Limitation of Liability" },
        { id: "termination", label: "6. Termination of Protocol" },
        { id: "jurisdiction", label: "7. Governing Law & Jurisdiction" }
    ];

    return (
        <LegalPageLayout
            title="Terms of Service"
            description="This document sets forth the governing principles, operational protocols, and legal boundaries defining your engagement with Obsidian Digital. By accessing our infrastructure, you agree to abide by these mandates."
            lastUpdated="Effective Date: October 24, 2024"
            directoryLinks={directoryLinks}
        >
            {/* Section 1 */}
            <article className="scroll-mt-32" id="acceptance">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 flex items-center gap-4">
                    <span className="text-primary font-bold">01.</span> Acceptance of Terms
                </h2>
                <div className="glass-panel p-8 rounded-xl bg-surface-container/30">
                    <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        By establishing a connection to Obsidian Digital's digital properties, services, or communication channels, you unequivocally agree to adhere to these Terms of Service. This agreement constitutes a legally binding contract between you (the "Client" or "User") and Obsidian Digital.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        If you do not concur with any fragment of these terms, you must immediately sever connection and cease use of all affiliated assets.
                    </p>
                </div>
            </article>

            {/* Section 2 */}
            <article className="scroll-mt-32" id="scope">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 flex items-center gap-4">
                    <span className="text-primary font-bold">02.</span> Scope of Services
                </h2>
                <div className="prose-custom max-w-none">
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                        Obsidian Digital provides high-tier digital strategy, UI/UX architecture, and specialized technological execution (the "Services"). The precise parameters of any engagement are dictated by independent Statements of Work (SOWs) or formal proposals.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md text-on-surface-variant">
                        <li>Services are delivered strictly within the bounds defined in formalized agreements.</li>
                        <li>Modification of scope requires explicit, documented mutual consent.</li>
                        <li>We reserve the right to refine or deprecate operational methodologies without prior notice, provided deliverables meet contracted standards.</li>
                    </ul>
                </div>
            </article>

            {/* Section 3 */}
            <article className="scroll-mt-32" id="ip">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 flex items-center gap-4">
                    <span className="text-primary font-bold">03.</span> Intellectual Property Rights
                </h2>
                <div className="glass-panel p-8 rounded-xl border-l-4 border-l-secondary bg-surface-container/30">
                    <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                        All conceptual frameworks, source code architectures, visual assets, and strategic methodologies developed by Obsidian Digital remain our exclusive intellectual property until explicit transfer of rights is executed upon full settlement of associated invoices.
                    </p>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                        Pre-existing IP utilized during an engagement remains the property of its respective owner. You are granted a limited, non-exclusive license to utilize deliverables strictly for their intended purpose.
                    </p>
                </div>
            </article>

            {/* Section 4 */}
            <article className="scroll-mt-32" id="obligations">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 flex items-center gap-4">
                    <span className="text-primary font-bold">04.</span> User Obligations &amp; Conduct
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    You agree to interact with our systems and personnel adhering to the highest professional standards. Prohibited actions include, but are not limited to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass-panel p-6 rounded-lg bg-surface-container/30">
                        <span className="material-symbols-outlined text-error mb-4 text-3xl">gpp_bad</span>
                        <h4 className="font-label-md text-label-md text-on-surface mb-2">System Integrity</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Attempting to breach, probe, or compromise our infrastructure or data repositories.</p>
                    </div>
                    <div className="glass-panel p-6 rounded-lg bg-surface-container/30">
                        <span className="material-symbols-outlined text-error mb-4 text-3xl">content_copy</span>
                        <h4 className="font-label-md text-label-md text-on-surface mb-2">Asset Misappropriation</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Unauthorized replication or distribution of Obsidian Digital's proprietary content or UI methodologies.</p>
                    </div>
                </div>
            </article>

            {/* Section 5 */}
            <article className="scroll-mt-32" id="liability">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 flex items-center gap-4">
                    <span className="text-primary font-bold">05.</span> Limitation of Liability
                </h2>
                <div className="bg-surface-container-highest p-8 rounded-xl">
                    <p className="font-body-md text-body-md text-on-surface-variant italic">
                        To the maximum extent permitted by applicable law, Obsidian Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or operational continuity, resulting from your use of or inability to utilize our services.
                    </p>
                </div>
            </article>

            {/* Section 6 */}
            <article className="scroll-mt-32" id="termination">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 flex items-center gap-4">
                    <span className="text-primary font-bold">06.</span> Termination of Protocol
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    We reserve the right to immediately suspend or terminate your access to our services, without prior notice, should you violate these Terms of Service. Upon termination, all outstanding obligations and intellectual property protections remain enforced.
                </p>
            </article>

            {/* Section 7 */}
            <article className="scroll-mt-32 pb-24" id="jurisdiction">
                <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 flex items-center gap-4">
                    <span className="text-primary font-bold">07.</span> Governing Law &amp; Jurisdiction
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                    These terms are governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes arising from these protocols shall be subject to the exclusive jurisdiction of the courts located within that territory.
                </p>
            </article>
        </LegalPageLayout>
    );
}
