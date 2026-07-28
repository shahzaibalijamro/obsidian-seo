interface CTASectionProps {
    buttonText?: string;
    buttonHref?: string;
}

export default function CTASection({ buttonText = "Get Started", buttonHref = "#contact" }: CTASectionProps) {
    return (
        <>

            <section className="py-20 sm:py-24 bg-inverse-primary relative overflow-hidden section-curve-top">
                <div
                    className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20">
                </div>
                <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop relative z-10 text-center">
                    <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-accent mb-6">Elevate Your
                        Digital Presence Today</h2>
                    <p className="font-body-lg text-on-accent/80 mb-10 max-w-2xl mx-auto">Join the ranks of elite brands leveraging
                        our fluid design and engineering methodologies.</p>
                    <a className="inline-block px-10 py-5 bg-on-accent text-accent font-label-md rounded-full text-center hover:bg-accent hover:text-on-accent transition-all duration-300 shadow-xl"
                        href={buttonHref}>
                        {buttonText}
                    </a>
                </div>
            </section>

        </>
    );
}