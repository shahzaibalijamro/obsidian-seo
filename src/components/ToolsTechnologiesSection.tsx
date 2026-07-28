export interface ToolCategory {
    category: string;
    tools: string[];
}

export interface ToolsTechnologiesSectionProps {
    title?: string;
    tools?: string[];
    categories?: ToolCategory[];
}

export default function ToolsTechnologiesSection({
    title = "tools & Technologies",
    tools = ["React", "Next.js", "Node", "AWS", "Figma", "Vercel"],
    categories
}: ToolsTechnologiesSectionProps) {
    return (
        <section className="py-section-padding-mobile sm:py-section-padding">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop text-center">
                {title && (
                    <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-sm mb-12">
                        {title}
                    </p>
                )}
                {categories ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="glass-panel p-6 rounded-2xl border border-line-subtle">
                                <p className="font-label-md text-primary mb-3 uppercase tracking-wider">{cat.category}</p>
                                <div className="flex flex-col gap-2">
                                    {cat.tools.map((tool, i) => (
                                        <span key={i} className="font-headline-md text-xl text-on-surface">{tool}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
                        {tools.map((tool, idx) => (
                            <span key={idx} className="font-headline-md text-xl text-on-surface">{tool}</span>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}