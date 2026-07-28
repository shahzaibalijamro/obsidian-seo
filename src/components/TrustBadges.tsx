export default function TrustBadges() {
  const logos = ["AcmeCorp", "Quantum", "NEXUS", "Vanguard"];
  // Multiply array to ensure there's enough width to fill any screen before the animation resets
  // 4 sets of 4 logos = 16 logos. Each is 250px. 16 * 250 = 4000px.
  // The animation translates by exactly one set (1000px).
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop mb-8 text-center">
        <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-sm opacity-60">
          Trusted by Forward-Thinking Brands
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="logo-track flex items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500 w-max">
          {duplicatedLogos.map((logo, idx) => (
            <div key={idx} className="w-[250px] flex-shrink-0 flex justify-center">
              <span className="font-display-lg text-2xl text-on-surface font-bold">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}