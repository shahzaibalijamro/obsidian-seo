export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
  clientName: string;
  industry: string;
  keyResult: string;
}

const buildRichContent = (
  company: string,
  innerImageSrc: string,
  innerImageAlt: string,
  testimonialQuote: string,
  testimonialAuthor: string,
  timelineItems: { title: string, desc: string }[],
  overview: string,
  challenge: string,
  architectureDesc: string,
  learningsDesc: string,
  toolsHtml: string,
  resultsHtml: string,
  ctaLink: string = "/contact"
) => `
<div class="max-w-4xl mx-auto space-y-12">
  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-3xl sm:text-headline-lg hyphens-auto text-on-surface mb-6">Project Overview</h2>
    <p class="text-body-lg text-on-surface-variant">${overview}</p>
  </section>

  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-3xl sm:text-headline-lg hyphens-auto text-on-surface mb-6">Client Challenge</h2>
    <p class="text-body-lg text-on-surface-variant">${challenge}</p>
  </section>

  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-3xl sm:text-headline-lg hyphens-auto text-on-surface mb-6">Technical Architecture & Data Flow</h2>
    <p class="text-body-lg text-on-surface-variant mb-8">${architectureDesc}</p>
    <div class="relative aspect-video rounded-xl overflow-hidden border border-on-surface/10 glass-effect group">
      <img alt="${innerImageAlt}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="${innerImageSrc}">
      <div class="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span class="text-primary font-label-md uppercase tracking-widest mb-2">Technical Insight</span>
        <h3 class="text-on-surface font-headline-md text-xl">${innerImageAlt}</h3>
      </div>
    </div>
  </section>

  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-3xl sm:text-headline-lg hyphens-auto text-on-surface mb-6">Implementation Timeline</h2>
    <div class="space-y-6">
      ${timelineItems.map((item, i) => `
        <div class="flex gap-4">
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">${i + 1}</div>
            ${i < timelineItems.length - 1 ? '<div class="w-px h-full bg-line-subtle my-2"></div>' : ''}
          </div>
          <div class="pb-6">
            <h4 class="text-on-surface font-bold text-lg">${item.title}</h4>
            <p class="text-on-surface-variant mt-1">${item.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </section>

  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-primary/20 relative overflow-hidden">
    <div class="absolute -right-12 -top-12 text-primary/10 material-symbols-outlined" style="font-size: 180px">format_quote</div>
    <div class="relative z-10">
      <p class="font-body-lg text-xl italic text-on-surface mb-6">"${testimonialQuote}"</p>
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold text-xl">${testimonialAuthor.charAt(0)}</div>
        <div>
          <h4 class="text-on-surface font-bold">${testimonialAuthor}</h4>
          <p class="text-on-surface-variant text-sm">${company}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-3xl sm:text-headline-lg hyphens-auto text-on-surface mb-6">Tools & Technologies</h2>
    <div class="flex flex-wrap gap-4">
      ${toolsHtml}
    </div>
  </section>

  <section class="p-8 rounded-xl bg-surface-container/30 backdrop-blur-md border border-on-surface/10">
    <h2 class="font-headline-lg text-3xl sm:text-headline-lg hyphens-auto text-on-surface mb-6">Key Learnings & Future Roadmap</h2>
    <p class="text-body-lg text-on-surface-variant">${learningsDesc}</p>
  </section>

  <section class="p-8 rounded-xl bg-primary-container/10 border border-primary/20">
    <h2 class="font-headline-lg text-headline-lg hyphens-auto text-primary mb-4">Results & Impact</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      ${resultsHtml}
    </div>
  </section>

  <section class="p-12 rounded-xl bg-gradient-to-br from-surface-container to-surface border border-line-subtle text-center">
    <h2 class="font-display-md text-3xl text-on-surface mb-4">Ready to engineer your own success story?</h2>
    <p class="text-on-surface-variant mb-8 max-w-2xl mx-auto">Let our elite team architect a scalable, high-performance solution tailored to your enterprise requirements.</p>
    <a href="${ctaLink}" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-full font-label-lg hover:bg-primary/90 transition-colors">
      Start the Conversation <span class="material-symbols-outlined text-sm">arrow_forward</span>
    </a>
  </section>
</div>
`;

const contentNexus = buildRichContent(
  "Nexus Analytics",
  "/images/case-studies/nexus_inner.png",
  "Real-time Data Visualization Dashboard",
  "The transformation was staggering. We went from a dashboard that took 12 seconds to load, to one that renders instantly. Our enterprise clients noticed immediately.",
  "Sarah Jenkins, CTO",
  [
    { title: "Discovery & Auditing", desc: "Deep dive into the legacy Node.js monolith and bottleneck identification." },
    { title: "Architecture Redesign", desc: "Mapping out the new microservices infrastructure using AWS ECS and Docker." },
    { title: "Frontend Migration", desc: "Rebuilding the core UI with Next.js for server-side rendering advantages." },
    { title: "Optimization & Launch", desc: "Implementing Redis caching and PostgreSQL read-replicas for final polish." }
  ],
  "Nexus Analytics, an emerging B2B SaaS platform, required a complete architectural overhaul to handle their exponentially growing dataset. The goal was to build a modern, high-performance dashboard capable of rendering complex charts in real-time with zero latency.",
  "The existing monolithic architecture was struggling under the weight of millions of daily data points, causing dashboard load times to exceed 10 seconds. This friction was causing significant user churn and impacting their enterprise sales cycle.",
  "We decoupled their monolithic architecture into a series of scalable microservices. Data ingestion was routed through a high-throughput pipeline into a clustered PostgreSQL database, with a robust Redis caching layer handling the heavy lifting for frequent queries. The frontend was entirely decoupled and rebuilt in Next.js, allowing for instantaneous data rendering.",
  "The shift to microservices introduced slight complexities in deployment, which we mitigated by implementing strict CI/CD pipelines via GitHub Actions. Looking forward, Nexus is well-positioned to integrate predictive ML models directly into their new data pipeline without architectural friction.",
  `<span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Next.js</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Tailwind CSS</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Node.js</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">PostgreSQL</span>`,
  `<div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">+350%</div>
      <p class="text-label-md uppercase tracking-widest">Data Processing Speed</p>
    </div>
    <div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">-80%</div>
      <p class="text-label-md uppercase tracking-widest">Server Costs</p>
    </div>`
);

const contentPayFlow = buildRichContent(
  "PayFlow Inc",
  "/images/case-studies/payflow_inner.png",
  "Secure Transaction Ledger UI",
  "Security and speed rarely go hand-in-hand, but Obsidian managed to deliver both flawlessly. Our TPS capacity exceeded our most aggressive projections.",
  "Marcus Wright, VP of Engineering",
  [
    { title: "Security Profiling", desc: "Establishing strict PCI-DSS compliance requirements and tokenization strategies." },
    { title: "Core Development", desc: "Writing the high-frequency transaction engine in Node.js." },
    { title: "Stress Testing", desc: "Simulating massive concurrent loads to guarantee 99.99% uptime capabilities." },
    { title: "Deployment", desc: "Rolling out the containerized infrastructure across multi-region clusters." }
  ],
  "PayFlow Inc approached us to engineer a highly secure, scalable fintech payment gateway from scratch, capable of handling high-frequency transactions with bank-grade security protocols.",
  "Security and throughput were the primary constraints. The system needed to process thousands of transactions per second (TPS) while maintaining absolute data integrity and adhering to strict PCI-DSS compliance. Furthermore, the UI needed to convey trust and transparency.",
  "We utilized a containerized Node.js backend to ensure isolated, secure deployment environments. All sensitive financial data was subjected to end-to-end encryption and strict tokenization before resting in a highly available PostgreSQL cluster.",
  "We learned that aggressive database indexing strategies are crucial for ledger applications at this scale. The future roadmap includes integrating AI-driven fraud detection models directly into the transaction stream.",
  `<span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Node.js</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">PostgreSQL</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Docker</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Next.js</span>`,
  `<div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">$2B+</div>
      <p class="text-label-md uppercase tracking-widest">Monthly Volume</p>
    </div>
    <div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">99.99%</div>
      <p class="text-label-md uppercase tracking-widest">Uptime SLA</p>
    </div>`
);

const contentVitaScan = buildRichContent(
  "VitaScan Medical",
  "/images/case-studies/vitascan_inner.png",
  "Futuristic 3D Medical Diagnostics UI",
  "The ability to render 3D MRI scans in the browser with AI overlays has fundamentally changed how our radiologists operate.",
  "Dr. Elena Rostova, Lead Diagnostician",
  [
    { title: "Model Optimization", desc: "Compressing PyTorch models for efficient cloud inference." },
    { title: "WebGL Integration", desc: "Building the custom React layer for rendering large DICOM files." },
    { title: "UI/UX Design", desc: "Crafting a clinical, precise, and dark-themed interface to reduce eye strain." },
    { title: "Clinical Trials", desc: "Beta testing the interface with active radiologists and refining response times." }
  ],
  "VitaScan Medical partnered with us to integrate cutting-edge AI diagnostic tools into their radiologist workflow, providing real-time 3D visualization and anomaly detection directly in the browser.",
  "The integration of heavy machine learning models (PyTorch) with a highly responsive web interface was exceptionally challenging. Rendering 3D medical scans required extensive GPU acceleration via the browser without sacrificing precision or performance.",
  "We deployed their PyTorch anomaly detection models on AWS SageMaker for scalable, on-demand inference. For the frontend, we built a custom React interface utilizing advanced WebGL techniques to smoothly render massive 3D data files while overlaying AI-generated heatmaps instantly.",
  "Handling massive DICOM files efficiently in standard browsers required aggressive data chunking and streaming optimizations. Next steps involve pushing some of the lighter inference workloads directly to the client edge.",
  `<span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">React</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Python</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">PyTorch</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">AWS</span>`,
  `<div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">99.8%</div>
      <p class="text-label-md uppercase tracking-widest">Anomaly Detection</p>
    </div>
    <div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">-50%</div>
      <p class="text-label-md uppercase tracking-widest">Review Time per Scan</p>
    </div>`
);

const contentShopGenius = buildRichContent(
  "ShopGenius",
  "/images/case-studies/shopgenius_inner.png",
  "E-Commerce Recommendation Algorithm Flow",
  "Our conversion rates jumped immediately. The recommendations feel natural, intuitive, and most importantly, highly relevant to our users.",
  "David Chen, Head of E-Commerce",
  [
    { title: "Data Pipeline Setup", desc: "Structuring user behavior data for real-time ingestion." },
    { title: "TensorFlow Modeling", desc: "Training the collaborative filtering recommendation engine." },
    { title: "Frontend Integration", desc: "Building the sleek React components for displaying recommendations." },
    { title: "A/B Testing", desc: "Running extensive split tests to optimize the recommendation placement and UI." }
  ],
  "ShopGenius wanted to revolutionize the retail space by offering hyper-personalized product recommendations powered by TensorFlow, delivered through a sleek React-based storefront.",
  "Their legacy recommendation engine was rules-based and stale, failing to capture impulse buys. They needed a seamless UI that adapted in real-time to user browsing behavior, and a backend capable of processing complex AI models on the fly.",
  "We completely overhauled their data pipeline. User behavioral streams were routed into a Python-based processing layer where TensorFlow models generated real-time affinity scores. The frontend, hosted on Vercel, utilized React Server Components to fetch and display these recommendations without client-side lag.",
  "We discovered that UI placement of recommendations matters just as much as the algorithm's accuracy. The future roadmap includes integrating visual search capabilities and augmented reality previews.",
  `<span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">React</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Python</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">TensorFlow</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Vercel</span>`,
  `<div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">+45%</div>
      <p class="text-label-md uppercase tracking-widest">Cart Conversion Rate</p>
    </div>
    <div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">+$12M</div>
      <p class="text-label-md uppercase tracking-widest">Incremental Revenue</p>
    </div>`
);

const contentSynthetix = buildRichContent(
  "Synthetix Enterprise",
  "/images/case-studies/synthetix_inner.png",
  "Enterprise NLP Chat Interface",
  "The AI assistant doesn't just deflect tickets; it solves complex problems accurately by referencing our internal docs. It's a game changer.",
  "Amanda Turing, Director of Support",
  [
    { title: "Knowledge Base Integration", desc: "Vectorizing internal documents for the RAG architecture." },
    { title: "OpenAI Configuration", desc: "Fine-tuning prompt engineering and ensuring compliance safeguards." },
    { title: "UI Engineering", desc: "Developing the glassmorphism chat interface with typing animations." },
    { title: "Soft Launch", desc: "Rolling out to 10% of users to monitor hallucination rates and accuracy." }
  ],
  "Synthetix Enterprise sought to reduce their massive support overhead by deploying a custom NLP Assistant using OpenAI's API, integrated seamlessly into their existing corporate portal.",
  "The AI needed to sound professional, access proprietary internal knowledge bases securely, and never hallucinate critical policy information. Furthermore, the UI had to look premium and trustworthy.",
  "We implemented a robust Retrieval-Augmented Generation (RAG) architecture. User queries are intercepted by a Python backend, vectorized, and matched against the company's internal documentation before being processed by the OpenAI API. The frontend is a slick, responsive React application featuring custom Markdown parsing and syntax highlighting for technical support answers.",
  "Managing token limits efficiently while maintaining conversational context was a key learning. Next steps involve enabling the assistant to execute internal API actions on behalf of the user.",
  `<span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">React</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">OpenAI API</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Python</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Vercel</span>`,
  `<div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">-60%</div>
      <p class="text-label-md uppercase tracking-widest">Support Ticket Volume</p>
    </div>
    <div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">2.5s</div>
      <p class="text-label-md uppercase tracking-widest">Avg Response Time</p>
    </div>`
);

const contentInfraScale = buildRichContent(
  "InfraScale Ltd",
  "/images/case-studies/infrascale_inner.png",
  "DevOps Infrastructure Topology Map",
  "This dashboard is the command center for our entire engineering org. The real-time visibility has prevented several catastrophic outages.",
  "Thomas Anderson, Lead SRE",
  [
    { title: "Data Streaming Architecture", desc: "Setting up WebSocket connections for live server metrics." },
    { title: "UI Design", desc: "Creating a dark, neon-accented aesthetic for optimal visibility in NOC environments." },
    { title: "Frontend Optimization", desc: "Implementing Canvas API for rendering thousands of nodes without lag." },
    { title: "Integration & Handoff", desc: "Connecting the dashboard to their existing AWS CloudWatch alarms." }
  ],
  "InfraScale Ltd required a robust DevOps monitoring dashboard to provide their SRE teams with real-time insights into server health, node topology, and automated deployment pipelines.",
  "Visualizing complex, high-velocity data from thousands of Docker containers running across AWS was causing traditional DOM-based dashboards to crash. They needed a hyper-optimized UI utilizing WebSockets for live data streaming without memory leaks.",
  "We bypassed standard DOM rendering for the most complex visualizations, utilizing the HTML5 Canvas API within React to draw thousands of server nodes concurrently. Data is streamed in real-time via WebSockets connected to a Node.js aggregation layer that constantly polls AWS APIs and Docker daemon statistics.",
  "We learned that managing WebSocket reconnection strategies in a highly volatile network environment is critical for trust. The roadmap includes predictive outage alerts using anomaly detection.",
  `<span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Next.js</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Node.js</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">AWS</span>
    <span class="px-4 py-2 rounded bg-surface-container-highest text-on-surface font-label-md">Docker</span>`,
  `<div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">99.999%</div>
      <p class="text-label-md uppercase tracking-widest">Uptime SLA Maintained</p>
    </div>
    <div class="text-center md:text-left">
      <div class="text-4xl font-bold text-on-surface mb-2">10ms</div>
      <p class="text-label-md uppercase tracking-widest">Dashboard Latency</p>
    </div>`
);

export const caseStudiesData: CaseStudy[] = [
  {
    id: "nexus-b2b-analytics",
    title: "Nexus B2B Analytics",
    category: "SAAS",
    date: "Jul 20, 2026",
    readTime: "6 min read",
    excerpt: "Revolutionizing B2B data analytics with a modern, high-performance dashboard.",
    image: "/images/case-studies/saas_analytics.png",
    content: contentNexus,
    clientName: "Nexus Analytics",
    industry: "B2B SaaS",
    keyResult: "+350% Data Processing Speed",
  },
  {
    id: "payflow-payment-gateway",
    title: "PayFlow Payment Gateway",
    category: "FINTECH",
    date: "Jul 15, 2026",
    readTime: "8 min read",
    excerpt: "Building a secure and highly scalable fintech payment app infrastructure.",
    image: "/images/case-studies/fintech_app.png",
    content: contentPayFlow,
    clientName: "PayFlow Inc",
    industry: "Fintech",
    keyResult: "$2B+ Monthly Volume",
  },
  {
    id: "vitascan-ai-diagnostics",
    title: "VitaScan AI Diagnostics",
    category: "HEALTHCARE / AI",
    date: "Jul 10, 2026",
    readTime: "10 min read",
    excerpt: "Deploying advanced 3D scanning visualization for AI medical diagnostics.",
    image: "/images/case-studies/ai_health.png",
    content: contentVitaScan,
    clientName: "VitaScan Medical",
    industry: "Healthcare",
    keyResult: "99.8% Anomaly Detection",
  },
  {
    id: "shopgenius-engine",
    title: "ShopGenius Engine",
    category: "E-COMMERCE",
    date: "Jun 28, 2026",
    readTime: "5 min read",
    excerpt: "Implementing a sleek, AI-driven product recommendation engine for retail.",
    image: "/images/case-studies/ecommerce_rec.png",
    content: contentShopGenius,
    clientName: "ShopGenius",
    industry: "E-Commerce",
    keyResult: "+45% Cart Conversion Rate",
  },
  {
    id: "synthetix-nlp-assistant",
    title: "Synthetix NLP Assistant",
    category: "ENTERPRISE AI",
    date: "Jun 20, 2026",
    readTime: "7 min read",
    excerpt: "Creating a premium conversational UI for an enterprise-level NLP chat assistant.",
    image: "/images/case-studies/nlp_assistant.png",
    content: contentSynthetix,
    clientName: "Synthetix Enterprise",
    industry: "Enterprise AI",
    keyResult: "-60% Support Ticket Volume",
  },
  {
    id: "infrascale-automation",
    title: "InfraScale Automation",
    category: "DEVOPS",
    date: "Jun 05, 2026",
    readTime: "9 min read",
    excerpt: "Engineering a highly technical infrastructure monitoring dashboard.",
    image: "/images/case-studies/devops_dash.png",
    content: contentInfraScale,
    clientName: "InfraScale Ltd",
    industry: "DevOps",
    keyResult: "99.999% Uptime SLA",
  }
];
