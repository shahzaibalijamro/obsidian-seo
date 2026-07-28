"use client";
import { useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    title: string;
    initials?: string;
};

type TestimonialsSectionProps = {
    badge?: string;
    title?: string;
    description?: string;
    testimonials?: Testimonial[];
    className?: string;
};

const defaultTestimonials: Testimonial[] = [
    {
        quote: "Obsidian didn't just build us a platform; they engineered a growth engine. Their fluid approach to design and architecture fundamentally shifted our trajectory.",
        name: "Sarah Jenkins",
        title: "CTO, Nexus Financial"
    },
    {
        quote: "The precision and technical depth Obsidian brings to the table is unmatched. They don't just deliver projects; they deliver results.",
        name: "Marcus Thorne",
        title: "CMO, TechNova"
    },
    {
        quote: "Brutal efficiency meets elegant design. Our conversion rates tripled within three months of the redesign.",
        name: "Elena Rodriguez",
        title: "Founder, Aura FinTech"
    }
];

export default function TestimonialsSection({
    badge,
    title = "Testimonials",
    description = "Hear from the industry leaders we've helped scale to new heights.",
    testimonials = defaultTestimonials,
    className = ""
}: TestimonialsSectionProps = {}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prev = () => setCurrentIndex(curr => (curr === 0 ? testimonials.length - 1 : curr - 1));
    const next = () => setCurrentIndex(curr => (curr === testimonials.length - 1 ? 0 : curr + 1));

    return (
        <section className={`py-section-padding-mobile sm:py-section-padding ${className}`}>
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="text-center mb-20">
                    {badge && (
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-label-md border border-primary/20 backdrop-blur-sm">
                            {badge}
                        </span>
                    )}
                    <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface mb-6">
                        {title}
                    </h2>
                    <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative md:px-12">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((test, idx) => (
                                <div key={idx} className="w-full flex-shrink-0 px-4">
                                    <div className="glass-panel p-10 rounded-3xl relative overflow-hidden text-center flex flex-col min-h-[400px] justify-center">
                                        {!test.initials && (
                                            <span className="material-symbols-outlined text-4xl text-primary/20 absolute top-4 left-4">
                                                format_quote
                                            </span>
                                        )}
                                        <div className="flex justify-center gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                    star
                                                </span>
                                            ))}
                                        </div>
                                        <p className="font-body-md text-on-surface mb-8 leading-relaxed italic text-lg line-clamp-5">
                                            "{test.quote}"
                                        </p>
                                        {test.initials ? (
                                            <div className="mt-auto flex flex-col items-center gap-4">
                                                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                                    {test.initials}
                                                </div>
                                                <div>
                                                    <p className="font-headline-md text-lg text-on-surface mb-1">{test.name}</p>
                                                    <p className="font-label-md text-sm text-on-surface-variant">{test.title}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="font-label-md text-on-surface mb-1">{test.name}</p>
                                                <p className="font-body-md text-on-surface-variant text-sm">{test.title}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover:bg-primary/10 transition-colors z-10"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary hover:bg-primary/10 transition-colors z-10"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                    <div className="flex justify-center gap-3 mt-10">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-primary" : "bg-line hover:bg-line"
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}