"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

type LocationCarouselProps = {
    children: ReactNode;
    label: string;
};

export default function LocationCarousel({ children, label }: LocationCarouselProps) {
    const trackRef = useRef<HTMLUListElement>(null);
    const [canGoPrevious, setCanGoPrevious] = useState(false);
    const [canGoNext, setCanGoNext] = useState(true);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const updateButtons = () => {
            const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
            setCanGoPrevious(track.scrollLeft > 2);
            setCanGoNext(track.scrollLeft < maxScroll - 2);
        };

        updateButtons();
        track.addEventListener("scroll", updateButtons, { passive: true });

        const resizeObserver = new ResizeObserver(updateButtons);
        resizeObserver.observe(track);

        return () => {
            track.removeEventListener("scroll", updateButtons);
            resizeObserver.disconnect();
        };
    }, []);

    const move = (direction: -1 | 1) => {
        const track = trackRef.current;
        if (!track) return;

        const trackLeft = track.getBoundingClientRect().left;
        const starts = Array.from(track.children, (item) =>
            item.getBoundingClientRect().left - trackLeft + track.scrollLeft
        );
        const target = direction === 1
            ? starts.find((start) => start > track.scrollLeft + 2)
            : starts.findLast((start) => start < track.scrollLeft - 2);

        if (target === undefined) return;

        track.scrollTo({
            left: target,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        });
    };

    return (
        <div>
            <div className="mb-5 hidden justify-end gap-3 md:flex">
                <button
                    type="button"
                    aria-label="Previous locations"
                    onClick={() => move(-1)}
                    disabled={!canGoPrevious}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-primary shadow-[var(--base-shadow)] transition-colors hover:border-primary/30 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:bg-surface"
                >
                    <span aria-hidden="true" className="material-symbols-outlined">arrow_back</span>
                </button>
                <button
                    type="button"
                    aria-label="Next locations"
                    onClick={() => move(1)}
                    disabled={!canGoNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-primary shadow-[var(--base-shadow)] transition-colors hover:border-primary/30 hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:bg-surface"
                >
                    <span aria-hidden="true" className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>

            <ul
                ref={trackRef}
                aria-label={label}
                tabIndex={0}
                onKeyDown={(event) => {
                    if (event.target !== event.currentTarget) return;
                    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                        event.preventDefault();
                        move(event.key === "ArrowRight" ? 1 : -1);
                    }
                }}
                className="flex gap-5 overflow-x-auto overscroll-x-contain py-3 snap-x snap-mandatory focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-6"
            >
                {Children.map(children, (child) => (
                    <li className="flex shrink-0 basis-[86%] snap-start sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-3rem)/3)]">
                        {child}
                    </li>
                ))}
            </ul>
        </div>
    );
}
