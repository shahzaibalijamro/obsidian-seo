import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ListingCard from "@/components/ListingCard";
import { caseStudiesData } from "@/data/case-studies";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Ensure static generation for all existing case studies
export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    id: study.id,
  }));
}

export default async function SingleCaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const caseStudy = caseStudiesData.find((s) => s.id === id);

  if (!caseStudy) {
    notFound();
  }

  // Get up to 3 related case studies in the same category
  const relatedCaseStudies = caseStudiesData
    .filter((s) => s.category === caseStudy.category && s.id !== caseStudy.id)
    .slice(0, 3);

  // If not enough related, pad with recent case studies
  if (relatedCaseStudies.length < 3) {
    const otherStudies = caseStudiesData.filter(s => !relatedCaseStudies.includes(s) && s.id !== caseStudy.id).slice(0, 3 - relatedCaseStudies.length);
    relatedCaseStudies.push(...otherStudies);
  }

  return (
    <>
      <main className="pt-32">
        {/* Article Header */}
        <article className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <nav className="flex justify-center items-center space-x-2 text-on-surface-variant font-label-md text-label-md uppercase tracking-widest mb-8">
              <Link href="/case-studies" className="hover:text-primary transition-colors">
                Case Studies
              </Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-primary">{caseStudy.category}</span>
            </nav>

            <h1 className="font-headline-lg text-4xl md:text-6xl text-on-surface mb-6 max-w-4xl mx-auto tracking-tighter">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-2xl mx-auto">
              {caseStudy.excerpt}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-on-surface/10 py-8 mt-8">
              <div className="flex flex-col items-center">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-1">Client</span>
                <span className="text-on-surface font-headline-md text-xl">{caseStudy.clientName}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-1">Industry</span>
                <span className="text-on-surface font-headline-md text-xl">{caseStudy.industry}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-1">Key Result</span>
                <span className="text-on-surface font-headline-md text-xl">{caseStudy.keyResult}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-video rounded-xl overflow-hidden mb-section-padding border border-on-surface/10 relative group">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50 pointer-events-none"></div>
          </div>

          {/* HTML Content (Project Overview, Strategy, Gallery etc.) */}
          <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
        </article>

        {/* Service Integration CTA */}

        {/* Related Case Studies Grid */}
        <section className="mt-section-padding max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-12 border-b border-on-surface/10 pb-4">
            Related Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {relatedCaseStudies.map((study) => (
              <ListingCard key={study.id} {...study} linkPrefix="/case-studies/" />
            ))}
          </div>
        </section>
        <section className="mt-section-padding">
          <CTASection />
        </section>
      </main>
    </>
  );
}
