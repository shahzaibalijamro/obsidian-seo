import type { Metadata } from "next";
import ServiceLandingPage from "@/components/ServiceLandingPage";
import { wordpressDevelopment } from "@/data/new-services";

export const metadata: Metadata = {
    title: "WordPress Development Services in Saudi Arabia | Nawa Digital",
    description: "Custom WordPress websites, flexible editing workflows, migrations, WooCommerce, and practical performance improvements.",
};

export default function WordPressDevelopmentPage() {
    return <ServiceLandingPage content={wordpressDevelopment} />;
}
