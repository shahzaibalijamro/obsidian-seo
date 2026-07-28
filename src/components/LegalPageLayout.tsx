"use client";
import { useEffect, useState, ReactNode } from "react";

export interface DirectoryLink {
    id: string;
    label: string;
}

interface LegalPageLayoutProps {
    title: string;
    description: string;
    lastUpdated: string;
    directoryLinks: DirectoryLink[];
    children: ReactNode;
}

export default function LegalPageLayout({
    title,
    description,
    lastUpdated,
    directoryLinks,
    children
}: LegalPageLayoutProps) {
    const [activeSection, setActiveSection] = useState(directoryLinks[0]?.id || "");

    useEffect(() => {
        const sections = document.querySelectorAll("article[id], section[id]");
        
        const observer = new IntersectionObserver((entries) => {
            const intersecting = entries.find(entry => entry.isIntersecting);
            if (intersecting) {
                setActiveSection(intersecting.target.id);
            }
        }, {
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0
        });

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <main className="flex-grow flex flex-col pt-32 pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10">
                {/* Hero Section */}
                <header className="mb-24 md:mb-32 relative">
                    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                    
                    <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary text-glow mb-6 tracking-tighter">
                        {title}
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                        {description}
                    </p>
                    <p className="font-label-md text-label-md text-on-surface-variant mt-8 uppercase tracking-widest opacity-80">
                        {lastUpdated}
                    </p>
                </header>

                {/* Content Structure */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative items-start">
                    
                    {/* Directory Sidebar (Sticky) */}
                    <aside className="md:col-span-3 hidden md:block sticky top-32 glass-panel rounded-xl p-8 h-max">
                        <h3 className="font-headline-md text-headline-md text-on-surface mb-6 pb-4 border-b border-line">Directory</h3>
                        <nav className="flex flex-col gap-4">
                            {directoryLinks.map((link) => (
                                <a 
                                    key={link.id}
                                    className={`font-label-md text-label-md hover:text-primary transition-colors pl-4 border-l-2 ${activeSection === link.id ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent'}`} 
                                    href={`#${link.id}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Legal Document Canvas */}
                    <div className="md:col-span-9 space-y-20">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
}
