import Link from "next/link";

type FooterItem = { label: string; href?: string };

const footerGroups: { title: string; items: FooterItem[] }[] = [
    {
        title: "Services",
        items: [
            { label: "Search Engine Optimization", href: "/services/seo" },
            { label: "Search Engine Marketing", href: "/services/sem" },
            { label: "Social Media Marketing", href: "/services/social-media-marketing" },
            { label: "Social Media Management", href: "/services/social-media-management" },
            { label: "Email Marketing" },
            { label: "Lead Generation" },
            { label: "Content Writing", href: "/services/content-writing" },
            { label: "Content Marketing", href: "/services/content-marketing" },
            { label: "Web Development", href: "/services/web-development" },
            { label: "Software Development", href: "/services/software-development" },
            { label: "App Development", href: "/services/app-development" },
            { label: "WordPress Development", href: "/services/wordpress-development" },
            { label: "AI Integration", href: "/services/ai-integration" },
        ],
    },
    {
        title: "Locations",
        items: [
            { label: "Riyadh", href: "/locations/riyadh" },
            { label: "Jeddah", href: "/locations/jeddah" },
            { label: "Dammam", href: "/locations/dammam" },
            { label: "Makkah", href: "/locations/makkah" },
            { label: "Madinah", href: "/locations/madinah" },
            { label: "Khobar" },
            { label: "Jubail" },
            { label: "Tabuk" },
            { label: "Taif" },
            { label: "Abha" },
            { label: "Buraydah" },
        ],
    },
    {
        title: "Industries",
        items: [
            { label: "Real Estate" },
            { label: "Healthcare & Clinics" },
            { label: "Restaurants & Food & Beverage" },
            { label: "Retail & E-commerce" },
            { label: "Hospitality & Hotels" },
            { label: "Travel & Tourism" },
            { label: "Automotive" },
            { label: "Education" },
            { label: "Beauty, Salons & Spas" },
            { label: "Legal Services" },
            { label: "Construction & Engineering" },
            { label: "Fitness & Gyms" },
            { label: "Finance & Fintech" },
            { label: "Logistics & Transportation" },
            { label: "Professional Services" },
            { label: "Manufacturing" },
            { label: "Technology & SaaS" },
        ],
    },
    {
        title: "Company",
        items: [
            { label: "Blogs", href: "/blogs" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "About Us", href: "/about" },
            { label: "Career" },
            { label: "Contact Us", href: "/contact" },
        ],
    },
];

const socialPlatforms = ["Instagram", "LinkedIn", "Facebook", "X"];
const trustPlatforms = ["Trustpilot", "Crunchbase", "Clutch"];

const footerLinkClass = "text-sm leading-6 text-on-surface-variant transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function Footer() {
    return (
        <footer className="w-full border-t border-line bg-surface-container-low py-12 sm:py-16 lg:pt-20 lg:pb-12">
            <div className="mx-auto max-w-container-max px-margin-mobile sm:px-margin-desktop">
                <nav aria-label="Footer navigation" className="grid grid-cols-1 text-center gap-x-10 gap-y-10 border-b border-line pb-12 sm:grid-cols-2 sm:text-start sm:gap-y-12 lg:grid-cols-[1.4fr_0.7fr_1.5fr_1.4fr] lg:gap-x-12 lg:pb-16">
                    {footerGroups.map((group) => (
                        <div key={group.title}>
                            <h2 className="mb-5 font-label-md text-sm font-bold uppercase tracking-[0.14em] text-on-surface sm:mb-6">
                                {group.title}
                            </h2>
                            <ul className="space-y-2.5">
                                {group.items.map((item) => (
                                    <li key={item.label}>
                                        {item.href ? (
                                            <Link href={item.href} className={footerLinkClass}>{item.label}</Link>
                                        ) : (
                                            <span className="text-sm leading-6 text-on-surface-variant">{item.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <div className="grid gap-10 pt-9 sm:pt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                    <div className="flex flex-col items-center sm:items-start gap-4">
                        <Link href="/" className="font-display-lg text-2xl font-bold tracking-tighter text-on-surface transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-headline-md">
                            OBSIDIAN
                        </Link>
                        <p className="max-w-md text-sm leading-7 text-on-surface-variant">
                            A digital marketing agency in Saudi Arabia helping businesses grow through search, social media, content, and technology built for the local market.
                        </p>
                        <p className="mt-1 text-sm text-on-surface-variant">© {new Date().getFullYear()} OBSIDIAN. All rights reserved.</p>
                    </div>

                    <div className="flex items-center text-center sm:items-start sm:text-start flex-col gap-6 lg:items-end lg:text-right">
                        <div>
                            <h2 className="mb-3 font-label-md text-xs font-bold uppercase tracking-[0.12em] text-on-surface">Social Media Handles</h2>
                            <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
                                {socialPlatforms.map((platform) => (
                                    <li key={platform} className="text-sm text-on-surface-variant">{platform}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-3 font-label-md text-xs font-bold uppercase tracking-[0.12em] text-on-surface">Trusted By / Featured On</h2>
                            <ul className="flex flex-wrap gap-2 lg:justify-end">
                                {trustPlatforms.map((platform) => (
                                    <li key={platform} className="rounded-lg border border-line bg-surface px-3 py-2 text-xs text-on-surface-variant">{platform}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                            <Link href="/privacy" className={footerLinkClass}>Privacy Policy</Link>
                            <Link href="/terms" className={footerLinkClass}>Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
