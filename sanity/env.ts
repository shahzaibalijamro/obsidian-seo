export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id_here";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-03-01"; // Use current date or a fixed date for API version

export const useCdn = false; // Set to false to ensure fresh data during development, set to true in production if not using ISR aggressively
