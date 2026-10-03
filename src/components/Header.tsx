"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type NavItem = { label: string; href?: string };
type MenuName = "services" | "locations" | "industries";

const serviceGroups: { title: string; items: NavItem[] }[] = [
    { title: "Marketing", items: [
        { label: "SEO", href: "/services/seo" },
        { label: "Search Engine Marketing", href: "/services/sem" },
        { label: "Social Media Marketing", href: "/services/social-media-marketing" },
        { label: "Social Media Management", href: "/services/social-media-management" },
        { label: "Email Marketing", href: "/services/email-marketing" }, { label: "Influencer Marketing", href: "/services/influencer-marketing" },
        { label: "Online Reputation Management", href: "/services/online-reputation-management" }, { label: "Conversion Rate Optimization (CRO)", href: "/services/conversion-rate-optimization" },
    ] },
    { title: "Content", items: [
        { label: "Content Writing", href: "/services/content-writing" }, { label: "Content Marketing", href: "/services/content-marketing" }
    ] },
    { title: "Automation", items: [
        { label: "AI Integration", href: "/services/ai-integration" }, { label: "AI Agents", href: "/services/ai-agents" },
        { label: "AI Chatbots", href: "/services/ai-chatbots" }, { label: "Business Automation", href: "/services/business-automation" },
        { label: "Custom AI Solutions", href: "/services/custom-ai-solutions" },
    ] },
    { title: "Development", items: [
        { label: "Web Development", href: "/services/web-development" }, { label: "Software Development", href: "/services/software-development" },
        { label: "App Development", href: "/services/app-development" }, { label: "WordPress Development", href: "/services/wordpress-development" },
        { label: "Shopify / E-commerce Development", href: "/services/shopify-ecommerce-development" }
    ] },
];

const locations: NavItem[] = [
    { label: "Riyadh", href: "/locations/riyadh" },
    { label: "Jeddah", href: "/locations/jeddah" },
    { label: "Dammam", href: "/locations/dammam" },
    { label: "Makkah", href: "/locations/makkah" },
    { label: "Madinah", href: "/locations/madinah" },
    { label: "Khobar", href: "/locations/khobar" }, { label: "Jubail", href: "/locations/jubail" }, { label: "Tabuk", href: "/locations/tabuk" },
    { label: "Taif", href: "/locations/taif" }, { label: "Abha", href: "/locations/abha" }, { label: "Buraydah", href: "/locations/buraydah" },
];
const industries: NavItem[] = [
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Healthcare & Clinics", href: "/industries/healthcare-clinics" },
    { label: "Restaurants & Food & Beverage", href: "/industries/restaurants-food-beverage" },
    { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
    { label: "Hospitality & Hotels", href: "/industries/hospitality-hotels" },
    { label: "Travel & Tourism", href: "/industries/travel-tourism" },
    { label: "Automotive", href: "/industries/automotive" },
    { label: "Education", href: "/industries/education" },
    { label: "Beauty, Salons & Spas", href: "/industries/beauty-salons-spas" },
    { label: "Legal Services", href: "/industries/legal-services" },
    { label: "Construction & Engineering", href: "/industries/construction-engineering" },
    { label: "Fitness & Gyms", href: "/industries/fitness-gyms" },
    { label: "Finance & Fintech", href: "/industries/finance-fintech" },
    { label: "Logistics & Transportation", href: "/industries/logistics-transportation" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Technology & SaaS", href: "/industries/technology-saas" },
];
const navLinks = [
    { href: "/about", label: "About" }, { href: "/case-studies", label: "Case Studies" },
    { href: "/blogs", label: "Blogs" }, { href: "/contact", label: "Contact" },
];

function splitIntoTwoColumns<T>(items: T[]): [T[], T[]] {
    const midpoint = Math.ceil(items.length / 2);
    return [items.slice(0, midpoint), items.slice(midpoint)];
}

const locationColumns = splitIntoTwoColumns(locations);
const industryColumns = splitIntoTwoColumns(industries);

function MenuItem({ item, onNavigate, mobile = false }: { item: NavItem; onNavigate?: () => void; mobile?: boolean }) {
    const classes = `block rounded-xl px-3 text-sm leading-snug ${mobile ? "py-2.5" : "py-2"}`;
    return item.href
        ? <Link href={item.href} onClick={onNavigate} className={`${classes} text-on-surface hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary`}>{item.label}</Link>
        : <span className={`${classes} cursor-default text-on-surface-variant`}>{item.label}</span>;
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState<MenuName | null>(null);
    const [desktopOpen, setDesktopOpen] = useState<MenuName | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const desktopRef = useRef<HTMLDivElement>(null);
    const mobileToggleRef = useRef<HTMLButtonElement>(null);
    const suppressFocusOpen = useRef(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setMobileOpen(null);
        setDesktopOpen(null);
    };

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onPointerDown = (event: PointerEvent) => {
            if (!desktopRef.current?.contains(event.target as Node)) setDesktopOpen(null);
        };
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isMenuOpen) {
                closeMenu();
                mobileToggleRef.current?.focus();
            }
        };
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isMenuOpen]);

    const desktopTrigger = (name: MenuName, label: string) => (
        <button
            type="button"
            data-menu-trigger={name}
            aria-controls={`desktop-${name}-menu`}
            aria-expanded={desktopOpen === name}
            onPointerEnter={(event) => { if (event.pointerType === "mouse") setDesktopOpen(name); }}
            onFocus={(event) => {
                if (suppressFocusOpen.current) suppressFocusOpen.current = false;
                else if (event.currentTarget.matches(":focus-visible")) setDesktopOpen(name);
            }}
            onClick={() => setDesktopOpen(desktopOpen === name ? null : name)}
            className={`border-b-2 py-2 font-body-md transition-colors focus-visible:outline-2 focus-visible:outline-primary ${desktopOpen === name ? "border-primary text-primary" : "border-transparent text-on-surface-variant hover:border-primary hover:text-primary focus-visible:border-primary"}`}
        >
            {label}
        </button>
    );

    const mobileAccordion = (name: MenuName, label: string, icon: string, content: ReactNode) => (
        <div className="mb-2 w-full">
            <button
                type="button"
                onClick={() => setMobileOpen(mobileOpen === name ? null : name)}
                aria-expanded={mobileOpen === name}
                aria-controls={`mobile-${name}-menu`}
                className="flex w-full items-center justify-between py-3 font-display-lg text-2xl text-on-surface transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
            >
                <span className="flex items-center gap-3"><span aria-hidden="true" className="material-symbols-outlined text-2xl text-primary">{icon}</span>{label}</span>
                <span aria-hidden="true" className={`material-symbols-outlined text-2xl text-primary transition-transform ${mobileOpen === name ? "rotate-180" : ""}`}>expand_more</span>
            </button>
            <div id={`mobile-${name}-menu`} hidden={mobileOpen !== name} className="pb-4 pl-2">{content}</div>
        </div>
    );

    return (
        <nav className="fixed top-0 z-50 w-full" aria-label="Main navigation">
            <div className={`pointer-events-none absolute inset-0 z-0 border-b border-line-subtle bg-surface/90 backdrop-blur-2xl transition-shadow duration-300 ${isScrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.15)]" : ""}`} />
            <div
                ref={desktopRef}
                onMouseLeave={() => setDesktopOpen(null)}
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setDesktopOpen(null); }}
                onKeyDown={(event) => {
                    if (event.key === "Escape" && desktopOpen) {
                        event.preventDefault();
                        setDesktopOpen(null);
                        suppressFocusOpen.current = true;
                        desktopRef.current?.querySelector<HTMLButtonElement>(`[data-menu-trigger="${desktopOpen}"]`)?.focus();
                    }
                }}
                className="relative z-50 mx-auto flex h-16 max-w-container-max items-center justify-between px-margin-mobile sm:h-20 sm:px-margin-desktop"
            >
                <Link onClick={closeMenu} href="/" className="inline-flex mb-1 shrink-0 items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><Image src="/nawa_digital_logo_blue.svg" alt="Nawa Digital Logo" width={1000} height={299} loading="eager" className="h-9 w-auto sm:h-10" /></Link>

                <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
                    {desktopTrigger("services", "Services")}
                    <div className="relative">
                        {desktopTrigger("locations", "Locations")}
                        {desktopOpen === "locations" && (
                            <div className="absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-5">
                                <div id="desktop-locations-menu" className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl border border-line bg-surface/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
                                    <p className="mb-2 border-b border-line-subtle px-3 pb-2 font-label-md font-semibold text-primary">Locations</p>
                                    <div className="grid grid-cols-2 gap-x-4">
                                        {locationColumns.map((column, index) => (
                                            <div key={index} className="min-w-0">
                                                {column.map((item) => <MenuItem key={item.label} item={item} onNavigate={closeMenu} />)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        {desktopTrigger("industries", "Industries")}
                        {desktopOpen === "industries" && (
                            <div className="absolute left-1/2 top-full z-50 w-[620px] -translate-x-1/2 pt-5">
                                <div id="desktop-industries-menu" className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl border border-line bg-surface/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
                                    <p className="mb-2 border-b border-line-subtle px-3 pb-2 font-label-md font-semibold text-primary">Industries</p>
                                    <div className="grid grid-cols-2 gap-x-4">
                                        {industryColumns.map((column, index) => (
                                            <div key={index} className="min-w-0">
                                                {column.map((item) => <MenuItem key={item.label} item={item} onNavigate={closeMenu} />)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {navLinks.map((link) => <Link key={link.href} href={link.href} onPointerEnter={() => setDesktopOpen(null)} onFocus={() => setDesktopOpen(null)} className="font-body-md text-on-surface-variant transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{link.label}</Link>)}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <a href="#contact" onClick={closeMenu} className="rounded-full bg-inverse-primary px-6 py-3 font-label-md text-on-accent shadow-[var(--glow-primary-sm)] transition-all duration-300 hover:bg-accent-soft hover:text-on-accent-soft hover:shadow-[var(--glow-primary-lg)]">Request a Quote</a>
                    </div>
                    <button ref={mobileToggleRef} type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-line xl:hidden" onClick={() => { setIsMenuOpen(!isMenuOpen); setMobileOpen(null); }} aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
                        <span aria-hidden="true" className="material-symbols-outlined text-2xl">{isMenuOpen ? "close" : "menu"}</span>
                    </button>
                </div>

                {desktopOpen === "services" && (
                    <div id="desktop-services-menu" className="absolute left-1/2 top-full z-50 grid max-h-[calc(100dvh-5rem-1rem)] w-[min(1100px,calc(100vw-48px))] -translate-x-1/2 grid-cols-4 gap-5 overflow-y-auto rounded-3xl border border-line bg-surface/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-2xl">
                        {serviceGroups.map((group) => <div key={group.title} className="min-w-0"><p className="mb-2 border-b border-line-subtle px-3 pb-2 font-label-md font-semibold text-primary">{group.title}</p><div>{group.items.map((item) => <MenuItem key={item.label} item={item} onNavigate={closeMenu} />)}</div></div>)}
                    </div>
                )}
            </div>

            <div id="mobile-navigation" className={`fixed inset-0 z-40 flex h-dvh w-full flex-col overflow-hidden bg-mesh transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`} inert={!isMenuOpen}>
                <div className="menu-orb pointer-events-none absolute left-1/4 top-1/4 z-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[100px]" />
                <div className="menu-orb pointer-events-none absolute bottom-0 right-1/4 z-0 h-[500px] w-[500px] rounded-full bg-inverse-primary/20 blur-[120px]" />
                <div className="h-20 w-full flex-shrink-0" />
                <div className="relative z-10 flex flex-1 flex-col overflow-y-auto px-margin-mobile pb-24 pt-4">
                    {mobileAccordion("services", "Services", "grid_view", <div className="space-y-5">{serviceGroups.map((group) => <div key={group.title}><p className="mb-1 border-b border-line-subtle px-3 pb-2 font-label-md font-semibold text-primary">{group.title}</p>{group.items.map((item) => <MenuItem key={item.label} item={item} onNavigate={closeMenu} mobile />)}</div>)}</div>)}
                    {mobileAccordion("locations", "Locations", "location_on", locations.map((item) => <MenuItem key={item.label} item={item} onNavigate={closeMenu} mobile />))}
                    {mobileAccordion("industries", "Industries", "domain", industries.map((item) => <MenuItem key={item.label} item={item} onNavigate={closeMenu} mobile />))}
                    <div className="my-3 h-px bg-line-subtle" />
                    {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu} className="py-3 font-display-lg text-2xl text-on-surface transition-colors hover:text-primary">{link.label}</Link>)}
                    <a href="#contact" onClick={closeMenu} className="mt-6 w-full rounded-full bg-inverse-primary px-8 py-4 text-center font-label-md text-on-accent transition-all duration-300 hover:bg-accent-soft hover:text-on-accent-soft md:hidden">Request a Quote</a>
                </div>
            </div>
        </nav>
    );
}
