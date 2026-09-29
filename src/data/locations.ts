import { additionalLocations } from "@/data/additional-locations";

export interface LocationPageContent {
    slug: string;
    name: string;
    heroLead: string;
    heroHighlight: string;
    description: string;
    contextTitle: string;
    contextParagraphs: [string, string];
    priorities: { title: string; description: string; icon: string }[];
    faqs: { question: string; answer: string }[];
}

export const locationPages: LocationPageContent[] = [
    {
        slug: "riyadh",
        name: "Riyadh",
        heroLead: "Digital Services for Businesses in",
        heroHighlight: "Riyadh",
        description: "Bring your search, content, social media, and website work into a clearer growth plan for customers in Riyadh.",
        contextTitle: "Make a Complex Offer Easier to Find and Understand",
        contextParagraphs: [
            "When a business offers several services or serves more than one audience, a website and campaign can become difficult to navigate. We help businesses serving Riyadh organize their messages around the questions customers ask before getting in touch.",
            "The right mix may include stronger service pages, search visibility, focused social campaigns, and a website that supports the sales conversation. We scope that mix around your actual priorities instead of assuming every channel needs the same investment.",
        ],
        priorities: [
            { title: "Explain Your Offer", description: "Give each service a clear place in the customer journey, from first search to enquiry.", icon: "description" },
            { title: "Connect Channels", description: "Keep paid, organic, social, and website messages consistent across touchpoints.", icon: "hub" },
            { title: "Support Enquiries", description: "Make the next step easy to find on the pages that matter most.", icon: "forum" },
        ],
        faqs: [
            { question: "Can you work with a business based in Riyadh?", answer: "Yes. Riyadh is one of the Saudi service areas covered by Obsidian Digital. We agree on the project scope, communication, and delivery arrangements with each client." },
            { question: "Which services are most relevant to a Riyadh launch?", answer: "That depends on your audience and starting point. Search visibility, clear service pages, social media, and a usable website are common areas to review together." },
            { question: "Can you improve an existing site rather than rebuild it?", answer: "Yes. We can review the current site and recommend focused content, design, or technical changes before proposing a larger build." },
        ],
    },
    {
        slug: "jeddah",
        name: "Jeddah",
        heroLead: "Digital Marketing and Web Services in",
        heroHighlight: "Jeddah",
        description: "Help people discover your business in Jeddah and move from an interesting first impression to a useful next step.",
        contextTitle: "Turn Attention Into a Clear Customer Journey",
        contextParagraphs: [
            "A campaign can introduce a business, but visitors still need a clear path to understand its offer. For businesses serving Jeddah, we connect social and search activity with landing pages, content, and site journeys that answer practical questions.",
            "We start with the points where people lose context: unclear page titles, thin service descriptions, slow or awkward mobile experiences, and calls to action that arrive too early or too late. The resulting plan is shaped around your customers and your team's capacity to maintain it.",
        ],
        priorities: [
            { title: "Reach the Right Audience", description: "Align search topics and social messages with the people you want to serve.", icon: "target" },
            { title: "Improve Mobile Paths", description: "Make important information and contact options easy to use on smaller screens.", icon: "smartphone" },
            { title: "Keep Content Current", description: "Create a practical publishing structure for services, offers, and helpful updates.", icon: "edit_note" },
        ],
        faqs: [
            { question: "Do you support businesses serving Jeddah?", answer: "Yes. We can work with businesses serving customers in Jeddah. Communication and project delivery arrangements are agreed during scoping." },
            { question: "Can search and social media work together?", answer: "They can support different moments in a customer's journey. We can plan messages and landing pages so both channels point to information that matches the visitor's intent." },
            { question: "Can you help with a mobile-first website?", answer: "Yes. Mobile navigation, readable content, and clear actions are part of the web-development planning and review process." },
        ],
    },
    {
        slug: "dammam",
        name: "Dammam",
        heroLead: "A Clearer Digital Presence in",
        heroHighlight: "Dammam",
        description: "Build useful search visibility, explain your services, and support enquiries from people looking for businesses in Dammam.",
        contextTitle: "Help Buyers Understand the Work You Do",
        contextParagraphs: [
            "For many service-led businesses, the most useful digital improvement is clarity. A visitor should be able to see what you provide, who it is for, and how to start a conversation. We help businesses serving Dammam make those answers easier to find.",
            "That can mean stronger service copy, a better-organized website, more useful search pages, or targeted social activity. We focus on the gaps between your current digital presence and the questions prospective customers bring to it.",
        ],
        priorities: [
            { title: "Clarify Services", description: "Describe the work and its fit without relying on vague claims.", icon: "fact_check" },
            { title: "Improve Discovery", description: "Organize pages around relevant searches and related customer questions.", icon: "travel_explore" },
            { title: "Make Contact Simple", description: "Create straightforward routes from service information to an enquiry.", icon: "contact_mail" },
        ],
        faqs: [
            { question: "Can we work together if our business is in Dammam?", answer: "Yes. Dammam is within the service areas covered by Obsidian Digital. We discuss project needs and working arrangements before beginning." },
            { question: "What if our services are difficult to explain online?", answer: "We can work with your team to identify the main buyer questions and turn specialist knowledge into clearer pages, examples, and calls to action." },
            { question: "Do we need a new website to improve visibility?", answer: "Not always. We review the existing site first and separate content, technical, and design priorities so you can decide what level of change is useful." },
        ],
    },
    {
        slug: "makkah",
        name: "Makkah",
        heroLead: "Digital Services for Businesses Serving",
        heroHighlight: "Makkah",
        description: "Make essential information easier to find and understand for the people your business serves in Makkah.",
        contextTitle: "Put Useful Information at the Center",
        contextParagraphs: [
            "People may reach a business with a specific question and little time to search for the answer. For organizations serving Makkah, clear service descriptions, mobile usability, and a direct contact path can make that first interaction more helpful.",
            "We plan content and digital experiences around the audiences you actually serve. That may include residents, visitors, or other organizations, depending on your business. The scope follows your needs rather than assumptions about the city.",
        ],
        priorities: [
            { title: "Answer Key Questions", description: "Put practical details where users expect to find them.", icon: "quiz" },
            { title: "Simplify Mobile Use", description: "Review the pages and actions most likely to be needed on a phone.", icon: "phone_iphone" },
            { title: "Match Your Audience", description: "Shape search and content around the people your organization serves.", icon: "groups" },
        ],
        faqs: [
            { question: "Can you support a business serving Makkah?", answer: "Yes. We can work with businesses that serve customers in Makkah and define delivery arrangements during the project discussion." },
            { question: "Can the site address different kinds of customers?", answer: "Yes. We can organize navigation and pages around distinct audiences when the needs and information are meaningfully different." },
            { question: "Can you help us make information easier to find on mobile?", answer: "Yes. We can review mobile page structure, navigation, and contact paths, then prioritize changes based on the tasks visitors need to complete." },
        ],
    },
    {
        slug: "madinah",
        name: "Madinah",
        heroLead: "Thoughtful Digital Growth for",
        heroHighlight: "Madinah",
        description: "Create a clearer website and more relevant marketing for the people looking for your services in Madinah.",
        contextTitle: "Build Trust Through Clear, Helpful Content",
        contextParagraphs: [
            "A useful digital presence makes it easy to understand what a business offers and what happens next. We help businesses serving Madinah bring that clarity to search pages, social messages, and website content.",
            "Some projects need a better content structure; others need a more usable site or a coordinated marketing plan. We start by listening to your goals and the questions your customers ask, then recommend work that fits those needs.",
        ],
        priorities: [
            { title: "Make the Offer Understandable", description: "Write concise service explanations that answer common questions.", icon: "menu_book" },
            { title: "Keep Messages Consistent", description: "Connect social, search, and website content around the same offer.", icon: "sync_alt" },
            { title: "Provide a Next Step", description: "Help interested visitors reach the right contact route without confusion.", icon: "arrow_forward" },
        ],
        faqs: [
            { question: "Do you serve businesses in Madinah?", answer: "Yes. Madinah is one of the Saudi service areas covered by Obsidian Digital. Project communication and delivery are agreed with each client." },
            { question: "Can you help us write clearer service pages?", answer: "Yes. We can review existing copy, identify missing answers, and write pages structured around your audience and offer." },
            { question: "Can you support both marketing and website changes?", answer: "Yes. We can scope content, search, social media, and development work together when those efforts need to support the same customer journey." },
        ],
    },
    ...additionalLocations,
];
