import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center relative grid-bg overflow-hidden min-h-dvh">
      <div className="absolute inset-0 scanline pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--radial-glow),transparent_70%)] pointer-events-none z-0"></div>

      <section className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding-mobile sm:py-section-padding flex flex-col items-center text-center">
        <div className="relative w-full flex justify-center items-center mb-4">
          <h1 className="text-[12rem] md:text-[24rem] font-display-lg leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/50 to-background/10 select-none text-glow font-black menu-orb relative z-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="h-[2px] w-full max-w-4xl bg-gradient-to-r from-transparent via-primary to-transparent shadow-[var(--glow-line)] opacity-70"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none translate-y-12 md:translate-y-24">
            <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          </div>
        </div>

        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 uppercase tracking-widest font-extrabold relative z-20">
          Path Not Found
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12 relative z-20 font-medium tracking-wide">
          The objective you're seeking has shifted or doesn't exist in our current matrix. Let's redirect your trajectory.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full sm:w-auto relative z-20">
          <Link href="/" className="w-full sm:w-auto px-10 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-DEFAULT flex items-center justify-center gap-3 hover:bg-primary-container hover:text-on-primary-container hover:shadow-[var(--glow-primary-lg)] transition-all duration-300 group uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-1 transition-transform">terminal</span>
            Return to Terminal
          </Link>

          <Link href="/contact" className="w-full sm:w-auto px-10 py-4 border border-primary/30 text-on-surface font-label-md text-label-md rounded-DEFAULT flex items-center justify-center gap-3 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 uppercase tracking-widest">
            <span className="material-symbols-outlined text-[20px]">support_agent</span>
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
