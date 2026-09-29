export interface IndustryContent {
    slug: string;
    name: string;
    description: string;
    context: [string, string];
    priorities: { title: string; description: string }[];
    services: { label: string; href: string }[];
}

export const industryPages: IndustryContent[] = [
    {
        slug: "real-estate", name: "Real Estate",
        description: "Digital marketing and web experiences that help property buyers, tenants, and investors find useful information.",
        context: ["Property decisions involve location, budget, timing, and trust. Clear listings and neighborhood information help visitors narrow their options before an enquiry.", "We connect searchable property content, campaign landing pages, and simple lead paths so your team receives better context about each request."],
        priorities: [
            { title: "Property Discovery", description: "Make inventory, location, and key details easy to browse and compare." },
            { title: "Qualified Enquiries", description: "Ask for the information agents need without making forms burdensome." },
            { title: "Campaign Consistency", description: "Keep ads, listings, and landing pages aligned with current availability." },
        ],
        services: [{ label: "SEO", href: "/services/seo" }, { label: "Web Development", href: "/services/web-development" }, { label: "Social Media Marketing", href: "/services/social-media-marketing" }],
    },
    {
        slug: "healthcare-clinics", name: "Healthcare & Clinics",
        description: "Clear, accessible digital journeys for patients looking for care, services, and appointment information.",
        context: ["Patients need reliable explanations, practical details, and confidence about the next step. Digital content should support informed decisions without making unsupported medical claims.", "We help clinics organize service information, practitioner details, locations, and contact paths around the questions people bring to the site."],
        priorities: [
            { title: "Service Clarity", description: "Explain care options, preparation, and appointment routes in plain language." },
            { title: "Patient Access", description: "Make contact, location, and booking information easy to use on mobile." },
            { title: "Content Review", description: "Build a review process with qualified clinical owners for sensitive information." },
        ],
        services: [{ label: "Content Writing", href: "/services/content-writing" }, { label: "SEO", href: "/services/seo" }, { label: "Web Development", href: "/services/web-development" }],
    },
    {
        slug: "restaurants-food-beverage", name: "Restaurants & Food & Beverage",
        description: "Help diners and buyers find menus, locations, product details, and easy ways to order or visit.",
        context: ["Food decisions often happen quickly and on a phone. Useful menus, current hours, clear photography, and direct actions can make the difference between interest and a visit.", "We align local search, social content, and landing pages with the experiences and products your business actually offers."],
        priorities: [
            { title: "Practical Details", description: "Keep menus, hours, locations, and ordering routes current." },
            { title: "Local Discovery", description: "Help nearby customers find the right branch or offer." },
            { title: "Campaign Landing Pages", description: "Give promotions a clear destination with relevant information." },
        ],
        services: [{ label: "Social Media Marketing", href: "/services/social-media-marketing" }, { label: "SEO", href: "/services/seo" }, { label: "Web Development", href: "/services/web-development" }],
    },
    {
        slug: "retail-ecommerce", name: "Retail & E-commerce",
        description: "Create easier product discovery and a clearer path from browsing to purchase.",
        context: ["Shoppers compare products, delivery options, and policies before they buy. A good storefront answers those questions without slowing down the journey.", "We can improve catalog structure, product content, campaign pages, and measurement around the points that matter to your customers."],
        priorities: [
            { title: "Product Discovery", description: "Organize categories, filters, and product detail for real shopping tasks." },
            { title: "Purchase Confidence", description: "Present pricing, delivery, returns, and support information clearly." },
            { title: "Retention", description: "Use useful email and content to support repeat purchases." },
        ],
        services: [{ label: "E-commerce Development", href: "/services/shopify-ecommerce-development" }, { label: "Email Marketing", href: "/services/email-marketing" }, { label: "CRO", href: "/services/conversion-rate-optimization" }],
    },
    {
        slug: "hospitality-hotels", name: "Hospitality & Hotels",
        description: "Make rooms, amenities, locations, and booking information easier for guests to explore.",
        context: ["Guests compare experiences as well as prices. A useful digital presence makes the property, room options, policies, and local context easy to understand.", "We connect search and campaign activity to pages that help visitors make a confident booking decision, especially on mobile."],
        priorities: [
            { title: "Stay Information", description: "Show room differences, amenities, and policies without hunting through the site." },
            { title: "Booking Path", description: "Reduce confusion between discovery and the reservation flow." },
            { title: "Guest Questions", description: "Answer common pre-arrival questions in clear content." },
        ],
        services: [{ label: "Web Development", href: "/services/web-development" }, { label: "SEO", href: "/services/seo" }, { label: "Content Marketing", href: "/services/content-marketing" }],
    },
    {
        slug: "travel-tourism", name: "Travel & Tourism",
        description: "Help travelers discover experiences, compare options, and plan the next step.",
        context: ["Travel planning involves timing, logistics, expectations, and inspiration. Content should make the experience appealing while giving practical answers that help people decide.", "We build search-friendly experience pages and campaign journeys that lead to clear booking or enquiry options."],
        priorities: [
            { title: "Experience Pages", description: "Explain itineraries, inclusions, requirements, and what to expect." },
            { title: "Discovery Content", description: "Answer destination and activity questions travelers search for." },
            { title: "Booking Clarity", description: "Show availability, contact, and booking steps at the right moment." },
        ],
        services: [{ label: "Content Marketing", href: "/services/content-marketing" }, { label: "SEO", href: "/services/seo" }, { label: "Social Media Marketing", href: "/services/social-media-marketing" }],
    },
    {
        slug: "automotive", name: "Automotive",
        description: "Connect vehicle, parts, and service information to the questions buyers and owners ask.",
        context: ["Automotive customers need specifications, availability, pricing context, and service details. Disconnected pages and campaigns can make comparison harder than it needs to be.", "We organize content around the customer's stage, from early research to booking a test drive, quote, or service visit."],
        priorities: [
            { title: "Model & Service Pages", description: "Make specifications and service options easy to compare." },
            { title: "Lead Routing", description: "Direct enquiries to the right location or team." },
            { title: "After-sales Content", description: "Support owners with useful maintenance and service information." },
        ],
        services: [{ label: "SEO", href: "/services/seo" }, { label: "Web Development", href: "/services/web-development" }, { label: "Email Marketing", href: "/services/email-marketing" }],
    },
    {
        slug: "education", name: "Education",
        description: "Clear digital paths for students and families exploring programs, admissions, and learning options.",
        context: ["Prospective students need to understand program fit, requirements, dates, and outcomes. Clear information reduces repeated questions and supports better enquiries.", "We help structure program pages, admissions content, and campaigns around the different needs of learners, parents, and employers."],
        priorities: [
            { title: "Program Clarity", description: "Explain curriculum, format, eligibility, and next steps." },
            { title: "Admissions Journey", description: "Make deadlines, documents, and contact options easy to find." },
            { title: "Audience Paths", description: "Separate information for prospective students, families, and partners." },
        ],
        services: [{ label: "Content Writing", href: "/services/content-writing" }, { label: "SEO", href: "/services/seo" }, { label: "Web Development", href: "/services/web-development" }],
    },
    {
        slug: "beauty-salons-spas", name: "Beauty, Salons & Spas",
        description: "Show services, availability, and booking options in a way clients can use quickly.",
        context: ["Clients often discover a salon or spa through social content, then look for pricing, location, treatment details, and a booking route. Those touchpoints should tell the same story.", "We help make service pages, profiles, and campaign content consistent, useful, and easy to act on."],
        priorities: [
            { title: "Service Menus", description: "Clarify treatments, duration, preparation, and price information where appropriate." },
            { title: "Booking Access", description: "Make appointment options easy to find on mobile." },
            { title: "Social Proof", description: "Use approved imagery and genuine reviews to support trust." },
        ],
        services: [{ label: "Social Media Management", href: "/services/social-media-management" }, { label: "SEO", href: "/services/seo" }, { label: "Online Reputation Management", href: "/services/online-reputation-management" }],
    },
    {
        slug: "legal-services", name: "Legal Services",
        description: "Help prospective clients understand practice areas, process, and how to start a confidential conversation.",
        context: ["People seeking legal help need clear language and a credible, discreet way to get in touch. Content should explain services without promising outcomes or replacing case-specific advice.", "We help structure practice area pages, lawyer profiles, and useful resources with a review process led by your firm."],
        priorities: [
            { title: "Practice Areas", description: "Explain who each service is for and what an initial enquiry involves." },
            { title: "Trust & Accuracy", description: "Use reviewed credentials, process details, and appropriate language." },
            { title: "Confidential Enquiries", description: "Make contact routes clear and collect only what the intake needs." },
        ],
        services: [{ label: "Content Writing", href: "/services/content-writing" }, { label: "SEO", href: "/services/seo" }, { label: "Web Development", href: "/services/web-development" }],
    },
    {
        slug: "construction-engineering", name: "Construction & Engineering",
        description: "Present technical capabilities, project experience, and enquiry paths for complex buying decisions.",
        context: ["Technical buyers need to judge fit, scope, and delivery capability. A useful website makes services, sectors, credentials, and approved project examples easy to assess.", "We work with your specialists to turn complex information into accurate pages and focused campaigns for relevant buyers."],
        priorities: [
            { title: "Capability Pages", description: "Explain the services, standards, and project types you can support." },
            { title: "Project Evidence", description: "Present approved work with clear scope and verified outcomes." },
            { title: "Tender Enquiries", description: "Route requests to the correct team with appropriate context." },
        ],
        services: [{ label: "Content Writing", href: "/services/content-writing" }, { label: "SEO", href: "/services/seo" }, { label: "Web Development", href: "/services/web-development" }],
    },
    {
        slug: "fitness-gyms", name: "Fitness & Gyms",
        description: "Make classes, memberships, facilities, and joining steps easier to discover and understand.",
        context: ["Prospective members compare schedules, locations, coaching, and membership options. They should be able to see what fits their goals before contacting the gym.", "We connect local discovery and social activity to practical pages that support visits, trials, and membership enquiries."],
        priorities: [
            { title: "Class Discovery", description: "Show schedules, levels, and what a session includes." },
            { title: "Membership Clarity", description: "Explain options and the next step without unnecessary friction." },
            { title: "Local Reach", description: "Help nearby audiences find the right facility or program." },
        ],
        services: [{ label: "Social Media Marketing", href: "/services/social-media-marketing" }, { label: "SEO", href: "/services/seo" }, { label: "CRO", href: "/services/conversion-rate-optimization" }],
    },
    {
        slug: "finance-fintech", name: "Finance & Fintech",
        description: "Explain financial products and technology clearly while supporting trust and careful review.",
        context: ["Financial decisions depend on understandable terms, eligibility, security, and a credible provider. Content and interfaces should help people evaluate fit without hiding important details.", "We work within your approval process to build clear product journeys, educational content, and measurable campaigns."],
        priorities: [
            { title: "Product Explanation", description: "Make features, requirements, and limitations easy to understand." },
            { title: "Trust Signals", description: "Present verified credentials, security information, and support routes." },
            { title: "Reviewed Content", description: "Build compliance and product-owner review into publishing." },
        ],
        services: [{ label: "Content Writing", href: "/services/content-writing" }, { label: "Web Development", href: "/services/web-development" }, { label: "CRO", href: "/services/conversion-rate-optimization" }],
    },
    {
        slug: "logistics-transportation", name: "Logistics & Transportation",
        description: "Help buyers understand coverage, capabilities, tracking options, and how to request a quote.",
        context: ["Logistics buyers need clear information about lanes, services, constraints, and reliability. Vague claims make it hard to determine whether a provider fits the shipment.", "We organize service content and enquiry paths around the practical details your operations team needs to assess each request."],
        priorities: [
            { title: "Service Coverage", description: "Describe routes, modes, service levels, and exclusions clearly." },
            { title: "Quote Requests", description: "Collect the shipment details required for a useful response." },
            { title: "Customer Updates", description: "Connect status information and support routes where systems allow." },
        ],
        services: [{ label: "Web Development", href: "/services/web-development" }, { label: "Business Automation", href: "/services/business-automation" }, { label: "SEO", href: "/services/seo" }],
    },
    {
        slug: "professional-services", name: "Professional Services",
        description: "Show expertise, process, and fit so clients can start more informed conversations.",
        context: ["Professional service buyers need to understand what a firm does, where it has experience, and how an engagement begins. Clear pages can answer those questions before an introductory call.", "We help teams turn specialist knowledge into useful service content, credible examples, and a contact journey that respects the buyer's time."],
        priorities: [
            { title: "Service Positioning", description: "Describe the problems you solve and who the work suits." },
            { title: "Relevant Evidence", description: "Use approved examples, methods, and team expertise to support claims." },
            { title: "Enquiry Quality", description: "Guide visitors toward the right person or service." },
        ],
        services: [{ label: "Content Marketing", href: "/services/content-marketing" }, { label: "SEO", href: "/services/seo" }, { label: "Web Development", href: "/services/web-development" }],
    },
    {
        slug: "manufacturing", name: "Manufacturing",
        description: "Present products, specifications, and production capabilities for technical buyers.",
        context: ["Manufacturing buyers compare specifications, capacity, quality processes, and lead times. A strong digital presence helps them identify the right product or production partner.", "We structure technical content with your product and operations teams so it remains accurate, searchable, and useful for enquiry qualification."],
        priorities: [
            { title: "Product Information", description: "Make specifications, variants, and applications easy to find." },
            { title: "Capability Evidence", description: "Present approved process and quality information clearly." },
            { title: "B2B Enquiries", description: "Capture the details needed to assess a request efficiently." },
        ],
        services: [{ label: "Content Writing", href: "/services/content-writing" }, { label: "Web Development", href: "/services/web-development" }, { label: "SEO", href: "/services/seo" }],
    },
    {
        slug: "technology-saas", name: "Technology & SaaS",
        description: "Explain complex products, support evaluation, and make the route to a demo or trial clear.",
        context: ["Software buyers evaluate fit, integrations, security, pricing, and implementation effort. Product pages should answer those questions at the right depth for each audience.", "We help connect technical documentation, use-case content, and campaign pages to a measurable path from discovery to qualified interest."],
        priorities: [
            { title: "Use-case Clarity", description: "Show the problems the product solves for distinct users." },
            { title: "Evaluation Support", description: "Make integrations, security, and implementation information accessible." },
            { title: "Demo Journey", description: "Give interested teams a clear next step with useful context." },
        ],
        services: [{ label: "Content Marketing", href: "/services/content-marketing" }, { label: "CRO", href: "/services/conversion-rate-optimization" }, { label: "Web Development", href: "/services/web-development" }],
    },
];
