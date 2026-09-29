export interface FocusedServiceContent {
    slug: string;
    name: string;
    category: string;
    headline: string;
    description: string;
    overview: [string, string];
    offerings: { title: string; description: string; icon: string }[];
    approach: [string, string, string];
    faqs: { question: string; answer: string }[];
}

export const remainingServices: FocusedServiceContent[] = [
    {
        slug: "email-marketing", name: "Email Marketing", category: "Marketing",
        headline: "Email that earns a place in the inbox",
        description: "Plan useful campaigns and customer journeys that turn permission into lasting relationships.",
        overview: ["Email works best when each message has a clear audience and purpose. We help you organize contacts, offers, and content around the moments when people want to hear from you.", "From a welcome series to a regular newsletter, we consider consent, segmentation, creative, and measurement together so the program can improve over time."],
        offerings: [
            { title: "Campaign Planning", description: "Build a calendar around relevant offers, useful updates, and audience needs.", icon: "calendar_month" },
            { title: "Lifecycle Sequences", description: "Map welcome, follow-up, and re-engagement messages to customer actions.", icon: "route" },
            { title: "Copy & Design", description: "Create readable emails with a clear message and next step.", icon: "mail" },
            { title: "Performance Review", description: "Use delivery, engagement, and conversion data to guide improvements.", icon: "monitoring" },
        ],
        approach: ["Review your audience, existing lists, and business goals.", "Plan segments and messages, then build and test each send.", "Measure useful outcomes and refine future campaigns."],
        faqs: [
            { question: "Can you work with our existing email platform?", answer: "Usually. We review its capabilities and your current setup before recommending a campaign or automation plan." },
            { question: "Do you help with consent and list quality?", answer: "We can review signup journeys and list practices as part of planning. Your team remains responsible for the legal basis and policies that apply to its contacts." },
        ],
    },
    {
        slug: "influencer-marketing", name: "Influencer Marketing", category: "Marketing",
        headline: "Creator partnerships with a clear purpose",
        description: "Find relevant voices, shape useful collaborations, and measure what the partnership achieves.",
        overview: ["A creator's audience and credibility matter more than a headline follower count. We help identify partners whose content, audience, and values fit your brand.", "Each collaboration starts with a brief that leaves room for an authentic voice while setting expectations for deliverables, disclosure, and reporting."],
        offerings: [
            { title: "Creator Research", description: "Assess audience fit, content quality, and engagement before outreach.", icon: "person_search" },
            { title: "Campaign Briefs", description: "Define the story, formats, timing, and desired action.", icon: "description" },
            { title: "Partnership Coordination", description: "Keep approvals, assets, and publishing milestones organized.", icon: "handshake" },
            { title: "Results Review", description: "Review reach, engagement, traffic, and agreed campaign outcomes.", icon: "analytics" },
        ],
        approach: ["Set an objective and identify the audience to reach.", "Shortlist and brief creators who match the campaign.", "Review published work and report on agreed measures."],
        faqs: [
            { question: "Do you focus on large influencers only?", answer: "No. A smaller creator with a relevant, engaged audience may be a better fit for a specific goal." },
            { question: "Can we approve content before it goes live?", answer: "Yes. Approval points and creative boundaries should be agreed with each creator in the campaign brief." },
        ],
    },
    {
        slug: "online-reputation-management", name: "Online Reputation Management", category: "Marketing",
        headline: "Build trust across the places people check",
        description: "Understand public feedback, respond thoughtfully, and make your digital presence more consistent.",
        overview: ["Reviews and public conversations can shape a customer's first impression. We help you see recurring themes and build a practical response process across relevant channels.", "Reputation work also means improving the underlying experience. We connect feedback patterns to content, service information, and escalation paths your team can maintain."],
        offerings: [
            { title: "Channel Audit", description: "Review profiles, ratings, listings, and recurring customer questions.", icon: "travel_explore" },
            { title: "Response Guidance", description: "Develop a clear, respectful approach for different kinds of feedback.", icon: "forum" },
            { title: "Profile Consistency", description: "Keep business details and brand information accurate across key profiles.", icon: "fact_check" },
            { title: "Insight Reporting", description: "Summarize themes that can inform operations and customer communication.", icon: "insights" },
        ],
        approach: ["Map the places customers encounter your business.", "Set response ownership, tone, and escalation rules.", "Track themes and improve information or processes where needed."],
        faqs: [
            { question: "Can you remove negative reviews?", answer: "We do not promise removal. We can help assess platform policies, flag content where appropriate, and plan a constructive response." },
            { question: "Will you reply to customers for us?", answer: "That can be scoped, with agreed access, approval rules, and an escalation route for sensitive issues." },
        ],
    },
    {
        slug: "conversion-rate-optimization", name: "Conversion Rate Optimization (CRO)", category: "Marketing",
        headline: "Make the next step easier to take",
        description: "Find friction in important journeys and improve pages using evidence from real visitor behavior.",
        overview: ["Traffic only helps when people can understand the offer and complete the task they came for. We review landing pages, forms, navigation, and mobile journeys to find where that path breaks down.", "Changes are prioritized as testable ideas, with measurement in place before we decide whether an improvement worked."],
        offerings: [
            { title: "Journey Audit", description: "Review the pages and steps leading to an enquiry or purchase.", icon: "route" },
            { title: "Analytics Review", description: "Find drop-offs and gaps in the data needed to evaluate changes.", icon: "query_stats" },
            { title: "Page Improvements", description: "Refine messaging, layout, forms, and calls to action.", icon: "tune" },
            { title: "Experiment Planning", description: "Define hypotheses and suitable tests for meaningful traffic levels.", icon: "science" },
        ],
        approach: ["Choose a business outcome and review the current journey.", "Prioritize improvements by evidence, impact, and effort.", "Measure the change and document what to try next."],
        faqs: [
            { question: "Do we need high traffic for CRO?", answer: "A/B tests need enough traffic to be useful. Lower-traffic sites can still benefit from usability reviews, clearer content, and careful before-and-after measurement." },
            { question: "Can you optimize an existing landing page?", answer: "Yes. We can review a specific page and recommend focused changes to its message, structure, and action path." },
        ],
    },
    {
        slug: "ai-agents", name: "AI Agents", category: "Automation",
        headline: "AI agents grounded in real workflows",
        description: "Design assisted workflows with clear tools, boundaries, review points, and outcomes.",
        overview: ["An AI agent should have a defined job and a reliable way to use the information it needs. We map the workflow first, then identify where an agent can help with research, drafting, triage, or routine actions.", "Human approval, access controls, and failure handling are part of the design. We start with a narrow use case that can be tested before expanding its responsibilities."],
        offerings: [
            { title: "Use-case Discovery", description: "Find repeatable tasks with clear inputs, outputs, and ownership.", icon: "manage_search" },
            { title: "Tool Integration", description: "Connect approved data and systems needed for the task.", icon: "extension" },
            { title: "Guardrails & Review", description: "Set permissions, handoffs, and checks for sensitive actions.", icon: "verified_user" },
            { title: "Pilot Evaluation", description: "Test task completion, error patterns, and practical value.", icon: "fact_check" },
        ],
        approach: ["Map one workflow and define success and failure cases.", "Build a constrained pilot with the required tools and review steps.", "Evaluate real examples before wider rollout."],
        faqs: [
            { question: "Can an agent update our business systems?", answer: "It may be possible where suitable APIs and permissions exist. We define which actions require human approval before connecting write access." },
            { question: "How do you check whether it works?", answer: "We test against representative tasks, document errors, and review outcomes with the people who own the workflow." },
        ],
    },
    {
        slug: "ai-chatbots", name: "AI Chatbots", category: "Automation",
        headline: "Helpful conversations, with a human path",
        description: "Create chat experiences that answer common questions and hand complex issues to your team.",
        overview: ["A useful chatbot is built around the questions customers actually ask and the information your business can stand behind. We plan its knowledge sources, conversation boundaries, and escalation path before launch.", "We then test how it handles unclear questions, outdated information, and requests it cannot answer, so users get a clear next step instead of a confident guess."],
        offerings: [
            { title: "Conversation Design", description: "Map common intents, useful answers, and escalation points.", icon: "forum" },
            { title: "Knowledge Setup", description: "Organize approved content and a way to keep it current.", icon: "menu_book" },
            { title: "Channel Integration", description: "Place the assistant where it supports your customer journey.", icon: "hub" },
            { title: "Quality Review", description: "Check answer quality and unresolved conversations over time.", icon: "rate_review" },
        ],
        approach: ["Gather common questions and approved source material.", "Build and test the conversation and handoff flow.", "Review live questions and improve coverage with your team."],
        faqs: [
            { question: "Can the chatbot answer questions in Arabic?", answer: "Multilingual support can be scoped and tested with your approved content and real customer examples." },
            { question: "What happens when it cannot answer?", answer: "The flow should say so clearly and offer a route to a person or another reliable source." },
        ],
    },
    {
        slug: "business-automation", name: "Business Automation", category: "Automation",
        headline: "Give routine work a clearer path",
        description: "Connect repetitive steps across your tools while keeping ownership and exceptions visible.",
        overview: ["Automation begins with understanding the current process. We identify repeated handoffs, duplicate entry, and tasks that have predictable rules, then design a workflow your team can understand.", "The result should handle errors as carefully as the happy path. We plan monitoring, notifications, and human review wherever a decision needs context."],
        offerings: [
            { title: "Workflow Mapping", description: "Document triggers, decisions, owners, and exceptions.", icon: "account_tree" },
            { title: "System Connections", description: "Link suitable tools through supported integrations and APIs.", icon: "sync_alt" },
            { title: "Approval Flows", description: "Keep important decisions with the right people.", icon: "approval" },
            { title: "Monitoring", description: "Make failures and incomplete work visible to operators.", icon: "monitor_heart" },
        ],
        approach: ["Choose a process with measurable time or quality costs.", "Build the simplest reliable flow and test exceptions.", "Document ownership and monitor results after launch."],
        faqs: [
            { question: "Can you automate a process across several tools?", answer: "Often, if those tools offer suitable integrations or APIs. We review access and constraints before proposing a design." },
            { question: "Will staff still be able to review decisions?", answer: "Yes. We can place approval steps and clear alerts wherever the process requires human judgment." },
        ],
    },
    {
        slug: "custom-ai-solutions", name: "Custom AI Solutions", category: "Automation",
        headline: "AI designed around your actual problem",
        description: "Scope and build a focused AI capability for a workflow, product, or internal team.",
        overview: ["A custom solution is useful when an off-the-shelf tool does not fit your information, workflow, or user experience. We begin by defining the task, its data requirements, and how success can be evaluated.", "The implementation may combine existing models, search over approved content, application features, and human review. The technical choices follow the problem and the operating constraints."],
        offerings: [
            { title: "Feasibility Study", description: "Test the task, available data, and expected value before a full build.", icon: "science" },
            { title: "Knowledge Experiences", description: "Make approved information easier to search and use.", icon: "search" },
            { title: "Product Integration", description: "Add AI-assisted features to a suitable application or workflow.", icon: "api" },
            { title: "Evaluation & Handoff", description: "Check quality, document limitations, and prepare ownership.", icon: "fact_check" },
        ],
        approach: ["Define one outcome and assemble representative examples.", "Prototype the approach and test quality and constraints.", "Build, monitor, and improve the approved solution."],
        faqs: [
            { question: "Do we need to train our own model?", answer: "Usually not. We first assess whether existing models and your approved data can meet the requirement." },
            { question: "Can you assess an idea before a full project?", answer: "Yes. A focused discovery or prototype can establish feasibility, quality targets, and likely implementation effort." },
        ],
    },
    {
        slug: "shopify-ecommerce-development", name: "Shopify / E-commerce Development", category: "Development",
        headline: "An online store built for real shopping journeys",
        description: "Plan storefronts, product discovery, and checkout paths around your catalog and operations.",
        overview: ["An effective store helps customers find the right product, understand the details, and buy with confidence. We shape the design and content around those decisions, including mobile browsing and practical product management.", "Platform and integration choices depend on your catalog, payments, fulfillment, and team workflow. We review these requirements before recommending Shopify or another suitable approach."],
        offerings: [
            { title: "Storefront Design", description: "Create clear category, product, and information pages.", icon: "storefront" },
            { title: "Catalog Structure", description: "Organize products, variants, filters, and content for browsing.", icon: "inventory_2" },
            { title: "Commerce Integrations", description: "Scope payment, shipping, analytics, and operational connections.", icon: "hub" },
            { title: "Launch Review", description: "Test purchase journeys, content, and handoff needs before release.", icon: "verified" },
        ],
        approach: ["Review the catalog, buyer journey, and operational requirements.", "Design and build key pages and integrations.", "Test ordering flows and hand over everyday store tasks."],
        faqs: [
            { question: "Do you only build Shopify stores?", answer: "No. We can assess Shopify alongside other commerce options based on your needs and current systems." },
            { question: "Can you improve an existing store?", answer: "Yes. We can review product discovery, page content, performance, and checkout friction before scoping changes." },
        ],
    },
];
