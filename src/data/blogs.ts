export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  authorBio: string;
}

const defaultContent = `
<p class="text-xl text-on-surface leading-relaxed mb-12">
    Welcome to this insightful article. We dive deep into the modern digital landscape, exploring trends, strategies, and the technological advancements shaping the future.
</p>
<h2 class="font-headline-lg text-headline-lg text-on-surface">The Core Concepts</h2>
<p class="">
    As we navigate through the complexities of today's digital ecosystems, understanding the fundamental principles is paramount. We break down the key elements that drive success and innovation in this fast-paced environment.
</p>
<blockquote class="my-16 py-8 pl-8 border-l-4 border-primary bg-surface-container-low rounded-r-lg">
<p class="font-headline-md text-headline-md text-on-surface italic m-0">
    "Innovation distinguishes between a leader and a follower."
</p>
</blockquote>
<p class="">
    Stay tuned for more updates and in-depth analyses as we continue to explore the digital frontier.
</p>
`;

const defaultAuthor = {
  authorName: "Sarah Jenkins",
  authorRole: "Digital Strategist",
  authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm6vcCL-wv2_cf4o_9sU8VzIrq5eBIY06tWH08KaO7xJuFzIiotczX7oTsspzCzA6OhyYCfjMQ_dawWPKv77FkUrKyr01BmudYv9BwflgalK_o3dNpo370Myt-pxr12-_2whnskAzkPAxoFy3cgp9TeBEan-00vcTkHffesC05WqKgL00g502YMglK1BQ-NmYy-zylri_ExuLRcA4yqW1qSCerl6wl3yzkEQZhlWkY3JKo_mKK1kIpEL0ShlgInts0EhH--eJYha0", // Reusing the same image placeholder for simplicity
  authorBio: "Sarah is a seasoned digital strategist with a passion for uncovering market trends and developing innovative solutions for enterprise clients."
};

const seoContent = `
<p class="text-xl text-on-surface leading-relaxed mb-12">
    The era of keyword stuffing and superficial backlink building is over. We have entered an age where search engines operate as sophisticated semantic intelligence engines, prioritizing deep contextual understanding, user intent, and authoritative data structures over traditional matching algorithms.
</p>
<h2 class="font-headline-lg text-headline-lg text-on-surface">The Architecture of Authority</h2>
<p class="">
    Modern search algorithms are increasingly relying on Knowledge Graphs and entity-based indexing. They don't just read text; they map relationships between concepts, brands, and individuals. To achieve dominance in this landscape, a brand must establish itself as a definitive entity within its niche, projecting unshakeable digital authority.
</p>
<p class="">
    This requires a transition from basic content creation to architectural content engineering. It involves structuring data in a way that search bots can effortlessly parse, categorize, and interconnect with existing knowledge bases.
</p>
<blockquote class="my-16 py-8 pl-8 border-l-4 border-primary bg-surface-container-low rounded-r-lg">
<p class="font-headline-md text-headline-md text-on-surface italic m-0">
    "Search is no longer about matching characters; it is about mapping intent."
</p>
</blockquote>
<h2 class="font-headline-lg text-headline-lg text-on-surface">Predictive Data Modeling</h2>
<p class="">
    Anticipating user needs before they fully articulate them is the next frontier. By leveraging predictive data modeling, we can optimize content clusters not just for current search volume, but for emerging semantic trends.
</p>
<ul class="list-none space-y-4 my-8 pl-0">
<li class="flex items-start">
<span class="material-symbols-outlined text-primary mr-4 mt-1">check_circle</span>
<span class=""><strong>Semantic Clustering:</strong> Organizing topics into cohesive pillars that signal deep expertise to neural networks.</span>
</li>
<li class="flex items-start">
<span class="material-symbols-outlined text-primary mr-4 mt-1">check_circle</span>
<span class=""><strong>Intent Forecasting:</strong> Analyzing query evolution to build content that answers tomorrow's questions today.</span>
</li>
<li class="flex items-start">
<span class="material-symbols-outlined text-primary mr-4 mt-1">check_circle</span>
<span class=""><strong>Core Web Vitals Optimization:</strong> Ensuring technical delivery matches the speed of semantic processing.</span>
</li>
</ul>
<p class="">
    The brands that will thrive are those that view SEO not as a marketing channel, but as a fundamental pillar of their digital infrastructure.
</p>
`;

const seoAuthor = {
  authorName: "Marcus Thorne",
  authorRole: "Senior SEO Strategist & Intelligence Lead",
  authorImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm6vcCL-wv2_cf4o_9sU8VzIrq5eBIY06tWH08KaO7xJuFzIiotczX7oTsspzCzA6OhyYCfjMQ_dawWPKv77FkUrKyr01BmudYv9BwflgalK_o3dNpo370Myt-pxr12-_2whnskAzkPAxoFy3cgp9TeBEan-00vcTkHffesC05WqKgL00g502YMglK1BQ-NmYy-zylri_ExuLRcA4yqW1qSCerl6wl3yzkEQZhlWkY3JKo_mKK1kIpEL0ShlgInts0EhH--eJYha0",
  authorBio: "Marcus Thorne specializes in technical SEO and semantic data modeling. With over a decade of experience in digital architecture, he leads the Intelligence division at Obsidian Digital, focusing on the intersection of AI and organic search."
};


export const blogsData: BlogPost[] = [
  {
    id: "1",
    title: "The Evolution of UX Design",
    category: "UX Design",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    excerpt: "Navigating the shift from skeuomorphism to AI-driven interfaces with strategic precision.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtCOhsjOzk_otLWi8vabnKzNrrzUCwO5LCJVNP8Pa5KSRXEwBXWemHYLg8Rx9CUIWqp_Bwotm7zA1T7V6prox2qBJfKvBT5O79RI5X7X_G8gNGrbtEebYgPwXmUi_s-KDtt4Qnwip5KkTbqvfWRU_6fm7AUm8j2Q-iZdf5sCVBP1QAzWBh4awJ1fMBq1YvwujB7cRVTFWXA0Ku-X1oj_M1WzwI2ItKoTq6i0IJA2dyei5Vlo4FU_xKlW4o",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "2",
    title: "The Obsidian Protocol",
    category: "Security",
    date: "Oct 08, 2024",
    readTime: "12 min read",
    excerpt: "Implementing zero-trust architectures for distributed enterprise ecosystems.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLuTjQJgEZ2nX-ADnlUt0gBNkpUicenoFa_ncMrR2NFSQxXIuUNg89MrHVNxUtA68D2qGVVUrxk4SOeEYzY7c_geb29CIYCW7DY36OKqRmanWptu4eFoFvN5Nr92okdSGIFWTGSN2Mx_nKiOz1B05d5S7wDhtoKleW0omTG1IKS0-JElA64LhADKzp2Cf3iAipEMcZ1tkcKfa6otrdU0XFwnqeW0CffaY3me6tjiIGx5oIQf3Piu7GtWW_A",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "3",
    title: "Neural Architecture",
    category: "AI & ML",
    date: "Oct 05, 2024",
    readTime: "8 min read",
    excerpt: "Engineering neural pathways to optimize algorithmic performance and data flow.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtTfPg9GLt_Fw43px3ULBKr-MxwNRIOv7gLCSVsDAhli2n97Ga0G8tGYxhsSfsf6VbJfXUVW0Vcx2mTjSijT6JatR8S_pmKaAhoKIqstP9mh5h9Ww2DNcHzeTiCjAhTHAyxfyraOmCa7csE9JWln4Ok6sAQ8pA6oR3s4xCcWZkaNn1Zc8raHUbQbYl4l0nsv3UZfNpdJJ-bPHbFh_ReGz42IBB6r4Au3et3oPIBO_Yg9dZIYogwXPMAJEM",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "4",
    title: "Algorithm Dominance",
    category: "Technical SEO",
    date: "Oct 01, 2024",
    readTime: "6 min read",
    excerpt: "Mastering technical SEO through advanced crawlability and server response optimization.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvlp-Pyl9aDSZQUz2rEAQTsO2b7JWvMgEBz3Nf4JShBhfoaiVgUsi4fm0ZKhswv5rFTIaFXMDdXsR--ccVmz0GG1_8nxXSZI5vsdnEwttCzH4EPO39KgAU8Ku3F2WO6ZEm9DmkJIgTMP9JebzL9X5X2cGfaUgdcDINmAkknsv77ZFzFQXQirNbKYW2OuOmozm71fB18IXJElrtEiI7RiwS5vcO_xqd90_W45kujVZUWamw0IdiDnwoxS1s",
    content: seoContent,
    ...seoAuthor
  },
  {
    id: "5",
    title: "Search Sovereignty",
    category: "Strategy",
    date: "Sep 28, 2024",
    readTime: "10 min read",
    excerpt: "Navigating the futuristic data landscape of modern search engine results.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLueuQETXgDGgYQYdsPrlrydBJXlm0-9Vp1YpUpnD8oJBN78AjCp2Z-r68-8OoLXR-PXjD2J6lj8xStEERnhXnX6hnOl5XXNaOI7OgU3kQRsOeycCrv0-vR7Woo2MQ2R4pv-bK-TChCm4joHHEqmqUiWSxEEtKKsM-mwXho2ix2noXVeKBDAJG7UechBEh2sgA0VVkWSvV_hOJhuc-4GrEmMcIuu-0vsOIIZum3IPGJ_HpoIx0brzohLNA",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "6",
    title: "Neural Analytics Engine",
    category: "Analytics",
    date: "Sep 25, 2024",
    readTime: "7 min read",
    excerpt: "Real-time data streams and predictive modeling for high-end tech ecosystems.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvr8IOr674jzM-1tzPpSWH9Q4uGZp30vXyBiHrNU7RoCysK6R1xHYWE9e3oYMUAhn3KDNDR56iEorirGIvOXZMLbJF5b_O-kYbFCxA25CLxEmBHl852PQREiwLgQic-QsAdWt0P_ITGaJN_Q6jAWFNnDOOqnHQLFHfUhrexPS-WEr0yw209AL67z3wc8O5EHNtAlfZL2K4Si78FZz0yyysRC2K674BoJs1PLW-TM-PjLgWPavyS4rer8e4",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "7",
    title: "Organic Intelligence",
    category: "Growth",
    date: "Sep 20, 2024",
    readTime: "9 min read",
    excerpt: "Achieving search dominance through ascending data waves and architectural precision.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLt4bJr-cIoGPPbDuB0jYneNuMhVYSC494N1tjCBLDf1D5TjwmsTSfH5pnY1Hfavtk7xHFUoMmGnEQDtAZhVuHtKaFCbFhWTgA1NYlkrvQ9ZH73xKZwQwc0W-MzT2mJ9XrgfiANSIGF--eDKokJIg4JPWPiDLP13IJI4bjLgBezAqFu52_8OFySWQDQ1aKRY3Mzqx9_wFxbAoyLrYjGy0Xn0Grrq8zTKpG3JBJOHpjnuNPoNCOuFRazZ6UU",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "8",
    title: "Market Synthesis",
    category: "Social",
    date: "Sep 15, 2024",
    readTime: "5 min read",
    excerpt: "Visualizing social media connectivity and brand engagement through neural nodes.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLv0DecFAPA_nGuQlVtShtrGp-wU90xOEw2iJP9kSRy82vpJeZhV98Lys2N92UR4D8a4wcOI0fhnrw3GUg6SMpFkoBBYeV0iQms_tr8gp7OMZvQ_TfWV542Fo2VKb8ciW0p3i-yRBLR8zt8U0hqA4cpdtI37IO7_eNzZkxzeTLF1SIu_IEkaoC7buK18t6_RGzrLLuo3cEdj2_qpBSGpCn8uFly7o_HUwOPjEpkPbXx67zvHBBrMipiKLEg",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "9",
    title: "Technical Dominance",
    category: "SEO",
    date: "Sep 10, 2024",
    readTime: "11 min read",
    excerpt: "Leveraging data nodes and ascending bar charts for organic search growth.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLt-VZgt96AY0oHMrMNC5Lx4HNNHP0tW8YUCwFh9eX2V-6E1CdBu6uHdmWWk6awxcyWin3Ajp8IHmyd6_2PnAu43Hv3DXaRTOu1wk131pS5D9PRa-QR15Z5-3xoLDOJ5w_rF93XTCZLleS0sj2T8CK3Fc_PLlzGBWGs9jfzhUX8ywcNRrwER3BPbtdAiz4hPr1x87u6O_EWe6RiFrUWFSM685DzVKN0hPbHewOOhyIJMVEKK3EG1gZZo5qQ",
    content: seoContent,
    ...seoAuthor
  },
  {
    id: "10",
    title: "Data Sovereignty",
    category: "Data",
    date: "Sep 05, 2024",
    readTime: "8 min read",
    excerpt: "Securing the digital frontier with strategic foresight and technical precision.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLueuQETXgDGgYQYdsPrlrydBJXlm0-9Vp1YpUpnD8oJBN78AjCp2Z-r68-8OoLXR-PXjD2J6lj8xStEERnhXnX6hnOl5XXNaOI7OgU3kQRsOeycCrv0-vR7Woo2MQ2R4pv-bK-TChCm4joHHEqmqUiWSxEEtKKsM-mwXho2ix2noXVeKBDAJG7UechBEh2sgA0VVkWSvV_hOJhuc-4GrEmMcIuu-0vsOIIZum3IPGJ_HpoIx0brzohLNA",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "11",
    title: "Semantic Intelligence",
    category: "AI",
    date: "Aug 30, 2024",
    readTime: "6 min read",
    excerpt: "Understanding the neural pathways of machine learning for digital mastery.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLtTfPg9GLt_Fw43px3ULBKr-MxwNRIOv7gLCSVsDAhli2n97Ga0G8tGYxhsSfsf6VbJfXUVW0Vcx2mTjSijT6JatR8S_pmKaAhoKIqstP9mh5h9Ww2DNcHzeTiCjAhTHAyxfyraOmCa7csE9JWln4Ok6sAQ8pA6oR3s4xCcWZkaNn1Zc8raHUbQbYl4l0nsv3UZfNpdJJ-bPHbFh_ReGz42IBB6r4Au3et3oPIBO_Yg9dZIYogwXPMAJEM",
    content: defaultContent,
    ...defaultAuthor
  },
  {
    id: "12",
    title: "Digital Mastery",
    category: "Mastery",
    date: "Aug 25, 2024",
    readTime: "14 min read",
    excerpt: "The ultimate guide to strategic precision in the modern digital era.",
    image: "https://lh3.googleusercontent.com/aida/AP1WRLvr8IOr674jzM-1tzPpSWH9Q4uGZp30vXyBiHrNU7RoCysK6R1xHYWE9e3oYMUAhn3KDNDR56iEorirGIvOXZMLbJF5b_O-kYbFCxA25CLxEmBHl852PQREiwLgQic-QsAdWt0P_ITGaJN_Q6jAWFNnDOOqnHQLFHfUhrexPS-WEr0yw209AL67z3wc8O5EHNtAlfZL2K4Si78FZz0yyysRC2K674BoJs1PLW-TM-PjLgWPavyS4rer8e4",
    content: defaultContent,
    ...defaultAuthor
  }
];
