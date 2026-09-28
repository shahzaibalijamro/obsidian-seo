import Link from "next/link";
import type { LocationPageContent } from "@/data/locations";

type LocationCardProps = {
    location: LocationPageContent;
    number: number;
    className?: string;
};

export default function LocationCard({ location, number, className = "" }: LocationCardProps) {
    return (
        <Link
            href={`/locations/${location.slug}`}
            className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-surface p-7 shadow-[var(--base-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--glass-hover-shadow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-8 ${className}`}
        >
            <span aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-primary/10 transition-transform duration-300 group-hover:scale-110" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5" />

            <div className="relative mb-8 flex items-start justify-between">
                <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                </span>
                <span className="font-label-md text-xs tracking-[0.2em] text-on-surface-variant">{String(number).padStart(2, "0")}</span>
            </div>

            <h3 className="relative mb-3 font-display-lg text-2xl font-semibold text-on-surface sm:text-[28px]">{location.name}</h3>
            <p className="relative mb-8 flex-1 text-sm leading-7 text-on-surface-variant">{location.description}</p>
            <span className="relative inline-flex items-center gap-2 font-label-md text-sm font-semibold text-primary">
                Explore {location.name}
                <span aria-hidden="true" className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </span>
        </Link>
    );
}
