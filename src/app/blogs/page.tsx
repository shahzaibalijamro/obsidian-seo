import { client } from "../../../sanity/lib/client";
import { allPostsQuery, categoriesQuery } from "../../../sanity/lib/queries";
import BlogsClient from "./BlogsClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogsPage() {
  const posts = await client.fetch(allPostsQuery);
  const categories = await client.fetch(categoriesQuery);

  return (
    <>
      <main className="flex-grow pt-32 pb-section-padding-mobile sm:pb-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Page Header */}
        <header className="mb-16 md:mb-24 text-center mx-auto">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-6">
            Intelligence &amp; <span className="text-gradient-indigo">Insights</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            Navigating the digital frontier with strategic foresight and technical precision. Explore our latest thoughts on strategy, design, and engineering.
          </p>
        </header>

        <BlogsClient initialPosts={posts} categories={categories} />
      </main>
    </>
  );
}
