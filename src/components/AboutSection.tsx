import React from 'react';

export interface AboutSectionProps {
    badgeText?: string;
    title: React.ReactNode;
    paragraphs: string[];
    buttonText?: string;
    buttonHref?: string;
    imageSrc?: string;
    imageAlt?: string;
}

export default function AboutSection({
    badgeText = "OUR MISSION",
    title = (
        <>
            Crafting <span className="text-gradient-indigo">Excellence</span>
        </>
    ),
    paragraphs = [
        "At Obsidian Digital, we don't just build websites; we engineer fluid digital ecosystems designed for dominance. Our approach is rooted in a meticulous understanding of market dynamics, user psychology, and cutting-edge technology.",
        "We partner exclusively with ambitious brands, providing bespoke solutions that flow seamlessly across platforms. From enterprise-grade software architecture to high-converting SEO strategies, our elite team ensures every touchpoint reflects uncompromising quality."
    ],
    buttonText = "Explore Our Methodology",
    buttonHref = "#process",
    imageSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuA_hdaMLw3kvrwxmF_BeFe5ugUObf-zgGDa-sk8FbbECXYELSzNE3TIkZP_6FnzTe6pXTjVz0oNPd7R22A3qo0bTCjUsb4RTSfpM-EihABXmW586KzexAbluXFsJZJ60SHwwnajWG4Tewtf0IJOMUXmYB9cDGMHCxZhnKAOxmTWruqF-NNFmAVnyOn274h9t1A5glVzrvZUVqxa7gREnBiRJdiINtVE8-gFTZHB2nNYCq1fglygfe85rQnb6kYP7uey0QUeLooT9P4",
    imageAlt = "Abstract fluid glass"
}: AboutSectionProps) {
    return (
        <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[300px] sm:h-[600px] w-full rounded-3xl overflow-hidden glass-panel group p-2">
                        <img alt={imageAlt}
                            className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                            src={imageSrc} />
                    </div>
                    <div className="pl-0 lg:pl-12">
                        {badgeText && (
                            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface-variant text-on-surface-variant font-label-md border border-line-subtle">
                                {badgeText}
                            </span>
                        )}
                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-8">
                            {title}
                        </h2>
                        <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
                            {paragraphs.map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </div>
                        {buttonText && buttonHref && (
                            <a className="inline-block mt-10 px-8 py-4 border border-outline-variant rounded-full text-on-surface font-label-md hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                                href={buttonHref}>
                                {buttonText}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}