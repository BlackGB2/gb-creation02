export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface SiteSettings {
  brandName: string;
  siteTitle: string;
  announcementBadge: string;
  announcementBadgeLink: string;
  heroHeadline: string;
  heroBio: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  heroAvatar: string;
  socialLinks: SocialLink[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface WorkflowItem {
  step: string;
  title: string;
  description: string;
}

export interface AboutData {
  headline: string;
  profileImage: string;
  shortBio: string;
  story: string[];
  stats: StatItem[];
  skillCategories: SkillCategory[];
  workflow: WorkflowItem[];
}

export interface EducationItem {
  _id?: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  type: 'degree' | 'certification' | 'course' | 'award';
  badgeLabel: string;
  description: string;
  skillsLearned: string[];
  credentialUrl?: string;
  order: number;
}

export interface ProjectItem {
  _id?: string;
  title: string;
  slug: { current: string } | string;
  category: string;
  featured: boolean;
  excerpt: string;
  fullDescription: string;
  mainImageUrl: string;
  technologies: string[];
  deliverables: string[];
  client: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  order: number;
}

export interface ContactData {
  email: string;
  phone: string;
  location: string;
  timezone: string;
  availabilityNotice: string;
  responseTime: string;
  socialLinks: SocialLink[];
}

export const mockSiteSettings: SiteSettings = {
  brandName: "GB.",
  siteTitle: "Gihan Bhathi — Design Engineer & Creative Technologist",
  announcementBadge: "Available for Freelance & New Projects ->",
  announcementBadgeLink: "/contact",
  heroHeadline: "Crafting digital products with precision, code & soul.",
  heroBio:
    "I am a design engineer blending modern front-end craftsmanship with clean aesthetics. Specializing in high-performance web applications, interactive design systems, and thoughtful digital experiences.",
  primaryCtaText: "View My Work",
  primaryCtaLink: "/work",
  secondaryCtaText: "Contact Me",
  secondaryCtaLink: "/contact",
  heroAvatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com", handle: "github.com/gbhathi" },
    { platform: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/gihan-bhathi" },
    { platform: "X / Twitter", url: "https://x.com", handle: "@gihanbhathi" },
    { platform: "Dribbble", url: "https://dribbble.com", handle: "dribbble.com/gbhathi" },
  ],
};

export const mockAboutData: AboutData = {
  headline: "Merging engineering rigor with timeless, human-centered design.",
  profileImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85",
  shortBio:
    "With over 6 years of experience building modern web products, I live at the intersection of design, code, and user empathy.",
  story: [
    "My journey began with a obsession for how things feel on screen. Early on, I realized the most memorable software isn't just visually striking or technically complex—it is the subtle synergy between both. When motion is fluid, typography is intentional, and response times are instantaneous, software feels like an extension of thought.",
    "Over the past six years, I have collaborated with venture-backed startups and established engineering teams to architect scalable front-end systems, establish comprehensive design tokens, and launch products used by tens of thousands of active users every day.",
    "Today, I operate as an independent Design Engineer & Creative Technologist. I partner directly with founders, product leaders, and design teams to turn ambitious visions into robust, production-ready web applications.",
  ],
  stats: [
    { value: "06+", label: "Years of Experience" },
    { value: "40+", label: "Delivered Web Projects" },
    { value: "99.8%", label: "Client Satisfaction" },
    { value: "<40ms", label: "Target Micro-Latency" },
  ],
  skillCategories: [
    {
      category: "Design & Craft",
      skills: [
        "Design Systems",
        "Figma Master Components",
        "Micro-Interactions",
        "Geometric Typography",
        "Interactive Prototyping",
        "Design Tokens",
        "Accessibility (WCAG AAA)",
      ],
    },
    {
      category: "Frontend Engineering",
      skills: [
        "React & Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 Canvas & 2D Physics",
        "State Management & Zustand",
        "Responsive Architecture",
        "Web Vitals Optimization",
      ],
    },
    {
      category: "Content & Backend",
      skills: [
        "Sanity Headless CMS",
        "GROQ & GraphQL",
        "Node.js & Edge Runtimes",
        "RESTful APIs & Webhooks",
        "PostgreSQL & Supabase",
        "Vercel Deployment",
      ],
    },
    {
      category: "Workflow & Tooling",
      skills: [
        "Git & Modern Version Control",
        "Storybook Component Isolation",
        "Automated CI/CD Workflows",
        "Unit & E2E Testing",
        "Performance Profiling",
        "Agile Sprint Delivery",
      ],
    },
  ],
  workflow: [
    {
      step: "01",
      title: "Discovery & Architectural Blueprint",
      description:
        "Every successful project starts with clarity. We dissect your user personas, product goals, brand aesthetics, and technical constraints to establish a bulletproof roadmap.",
    },
    {
      step: "02",
      title: "High-Fidelity Design & Interaction Prototype",
      description:
        "Translating ideas into crisp layouts in Figma with exact typography scales, responsive grids, and interactive prototypes that validate every gesture before a line of code is written.",
    },
    {
      step: "03",
      title: "Clean Modular Development",
      description:
        "Engineering your application with typed components, atomic design standards, and seamless Sanity CMS integration, ensuring peak rendering speeds and intuitive editorial control.",
    },
    {
      step: "04",
      title: "Polish, Audit & Zero-Downtime Launch",
      description:
        "Deep performance profiling, 100/100 Lighthouse audits, cross-browser stress testing, SEO optimization, and smooth deployment to production edge networks.",
    },
  ],
};

export const mockEducationData: EducationItem[] = [
  {
    _id: "edu-1",
    degree: "Bachelor of Science in Computer Science & Interaction",
    institution: "University of Technology & Applied Sciences",
    location: "California, USA",
    period: "2018 - 2022",
    type: "degree",
    badgeLabel: "First Class Honours (GPA 3.92/4.0)",
    description:
      "Comprehensive curriculum focused on algorithms, software architecture, human-computer interaction, visual interface design, and distributed systems. Recipient of the Annual Dean’s Award for Outstanding Technical Capstone.",
    skillsLearned: [
      "Human-Computer Interaction",
      "Software Systems Design",
      "Computer Graphics & Canvas",
      "Object-Oriented Design",
      "Data Structures & Algorithms",
    ],
    credentialUrl: "https://university.example.edu",
    order: 1,
  },
  {
    _id: "edu-2",
    degree: "Advanced Design Systems & Micro-Interactions Mastery",
    institution: "Interaction Design Institute",
    location: "Online / San Francisco",
    period: "2023",
    type: "certification",
    badgeLabel: "Top 2% Distinction",
    description:
      "Specialized training in building enterprise-grade multi-brand design tokens, fluid CSS/Canvas physics animations, and accessibility-first web components that meet strict WCAG AAA guidelines.",
    skillsLearned: [
      "Design Token Pipelines",
      "Subtle Physics & Spring Animations",
      "WCAG 2.2 AAA Accessibility",
      "Component Library Architecture",
    ],
    credentialUrl: "https://certificate.example.com/ds-mastery",
    order: 2,
  },
  {
    _id: "edu-3",
    degree: "Sanity CMS Certified Content Engineer",
    institution: "Sanity.io Official Certification",
    location: "Global Remote",
    period: "2024",
    type: "certification",
    badgeLabel: "Official Certified",
    description:
      "Deep validation of schema modeling, GROQ query optimization, real-time live preview setups, embedded Sanity Studio custom tools, and automated content migration pipelines.",
    skillsLearned: [
      "Headless Content Modeling",
      "Advanced GROQ Queries",
      "Sanity Studio Customization",
      "Live Visual Editing & Draft Mode",
    ],
    credentialUrl: "https://sanity.io/certificates/example",
    order: 3,
  },
  {
    _id: "edu-4",
    degree: "Next.js & Modern Web Architecture Specialization",
    institution: "Frontend Masters & Vercel Academy",
    location: "Remote Cohort",
    period: "2023 - 2024",
    type: "course",
    badgeLabel: "Excellence Certificate",
    description:
      "In-depth exploration of App Router server components, streaming SSR, edge caching strategies, dynamic OG image generation, and modern front-end performance profiling.",
    skillsLearned: [
      "React Server Components (RSC)",
      "Next.js App Router Architecture",
      "Edge Middleware & CDN Caching",
      "Core Web Vitals Optimization",
    ],
    credentialUrl: "https://frontendmasters.com/certificates/example",
    order: 4,
  },
];

export const mockProjectsData: ProjectItem[] = [
  {
    _id: "proj-1",
    title: "Chronicle Design System",
    slug: "chronicle-design-system",
    category: "Design System",
    featured: true,
    excerpt:
      "A clean, modular design language and accessible React component library built for rapid cross-functional product development.",
    fullDescription:
      "Chronicle is a production-tested design system engineered to bridge the gap between Figma design files and React engineering workflows. It provides over 80 atomic components, automated token synchronizers, and comprehensive documentation. Built with zero-runtime CSS variables, strict TypeScript types, and full keyboard navigation support.",
    mainImageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma Tokens", "Storybook", "Radix UI"],
    deliverables: [
      "80+ Production Components",
      "Automated Design Token Sync",
      "Interactive Documentation Portal",
      "WCAG AAA Keyboard Navigation",
    ],
    client: "Aether Cloud Systems",
    year: "2024",
    liveUrl: "https://example.com/chronicle",
    githubUrl: "https://github.com/example/chronicle-system",
    order: 1,
  },
  {
    _id: "proj-2",
    title: "Apex Telemetry & Analytics Dashboard",
    slug: "apex-telemetry-dashboard",
    category: "Web App",
    featured: true,
    excerpt:
      "High-throughput developer metrics dashboard featuring real-time event streaming and customizable visual widget canvases.",
    fullDescription:
      "Apex is an ultra-fast developer observability console created for monitoring cloud infrastructure and microservices. Featuring smooth Canvas-based time-series charts, modular grid layouts, and sub-50ms query responses. Connected directly to Sanity CMS for editorial release notes and feature flags.",
    mainImageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    technologies: ["Next.js", "TypeScript", "Canvas API", "Tailwind CSS", "Sanity CMS", "Zustand"],
    deliverables: [
      "Real-time WebSocket Ingestion",
      "Custom 60fps Canvas Chart Engine",
      "Draggable Widget Grid Architecture",
      "Role-Based Access Control",
    ],
    client: "Apex Observability Inc",
    year: "2024",
    liveUrl: "https://example.com/apex",
    githubUrl: "https://github.com/example/apex-telemetry",
    order: 2,
  },
  {
    _id: "proj-3",
    title: "Prism AI Studio & Prompt Lab",
    slug: "prism-ai-studio",
    category: "Mobile & AI",
    featured: true,
    excerpt:
      "Interactive generative playground and prompt asset curator built for digital artists and creative directors.",
    fullDescription:
      "Prism empowers creative teams to synthesize, compare, and organize generative AI visual experiments in one unified workspace. Includes side-by-side prompt diffing, high-resolution canvas zoom inspectors, tag clustering, and instant export pipelines to production media repositories.",
    mainImageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Web Workers", "Sanity CMS"],
    deliverables: [
      "Prompt Diff & History Engine",
      "High-Res Zoom & Compare Canvas",
      "Tag Cluster Search System",
      "Mobile Responsive Touch Experience",
    ],
    client: "Prism Creative Labs",
    year: "2023",
    liveUrl: "https://example.com/prism",
    githubUrl: "https://github.com/example/prism-studio",
    order: 3,
  },
  {
    _id: "proj-4",
    title: "Solfeggio Soundscapes",
    slug: "solfeggio-soundscapes",
    category: "Creative Tech",
    featured: false,
    excerpt:
      "Interactive audio-visual frequency synthesizer utilizing Web Audio synthesis and particle canvas dynamics.",
    fullDescription:
      "An exploratory web experience exploring resonant harmonics, visual mathematics, and binaural audio. Solfeggio generates soothing real-time soundscapes based on natural frequencies while projecting responsive particle waves on a customized HTML5 canvas engine.",
    mainImageUrl:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85",
    technologies: ["Web Audio API", "HTML5 Canvas", "TypeScript", "Next.js", "Tailwind CSS"],
    deliverables: [
      "Polyphonic Web Audio Synthesizer",
      "Responsive Particle Wave Physics",
      "Custom Preset Preset Manager",
      "Zero-Latency Audio Worklet Engine",
    ],
    client: "Independent Creative Project",
    year: "2023",
    liveUrl: "https://example.com/solfeggio",
    githubUrl: "https://github.com/example/solfeggio",
    order: 4,
  },
  {
    _id: "proj-5",
    title: "Monolith Editorial Commerce",
    slug: "monolith-editorial-commerce",
    category: "SaaS Platform",
    featured: true,
    excerpt:
      "Headless luxury lifestyle storefront integrating editorial storytelling with instant cart transitions and Sanity CMS.",
    fullDescription:
      "Monolith blends magazine-style digital editorial design with a performant e-commerce backend. Built using Next.js App Router and Sanity CMS, the platform delivers instantaneous page transitions, localized currencies, dynamic lookbooks, and an intuitive custom studio editor.",
    mainImageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "TypeScript", "Stripe API", "Edge Middleware"],
    deliverables: [
      "Dynamic Editorial Lookbook Modules",
      "Sub-100ms Page Navigation",
      "Optimistic Cart Drawer System",
      "Sanity Studio Content Authoring Suite",
    ],
    client: "Monolith Brands Group",
    year: "2024",
    liveUrl: "https://example.com/monolith",
    githubUrl: "https://github.com/example/monolith-commerce",
    order: 5,
  },
  {
    _id: "proj-6",
    title: "Verve Orbital Celestial Explorer",
    slug: "verve-orbital-explorer",
    category: "Creative Tech",
    featured: false,
    excerpt:
      "3D educational astrophysics simulator allowing students and stargazers to trace planetary orbits in real time.",
    fullDescription:
      "Built in collaboration with science educators, Verve brings planetary physics to the browser. Users can adjust gravitational constants, inspect planetary textures, view historical celestial events, and inspect key data points inside an intuitive modal drawer.",
    mainImageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    technologies: ["HTML5 Canvas", "WebGL", "TypeScript", "Next.js", "Tailwind CSS"],
    deliverables: [
      "Gravitational Keplerian Orbit Physics",
      "Interactive Planet Inspector Modal",
      "Time Scrubbing Simulation Controls",
      "Accessible Audio Narration Guide",
    ],
    client: "Cosmos Education Foundation",
    year: "2023",
    liveUrl: "https://example.com/verve",
    githubUrl: "https://github.com/example/verve-explorer",
    order: 6,
  },
];

export const mockContactData: ContactData = {
  email: "hello@gihanbhathi.dev",
  phone: "+1 (555) 382-9014",
  location: "San Francisco, CA & Remote Worldwide",
  timezone: "PST (UTC-8) / Flexible Global Overlap",
  availabilityNotice:
    "Currently open for Q1/Q2 freelance design engineering contracts, design system consultations, and select full-time roles.",
  responseTime: "Guaranteed personal response within 24 hours.",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com", handle: "github.com/gbhathi" },
    { platform: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/gihan-bhathi" },
    { platform: "X / Twitter", url: "https://x.com", handle: "@gihanbhathi" },
    { platform: "Dribbble", url: "https://dribbble.com", handle: "dribbble.com/gbhathi" },
  ],
};
