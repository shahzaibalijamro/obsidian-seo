import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { contentWriting } from "@/data/new-services";

export const metadata: Metadata = {
    title: "Content Writing Services in Saudi Arabia | Obsidian Digital",
    description: "Clear website copy, SEO-informed articles, landing pages, and content updates shaped around your audience and business goals.",
};

export default function ContentWritingPage() {
    return <ServiceLandingPage content={contentWriting} />;
}
