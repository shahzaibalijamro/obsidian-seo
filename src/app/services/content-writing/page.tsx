import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { contentWriting } from "@/data/new-services";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Content Writing Services in Saudi Arabia | Nawa Digital",
    description: "Clear website copy, SEO-informed articles, landing pages, and content updates shaped around your audience and business goals.",
    alternates: {
        canonical: getCanonicalUrl("/services/content-writing"),
    },
};

export default function ContentWritingPage() {
    return <ServiceLandingPage content={contentWriting} />;
}
