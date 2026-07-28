"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

interface ServiceLink {
    href: string;
    label: string;
    icon: string;
    description: string;
}

interface LocationLink {
    label: string;
    icon: string;
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLocationsMobileOpen, setIsLocationsMobileOpen] = useState(false);
    const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesMobileOpen(false);
    };

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    // Track scroll for subtle header elevation
    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const services: ServiceLink[] = [
        { href: "/services/ai-integration", label: "AI Integration", icon: "psychology", description: "Intelligent automation & LLMs" },
        { href: "/services/app-development", label: "App Development", icon: "phone_iphone", description: "Native & cross-platform mobile" },
        { href: "/services/content-marketing", label: "Content Marketing", icon: "edit_note", description: "Brand storytelling that converts" },
        { href: "/services/sem", label: "Search Engine Marketing", icon: "ads_click", description: "Performance-driven paid media" },
        { href: "/services/seo", label: "Search Engine Optimization", icon: "travel_explore", description: "Organic growth & visibility" },
        { href: "/services/social-media-management", label: "Social Media Management", icon: "manage_accounts", description: "Always-on community care" },
        { href: "/services/social-media-marketing", label: "Social Media Marketing", icon: "campaign", description: "Scroll-stopping campaigns" },
        { href: "/services/software-development", label: "Software Development", icon: "code", description: "Scalable custom software" },
    ];

    const locations: LocationLink[] = [
        { label: "London", icon: "location_city" },
        { label: "Birmingham", icon: "location_city" },
        { label: "Manchester", icon: "location_city" },
        { label: "Leeds", icon: "location_city" },
        { label: "Liverpool", icon: "location_city" },
        { label: "Sheffield", icon: "location_city" },
        { label: "Bristol", icon: "location_city" },
    ];

    const navLinks = [
        { href: "/about", label: "About" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/blogs", label: "Blogs" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50">
            {/* Top bar background that is always visible */}
            <div className={`absolute inset-0 bg-surface/40 backdrop-blur-2xl border-b border-line-subtle pointer-events-none z-0 transition-shadow duration-300 ${isScrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.15)]" : ""}`}></div>

            {/* Top bar content */}
            <div className="relative z-50 flex justify-between items-center max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop h-16 sm:h-20">
                <Link onClick={closeMenu} href={"/"} className="font-display-lg text-2xl sm:text-headline-md font-bold tracking-tighter text-on-surface">
                    OBSIDIAN
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    {/* Services Dropdown (hover) */}
                    <div className="group relative">
                        <button
                            className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300 flex items-center gap-1.5 py-2"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Services
                            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-180">
                                expand_more
                            </span>
                        </button>
                        {/* Invisible hover bridge to prevent flicker */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 h-4 w-64"></div>
                        {/* Dropdown panel */}
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0">
                            <div className="rounded-3xl p-4 w-[560px] bg-surface/95 backdrop-blur-2xl border border-line shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                <div className="px-3 py-2 mb-2 border-b border-line-subtle">
                                    <p className="font-label-md text-primary uppercase tracking-wider text-xs">Our Expertise</p>
                                </div>
                                <div className="grid grid-cols-2 gap-1">
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="group/item flex items-start gap-3 p-3 rounded-2xl hover:bg-primary/5 transition-colors duration-200"
                                        >
                                            <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform duration-300">
                                                <span className="material-symbols-outlined text-xl">{service.icon}</span>
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-headline-md text-sm text-on-surface mb-0.5 group-hover/item:text-primary transition-colors duration-200">
                                                    {service.label}
                                                </p>
                                                <p className="font-body-md text-xs text-on-surface-variant truncate">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Dropdown (hover) */}
                    <div className="group relative">
                        <button
                            className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300 flex items-center gap-1.5 py-2"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Location
                            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:rotate-180">
                                expand_more
                            </span>
                        </button>
                        {/* Invisible hover bridge to prevent flicker */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 h-4 w-64"></div>
                        {/* Dropdown panel */}
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0">
                            <div className="rounded-3xl p-4 w-[320px] bg-surface/95 backdrop-blur-2xl border border-line shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                <div className="px-3 py-2 mb-2 border-b border-line-subtle">
                                    <p className="font-label-md text-primary uppercase tracking-wider text-xs">Top Cities in England</p>
                                </div>
                                <div className="grid grid-cols-1 gap-1">
                                    {locations.map((location) => (
                                        <div
                                            key={location.label}
                                            className="group/item flex items-center gap-3 p-3 rounded-2xl hover:bg-primary/5 transition-colors duration-200 cursor-default"
                                        >
                                            <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform duration-300">
                                                <span className="material-symbols-outlined text-xl">{location.icon}</span>
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-headline-md text-sm text-on-surface group-hover/item:text-primary transition-colors duration-200">
                                                    {location.label}
                                                </p>
                                            </div>
                                            <span className="text-[10px] font-label-md uppercase tracking-wider text-on-surface-variant opacity-50 border border-line-subtle px-2 py-0.5 rounded-full">
                                                Soon
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300"
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <div className="hidden md:block">
                        <a className="px-6 py-3 bg-inverse-primary text-on-accent font-label-md rounded-full hover:bg-accent-soft hover:text-on-accent-soft transition-all duration-300 shadow-[var(--glow-primary-sm)] hover:shadow-[var(--glow-primary-lg)]"
                            href="#contact" onClick={closeMenu}>
                            Request a Quote
                        </a>
                    </div>

                    <button className="lg:hidden text-on-surface w-10 h-10 flex items-center justify-center rounded-full hover:bg-line transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className="material-symbols-outlined text-2xl">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Full Screen Menu */}
            <div className={`fixed inset-0 w-full h-dvh bg-mesh overflow-hidden z-40 lg:hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none menu-orb z-0"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-inverse-primary/20 rounded-full blur-[120px] pointer-events-none menu-orb z-0"></div>

                <div className="h-20 w-full flex-shrink-0 relative z-10"></div>

                <div className="relative z-10 flex flex-col w-full px-margin-mobile pt-4 pb-24 overflow-y-auto flex-1">
                    {/* Services accordion */}
                    <div className="w-full mb-2">
                        <button
                            onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                            className="w-full flex items-center justify-between text-on-surface font-display-lg text-2xl hover:text-primary transition-colors duration-300 py-3"
                            aria-expanded={isServicesMobileOpen}
                        >
                            <span className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-2xl">grid_view</span>
                                Services
                            </span>
                            <span className={`material-symbols-outlined text-2xl text-primary transition-transform duration-300 ${isServicesMobileOpen ? "rotate-180" : ""}`}>
                                expand_more
                            </span>
                        </button>
                        <div className={`grid transition-all duration-300 ease-out ${isServicesMobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden">
                                <div className="pl-2 pt-2 pb-4 grid grid-cols-1 gap-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            onClick={closeMenu}
                                            className="group/item flex items-center gap-3 p-3 rounded-2xl glass-panel hover:border-primary/30 transition-all duration-300"
                                        >
                                            <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover/item:scale-110 transition-transform duration-300">
                                                <span className="material-symbols-outlined text-xl">{service.icon}</span>
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-headline-md text-base text-on-surface mb-0.5">
                                                    {service.label}
                                                </p>
                                                <p className="font-body-md text-xs text-on-surface-variant truncate">
                                                    {service.description}
                                                </p>
                                            </div>
                                            <span className="material-symbols-outlined text-on-surface-variant text-lg group-hover/item:text-primary group-hover/item:translate-x-1 transition-all duration-300">
                                                arrow_forward
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location accordion */}
                    <div className="w-full mb-2">
                        <button
                            onClick={() => setIsLocationsMobileOpen(!isLocationsMobileOpen)}
                            className="w-full flex items-center justify-between text-on-surface font-display-lg text-2xl hover:text-primary transition-colors duration-300 py-3"
                            aria-expanded={isLocationsMobileOpen}
                        >
                            <span className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
                                Location
                            </span>
                            <span className={`material-symbols-outlined text-2xl text-primary transition-transform duration-300 ${isLocationsMobileOpen ? "rotate-180" : ""}`}>
                                expand_more
                            </span>
                        </button>
                        <div className={`grid transition-all duration-300 ease-out ${isLocationsMobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden">
                                <div className="pl-2 pt-2 pb-4 grid grid-cols-1 gap-2">
                                    {locations.map((location) => (
                                        <div
                                            key={location.label}
                                            className="group/item flex items-center gap-3 p-3 rounded-2xl glass-panel cursor-default"
                                        >
                                            <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined text-xl">{location.icon}</span>
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="font-headline-md text-base text-on-surface mb-0.5">
                                                    {location.label}
                                                </p>
                                                <p className="font-body-md text-[10px] text-on-surface-variant uppercase tracking-wider opacity-50">
                                                    Soon
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-line-subtle my-3"></div>

                    {/* Remaining nav links */}
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className="text-on-surface font-display-lg text-2xl hover:text-primary transition-colors duration-300 py-3"
                            href={link.href}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        className="mt-6 px-8 py-4 bg-inverse-primary text-on-accent font-label-md rounded-full hover:bg-accent-soft hover:text-on-accent-soft transition-all duration-300 md:hidden w-full text-center"
                        href="#contact"
                        onClick={closeMenu}
                    >
                        Request a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}