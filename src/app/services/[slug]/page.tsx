import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FocusedServicePage from "@/components/FocusedServicePage";
import { remainingServices } from "@/data/remaining-services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return remainingServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const content = remainingServices.find((service) => service.slug === slug);
    if (!content) notFound();
    return {
        title: `${content.name} Services in Saudi Arabia | Nawa Digital`,
        description: content.description,
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const content = remainingServices.find((service) => service.slug === slug);
    if (!content) notFound();
    return <FocusedServicePage content={content} />;
}
